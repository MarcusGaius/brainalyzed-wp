/******/ (function () {
  // webpackBootstrap
  console.log("radi poso");
  /******/ var __webpack_modules__ = {
    /***/ "./src/crypto/data-handlers.js":
      /*!*************************************!*\
  !*** ./src/crypto/data-handlers.js ***!
  \*************************************/
      /***/ function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ fetchCandleData: function () {
            return /* binding */ fetchCandleData;
          },
          /* harmony export */ fetchPairlist: function () {
            return /* binding */ fetchPairlist;
          },
          /* harmony export */ fetchTradeData: function () {
            return /* binding */ fetchTradeData;
          },
          /* harmony export */
        });
        /* harmony import */ var _candleData_json__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! _candleData.json */ "./src/crypto/_candleData.json"
          );
        /* harmony import */ var _tradeData_json__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! _tradeData.json */ "./src/crypto/_tradeData.json"
          );
        /* global brainalyzed_wp */

        var IS_DEV = "development" === "development";
        var whitelist = [
          "BTC/USDT",
          "ETH/USDT",
          "MBOX/USDT",
          "BUSD/USDT",
          "SHIB/USDT",
          "SAND/USDT",
          "SOL/USDT",
          "REQ/USDT",
          "LUNA/USDT",
          "MATIC/USDT",
          "GALA/USDT",
          "MANA/USDT",
          "AVAX/USDT",
          "TLM/USDT",
          "ALICE/USDT",
          "TRX/USDT",
          "CTK/USDT",
          "DOT/USDT",
          "SANTOS/USDT",
          "XRP/USDT",
        ].map(function (e) {
          return {
            name: e,
            frequency: "5m",
            delayed: !!Math.round(Math.random()),
          };
        });
        var fetchCandleData = function fetchCandleData(name, frequency, limit) {
          if (IS_DEV)
            return Promise.resolve(
              _candleData_json__WEBPACK_IMPORTED_MODULE_0__
            );
          var body = new FormData();
          body.append("action", "data");
          body.append("pair", name);
          body.append("frequency", frequency);
          body.append("limit", limit);
          return fetch(brainalyzed_wp.ajax_url, {
            headers: {
              accept: "application/json",
            },
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            redirect: "follow",
            referrerPolicy: "no-referrer",
            body: body,
          })
            .then(function (res) {
              return res.json();
            })
            .then(
              function (data) {
                return data;
              },
              function (err) {
                throw new Error(
                  "Most likely this error occured because server did not respond with JSON. Message was ".concat(
                    err.message
                  )
                );
              }
            );
        };
        var fetchPairlist = function fetchPairlist() {
          if (IS_DEV) return Promise.resolve(whitelist);
          var body = new FormData();
          body.append("action", "pairs");
          return fetch(brainalyzed_wp.ajax_url, {
            headers: {
              accept: "application/json",
            },
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            redirect: "follow",
            referrerPolicy: "no-referrer",
            body: body,
          })
            .then(function (res) {
              return res.json();
            })
            .then(
              function (data) {
                return data;
              },
              function (err) {
                throw new Error(
                  "Most likely this error occured because server did not respond with JSON. Message was ".concat(
                    err.message
                  )
                );
              }
            );
        };
        var fetchTradeData = function fetchTradeData() {
          if (IS_DEV)
            return Promise.resolve(
              _tradeData_json__WEBPACK_IMPORTED_MODULE_1__
            );
          var body = new FormData();
          body.append("action", "trades");
          return fetch(brainalyzed_wp.ajax_url, {
            headers: {
              accept: "application/json",
            },
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            redirect: "follow",
            referrerPolicy: "no-referrer",
            body: body,
          })
            .then(function (res) {
              return res.json();
            })
            .then(
              function (data) {
                return data;
              },
              function (err) {
                throw new Error(
                  "Most likely this error occured because server did not respond with JSON. Message was ".concat(
                    err.message
                  )
                );
              }
            );
        };

        /***/
      },

    /***/ "./src/crypto/helpers.js":
      /*!*******************************!*\
  !*** ./src/crypto/helpers.js ***!
  \*******************************/
      /***/ function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ extractSignalData: function () {
            return /* binding */ extractSignalData;
          },
          /* harmony export */ eventRegistry: function () {
            return /* binding */ eventRegistry;
          },
          /* harmony export */
        });
        function _toConsumableArray(arr) {
          return (
            _arrayWithoutHoles(arr) ||
            _iterableToArray(arr) ||
            _unsupportedIterableToArray(arr) ||
            _nonIterableSpread()
          );
        }

        function _nonIterableSpread() {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }

        function _unsupportedIterableToArray(o, minLen) {
          if (!o) return;
          if (typeof o === "string") return _arrayLikeToArray(o, minLen);
          var n = Object.prototype.toString.call(o).slice(8, -1);
          if (n === "Object" && o.constructor) n = o.constructor.name;
          if (n === "Map" || n === "Set") return Array.from(o);
          if (
            n === "Arguments" ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          )
            return _arrayLikeToArray(o, minLen);
        }

        function _iterableToArray(iter) {
          if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter))
            return Array.from(iter);
        }

        function _arrayWithoutHoles(arr) {
          if (Array.isArray(arr)) return _arrayLikeToArray(arr);
        }

        function _arrayLikeToArray(arr, len) {
          if (len == null || len > arr.length) len = arr.length;
          for (var i = 0, arr2 = new Array(len); i < len; i++) {
            arr2[i] = arr[i];
          }
          return arr2;
        }

        /* global moment */
        var extractSignalData = function extractSignalData(candleData) {
          var signals = candleData.data
            .map(function (dataArray) {
              return {
                date: moment(
                  dataArray[candleData.columns.indexOf("date")]
                ).valueOf(),
                buy: dataArray[candleData.columns.indexOf("buy")],
                sell: dataArray[candleData.columns.indexOf("sell")],
              };
            })
            .filter(function (e) {
              return e.buy || e.sell;
            })
            .map(function (signal) {
              return {
                timestamp: signal.date,
                signalType: signal.buy ? "BUY" : "SELL",
              };
            });
          return signals;
        };
        var eventRegistry = (function () {
          var handlers = new Map();
          return {
            addEventListener: function addEventListener(element, event, fn) {
              var table = handlers.has(element) ? handlers.get(element) : {};
              table[event] = table[event] || [];
              table[event].push(fn);
              handlers.set(element, table);
              element.addEventListener(event, fn);
            },
            clear: function clear(root) {
              _toConsumableArray(root.children).forEach(function (e) {
                if (handlers.has(e)) {
                  var table = handlers.get(e);
                  Object.keys(table).forEach(function (event) {
                    table[event].forEach(function (handler) {
                      e.removeEventListener(event, handler);
                      console.log("clearing from: ", e);
                    });
                  });
                }

                if (e.children.length) {
                  _toConsumableArray(e.children).forEach(eventRegistry.clear);
                }
              });

              if (handlers.has(root)) {
                var table = handlers.get(root);
                Object.keys(table).forEach(function (event) {
                  table[event].forEach(function (handler) {
                    root.removeEventListener(event, handler);
                  });
                });
              }
            },
          };
        })();

        /***/
      },

    /***/ "./src/crypto/oldfiles/_mitar.js":
      /*!***************************************!*\
  !*** ./src/crypto/oldfiles/_mitar.js ***!
  \***************************************/
      /***/ function () {
        function asyncGeneratorStep(
          gen,
          resolve,
          reject,
          _next,
          _throw,
          key,
          arg
        ) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }
          if (info.done) {
            resolve(value);
          } else {
            Promise.resolve(value).then(_next, _throw);
          }
        }

        function _asyncToGenerator(fn) {
          return function () {
            var self = this,
              args = arguments;
            return new Promise(function (resolve, reject) {
              var gen = fn.apply(self, args);
              function _next(value) {
                asyncGeneratorStep(
                  gen,
                  resolve,
                  reject,
                  _next,
                  _throw,
                  "next",
                  value
                );
              }
              function _throw(err) {
                asyncGeneratorStep(
                  gen,
                  resolve,
                  reject,
                  _next,
                  _throw,
                  "throw",
                  err
                );
              }
              _next(undefined);
            });
          };
        }

        /* eslint-disable prefer-destructuring */

        /* eslint-disable no-multi-assign */

        /* eslint-disable no-param-reassign */

        /* eslint-disable no-undef */
        (function () {
          var _ref = _asyncToGenerator(
            /*#__PURE__*/ regeneratorRuntime.mark(function _callee(
              ntFetch,
              initData,
              initProfit,
              initSignal,
              initPicker
            ) {
              var fetch,
                creds,
                token,
                data,
                profit,
                whitelist,
                signals,
                lastSignal;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch ((_context.prev = _context.next)) {
                    case 0:
                      fetch = function fetch(path) {
                        var base =
                          "https://freqtrade-demo.brainalyzed.com/api/v1";

                        for (
                          var _len = arguments.length,
                            rest = new Array(_len > 1 ? _len - 1 : 0),
                            _key = 1;
                          _key < _len;
                          _key++
                        ) {
                          rest[_key - 1] = arguments[_key];
                        }

                        return ntFetch.apply(
                          void 0,
                          [base + path].concat(rest)
                        );
                      };

                      creds = "ZnJlcXRyYWRlcjp0ZXN0dGVzdA==";
                      _context.next = 4;
                      return fetch("/token/login", {
                        method: "POST",
                        headers: {
                          Authorization: "Basic ".concat(creds), // 'Content-Type': 'application/json',
                        },
                        credentials: "include",
                      })
                        .then(function (res) {
                          return res.json();
                        })
                        .then(function (data) {
                          return data.access_token;
                        });

                    case 4:
                      token = _context.sent;
                      _context.next = 7;
                      return fetch(
                        "/pair_candles?pair=BTC%2FUSDT&timeframe=5m&limit=500",
                        {
                          headers: {
                            Authorization: "Bearer ".concat(token),
                          },
                        }
                      ).then(function (res) {
                        return res.json();
                      });

                    case 7:
                      data = _context.sent;
                      _context.next = 10;
                      return fetch("/trades", {
                        headers: {
                          Authorization: "Bearer ".concat(token),
                        },
                      }).then(function (res) {
                        return res.json();
                      });

                    case 10:
                      profit = _context.sent;
                      _context.next = 13;
                      return fetch("/whitelist", {
                        headers: {
                          Authorization: "Bearer ".concat(token),
                        },
                      })
                        .then(function (res) {
                          return res.json();
                        })
                        .then(function (resp) {
                          return resp.whitelist.map(function (e) {
                            return {
                              name: e,
                              frequency: "5m",
                              delayed: !!Math.round(Math.random()),
                            };
                          });
                        });

                    case 13:
                      whitelist = _context.sent;
                      signals = data.data
                        .map(function (dataArray) {
                          return {
                            date: moment(
                              dataArray[data.columns.indexOf("date")]
                            ).valueOf(),
                            buy: dataArray[data.columns.indexOf("buy")],
                            sell: dataArray[data.columns.indexOf("sell")],
                          };
                        })
                        .filter(function (e) {
                          return e.buy || e.sell;
                        })
                        .map(function (signal) {
                          return {
                            timestamp: signal.date,
                            signalType: signal.buy ? "BUY" : "SELL",
                          };
                        });
                      lastSignal = signals[signals.length - 1]; // initPicker(whitelist)
                    // initData(data)
                    // initProfit(profit)
                    // initSignal(lastSignal.timestamp, lastSignal.signalType)

                    case 16:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            })
          );

          return function (_x, _x2, _x3, _x4, _x5) {
            return _ref.apply(this, arguments);
          };
        })()(
          fetch // dataCharter.setData.bind(dataCharter),
          // profitCharter.setProfitData.bind(profitCharter),
          // signalHighlight.setData.bind(signalHighlight),
          // app.setPairs.bind(app)
        );

        /***/
      },

    /***/ "./src/crypto/signal.js":
      /*!******************************!*\
  !*** ./src/crypto/signal.js ***!
  \******************************/
      /***/ function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ Signal: function () {
            return /* binding */ Signal;
          },
          /* harmony export */
        });
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps) _defineProperties(Constructor.prototype, protoProps);
          if (staticProps) _defineProperties(Constructor, staticProps);
          return Constructor;
        }

        /* global moment */
        var namespace = "http://www.w3.org/2000/svg";
        var interval = null;
        var Signal = /*#__PURE__*/ (function () {
          function Signal(props) {
            _classCallCheck(this, Signal);

            this.timestamp = null;
            this.signalType = "";
          }

          _createClass(Signal, [
            {
              key: "setData",
              value: function setData(timestamp, signalType) {
                this.timestamp = timestamp;
                this.signalType = signalType;
                clearInterval(interval);
                this.render();
              },
            },
            {
              key: "updateTime",
              value: function updateTime(spanElement) {
                var elapsedSeconds = Math.round(
                  (moment(Date.now()).valueOf() - this.timestamp) / 1000
                );
                var elapsedMinutes = Math.floor(elapsedSeconds / 60);
                var elapsedHours = Math.floor(elapsedMinutes / 60);
                var elapsedDays = Math.floor(elapsedHours / 24);
                elapsedSeconds -= elapsedMinutes * 60;
                elapsedMinutes -= elapsedHours * 60;
                elapsedHours -= elapsedDays * 24; // eslint-disable-next-line no-param-reassign

                spanElement.innerHTML = ""
                  .concat(elapsedDays ? "".concat(elapsedDays, "d ") : "")
                  .concat(elapsedHours ? "".concat(elapsedHours, "h ") : "")
                  .concat(elapsedMinutes ? "".concat(elapsedMinutes, "m ") : "")
                  .concat(
                    elapsedSeconds ? "".concat(elapsedSeconds, "s ") : "",
                    " ago"
                  );
              },
            },
            {
              key: "render",
              value: function render() {
                var _this = this;

                var color = this.signalType === "BUY" ? "positive" : "negative";
                var signalPanel = document.getElementById("signal-panel");
                signalPanel.innerHTML = "";
                var signalSVG = document.createElementNS(namespace, "svg");
                signalSVG.id = "signal-svg";
                signalSVG.setAttributeNS(null, "version", "1.1");
                signalSVG.setAttribute("xmlns", "http://www.w3.org/2000/svg");
                signalSVG.setAttributeNS(null, "viewBox", "-17.5 -75 125 250");
                signalSVG.setAttributeNS(null, "preserveAspectRatio", "none");
                signalPanel.appendChild(signalSVG);
                var signalDIV = document.createElement("div");
                signalDIV.id = "signal-div";
                var signalSPAN = document.createElement("span");
                signalSPAN.id = "signal-span";
                signalSPAN.innerHTML = this.signalType;
                signalSPAN.classList.add(color);
                signalDIV.appendChild(signalSPAN);
                var signalTIME = document.createElement("span");
                signalTIME.id = "signal-time";
                signalTIME.classList.add(color);
                signalDIV.appendChild(signalTIME);
                signalPanel.appendChild(signalDIV);
                interval = setInterval(function () {
                  return _this.updateTime(signalTIME);
                }, 1000);
                var buoyStem = document.createElementNS(namespace, "path");
                buoyStem.classList.add("buoy-stem");
                buoyStem.setAttributeNS(
                  null,
                  "d",
                  "M 47.5 15.5 L 48 24 L 52 24 L 52.5 15.5 Z"
                );
                buoyStem.classList.add(color);
                signalSVG.appendChild(buoyStem);
                var buoyHead = document.createElementNS(namespace, "circle");
                buoyHead.classList.add("buoy-head");
                buoyHead.setAttributeNS(null, "cx", 50);
                buoyHead.setAttributeNS(null, "cy", 10);
                buoyHead.setAttributeNS(null, "r", 6);
                buoyHead.classList.add(color);
                signalSVG.appendChild(buoyHead);
                var buoyBody = document.createElementNS(namespace, "path");
                buoyBody.classList.add("buoy-body");
                buoyBody.setAttributeNS(null, "mask", "url(#holesMask)");
                buoyBody.setAttributeNS(
                  null,
                  "d", // eslint-disable-next-line max-len
                  "M 45 24 L 43 71.5 L 40 71.5 L 40.5 76 L 37 76 L 37.5 72 C 38 67, 31 67, 31.5 72 L 32 76 L 28.5 76 L 30.5 91 L 69.5 91 L 71.5 76 L 68 76 L 68.5 72 C 69 67, 62 67, 62.5 72 L 63 76 L 59.5 76 L 60 71.5 L 57 71.5 L 55 24 Z"
                );
                buoyBody.classList.add(color);
                signalSVG.appendChild(buoyBody); // :::::::::: ANIM :::::::::: //

                var circle1 = document.createElementNS(namespace, "circle");
                circle1.classList.add("buoy-circle");
                circle1.setAttributeNS(null, "cx", 50);
                circle1.setAttributeNS(null, "cy", 10);
                circle1.setAttributeNS(null, "r", 6);
                circle1.classList.add(color);
                signalSVG.appendChild(circle1);
                var animR1 = document.createElementNS(namespace, "animate");
                animR1.id = "anim-r-1";
                animR1.setAttributeNS(null, "attributeName", "r");
                animR1.setAttributeNS(null, "attributeType", "XML");
                animR1.setAttributeNS(null, "begin", "anim-r-1.end + 3s");
                animR1.setAttributeNS(null, "dur", "3.6s");
                animR1.setAttributeNS(null, "from", "6");
                animR1.setAttributeNS(null, "to", "64");
                circle1.appendChild(animR1);
                var animO1 = document.createElementNS(namespace, "animate");
                animO1.id = "anim-o-1";
                animO1.setAttributeNS(null, "attributeName", "opacity");
                animO1.setAttributeNS(null, "attributeType", "XML");
                animO1.setAttributeNS(null, "begin", "anim-r-1.begin + 0.1s");
                animO1.setAttributeNS(null, "dur", "3s");
                animO1.setAttributeNS(null, "from", "0.6");
                animO1.setAttributeNS(null, "to", "0");
                animO1.setAttributeNS(null, "fill", "freeze");
                circle1.appendChild(animO1);
                var circle2 = document.createElementNS(namespace, "circle");
                circle2.classList.add("buoy-circle");
                circle2.setAttributeNS(null, "cx", 50);
                circle2.setAttributeNS(null, "cy", 10);
                circle2.setAttributeNS(null, "r", 6);
                circle2.classList.add(color);
                signalSVG.appendChild(circle2);
                var animR2 = document.createElementNS(namespace, "animate");
                animR2.id = "anim-r-2";
                animR2.setAttributeNS(null, "attributeName", "r");
                animR2.setAttributeNS(null, "attributeType", "XML");
                animR2.setAttributeNS(null, "begin", "anim-r-1.begin + 1s");
                animR2.setAttributeNS(null, "dur", "3.6s");
                animR2.setAttributeNS(null, "from", "6");
                animR2.setAttributeNS(null, "to", "64");
                circle2.appendChild(animR2);
                var animO2 = document.createElementNS(namespace, "animate");
                animO2.id = "anim-o-2";
                animO2.setAttributeNS(null, "attributeName", "opacity");
                animO2.setAttributeNS(null, "attributeType", "XML");
                animO2.setAttributeNS(null, "begin", "anim-r-2.begin + 0.1s");
                animO2.setAttributeNS(null, "dur", "3s");
                animO2.setAttributeNS(null, "from", "0.6");
                animO2.setAttributeNS(null, "to", "0");
                animO2.setAttributeNS(null, "fill", "freeze");
                circle2.appendChild(animO2);
                var circle3 = document.createElementNS(namespace, "circle");
                circle3.classList.add("buoy-circle");
                circle3.setAttributeNS(null, "cx", 50);
                circle3.setAttributeNS(null, "cy", 10);
                circle3.setAttributeNS(null, "r", 6);
                circle3.classList.add(color);
                signalSVG.appendChild(circle3);
                var animR3 = document.createElementNS(namespace, "animate");
                animR3.id = "anim-r-3";
                animR3.setAttributeNS(null, "attributeName", "r");
                animR3.setAttributeNS(null, "attributeType", "XML");
                animR3.setAttributeNS(null, "begin", "anim-r-2.begin + 1s");
                animR3.setAttributeNS(null, "dur", "3.6s");
                animR3.setAttributeNS(null, "from", "6");
                animR3.setAttributeNS(null, "to", "64");
                circle3.appendChild(animR3);
                var animO3 = document.createElementNS(namespace, "animate");
                animO3.id = "anim-o-3";
                animO3.setAttributeNS(null, "attributeName", "opacity");
                animO3.setAttributeNS(null, "attributeType", "XML");
                animO3.setAttributeNS(null, "begin", "anim-r-3.begin + 0.1s");
                animO3.setAttributeNS(null, "dur", "3s");
                animO3.setAttributeNS(null, "from", "0.6");
                animO3.setAttributeNS(null, "to", "0");
                animO3.setAttributeNS(null, "fill", "freeze");
                circle3.appendChild(animO3);
                if (typeof InstallTrigger === "undefined")
                  animR1.beginElement();
                // detect Firefox
                else
                  setTimeout(function () {
                    animR1.beginElement();
                  }, 0);
              },
            },
          ]);

          return Signal;
        })();
        /* harmony default export */ __webpack_exports__["default"] = Signal;

        /***/
      },

    /***/ "./src/crypto/simeon.js":
      /*!******************************!*\
  !*** ./src/crypto/simeon.js ***!
  \******************************/
      /***/ function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ Charter: function () {
            return /* binding */ Charter;
          },
          /* harmony export */
        });
        function ownKeys(object, enumerableOnly) {
          var keys = Object.keys(object);
          if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);
            if (enumerableOnly)
              symbols = symbols.filter(function (sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
              });
            keys.push.apply(keys, symbols);
          }
          return keys;
        }

        function _objectSpread(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {};
            if (i % 2) {
              ownKeys(Object(source), true).forEach(function (key) {
                _defineProperty(target, key, source[key]);
              });
            } else if (Object.getOwnPropertyDescriptors) {
              Object.defineProperties(
                target,
                Object.getOwnPropertyDescriptors(source)
              );
            } else {
              ownKeys(Object(source)).forEach(function (key) {
                Object.defineProperty(
                  target,
                  key,
                  Object.getOwnPropertyDescriptor(source, key)
                );
              });
            }
          }
          return target;
        }

        function _defineProperty(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, {
              value: value,
              enumerable: true,
              configurable: true,
              writable: true,
            });
          } else {
            obj[key] = value;
          }
          return obj;
        }

        function _toConsumableArray(arr) {
          return (
            _arrayWithoutHoles(arr) ||
            _iterableToArray(arr) ||
            _unsupportedIterableToArray(arr) ||
            _nonIterableSpread()
          );
        }

        function _nonIterableSpread() {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }

        function _iterableToArray(iter) {
          if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter))
            return Array.from(iter);
        }

        function _arrayWithoutHoles(arr) {
          if (Array.isArray(arr)) return _arrayLikeToArray(arr);
        }

        function _slicedToArray(arr, i) {
          return (
            _arrayWithHoles(arr) ||
            _iterableToArrayLimit(arr, i) ||
            _unsupportedIterableToArray(arr, i) ||
            _nonIterableRest()
          );
        }

        function _nonIterableRest() {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }

        function _unsupportedIterableToArray(o, minLen) {
          if (!o) return;
          if (typeof o === "string") return _arrayLikeToArray(o, minLen);
          var n = Object.prototype.toString.call(o).slice(8, -1);
          if (n === "Object" && o.constructor) n = o.constructor.name;
          if (n === "Map" || n === "Set") return Array.from(o);
          if (
            n === "Arguments" ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          )
            return _arrayLikeToArray(o, minLen);
        }

        function _arrayLikeToArray(arr, len) {
          if (len == null || len > arr.length) len = arr.length;
          for (var i = 0, arr2 = new Array(len); i < len; i++) {
            arr2[i] = arr[i];
          }
          return arr2;
        }

        function _iterableToArrayLimit(arr, i) {
          if (
            typeof Symbol === "undefined" ||
            !(Symbol.iterator in Object(arr))
          )
            return;
          var _arr = [];
          var _n = true;
          var _d = false;
          var _e = undefined;
          try {
            for (
              var _i = arr[Symbol.iterator](), _s;
              !(_n = (_s = _i.next()).done);
              _n = true
            ) {
              _arr.push(_s.value);
              if (i && _arr.length === i) break;
            }
          } catch (err) {
            _d = true;
            _e = err;
          } finally {
            try {
              if (!_n && _i["return"] != null) _i["return"]();
            } finally {
              if (_d) throw _e;
            }
          }
          return _arr;
        }

        function _arrayWithHoles(arr) {
          if (Array.isArray(arr)) return arr;
        }

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps) _defineProperties(Constructor.prototype, protoProps);
          if (staticProps) _defineProperties(Constructor, staticProps);
          return Constructor;
        }

        /* eslint-disable unused-imports/no-unused-vars */

        /* eslint-disable max-lines */

        /* eslint-disable camelcase */

        /* eslint-disable class-methods-use-this */

        /* eslint-disable react/prop-types */

        /* eslint-disable max-classes-per-file */

        /* global moment */
        var namespace = "http://www.w3.org/2000/svg";
        var removeMillis = 1000;
        var timePonder = 300;
        var timeRange = 300000 / removeMillis; // 300000 = 5mins

        var viewBoxYPaddingTop = 0.1; // 10% on top

        var viewBoxYPaddingBottom = 0.3; // 30% on bottom

        var candleMinWidth = 8; // px

        var scrollHeight = 17;
        var gridSizeX = 64;
        var gridSizeY = 16;
        var rounding = false;
        var Charter = /*#__PURE__*/ (function () {
          function Charter(props) {
            _classCallCheck(this, Charter);

            this.rootElement = props.root;
            this.data = null;
            this.sampleCount = null;
            this.parsedData = null;
            this.lastPoint = null;
            this.profitData = null;
            this.dataX = null;
            this.dataXRange = null;
            this.dataY = null;
            this.dataYRange = null;
            this.profitX = null;
            this.profitXRange = null;
            this.profitY = null;
            this.profitYRange = null;
          }

          _createClass(Charter, [
            {
              key: "parseData",
              value: function parseData() {
                var _this = this;

                var candleBoundsFieldsToCheck = [
                  "open",
                  "low",
                  "high",
                  "close",
                ];

                var _this$data$data$reduc = this.data.data.reduce(
                    function (acc, cur) {
                      var tempData = _toConsumableArray(acc[0]);

                      var tempRow = _this.data.columns.reduce(function (
                        accumulated,
                        current,
                        i
                      ) {
                        if (current !== "date")
                          return _objectSpread(
                            _objectSpread({}, accumulated),
                            {},
                            _defineProperty({}, current, cur[i])
                          );
                        return _objectSpread(
                          _objectSpread({}, accumulated),
                          {},
                          {
                            date: moment(cur[i]).valueOf() / removeMillis,
                          }
                        );
                      },
                      {});

                      tempData.push(tempRow);
                      var candleValues = candleBoundsFieldsToCheck
                        .map(function (field) {
                          return tempRow[field];
                        })
                        .sort(function (a, b) {
                          return a - b;
                        });
                      var tempCandleMin = acc[1]
                        ? Math.min(acc[1], candleValues[0])
                        : candleValues[0];
                      var tempCandleMax = acc[2]
                        ? Math.max(
                            acc[2],
                            candleValues[candleValues.length - 1]
                          )
                        : candleValues[candleValues.length - 1];
                      return [tempData, tempCandleMin, tempCandleMax];
                    },
                    [[], null, null]
                  ),
                  _this$data$data$reduc2 = _slicedToArray(
                    _this$data$data$reduc,
                    3
                  ),
                  data = _this$data$data$reduc2[0],
                  candleMin = _this$data$data$reduc2[1],
                  candleMax = _this$data$data$reduc2[2];

                data.sort(function (a, b) {
                  return a.date - b.date;
                });
                this.lastPoint = data[data.length - 1].date * removeMillis;
                this.parsedData = {
                  startTime: data[0].date,
                  endTime: data[data.length - 1].date,
                  candleMin: candleMin,
                  candleMax: candleMax,
                  data: data,
                  candleData: data.map(function (_ref) {
                    var date = _ref.date,
                      open = _ref.open,
                      low = _ref.low,
                      high = _ref.high,
                      close = _ref.close;
                    return {
                      date: date,
                      open: open,
                      low: low,
                      high: high,
                      close: close,
                    };
                  }),
                  signalData: data.reduce(function (acc, _ref2, i) {
                    var buy = _ref2.buy,
                      sell = _ref2.sell,
                      open = _ref2.open,
                      close = _ref2.close;

                    var tempResult = _toConsumableArray(acc);

                    if (buy || sell)
                      tempResult.push({
                        x: i,
                        buy: buy,
                        sell: sell,
                        pos: open,
                        direction: open > close ? "down" : "up",
                      });
                    return tempResult;
                  }, []),
                  volumeData: data.map(function (_ref3) {
                    var date = _ref3.date,
                      volume = _ref3.volume,
                      open = _ref3.open,
                      close = _ref3.close;
                    return {
                      date: date,
                      volume: volume,
                      color: open - close > 0 ? "negative" : "positive",
                    };
                  }),
                };
              },
            },
            {
              key: "setData",
              value: function setData(dataPoints) {
                var _this$data, _this$data$data;

                this.data = dataPoints;

                if (
                  this.data &&
                  (_this$data = this.data) !== null &&
                  _this$data !== void 0 &&
                  (_this$data$data = _this$data.data) !== null &&
                  _this$data$data !== void 0 &&
                  _this$data$data.length
                ) {
                  this.sampleCount = this.data.data.length;
                  this.parseData();
                }

                this.renderDataChart();
              },
            },
            {
              key: "setProfitData",
              value: function setProfitData(dataPoints) {
                var _map$sort$reduce = _toConsumableArray(dataPoints.trades)
                    .map(function (_ref4) {
                      var close_timestamp = _ref4.close_timestamp,
                        close_profit_pct = _ref4.close_profit_pct;
                      return {
                        date: Math.round(close_timestamp / removeMillis),
                        profit: close_profit_pct,
                      };
                    })
                    .sort(function (a, b) {
                      return a.date - b.date;
                    })
                    .reduce(
                      function (acc, cur, i) {
                        var tempCummulative = i
                          ? acc[0][i - 1].cumulative + cur.profit
                          : cur.profit;

                        var tempObj = _objectSpread(
                          _objectSpread({}, cur),
                          {},
                          {
                            cumulative: tempCummulative,
                          }
                        );

                        var tempMin =
                          acc[1] !== null
                            ? Math.min(acc[1], tempCummulative)
                            : tempCummulative;
                        var tempMax =
                          acc[2] !== null
                            ? Math.max(acc[2], tempCummulative)
                            : tempCummulative;

                        var tempResult = _toConsumableArray(acc[0]);

                        tempResult.push(tempObj);
                        return [tempResult, tempMin, tempMax];
                      },
                      [[], null, null]
                    ),
                  _map$sort$reduce2 = _slicedToArray(_map$sort$reduce, 3),
                  tempData = _map$sort$reduce2[0],
                  min = _map$sort$reduce2[1],
                  max = _map$sort$reduce2[2];

                this.profitData = {
                  startTime: tempData[0].date,
                  endTime: tempData[tempData.length - 1].date,
                  profitData: tempData,
                  min: min,
                  max: max,
                };
                this.renderProfitChart();
              },
            },
            {
              key: "setDimensions",
              value: function setDimensions(width, height) {
                this.width = width;
                this.height = height;
              },
            },
            {
              key: "setDataViewBox",
              value: function setDataViewBox(x, y, xRange, yRange) {
                this.dataX = x;
                this.dataY = y;
                this.dataXRange = xRange;
                this.dataYRange = yRange;
              },
            },
            {
              key: "setProfitViewBox",
              value: function setProfitViewBox(x, y, xRange, yRange) {
                this.profitX = x;
                this.profitY = y;
                this.profitXRange = xRange;
                this.profitYRange = yRange;
              },
            },
            {
              key: "generateSVGs",
              value: function generateSVGs(width, height) {
                // :::::::::: GRAPH :::::::::: //
                var graphSVG = document.createElementNS(namespace, "svg");
                graphSVG.id = "chart-graph";
                graphSVG.setAttributeNS(null, "version", "1.1");
                graphSVG.setAttribute("xmlns", "http://www.w3.org/2000/svg");
                graphSVG.setAttributeNS(null, "preserveAspectRatio", "none");
                graphSVG.setAttributeNS(null, "width", "".concat(width, "px")); // ::::::::::::::::::::::::::: //
                // :::::::::: XAXIS :::::::::: //

                var xAxis = document.createElementNS(namespace, "svg");
                xAxis.id = "chart-x-axis";
                xAxis.setAttributeNS(null, "version", "1.1"); // xAxis.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
                // xAxis.setAttributeNS(null, 'preserveAspectRatio', 'xMidYMin slice')

                xAxis.setAttributeNS(null, "width", "".concat(width, "px")); // ::::::::::::::::::::::::::: //
                // :::::::::: YAXIS :::::::::: //

                var yAxis = document.createElementNS(namespace, "svg");
                yAxis.id = "chart-y-axis";
                yAxis.setAttributeNS(null, "version", "1.1"); // yAxis.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
                // yAxis.setAttributeNS(null, 'preserveAspectRatio', 'xMinYMid meet')

                yAxis.setAttributeNS(null, "height", "".concat(height, "px")); // ::::::::::::::::::::::::::: //

                this.setDimensions(width, height);
                return [graphSVG, xAxis, yAxis];
              },
            },
            {
              key: "generateGrid",
              value: function generateGrid(
                gridGroup,
                xAxis,
                yAxis,
                x,
                xRange,
                y,
                yRange,
                min,
                max
              ) {
                var relativeXGridSize = (gridSizeX * xRange) / this.width;
                var relativeYGridSize = (gridSizeY * yRange) / this.height;
                var tempValues = [0.5, 1, 2.5, 5, 10];
                var ponder = 1;

                var calculateXPoints = function calculateXPoints() {
                  var logarithmWithBase = function logarithmWithBase(
                    value,
                    base
                  ) {
                    return Math.log(value) / Math.log(base);
                  };

                  var gridTimeSpan =
                    relativeXGridSize * timePonder * removeMillis; // const minimum = this.lastPoint - this.sampleCount * timePonder * removeMillis

                  var minimum = min;
                  var absPonder = 1;
                  var relPonder = 1;
                  var scale = "";
                  var tempRange = gridTimeSpan;
                  var log10 = Math.log10(gridTimeSpan);

                  if (log10 < 3) {
                    absPonder *= Math.pow(10, Math.floor(log10));
                    scale = "millisecond"; // const relValues = [1, 2.5, 5, 10]

                    var relValues = [2.5, 5, 10];
                    var absValues = []
                      .concat(relValues)
                      .map(function (e) {
                        return e * absPonder;
                      })
                      .filter(function (e) {
                        return !(e - Math.trunc(e));
                      });
                    var i = 0;

                    while (absValues[i] <= gridTimeSpan) {
                      i++;
                    }

                    tempRange = absValues[i];
                    relPonder = relValues[i] * Math.pow(10, Math.floor(log10));
                  } else {
                    absPonder *= 1000;
                    var log60 = logarithmWithBase(gridTimeSpan / absPonder, 60);

                    if (log60 < 2) {
                      absPonder *= Math.pow(60, Math.floor(log60));
                      scale = log60 < 1 ? "second" : "minute"; // const relValues = [1, 5, 10, 30, 60]

                      var _relValues = [5, 10, 30, 60];

                      var _absValues = [].concat(_relValues).map(function (e) {
                        return e * absPonder;
                      });

                      var _i2 = 0;

                      while (_absValues[_i2] <= gridTimeSpan) {
                        _i2++;
                      }

                      tempRange = _absValues[_i2];
                      relPonder = _relValues[_i2];
                    } else {
                      absPonder *= 60 * 60;

                      if (gridTimeSpan < absPonder * 12) {
                        scale = "hour"; // const relValues = [1, 3, 6, 12]

                        var _relValues2 = [3, 6, 12];

                        var _absValues2 = []
                          .concat(_relValues2)
                          .map(function (e) {
                            return e * absPonder;
                          });

                        var _i3 = 0;

                        while (_absValues2[_i3] <= gridTimeSpan) {
                          _i3++;
                        }

                        tempRange = _absValues2[_i3];
                        relPonder = _relValues2[_i3];
                      } else {
                        absPonder *= 24;

                        if (gridTimeSpan < absPonder * 14) {
                          scale = "date";
                          var _relValues3 = [1, 2, 3, 5, 7, 14];

                          var _absValues3 = []
                            .concat(_relValues3)
                            .map(function (e) {
                              return e * absPonder;
                            });

                          var _i4 = 0;

                          while (_absValues3[_i4] <= gridTimeSpan) {
                            _i4++;
                          }

                          tempRange = _absValues3[_i4];
                          relPonder = _relValues3[_i4];
                        } else {
                          scale = "bigger";
                        }
                      }
                    }
                  }

                  var startingPoint = minimum;
                  var points = [];

                  if (scale !== "bigger") {
                    startingPoint = moment(startingPoint).startOf(scale);
                    var remainder = startingPoint[scale]();

                    if (scale === "date") {
                      if (relPonder >= 7)
                        startingPoint = moment(
                          startingPoint.valueOf()
                        ).isoWeekday(8);
                      else
                        startingPoint = moment(startingPoint.valueOf()).add(
                          relPonder - 1 - ((remainder - 1) % relPonder),
                          "day"
                        );
                    } else {
                      startingPoint = moment(startingPoint.valueOf()).add(
                        relPonder - 1 - ((remainder - 1) % relPonder),
                        scale
                      );
                    }

                    points.push(startingPoint.valueOf());
                    var lastPoint = points[points.length - 1];

                    while (lastPoint < max) {
                      var newPoint = lastPoint + tempRange;
                      points.push(newPoint);
                      lastPoint = points[points.length - 1];
                    }
                  } else {
                    absPonder *= 30;

                    if (gridTimeSpan < absPonder * 6) {
                      scale = "month";
                      var _relValues4 = [1, 3, 6];

                      var _absValues4 = []
                        .concat(_relValues4)
                        .map(function (e) {
                          return e * absPonder;
                        });

                      var _i5 = 0;

                      while (_absValues4[_i5] <= gridTimeSpan) {
                        _i5++;
                      } // tempRange = absValues[i]

                      relPonder = _relValues4[_i5];
                    } else {
                      (function () {
                        absPonder *= 365 / 30;
                        scale = "year";
                        var relValues = [1, 5, 10];
                        var absValues = [].concat(relValues).map(function (e) {
                          return e * absPonder;
                        });
                        var i = 0;
                        var j = 0;

                        while (absValues[i] <= gridTimeSpan) {
                          i++;

                          if (i === absValues.length) {
                            if (!j) {
                              relValues.splice(1, 0, 2.5);
                            }

                            i = 0;
                            j++; // eslint-disable-next-line no-loop-func

                            absValues = [].concat(relValues).map(function (e) {
                              return e * Math.pow(10, j) * absPonder;
                            });
                          }
                        } // tempRange = absValues[i]

                        relPonder = relValues[i] * Math.pow(10, j);
                      })();
                    }

                    startingPoint = moment(minimum)
                      .startOf(scale)
                      .add(1, scale);

                    var _remainder = startingPoint[scale]();

                    startingPoint = moment(startingPoint.valueOf()).add(
                      relPonder - 1 - ((_remainder - 1) % relPonder),
                      scale
                    );
                    points.push(startingPoint.valueOf());
                    var _lastPoint = points[points.length - 1];

                    while (_lastPoint < max) {
                      var _newPoint = moment(_lastPoint)
                        .add(relPonder, scale)
                        .valueOf();

                      points.push(_newPoint);
                      _lastPoint = points[points.length - 1];
                    }

                    points.pop();
                  }

                  if (scale === "month" && relPonder > 1)
                    points = _toConsumableArray(points).map(function (point) {
                      return moment(point).subtract(1, "day").valueOf();
                    });
                  return [
                    points.map(function (point) {
                      return {
                        x: (point - minimum) / timePonder / removeMillis,
                        value: point,
                      };
                    }),
                    scale,
                  ];
                };

                var calculateYPoints = function calculateYPoints(range, start) {
                  if (
                    tempValues[tempValues.length - 1] * ponder >
                    relativeYGridSize
                  ) {
                    while (
                      tempValues[tempValues.length - 1] * ponder >
                      relativeYGridSize
                    ) {
                      ponder /= 10;
                    }

                    ponder *= 10;
                  }

                  if (tempValues[0] * ponder < relativeYGridSize) {
                    while (tempValues[0] * ponder < relativeYGridSize) {
                      ponder *= 10;
                    }

                    ponder /= 10;
                  }

                  var values = // eslint-disable-next-line no-undef
                    rounding && ponder * tempNormalizer <= 1
                      ? tempValues.filter(function (v) {
                          return !rounding || v !== 2.5;
                        })
                      : tempValues; // eslint-disable-next-line prefer-const

                  var _values$reduce = values.reduce(
                      function (acc, cur, i) {
                        return acc[0] * ponder > relativeYGridSize
                          ? [acc[0], acc[1]]
                          : [cur, i === 2]; // 2.5 decimal option
                      },
                      [0, false]
                    ),
                    _values$reduce2 = _slicedToArray(_values$reduce, 2),
                    distance = _values$reduce2[0],
                    add = _values$reduce2[1];

                  var decimals = 0;
                  if (ponder)
                    while (Math.pow(10, decimals) < 1 / ponder) {
                      decimals++;
                    }
                  if (add) decimals++;
                  distance = Number(
                    Number.parseFloat(distance * ponder).toFixed(decimals)
                  );
                  var startingPoint =
                    Number(
                      Number.parseFloat(
                        Math.ceil(start / distance) * distance
                      ).toFixed(decimals)
                    ) || 0;
                  var points = [];

                  if (distance) {
                    points.push(startingPoint);

                    while (
                      points[points.length - 1] + distance <=
                      start + range
                    ) {
                      var newPoint = Number(
                        Number.parseFloat(
                          points[points.length - 1] + distance
                        ).toFixed(decimals)
                      );
                      points.push(newPoint);
                    }
                  }

                  return points;
                };

                var _calculateXPoints = calculateXPoints(
                    xRange * timePonder * removeMillis,
                    0
                  ),
                  _calculateXPoints2 = _slicedToArray(_calculateXPoints, 2),
                  xPoints = _calculateXPoints2[0],
                  xScale = _calculateXPoints2[1];

                var yPoints = calculateYPoints(yRange, y);
                var fontSize = 12;
                var xRatio = xRange / this.width;
                var yRatio = yRange / this.height;
                xPoints.forEach(function (_ref5) {
                  var xVal = _ref5.x,
                    value = _ref5.value;
                  var tempGridLine = document.createElementNS(
                    namespace,
                    "line"
                  );
                  tempGridLine.classList.add("grid-line");
                  tempGridLine.setAttributeNS(null, "x1", xVal);
                  tempGridLine.setAttributeNS(null, "x2", xVal);
                  tempGridLine.setAttributeNS(null, "y1", y);
                  tempGridLine.setAttributeNS(null, "y2", y + yRange);
                  tempGridLine.setAttributeNS(null, "stroke-width", "1px");
                  gridGroup.appendChild(tempGridLine);

                  var getFormatFromScale = function getFormatFromScale(scale) {
                    switch (scale) {
                      case "millisecond":
                        return "ss.SSS";

                      case "second":
                        return "mm:ss";

                      case "minute":
                        return "DD.MM HH:mm";

                      case "hour":
                        return "DD.MM HH:mm";

                      case "date":
                        return "DD-MM";

                      case "month":
                        return "DD-MM-YY";

                      case "year":
                        return "YYYY";

                      default:
                        return null;
                    }
                  };

                  var tempGridText = document.createElementNS(
                    namespace,
                    "text"
                  );
                  tempGridText.classList.add("xAxis-text");
                  tempGridText.setAttributeNS(null, "x", xVal);
                  tempGridText.setAttributeNS(null, "y", 0);
                  tempGridText.setAttribute(
                    "font-size",
                    "".concat(fontSize * xRatio)
                  );
                  tempGridText.setAttribute("dominant-baseline", "hanging");
                  tempGridText.setAttribute("text-anchor", "middle");
                  tempGridText.innerHTML = "".concat(
                    moment(value).format(getFormatFromScale(xScale))
                  );
                  xAxis.appendChild(tempGridText);
                });
                yPoints.forEach(function (point) {
                  var tempGridLine = document.createElementNS(
                    namespace,
                    "line"
                  );
                  tempGridLine.classList.add("grid-line");
                  tempGridLine.setAttributeNS(null, "x1", x);
                  tempGridLine.setAttributeNS(null, "x2", x + xRange);
                  tempGridLine.setAttributeNS(null, "y1", point);
                  tempGridLine.setAttributeNS(null, "y2", point);
                  tempGridLine.setAttributeNS(null, "stroke-width", "1px");
                  gridGroup.appendChild(tempGridLine);
                  var tempGridText = document.createElementNS(
                    namespace,
                    "text"
                  );
                  tempGridText.classList.add("yAxis-text");
                  tempGridText.setAttributeNS(null, "x", 0);
                  tempGridText.setAttributeNS(null, "y", point);
                  tempGridText.setAttribute(
                    "font-size",
                    "".concat(fontSize * yRatio)
                  );
                  tempGridText.setAttribute("dominant-baseline", "middle");
                  tempGridText.innerHTML = "".concat(-point);
                  yAxis.appendChild(tempGridText);
                });
              },
            },
            {
              key: "generateCandles",
              value: function generateCandles(candleGroup) {
                this.parsedData.candleData.forEach(function (candle, i) {
                  var candleSpan = candle.close - candle.open;
                  var candleHeight = Math.abs(candleSpan);
                  var tempCandle = document.createElementNS(namespace, "rect");
                  tempCandle.classList.add("candle-body");
                  tempCandle.setAttributeNS(
                    null,
                    "x",
                    0 + (i * timeRange) / timePonder
                  );
                  tempCandle.setAttributeNS(
                    null,
                    "y",
                    -Math.max(candle.close, candle.open)
                  );
                  tempCandle.setAttributeNS(
                    null,
                    "width",
                    timeRange / timePonder
                  );
                  tempCandle.setAttributeNS(null, "height", candleHeight);
                  var tempWick = document.createElementNS(namespace, "line");
                  tempWick.classList.add("candle-wick");
                  tempWick.setAttributeNS(
                    null,
                    "x1",
                    ((0.5 + i) * timeRange) / timePonder
                  );
                  tempWick.setAttributeNS(
                    null,
                    "x2",
                    ((0.5 + i) * timeRange) / timePonder
                  );
                  tempWick.setAttributeNS(null, "y1", -candle.high);
                  tempWick.setAttributeNS(null, "y2", -candle.low);
                  tempWick.setAttributeNS(null, "stroke-width", "1px");

                  if (candleSpan) {
                    tempCandle.classList.add(
                      "".concat(candleSpan > 0 ? "positive" : "negative")
                    );
                    tempWick.classList.add(
                      "".concat(candleSpan > 0 ? "positive" : "negative")
                    );
                  }

                  candleGroup.appendChild(tempCandle);
                  candleGroup.appendChild(tempWick);
                });
              },
            },
            {
              key: "generateVolumes",
              value: function generateVolumes(volumeGroup) {
                var _this2 = this;

                var maxVolume = this.parsedData.volumeData.reduce(function (
                  acc,
                  _ref6
                ) {
                  var volume = _ref6.volume;
                  return Math.max(acc, volume);
                },
                0);
                this.parsedData.volumeData.forEach(function (_ref7, i) {
                  var date = _ref7.date,
                    volume = _ref7.volume,
                    color = _ref7.color;

                  if (volume) {
                    var height =
                      (volume / maxVolume) *
                      _this2.dataYRange *
                      viewBoxYPaddingBottom;
                    var tempVolume = document.createElementNS(
                      namespace,
                      "rect"
                    );
                    tempVolume.classList.add("volume");
                    tempVolume.setAttributeNS(
                      null,
                      "x",
                      0 + (i * timeRange) / timePonder
                    );
                    tempVolume.setAttributeNS(
                      null,
                      "y",
                      _this2.dataY + _this2.dataYRange - height
                    );
                    tempVolume.setAttributeNS(
                      null,
                      "width",
                      timeRange / timePonder
                    );
                    tempVolume.setAttributeNS(null, "height", height);
                    tempVolume.classList.add("".concat(color));
                    volumeGroup.appendChild(tempVolume);
                  }
                });
              },
            },
            {
              key: "createSignalPath",
              value: function createSignalPath(x, y, direction, color) {
                var signalSize = 16;
                var signalOffset = 16;
                var xRatio = this.dataXRange / this.width;
                var yRatio = this.dataYRange / this.height;
                var pathWidth = signalSize * xRatio;
                var pathHeight = signalSize * yRatio;
                var pathLeft = x - pathWidth / 2;
                var pathTop =
                  y -
                  pathHeight / 2 +
                  (direction === "up" ? signalOffset * yRatio : 0);
                var tempSignal = document.createElementNS(namespace, "g");
                tempSignal.classList.add("signal"); // :::::::::: CIRC :::::::::: //

                var tempRing = document.createElementNS(namespace, "circle");
                tempRing.classList.add("signal-ring");
                tempRing.setAttributeNS(null, "cx", 50);
                tempRing.setAttributeNS(null, "cy", 50);
                tempRing.setAttributeNS(null, "r", 60);
                tempSignal.appendChild(tempRing); // :::::::::::::::::::::::::: //
                // :::::::::: MASK :::::::::: //

                var tempMask = document.createElementNS(namespace, "mask");
                tempMask.id = "holesMask";
                var maskRect = document.createElementNS(namespace, "rect");
                maskRect.classList.add("mask-white");
                maskRect.setAttributeNS(null, "x", 0);
                maskRect.setAttributeNS(null, "y", 0);
                maskRect.setAttributeNS(null, "width", 100);
                maskRect.setAttributeNS(null, "height", 100);
                tempMask.appendChild(maskRect);
                var maskCircleLeft = document.createElementNS(
                  namespace,
                  "circle"
                );
                maskCircleLeft.classList.add("mask-black");
                maskCircleLeft.setAttributeNS(null, "cx", 34.5);
                maskCircleLeft.setAttributeNS(null, "cy", 71.5);
                maskCircleLeft.setAttributeNS(null, "r", 1.5);
                tempMask.appendChild(maskCircleLeft);
                var maskCircleRight = document.createElementNS(
                  namespace,
                  "circle"
                );
                maskCircleRight.classList.add("mask-black");
                maskCircleRight.setAttributeNS(null, "cx", 65.5);
                maskCircleRight.setAttributeNS(null, "cy", 71.5);
                maskCircleRight.setAttributeNS(null, "r", 1.5);
                tempMask.appendChild(maskCircleRight);
                tempSignal.appendChild(tempMask); // :::::::::::::::::::::::::: //
                // :::::::::: PATH :::::::::: //

                var buoyStem = document.createElementNS(namespace, "path");
                buoyStem.classList.add("buoy-stem");
                buoyStem.setAttributeNS(
                  null,
                  "d",
                  "M 47.5 15.5 L 48 24 L 52 24 L 52.5 15.5 Z"
                );
                buoyStem.classList.add(color);
                tempSignal.appendChild(buoyStem);
                var buoyHead = document.createElementNS(namespace, "circle");
                buoyHead.classList.add("buoy-head");
                buoyHead.setAttributeNS(null, "cx", 50);
                buoyHead.setAttributeNS(null, "cy", 10);
                buoyHead.setAttributeNS(null, "r", 6);
                buoyHead.classList.add(color);
                tempSignal.appendChild(buoyHead);
                var buoyBody = document.createElementNS(namespace, "path");
                buoyBody.classList.add("buoy-body");
                buoyBody.setAttributeNS(null, "mask", "url(#holesMask)");
                buoyBody.setAttributeNS(
                  null,
                  "d", // eslint-disable-next-line max-len
                  "M 45 24 L 43 71.5 L 40 71.5 L 40.5 76 L 37 76 L 37.5 72 C 38 67, 31 67, 31.5 72 L 32 76 L 28.5 76 L 30.5 91 L 69.5 91 L 71.5 76 L 68 76 L 68.5 72 C 69 67, 62 67, 62.5 72 L 63 76 L 59.5 76 L 60 71.5 L 57 71.5 L 55 24 Z"
                );
                buoyBody.classList.add(color);
                var signalRatio = signalSize / 100;
                tempSignal.setAttributeNS(
                  null,
                  "transform",
                  "translate("
                    .concat(pathLeft, " ")
                    .concat(pathTop, ") scale(")
                    .concat(xRatio * signalRatio, " ")
                    .concat(yRatio * signalRatio, ")")
                );
                tempSignal.appendChild(buoyBody); // :::::::::::::::::::::::::: //
                // :::::::::: ANIM :::::::::: //

                var circle1 = document.createElementNS(namespace, "circle");
                circle1.classList.add("buoy-circle");
                circle1.setAttributeNS(null, "cx", 50);
                circle1.setAttributeNS(null, "cy", 10);
                circle1.setAttributeNS(null, "r", 6);
                circle1.classList.add(color);
                tempSignal.appendChild(circle1);
                var animR1 = document.createElementNS(namespace, "animate");
                animR1.id = "anim-r-1";
                animR1.setAttributeNS(null, "attributeName", "r");
                animR1.setAttributeNS(null, "attributeType", "XML");
                animR1.setAttributeNS(null, "begin", "anim-r-1.end + 3s");
                animR1.setAttributeNS(null, "dur", "3.6s");
                animR1.setAttributeNS(null, "from", "6");
                animR1.setAttributeNS(null, "to", "128");
                circle1.appendChild(animR1);
                var animO1 = document.createElementNS(namespace, "animate");
                animO1.id = "anim-o-1";
                animO1.setAttributeNS(null, "attributeName", "opacity");
                animO1.setAttributeNS(null, "attributeType", "XML");
                animO1.setAttributeNS(null, "begin", "anim-r-1.begin + 0.1s");
                animO1.setAttributeNS(null, "dur", "3s");
                animO1.setAttributeNS(null, "from", "0.6");
                animO1.setAttributeNS(null, "to", "0");
                animO1.setAttributeNS(null, "fill", "freeze");
                circle1.appendChild(animO1);
                var circle2 = document.createElementNS(namespace, "circle");
                circle2.classList.add("buoy-circle");
                circle2.setAttributeNS(null, "cx", 50);
                circle2.setAttributeNS(null, "cy", 10);
                circle2.setAttributeNS(null, "r", 6);
                circle2.classList.add(color);
                tempSignal.appendChild(circle2);
                var animR2 = document.createElementNS(namespace, "animate");
                animR2.id = "anim-r-2";
                animR2.setAttributeNS(null, "attributeName", "r");
                animR2.setAttributeNS(null, "attributeType", "XML");
                animR2.setAttributeNS(null, "begin", "anim-r-1.begin + 1s");
                animR2.setAttributeNS(null, "dur", "3.6s");
                animR2.setAttributeNS(null, "from", "6");
                animR2.setAttributeNS(null, "to", "128");
                circle2.appendChild(animR2);
                var animO2 = document.createElementNS(namespace, "animate");
                animO2.id = "anim-o-2";
                animO2.setAttributeNS(null, "attributeName", "opacity");
                animO2.setAttributeNS(null, "attributeType", "XML");
                animO2.setAttributeNS(null, "begin", "anim-r-2.begin + 0.1s");
                animO2.setAttributeNS(null, "dur", "3s");
                animO2.setAttributeNS(null, "from", "0.6");
                animO2.setAttributeNS(null, "to", "0");
                animO2.setAttributeNS(null, "fill", "freeze");
                circle2.appendChild(animO2);
                var circle3 = document.createElementNS(namespace, "circle");
                circle3.classList.add("buoy-circle");
                circle3.setAttributeNS(null, "cx", 50);
                circle3.setAttributeNS(null, "cy", 10);
                circle3.setAttributeNS(null, "r", 6);
                circle3.classList.add(color);
                tempSignal.appendChild(circle3);
                var animR3 = document.createElementNS(namespace, "animate");
                animR3.id = "anim-r-3";
                animR3.setAttributeNS(null, "attributeName", "r");
                animR3.setAttributeNS(null, "attributeType", "XML");
                animR3.setAttributeNS(null, "begin", "anim-r-2.begin + 1s");
                animR3.setAttributeNS(null, "dur", "3.6s");
                animR3.setAttributeNS(null, "from", "6");
                animR3.setAttributeNS(null, "to", "128");
                circle3.appendChild(animR3);
                var animO3 = document.createElementNS(namespace, "animate");
                animO3.id = "anim-o-3";
                animO3.setAttributeNS(null, "attributeName", "opacity");
                animO3.setAttributeNS(null, "attributeType", "XML");
                animO3.setAttributeNS(null, "begin", "anim-r-3.begin + 0.1s");
                animO3.setAttributeNS(null, "dur", "3s");
                animO3.setAttributeNS(null, "from", "0.6");
                animO3.setAttributeNS(null, "to", "0");
                animO3.setAttributeNS(null, "fill", "freeze");
                circle3.appendChild(animO3);
                if (typeof InstallTrigger === "undefined")
                  animR1.beginElement();
                // detect Firefox
                else
                  setTimeout(function () {
                    animR1.beginElement();
                  }, 0); // const animate = document.createElementNS(namespace, 'animateTransform')
                // animate.setAttributeNS(null, 'attributeName', 'transform')
                // animate.setAttributeNS(null, 'attributeType', 'XML')
                // animate.setAttributeNS(null, 'additive', 'sum')
                // animate.setAttributeNS(null, 'type', 'rotate')
                // animate.setAttributeNS(null, 'begin', 'never')
                // animate.setAttributeNS(null, 'dur', '3s')
                // animate.setAttributeNS(null, 'values', '-20 50 70; 20 50 70; -20 50 70')
                // animate.setAttributeNS(null, 'calcMode', 'spline')
                // animate.setAttributeNS(null, 'keySplines', '0.7 0 0.3 1; 0.7 0 0.3 1')
                // animate.setAttributeNS(null, 'keyTimes', '0;0.5;1')
                // animate.setAttributeNS(null, 'repeatCount', 'indefinite')
                // tempSignal.appendChild(animate)
                // if (typeof InstallTrigger === 'undefined') animate.beginElement()
                // // detect Firefox
                // else
                //   setTimeout(function () {
                //     animate.beginElement()
                //   }, 0)
                // :::::::::::::::::::::::::: //

                return tempSignal;
              },
            },
            {
              key: "generateSignals",
              value: function generateSignals(signalGroup) {
                var _this3 = this;

                var defs = document.createElementNS(namespace, "defs");
                signalGroup.appendChild(defs);
                var signalGradientPositive = document.createElementNS(
                  namespace,
                  "linearGradient"
                );
                signalGradientPositive.id = "signal-gradient-positive";
                defs.appendChild(signalGradientPositive);
                var beginP = document.createElementNS(namespace, "stop");
                beginP.classList.add("signal-gradient-stop");
                beginP.classList.add("positive");
                beginP.setAttributeNS(null, "offset", "0%");
                signalGradientPositive.appendChild(beginP);
                var endP = document.createElementNS(namespace, "stop");
                endP.classList.add("signal-gradient-stop");
                endP.setAttributeNS(null, "offset", "100%");
                signalGradientPositive.appendChild(endP);
                var signalGradientNegative = document.createElementNS(
                  namespace,
                  "linearGradient"
                );
                signalGradientNegative.id = "signal-gradient-negative";
                defs.appendChild(signalGradientNegative);
                var beginN = document.createElementNS(namespace, "stop");
                beginN.classList.add("signal-gradient-stop");
                beginN.classList.add("negative");
                beginN.setAttributeNS(null, "offset", "0%");
                signalGradientNegative.appendChild(beginN);
                var endN = document.createElementNS(namespace, "stop");
                endN.classList.add("signal-gradient-stop");
                endN.setAttributeNS(null, "offset", "100%");
                signalGradientNegative.appendChild(endN);
                this.parsedData.signalData.forEach(function (_ref8, i) {
                  var x = _ref8.x,
                    buy = _ref8.buy,
                    pos = _ref8.pos,
                    direction = _ref8.direction;
                  var midX = ((x + 0.5) * timeRange) / timePonder; // const midY = this.dataY + (this.dataYRange * viewBoxYPaddingTop) / 2

                  var midY = -pos;

                  var signal = _this3.createSignalPath(
                    midX,
                    midY,
                    direction,
                    "".concat(buy > 0 ? "positive" : "negative")
                  );

                  var signalLine = document.createElementNS(namespace, "line");
                  signalLine.classList.add("signal-line");
                  signalLine.setAttributeNS(null, "x1", midX);
                  signalLine.setAttributeNS(null, "x2", midX);
                  signalLine.setAttributeNS(null, "y1", _this3.dataY);
                  signalLine.setAttributeNS(
                    null,
                    "y2",
                    _this3.dataY + _this3.dataYRange
                  );
                  signalLine.setAttributeNS(null, "stroke-width", "1px");
                  signalLine.classList.add(
                    "".concat(buy > 0 ? "positive" : "negative")
                  ); // signalLine.setAttributeNS(null, 'transform', 'translate(0.5 0)')

                  signalGroup.appendChild(signalLine);
                  var nextX = 500;

                  if (x < 500) {
                    if (i < _this3.parsedData.signalData.length - 1)
                      nextX = _this3.parsedData.signalData[i + 1].x;
                    var signalArea = document.createElementNS(
                      namespace,
                      "rect"
                    );
                    signalArea.classList.add("signal-area");
                    signalArea.setAttributeNS(null, "x", midX);
                    signalArea.setAttributeNS(null, "y", _this3.dataY);
                    signalArea.setAttributeNS(null, "width", nextX - x);
                    signalArea.setAttributeNS(
                      null,
                      "height",
                      _this3.dataYRange
                    );
                    signalArea.setAttributeNS(
                      null,
                      "fill",
                      "url(#signal-gradient-".concat(
                        buy > 0 ? "positive" : "negative",
                        ")"
                      )
                    ); // signalArea.classList.add(`${buy > 0 ? 'positive' : 'negative'}`)

                    signalGroup.appendChild(signalArea);
                  }

                  signalGroup.appendChild(signal);
                });
              },
            },
            {
              key: "generateProfit",
              value: function generateProfit(profitGroup) {
                var start = this.profitData.startTime;
                var end = this.profitData.endTime;
                var data = this.profitData.profitData.map(function (e) {
                  return _objectSpread(
                    _objectSpread({}, e),
                    {},
                    {
                      date: (e.date - start) / timePonder,
                    }
                  );
                });

                var _data$reduce = data.reduce(
                    function (acc, cur, i) {
                      var cumulative = -cur.cumulative;
                      return [
                        ""
                          .concat(acc[0])
                          .concat(i === 0 ? "M" : " L", " ")
                          .concat(cur.date.toFixed(4), " ")
                          .concat(acc[3], " L ")
                          .concat(cur.date.toFixed(4), " ")
                          .concat(cumulative.toFixed(4)),
                        ""
                          .concat(acc[1])
                          .concat(i === 0 ? "M" : " L", " ")
                          .concat(cur.date.toFixed(4), " ")
                          .concat(acc[3] < 0 ? acc[3] : 0, " L ")
                          .concat(cur.date.toFixed(4), " ")
                          .concat(cumulative < 0 ? cumulative.toFixed(4) : 0)
                          .concat(
                            i === data.length - 1
                              ? " L ".concat(cur.date.toFixed(4), " 0")
                              : ""
                          ),
                        ""
                          .concat(acc[2])
                          .concat(i === 0 ? "M" : " L", " ")
                          .concat(cur.date.toFixed(4), " ")
                          .concat(acc[3] > 0 ? acc[3] : 0, " L ")
                          .concat(cur.date.toFixed(4), " ")
                          .concat(cumulative > 0 ? cumulative.toFixed(4) : 0)
                          .concat(
                            i === data.length - 1
                              ? " L ".concat(cur.date.toFixed(4), " 0")
                              : ""
                          ),
                        cumulative,
                      ];
                    },
                    ["", "", "", 0]
                  ),
                  _data$reduce2 = _slicedToArray(_data$reduce, 3),
                  line = _data$reduce2[0],
                  pos = _data$reduce2[1],
                  neg = _data$reduce2[2];

                var profit0Line = document.createElementNS(namespace, "line");
                profit0Line.id = "zero-line";
                profit0Line.setAttributeNS(null, "x1", 0);
                profit0Line.setAttributeNS(
                  null,
                  "x2",
                  (end - start) / timePonder
                );
                profit0Line.setAttributeNS(null, "y1", 0);
                profit0Line.setAttributeNS(null, "y2", 0);
                profit0Line.setAttributeNS(null, "stroke-width", "0.5px");
                profitGroup.appendChild(profit0Line);

                if (data.length) {
                  var posPath = document.createElementNS(namespace, "path");
                  posPath.classList.add("path");
                  posPath.classList.add("positive");
                  posPath.setAttributeNS(null, "d", "".concat(pos, " Z"));
                  posPath.setAttributeNS(null, "stroke-width", "1px");
                  profitGroup.appendChild(posPath);
                  var negPath = document.createElementNS(namespace, "path");
                  negPath.classList.add("path");
                  negPath.classList.add("negative");
                  negPath.setAttributeNS(null, "d", "".concat(neg, " Z"));
                  negPath.setAttributeNS(null, "stroke-width", "1px");
                  profitGroup.appendChild(negPath);
                  var tempPath = document.createElementNS(namespace, "path");
                  tempPath.classList.add("path");
                  tempPath.setAttributeNS(null, "d", line);
                  tempPath.setAttributeNS(null, "stroke-width", "1px");
                  profitGroup.appendChild(tempPath);
                }
              },
            },
            {
              key: "populateDataSVG",
              value: function populateDataSVG(
                svg,
                xAxis,
                yAxis,
                width,
                height
              ) {
                var _this$parsedData, _this$parsedData$data;

                var gridGroup = document.createElementNS(namespace, "g");
                gridGroup.id = "chart-grid-group";
                var candleGroup = document.createElementNS(namespace, "g");
                candleGroup.id = "chart-candle-group"; // const pathGroup = document.createElementNS(namespace, 'g')
                // pathGroup.id = 'chart-path-group'

                var volumeGroup = document.createElementNS(namespace, "g");
                volumeGroup.id = "chart-volume-group";
                var signalGroup = document.createElementNS(namespace, "g");
                signalGroup.id = "chart-signal-group";
                svg.appendChild(gridGroup);
                svg.appendChild(candleGroup); // svg.appendChild(pathGroup)

                svg.appendChild(volumeGroup);
                svg.appendChild(signalGroup);
                var xSpan =
                  (this.parsedData.endTime - this.parsedData.startTime + 300) /
                  timePonder;
                var x = 0;
                var xRange = xSpan;
                var ySpan =
                  this.parsedData.candleMax - this.parsedData.candleMin;
                var y = -this.parsedData.candleMax - viewBoxYPaddingTop * ySpan;
                var yRange =
                  ySpan * (1 + viewBoxYPaddingTop + viewBoxYPaddingBottom);
                this.setDataViewBox(x, y, xRange, yRange);
                var xAxisRatio = width / 30 / (this.profitXRange / 100);
                var yAxisRatio = 40 / height / (this.profitYRange / 100);
                svg.setAttributeNS(
                  null,
                  "viewBox",
                  ""
                    .concat(this.dataX, " ")
                    .concat(this.dataY, " ")
                    .concat(this.dataXRange, " ")
                    .concat(this.dataYRange)
                );
                xAxis.setAttributeNS(
                  null,
                  "viewBox",
                  "".concat(this.dataX, " 0 ").concat(this.dataXRange, " 100")
                );
                xAxis.setAttributeNS(
                  null,
                  "preserveAspectRatio",
                  "xMidYMin ".concat(xAxisRatio > 1 ? "slice" : "meet")
                );
                yAxis.setAttributeNS(
                  null,
                  "viewBox",
                  "0 ".concat(this.dataY, " 100 ").concat(this.dataYRange)
                );
                yAxis.setAttributeNS(
                  null,
                  "preserveAspectRatio",
                  "xMinYMid ".concat(yAxisRatio < 1 ? "slice" : "meet")
                );

                if (
                  (_this$parsedData = this.parsedData) !== null &&
                  _this$parsedData !== void 0 &&
                  (_this$parsedData$data = _this$parsedData.data) !== null &&
                  _this$parsedData$data !== void 0 &&
                  _this$parsedData$data.length
                ) {
                  var _this$parsedData$cand,
                    _this$parsedData$volu,
                    _this$parsedData$sign;

                  this.generateGrid(
                    gridGroup,
                    xAxis,
                    yAxis,
                    this.dataX,
                    this.dataXRange,
                    this.dataY,
                    this.dataYRange,
                    this.lastPoint -
                      this.sampleCount * timePonder * removeMillis,
                    this.lastPoint
                  );
                  if (
                    (_this$parsedData$cand = this.parsedData.candleData) !==
                      null &&
                    _this$parsedData$cand !== void 0 &&
                    _this$parsedData$cand.length
                  )
                    this.generateCandles(candleGroup);
                  if (
                    (_this$parsedData$volu = this.parsedData.volumeData) !==
                      null &&
                    _this$parsedData$volu !== void 0 &&
                    _this$parsedData$volu.length
                  )
                    this.generateVolumes(volumeGroup);
                  if (
                    (_this$parsedData$sign = this.parsedData.signalData) !==
                      null &&
                    _this$parsedData$sign !== void 0 &&
                    _this$parsedData$sign.length
                  )
                    this.generateSignals(signalGroup);
                }

                var chartArea = document.getElementById("chart-area");
                chartArea.scrollTo(this.width, 0);
              },
            },
            {
              key: "populateProfitSVG",
              value: function populateProfitSVG(
                svg,
                xAxis,
                yAxis,
                width,
                height
              ) {
                var _this$profitData, _this$profitData$prof;

                var gridGroup = document.createElementNS(namespace, "g");
                gridGroup.id = "chart-grid-group";
                var profitGroup = document.createElementNS(namespace, "g");
                profitGroup.id = "chart-profit-group";
                svg.appendChild(gridGroup);
                svg.appendChild(profitGroup);
                var xSpan =
                  (this.profitData.endTime - this.profitData.startTime) /
                  timePonder;
                var x = 0;
                var xRange = xSpan;
                var ySpan = this.profitData.max - this.profitData.min;
                var y = -this.profitData.max - viewBoxYPaddingTop * ySpan;
                var yRange = ySpan * (1 + 2 * viewBoxYPaddingTop);
                this.setProfitViewBox(x, y, xRange, yRange);
                var xAxisRatio = width / 30 / (this.profitXRange / 100);
                var yAxisRatio = 40 / height / (this.profitYRange / 100);
                svg.setAttributeNS(
                  null,
                  "viewBox",
                  ""
                    .concat(this.profitX, " ")
                    .concat(this.profitY, " ")
                    .concat(this.profitXRange, " ")
                    .concat(this.profitYRange)
                );
                xAxis.setAttributeNS(
                  null,
                  "viewBox",
                  ""
                    .concat(this.profitX, " 0 ")
                    .concat(this.profitXRange, " 100")
                );
                xAxis.setAttributeNS(
                  null,
                  "preserveAspectRatio",
                  "xMidYMin ".concat(xAxisRatio > 1 ? "slice" : "meet")
                );
                yAxis.setAttributeNS(
                  null,
                  "viewBox",
                  "0 ".concat(this.profitY, " 100 ").concat(this.profitYRange)
                );
                yAxis.setAttributeNS(
                  null,
                  "preserveAspectRatio",
                  "xMinYMid ".concat(yAxisRatio < 1 ? "slice" : "meet")
                );

                if (
                  (_this$profitData = this.profitData) !== null &&
                  _this$profitData !== void 0 &&
                  (_this$profitData$prof = _this$profitData.profitData) !==
                    null &&
                  _this$profitData$prof !== void 0 &&
                  _this$profitData$prof.length
                ) {
                  var _this$profitData$prof2;

                  this.generateGrid(
                    gridGroup,
                    xAxis,
                    yAxis,
                    this.profitX,
                    this.profitXRange,
                    this.profitY,
                    this.profitYRange,
                    this.profitData.startTime * removeMillis,
                    this.profitData.endTime * removeMillis
                  );
                  if (
                    (_this$profitData$prof2 = this.profitData.profitData) !==
                      null &&
                    _this$profitData$prof2 !== void 0 &&
                    _this$profitData$prof2.length
                  )
                    this.generateProfit(profitGroup);
                }
              },
            },
            {
              key: "renderDataChart",
              value: function renderDataChart() {
                var chartArea = document.createElement("DIV");
                chartArea.id = "chart-area";
                this.rootElement.innerHTML = "";
                this.rootElement.appendChild(chartArea);
                var width =
                  (candleMinWidth / timeRange) *
                  (this.parsedData.endTime - this.parsedData.startTime);
                var height =
                  chartArea.getBoundingClientRect().height -
                  40 -
                  1 * scrollHeight;

                var _this$generateSVGs = this.generateSVGs(width, height),
                  _this$generateSVGs2 = _slicedToArray(_this$generateSVGs, 3),
                  svg = _this$generateSVGs2[0],
                  xAxis = _this$generateSVGs2[1],
                  yAxis = _this$generateSVGs2[2];

                this.rootElement.appendChild(yAxis);
                chartArea.appendChild(svg);
                chartArea.appendChild(xAxis);
                this.populateDataSVG(svg, xAxis, yAxis, width, height);
              },
            },
            {
              key: "renderProfitChart",
              value: function renderProfitChart() {
                var chartArea = document.createElement("DIV");
                chartArea.id = "chart-area";
                this.rootElement.innerHTML = "";
                this.rootElement.appendChild(chartArea);

                var _chartArea$getBoundin = chartArea.getBoundingClientRect(),
                  width = _chartArea$getBoundin.width;

                var height =
                  chartArea.getBoundingClientRect().height -
                  40 -
                  0 * scrollHeight;

                var _this$generateSVGs3 = this.generateSVGs(width, height),
                  _this$generateSVGs4 = _slicedToArray(_this$generateSVGs3, 3),
                  svg = _this$generateSVGs4[0],
                  xAxis = _this$generateSVGs4[1],
                  yAxis = _this$generateSVGs4[2];

                this.rootElement.appendChild(yAxis);
                chartArea.appendChild(svg);
                chartArea.appendChild(xAxis);
                this.populateProfitSVG(svg, xAxis, yAxis, width, height);
              },
            },
          ]);

          return Charter;
        })(); // eslint-disable-next-line unused-imports/no-unused-vars

        var dataCharter = new Charter({
          root: document.getElementById("data-chart-wrapper"),
        }); // eslint-disable-next-line unused-imports/no-unused-vars

        var profitCharter = new Charter({
          root: document.getElementById("profit-chart-wrapper"),
        });
        /* harmony default export */ __webpack_exports__["default"] = Charter;

        /***/
      },

    /***/ "./src/crypto/style.css":
      /*!******************************!*\
  !*** ./src/crypto/style.css ***!
  \******************************/
      /***/ function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        // extracted by mini-css-extract-plugin

        /***/
      },

    /***/ "./node_modules/regenerator-runtime/runtime.js":
      /*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
      /***/ function (module) {
        /**
         * Copyright (c) 2014-present, Facebook, Inc.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */

        var runtime = (function (exports) {
          "use strict";

          var Op = Object.prototype;
          var hasOwn = Op.hasOwnProperty;
          var undefined; // More compressible than void 0.
          var $Symbol = typeof Symbol === "function" ? Symbol : {};
          var iteratorSymbol = $Symbol.iterator || "@@iterator";
          var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
          var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

          function define(obj, key, value) {
            Object.defineProperty(obj, key, {
              value: value,
              enumerable: true,
              configurable: true,
              writable: true,
            });
            return obj[key];
          }
          try {
            // IE 8 has a broken Object.defineProperty that only works on DOM objects.
            define({}, "");
          } catch (err) {
            define = function (obj, key, value) {
              return (obj[key] = value);
            };
          }

          function wrap(innerFn, outerFn, self, tryLocsList) {
            // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
            var protoGenerator =
              outerFn && outerFn.prototype instanceof Generator
                ? outerFn
                : Generator;
            var generator = Object.create(protoGenerator.prototype);
            var context = new Context(tryLocsList || []);

            // The ._invoke method unifies the implementations of the .next,
            // .throw, and .return methods.
            generator._invoke = makeInvokeMethod(innerFn, self, context);

            return generator;
          }
          exports.wrap = wrap;

          // Try/catch helper to minimize deoptimizations. Returns a completion
          // record like context.tryEntries[i].completion. This interface could
          // have been (and was previously) designed to take a closure to be
          // invoked without arguments, but in all the cases we care about we
          // already have an existing method we want to call, so there's no need
          // to create a new function object. We can even get away with assuming
          // the method takes exactly one argument, since that happens to be true
          // in every case, so we don't have to touch the arguments object. The
          // only additional allocation required is the completion record, which
          // has a stable shape and so hopefully should be cheap to allocate.
          function tryCatch(fn, obj, arg) {
            try {
              return { type: "normal", arg: fn.call(obj, arg) };
            } catch (err) {
              return { type: "throw", arg: err };
            }
          }

          var GenStateSuspendedStart = "suspendedStart";
          var GenStateSuspendedYield = "suspendedYield";
          var GenStateExecuting = "executing";
          var GenStateCompleted = "completed";

          // Returning this object from the innerFn has the same effect as
          // breaking out of the dispatch switch statement.
          var ContinueSentinel = {};

          // Dummy constructor functions that we use as the .constructor and
          // .constructor.prototype properties for functions that return Generator
          // objects. For full spec compliance, you may wish to configure your
          // minifier not to mangle the names of these two functions.
          function Generator() {}
          function GeneratorFunction() {}
          function GeneratorFunctionPrototype() {}

          // This is a polyfill for %IteratorPrototype% for environments that
          // don't natively support it.
          var IteratorPrototype = {};
          define(IteratorPrototype, iteratorSymbol, function () {
            return this;
          });

          var getProto = Object.getPrototypeOf;
          var NativeIteratorPrototype =
            getProto && getProto(getProto(values([])));
          if (
            NativeIteratorPrototype &&
            NativeIteratorPrototype !== Op &&
            hasOwn.call(NativeIteratorPrototype, iteratorSymbol)
          ) {
            // This environment has a native %IteratorPrototype%; use it instead
            // of the polyfill.
            IteratorPrototype = NativeIteratorPrototype;
          }

          var Gp =
            (GeneratorFunctionPrototype.prototype =
            Generator.prototype =
              Object.create(IteratorPrototype));
          GeneratorFunction.prototype = GeneratorFunctionPrototype;
          define(Gp, "constructor", GeneratorFunctionPrototype);
          define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
          GeneratorFunction.displayName = define(
            GeneratorFunctionPrototype,
            toStringTagSymbol,
            "GeneratorFunction"
          );

          // Helper for defining the .next, .throw, and .return methods of the
          // Iterator interface in terms of a single ._invoke method.
          function defineIteratorMethods(prototype) {
            ["next", "throw", "return"].forEach(function (method) {
              define(prototype, method, function (arg) {
                return this._invoke(method, arg);
              });
            });
          }

          exports.isGeneratorFunction = function (genFun) {
            var ctor = typeof genFun === "function" && genFun.constructor;
            return ctor
              ? ctor === GeneratorFunction ||
                  // For the native GeneratorFunction constructor, the best we can
                  // do is to check its .name property.
                  (ctor.displayName || ctor.name) === "GeneratorFunction"
              : false;
          };

          exports.mark = function (genFun) {
            if (Object.setPrototypeOf) {
              Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
            } else {
              genFun.__proto__ = GeneratorFunctionPrototype;
              define(genFun, toStringTagSymbol, "GeneratorFunction");
            }
            genFun.prototype = Object.create(Gp);
            return genFun;
          };

          // Within the body of any async function, `await x` is transformed to
          // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
          // `hasOwn.call(value, "__await")` to determine if the yielded value is
          // meant to be awaited.
          exports.awrap = function (arg) {
            return { __await: arg };
          };

          function AsyncIterator(generator, PromiseImpl) {
            function invoke(method, arg, resolve, reject) {
              var record = tryCatch(generator[method], generator, arg);
              if (record.type === "throw") {
                reject(record.arg);
              } else {
                var result = record.arg;
                var value = result.value;
                if (
                  value &&
                  typeof value === "object" &&
                  hasOwn.call(value, "__await")
                ) {
                  return PromiseImpl.resolve(value.__await).then(
                    function (value) {
                      invoke("next", value, resolve, reject);
                    },
                    function (err) {
                      invoke("throw", err, resolve, reject);
                    }
                  );
                }

                return PromiseImpl.resolve(value).then(
                  function (unwrapped) {
                    // When a yielded Promise is resolved, its final value becomes
                    // the .value of the Promise<{value,done}> result for the
                    // current iteration.
                    result.value = unwrapped;
                    resolve(result);
                  },
                  function (error) {
                    // If a rejected Promise was yielded, throw the rejection back
                    // into the async generator function so it can be handled there.
                    return invoke("throw", error, resolve, reject);
                  }
                );
              }
            }

            var previousPromise;

            function enqueue(method, arg) {
              function callInvokeWithMethodAndArg() {
                return new PromiseImpl(function (resolve, reject) {
                  invoke(method, arg, resolve, reject);
                });
              }

              return (previousPromise =
                // If enqueue has been called before, then we want to wait until
                // all previous Promises have been resolved before calling invoke,
                // so that results are always delivered in the correct order. If
                // enqueue has not been called before, then it is important to
                // call invoke immediately, without waiting on a callback to fire,
                // so that the async generator function has the opportunity to do
                // any necessary setup in a predictable way. This predictability
                // is why the Promise constructor synchronously invokes its
                // executor callback, and why async functions synchronously
                // execute code before the first await. Since we implement simple
                // async functions in terms of async generators, it is especially
                // important to get this right, even though it requires care.
                previousPromise
                  ? previousPromise.then(
                      callInvokeWithMethodAndArg,
                      // Avoid propagating failures to Promises returned by later
                      // invocations of the iterator.
                      callInvokeWithMethodAndArg
                    )
                  : callInvokeWithMethodAndArg());
            }

            // Define the unified helper method that is used to implement .next,
            // .throw, and .return (see defineIteratorMethods).
            this._invoke = enqueue;
          }

          defineIteratorMethods(AsyncIterator.prototype);
          define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
            return this;
          });
          exports.AsyncIterator = AsyncIterator;

          // Note that simple async functions are implemented on top of
          // AsyncIterator objects; they just return a Promise for the value of
          // the final result produced by the iterator.
          exports.async = function (
            innerFn,
            outerFn,
            self,
            tryLocsList,
            PromiseImpl
          ) {
            if (PromiseImpl === void 0) PromiseImpl = Promise;

            var iter = new AsyncIterator(
              wrap(innerFn, outerFn, self, tryLocsList),
              PromiseImpl
            );

            return exports.isGeneratorFunction(outerFn)
              ? iter // If outerFn is a generator, return the full iterator.
              : iter.next().then(function (result) {
                  return result.done ? result.value : iter.next();
                });
          };

          function makeInvokeMethod(innerFn, self, context) {
            var state = GenStateSuspendedStart;

            return function invoke(method, arg) {
              if (state === GenStateExecuting) {
                throw new Error("Generator is already running");
              }

              if (state === GenStateCompleted) {
                if (method === "throw") {
                  throw arg;
                }

                // Be forgiving, per 25.3.3.3.3 of the spec:
                // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
                return doneResult();
              }

              context.method = method;
              context.arg = arg;

              while (true) {
                var delegate = context.delegate;
                if (delegate) {
                  var delegateResult = maybeInvokeDelegate(delegate, context);
                  if (delegateResult) {
                    if (delegateResult === ContinueSentinel) continue;
                    return delegateResult;
                  }
                }

                if (context.method === "next") {
                  // Setting context._sent for legacy support of Babel's
                  // function.sent implementation.
                  context.sent = context._sent = context.arg;
                } else if (context.method === "throw") {
                  if (state === GenStateSuspendedStart) {
                    state = GenStateCompleted;
                    throw context.arg;
                  }

                  context.dispatchException(context.arg);
                } else if (context.method === "return") {
                  context.abrupt("return", context.arg);
                }

                state = GenStateExecuting;

                var record = tryCatch(innerFn, self, context);
                if (record.type === "normal") {
                  // If an exception is thrown from innerFn, we leave state ===
                  // GenStateExecuting and loop back for another invocation.
                  state = context.done
                    ? GenStateCompleted
                    : GenStateSuspendedYield;

                  if (record.arg === ContinueSentinel) {
                    continue;
                  }

                  return {
                    value: record.arg,
                    done: context.done,
                  };
                } else if (record.type === "throw") {
                  state = GenStateCompleted;
                  // Dispatch the exception by looping back around to the
                  // context.dispatchException(context.arg) call above.
                  context.method = "throw";
                  context.arg = record.arg;
                }
              }
            };
          }

          // Call delegate.iterator[context.method](context.arg) and handle the
          // result, either by returning a { value, done } result from the
          // delegate iterator, or by modifying context.method and context.arg,
          // setting context.delegate to null, and returning the ContinueSentinel.
          function maybeInvokeDelegate(delegate, context) {
            var method = delegate.iterator[context.method];
            if (method === undefined) {
              // A .throw or .return when the delegate iterator has no .throw
              // method always terminates the yield* loop.
              context.delegate = null;

              if (context.method === "throw") {
                // Note: ["return"] must be used for ES3 parsing compatibility.
                if (delegate.iterator["return"]) {
                  // If the delegate iterator has a return method, give it a
                  // chance to clean up.
                  context.method = "return";
                  context.arg = undefined;
                  maybeInvokeDelegate(delegate, context);

                  if (context.method === "throw") {
                    // If maybeInvokeDelegate(context) changed context.method from
                    // "return" to "throw", let that override the TypeError below.
                    return ContinueSentinel;
                  }
                }

                context.method = "throw";
                context.arg = new TypeError(
                  "The iterator does not provide a 'throw' method"
                );
              }

              return ContinueSentinel;
            }

            var record = tryCatch(method, delegate.iterator, context.arg);

            if (record.type === "throw") {
              context.method = "throw";
              context.arg = record.arg;
              context.delegate = null;
              return ContinueSentinel;
            }

            var info = record.arg;

            if (!info) {
              context.method = "throw";
              context.arg = new TypeError("iterator result is not an object");
              context.delegate = null;
              return ContinueSentinel;
            }

            if (info.done) {
              // Assign the result of the finished delegate to the temporary
              // variable specified by delegate.resultName (see delegateYield).
              context[delegate.resultName] = info.value;

              // Resume execution at the desired location (see delegateYield).
              context.next = delegate.nextLoc;

              // If context.method was "throw" but the delegate handled the
              // exception, let the outer generator proceed normally. If
              // context.method was "next", forget context.arg since it has been
              // "consumed" by the delegate iterator. If context.method was
              // "return", allow the original .return call to continue in the
              // outer generator.
              if (context.method !== "return") {
                context.method = "next";
                context.arg = undefined;
              }
            } else {
              // Re-yield the result returned by the delegate method.
              return info;
            }

            // The delegate iterator is finished, so forget it and continue with
            // the outer generator.
            context.delegate = null;
            return ContinueSentinel;
          }

          // Define Generator.prototype.{next,throw,return} in terms of the
          // unified ._invoke helper method.
          defineIteratorMethods(Gp);

          define(Gp, toStringTagSymbol, "Generator");

          // A Generator should always return itself as the iterator object when the
          // @@iterator function is called on it. Some browsers' implementations of the
          // iterator prototype chain incorrectly implement this, causing the Generator
          // object to not be returned from this call. This ensures that doesn't happen.
          // See https://github.com/facebook/regenerator/issues/274 for more details.
          define(Gp, iteratorSymbol, function () {
            return this;
          });

          define(Gp, "toString", function () {
            return "[object Generator]";
          });

          function pushTryEntry(locs) {
            var entry = { tryLoc: locs[0] };

            if (1 in locs) {
              entry.catchLoc = locs[1];
            }

            if (2 in locs) {
              entry.finallyLoc = locs[2];
              entry.afterLoc = locs[3];
            }

            this.tryEntries.push(entry);
          }

          function resetTryEntry(entry) {
            var record = entry.completion || {};
            record.type = "normal";
            delete record.arg;
            entry.completion = record;
          }

          function Context(tryLocsList) {
            // The root entry object (effectively a try statement without a catch
            // or a finally block) gives us a place to store values thrown from
            // locations where there is no enclosing try statement.
            this.tryEntries = [{ tryLoc: "root" }];
            tryLocsList.forEach(pushTryEntry, this);
            this.reset(true);
          }

          exports.keys = function (object) {
            var keys = [];
            for (var key in object) {
              keys.push(key);
            }
            keys.reverse();

            // Rather than returning an object with a next method, we keep
            // things simple and return the next function itself.
            return function next() {
              while (keys.length) {
                var key = keys.pop();
                if (key in object) {
                  next.value = key;
                  next.done = false;
                  return next;
                }
              }

              // To avoid creating an additional object, we just hang the .value
              // and .done properties off the next function object itself. This
              // also ensures that the minifier will not anonymize the function.
              next.done = true;
              return next;
            };
          };

          function values(iterable) {
            if (iterable) {
              var iteratorMethod = iterable[iteratorSymbol];
              if (iteratorMethod) {
                return iteratorMethod.call(iterable);
              }

              if (typeof iterable.next === "function") {
                return iterable;
              }

              if (!isNaN(iterable.length)) {
                var i = -1,
                  next = function next() {
                    while (++i < iterable.length) {
                      if (hasOwn.call(iterable, i)) {
                        next.value = iterable[i];
                        next.done = false;
                        return next;
                      }
                    }

                    next.value = undefined;
                    next.done = true;

                    return next;
                  };

                return (next.next = next);
              }
            }

            // Return an iterator with no values.
            return { next: doneResult };
          }
          exports.values = values;

          function doneResult() {
            return { value: undefined, done: true };
          }

          Context.prototype = {
            constructor: Context,

            reset: function (skipTempReset) {
              this.prev = 0;
              this.next = 0;
              // Resetting context._sent for legacy support of Babel's
              // function.sent implementation.
              this.sent = this._sent = undefined;
              this.done = false;
              this.delegate = null;

              this.method = "next";
              this.arg = undefined;

              this.tryEntries.forEach(resetTryEntry);

              if (!skipTempReset) {
                for (var name in this) {
                  // Not sure about the optimal order of these conditions:
                  if (
                    name.charAt(0) === "t" &&
                    hasOwn.call(this, name) &&
                    !isNaN(+name.slice(1))
                  ) {
                    this[name] = undefined;
                  }
                }
              }
            },

            stop: function () {
              this.done = true;

              var rootEntry = this.tryEntries[0];
              var rootRecord = rootEntry.completion;
              if (rootRecord.type === "throw") {
                throw rootRecord.arg;
              }

              return this.rval;
            },

            dispatchException: function (exception) {
              if (this.done) {
                throw exception;
              }

              var context = this;
              function handle(loc, caught) {
                record.type = "throw";
                record.arg = exception;
                context.next = loc;

                if (caught) {
                  // If the dispatched exception was caught by a catch block,
                  // then let that catch block handle the exception normally.
                  context.method = "next";
                  context.arg = undefined;
                }

                return !!caught;
              }

              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i];
                var record = entry.completion;

                if (entry.tryLoc === "root") {
                  // Exception thrown outside of any try block that could handle
                  // it, so set the completion value of the entire function to
                  // throw the exception.
                  return handle("end");
                }

                if (entry.tryLoc <= this.prev) {
                  var hasCatch = hasOwn.call(entry, "catchLoc");
                  var hasFinally = hasOwn.call(entry, "finallyLoc");

                  if (hasCatch && hasFinally) {
                    if (this.prev < entry.catchLoc) {
                      return handle(entry.catchLoc, true);
                    } else if (this.prev < entry.finallyLoc) {
                      return handle(entry.finallyLoc);
                    }
                  } else if (hasCatch) {
                    if (this.prev < entry.catchLoc) {
                      return handle(entry.catchLoc, true);
                    }
                  } else if (hasFinally) {
                    if (this.prev < entry.finallyLoc) {
                      return handle(entry.finallyLoc);
                    }
                  } else {
                    throw new Error("try statement without catch or finally");
                  }
                }
              }
            },

            abrupt: function (type, arg) {
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i];
                if (
                  entry.tryLoc <= this.prev &&
                  hasOwn.call(entry, "finallyLoc") &&
                  this.prev < entry.finallyLoc
                ) {
                  var finallyEntry = entry;
                  break;
                }
              }

              if (
                finallyEntry &&
                (type === "break" || type === "continue") &&
                finallyEntry.tryLoc <= arg &&
                arg <= finallyEntry.finallyLoc
              ) {
                // Ignore the finally entry if control is not jumping to a
                // location outside the try/catch block.
                finallyEntry = null;
              }

              var record = finallyEntry ? finallyEntry.completion : {};
              record.type = type;
              record.arg = arg;

              if (finallyEntry) {
                this.method = "next";
                this.next = finallyEntry.finallyLoc;
                return ContinueSentinel;
              }

              return this.complete(record);
            },

            complete: function (record, afterLoc) {
              if (record.type === "throw") {
                throw record.arg;
              }

              if (record.type === "break" || record.type === "continue") {
                this.next = record.arg;
              } else if (record.type === "return") {
                this.rval = this.arg = record.arg;
                this.method = "return";
                this.next = "end";
              } else if (record.type === "normal" && afterLoc) {
                this.next = afterLoc;
              }

              return ContinueSentinel;
            },

            finish: function (finallyLoc) {
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i];
                if (entry.finallyLoc === finallyLoc) {
                  this.complete(entry.completion, entry.afterLoc);
                  resetTryEntry(entry);
                  return ContinueSentinel;
                }
              }
            },

            catch: function (tryLoc) {
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i];
                if (entry.tryLoc === tryLoc) {
                  var record = entry.completion;
                  if (record.type === "throw") {
                    var thrown = record.arg;
                    resetTryEntry(entry);
                  }
                  return thrown;
                }
              }

              // The context.catch method must only be called with a location
              // argument that corresponds to a known catch block.
              throw new Error("illegal catch attempt");
            },

            delegateYield: function (iterable, resultName, nextLoc) {
              this.delegate = {
                iterator: values(iterable),
                resultName: resultName,
                nextLoc: nextLoc,
              };

              if (this.method === "next") {
                // Deliberately forget the last sent value so that we don't
                // accidentally pass it on to the delegate.
                this.arg = undefined;
              }

              return ContinueSentinel;
            },
          };

          // Regardless of whether this script is executing as a CommonJS module
          // or not, return the runtime object so that we can declare the variable
          // regeneratorRuntime in the outer scope, which allows this module to be
          // injected easily by `bin/regenerator --include-runtime script.js`.
          return exports;
        })(
          // If this script is executing as a CommonJS module, use module.exports
          // as the regeneratorRuntime namespace. Otherwise create a new empty
          // object. Either way, the resulting object will be used to initialize
          // the regeneratorRuntime variable at the top of this file.
          true ? module.exports : 0
        );

        try {
          regeneratorRuntime = runtime;
        } catch (accidentalStrictMode) {
          // This module should not be running in strict mode, so the above
          // assignment should always work unless something is misconfigured. Just
          // in case runtime.js accidentally runs in strict mode, in modern engines
          // we can explicitly access globalThis. In older engines we can escape
          // strict mode using a global Function call. This could conceivably fail
          // if a Content Security Policy forbids using Function, but in that case
          // the proper solution is to fix the accidental strict mode problem. If
          // you've misconfigured your bundler to force strict mode and applied a
          // CSP to forbid Function, and you're not willing to fix either of those
          // problems, please detail your unique predicament in a GitHub issue.
          if (typeof globalThis === "object") {
            globalThis.regeneratorRuntime = runtime;
          } else {
            Function("r", "regeneratorRuntime = r")(runtime);
          }
        }

        /***/
      },

    /***/ "./src/crypto/_candleData.json":
      /*!*************************************!*\
  !*** ./src/crypto/_candleData.json ***!
  \*************************************/
      /***/ function (module) {
        "use strict";
        module.exports = JSON.parse(
          '{"strategy":"SampleStrategy","pair":"BTC/USDT","timeframe":"5m","timeframe_ms":300000,"columns":["date","open","high","low","close","volume","adx","rsi","fastd","fastk","macd","macdsignal","macdhist","mfi","bb_lowerband","bb_middleband","bb_upperband","bb_percent","bb_width","sar","tema","htsine","htleadsine","buy","sell","__date_ts","_buy_signal_open","_sell_signal_open"],"data":[["2021-11-30 05:30:00",56826.92,56879.4,56743.32,56877.65,108.52036,21.845866735350107,37.639872911074555,13.741929162909416,28.28595493788194,-74.64390579297469,-51.58877480319369,-23.055130989781006,36.276145406704984,56882.5148469333,57100.66266666667,57318.81048640004,-0.011150345071622556,0.007640815694446144,57211.61384384,56864.79259996213,-0.9068332194148006,-0.34318973995198154,null,null,1638250200000,null,null],["2021-11-30 05:35:00",56877.65,56941.98,56774.62,56808.96,115.07562,22.548392369600098,35.055595150507564,16.862448927358766,16.717603911980316,-86.62387860845047,-58.595795564245044,-28.028083044205424,36.950996504053855,56842.88785704669,57089.61516666667,57336.34247628665,-0.06875577960735181,0.00864350929322912,57164.784459456,56811.790358670725,-0.8091917222296532,-0.1567281231733835,null,null,1638250500000,null,null],["2021-11-30 05:40:00",56808.95,56831.07,56555,56621.06,242.4053,24.263503832293114,29.15809302481508,19.50425376794976,13.509202453987255,-110.01190427745314,-68.87901730688667,-41.132886970566474,26.860256582021947,56758.24393442286,57068.44249999999,57378.64106557712,-0.22112277367826078,0.010871106761924607,57122.6380135104,56691.00121449531,-0.7069522656994012,0.00021849402769859958,null,null,1638250800000,null,null],["2021-11-30 05:45:00",56621.07,56621.07,56422,56576.73,243.99143,26.33084116780998,27.962872140907347,19.450621056219344,28.125056802690683,-130.61845539388014,-81.22690492428536,-49.391550469594776,23.515151421977944,56651.33317729749,57036.98066666666,57422.62815603583,-0.0967245727691924,0.01352271753734499,57054.52145188915,56598.02827732156,-0.5825144502897847,0.1628508607483586,null,null,1638251100000,null,null],["2021-11-30 05:50:00",56576.73,56700,56409.77,56441.55,121.73196,27.44472836271816,24.645285298840953,15.86852878813314,5.971327107721714,-156.05824951195245,-96.19317384181878,-59.86507567013368,22.542499852627177,56561.70727518503,57002.20733333334,57442.70739148165,-0.1363873545103709,0.01545554387297274,56965.96844862467,56479.850917380165,-0.46929013554068283,0.2925681884244663,null,null,1638251400000,null,null],["2021-11-30 05:55:00",56441.55,56453.33,56280.37,56286.07,239.593,28.956281461160298,21.48755967021193,11.652639550474097,0.8615347410101245,-186.61423351315898,-114.27738577608682,-72.33684773707216,15.19606822378193,56439.11259233274,56959.34299999999,57479.573407667245,-0.1470911639123474,0.01826672781907796,56876.97669684472,56336.78781107659,-0.2993059197131134,0.46304978248352435,null,null,1638251700000,null,null],["2021-11-30 06:00:00",56297.88,56363.64,56158.05,56260.14,379.0813,30.744722169665835,21.004212028732034,7.33393395017139,15.16894000178256,-210.49593911509146,-133.52109644388776,-76.9748426712037,12.809800058826,56315.5978971599,56918.753500000006,57521.90910284011,-0.045973126087834666,0.02119356330739403,56769.587491412676,56242.506503202545,-0.1960749363349251,0.5547351539325633,null,null,1638252000000,null,null],["2021-11-30 06:05:00",56260.15,56358.01,56077,56220,196.7299,32.63413933202407,20.24502233620954,12.99464192871038,22.95345104333868,-230.00991428338602,-152.81886001178742,-77.1910542715986,10.19407905622815,56202.863810956245,56873.654166666674,57544.4445223771,0.012773133139046029,0.02358879047035369,56647.27999313014,56173.51660011767,-0.1643253848026437,0.5812989106903612,null,null,1638252300000,null,null],["2021-11-30 06:10:00",56219.99,56333.73,56050,56115.33,201.02186,34.463081782308315,18.37947391832708,16.057720091963503,10.0507692307695,-251.02718925246154,-172.46052585992226,-78.56666339253928,7.435459765336179,56096.94171291218,56824.69416666667,57552.44662042116,0.012633613939023408,0.0256139505694476,56533.223994504115,56089.357513404815,-0.08951916267323058,0.6409682112311338,null,null,1638252600000,null,null],["2021-11-30 06:15:00",56113.02,56113.75,55875.55,56056.12,394.41255,36.59373672469643,17.40255440326389,21.4188666908824,31.25237979853925,-269.35631135926087,-191.83968295978997,-77.5166283994709,4.278219576692497,55970.979114962705,56770.36899999999,57569.75888503728,0.053253666721918815,0.028162222621356797,56436.57919560329,56017.69092958525,-0.12118666895664366,0.61620330158146,null,null,1638252900000,null,null],["2021-11-30 06:20:00",56056.11,56268.45,56050.59,56181.5,213.74831,37.14532163756015,26.33196296657675,34.66208691683578,62.68311172119881,-270.6453237066453,-207.60081110916104,-63.04451259748424,11.58856961853213,55896.81861755777,56723.76866666666,57550.718715775554,0.17212731455122124,0.02915709123518948,56333.73,56044.10334452768,-0.09117884957932156,0.6396881684830137,null,null,1638253200000,null,null],["2021-11-30 06:25:00",56181.5,56355.42,56148.53,56330.18,114.8476,36.95070152868222,35.26870720354173,62.72237922218943,94.23164614683046,-256.7104436516747,-217.42273761766378,-39.28770603401094,15.88059377545174,55857.608214426094,56679.0065,57500.40478557391,0.2876629972776978,0.028984216072097474,55875.55,56143.49440892591,-0.095301964923876,0.6364996548451308,1,null,1638253500000,56181.5,null],["2021-11-30 06:30:00",56330.18,56406.03,56211.46,56370.02,130.50245,36.37440523708814,37.45809550845337,83.37552201391935,93.21180817372901,-239.68920778352185,-221.8760316508354,-17.813176132686465,20.247925016486036,55831.72389659432,56639.265166666664,57446.80643673901,0.3332932466457434,0.02851524530539286,55885.1474,56233.75615587679,-0.08763863347107001,0.642416197518437,null,null,1638253800000,null,null],["2021-11-30 06:35:00",56370.02,56429.51,56328.37,56376.34,108.76272,35.6535962884549,37.81739767689108,92.61509612933331,90.40183406744067,-223.11782118843257,-222.12438955835484,-0.9934316300777368,24.310006011499365,55825.54103718988,56599.27100000001,57373.00096281013,0.3559374648033895,0.02734063351487776,55905.982704,56298.83218136468,-0.07154830521556281,0.6547022707835534,null,null,1638254100000,null,null],["2021-11-30 06:40:00",56376.33,56417.17,56276.48,56342.88,91.96756,35.225452119432184,36.61796337737938,86.91709887577288,77.13765438614922,-210.2610616488164,-219.75172397644715,9.490662327630758,24.462275601254085,55833.12092844728,56555.271166666666,57277.42140488605,0.3529453045737662,0.02553785786266436,55937.39434176,56326.10991336186,-0.003469818218086821,0.7046489925272401,null,null,1638254400000,null,null],["2021-11-30 06:45:00",56342.87,56425.55,56333.05,56425.55,78.81893,34.75469575881353,41.55052084025804,88.71004515824342,98.59064702114063,-191.1972066061062,-214.04082050237895,22.843613896272757,23.442455963590326,55862.89892578569,56513.41233333333,57163.925740880964,0.43246693126237434,0.023021558270476104,55966.9212812544,56384.52379565718,0.07090164398711142,0.7554622469989523,null,null,1638254700000,null,null],["2021-11-30 06:50:00",56425.55,56454.38,56390,56452.61,76.97929,34.05617995392877,43.11114279055726,91.66655548858212,99.27136505845678,-171.92361981645809,-205.61738036519478,33.69376054873669,27.930093100581832,55893.602903075975,56479.17416666667,57064.74543025737,0.4773177337086349,0.02073582952409009,55994.676604379136,56434.59255278122,0.1967355005521949,0.8324005164607055,null,null,1638255000000,null,null],["2021-11-30 06:55:00",56452.6,56561.36,56435.31,56534.19,142.50356,32.49632825089736,47.64930590632632,96.10822100678155,90.4626509407475,-148.35618150756636,-194.1651405936691,45.80895908610273,34.82160674257464,55926.08236931141,56453.5765,56981.0706306886,0.5764117506812501,0.01868771345916749,56031.4528760288,56504.74559465438,0.2675284443811868,0.8705038901231871,null,null,1638255300000,null,null],["2021-11-30 07:00:00",56534.2,56626.8,56453.32,56607.74,122.70833,30.542851774944406,51.412536083019376,94.76442536808314,94.5592601050454,-122.33375911162875,-179.79886429726102,57.46510518563227,39.75757635842274,55960.83180575734,56433.2855,56905.739194242655,0.684626030154818,0.016743795441172982,56084.44358842592,56582.68710920705,0.3369327843584956,0.9040087872914987,null,null,1638255600000,null,null],["2021-11-30 07:05:00",56607.73,56767.78,56607.72,56712.07,257.396,28.951406891986863,56.220092523511326,90.73568681629017,87.18514940307786,-92.22908334145905,-162.28490810610063,70.05582476464159,49.77881750183648,55979.859845830186,56424.7605,56869.66115416981,0.8228917481995227,0.015769695794094186,56149.526357814815,56679.38066738452,0.41461058116383953,0.9366403729688235,null,null,1638255900000,null,null],["2021-11-30 07:10:00",56712.08,56726.8,56526.55,56601.37,172.40413,26.90693002891026,50.50932097245927,79.23165424672122,55.950553232040676,-76.42252445210761,-145.11243137530204,68.68990692319443,54.217392204806536,56001.488828027526,56413.999666666656,56826.510505305785,0.7271095881401328,0.014624413836158817,56236.08186772074,56681.796336508305,0.6013081421878171,0.9901795595953421,null,null,1638256200000,null,null],["2021-11-30 07:15:00",56601.38,56648.91,56492.52,56497.44,157.80289,25.19104497578265,45.80502786913593,53.941034334023335,18.68740036695174,-71.45826863335242,-130.38159882691212,58.92333019355971,55.12541819635527,56032.627288661475,56399.2215,56765.815711338524,0.633960789562638,0.012999974169449289,56310.51960623984,56626.838046155695,0.7675962450980741,0.9959810738714412,null,null,1638256500000,null,null],["2021-11-30 07:20:00",56497.45,56497.45,56390.01,56439.38,178.1616,24.250616011670704,43.37461920140478,29.23558402475125,13.068798475261605,-71.3861221242696,-118.58250348638362,47.19638136211401,55.66418778898328,56043.045344768005,56387.88333333334,56732.72132189867,0.5746679141716748,0.012230925091720374,56374.53606136626,56558.7606063786,0.85802671380416,0.9698901290578241,null,null,1638256800000,null,null],["2021-11-30 07:25:00",56439.37,56500,56430.23,56479.73,53.31707,23.357235649235825,45.53741537404251,18.502033191821326,23.7499007332509,-67.29727660149365,-108.32545810940562,41.02818150791197,68.37413067989401,56044.6601011267,56384.386,56724.1118988733,0.6403248917969051,0.01205035375833661,56390.01,56532.07701098198,0.9582048946877676,0.8798442806758521,null,null,1638257100000,null,null],["2021-11-30 07:30:00",56479.73,56518.12,56355,56462.3,89.28481,22.994129526292603,44.74242385462945,21.892767048345934,28.859601936525568,-64.71727197137807,-99.6038208818001,34.886548910422036,61.1527236001534,56045.485030911725,56380.78766666667,56716.09030242162,0.621550391558665,0.01189421608429153,56767.78,56504.9431417415,0.9939065215314512,0.7807397709404069,null,null,1638257400000,null,null],["2021-11-30 07:35:00",56462.3,56499.98,56370.01,56419.23,92.85786,22.656959554988184,42.756081151212406,24.821043777204096,21.853628661836087,-65.39416552930197,-92.76188981130048,27.367724281998505,55.383941465750055,56049.87445180095,56385.2785,56720.68254819905,0.5506128357458787,0.01189686588846244,56759.5244,56465.73446956007,0.9954194975235459,0.6362660131295866,null,null,1638257700000,null,null],["2021-11-30 07:40:00",56419.24,56431.9,56212.54,56212.54,114.88736,23.232789446514346,34.77695245073157,16.904410199453796,0,-81.66735375241842,-90.54298259952407,8.875628847105645,48.39607332800277,56052.90478483051,56386.530999999995,56720.15721516948,0.23924261330662105,0.011833542842686413,56751.433912,56339.72332442328,0.8498597254240999,0.22828996340808655,null,null,1638258000000,null,null],["2021-11-30 07:45:00",56212.54,56349.99,56212.12,56289.7,63.47289,23.769652158512663,39.32889643525699,15.735523279434867,25.352941176468782,-87.33110687591397,-89.90060745480204,2.569500578888068,43.279124849726216,56061.90641187263,56389.811,56717.71558812737,0.34734736318920073,0.011629923289771995,56729.878155520004,56298.38004563214,0.5988372714553529,-0.14285922686173538,null,null,1638258300000,null,null],["2021-11-30 07:50:00",56289.7,56500,56288.5,56499.99,61.29698,22.923744929794196,49.64369522226172,39.80936819171993,94.07516339869129,-73.99802334730339,-86.7200906333023,12.722067285998918,47.75670633758223,56092.14374762359,56402.968166666666,56713.79258570974,0.6560717681577745,0.011021562486733473,56698.8126661888,56377.609055039225,0.21105959657003254,-0.5419362525537792,null,null,1638258600000,null,null],["2021-11-30 07:55:00",56500,56576.16,56452.44,56510.08,89.80752,21.554921784051903,50.082217217521816,67.09208437675441,81.8481485551034,-61.90369268132781,-81.7568110429074,19.85311836157959,48.10503830806414,56173.13572734972,56427.855833333335,56682.57593931695,0.6614010137699061,0.009028168879425886,56669.611106217475,56435.48286658516,-0.18332092251040102,-0.8247509958042991,null,null,1638258900000,null,null],["2021-11-30 08:00:00",56510.08,56607.49,56236.54,56554.01,271.50226,21.536181286764588,52.04046313154996,87.46558063516204,86.4734299516917,-48.21823483554908,-75.04909580143574,26.830860965886657,38.97969899627742,56219.42107255324,56442.81416666667,56666.2072607801,0.7488792990101789,0.007915731963816933,56642.161639844424,56494.56399749272,-0.6569345262464793,-0.9976443398756439,null,null,1638259200000,null,null],["2021-11-30 08:05:00",56554.01,56554.01,56314.7,56427.95,126.4499,21.518779396426368,46.41369673303793,74.30365016249013,54.58937198067557,-47.00258284998563,-69.43979321114571,22.437210361160083,31.622987261151685,56240.85130651292,56450.523,56660.19469348708,0.4461706069508255,0.007428511990476273,56616.35914145376,56470.20800631908,-0.8085577568460416,-0.9878101963039709,null,null,1638259500000,null,null],["2021-11-30 08:10:00",56427.94,56560.7,56411.63,56495.19,105.56302,21.44626969624724,49.5472539347528,70.2630600501522,69.72637821808964,-40.150632344491896,-63.58196103781495,23.431328693323053,30.97797079508584,56256.26861896675,56458.523166666666,56660.77771436658,0.5906452629874582,0.00716471265473436,56607.49,56486.54732767138,-0.9625867994480013,-0.8722588733914696,null,null,1638259800000,null,null],["2021-11-30 08:15:00",56495.19,56510,56413.62,56460.48,72.83473,21.37893926036662,47.98726534052383,61.56169073660624,60.369322011053804,-37.093626878995565,-58.28429420605107,21.190667327055507,18.796545927121652,56264.00967218866,56462.68783333333,56661.365994478,0.4944436939606088,0.007037502774615686,56583.7678,56479.333860994986,-0.9922005189073482,-0.6134494147016624,null,null,1638260100000,null,null],["2021-11-30 08:20:00",56460.22,56462.98,56333.84,56358.79,79.87515,21.785060351046216,43.651104458103354,54.35054140270544,32.95592397897317,-42.38784052421397,-55.10500346968365,12.717162945469681,19.92094480097421,56270.173829605315,56464.6725,56659.171170394686,0.22780662257192213,0.0068892162757053154,56561.468932,56424.364656494225,-0.717796111911631,-0.015233025752284834,null,null,1638260400000,null,null],["2021-11-30 08:25:00",56358.79,56545.55,56328.29,56537.33,89.69547,21.397609214637548,51.87361749573667,61.27508199667619,90.50000000000189,-31.810169271622726,-50.44603663007147,18.635867358448742,26.863299317357765,56276.76355129113,56468.45616666666,56660.1487820422,0.6796465481949104,0.006789369796466655,56212.12,56476.31319424357,0.02643015899925354,0.7255487068068351,null,null,1638260700000,null,null],["2021-11-30 08:30:00",56537.32,56640.57,56499.99,56627.7,121.55322,20.252150784966343,55.41959977506388,73.11154086093033,95.87869860381623,-15.951308099109156,-43.547090923879004,27.59578282476985,36.426466127814834,56278.08853454324,56476.31066666666,56674.532798790075,0.8818678865765646,0.007019655844495936,56218.7886,56553.63030254506,0.755009607065484,0.9975320366844125,null,null,1638261000000,null,null],["2021-11-30 08:35:00",56627.71,56636.74,56503.02,56525.88,104.63931,19.188510814557368,50.87158270782667,83.21734767943293,63.273344434481,-11.466886290458206,-37.13104999719484,25.664163706736637,31.567648830178168,56277.71277816358,56478.55699999999,56679.40122183641,0.6178102102398247,0.0071122292248512785,56235.659856,56552.09745728552,0.9526758722744582,0.8885955204518775,null,null,1638261300000,null,null],["2021-11-30 08:40:00",56525.89,56980,56427.5,56974.55,245.39625,19.56996554305118,64.64149598779032,86.10526050364365,99.16373847263398,27.96856539768487,-24.1111269182189,52.07969231590377,43.57782912545903,56246.73916365415,56490.12683333333,56733.514503012506,1.4951678474616625,0.008616998520724192,56251.85626176,56768.192952051504,0.9744337396772204,0.5301594397408476,null,null,1638261600000,null,null],["2021-11-30 08:45:00",56965.88,57386.58,56879.41,57124.91,601.95199,21.356594073854463,67.88962844689792,79.23711536843102,75.27426319817837,70.54108663030638,-5.180684208513842,75.72177083882022,61.38205120852432,56144.94494891876,56511.849,56878.75305108124,1.3354513914378334,0.012985030841275112,56295.5448860544,56975.97748183845,0.7951702327120731,0.13349042454846663,null,null,1638261900000,null,null],["2021-11-30 08:50:00",57124.91,57124.91,56800.21,57039.97,185.6778,22.470335325504802,64.296350631888,79.43271977396479,63.86015765108229,96.31589857461222,15.118632348111372,81.19726622650084,59.37617414914478,56107.747829016116,56530.355166666675,56952.962504317235,1.1029412979037179,0.014951518928356252,56382.827695170046,57059.89970660352,0.6783315251843771,-0.039898110676892806,null,null,1638262200000,null,null],["2021-11-30 08:55:00",57048.79,57108,56759.07,56762,145.32867,23.223891766159632,54.18838168171405,58.00386493587903,34.877173958376716,93.23797746459604,30.742501371408306,62.49547609318773,57.24267906440462,56096.7470547151,56546.858499999995,56996.96994528489,0.738986924520253,0.015919945235680685,56463.12787955644,56968.48468216909,0.5453092184424522,-0.2071297816624131,null,null,1638262500000,null,null],["2021-11-30 09:00:00",56762,57001.77,56667.69,56880.95,220.97013,23.313465080390017,57.283149040615164,48.67233876909793,47.27968469783504,99.2528486466108,44.4445708264488,54.808277820162,51.03744301846945,56100.44243108759,56567.25133333333,57034.060235579076,0.8360033036618515,0.016504563726986905,56537.00404919193,56959.940351228266,0.40104180260935746,-0.3641726857304044,null,null,1638262800000,null,null],["2021-11-30 09:05:00",56880.95,56938.34,56652.99,56676,120.12041,23.29881233746952,50.90256803608387,28.43116270287689,3.1366294524191876,86.4849802148965,52.85265270413834,33.63232751075815,46.82110501856704,56109.797658781514,56581.54083333333,57053.28400788515,0.6001171524701006,0.01667480834222547,56604.97012525657,56848.39010296424,0.2178830141324108,-0.5360519084496318,null,null,1638263100000,null,null],["2021-11-30 09:10:00",56676,56732.7,56568.09,56681.79,106.21304,22.72197678236472,51.06838852268748,23.611946436996217,20.419525160734697,75.95796101380984,57.47371436607264,18.484246647737194,50.120593747428565,56123.861860774574,56592.32683333333,57060.79180589209,0.5954854385142392,0.01655577703805701,57386.58,56775.84925002643,0.009015620009250123,-0.7007030372413997,null,null,1638263400000,null,null],["2021-11-30 09:15:00",56685.38,56873.05,56655.98,56799.19,86.442,22.806167615958383,54.42917207923659,22.11986160482809,42.80343020133065,76.20992077348637,61.220955647555385,14.988965125930989,54.75767962384235,56140.879558970795,56609.64349999999,57078.40744102919,0.7021769204173981,0.016561275148436357,57370.2102,56785.140822201,-0.1555323430444854,-0.8084798321056095,null,null,1638263700000,null,null],["2021-11-30 09:20:00",56799.19,56800.15,56585,56624.38,52.03351,22.41702681436081,49.02923161954587,25.400857223006568,12.979616306954629,61.593878753017634,61.295540268647834,0.2983384843698005,51.35947425693273,56185.17375860616,56628.85266666667,57072.53157472719,0.49495956807342123,0.015669712069645292,57354.167796,56705.08778594935,-0.32476370876979926,-0.898420810241069,null,null,1638264000000,null,null],["2021-11-30 09:25:00",56624.39,56627.99,56260,56463.9,287.6173,21.307687399968902,44.64981526790074,28.6139063834411,30.058672642038285,36.6388158737027,56.3641953896588,-19.725379515956107,46.88077515169299,56215.05014874361,56637.18733333333,57059.32451792304,0.2947499774252911,0.014906714279622089,57338.446240080004,56575.782963666024,-0.5421385811025428,-0.9775239824646025,null,null,1638264300000,null,null],["2021-11-30 09:30:00",56463.89,56517.99,56341.63,56496.99,103.91343,20.277586515176413,45.72630787125472,27.231940320354312,38.65753201207028,19.309250189064187,48.95320634953988,-29.643956160475696,50.60423605929487,56218.42118699032,56638.32266666667,57058.22414634301,0.33170734861948237,0.014827468749298555,57295.30839047681,56511.58610474263,-0.8417951200860878,-0.9769332712989545,null,null,1638264600000,null,null],["2021-11-30 09:35:00",56497,56570.27,56428.73,56548.6,56.5653,19.03773514291347,47.44319868239916,38.597433196422706,47.0760949351598,9.628943738833186,41.08835382739854,-31.459410088565356,49.93802566884961,56218.75477176669,56638.471333333335,57058.18789489998,0.3929380663490141,0.014820900059131023,57253.89605485773,56499.763347549626,-0.974358503004421,-0.8480753281987375,null,null,1638264900000,null,null],["2021-11-30 09:40:00",56548.59,56548.6,56423.57,56468.1,61.94142,17.91368975876568,45.049392663728156,41.41998740815575,38.52633527723743,-4.486725915776333,31.973337878763566,-36.4600637945399,46.09720347061407,56220.630711476246,56639.17516666666,57057.719621857075,0.2956308290013875,0.014779327345739205,57214.14021266342,56457.27415041023,-0.9922695932296367,-0.6138879104516516,null,null,1638265200000,null,null],["2021-11-30 09:45:00",56468.11,56743.45,56465.59,56591.22,127.89212,17.414884595209656,49.2657162679966,51.37138958608862,68.5117385458689,-5.673342016503739,24.444001899710106,-30.117343916213844,50.95549317020656,56239.90740532146,56647.568499999994,57055.22959467853,0.43088805783094575,0.014392889420436,57175.97460415689,56494.58377931752,-0.8858240090034631,-0.2982595114999383,null,null,1638265500000,null,null],["2021-11-30 09:50:00",56591.22,56681.79,56525.78,56617.93,88.36892,16.951708371907635,50.159179301402034,58.60006870705024,68.76213229804468,-4.407661274715792,18.673669264824927,-23.08133053954072,47.51949317837613,56252.19069048493,56653.534833333324,57054.87897618172,0.45564301364829757,0.014168370747883272,57139.33561999061,56535.39969551977,-0.6415102243709014,0.08881562394396823,null,null,1638265800000,null,null],["2021-11-30 09:55:00",56617.93,56836.35,56617.91,56729.15,117.34406,17.237248816087664,53.80708895089469,70.43454011576046,74.02974950336805,5.506449406449974,16.040225293149938,-10.533775886699964,32.935463280893345,56274.78951192243,56666.85666666667,57058.92382141091,0.5794421728261976,0.013837617888372015,57104.16219519099,56618.44493796795,-0.009357379941663385,0.7004591563653199,null,null,1638266100000,null,null],["2021-11-30 10:00:00",56729.15,56733.74,56561.44,56607.34,119.52051,17.13624148082853,49.53123574192979,62.437321712927606,44.52008333737035,3.494126442616107,13.531005523043172,-10.036879080427065,34.243667790031736,56309.72662925613,56679.305166666665,57048.8837040772,0.40263887187430364,0.013041039805402669,57070.39570738335,56613.20877073557,0.40942632845088095,0.9346321839393089,null,null,1638266400000,null,null],["2021-11-30 10:05:00",56607.34,56898.19,56607.33,56842.22,154.90442,17.747877118062654,56.67983810147582,68.53726127824262,87.06195099398974,20.61456712402287,14.947717843239111,5.666849280783758,43.169095574438856,56336.27941220577,56694.914666666664,57053.54992112756,0.7053692874599962,0.01265140821075274,57037.979879088016,56724.66661297309,0.7120816401507203,0.9999750747954195,null,null,1638266700000,null,null],["2021-11-30 10:10:00",56843.63,56876.36,56756.1,56804.68,81.9744,18.315824495494343,55.33087848629147,68.82420397352523,74.89057758921587,30.798450083835633,18.117864291358416,12.680585792477217,52.27610581924964,56347.37358006157,56706.06266666667,57064.751753271776,0.6374691020944,0.012650819673852986,57006.8606839245,56776.70715956271,0.8923527039709911,0.9501333267553477,null,null,1638267000000,null,null],["2021-11-30 10:15:00",56804.68,56808.36,56724.43,56732.92,87.65596,18.613936882073716,52.74660935648169,70.9581925269923,50.92204899777162,32.70185183201829,21.03466179949039,11.667190032527902,53.38624593551818,56363.99119332529,56716.06383333333,57068.13647334138,0.5239384785285779,0.012415270602792591,56976.986256567514,56772.534096658776,0.9851351122681101,0.8180634312154106,null,null,1638267300000,null,null],["2021-11-30 10:20:00",56732.93,56732.93,56640.64,56680.46,63.77487,18.297370818252226,50.87587299244646,53.71878446242773,35.343726800296004,29.635607026946673,22.754850844981647,6.880756181965026,54.90692585885335,56360.22930255059,56710.59683333334,57060.96436411608,0.4569925425652172,0.012356333748785536,56948.30680630481,56741.65211146287,0.9858409162439361,0.5785248011390978,null,null,1638267600000,null,null],["2021-11-30 10:25:00",56680.47,56726.1,56643.17,56668.2,59.08202,18.00341661613227,50.425764302697374,35.7311232765195,20.92759403149117,25.917545062562567,23.38738968849783,2.530155374064737,50.01376589148341,56398.66324014098,56688.03966666667,56977.41609319236,0.46571996740565064,0.010209434943500002,56920.774534052616,56713.97910762216,0.8421459679155986,0.21418005108254443,null,null,1638267900000,null,null],["2021-11-30 10:30:00",56668.2,56901.41,56647.87,56868,139.15029,18.596691846851126,57.08871686263185,47.81975474339426,87.18794339839592,38.64763845156995,26.439439441112253,12.208199010457694,56.1964368364459,56419.45441298738,56678.90950000001,56938.364587012635,0.8643992919491099,0.009155260371148314,56260,56792.67110177376,0.5760517339493687,-0.1706683554341273,null,null,1638268200000,null,null],["2021-11-30 10:35:00",56863.36,56900,56784.3,56880.48,84.06013,19.147590275375784,57.47319990007218,66.6964358062553,91.9737699888791,49.17648497057962,30.986848547005728,18.189636423573894,70.89772502639931,56421.65994825468,56677.838,56934.016051745326,0.8955100732077055,0.009039796180839593,56272.8282,56847.607678691485,0.30356137585728366,-0.4590894387761467,null,null,1638268500000,null,null],["2021-11-30 10:40:00",56880.48,56899.99,56819.72,56880.74,66.30802,19.659138816148676,57.48174711333098,90.4117293655956,92.07347470951214,56.8859062037518,36.166660078354944,20.719246125396857,70.07596541525817,56420.035344792195,56678.672,56937.3086552078,0.8906406843949601,0.009126419024348468,56285.399836000004,56880.265616556484,0.029654730152567678,-0.6858267360966697,null,null,1638268800000,null,null],["2021-11-30 10:45:00",56880.75,57019.07,56841.85,56904.98,115.32896,20.697631754453653,58.322763958914926,84.56536249190879,69.64884277733545,64.2114538228634,41.775618827256636,22.43583499560677,71.37509554938907,56408.03325857092,56686.98150000001,56965.9297414291,0.8907508053880492,0.009841703828562138,56297.72003928,56909.85354075606,-0.16855206463580194,-0.8161743370505893,null,null,1638269100000,null,null],["2021-11-30 10:50:00",56904.98,57151.45,56882.99,57092,225.57098,22.195900065358618,64.20557379192591,83.30561489073352,88.19452718535332,84.13806288259366,50.24810763832404,33.889955244269615,78.4832937334922,56385.5861098192,56706.04583333332,57026.50555684744,1.102188260094521,0.01130248878421159,56326.5740377088,57016.71108551611,-0.20898241618990127,-0.839266321683379,null,null,1638269400000,null,null],["2021-11-30 10:55:00",57092,57224.13,57046,57141.94,271.06158,23.849374923177,65.60183398609665,79.71886820717826,81.31323465884635,102.77505786804977,60.75349768426919,42.02156018378058,80.34782736030085,56350.67714399837,56724.11,57097.54285600163,1.0594446140515537,0.013166636056577327,56376.066595446275,57105.17484266401,-0.12418594946250297,-0.7894457685311564,null,null,1638269700000,null,null],["2021-11-30 11:00:00",57141.94,57179.91,57000,57050.87,123.88928,24.95768146392055,60.93393290784122,75.55503405571326,57.157340322940485,108.94062308037974,70.3909227634913,38.54970031688843,73.49559835178162,56340.36768199862,56744.46416666666,57148.560651334694,0.8791245964253516,0.014242675143821845,56443.91166781057,57111.69575106974,-0.01838541685421599,-0.7199877146449227,null,null,1638270000000,null,null],["2021-11-30 11:05:00",57050.88,57082.62,56904.61,57054,123.43779,25.149275354900688,61.03654930427368,64.65551550699098,55.495971539186485,112.77939214325306,78.86861663944366,33.910775503809404,66.39152407949885,56376.33065843671,56772.61983333334,57168.909008229966,0.8550187394597139,0.013960573813926841,56506.32913438573,57111.59546043679,-0.004273780493000686,-0.7101223426016783,null,null,1638270300000,null,null],["2021-11-30 11:10:00",57054,57172.7,56995.91,57052.45,108.84055,25.734570941077852,60.95116635881463,54.10931075086065,49.67462039045536,114.37809278062923,85.97051186768077,28.40758091294846,73.1707728658694,56415.81808355608,56803.693999999996,57191.569916443914,0.8206644051023058,0.01365671452437294,56563.75320363487,57105.69646243829,-0.02962305107106246,-0.727743121391173,null,null,1638270600000,null,null],["2021-11-30 11:15:00",57052.45,57261.1,57016.46,57261.09,133.86138,26.64416957167225,67.53460018568624,68.38926226728911,99.99719487222586,130.970828689904,94.97057523212541,36.0002534577786,72.85150633960754,56439.246736763685,56836.87816666666,57234.50959656964,1.0334234185623155,0.013992022177466347,56616.58334734408,57199.427570361004,0.008985593341633345,-0.7007244604108527,null,null,1638270900000,null,null],["2021-11-30 11:20:00",57261.09,57271.85,57100,57195.84,131.57141,27.532614817574686,63.905884960826455,76.32472627987752,79.30236357695173,137.2731621950079,103.4310926247019,33.842069570305995,73.63929465098785,56482.26469440441,56872.33516666667,57262.40563892893,0.9146748553628264,0.013717406578053955,56681.035012609675,57222.95479672855,0.01932737697682139,-0.6933081805424174,null,null,1638271200000,null,null],["2021-11-30 11:25:00",57195.83,57269.06,57096.11,57252.33,150.41033,28.31915187372199,65.62779209678197,91.32807777373212,94.68467487201914,145.15284614122356,111.77544332800623,33.37740281321733,79.42959416752558,56507.52319108997,56902.62250000001,57297.72180891006,0.9425564562042933,0.013886857636835444,56751.932811096514,57260.49700582376,0.012098582978290546,-0.6985000375973159,null,null,1638271500000,null,null],["2021-11-30 11:30:00",57252.34,57339.8,57194.11,57330.58,153.51289,29.358775258522595,67.91140007235163,90.43531618852575,97.31891011660672,155.9143894479057,120.60323255198612,35.31115689591958,83.77863848235604,56531.23954745878,56936.60566666668,57341.97178587457,0.9859487691067645,0.014239209185777453,56814.32287376493,57317.73900028305,-0.0057234992295370594,-0.7111423243502712,null,null,1638271800000,null,null],["2021-11-30 11:35:00",57330.57,57462.35,57309.94,57438.67,192.03115,30.79817071396938,70.79755227626003,95.56428604258015,94.68927313911495,171.19155996512563,130.72089803461404,40.470661930511596,87.76286745839663,56527.38825166148,56970.398166666666,57413.40808167185,1.0285116850351463,0.015552284318222918,56887.88967143784,57401.91676542277,-0.011949098476399519,-0.7155055872556867,null,null,1638272100000,null,null],["2021-11-30 11:40:00",57438.67,57713.91,57438.67,57598,379.05335,32.87166776323919,74.44611723182307,91.08214935544639,81.23826481061785,193.92003760721855,143.36072594913495,50.5593116580836,89.08136401590731,56525.81527770377,57017.86583333333,57509.91638896289,1.0895066675866358,0.01725952202658215,56979.803324007786,57527.67166345291,0.024825018140516113,-0.6893349205128456,null,null,1638272400000,null,null],["2021-11-30 11:45:00",57598.01,57622.89,57335.99,57452.98,244.15453,33.85616582606101,66.32367822355378,77.89739556779152,57.764648753642106,197.9487874680417,154.27833825291629,43.670449215125416,79.67759463273312,56533.97158211267,57052.26783333333,57570.564084554,0.8865667229146793,0.018169172616757767,57111.94252568638,57530.24569082016,0.05446103699578808,-0.6675475929272282,null,null,1638272700000,null,null],["2021-11-30 11:50:00",57452.98,57693.8,57356.16,57684.47,206.87088,34.99041025503272,71.64235487133782,77.77973225003329,94.3362831858403,217.31582753029943,166.8858361083929,50.42999142190652,80.80598594099459,56535.07110723568,57090.556000000004,57646.04089276433,1.034590596194644,0.019459782201607045,57220.29667106283,57637.52008803529,0.08506917962734123,-0.6443905586938464,null,null,1638273000000,null,null],["2021-11-30 11:55:00",57686.95,57700,57543.4,57602.45,423.80237,36.06305652966917,67.57035857450062,74.83659139341367,72.40884224075896,223.46999478671205,178.20266784405675,45.2673269426553,82.88951683634563,56554.70426218161,57133.558333333334,57712.41240448506,0.9050171623857843,0.02026318990231726,57309.14707027152,57658.70221659787,0.08654745085342007,-0.6432552359552522,null,null,1638273300000,null,null],["2021-11-30 12:00:00",57602.45,58000,57596.74,57963.79,486.94654,37.84424115600307,74.45803561908899,87.09729810018727,94.54676887396289,254.56981249715318,193.47609677467602,61.09371572247716,84.34621046099969,56569.59054716731,57192,57814.40945283269,1.120001830376656,0.02176561242246082,57356.16,57840.981744507095,0.11167415187696055,-0.6237181923729387,null,null,1638273600000,null,null],["2021-11-30 12:05:00",57963.8,58061.61,57900.5,57906.54,409.70551,39.62738333258788,71.8541227131252,81.86164040731343,78.62931010721877,271.46773449254397,209.0744243182496,62.393310174294356,85.03365403550985,56594.18143732983,57255.85299999999,57917.52456267014,0.9916993843397057,0.02311280080554054,57484.928,57921.07597602311,0.15070384358216887,-0.5924671735218456,null,null,1638273900000,null,null],["2021-11-30 12:10:00",57906.54,58314.2,57881.79,58200.56,447.04512,41.73464343716464,76.41577831743794,87.10478710253257,88.13828232641642,305.06778466566175,228.27309638773204,76.79468827792971,89.81872224784145,56588.47479161318,57322.17416666666,58055.87354172013,1.098600641624726,0.02559914677765755,57596.74,58105.87100790002,0.20461514949237591,-0.5474614100100882,null,null,1638274200000,null,null],["2021-11-30 12:15:00",58200.56,58250,58125.01,58180.37,236.85209,43.69138496284307,75.51075319418318,83.13503729797881,82.6375194603016,326.3054560586679,247.8795683219192,78.4258877367487,93.43348534130178,56594.641829132976,57388.684166666666,58182.72650420036,0.9985161344118796,0.027672435744567837,57740.231999999996,58203.055278183274,0.291626234898659,-0.47015962377285714,null,null,1638274500000,null,null],["2021-11-30 12:20:00",58180.38,58200,57910.83,58053.42,257.61961,43.77843372796292,69.90460647878358,78.14271027880697,63.65232904970324,329.0990110696148,264.1234568714583,64.97555419815649,86.96769307495101,56640.79439918803,57448.08083333333,58255.367267478636,0.874922172021604,0.02810490524435021,57855.02559999999,58190.89555219567,0.3282033911987412,-0.43586322770822045,null,null,1638274800000,null,null],["2021-11-30 12:25:00",58053.41,58099.67,57868.93,57932.63,119.5688,43.556141477019786,64.96261370076543,53.53192508369413,14.305926741077895,317.9016081742593,274.8790871320185,43.02252104224078,83.79896509227017,56701.1819249436,57500.336333333325,58299.49074172305,0.7704694250124532,0.02779651248496956,58314.2,58112.71978720247,0.31632620169013764,-0.44712078544469136,null,null,1638275100000,null,null],["2021-11-30 12:30:00",57932.62,58108.17,57856.43,58023.2,270.34757,43.256073636308386,66.85476344720333,38.1297381897354,36.4309587784254,312.73086108332063,282.44944192227894,30.281419161041697,84.37371488476658,56750.16404225396,57548.02566666667,58345.88729107938,0.7977799149589969,0.027728548987384426,58305.294599999994,58098.014891500155,0.24087412679430295,-0.5159632577991612,null,null,1638275400000,null,null],["2021-11-30 12:35:00",58023.19,58060.62,57870.25,57976.58,115.95779,42.977439212790664,64.91155929811063,27.08837566710787,30.528241481820654,301.39684713933093,286.2389229656893,15.157924173641618,81.29618723166567,56795.17773223027,57589.61533333334,58384.05293443641,0.7435462937110244,0.027589613040642832,58287.340015999995,58059.20843089579,0.17379285176428516,-0.5734560903113249,null,null,1638275700000,null,null],["2021-11-30 12:40:00",57976.57,58167.99,57976.57,58085.36,130.43593,43.086758044619145,67.29990175353747,44.530636583920476,66.6327094915157,297.7598066175269,288.54309969605686,9.216706921470063,81.19562483318226,56855.24813173463,57639.601,58423.95386826537,0.7841571810566672,0.027215763282794774,58270.10361535999,58082.42353351726,0.1397486688370794,-0.6013507161554736,null,null,1638276000000,null,null],["2021-11-30 12:45:00",58085.35,58120,58000.43,58027.31,115.39432,43.18826838845987,64.76640599989706,50.669176493829376,54.84657850815209,286.8862300649125,288.211725769828,-1.325495704915454,77.81855405262674,56945.19386215816,57691.37616666666,58437.558471175165,0.7251017152936972,0.025868070900331146,58253.556670745595,58064.9028775696,0.0981549463902113,-0.6342862363945756,null,null,1638276300000,null,null],["2021-11-30 12:50:00",58027.3,58048,57915,57917.63,147.97753,42.53207929825611,60.158410912755635,47.040791467856536,19.643086403902153,266.34828569958336,283.83903775577903,-17.490752056195674,72.31339953150405,57040.428319887076,57735.702333333335,58430.97634677959,0.6308316312333491,0.02408471657388487,58237.67160391577,57996.8142784325,0.04170869449160131,-0.6769989659070295,null,null,1638276600000,null,null],["2021-11-30 12:55:00",57917.63,57960.46,57799.95,57819.22,148.86043,41.00977520938887,56.28868850086324,26.57516961402087,5.235843930008703,239.37162517746765,274.94555524011673,-35.57393006264908,74.23639951230258,57124.22417503658,57769.71866666667,58415.213158296756,0.5383437302526984,0.022347157179511797,58222.42193975914,57903.37567246525,-0.018643337881153712,-0.7201667151634895,null,null,1638276900000,null,null],["2021-11-30 13:00:00",57819.22,57900,57727.31,57730.19,138.74666,39.06884345623702,52.96907393133095,8.510821926377533,0.6535354452220783,208.40607490883121,261.6376591738596,-53.2315842650284,69.72315284636367,57214.71494374923,57799.54883333334,58384.38272291745,0.4407021082664497,0.02023662472765984,58197.07362337359,57800.3450326418,-0.08760848395884291,-0.7663364978894229,null,null,1638277200000,null,null],["2021-11-30 13:05:00",57730.19,58196.16,57613.79,58007.77,421.2192,38.565140031311216,60.742696925045806,24.513509662672856,67.65114961278812,203.91345204982645,250.09281774905298,-46.17936569922654,69.72127841169299,57320.208766404736,57836.21916666666,58352.22956692859,0.6662280772308615,0.01784384967402309,57613.79,57872.2037777645,-0.18858076095977097,-0.8277663834300134,null,null,1638277500000,null,null],["2021-11-30 13:10:00",58007.78,58199.99,57995.41,58174.04,206.03871,38.11164306941258,64.5251293138622,54.625956090643506,95.57318321392064,211.33349451584945,242.34095310241227,-31.00745858656282,67.05122699237332,57416.42188974313,57877.96833333332,58339.51477692352,0.8207387585566122,0.015948951108029134,57613.79,58001.76614826478,-0.2791583762531331,-0.8763905838679035,null,null,1638277800000,null,null],["2021-11-30 13:15:00",58174.03,58300,58121.98,58268.62,220.966,38.0590944440417,66.50226404040937,86.21712956141505,95.4270558575367,222.2834024933254,238.3294429805949,-16.046040487269494,64.97687158053189,57489.65621532096,57919.295666666665,58348.93511801237,0.9065319563173181,0.014835796823854285,57613.79,58131.08383924018,-0.37086373883467133,-0.9189213467419977,null,null,1638278100000,null,null],["2021-11-30 13:20:00",58268.61,58275.01,57911.12,57981.72,185.39686,36.564243396815634,56.25929917782789,81.53931209261724,53.61769720639466,205.44263635039533,231.75208165455498,-26.309445304159652,54.76155718621575,57539.881724143364,57942.91683333334,58345.95194252331,0.5481386928605949,0.013911453934887668,57654.9626,58071.60158372352,-0.4560276761667211,-0.9517609687926472,null,null,1638278400000,null,null],["2021-11-30 13:25:00",57981.71,58100,57958.12,58019.99,119.99171,35.17616742439144,57.20615351690231,69.41315340784887,59.19470715961551,192.95995477003453,223.9936562776509,-31.03370150761637,48.09638652146448,57633.51758757178,57970.68766666667,58307.85774576156,0.5731119639466151,0.011632433309524558,57693.664844,58049.76621750684,-0.5615297359468008,-0.982161627540451,null,null,1638278700000,null,null],["2021-11-30 13:30:00",58020,58060.81,57844.99,57867.17,143.29163,33.1844948900523,52.3343405272288,39.22900750209019,4.874618140260696,168.7903329646797,212.95299161505665,-44.162658650376954,50.318154865866596,57704.38686660645,57987.99666666666,58271.606466726866,0.2869843238121348,0.009781672634441425,57730.04495336,57959.96688695825,-0.6760204687552995,-0.9990735136305227,null,null,1638279000000,null,null],["2021-11-30 13:35:00",57867.16,57984.99,57864.79,57958.2,87.67923,31.33508467959453,54.80345987533389,29.65003238368124,24.880771851167804,155.19213544806553,201.40082038165843,-46.208684933592906,54.54445158960646,57778.91917215912,58004.032166666664,58229.14516117421,0.39820186354206444,0.007761977438420593,57764.242256158395,57947.072281953115,-0.7775027949387713,-0.9944624455159521,null,null,1638279300000,null,null],["2021-11-30 13:40:00",57958.2,58114.83,57951.91,58043.23,190.20684,30.28367840193446,57.04194104793674,25.285190459447076,46.100181386913015,149.5527255937559,191.03120142407792,-41.478475830322026,53.01157088684232,57799.23395288385,58013.1895,58227.14504711615,0.5702026668738216,0.007376100123443519,57796.387720788895,57981.522077091126,-0.8660518740025499,-0.9659121223139352,null,null,1638279600000,null,null],["2021-11-30 13:45:00",58043.23,58241.31,58043.23,58199.99,204.4732,29.875734963927417,60.887920196967634,53.518344929447665,89.57408155026248,155.93515119971562,184.01199137920545,-28.076840179489835,59.421706180629144,57801.46012406284,58023.45416666668,58245.448209270515,0.8976138982440175,0.007651872705343648,57826.60445754156,58080.97044979132,-0.9007898805104589,-0.9440194397492129,null,null,1638279900000,null,null],["2021-11-30 13:50:00",58200,58333.82,58108.98,58152.66,211.9444,29.873586877255608,59.16558617548523,66.20478145202476,62.940081418899084,155.3829758060965,178.28618826458367,-22.90321245848716,60.73086656639292,57796.126764663815,58026.76933333334,58257.41190200286,0.7729129045710761,0.007949522998414801,57855.008190089065,58121.01473984426,-0.9487811527214335,-0.8942886964399026,null,null,1638280200000,null,null],["2021-11-30 13:55:00",58152.66,58349.87,58077.98,58316.91,228.93379,29.643358485323947,63.0697013197728,81.90646915497159,93.20524449575349,166.28217769649928,175.88538615096678,-9.603208454467506,66.76647272790512,57788.67461061222,58029.92566666667,58271.17672272112,1.0947835794521155,0.008314711876083807,57893.31313488194,58225.06141549752,-0.9009491705775515,-0.9438983225397102,null,null,1638280500000,null,null],["2021-11-30 14:00:00",58316.91,58444.94,58202.1,58393.06,496.73358,29.823380039412843,64.75228426402398,81.87421322279276,89.47731375372598,179.00112871950114,176.50853466467365,2.4925940548274923,75.56442553712486,57764.700729421216,58044.523166666666,58324.345603912116,1.1227821413541765,0.00964164823757718,57938.96882139374,58325.88044698621,0.8783332076575515,0.2830437294623077,null,null,1638280800000,null,null],["2021-11-30 14:05:00",58393.06,58448.9,58160.49,58199.07,203.00313,29.667534070417105,57.55791338836046,73.69933969734508,38.415460842556065,171.45123417946888,175.4970745676327,-4.0458403881638105,74.19758037271723,57765.14467787439,58059.64366666666,58354.142655458934,0.736717847326265,0.010144705347592394,57999.685362826494,58291.19046181192,0.8722887903729274,0.2710324175421084,null,null,1638281100000,null,null],["2021-11-30 14:10:00",58199.08,58436.73,58194.21,58229.02,171.69011,29.522819956349633,58.32772960953785,56.20438185525384,40.72037096947975,165.97138821015687,173.59193729613753,-7.620549085980656,78.9429740124309,57764.60803235305,58074.17966666666,58383.75130098028,0.7500880509880156,0.010661248633747056,58062.57541203078,58279.09841486984,0.8132903487188349,0.16364733667124945,null,null,1638281400000,null,null],["2021-11-30 14:15:00",58229.02,58340,58120.88,58340,181.50064,28.79251836003004,61.14041444905608,49.9254670690176,70.64056939501727,168.6397551776754,172.60150087244511,-3.961745694769718,70.81517535838223,57772.206317139986,58089.070166666665,58405.93401619334,0.8959584435210368,0.010909585869339844,58116.660854346475,58322.090897865666,0.7125032421301017,0.0076610948731307095,null,null,1638281700000,null,null],["2021-11-30 14:20:00",58340,58438.31,58249.99,58370.8,266.04812,28.611450686363487,61.908817437366515,62.5171388516579,76.19047619047693,171.26551556331106,172.3343038106183,-1.0687882473072534,71.42629007281928,57764.90347375871,58102.889833333335,58440.876192907956,0.8963328091166929,0.011634063659970315,58120.88,58361.37279477521,0.49944577256136236,-0.2594370383476753,null,null,1638282000000,null,null],["2021-11-30 14:25:00",58370.79,58545.41,58314,58344,248.66166,28.92723980303187,60.78255756284279,66.46266363775602,52.55694532777411,169.2330997336685,171.71406299522835,-2.4809632615598503,71.7026352956199,57758.47315085522,58120.48433333334,58482.49551581146,0.8087137600786247,0.01245726654313163,58120.88,58369.839371971764,0.37945840657653584,-0.3859038017630921,null,null,1638282300000,null,null],["2021-11-30 14:30:00",58344,58364,58077.91,58240.72,248.8794,27.51907422918229,56.51557952740863,54.52436332248272,34.825668449197366,157.47330841718212,168.8659120796191,-11.392603662436983,70.17398620425924,57777.052997546234,58133.851,58490.64900245377,0.6497612083938814,0.012275051327797578,58545.41,58321.331826471054,0.20114574522885206,-0.5504229349438019,null,null,1638282600000,null,null],["2021-11-30 14:35:00",58240.72,58331.07,58039.61,58094.41,277.14136,25.974872111073015,51.04836928579224,32.73897854777403,10.83432186635085,134.7937760932473,162.05148488234474,-27.25770878909745,66.68322283379568,57815.923036855704,58148.60866666667,58481.29429647763,0.4185437214443859,0.011442599829621487,58545.41,58216.313660269654,-0.0664615089216591,-0.7525387444088137,null,null,1638282900000,null,null],["2021-11-30 14:40:00",58094.4,58259.86,58094.4,58192,193.32322,24.540970144257262,54.228936543399634,25.26283320258602,30.128509292210072,123.27375759337156,154.2959394245501,-31.022181831178557,71.64752735359203,57882.840592370216,58168.421333333325,58454.00207429643,0.5412819621294443,0.009819098899954406,58525.178,58196.11567627229,-0.27475492015933617,-0.8741743433370744,null,null,1638283200000,null,null],["2021-11-30 14:45:00",58191.99,58283.08,58093.59,58104.32,176.77144,23.34984651996157,51.02141330949377,17.91880848820342,12.793594306049576,105.84885697274876,144.60652293418985,-38.75766596144109,67.06517109398995,57914.90465900157,58179.47583333333,58444.04700766509,0.3579667011662258,0.00909500027431239,58505.75528,58141.150890489,-0.39502295666588383,-0.9289220812193995,null,null,1638283500000,null,null],["2021-11-30 14:50:00",58104.33,58283,58102.91,58283,161.98192,22.243803154544143,56.648721711119045,39.317386670611874,75.0300564135762,105.24428974037437,136.73407629542675,-31.489786555052376,66.78729286021031,57920.604760230286,58184.467000000004,58448.32923976972,0.686712960683554,0.009069851572919561,58487.1094688,58194.67215278875,-0.5643192180624914,-0.9827906674882663,null,null,1638283800000,null,null],["2021-11-30 14:55:00",58271.7,58421,58249.99,58397.74,289.47989,22.04480837655993,59.83963977606194,60.57496888395762,93.9012559322473,112.72430926212837,131.93212288876708,-19.20781362663871,67.63648900372215,57916.49237877073,58190.769166666665,58465.0459545626,0.877302860590341,0.009426814315183461,58469.209490048,58286.25868320562,-0.7417520179942507,-0.99873618896109,null,null,1638284100000,null,null],["2021-11-30 15:00:00",58397.74,58492.54,58317.74,58460.01,159.16765,22.237621636322036,61.496049380427166,86.92580278260964,91.84609600200565,122.26752331179887,129.99920297337343,-7.73167966157456,67.12621533015061,57923.87888626593,58209.14316666666,58494.407447067395,0.9397095089874693,0.00980135644958573,58039.61,58375.02908226939,-0.9344766101289991,-0.9125221064801098,null,null,1638284400000,null,null],["2021-11-30 15:05:00",58460.01,58647.99,58348.19,58556.28,419.96848,23.132341052814162,63.97021410801026,89.73504804734837,83.45779220779241,136.0306964468764,131.20550166807402,4.82519477880237,68.9395539910431,57930.745739560945,58233.71566666666,58536.68559377238,1.032337213159741,0.010405309832535374,58048.6686,58476.873427919665,-0.960525259817253,-0.8759059289943049,null,null,1638284700000,null,null],["2021-11-30 15:10:00",58556.28,59000,58546.32,58790.06,732.30049,25.105255435206608,69.15375663577518,83.96718466527967,76.59766578604119,163.9127187441918,137.7469450832976,26.165773660894217,70.9444326687627,57920.767441262185,58276.43916666667,58632.110892071156,1.222043385300329,0.01220636437265112,58072.641456,58652.57203485115,-0.32794448935254156,-0.8998934234333158,null,null,1638285000000,null,null],["2021-11-30 15:15:00",58790.06,59125.61,58734.32,58758.06,686.36674,27.240047701878364,67.7176257738918,72.69316222735898,58.02402868824355,181.33695024500776,146.46494611563963,34.87200412936812,79.11460612493771,57913.754684480344,58323.27266666667,58732.790648853,1.0308525537903015,0.014043038514893838,58128.28296864,58743.52375215901,0.8272116183488091,0.1876103591584777,null,null,1638285300000,null,null],["2021-11-30 15:20:00",58758.06,58886.45,58545.08,58879.6,300.9221,27.86565018486751,70.24512110451295,68.05667096395052,69.54831841756703,202.61739429555746,157.6954357516232,44.92195854393427,72.7856180392641,57927.72221878284,58359.958666666666,58792.19511455049,1.1011077222633903,0.014812774297960827,58208.0691311488,58853.341893362245,0.8129069377862816,0.16299754115923717,null,null,1638285600000,null,null],["2021-11-30 15:25:00",58879.6,59122.99,58800.02,59065.17,311.15126,29.093903930293866,73.63874836725985,73.26597124119904,92.22556661778673,231.78438157965866,172.51322491723027,59.27115666242838,77.63258192246569,57895.33617422477,58401.68616666666,58908.036159108546,1.1551632697115986,0.017340252505616553,58281.472400656894,59005.49542176789,0.7464789086945025,0.05732502820826251,null,null,1638285900000,null,null],["2021-11-30 15:30:00",59065.17,59176.99,58895.47,58923.99,423.36007,30.366442722126184,67.34563575412574,73.91217931492888,59.96265290943306,240.73237011757737,186.1570539572997,54.57531616027768,78.41185285042882,57879.54472158211,58441.702666666664,59003.86061175122,0.9289607018369134,0.019238246643528762,58349.003408604345,59023.82337809286,0.5991871483197048,-0.14242675296618637,null,null,1638286200000,null,null],["2021-11-30 15:35:00",58923.99,58968.69,58460,58680.47,520.78546,29.175440399797374,58.119366623850965,60.979200787933515,30.749382836580956,225.57341674850613,194.04032651554098,31.53309023296515,68.97942872071854,57898.451823946794,58464.44266666666,59030.43350938653,0.6908399544904472,0.01936188277537677,58431.80206774391,58906.303227029945,0.4274520223475144,-0.33699720131218336,null,null,1638286500000,null,null],["2021-11-30 15:40:00",58680.47,58864.38,58527.33,58542.57,306.87558,28.06950967192062,53.638065929519044,34.07607847135685,11.516199668056728,200.1255368525308,195.25736858293894,4.868168269591848,68.14826323724701,57910.71836690369,58479.34566666667,59047.97296642965,0.5555938251291185,0.01944711567069045,58460,58755.860754878784,0.20964162402958417,-0.543154647222184,null,null,1638286800000,null,null],["2021-11-30 15:45:00",58542.58,58648.77,58183.63,58192.15,410.46136,26.479062003207268,44.29219606633213,14.374425866690528,0.8576950954340893,149.95337412090157,186.19656969053148,-36.243195569629904,66.36199179192886,57919.02343237093,58482.947166666665,59046.8709009624,0.2421662283554795,0.019285065531620564,59176.99,58484.4503853951,-0.19085742525955396,-0.8290651602041699,null,null,1638287100000,null,null],["2021-11-30 15:50:00",58192.14,58282.81,57646.33,57689.71,649.84137,26.509478962522383,34.90196118023376,5.069322113485753,2.8340715769666347,68.85514549502113,162.7282848514294,-93.87313935640827,57.52059722942972,57840.624917193505,58462.262,59083.8990828065,-0.12138506643793855,0.02126626858216664,59157.1228,58066.3632878203,-0.5943239320593156,-0.9889239670079746,null,null,1638287400000,null,null],["2021-11-30 15:55:00",57689.72,57835.82,57102.05,57238.84,808.72145,27.56308481784888,28.967150910151496,3.673302358135311,7.328140402005402,-31.434864345712413,123.89565501200104,-155.33051935771346,51.766558810411276,57636.61058079828,58418.52583333333,59200.441085868384,-0.2543565811695525,0.02676942772454877,59096.691088,57586.557937308076,-0.9118146875551323,-0.9350897842090742,null,null,1638287700000,null,null],["2021-11-30 16:00:00",57233.8,57504.22,56900,57282.79,1085.81318,28.846868270006407,30.21288254202574,9.88292251113207,19.486555554424367,-106.14544340217253,77.88743532916632,-184.03287873133885,42.896022542127646,57416.239683331514,58362.32433333333,59308.408983335146,-0.07052734833572091,0.032421075096265996,58977.01262272,57316.8525342467,-0.9996731392301107,-0.688797841943985,null,null,1638288000000,null,null],["2021-11-30 16:05:00",57282.79,57444.11,57036.58,57097.38,542.30961,30.038952904152687,27.983301953753003,12.700495366786393,11.286790143929604,-178.26027949025593,26.657892365281867,-204.9181718555378,37.53408775324784,57221.44082236505,58301.902,59382.36317763495,-0.05741105045375914,0.03706435435450968,58810.8516129024,57075.13828592455,-0.9232532215264143,-0.3811738488260892,null,null,1638288300000,null,null],["2021-11-30 16:10:00",57099.85,57212.15,56764.99,56858.23,803.96373,31.54238020639374,25.381521865828603,12.305455536641555,6.143020911570888,-251.80654389556003,-29.034994886886523,-222.7715490086735,32.58437279589082,56998.237639345236,58237.781,59477.32436065477,-0.056475490809484954,0.042568358181599215,58657.98348387021,56827.56396436703,-0.7664578437916533,-0.08779666037429765,null,null,1638288600000,null,null],["2021-11-30 16:15:00",56858.23,57409.42,56506.72,57070.53,969.70515,33.268620482852235,31.472677324022364,19.950081978748845,42.420434880746235,-289.62305824278883,-81.15260755806699,-208.47045068472184,36.76277580375037,56821.22630696256,58179.80733333334,59538.38835970411,0.09175149961552535,0.04670283689964695,58468.684135483185,56798.41834303997,-0.5725748407002541,0.1748516795575763,null,null,1638288900000,null,null],["2021-11-30 16:20:00",57083.72,57285,57000,57050,343.0298,34.87155788242084,31.207379167224097,34.34253873110644,54.46416040100239,-317.5885545747442,-128.43979696140244,-189.14875761334176,33.61907073578786,56686.190885884294,58126.28633333333,59566.381780782365,0.1263142365876345,0.04955057473276742,58233.2484392252,56794.774414104715,-0.36571480124868655,0.3995239327337547,null,null,1638289200000,null,null],["2021-11-30 16:25:00",57047.19,57364.73,57029,57300,227.83329,35.995972656938996,38.05504030681547,60.50368604001824,84.6264628383063,-315.9365809935116,-165.93915376782428,-149.99742722568732,29.5308500248903,56585.443291088784,58079.831999999995,59574.220708911205,0.23907993437391234,0.051459815135526235,58026.065026518176,56936.49164497041,-0.14539161131310036,0.5967858015630636,null,null,1638289500000,null,null],["2021-11-30 16:30:00",57300.01,57644.07,57272.67,57561.54,412.53809,35.857555763068,44.30140633211692,77.27809391457558,92.74365850441825,-290.17829307667125,-190.78698162959367,-99.39131144707758,34.4009948929534,56528.121782247894,58043.3215,59558.5212177521,0.34101716283489314,0.052209269855520046,57843.74362333599,57172.43478448438,-0.01703375369301427,0.6949595079193899,null,null,1638289800000,null,null],["2021-11-30 16:35:00",57561.53,57749.99,57301,57459.31,223.04978,35.31768872475339,42.49751681825245,84.66328063943439,76.61972057557882,-274.8455228503517,-207.5986898737453,-67.24683297660641,33.585524925383496,56474.59979286667,58000.681,59526.762207133324,0.3226270668069691,0.052622872036048256,56506.72,57284.87674444101,0.2120355169239907,0.8409603111788667,null,null,1638290100000,null,null],["2021-11-30 16:40:00",57459.3,57465.33,56970.84,57035.12,251.77038,35.46182492003233,35.95533628156958,59.20446504104052,8.250016043124687,-293.5390444924051,-224.78676079747726,-68.75228369492783,28.653108469523847,56380.36816350908,57937.36433333333,59494.36050315758,0.21026122259659347,0.053747566453534894,56531.5854,57156.039202673215,0.40459588502041655,0.9327385214618797,null,null,1638290400000,null,null],["2021-11-30 16:45:00",57035.12,57155.22,56809.54,57049.24,278.07198,35.874000457771885,36.30682454304143,36.78584500436292,25.487798394385436,-303.713409944241,-240.57209062683,-63.14131931741099,29.65833526315711,56276.656315379216,57861.72333333334,59446.79035128747,0.24370694610060376,0.05478810262261896,56555.953492,57085.87782674499,0.5638105213309583,0.9826766813041478,null,null,1638290700000,null,null],["2021-11-30 16:50:00",57049.25,57050.31,56700,56800,318.80296,36.43933191489884,32.87688641146134,14.42057155504372,9.523900227621235,-328.106050569535,-258.078882615371,-70.02716795416399,29.649337312705832,56180.46320600837,57765.28883333333,59350.1144606583,0.19545897772909937,0.05487120931386893,56579.83422216,56925.7111282092,0.6805231513020692,0.9993184682741434,null,null,1638291000000,null,null],["2021-11-30 16:55:00",56800,56887.51,56510,56777.38,394.58382,37.266011177038365,32.57610107159392,18.858258581198662,21.563077121589515,-345.2824379475351,-275.5195936818038,-69.76284426573125,29.76024682260042,56098.15949692342,57657.90383333333,59217.64816974324,0.217734563037411,0.05410340066883201,57749.99,56819.782952120426,0.6907734776905451,0.9997391797980181,null,null,1638291300000,null,null],["2021-11-30 17:00:00",56777.38,56863.64,56623.42,56689.09,190.29238,38.03364192045364,31.369731471517653,16.611126372046286,18.746401766928305,-361.847955831181,-292.7852661116793,-69.06268971950175,34.55769760307534,56035.35570792005,57555.65416666666,59075.95262541327,0.21500195843746062,0.052828813459202865,57725.1902,56717.90276622074,0.7461013240864315,0.9983879264491972,null,null,1638291600000,null,null],["2021-11-30 17:05:00",56689.08,56774,56500,56511.85,267.98196,38.945405465628866,29.044431089782012,14.03934391366481,1.8085528524768053,-384.8418179242799,-311.1965764741994,-73.6452414500805,37.556533240601915,56018.57119628899,57435.615333333335,58852.65947037768,0.1740520252036339,0.04934374355773458,57700.886395999994,56575.870428501665,0.7542248583853123,0.9976152951170645,null,null,1638291900000,null,null],["2021-11-30 17:10:00",56511.86,56895.69,56507,56768.85,197.46364,39.21221796939584,36.40554558688795,23.136412250431388,48.85428213188924,-377.9698657986519,-324.5512343390899,-53.41863145956199,47.36785798110507,56078.58520699591,57321.86683333333,58565.14845967076,0.2775979224584606,0.04337896495773035,57652.850940159995,56621.01554874587,0.7149477186811486,0.9999378264055738,1,null,1638292200000,56511.86,null],["2021-11-30 17:15:00",56768.84,57033.14,56768.84,57015.01,160.43168,38.83365354315469,42.55297655817967,49.08740908802258,96.59939227970187,-348.6418136683351,-329.36935020493894,-19.27246346339615,54.155730268830915,56164.90896116427,57233.664000000004,58302.41903883574,0.39770621327867767,0.037347077371657836,57606.736902553595,56779.92119057186,0.6689077651650206,0.9986137984019647,null,null,1638292500000,null,null],["2021-11-30 17:20:00",57015.01,57089.24,56850.76,57013.63,134.50625,38.230548495311226,42.52815681620892,77.54063036583044,87.16821668590033,-321.8009544361121,-327.85567105117354,6.054716615061466,65.51714984042525,56309.766348041274,57150.65316666666,57991.53998529205,0.4185246078118695,0.029427023910755228,57562.467426451454,56887.22786317331,0.2650349140446247,0.8692277904696701,null,null,1638292800000,null,null],["2021-11-30 17:25:00",57013.63,57178.32,56979.68,57053.6,111.8192,37.26965793092193,43.5550659884208,88.46033559064898,81.6133978063449,-293.9160538474898,-321.0677476104368,27.15169376294699,57.099471827756446,56460.303615652614,57087.10400000001,57713.9043843474,0.47327378792620595,0.021959438837443654,57519.9687293934,56978.002466675825,0.09340052610497739,0.7700598915497339,null,null,1638293100000,null,null],["2021-11-30 17:30:00",57053.6,57251.76,57046.88,57166.52,153.51731,36.04935139447469,46.465336692238424,85.77877222606116,88.55470218593842,-259.7115755646955,-308.7965132012886,49.084937636593054,54.65004028563774,56542.864417584016,57051.20916666667,57559.55391574932,0.6134179447524707,0.017820647678039467,57479.16998021766,57091.233352302,0.15336924151432468,0.8071893969235089,null,null,1638293400000,null,null],["2021-11-30 17:35:00",57166.51,57252.52,57012.6,57206.09,102.20697,35.01977543162638,47.48710918937436,86.85625937552892,90.40067813430362,-226.79693787230644,-292.3965981354921,65.59966026318568,52.859118820080994,56553.953819229704,57039.45083333333,57524.94784743695,0.6716170870528775,0.01702320085521948,57440.00318100895,57180.737015451996,0.40673430032975255,0.9335795074762427,null,null,1638293700000,null,null],["2021-11-30 17:40:00",57205,57250,57040.09,57190.71,101.35524,34.06374060898152,47.110740030953465,87.85685782346054,84.61519315013977,-199.65143041676492,-273.8475645917467,74.19613417498175,47.717096885442665,56555.216418190175,57036.014,57516.81158180983,0.6608743532129328,0.016859438382556942,57402.40305376859,57226.28646360291,0.8470473129903301,0.9747925254085426,null,null,1638294000000,null,null],["2021-11-30 17:45:00",57190.7,57492,57152.52,57412.36,208.73805,32.051082049088656,52.90394517271256,86.49029979729205,84.45502810743297,-158.4268712374469,-250.76342592088673,92.33655468343983,47.44379823357899,56547.21473213607,57043.994166666664,57540.77360119726,0.8707539077995489,0.017417414113014052,56500,57358.38071935786,0.9915270457764774,0.7929689612436492,null,null,1638294300000,null,null],["2021-11-30 17:50:00",57412.36,57533.79,57343.48,57533.78,129.08214,30.004353567399416,55.76251633794006,89.68943419049613,99.99808131391585,-114.63706708000245,-223.53815415270986,108.90108707270741,54.297572751827126,56541.013284318185,57070.25549999999,57599.4977156818,0.9379133847087976,0.01854704209907757,56519.84,57495.61930825261,0.9676096922120768,0.5056935943084468,null,null,1638294600000,null,null],["2021-11-30 17:55:00",57533.79,57598.22,57329.82,57370.94,134.62634,27.896038510679944,51.26815755467965,81.8809864982585,61.189850073426825,-92.01249610673403,-197.2330225435147,105.22052643678066,57.26872816938526,56540.213235946736,57092.12733333333,57644.041430719924,0.7525870130758544,0.01933415772595877,56560.397999999994,57495.43306800395,0.8129176355224129,0.16301566427890182,null,null,1638294900000,null,null],["2021-11-30 18:00:00",57370.95,57517.13,57341.56,57343.48,219.79315,25.93831738658329,50.52857518431095,71.84874500278782,54.35830362102094,-75.42865849398368,-172.8721497336085,97.44349123962482,59.476403821605196,56537.6355149162,57106.58016666667,57675.524818417136,0.7081923369913646,0.01992571259178866,56622.66731999999,57473.0388196756,0.540430669917161,-0.21280935741343926,null,null,1638295200000,null,null],["2021-11-30 18:05:00",57344.32,57547.28,57197.06,57517.92,120.7387,24.689733334772342,54.97231560420207,65.843850199398,81.98339690374644,-47.660595880071924,-147.8298389629012,100.16924308282927,72.12860630590484,56532.25076935152,57116.05566666667,57699.86056398181,0.8441769118257325,0.02044275958838166,56681.20048079999,57536.23796247923,0.04016908561370714,-0.6781322400483337,null,null,1638295500000,null,null],["2021-11-30 18:10:00",57513.66,57517.92,57274.89,57314.9,99.58503,23.530333858090746,49.40964405795837,55.23883785564852,29.37481304217837,-41.55717820957216,-126.57530681223538,85.01812860266323,66.30124286332922,56540.41709156858,57109.8795,57679.34190843142,0.6800123212388384,0.01994269339795823,56736.22165195199,57470.48294699107,-0.20918429230666102,-0.8393785488535552,null,null,1638295800000,null,null],["2021-11-30 18:15:00",57314.9,57450.01,57310.99,57428.59,72.38589,22.45374862974355,52.319353655160214,56.35777869337821,57.715126134209996,-27.2324244425472,-106.70673033829775,79.47430589575055,76.59100886303261,56548.783956253945,57104.53433333334,57660.28471041273,0.791547860362825,0.019464316925704675,56787.941552834876,57477.73766049228,-0.39649299817110895,-0.9295136030199111,null,null,1638296100000,null,null],["2021-11-30 18:20:00",57428.6,57498.98,57362.74,57482.89,90.30132,21.17273944813359,53.689367238032744,56.234784324476756,81.61441379704209,-11.367361810916918,-87.63885663282159,76.27149482190467,75.25443960849935,56542.67858970307,57119.089666666674,57695.50074363028,0.815573683324876,0.02018278233520176,56836.55825966479,57504.067123748035,-0.4517795625761148,-0.950287283599788,null,null,1638296400000,null,null],["2021-11-30 18:25:00",57482.9,57550,57414.16,57504.82,95.803,19.690955849920297,54.26096851291485,75.50949908703656,87.19895732985776,2.94147485843132,-69.522790334571,72.46426519300232,74.371803665672,56546.74283949798,57143.33933333333,57739.93582716868,0.8029523894305958,0.020880701085921254,56882.2579640849,57527.10581770953,-0.5630497995082606,-0.9825056167078108,null,null,1638296700000,null,null],["2021-11-30 18:30:00",57504.81,57739.84,57469.07,57722.51,178.95012,19.226636197046428,59.59257600470327,88.36202954113527,96.27271749650616,31.48416484315385,-49.32139929902603,80.80556414217988,75.02284081548727,56563.408831491724,57183.0245,57802.640168508275,0.9353388135735932,0.021671315007420606,56925.215686239804,57643.696927078694,-0.5757497571798501,-0.9852654212303887,null,null,1638297000000,null,null],["2021-11-30 18:35:00",57722.52,57828.83,57648,57692.26,146.0174,19.192754909001582,58.5708734279783,85.69955461924167,73.62698903136129,51.074771926985704,-29.24216505382368,80.31693698080939,75.50342064749039,56607.9030265488,57232.927833333335,57857.95264011787,0.8674511488829718,0.02184144094828248,56990.38563134062,57698.336942345515,-0.5446338306061563,-0.9781463105119899,null,null,1638297300000,null,null],["2021-11-30 18:40:00",57692.26,57860.75,57681.13,57811.57,98.92448,19.301452823101524,61.38307332036697,86.67480093970211,90.1246962912391,75.359096315442,-8.321912779970543,83.68100909541255,74.77845828451005,56662.45538804548,57285.88283333334,57909.3102786212,0.921610542365466,0.02176548267927196,57074.23006820656,57785.36610030546,-0.4437727932878761,-0.9474609521866381,null,null,1638297600000,null,null],["2021-11-30 18:45:00",57811.56,57991.54,57696.02,57881.81,158.41262,19.94779441509865,62.97642310022582,81.58229015643222,80.99518514669651,99.12967415464664,13.168404606952894,85.96126954769375,75.56436781014155,56765.802557658855,57348.9415,57932.08044234115,0.9568966856000677,0.020336519806251195,57168.61246002177,57868.599178094024,-0.35383974885248926,-0.9115637457438727,null,null,1638297900000,null,null],["2021-11-30 18:50:00",57881.81,58212,57851.58,58194.77,261.97319,21.30953980484399,69.09500888954805,89.60022860686068,97.68080438264666,141.58913344001485,38.852550373565286,102.73658306644955,77.5481368226036,56823.202799373044,57417.05500000001,58010.90720062697,1.1548051848413727,0.020685568099128842,57283.82231561872,58067.09042932006,-0.1326868063222969,-0.7946782944185082,null,null,1638298200000,null,null],["2021-11-30 18:55:00",58194.77,58380.41,58084.19,58319.92,220.53249,23.049141066395105,71.14838944450304,90.13898476317252,91.74096476017463,183.22501597482187,67.72704349381661,115.49797248100526,77.71648671089699,56822.67920964519,57483.180499999995,58143.6817903548,1.1334124643045946,0.022980680074054183,57432.330745119725,58245.86877178399,0.0056689864556990575,-0.7030868400406144,null,null,1638298500000,null,null],["2021-11-30 19:00:00",58319.92,58334,58080.87,58083.18,185.65125,24.640448872753762,62.66634299962456,82.3055403301452,57.494851847614605,194.8724451291564,93.15612382088457,101.71632130827183,69.3685766367146,56858.59889360645,57542.25416666667,58225.90943972689,0.8956130045717353,0.023761852327858598,57602.98501099818,58232.96684717124,0.1524069947562374,-0.5910782110724424,null,null,1638298800000,null,null],["2021-11-30 19:05:00",58083.19,58098.32,57860.57,58044.22,165.36255,24.64725036675202,61.36969666248612,66.70441343298646,50.87742369117038,198.66923497794778,114.25874605229721,84.41048892565057,68.31311254642914,56913.697187242906,57588.77933333333,58263.86147942376,0.8373224053578092,0.023444919441092497,57742.92150901851,58193.963811197544,0.14056669672873115,-0.600690403018246,null,null,1638299100000,null,null],["2021-11-30 19:10:00",58044.22,58095.88,57742.63,57882.06,177.73866,23.98068744058717,56.1609734073725,43.411348685087866,21.861770516478874,186.44405055773677,128.69580695338513,57.74824360435164,69.63755360179742,56969.49651249158,57626.36950000001,58283.24248750843,0.6946270472849292,0.02279765299142867,58380.41,58080.28193145877,0.12455545701211587,-0.6135262832352969,null,null,1638299400000,null,null],["2021-11-30 19:15:00",57882.06,57999.16,57823.16,57903,94.81449,23.36173615200553,56.67237236930589,32.62807618183621,25.14503433785962,176.4116234415269,138.23897025101348,38.172653190513415,69.26776212470789,57034.713919658665,57663.938,58293.16208034134,0.689965711317273,0.0218238331326361,58367.65440000001,58011.089783753436,0.033664983122555676,-0.6829012366891524,null,null,1638299700000,null,null],["2021-11-30 19:20:00",57903,58000,57825,57986.1,49.38451,22.790766763601006,58.72989013806733,29.3924357490291,41.17050239274906,173.17013070442772,145.22520234169633,27.94492836273139,73.45263181129104,57109.593676289944,57702.77633333334,58295.95899037674,0.7388165460524646,0.020559934711520386,58355.15391200001,58003.51948394048,-0.04116087988515834,-0.7356126680201781,null,null,1638300000000,null,null],["2021-11-30 19:25:00",57986.11,57993.7,57642.57,57774.87,127.92033,21.211915060446785,51.97370392621053,31.781536562424634,29.029072956665477,151.80679444937414,146.5415207632319,5.265273686142251,67.95308949732004,57154.379023623536,57725.347333333324,58296.31564304311,0.5433672638432858,0.01978223903661412,58342.90343376001,57893.15688555753,-0.15355584691926194,-0.8073008547559872,null,null,1638300300000,null,null],["2021-11-30 19:30:00",57774.88,57936.51,57529.41,57591.53,171.52899,20.211189916142533,46.92759069479108,27.055244730925622,10.966158843362582,118.71373277434759,140.97596316545503,-22.262230391107437,61.163751213014926,57177.41151718033,57736.12066666667,58294.82981615301,0.3706029185314019,0.019353886026114892,58314.89009640961,57732.338445454094,-0.30040343757687993,-0.8868644053170567,null,null,1638300600000,null,null],["2021-11-30 19:35:00",57591.53,57717.74,57529.41,57662.59,87.68146,19.281945139288585,48.99459866915525,22.76529189087067,28.300643872584203,97.1018612879343,132.2011427899509,-35.099281502016595,56.91406450578872,57203.65727024646,57746.3,58288.942729753544,0.4228682193549096,0.018794025929056615,58267.761290625036,57666.365104596865,-0.47270168969527215,-0.9573689829890276,null,null,1638300900000,null,null],["2021-11-30 19:40:00",57662.59,57736.72,57474.9,57559.18,116.65709,18.697037917518184,46.17613191117838,18.43902628460829,16.050276137878324,70.81367865570064,119.92364996310084,-49.1099713074002,49.99341206980048,57232.263287588714,57755.77716666666,58279.291045744605,0.3122330901590214,0.018128537256705393,58223.460213187536,57578.032361166064,-0.6627527211420752,-0.9981455979817544,null,null,1638301200000,null,null],["2021-11-30 19:45:00",57559.18,57669.23,57460.67,57474.87,79.50307,18.227905269402292,43.95597405090917,15.671645056361527,2.6640151586222904,42.68494663722231,104.47590929792514,-61.79096266070283,44.36994120653797,57251.02644722411,57761.48566666667,58271.944886109224,0.2192570378299159,0.017674726110347802,58163.57539613253,57485.85355004508,-0.8305377868043592,-0.9811107082589902,null,null,1638301500000,null,null],["2021-11-30 19:50:00",57474.86,57549.18,57381.62,57461.76,129.26758,18.20129001323689,43.60489105416474,11.0522644713457,14.44250211753672,19.11451617673447,87.403630673687,-68.28911449695254,38.85046606889207,57269.55418272675,57766.233166666665,58262.91215060658,0.19349099064809921,0.017196170036114327,58093.284856519276,57427.18164022296,-0.9493286750041414,-0.8935098046837924,null,null,1638301800000,null,null],["2021-11-30 19:55:00",57461.76,57688.61,57455,57629.99,68.9898,17.24933305847693,49.21083089572567,29.01673170446223,69.94367783722792,13.849882440721558,72.69288102709392,-58.84299858637236,36.01919542360528,57302.71611108303,57775.96666666666,58249.21722225029,0.3457723240423486,0.0163822635219246,58007.885073736965,57479.17424936557,-0.9993027203098281,-0.7330151805306185,null,null,1638302100000,null,null],["2021-11-30 20:00:00",57629.99,57754.63,57629.99,57714.15,97.09912,16.067469696703863,51.79254508676233,57.84464132769185,89.14774402831117,16.28095421517355,61.41049566470984,-45.12954144953629,30.019110326417692,57339.189398474846,57788.536,58237.882601525154,0.4172287052494437,0.01555140976491096,57932.73326488853,57560.0961468724,-0.9130306220342932,-0.3571876388842093,null,null,1638302400000,null,null],["2021-11-30 20:05:00",57714.15,57747.35,57415.96,57461.25,75.68116,15.99593290314415,44.47622411669213,60.146458334508004,21.347953137985172,-2.1742568357803975,48.69354516461179,-50.86780200039219,19.06618437418378,57348.495893683415,57791.129,58233.762106316586,0.12736745705137018,0.015318375466123368,57866.599673101904,57492.91375350593,-0.738078833756527,-0.04480536127191687,null,null,1638302700000,null,null],["2021-11-30 20:10:00",57461.26,57461.26,57193.17,57328.65,161.98918,16.835423940187127,41.19070428573014,44.87521469679583,24.12994692409137,-27.186467695239116,33.51754259264161,-60.70401028788073,19.377812315276966,57290.02110897371,57775.32333333334,58260.62555769297,0.039798798653004744,0.016799636812404782,57808.40211232968,57389.040422094455,-0.5027114508719691,0.2557908054574058,null,null,1638303000000,null,null],["2021-11-30 20:15:00",57328.66,57500,57250.36,57449.09,103.29004,17.366732295262185,45.15380060229707,30.353021152503135,45.581163395433094,-36.86536261139554,19.44096155183418,-56.30632416322972,26.849124726408448,57245.81267757896,57759.16266666667,58272.512655754384,0.19799096789919918,0.01777553431826229,57747.35,57386.394153493995,-0.26080758028397527,0.4982155759926753,null,null,1638303300000,null,null],["2021-11-30 20:20:00",57449.08,57492.82,57370.19,57407.03,63.99265,17.860090053546166,44.03771719423087,35.9336966717725,38.089979695793275,-47.38363797178317,6.07604164711071,-53.45967961889389,33.47816408050161,57206.53876427992,57741.105833333335,58275.67290238675,0.18752673642532847,0.018515996925878655,57669.7648,57369.57867975924,-0.03333947891263371,0.6831391183368477,null,null,1638303600000,null,null],["2021-11-30 20:25:00",57407.03,57448.06,57286.29,57402,54.28751,18.6641419013413,43.89797414369922,40.451281820765736,37.682702371071066,-55.48572108352528,-6.236310899016489,-49.24941018450879,27.598828064045804,57162.06785766034,57717.22216666667,58272.376475672994,0.2160950013781903,0.01923704184526556,57603.041527999994,57361.25339282604,0.16573742968480537,0.8145214958546588,null,null,1638303900000,null,null],["2021-11-30 20:30:00",57402.01,57657.47,57365,57494.92,104.09442,18.057890842694345,47.229350941453454,46.92099668579569,64.99030799052296,-53.7887694350793,-15.746802606229053,-38.04196682885025,30.325128206978473,57153.9656369347,57688.20616666666,58222.44669639863,0.3191019251537885,0.018521655126127256,57193.17,57405.74336423372,0.34285785873349534,0.9066842428582368,null,null,1638304200000,null,null],["2021-11-30 20:35:00",57505.78,57513.77,57290,57339.03,74.37149,17.838509018053376,42.65329296991892,41.484454855205605,21.780354204023023,-64.28194099900429,-25.453830284784104,-38.82811071422019,31.512475915766963,57166.753680080736,57644.177500000005,58121.601319919275,0.18042283682912427,0.016564511477998606,57202.456,57361.60560397165,0.36858127052790224,0.917949617927171,null,null,1638304500000,null,null],["2021-11-30 20:40:00",57339.03,57607,57315.64,57598.18,57.87102,17.085409116908895,51.13020534775414,56.93242666933511,84.02661781345955,-51.09759460607165,-30.582583149041614,-20.515011457030038,38.87670010455063,57198.91742991982,57611.22366666666,58023.529903413495,0.48418206480506576,0.014313399733788127,57211.55628,57462.82712733021,0.4927731130418853,0.9637377161577699,null,null,1638304800000,null,null],["2021-11-30 20:45:00",57598.18,57735,57436.8,57461.8,111.70285,16.033695107869068,47.17788756359557,48.30710734770397,39.114350025629555,-51.064985955134034,-34.679063710260095,-16.38592224487394,46.770061850027986,57218.60290439544,57588.398499999996,57958.19409560455,0.328826382054355,0.012842711561237645,57220.474554399996,57462.96134845451,0.5665231256329798,0.9832807460367646,null,null,1638305100000,null,null],["2021-11-30 20:50:00",57461.79,57461.8,57226.08,57226.09,94.28127,15.725848551186319,41.24390695012053,41.047644261487456,0.0019649453734892214,-69.26057762798882,-41.59536649380584,-27.665211134182982,47.60889716856858,57199.7774566181,57558.2885,57916.7995433819,0.03669697749570312,0.01245732118604948,57735,57348.65906105033,0.5964690790815258,0.989316728304425,null,null,1638305400000,null,null],["2021-11-30 20:55:00",57226.08,57530.12,57226.08,57400.41,105.45258,15.074149641019732,46.593890724644524,24.457069228328606,34.25489271398301,-68.82121979186923,-47.04053715341852,-21.780682638450706,54.756213917939064,57206.37815240682,57532.14333333333,57857.90851425985,0.2978093715254274,0.011324632181320854,57735,57362.25296668122,0.6077936311494984,0.9912849722061955,null,null,1638305700000,null,null],["2021-11-30 21:00:00",57400.41,57671.66,57392.55,57650.01,111.76704,14.23238850902286,53.16916008985974,39.18559564044104,83.29992926196687,-47.781595050837495,-47.18874873290231,-0.5928463179351837,64.20810426682058,57248.29187584009,57513.862,57779.43212415991,0.7563315441273462,0.009234995353290969,57724.8216,57495.08713322701,0.6450221776705566,0.9964449964274642,null,null,1638306000000,null,null],["2021-11-30 21:05:00",57650,57685.92,57505.52,57518.96,95.66495,13.519605604689874,49.70871268429852,58.36804736828325,57.549320128900106,-41.20717002523452,-45.99243299136875,4.785262966134233,57.62929936920136,57272.1119500039,57502.183000000005,57732.25404999611,0.536460476014428,0.008002167500183637,57714.846768,57516.59814297464,0.7026751871075546,0.9999804829109021,null,null,1638306300000,null,null],["2021-11-30 21:10:00",57518.96,57635.04,57517.78,57615.81,51.14248,12.8577357649521,52.18544924927496,75.20088062506963,84.75339248434213,-27.86074392226874,-42.36609517754875,14.505351255280011,56.08080579679393,57279.785788681205,57497.369333333336,57714.952877985466,0.7721728494129074,0.007568469555214567,57705.071432640005,57576.47944628402,0.7867080986633217,0.9928014464184832,null,null,1638306600000,null,null],["2021-11-30 21:15:00",57615.81,57786.08,57524.95,57541.74,119.75354,12.989158792693573,50.151237671963564,66.22352325203283,56.36785714285647,-22.995358868131007,-38.4919479156652,15.496589047534194,63.352804161480705,57281.24171237252,57496.41983333333,57711.59795429415,0.6053084915517907,0.007484922420719749,57226.08,57576.75676878263,0.8559518885547752,0.9708628175609841,null,null,1638306900000,null,null],["2021-11-30 21:20:00",57541.74,57550.69,57435.28,57437.33,64.66389,12.577072254165435,47.34938392290337,50.83343528726423,11.379056234594305,-27.25039497821126,-36.243637328174415,8.993242349963154,68.4165566616583,57279.896097932804,57490.62816666668,57701.36023540055,0.3735404464377384,0.007331005955369116,57237.28,57523.69867741602,0.9127963807245605,0.9342374878321534,null,null,1638307200000,null,null],["2021-11-30 21:25:00",57437.34,57440.73,57286.3,57287.58,121.49556,11.9630374472266,43.588059765389964,22.66767535567792,0.2561126895831844,-42.2194358624256,-37.43879703502465,-4.780638827400949,59.029756011218105,57260.61312331535,57480.79216666667,57700.971210018,0.061238518149119694,0.007660960646224566,57248.256,57415.17538623314,0.9575376739172635,0.8809460471717149,null,null,1638307500000,null,null],["2021-11-30 21:30:00",57287.58,57366.59,57189.17,57222.07,108.49652,11.861529591316982,42.015659643794166,5.715629202912102,5.511718684559023,-58.69205267071084,-41.68944816216189,-17.00260450854895,51.969109086568196,57229.07385177407,57470.54666666667,57712.01948155927,-0.014502360808573209,0.008403358899408436,57786.08,57314.054691937505,0.9775541671335096,0.8402114375915902,null,null,1638307800000,null,null],["2021-11-30 21:35:00",57222.08,57233.97,57000.38,57056.68,178.0019,12.56687767059645,38.2628292137004,4.311138734319134,7.1655848288154,-84.1225980028903,-50.17607813030757,-33.946519872582726,47.40800020478611,57159.39637705709,57445.83716666667,57732.27795627625,-0.17929774805657797,0.00997255166735699,57774.141800000005,57170.95032191944,0.8453497617346885,0.975498349989646,null,null,1638308100000,null,null],["2021-11-30 21:40:00",57056.67,57091.82,56850,56891.39,288.48701,13.763756008997586,34.907123738899024,6.194779335981251,5.907034494569536,-116.27367941126431,-63.39559838649892,-52.87808102476539,35.357217764205885,57068.33812120565,57408.07783333333,57747.81754546101,-0.2604171883491035,0.011835954971842479,57743.19132800001,57003.167241838,-0.6749548095759793,0.04448002808066849,null,null,1638308400000,null,null],["2021-11-30 21:45:00",56891.39,57061.35,56890.96,57052.73,106.9285,14.875143037512926,40.40154454720329,15.797058110531756,34.31855500821054,-127.26778958122304,-76.17003662544374,-51.0977529557793,41.24292483473996,57002.43431522224,57381.08583333333,57759.73735144442,0.066414212504233,0.013197781555089537,57689.59984832001,56981.50916459783,-0.8353773650683942,-0.20202075969059474,null,null,1638308700000,null,null],["2021-11-30 21:50:00",57052.73,57250,57052.73,57201.72,109.21507,14.76536675687161,45.01702035059814,36.103510379760486,68.08494163650158,-122.54582131459756,-85.4451935632745,-37.10062775132306,43.03689738570436,56983.16701810405,57373.10866666668,57763.05031522931,0.28023805959373704,0.013593185296204142,57639.22385742081,57048.241855528606,-0.797235777067757,-0.1368730517418514,null,null,1638309000000,null,null],["2021-11-30 21:55:00",57201.73,57248.89,57062.71,57097.79,97.15925,14.663431639133242,42.54205873866405,54.78366554823739,61.94750000000022,-125.74045220183325,-93.50424529098625,-32.236206910847,36.64207225631607,56956.25306119126,57359.94099999999,57763.628938808724,0.17530488924986457,0.014075605092018236,57591.87042597556,57046.5882450619,-0.7397284860553491,-0.04725101022876248,null,null,1638309300000,null,null],["2021-11-30 22:00:00",57097.8,57250,57000.78,57104.71,97.99008,14.846989130003644,42.767681500685754,64.56998054550047,63.67749999999978,-126.25840572087327,-100.05507737696365,-26.203328343909618,36.566984869910385,56928.270788924085,57344.6985,57761.12621107591,0.21184854703839578,0.014523669038940505,57547.35820041703,57053.788517807705,-0.6866884896125588,0.028470459180772463,null,null,1638309600000,null,null],["2021-11-30 22:05:00",57114,57220.62,57104.71,57199.77,50.72448,15.01743537152616,45.90983608276184,70.54497177658908,86.00991532976741,-117.64223362643679,-103.57250862685828,-14.069724999578511,34.38617308380058,56911.67446995601,57334.511,57757.34753004399,0.34067010484408283,0.014749808541804462,57505.51670839201,57108.912522250306,-0.5483380294276152,0.2035893023926496,null,null,1638309900000,null,null],["2021-11-30 22:10:00",57208.06,57286.77,57178.19,57271.1,55.3709,14.734069605518796,48.20763007006171,81.40273425662929,94.52078744012086,-103.86087675898307,-103.63018225328324,-0.2306945056998302,31.962762122137985,56904.86714545776,57321.488833333344,57738.110521208924,0.43952687198032603,0.01453631775290904,57466.18570588849,57181.87344068162,-0.3083488518296237,0.45461627213322414,null,null,1638310200000,null,null],["2021-11-30 22:15:00",57274.49,57325,57181.63,57219.38,53.08447,14.218847508380886,46.65985739974842,82.6513524274185,67.42335451236745,-96.00572962056322,-102.10529172673924,6.099562106176023,32.881086830893565,56897.46125697315,57314.54233333333,57731.623409693515,0.3859186633881788,0.014554109982576462,57429.214563535184,57204.46265603287,-0.01642231758198565,0.6953990919288043,null,null,1638310500000,null,null],["2021-11-30 22:20:00",57219.38,57402.24,57214.99,57375.11,56.25263,13.243692630183846,51.68943968245618,85.06210268208218,93.24216609375843,-76.33442369023396,-96.95111811943818,20.616694429204216,33.09888260455128,56898.43536189902,57305.73433333334,57713.03330476766,0.5851655313814693,0.014214946415839032,56850,57294.88833976229,0.3195167075587244,0.8959731284821731,null,null,1638310800000,null,null],["2021-11-30 22:25:00",57375.11,57534.54,57356.93,57447.97,106.14673,13.022902340487475,53.880546085925495,80.17499997838765,79.85947932903721,-54.240330169996014,-88.40896052954974,34.16863035955373,32.47052202114924,56903.3944011504,57300.831666666665,57698.26893218293,0.6851088789348996,0.013871954523391858,56861.0448,57387.0391574754,0.6779565487833392,0.9991832664549685,null,null,1638311100000,null,null],["2021-11-30 22:30:00",57447.97,57450.96,57290.48,57293.66,42.78187,12.388983320188217,48.82937428141956,68.501727090794,32.40353584958654,-48.621649147935386,-80.45149825322687,31.829849105291487,32.957992089199436,56904.92153303796,57302.8505,57700.77946696204,0.4884520847148159,0.013888627301779382,56887.984608000006,57367.695485486205,0.8792662874929714,0.958551718435753,null,null,1638311400000,null,null],["2021-11-30 22:35:00",57293.66,57319.6,57243.6,57277.03,35.92013,11.50449879887267,48.3038117256702,46.431801013183815,27.032387860927862,-44.992065450896916,-73.35961169276088,28.367546241863963,34.99988836224707,56901.4711871051,57297.5775,57693.6838128949,0.4740631500545507,0.013826284816139135,56913.84682368,57343.82569277237,0.9999508073380519,0.71408565853199,null,null,1638311700000,null,null],["2021-11-30 22:40:00",57277.03,57379.75,57242.64,57367.82,41.44926,11.055229771812444,51.3805046568015,35.754184970213174,47.826631200125284,-34.3931373070518,-65.56631681561906,31.17317950856726,39.9323814312179,56910.379199605566,57285.510666666654,57660.64213372774,0.6097073167151048,0.013096905751400417,56938.6745507328,57370.27805914763,0.9405914003579785,0.4250070983073748,null,null,1638312000000,null,null],["2021-11-30 22:45:00",57367.82,57386.64,57167.92,57170.83,75.55407,10.382667225589072,45.10763153916601,25.21758548193733,0.7937373847590071,-41.4114911851575,-60.73535168952675,19.32386050436925,43.28419993329624,56918.47099305776,57269.09383333333,57619.716673608906,0.35987245831432446,0.012244749019286703,56962.50916870349,57288.73018040028,0.7149867361250152,0.011206736589117774,null,null,1638312300000,null,null],["2021-11-30 22:50:00",57170.82,57309.86,57167.97,57259.95,52.11008,9.758144861238799,48.18941630219752,27.045069158971003,32.514838892028884,-39.32898791375192,-56.454078934371786,17.12509102061987,58.971139325558866,56935.38811897437,57251.913,57568.43788102563,0.512695684418164,0.011057268288157663,56985.390401955345,57278.558674096676,-0.0232346771678333,-0.7233452873271133,null,null,1638312600000,null,null],["2021-11-30 22:55:00",57259.95,57340.01,57251.19,57267.91,55.93715,9.158813340188308,48.467702974983176,26.341520061051387,45.715983906366446,-36.614217682159506,-52.48610668392933,15.871889001769823,56.742757166117975,56968.646846984295,57235.352,57502.0571530157,0.5610374408440609,0.009319595099745491,57007.35638587713,57275.50323774705,-0.4317659722993937,-0.943104829230071,null,null,1638312900000,null,null],["2021-11-30 23:00:00",57267.9,57424.23,57200.52,57211.51,142.84227,9.17803578414639,46.5594646203623,31.745857479168397,17.006749639110037,-38.56915020519227,-49.702715388181915,11.133565182989642,43.430074380779665,56982.48060301086,57225.56799999999,57468.655396989125,0.47108447378574203,0.008495761789175521,57028.44373044204,57245.7684086923,-0.7071593963220916,-0.9999999972314415,null,null,1638313200000,null,null],["2021-11-30 23:05:00",57211.51,57242.25,57003.67,57130.01,101.87931,9.182566483835915,43.87148654870161,30.92121046532064,30.040897850485614,-46.16268252146256,-48.99470881483804,2.8320262933754847,43.21965967188428,56973.96764318917,57214.923333333325,57455.87902347748,0.3237988625989226,0.008422826637041856,57534.54,57187.07768552463,-0.8725610877710177,-0.9624190697745936,null,null,1638313500000,null,null],["2021-11-30 23:10:00",57130.01,57149.98,57037,57085.48,36.95466,9.186773562119045,42.430128555003435,22.166760690685965,19.45263458246243,-55.13821145847032,-50.2234093435645,-4.914802114905825,46.1213172442877,56960.35170090719,57206.5005,57452.64929909282,0.25417206899643263,0.008605623379909926,57523.9226,57128.77419829639,-0.9803379134666262,-0.8327341842218203,null,null,1638313800000,null,null],["2021-11-30 23:15:00",57085.48,57357.25,57084.92,57251.05,66.55478,9.215844030279412,49.12316560308333,36.10503455709905,58.821571238349286,-48.33410209049907,-49.845547892951416,1.511445802452343,47.04781451384773,56972.364845556156,57213.20366666666,57454.042487777166,0.5785719120340174,0.008418994416522121,57513.517547999996,57174.28386495455,-0.9883897135921419,-0.5914592402506866,null,null,1638314100000,null,null],["2021-11-30 23:20:00",57251.05,57259.28,57135.94,57183.86,49.63263,9.24283803642832,46.74797509528572,40.373153255976575,42.84525394711818,-47.81231723421661,-49.438901761204455,1.6265845269878483,41.309134534435465,57020.14252672051,57225.63483333334,57431.12713994616,0.3983542643957811,0.007181827067932422,57503.320597039994,57172.45939015041,-0.8584580685078296,-0.24435794153934384,null,null,1638314400000,null,null],["2021-11-30 23:25:00",57183.78,57360.49,57167.53,57247.46,65.82496,9.842349679527683,49.249416317267496,56.66326304829564,68.32296395941962,-41.78513744955853,-47.90814889887527,6.123011449316735,47.820491789831294,57061.837346163564,57238.4755,57415.11365383644,0.5254319347345481,0.006172007632748244,57493.32758509919,57203.51854517603,-0.5596949689759021,0.19021436506855266,null,null,1638314700000,null,null],["2021-11-30 23:30:00",57247.46,57276.69,57008,57025.14,59.03102,9.296691648222959,41.849156229998236,38.67692239957199,4.862549292178365,-54.321732917997,-49.19086570269961,-5.1308672152973855,41.650106064017805,57050.93941767901,57235.231833333324,57419.52424898764,-0.06999587472824123,0.006439824204467901,57483.53443339721,57115.62093819042,-0.2253041018054357,0.5296119398818674,null,null,1638315000000,null,null],["2021-11-30 23:35:00",57025.13,57116.34,57005.1,57073.14,71.46421,8.771308019311501,43.812223267804065,30.776892572934372,19.14516446720532,-59.69574095830467,-51.29184075382062,-8.403900204484046,31.41867321113963,57036.80082392551,57231.65166666667,57426.50250940784,0.09324870132269476,0.006809198653781012,57473.937144729265,57084.029852676016,0.02459404404890384,0.7242835113827665,null,null,1638315300000,null,null],["2021-11-30 23:40:00",57073.14,57151.63,57065.4,57121.35,51.62138,8.51095547505508,45.79159039550322,18.906085702043125,32.71054334674588,-59.38004080802784,-52.909480764662064,-6.470560043365779,36.802638939405576,57035.80298772535,57231.366500000004,57426.93001227466,0.21871925718562543,0.006834137440162414,57464.53180183468,57089.56054022699,0.23891791435757503,0.8555692818385159,null,null,1638315600000,null,null],["2021-11-30 23:45:00",57121.35,57155.66,56839.74,56886.27,152.05996,8.90943372893303,38.6430255448406,20.263632481430545,8.935189630340632,-77.20882227652328,-57.769349067034305,-19.439473209488973,32.64634115011459,56991.44328530956,57220.642666666674,57449.84204802379,-0.22943623295755938,0.008011073300672135,57455.314565797984,56980.54501976027,0.24030581764240197,0.8563084676365236,null,null,1638315900000,null,null],["2021-11-30 23:50:00",56882.14,57054.09,56762.39,57008.36,221.71295,9.667333400433302,43.57012488110818,29.82396815744084,47.8261714952362,-80.5579949680614,-62.327078247239726,-18.230916720821668,24.32023985086565,56945.02584162953,57205.45566666666,57465.88549170379,0.12159544007956552,0.009105069507867923,57430.691583166066,56973.315894758976,0.13153792475706577,0.793974187247682,null,null,1638316200000,null,null],["2021-11-30 23:55:00",57008.36,57012.79,56835.92,56950.56,84.76522,10.371097381112126,41.85647361330421,34.869631966041275,47.84753477254718,-86.87477704868797,-67.23661800752937,-19.638159041158602,24.144194151010844,56903.38223939252,57190.009999999995,57476.63776060747,0.08229796113867009,0.01002370031435465,57390.593488176106,56944.14462607806,0.015713891208248242,0.71813087317101,null,null,1638316500000,null,null],["2021-12-01 00:00:00",56950.56,57011.08,56630,56813.62,291.49974,11.963290021389687,38.03920882816431,43.535010232674516,34.931324430240345,-101.75778549307142,-74.14085150463778,-27.616933988433644,16.5821178928865,56841.40149068959,57164.382666666665,57487.36384264374,-0.043007909989713024,0.011300084455050341,57352.90127888554,56862.19259476736,-0.11053926059289117,0.6246103991431307,null,null,1638316800000,null,null],["2021-12-01 00:05:00",56813.63,57236.12,56776.6,57134,161.20866,11.914233616371467,49.616300222170445,55.31023677379246,83.15185111859002,-86.70125039401319,-76.65293128251287,-10.04831911150032,22.21147592575526,56846.667038771,57144.504,57442.340961229005,0.4823661912936246,0.01042399322353045,57295.069176574696,56970.28164348834,-0.04013583613749496,0.6781566957620422,null,null,1638317100000,null,null],["2021-12-01 00:10:00",57132.6,57530.96,57122.98,57198.47,239.27765,11.730584932649217,51.57700024446733,60.393068816401104,63.09603090037312,-68.77386534040852,-75.077118094092,6.303252753683481,35.44240139590999,56851.10279348477,57141.45916666667,57431.81553984856,0.5981738969745625,0.010162721688117923,56630,57074.17565097072,0.1051821720141544,0.7775594661575845,null,null,1638317400000,null,null],["2021-12-01 00:15:00",57189.66,57435.5,57189.66,57408.01,207.41464,11.560054012049985,57.382069530041825,77.53377574431907,86.35344521399426,-37.22900394125463,-67.50749526352453,30.2784913222699,45.14522206840865,56846.534381464095,57144.67483333333,57442.81528520257,0.9416293814134448,0.010434583895657287,56648.0192,57243.610215352994,0.3408772855099981,0.9057932407895339,null,null,1638317700000,null,null],["2021-12-01 00:20:00",57408,57440.59,57334.36,57410,86.32988,11.425639395433294,57.434259462062144,78.67459894630925,86.57432072456055,-11.931360349990427,-56.39226828081771,44.46090793082728,48.70045855720293,56840.028173212166,57147.92050000001,57455.81282678785,0.9256025194492469,0.010775276653779264,56665.678016000005,57350.80330844936,0.6731654290951828,0.998899593584503,null,null,1638318000000,null,null],["2021-12-01 00:25:00",57409.99,57520,57312,57507.44,102.66323,11.67805922355862,60.016206070882404,89.93663039459868,96.88212524524143,15.797692154272227,-41.95427619379972,57.75196834807195,49.717705548433855,56824.58725683756,57158.15466666666,57491.72207649576,1.0235603404905402,0.011671734742816225,56682.98365568001,57462.240820097824,0.9197527691031092,0.9279015649281827,null,null,1638318300000,null,null],["2021-12-01 00:30:00",57507.44,57665.73,57407.2,57408.07,177.56598,12.54167898512794,56.26777520295102,78.66113069252852,52.526946107783786,29.415751043321507,-27.680270746375474,57.09602178969698,55.5247955589718,56806.26447231124,57170.54166666667,57534.818861022104,0.8260269061773423,0.0127435278286973,56699.94318256641,57478.71404627265,0.9971675025063305,0.6519203907755438,null,null,1638318600000,null,null],["2021-12-01 00:35:00",57408.07,57420,57211.56,57327.15,100.96243,12.192070161524287,53.34586415870596,59.429759348439255,28.880206692292738,33.294791471569624,-15.485258302786454,48.78004977435608,51.26253898920752,56805.40815458813,57172.20166666666,57538.995178745194,0.7112201119034044,0.012831183735657547,56738.57465526375,57442.95631039265,0.910609118537024,0.3516727698121027,null,null,1638318900000,null,null],["2021-12-01 00:40:00",57327.15,57466.96,57317.09,57343.31,75.58678,12.082311332538717,53.86114526921714,36.805371400731374,29.008961402117794,37.24361469630094,-4.939483702968975,42.18309839926991,54.58336314132902,56801.85490062551,57177.053333333344,57552.251766041176,0.7215583171107195,0.01312409125109974,56775.6608690532,57422.20803598895,0.7480365179961815,0.05966492763555598,null,null,1638319200000,null,null],["2021-12-01 00:45:00",57343.31,57521.74,57314.96,57493.11,63.43998,12.231274940684814,58.44311484322557,39.96045788540142,61.992205561793924,51.8628509584596,6.420983229316741,45.441867729142864,57.950852374363514,56800.438546671445,57192.95133333333,57585.46411999522,0.882355272065607,0.013725914732891942,56811.26363429107,57477.5682021112,0.544370477456313,-0.20822486823931025,null,null,1638319500000,null,null],["2021-12-01 00:50:00",57493.11,57686.12,57448.97,57609.24,90.22409,13.060672506094258,61.62477386538122,58.26696574679244,83.79973027646581,71.98957052614423,19.53470068868224,52.454869837462,58.75499234274242,56791.91179251053,57217.4825,57643.053207489465,0.9602731028071236,0.01487554813301921,56845.442288919425,57565.41100688916,0.3368424793216566,-0.42760057697066495,null,null,1638319800000,null,null],["2021-12-01 00:55:00",57609.25,57625.89,57512.79,57577.07,97.55763,13.83082738826017,60.248675532339256,74.27091837449727,77.02081928523226,84.37170613586204,32.5021017781182,51.86960435774384,60.31808586089912,56780.32677623303,57234.52466666667,57688.722557100315,0.877088203785232,0.015871465451277426,56895.88295158426,57600.80702290677,0.12114927677048155,-0.6162329693437009,null,null,1638320100000,null,null],["2021-12-01 01:00:00",57577.07,57577.08,57448,57456.34,88.79482,14.112506744690313,55.261384473685396,66.30397957333709,38.09138915831341,83.48042541828181,42.69776650615093,40.782658912130884,64.55967228575646,56781.446198603415,57249.56366666667,57717.68113472992,0.7208594502880069,0.016353573305426375,56943.297174489206,57558.91624123,-0.19605982285822512,-0.8320184381127584,null,null,1638320400000,null,null],["2021-12-01 01:05:00",57456.34,57472.07,57383.01,57409.41,92.59934,13.95114889805606,53.410563521054,46.853151638023746,25.44724647052578,78.08708097665658,49.77562940025206,28.311451576404522,64.2644426704921,56783.308046166705,57257.71383333333,57732.11962049995,0.6598801814504387,0.016570895182700822,56987.86654401985,57504.449130498266,-0.39562384460384153,-0.9291641075536584,null,null,1638320700000,null,null],["2021-12-01 01:10:00",57409.4,57409.41,57269,57329.21,111.26374,13.108320520507561,50.309564012878596,25.991110226874113,14.43469505178336,66.57392415229697,53.13528835066104,13.438635801635925,70.994237677318,56799.49664782653,57269.343666666675,57739.19068550682,0.5637083251917919,0.016408325598242186,57029.76175137866,57427.33072576251,-0.5670470033002984,-0.9833963380313918,null,null,1638321000000,null,null],["2021-12-01 01:15:00",57326.26,57329.21,57100.3,57125.01,151.74931,12.904377918031274,43.40027895247353,14.86110824325062,4.701383207442929,40.50550870127336,50.6093324207835,-10.103823719510146,61.86671768200217,56813.492932613575,57275.342666666664,57737.19240071975,0.3372493740037736,0.016127349485833026,57069.14324629594,57276.99740678312,-0.6769113701429934,-0.999124842876374,null,null,1638321300000,null,null],["2021-12-01 01:20:00",57125.01,57198.97,57115.82,57142.68,100.45581,12.715002644303292,44.115498594544356,9.341624643394967,8.888795670958825,21.02950789262104,44.69336751515101,-23.66385962252997,51.97580375577764,56818.08526585976,57277.3275,57736.56973414024,0.35340252922068904,0.01603574238481157,57100.3,57190.63257763058,-0.8505782689652378,-0.9732806775420243,null,null,1638321600000,null,null],["2021-12-01 01:25:00",57142.53,57158.43,57000,57084.4,158.35595,13.104333154984435,42.22046951880888,10.489627769276566,17.878704429428158,0.8817635793748195,35.93104672799577,-35.04928314862095,39.85704621800293,56838.661344647415,57283.34683333333,57728.032322019244,0.27630613276674076,0.015525820793248447,57686.12,57110.39201688017,-0.968174726212185,-0.861574238966502,null,null,1638321900000,null,null],["2021-12-01 01:30:00",57084.39,57227.5,57042.46,57221.04,124.89011,13.013552080099663,47.874027493824265,26.919129329278103,53.989887887447544,-4.013497789463145,27.942137824503988,-31.955635613967132,41.34842128073339,56875.33620131083,57294.4495,57713.56279868918,0.4124228457679604,0.014630153613367915,57672.397600000004,57130.484003734695,-0.995699560006388,-0.7695731097577968,null,null,1638322200000,null,null],["2021-12-01 01:35:00",57221.04,57240.46,57038.42,57038.42,89.29431,12.843683327754238,41.96411466439245,27.846318233182885,11.670362382673174,-22.371055867159157,17.879499086171357,-40.250554953330514,34.97004566284068,56908.943241167326,57303.083333333336,57697.223425499345,0.16425220550531724,0.013756331046735753,57658.949648,57058.99281630019,-0.9987440096081069,-0.6707898369327674,null,null,1638322500000,null,null],["2021-12-01 01:40:00",57038.42,57095.01,56920,57086.9,131.52773,13.294652120001178,43.94251279424986,39.24721109401382,52.08138301192096,-32.63146682982915,7.777305902971255,-40.40877273280041,24.01926864469891,56966.57662893584,57313.87016666667,57661.16370439749,0.17323007483861783,0.012119004936184102,57645.77065504,57041.66586459247,-0.9839877559686155,-0.569752482182367,null,null,1638322800000,null,null],["2021-12-01 01:45:00",57086.91,57190.24,57020.55,57190.23,99.0049,13.064128252826038,48.01051427127414,49.35913408761568,84.32565686825312,-32.05553277688159,-0.18926183299931498,-31.866270943882277,30.754539653448283,56982.55968656688,57318.108499999995,57653.65731343311,0.3094487375895894,0.011708300298608674,57616.73982883841,57086.04359763772,-0.9547394759385325,-0.4647785637963904,null,null,1638323100000,null,null],["2021-12-01 01:50:00",57190.23,57190.41,57017.7,57031.75,132.57128,12.865825390730222,42.87182705084893,57.09292891468571,34.87174686388326,-43.88127637896832,-8.927664742193116,-34.95361163677521,24.675221931514344,56955.973493148296,57307.89933333333,57659.82517351836,0.10765976549471748,0.0122819312617984,57588.87023568487,57041.21537625874,-0.8221866736828488,-0.17887590055535094,null,null,1638323400000,null,null],["2021-12-01 01:55:00",57031.75,57106.03,56980.26,56994.58,140.58583,12.89657611538596,41.743316664748434,47.49006636293719,23.27279535667539,-55.61151679223258,-18.26443515220101,-37.34708164003157,19.544192011384123,56919.02983886244,57292.02766666666,57665.02549447088,0.10127426422602895,0.013020933033628121,57562.11542625748,56998.01747822781,-0.6146523459798967,0.12313966644954744,null,null,1638323700000,null,null],["2021-12-01 02:00:00",56990.52,57083.6,56976.61,57015,73.64867,12.94685817753891,42.636654849280184,31.092126353637173,35.13183684035308,-62.53918074232206,-27.11938427022522,-35.41979647209684,14.052377643753628,56885.64167756577,57273.53199999999,57661.42232243421,0.16674600389929284,0.013545186018359098,57536.43080920718,56984.357627320576,-0.3775545844462841,0.38780051357495654,null,null,1638324000000,null,null],["2021-12-01 02:05:00",57015,57088.07,56906.35,56920.8,80.7177,13.411956461696898,39.618458018137595,21.163861885855408,5.086953460537955,-74.7686703813597,-36.64924149245211,-38.119428888907585,14.211249003445648,56848.59199775194,57249.795,57650.99800224806,0.08998935930621495,0.01401587559389728,57511.773576838896,56933.67614001638,-0.09629658750652188,0.6357286630974412,null,null,1638324300000,null,null],["2021-12-01 02:10:00",56920.81,56952.39,56826,56861.15,114.69796,14.287180551574185,37.79400942633255,16.621506337685336,9.645728712165177,-88.25651929649757,-46.970697053261205,-41.28582224323637,13.99078027271337,56802.82274064601,57219.10399999999,57635.38525935398,0.07005751285142087,0.014550429148767717,57475.44816222856,56876.27104043647,0.004188648318450893,0.7100623997747268,null,null,1638324600000,null,null],["2021-12-01 02:15:00",56861.15,56943.53,56800,56825.45,138.25907,15.23874910193049,36.704585674313286,7.682953441723574,8.316178152467794,-100.66601324087242,-57.70976029078345,-42.95625295008897,13.612186273964126,56752.531088774165,57195.94183333333,57639.352577892496,0.08222501610592128,0.015504972218177518,57423.49230925027,56826.7566134042,0.08154743378225841,0.7624144784415169,null,null,1638324900000,null,null],["2021-12-01 02:20:00",56825.46,56860.31,56800.01,56819.89,98.04413,16.122348470118485,36.52798561115927,8.288826223365506,6.904571805463755,-109.68489296092594,-68.10478682481195,-41.58010613611398,13.730187139332168,56704.45492767912,57168.48933333333,57632.52373898754,0.12438201878385888,0.01623392225561726,57361.14307832524,56797.41677822047,0.16041151182463823,0.8113779753330008,null,null,1638325200000,null,null],["2021-12-01 02:25:00",56819.89,56902.77,56800,56898.01,104.66558,16.512656048819867,40.835288441534544,16.41457682783293,34.02298052556745,-109.26920165371848,-76.33766979059325,-32.93153186312523,20.72299494065522,56675.90391442129,57139.67216666667,57603.440418912054,0.23945805313684615,0.016232793597157874,57305.02877049272,56821.89506269652,0.25348975492447584,0.8632556345706429,null,null,1638325500000,null,null],["2021-12-01 02:30:00",56898.01,57027.54,56889.54,56957.77,78.04325,15.74655229392844,43.96780788883609,36.75493723799832,69.33725938296396,-102.93110502666241,-81.65635683780708,-21.274748188855327,26.009180780733555,56687.99858415648,57108.514166666675,57529.02974917687,0.32076268640648686,0.014726896283204147,57254.525893443446,56871.15620235133,0.2809236538854138,0.8772746956805715,null,null,1638325800000,null,null],["2021-12-01 02:35:00",56954.72,57074.67,56949.23,56995.19,259.643,14.65580068692235,45.89938093603466,58.141232625425204,71.06345796774441,-93.80728453507618,-84.0865423772609,-9.72074215781528,40.02162530972065,56719.05165914885,57080.2365,57441.42134085115,0.38226734571752746,0.012655337924227085,57209.0733040991,56923.98903571472,0.38820853712300346,0.9261543852794235,null,null,1638326100000,null,null],["2021-12-01 02:40:00",56995.2,57174.52,56962.91,57151.7,104.75294,14.31256736162015,53.170714190520044,78.10252826923994,93.90686745701166,-73.1048350384226,-81.89020090949325,8.785365871070638,39.280873736708706,56755.67136060515,57060.365000000005,57365.05863939486,0.6498800568685809,0.010679694719613386,56800,57035.733169301384,0.49151703228065385,0.9633516679370857,null,null,1638326400000,null,null],["2021-12-01 02:45:00",57149.31,57314.1,57103,57306.33,94.36231,14.856651848794874,59.02963933775299,87.81964877187791,98.48862089087787,-43.71670697080117,-74.25550212175483,30.53879515095366,44.89609947075974,56783.168337783296,57051.34733333334,57319.52632888338,0.9753964160088052,0.009401320322310912,56807.4904,57182.305833354956,0.6088241351578952,0.9914551752977638,null,null,1638326700000,null,null],["2021-12-01 02:50:00",57306.33,57362.68,57243.66,57284.08,138.56797,15.628541208080534,57.9069691442184,91.92768973025636,83.38758084287977,-21.968552992235345,-63.798112295850935,41.82955930361559,53.088218279480515,56789.49976876865,57049.39399999999,57309.28823123134,0.9515029034851934,0.009111200418056842,56827.754784000004,57262.223421279195,0.7411126387259588,0.9987836247176353,null,null,1638327000000,null,null],["2021-12-01 02:55:00",57284.09,57284.09,57209.86,57261.52,88.59883,16.03480518282655,56.728875000457144,85.80297142485716,75.53271254081407,-6.478705254128727,-52.33423088750649,45.855525633377766,47.39640377399505,56783.92646840307,57052.74316666667,57321.55986493026,0.8883256410072556,0.009423445161201405,56859.85029696,57297.41175371081,0.8681043064387763,0.964837394204472,null,null,1638327300000,null,null],["2021-12-01 03:00:00",57261.51,57305.73,57163.86,57207,130.30988,15.993924361224535,53.87622958079251,73.32596716945497,61.0576081246713,1.3818729481427,-41.59101012037665,42.97288306851935,47.45202871063691,56779.99515183549,57056.39516666667,57332.79518149785,0.7724399877932646,0.009688660281596624,56890.0200791424,57287.80926672768,0.9427423627694559,0.9024550932289693,null,null,1638327600000,null,null],["2021-12-01 03:05:00",57207,57344.99,57203.78,57242.97,121.0688,16.21239358198381,55.46730891799104,63.4970918956835,53.90095502156539,10.394099483273749,-31.19398819964657,41.58808768292032,55.4826355738008,56774.023919241765,57065.543666666665,57357.063414091564,0.8043127179215267,0.01021701463593287,56918.37967439386,57294.115104716584,0.9951952048453868,0.7729425945428414,null,null,1638327900000,null,null],["2021-12-01 03:10:00",57242.97,57246.95,57156.91,57184.35,100.47942,15.97500704440329,52.30090511534343,42.76461346584475,13.335277251297798,12.66027013634448,-22.42313653244836,35.08340666879284,54.57217016469136,56772.999762869025,57067.16383333333,57361.32790379764,0.699185044049908,0.010309398635033745,56945.03769393023,57265.08199710265,0.9853552444534825,0.5761797321549413,null,null,1638328200000,null,null],["2021-12-01 03:15:00",57184.36,57243.7,57127.14,57172.68,75.7168,15.4787931544132,51.66854400792078,29.38017473895388,20.904291943998704,13.360543210561445,-15.266400583846398,28.626943794407843,54.728343518683666,56772.78088367544,57070.934166666666,57369.08744965789,0.670626719774085,0.010448515951062417,56970.09623229442,57237.144056555015,0.9015993165387683,0.3316522839220239,null,null,1638328500000,null,null],["2021-12-01 03:20:00",57164.51,57200,57069.73,57132.32,116.78845,14.501551008881833,49.442070259597656,18.992690325143517,22.738501780134307,10.537332163745305,-10.105654034328058,20.642986198073363,54.641982551945304,56777.038298295294,57075.936499999996,57374.8347017047,0.5943189013490753,0.010473702930996216,56993.65125835675,57196.9422749099,0.6591714638173862,-0.0656345069414082,null,null,1638328800000,null,null],["2021-12-01 03:25:00",57132.32,57200,57091.7,57102.14,143.13013,13.594111873745565,47.78391259058298,18.472372060965956,11.774322458765106,5.797809751973546,-6.924961277067737,12.722771029041283,54.459050942002605,56777.01405879798,57075.81683333333,57374.619607868684,0.5440477279831187,0.010470381016460459,57015.792982855346,57154.89581371466,0.4202303108532538,-0.3444933521136276,null,null,1638329100000,null,null],["2021-12-01 03:30:00",57102.14,57109,57053.52,57068.25,64.67979,12.848550745516707,45.921473789429676,14.042660725724348,7.615157938273886,-0.6850389723695116,-5.676976816128092,4.99193784375858,55.56457286335292,56776.86831703821,57075.66533333333,57374.462349628455,0.4875913531110926,0.010470207033070564,57036.606203884025,57110.90646204433,-0.02422060969226668,-0.7240259002866024,null,null,1638329400000,null,null],["2021-12-01 03:35:00",57068.24,57233.4,57001,57222.22,162.89561,12.779988392059826,54.58255694473924,36.846349254720074,91.14956736712148,6.526119878617465,-3.2363574771789803,9.762477355796445,57.11947780926398,56782.180559478,57081.92783333334,57381.67510718868,0.7340174188445906,0.010502352854323233,57362.68,57158.307111328126,-0.44226629185611954,-0.9469221016691265,null,null,1638329700000,null,null],["2021-12-01 03:40:00",57222.23,57390,57191.02,57231.83,247.03355,13.755284061906528,55.06627439070074,52.70135230831094,59.339331619537724,12.868126159257372,-0.015460749891709646,12.88358690914908,61.05709432208158,56784.29696928684,57094.22183333334,57404.14669737983,0.7220024635487483,0.01085661049733584,57001,57193.646276684296,-0.6475538240079113,-0.9967190075329659,null,null,1638330000000,null,null],["2021-12-01 03:45:00",57231.84,57234.7,57073.59,57204.65,130.82725,13.598598009128517,53.33605679834466,67.6136946922112,52.35218508997467,15.522084058233304,3.0920482117332933,12.430035846500012,50.55183181445796,56798.050412400924,57104.183833333336,57410.31725426575,0.664088857663218,0.010721926149085891,57001,57202.486078859045,-0.7972080200287757,-0.9905948888677852,null,null,1638330300000,null,null],["2021-12-01 03:50:00",57204.65,57312,57180,57236.74,60.8208,13.939322591956998,55.128679243859956,57.431019708654674,60.60154241645191,19.98439199551649,6.470516968489933,13.513875027026558,49.26225366582028,56829.443516556355,57122.33716666667,57415.23081677699,0.6952975649868771,0.010254960305833992,57008.78,57222.95321902781,-0.9591766253967126,-0.8782155462579667,null,null,1638330600000,null,null],["2021-12-01 03:55:00",57236.75,57387,57227.26,57362.01,97.22679,14.689739907142297,61.367744196274046,68.58611825192806,92.80462724935785,33.24580827691534,11.825575230175016,21.420233046740325,49.35323186799717,56867.84213717798,57145.792,57423.741862822026,0.8889514421859033,0.009727745581757777,57016.4044,57296.16446791973,-0.9950300854365628,-0.7740024956024947,null,null,1638330900000,null,null],["2021-12-01 04:00:00",57362.04,57415.16,57222,57222.34,174.94331,15.544245552589379,52.58806609423144,65.65169206190068,43.54890651989254,32.1151707962199,15.883494343383994,16.231676452835906,40.21183535590534,56928.429581039,57168.780166666664,57409.130752294324,0.6114202264027454,0.00840845597638977,57023.876312,57273.03085484981,-0.990544891014409,-0.6034137446098571,null,null,1638331200000,null,null],["2021-12-01 04:05:00",57222.34,57309.19,57222.03,57252,84.09845,16.337715080504527,54.0901594165906,62.86195755829723,52.23233890564155,33.229398743860656,19.352675223479327,13.87672352038133,40.317413082528056,56991.65209857145,57188.4875,57385.32290142855,0.6613340373201402,0.0068837421667621666,57039.52765952,57270.6764013759,0.9591224190412111,0.8783071704380797,null,null,1638331500000,null,null],["2021-12-01 04:10:00",57252,57390.22,57239.49,57276.09,71.9322,17.53998497736478,55.32808392870834,45.54759550131547,40.8615410784126,35.645396153056936,22.61121940939485,13.034176743662087,46.10192765426364,57035.21792920075,57205.67,57376.12207079925,0.7065683322877783,0.005959271897322372,57054.552953139195,57279.42280956543,0.980829776049311,0.5557599666255177,null,null,1638331800000,null,null],["2021-12-01 04:15:00",57276.09,57295.26,57153.15,57222.26,78.17385,17.776327644078112,51.95674382618868,39.82357860975021,26.376855845196765,32.8379252211962,24.65656057175512,8.181364649441083,39.80162038961662,57074.185233870514,57216.52966666666,57358.87409946281,0.5201284069238826,0.004975640208360111,57068.977235013626,57257.39696999839,0.8661286625901562,0.2590185559655496,null,null,1638332100000,null,null],["2021-12-01 04:20:00",57222.25,57222.26,57140.01,57201.67,63.08692,17.86685177137381,50.68456172273748,29.88266389669953,22.40959476648951,28.621611240720085,25.449570705548112,3.1720405351719734,40.74867779174608,57089.55797453579,57221.10983333333,57352.66169213087,0.4261134220716389,0.004598018429936317,57082.82454561308,57232.24813113499,0.43862068204027166,-0.32530561659107043,null,null,1638332400000,null,null],["2021-12-01 04:25:00",57201.66,57218.61,57120,57148.34,60.70428,17.747595862744955,47.44422157252107,19.758067111106293,10.487750721632887,20.737814119369432,24.507219388312375,-3.7694052689429434,41.14203982417942,57083.43853010172,57217.16849999999,57350.89846989827,0.24265865739612444,0.004674470037722163,57096.11796378856,57189.752690824556,-0.02113821413599433,-0.7218957619190051,null,null,1638332700000,null,null],["2021-12-01 04:30:00",57148.34,57230.22,57114.36,57121.36,97.55631,17.72497296970962,45.84729954314285,11.811621506504949,2.5375190313927303,12.172470914672886,22.040269693584477,-9.867798778911592,41.65509262737918,57079.16162595132,57210.09383333333,57341.02604071535,0.16114588951197767,0.004577241483415556,57108.879645237015,57149.77649483894,-0.5289104935329534,-0.9741018914045215,null,null,1638333000000,null,null],["2021-12-01 04:35:00",57121.36,57206.22,57110.19,57200,105.16693,17.65647673870936,51.0220265213595,20.51761797012334,48.527584157344684,11.596290672649047,19.95147388939739,-8.355183216748344,49.71528618565538,57075.67516402488,57206.109500000006,57336.543835975135,0.47658016980601303,0.004560154050508511,57415.16,57163.756984371415,-0.9327077671271193,-0.9145300860856019,null,null,1638333300000,null,null],["2021-12-01 04:40:00",57200,57226.16,57125.19,57133.91,70.14613,17.761298138654762,46.96060611551992,23.608943141282065,19.76172623510905,5.740579193312442,17.109294950180402,-11.36871575686796,49.53169839352012,57071.37180318433,57202.920666666665,57334.469530149,0.23769949492597062,0.004599375764356396,57409.060600000004,57141.74959010281,-0.9992845070115536,-0.6798569356104015,null,null,1638333600000,null,null],["2021-12-01 04:45:00",57133.91,57133.91,56977.59,57030,279.48269,16.694184825837244,41.38299266535343,29.678355017807032,20.74575466096763,-7.201765460791648,12.247082867985991,-19.44884832877764,35.949207434828416,57046.70579304243,57192.083333333336,57337.460873624244,-0.05745658170098995,0.005083834398673779,57403.083188000004,57078.212931611124,-0.9071542940558838,-0.34390572439758027,null,null,1638333900000,null,null],["2021-12-01 04:50:00",57030.01,57125.74,57030,57096.11,55.17784,15.703293892506691,45.79417653915588,29.140646926039363,46.914459882041676,-11.98597548368707,7.400471197651378,-19.386446681338448,27.33086478078304,57033.30878609716,57186.47733333333,57339.6458805695,0.20500688632245678,0.0053568100144854094,57386.06346048001,57071.79851886754,-0.677616347791074,0.04087023380154757,null,null,1638334200000,null,null],["2021-12-01 04:55:00",57096.1,57140.04,57045.47,57054.36,55.97371,14.634235250599536,43.564517607555786,32.848291599892654,30.884660256668916,-18.92818019697006,2.1347409187270907,-21.06292111569715,28.842768590343177,57020.993278372676,57181.41650000001,57341.83972162734,0.10399592181497434,0.0056110264993988156,57369.72452206081,57049.73204672131,-0.2626887652737411,0.4965246228111725,null,null,1638334500000,null,null],["2021-12-01 05:00:00",57054.35,57130.76,56982.69,57012.26,67.1082,14.261890348357039,41.376780297997506,30.582300482600047,13.947781309089816,-27.509928274928825,-3.7941929200040923,-23.715735354924732,24.23924816412663,57005.723238753024,57176.81083333334,57347.89842791365,0.019103551204320703,0.005984509876880747,57354.03914117838,57017.470856890424,-0.07053810430994828,0.6554674668283146,null,null,1638334800000,null,null],["2021-12-01 05:05:00",57012.25,57044.16,56952.24,57014.26,73.09935,14.198901144024193,41.52700804825642,25.95231190282171,33.024494142706665,-33.76047245823429,-9.787448827650131,-23.97302363058416,17.389569630998785,56983.38862767662,57170.4245,57357.46037232338,0.08252794488002158,0.006543098952269641,57338.98117553124,57000.44584849224,0.07647676881224977,0.7591131642598797,null,null,1638335100000,null,null],["2021-12-01 05:10:00",57014.26,57098.74,56950,56952.01,129.05414,13.510347014819333,38.242148371311615,16.009982506945125,1.0576720690391643,-43.23869969633961,-16.477699001388025,-26.761000694951584,18.01833660944563,56968.659725927435,57166.590833333335,57364.521940739236,-0.04205939669020549,0.00692471265193896,57315.77670499936,56961.95687907309,0.0836803296924959,0.7637976391209361,null,null,1638335400000,null,null],["2021-12-01 05:15:00",56952,57006.5,56857.91,56877.13,107.2732,13.715323987726736,34.68769526818009,13.63154285059982,6.8124623400539,-56.145245826519385,-24.411208366414296,-31.73403746010509,17.708544253904417,56926.674047266286,57154.67283333333,57382.671619400375,-0.10864980494176801,0.007978307801075283,57286.514568599414,56903.76419939818,0.07654173547750973,0.7591555775867814,null,null,1638335700000,null,null],["2021-12-01 05:20:00",56877.12,56997.09,56800,56921.66,179.33735,14.367874098313324,38.357016226004305,14.884030371620717,36.78195670576936,-62.06512959430256,-31.94199261199195,-30.123136982310612,11.297702613499325,56890.00450050527,57136.43783333333,57382.87116616139,0.06422730872374025,0.008626135691094617,57243.65411173947,56891.806745163405,0.07868568421591492,0.76055355976993,null,null,1638336000000,null,null],["2021-12-01 05:25:00",56921.67,56942.43,56863.17,56864.99,65.1851,14.973813486715157,35.61477240661545,21.783040710706075,21.75470308629524,-70.51660400388937,-39.65691489037143,-30.859689113517938,11.405285922483257,56853.30108012936,57122.39866666667,57391.49625320398,0.021718737839777236,0.009421788749019777,57190.415618330735,56860.24964763297,0.06119114200843989,0.7490503813913969,null,null,1638336300000,null,null],["2021-12-01 05:30:00",56864.99,56880,56786.12,56850.08,100.26792,16.12431513985384,34.90765577999708,26.332001134705774,20.459343612052997,-77.52392322503147,-47.23031655730344,-30.293606667728028,11.115913881664914,56811.36928785987,57102.18966666666,57393.01004547345,0.06655433209144665,0.010185962412455694,57143.56574413105,56836.46259369738,0.05209671191531498,0.7429844997625976,null,null,1638336600000,null,null],["2021-12-01 05:35:00",56850.07,56885.81,56801.05,56845.66,76.47272,17.11222753432248,34.6877853840679,23.07700579511462,27.016970686995904,-82.48311722193466,-54.28087669022968,-28.20224053170498,16.217223878897595,56785.445402836995,57078.12716666666,57370.80893049632,0.10286701223731334,0.01025547887985323,57093.5233399527,56822.80507494197,0.05123816459732325,0.7424088235934849,null,null,1638336900000,null,null],["2021-12-01 05:40:00",56845.66,56921.73,56840,56910.68,74.69714,17.52750620949701,40.613530413669295,35.50596139683433,59.04156989145437,-80.24176645344414,-59.473054642872576,-20.768711810571567,21.663492645158087,56771.530600131606,57058.342333333334,57345.15406653506,0.24257968513882974,0.010053279554676917,57050.486872359324,56849.364139549936,0.05680062721939145,0.7461292950576603,null,null,1638337200000,null,null],["2021-12-01 05:45:00",56910.67,56932.57,56823.72,56840.49,51.44022,18.05472207162601,36.738436911237415,40.28066124542497,34.783443157824934,-83.17048859832721,-64.21254143396351,-18.957947164363702,14.889722418093221,56756.10857148348,57038.568333333336,57321.028095183196,0.14936893659453973,0.009904167306555264,57013.47551022902,56835.02207900423,0.058931764222136834,0.7475488891027553,null,null,1638337500000,null,null],["2021-12-01 05:50:00",56840.48,56857.18,56746.32,56823.59,74.72936,19.16843117091855,35.851455774616944,45.10408712380831,41.48724832214593,-85.86540778764174,-68.54311470469915,-17.322293082942593,14.845382134530785,56742.416359734765,57013.92316666667,57285.42997359857,0.1494873023304916,0.009524228183288371,56981.64573879696,56819.979720044634,0.026662077217500423,0.7257083428939227,null,null,1638337800000,null,null],["2021-12-01 05:55:00",56823.59,56823.59,56725,56782.01,93.86495,20.360734347063097,33.69592813452937,34.57870827591929,27.465433347787307,-90.31521162214631,-72.89753408818858,-17.41767753395773,17.145380005558373,56719.2020503465,56991.58866666667,57263.97528298684,0.1152919157740001,0.009558835705153146,56943.99362058944,56792.37065586853,-0.017819009794894203,0.6943945703632384,null,null,1638338100000,null,null],["2021-12-01 06:00:00",56782,56817.36,56700,56714.45,117.10263,21.653110619638067,30.488394657953698,25.055288265864064,6.213183127659246,-98.16169369622367,-77.9503660097956,-20.211327686428064,11.938814150099248,56692.05828488646,56969.3865,57246.71471511354,0.040370423731266786,0.009736043589430006,56904.57476888334,56744.113336048955,-0.010654652644475052,0.6995326669566044,null,null,1638338400000,null,null],["2021-12-01 06:05:00",56714.46,56820,56666.66,56820,115.27752,23.09444298335026,40.084333080018716,30.448248037538747,57.66612763716998,-94.77062758677494,-81.31441832519147,-13.456209261583467,20.092675397966364,56674.19988990622,56949.715000000004,57225.23011009379,0.2645954881460987,0.009675732708891953,56863.65981510667,56767.51700391276,0.009053728013711607,0.713479752297923,null,null,1638338700000,null,null],["2021-12-01 06:10:00",56819.99,57025.99,56819.99,57006.79,91.01905,21.722922731235656,52.56434735183295,52.845344332624826,94.65672223304556,-76.13317547724728,-80.27816975560263,4.144994278355355,26.49498247690005,56681.483767393474,56939.4955,57197.50723260652,0.6304097672616891,0.009062663107245931,56666.66,56876.219299981305,0.001386385888436351,0.7080864244963839,null,null,1638339000000,null,null],["2021-12-01 06:15:00",57006.8,57074.91,56900.01,57068.02,105.75914,20.368376898957973,55.81342677121973,83.54505283487627,98.31230863441355,-55.77912410394492,-75.37836062527109,19.599236521326162,33.540916891390886,56694.76632838086,56931.60433333334,57168.442338285815,0.7879936154968713,0.008320088911101012,56666.66,56976.48690049972,0.007237604182958085,0.7122060197843568,null,null,1638339300000,null,null],["2021-12-01 06:20:00",57068.02,57098.93,56943.49,56950.4,87.45953,19.33805447660769,48.88642463207572,86.2028539054113,65.63953084877508,-48.579350246182,-70.01855854945327,21.439208303271272,34.584588946698204,56709.91524572113,56923.39700000001,57136.87875427889,0.5632442807377217,0.007500668109420121,56682.990000000005,56981.82949123857,0.007436414755081718,0.7123455686212892,null,null,1638339600000,null,null],["2021-12-01 06:25:00",56950.4,57014.2,56909.09,56912.38,75.61126,18.017476741563033,46.86181472541075,73.59864718300861,56.84410206583748,-45.417825426047784,-65.09841192477218,19.680586498724395,35.42111309010047,56712.53219817332,56918.29983333333,57124.06746849334,0.4856152467108591,0.007230280446272386,56707.94640000001,56964.37573160352,0.07407055069260307,0.7575401502024776,null,null,1638339900000,null,null],["2021-12-01 06:30:00",56912.38,56924.88,56813.29,56851.97,69.41885,17.57764736205437,43.760693895036006,45.341717903339735,13.541520795406935,-47.242296573502244,-61.527188854518194,14.28489228101595,38.67400011137996,56715.73451669457,56907.27133333334,57098.80814997211,0.3556378499345319,0.006731541054458477,56731.40541600001,56921.7690657262,0.2613221575974561,0.8673186504291848,null,null,1638340200000,null,null],["2021-12-01 06:35:00",56851.96,56989.99,56850,56968.97,50.10923,16.494460727244697,50.581709083542634,41.629264475197026,54.50217056434695,-38.80001845172956,-56.98175477396047,18.18173632223091,43.40557797188849,56725.822796537424,56900.0895,57074.35620346258,0.6976295489367277,0.006125357797990016,56753.456891040005,56950.45025257835,0.3704240775080656,0.9187345243304197,null,null,1638340500000,null,null],["2021-12-01 06:40:00",56968.97,56976.01,56885.14,56893.47,50.79218,15.48864456635,46.64979035448239,32.037996545768635,28.070298277552325,-37.7663245563017,-53.13866873042871,15.372344174127015,45.29586003244293,56732.526246514884,56893.90466666666,57055.28308681844,0.49865326892451967,0.00567295991010885,56774.185277577606,56931.024134574676,0.5494013318563654,0.979314560553801,null,null,1638340800000,null,null],["2021-12-01 06:45:00",56893.48,57000.99,56873.88,57000.99,82.50521,14.474884145955611,52.332557628600654,58.6657951570786,93.42491662933682,-27.94897093957843,-48.10072917225865,20.151758232680223,45.593164431305375,56735.541634577705,56891.65800000001,57047.774365422316,0.8501618799036122,0.005488198829512246,56793.66996092295,56970.1487196806,0.673212620898293,0.9989025846267193,null,null,1638341100000,null,null],["2021-12-01 06:50:00",57000.99,57074.86,56903.54,56908.17,86.7422,14.26260099831208,47.61710170299255,52.58949594524685,36.27327292885173,-27.343249776167795,-43.94923329304048,16.605983516872683,46.16728833878434,56738.35547260369,56889.755000000005,57041.15452739632,0.5608159097874494,0.005322558601151139,56811.98556326757,56948.845198170246,0.7456826264251529,0.998423408381534,null,null,1638341400000,null,null],["2021-12-01 06:55:00",56908.16,57004.95,56908.16,56933.02,52.63116,14.065480932643084,48.943495017675346,55.53964674916816,36.92075068931628,-24.57474174471281,-40.074334983374946,15.499593238662136,46.11654553125502,56738.140558253246,56891.49816666667,57044.8557750801,0.6353758504807578,0.005391231145439565,56829.20222947151,56946.26233072403,0.84976125133342,0.9736358200331334,null,null,1638341700000,null,null],["2021-12-01 07:00:00",56933.02,56979.98,56840.32,56844.67,112.64437,13.092258439972019,44.617800902130284,25.01623930446107,1.8546942952155405,-29.173491956593352,-37.894166378018625,8.720674421425272,44.64453548479191,56737.3977822752,56890.601833333334,57043.80588439147,0.35009589166834004,0.005385917748135694,57098.93,56900.76991772726,0.9443908264662804,0.9002996375567083,null,null,1638342000000,null,null],["2021-12-01 07:05:00",56844.67,57145.77,56819,57085,145.30153,13.660959401209125,56.007777800608,40.05942218032624,81.40282155644722,-13.272416003434046,-32.96981630310171,19.697400299667663,54.49427875783858,56733.68861745586,56896.9215,57060.15438254413,1.0761048174504573,0.005737845853193881,56819,56988.79766901848,0.9989604600856925,0.7386052320682988,null,null,1638342300000,null,null],["2021-12-01 07:10:00",57085.01,57155.9,57022.45,57089.31,151.578,14.26483260594513,56.18182254902704,54.49733559950997,80.23449094686747,-0.319237795076333,-26.439700601496632,26.1204628064203,64.8882850183205,56727.630833034,56909.44583333334,57091.260833632674,0.9946351136334615,0.006389624697165526,56819,57046.61903693864,0.9448375139059724,0.4364956674998168,null,null,1638342600000,null,null],["2021-12-01 07:15:00",57089.3,57300,57075.08,57221,342.01861,15.775480674889378,61.22903766355663,81.73773202639931,83.57588357588358,20.338086872950953,-17.084143106607115,37.42222997955807,70.21952911646419,56707.05765551417,56927.17183333334,57147.286011152515,1.1674448905968284,0.007733185075963589,56819,57145.912522013685,0.7523687821117816,0.06620402887196267,null,null,1638342900000,null,null],["2021-12-01 07:20:00",57217.63,57267.84,57101.01,57121.01,72.09625,17.17822531033761,55.9585321364099,75.5327721035643,62.787941787942216,28.314417175562994,-8.004431050173093,36.31884822573609,64.9790582632815,56697.63528557157,56940.795999999995,57183.95671442842,0.8705656162913015,0.008540825963459592,56847.86,57157.34982844811,0.509626238437691,-0.24803160318539993,null,null,1638343200000,null,null],["2021-12-01 07:25:00",57121,57158.27,57071.75,57142,78.14706,18.10687783553387,56.79920519573207,71.17186417186419,67.15176715176716,35.91542334227415,0.7795398283163575,35.13588351395779,58.948331371800336,56700.14192248559,56953.71666666666,57207.29141084773,0.87125805636009,0.008904589867775111,56874.9884,57170.96385292177,0.3468237359495109,-0.41797547813510694,null,null,1638343500000,null,null],["2021-12-01 07:30:00",57142.01,57253.99,57079.99,57209.21,124.23655,19.566969968635895,59.467160294474866,65.74282857889419,67.28877679697355,46.822816511717974,9.98819516499668,36.83462134672129,65.81755098888058,56709.03639440468,56972.318333333336,57235.600272261996,0.9498821066697862,0.009242451303745482,56900.489096000005,57208.783107662864,0.2770331658348997,-0.48353884380200435,null,null,1638343800000,null,null],["2021-12-01 07:35:00",57209.21,57209.21,57086.22,57107.52,79.84482,20.92276980651635,54.03024290163948,50.03731895772131,15.671412924423569,46.722878778244194,17.335131887646185,29.38774689059801,65.62032118806724,56734.349133566226,56990.190833333334,57246.03253310044,0.7293003188562831,0.008978446852908854,56924.45975024001,57179.632292946546,0.21168136795071593,-0.5414015146893614,null,null,1638344100000,null,null],["2021-12-01 07:40:00",57107.52,57216.32,57024.64,57204,119.45027,21.36934669258189,57.957652709573814,52.236729907132634,73.75000000000112,53.80853578161623,24.629812666440195,29.178723115176034,71.20735404631529,56773.278653940106,57010.409999999996,57247.54134605989,0.9081915006527865,0.008318878817391082,56946.99216522561,57204.77878905489,0.17745094527540917,-0.5704079801982276,null,null,1638344400000,null,null],["2021-12-01 07:45:00",57204,57246.83,57128.73,57137.31,97.77715,22.002303162996697,54.492076339412776,46.18240106709777,49.12579027686896,53.42677376679785,30.389204886511727,23.037568880286123,72.07233844930165,56812.16695989353,57030.5135,57248.86004010647,0.7445573443662579,0.007657183030851291,56968.172635312076,57185.51100239783,0.17309309786101643,-0.5740380314654301,null,null,1638344700000,null,null],["2021-12-01 07:50:00",57137.31,57149.78,57036.37,57052.61,199.90104,21.470650146978123,50.37238589986328,45.02370830608271,12.195334641378391,45.762125193745305,33.46378894795844,12.298336245786864,65.90917625592488,56820.9042130523,57036.94666666667,57252.98912028104,0.5362505911946569,0.007575526610039521,56988.08227719335,57129.396704758,0.13422591491411665,-0.6057959457947659,null,null,1638345000000,null,null],["2021-12-01 07:55:00",57050.53,57181.88,57030,57163.87,79.9259,21.24000474529222,55.16715656828131,41.327903664409554,62.662586074981654,48.1109945431308,36.39323006699291,11.717764476137887,65.86339939493541,56823.22534546044,57042.4935,57261.76165453955,0.7767763979563909,0.007687888136922118,57006.79734056175,57146.45826681145,0.06929068189424328,-0.6564113477124651,null,null,1638345300000,null,null],["2021-12-01 08:00:00",57163.87,57202.74,57056.15,57081.95,119.56155,21.196821495715835,51.24158776987632,33.550386912053746,25.79324001980155,42.86807457991381,37.688198969577094,5.179875610336715,59.76326351182851,56827.89070381679,57048.29383333332,57268.696962849855,0.5763513810817966,0.007726896448838288,57024.38950012805,57116.64996043983,-0.13980372184117845,-0.7990186120982378,null,null,1638345600000,null,null],["2021-12-01 08:05:00",57081.94,57081.95,56970,56970.13,142.50802,20.163906995708054,46.38922423320227,29.500928774360286,0.046960228298009554,29.35173472747556,36.020906121156784,-6.669171393681225,56.886509222193894,56835.40733582317,57051.40066666667,57267.39399751017,0.31186764806743833,0.007571885293596214,57300,57042.555865613744,-0.4879219813931197,-0.962237430907538,null,null,1638345900000,null,null],["2021-12-01 08:10:00",56970.01,56983.43,56852.34,56919.99,141.12075,19.347263657623266,44.36070684447079,15.048902365804869,19.306506849315404,14.427744988643099,31.70227389465405,-17.27452890601095,56.032002333628114,56847.056798511636,57054.161,57261.265201488364,0.17607851739420102,0.007259915766296666,57293.4,56971.38438603591,-0.7001184719005832,-0.9999516391430516,null,null,1638346200000,null,null],["2021-12-01 08:15:00",56919.99,57456.38,56900.02,57374.01,347.03352,20.335499918732285,60.99373519806237,35.2389843131591,86.36348586186425,38.78886134723143,33.11959138516953,5.669269962061904,60.28546980723881,56853.83254219283,57069.51849999999,57285.20445780715,1.205867695550793,0.0075587095695282555,56852.34,57149.51548425301,-0.8250200443165506,-0.9829657603253494,null,null,1638346500000,null,null],["2021-12-01 08:20:00",57374,57700,57282.57,57619.01,362.99191,22.093931724554444,66.7671537735281,65.37181811164794,90.44546162376453,76.97732731082942,41.89113857030151,35.086188740527916,63.96697369965744,56812.025582053044,57100.30116666667,57388.5767512803,1.3996752777876582,0.010097165119048932,56852.34,57383.77614421251,-0.8445070772237915,-0.9758437527474713,null,null,1638346800000,null,null],["2021-12-01 08:25:00",57619.01,57738.16,57463.86,57601.18,220.59464,23.84023261525186,66.00151742552204,87.11510309156832,84.53636178907655,104.59749491979892,54.43240984020099,50.16508507959793,61.991821887481635,56775.597135834396,57132.4235,57489.2498641656,1.1568411797375708,0.012491203499028929,56886.246399999996,57521.51286199465,-0.6495100541983632,-0.9969237284400717,null,null,1638347100000,null,null],["2021-12-01 08:30:00",57601.18,57850,57582.87,57727,333.35709,25.780571334367828,68.72682011047206,87.55099130166413,87.67115049215168,135.08215620979172,70.56235911411913,64.51979709567259,69.0301844971851,56736.89231645974,57170.311833333326,57603.73135020691,1.1422047750436746,0.01516239820895557,56937.361216,57664.38891983669,0.4170764923294603,-0.34775150553417894,null,null,1638347400000,null,null],["2021-12-01 08:35:00",57727,57759.28,57530,57556.62,229.86165,27.142587999179455,61.53363261270191,80.44158561826607,69.11724457357035,143.83518535483017,85.21692436226134,58.618260992568835,64.96231779720515,56740.47391943441,57203.64133333333,57666.80874723226,0.8810486835584014,0.01619363394018876,57010.37231872,57664.07777841511,0.8034488997608668,0.14713137119554412,null,null,1638347700000,null,null],["2021-12-01 08:40:00",57552.42,57576.36,57132.78,57135.17,282.37124,25.84101591012192,48.11791136179391,52.373875384139154,0.3332310866957717,115.43388129062805,91.26031574793468,24.173565542693368,56.739561142482366,56783.70651562262,57223.297000000006,57662.88748437739,0.39976238893702726,0.0153640390338705,57077.542533222404,57449.385807451064,0.6969680521538497,-0.014236977207264877,null,null,1638348000000,null,null],["2021-12-01 08:45:00",57135.17,57289,56800,56848.19,368.51085,24.780728398916956,41.48528139869836,24.679999823263273,4.589523809524032,68.9736700575304,86.80298660985383,-17.829316552323434,51.395179099247045,56777.81322787094,57221.420666666665,57665.02810546239,0.07932325517367102,0.015504943205792954,57850,57166.53565028191,0.4406252766315355,-0.32319436464635487,null,null,1638348300000,null,null],["2021-12-01 08:50:00",56848.19,57129.7,56840,57055.3,191.87919,23.79617570994092,47.14740607697701,9.745680203501822,24.31428571428599,48.30879037283012,79.10414736244908,-30.795356989618966,52.51430460496056,56767.2668796145,57217.37633333333,57667.48578705217,0.3199589766508504,0.015733313289187326,57829,57086.928152919136,0.1370775659914084,-0.6035034406093428,null,null,1638348600000,null,null],["2021-12-01 08:55:00",57055.3,57061.03,56825.47,56901.64,186.43194,22.940276311863048,43.76384354125318,13.166418702916117,10.595446584938657,19.310052268025174,67.1453283435643,-47.83527607553913,48.033445632362344,56735.6980920244,57203.91066666667,57672.12324130894,0.1772078719824889,0.01636994985781979,57808.42,56964.89073187958,-0.29281389542256697,-0.8831645951836687,null,null,1638348900000,null,null],["2021-12-01 09:00:00",56907.34,56939.47,56724.46,56883.67,195.29139,22.550374653648458,43.37183446110953,17.866181846738304,18.688813240990594,-5.063318637650809,52.70359894732128,-57.76691758497209,48.114177134814135,56693.9133992048,57188.206333333335,57682.49926746187,0.1919475150193565,0.017286533913913837,57788.251599999996,56883.5511558506,-0.6880259604728789,-0.9996453660833344,null,null,1638349200000,null,null],["2021-12-01 09:05:00",56883.66,56891.28,56717.22,56875.03,167.13233,22.217421270228197,43.17160443321446,18.961345321201303,27.59977613767498,-24.790793636260787,37.204720430604866,-61.99551406686565,44.42824827934947,56653.90440376749,57173.398166666666,57692.89192956584,0.21282796062695467,0.018172569046352463,57745.699936,56834.19330312726,-0.9654093847500536,-0.8670176934794314,null,null,1638349500000,null,null],["2021-12-01 09:10:00",56875.03,57038.71,56860.94,56998.12,136.1751,21.085670579231113,46.9304989082307,38.1296203023276,68.10027152831755,-30.14513110084954,23.734750124313983,-53.87988122516352,48.31066342802835,56634.97037680665,57162.64116666666,57690.311956526675,0.3441062402655413,0.01846208569409896,57683.99113984,56870.05568299457,-0.9925494372241378,-0.6156827221097123,null,null,1638349800000,null,null],["2021-12-01 09:15:00",56998.12,57083.63,56907.48,57011.25,97.0869,19.798780888320515,47.33070059817428,58.64873999553905,80.24617232062495,-32.9491831759442,12.397963464262347,-45.347146640206546,51.947139278510434,56623.428275903294,57155.96466666666,57688.501057430025,0.36412696937084627,0.01863449926421907,57625.9848714496,56905.986528978145,-0.8939224783686378,-0.3151581135062543,null,null,1638350100000,null,null],["2021-12-01 09:20:00",57007.99,57029.4,56873.56,56903.5,91.14853,18.774369516465747,44.37341030956642,66.39522255641766,50.839223820310785,-43.366042400870356,1.2451622912358058,-44.61120469210616,52.75083330913486,56603.71457828766,57145.323,57686.93142171233,0.27675476386107944,0.018955476783719824,57571.45897916262,56881.4338093992,-0.7041120626104834,0.004226241029263932,null,null,1638350400000,null,null],["2021-12-01 09:25:00",56905.5,56986.66,56874.66,56954.99,66.52916,17.82313038545775,46.106332484893116,65.32572800960679,64.89178788788496,-46.92573504261236,-8.389017175533828,-38.53671786707853,48.220239119799615,56584.518079559675,57133.71366666667,57682.909253773665,0.33728595889841606,0.019224921744493927,57520.20464041286,56895.14663661313,-0.2952170394816055,0.46684121486790486,null,null,1638350700000,null,null],["2021-12-01 09:30:00",56954.99,56999.89,56869.92,56924.98,90.57676,16.856824002434795,45.2220826843806,48.16282574774839,28.757465535049757,-51.57386192668491,-17.025986125764046,-34.54787580092086,39.466581013150254,56570.10490770789,57126.31416666667,57682.52342562545,0.319012212199088,0.019472961526487795,57472.02556198809,56893.08699666199,0.04240017785046273,0.7364523390646542,null,null,1638351000000,null,null],["2021-12-01 09:35:00",56924.99,57100,56909.02,57042.82,105.77147,15.959874968677555,49.33135659828134,56.265676036666605,75.14777468706544,-45.22747858028015,-22.666284616667266,-22.561193963612883,36.68476515213941,56562.571129603464,57120.91566666666,57679.26020372986,0.4300649854322642,0.019549565357861457,57426.73722826881,56952.45096010386,0.6009180769804737,0.9901112057469743,null,null,1638351300000,null,null],["2021-12-01 09:40:00",57054.46,57088.09,56980.4,57065.11,86.58496,15.126993723045832,50.09398761289643,62.913649846871046,84.83570931849827,-37.96170839628758,-25.725369372591327,-12.23633902369625,29.770279981594694,56558.07322441777,57117.46166666667,57676.85010891557,0.4532063386435008,0.01958730048311492,57384.16619457268,57003.43986860423,0.8074648994887963,0.9880972396544095,null,null,1638351600000,null,null],["2021-12-01 09:45:00",57065.11,57172.37,57022,57034.52,118.87879,14.862637397695952,49.00390363721522,71.46856751802751,54.42221854851915,-34.276769267562486,-27.43564935158556,-6.841119915976925,36.76424797994958,56563.530643415776,57120.9085,57678.28635658422,0.4225045460817053,0.019515720993275944,57344.14942289832,57021.843983541665,0.9771516198005057,0.8412414410591053,null,null,1638351900000,null,null],["2021-12-01 09:50:00",57034.52,57128.6,57022,57104.33,327.20144,14.617163667013923,51.59275752261685,72.25388249669844,77.50371962307823,-25.43020135453844,-27.034559752176136,1.6043583976376965,50.7458414760189,56579.65293983311,57129.228,57678.803060166894,0.4773479531690902,0.019239715970497326,57306.53365752442,57067.56590435302,0.9956762416098341,0.6383652465365683,null,null,1638352200000,null,null],["2021-12-01 09:55:00",57104.33,57182.99,57072.08,57099.39,188.57265,14.723224690820057,51.39393003274657,67.13721609528125,69.48571011424674,-18.603400837448135,-25.348327969230535,6.744927131782401,64.41268196629082,56576.020093831205,57122.96216666667,57669.90423950214,0.47845094769865754,0.01914963972770403,57271.174838072955,57093.595814772634,0.8419135783648789,0.2137592234487438,null,null,1638352500000,null,null],["2021-12-01 10:00:00",57099.38,57176.52,57065.97,57155.28,186.95625,14.769081166676541,53.57385793011097,77.77051939135633,86.32212843674436,-8.58430184727331,-21.99552274483909,13.41122089756578,64.3340650538417,56591.11200623706,57102.89866666666,57614.68532709626,0.5511749693606403,0.01792506763683262,57237.93754778858,57136.05393866987,0.511562742185611,-0.2458491367574653,null,null,1638352800000,null,null],["2021-12-01 10:05:00",57155.27,57165.71,57022,57039.67,171.6703,14.425377823791706,48.707608120651635,55.59455851983322,10.975837008508899,-9.859203756997886,-19.56825894727085,9.709055190272963,64.78733329862284,56621.74015462524,57076.634999999995,57531.52984537475,0.4593697308555525,0.015939792013833963,57206.69449492126,57104.78203147299,0.16584933192829493,-0.5800409453567283,null,null,1638353100000,null,null],["2021-12-01 10:10:00",57039.68,57060.99,57001.53,57001.53,121.05366,13.925875869738004,47.18490739062325,32.432655148417645,0,-13.788210053709918,-18.412249168558663,4.624039114848745,67.22725264190652,56702.136714443135,57041.704666666665,57381.272618890194,0.44084443716847016,0.011905953870342944,57177.326025225986,57064.27365045255,-0.1026170920789563,-0.7759351580282948,null,null,1638353400000,null,null],["2021-12-01 10:15:00",57001.53,57132.47,57001,57096.62,149.4107,13.987621810651492,51.27478540882744,21.172395144749423,52.541348425739706,-9.123833675883361,-16.554566070023604,7.430732394140243,75.53184544800524,56806.82029023744,57014.7745,57222.72870976256,0.6967873122007328,0.007294748127524731,57165.71,57083.796797257026,-0.23600670873186297,-0.8540139669203901,null,null,1638353700000,null,null],["2021-12-01 10:20:00",57096.62,57096.71,57001,57079.55,131.76255,14.044957327214018,50.51849932725789,32.43136105227554,44.75273473108725,-6.727141827999731,-14.58908122161883,7.8619393936190995,68.66268783786941,56835.8247470877,57003.65699999999,57171.48925291228,0.7260977812163242,0.005888473187335643,57138.8006,57087.283544662096,-0.4013961409210854,-0.9314722488423022,null,null,1638354000000,null,null],["2021-12-01 10:25:00",57079.55,57096.71,57015.09,57050.01,69.05405,14.098197449736363,49.166994591580355,42.349803567403605,29.755327545384187,-7.129196456262434,-13.09710426854755,5.967907812285116,64.5788658298928,56838.54114551531,57007.40066666666,57176.260187818014,0.626167991721205,0.005924126312606581,57132.47,57074.27452548726,-0.5304852683236293,-0.9745200157864534,null,null,1638354300000,null,null],["2021-12-01 10:30:00",57050,57052.87,56902.92,56946.35,258.52624,13.139936101040018,44.652602243796075,31.142562543474792,18.919625353953275,-15.632125906260626,-13.604108596090166,-2.02801731017046,59.36974197528845,56835.5504954842,57005.353,57175.1555045158,0.32625992423299527,0.005957423139395321,57107.555,57014.735775613786,-0.7281339155277057,-0.9995440945765484,null,null,1638354600000,null,null],["2021-12-01 10:35:00",56946.35,56991.15,56821.63,56960,114.8183,12.925376611566689,45.36399704811529,31.06327195044615,44.51486295200133,-21.026932445070997,-15.088673365886333,-5.938259079184665,54.890556403464686,56834.79751317305,57005.096999999994,57175.39648682694,0.36759502086515117,0.005974886309795955,57096.71,56983.48538740453,-0.9259662168802838,-0.9217650108320905,null,null,1638354900000,null,null],["2021-12-01 10:40:00",56963.01,57005.1,56942.48,56969.02,76.73217,12.590148674196495,45.85921524926327,39.0050882691117,53.58077650138086,-24.29446540345816,-16.9298317734007,-7.364633630057462,58.885758322491114,56856.47655180469,57011.246999999996,57166.0174481953,0.3635818384827804,0.005429470721638634,57073.9406,56968.94095764192,-0.9999549679123455,-0.7137854583223979,null,null,1638355200000,null,null],["2021-12-01 10:45:00",56969.01,57074.99,56894.47,57054.78,70.9545,11.762384625270101,50.45713816999977,60.95093366879487,84.75716155300275,-19.736384782205278,-17.491142375161616,-2.245242407043662,58.19514461527147,56891.67967695923,57020.25883333334,57148.83798970745,0.6342409129136651,0.004509946429739526,56717.22,57002.850431638115,-0.9286287702797339,-0.3942958356673682,null,null,1638355500000,null,null],["2021-12-01 10:50:00",57054.79,57071.11,56957.54,56962.01,95.25895,10.993746579838449,45.914630194556636,64.5817545330215,55.40732554468122,-23.340778770885663,-18.661069654306424,-4.6797091165792395,53.79414990463434,56895.25281138184,57021.80700000001,57148.361188618175,0.26374942365431164,0.004438799654951911,56724.375400000004,56980.25355561016,-0.6854677055134348,0.03014772822937502,null,null,1638355800000,null,null],["2021-12-01 10:55:00",56965,57020,56936.61,56963.48,58.00009,10.344561382490996,45.997592472337786,65.38400490878549,55.98752762867284,-25.781477436998102,-20.08515121084476,-5.696326226153342,49.53077051859011,56892.33788143228,57020.43583333334,57148.533785234395,0.2776864013511873,0.004493054113983945,56731.387692000004,56967.270595031834,-0.34548845118882276,0.41926804145702434,null,null,1638356100000,null,null],["2021-12-01 11:00:00",56963.49,56981.6,56863.24,56894.23,121.83989,10.428371911009226,42.67652968042614,42.010012057391855,14.635182998821834,-32.92411625019304,-22.652944218714417,-10.27117203147862,37.10278300179936,56887.7319855878,57019.31266666666,57150.893347745514,0.02469212941794861,0.004615302251995683,56738.259738160006,56926.17138230363,-0.10704293643913504,0.6273532414619303,null,null,1638356400000,null,null],["2021-12-01 11:05:00",56894.24,56990.3,56890.35,56969.13,146.82969,10.407748912411266,47.12337890385284,40.20993148425324,50.00708382526536,-32.17006841152761,-24.556369057277056,-7.613699354250553,35.603764796751626,56889.63986932443,57019.8705,57150.10113067557,0.30518983999085414,0.004567903418004812,56744.99434339681,56937.838635539985,0.1039002051718509,0.7767482661271303,null,null,1638356700000,null,null],["2021-12-01 11:10:00",56969.13,56990.26,56896.57,56905.77,141.17087,10.388598985141732,44.012962283621576,28.367389882655456,20.459902823879492,-36.26703869848279,-26.898502985518203,-9.36853571296459,25.708993224195797,56889.49883078259,57019.833999999995,57150.1691692174,0.0624204860250128,0.004571573085162042,56751.59425652887,56915.87797592928,0.21014652377232237,0.8399130499275432,null,null,1638357000000,null,null],["2021-12-01 11:15:00",56905.76,56905.77,56805.01,56869.52,172.10603,11.212142008256198,42.292964854508966,33.49101114733882,30.006046792871935,-41.955354009362054,-29.909873190286973,-12.045480819075081,25.712193727590936,56863.32308032404,57011.975,57160.62691967596,0.020843725696474066,0.005214761273432883,56758.06217139829,56885.54310973297,0.18841141103205364,0.8276696190829976,null,null,1638357300000,null,null],["2021-12-01 11:20:00",56869.51,56895.72,56821.16,56842.88,120.46461,11.976860529719632,41.02415162078384,23.634727192486242,20.43823196070763,-48.05901581692888,-33.53970171561535,-14.519314101313526,25.726266369430462,56838.72597622382,57002.411,57166.09602377618,0.012689077107812193,0.0057430912449013,56764.40072797032,56854.8669709714,0.18108739342432645,0.8234643143503145,null,null,1638357600000,null,null],["2021-12-01 11:25:00",56842.87,56897.42,56758.87,56847.72,164.00955,13.209697224542063,41.36830957255253,29.612005692060507,38.39173832260227,-51.90730907565012,-37.213223187622305,-14.694085888027814,16.9204037862868,56814.396355538855,56990.329666666665,57166.262977794475,0.09470532967158792,0.006174146110641385,57074.99,56839.70220331982,0.08587892835713533,0.7652200046826432,null,null,1638357900000,null,null],["2021-12-01 11:30:00",56847.72,57020.53,56825.28,56992.44,100.94403,12.819204604944312,50.64301472503686,49.364888308404154,89.26469464190288,-42.78620198119461,-38.32781894633676,-4.458383034857846,23.130220341800012,56812.2835325154,56983.38500000001,57154.48646748462,0.5264609068908411,0.006005310758025633,57068.6676,56902.88533588577,0.1520400195737643,0.8063947257571082,null,null,1638358200000,null,null],["2021-12-01 11:35:00",56992.44,57126.76,56874.65,56919.86,137.42829,12.380671295036858,46.65684186010007,57.1389320388445,43.76036315202865,-40.942300958689884,-38.850715348807384,-2.0915856098825003,29.972570214810162,56817.25617973972,56976.16516666666,57135.074153593596,0.322838318475513,0.005578086431829761,56758.87,56909.33646488917,0.22408964243028576,0.8475793265809194,null,null,1638358500000,null,null],["2021-12-01 11:40:00",56915.46,56988.81,56867.01,56986.56,120.05511,11.895270436147628,50.51189982710995,64.97194678826905,61.89078257087591,-33.710272511329094,-37.822626781311726,4.112354269982632,32.504996235895284,56825.79362113052,56966.90866666667,57108.02371220282,0.5696287672893593,0.004954281313099257,56766.2278,56946.57439893305,0.3582460007905953,0.9134923212892351,null,null,1638358800000,null,null],["2021-12-01 11:45:00",56986.56,57049.99,56901.01,57014.16,96.63384,11.992809139611875,52.05592736837931,58.34805693730859,69.39302508902152,-25.458281305996934,-35.349757686248765,9.89147638025183,38.8295334313939,56830.49977919962,56962.53833333333,57094.57688746704,0.6954795211344047,0.004635978592142296,56773.438444,56983.87831682566,0.5618893837721903,0.9822432763995831,null,null,1638359100000,null,null],["2021-12-01 11:50:00",57014.15,57078.47,56833.45,56941.88,193.1775,11.370172992783568,47.84583036552373,56.65322446298871,38.675865729069024,-24.46884909320943,-33.1735759676409,8.704726874431472,31.812767072323044,56829.8790102018,56959.034166666665,57088.189323131526,0.43359085639242684,0.004535019188947038,56780.50487512,56971.70762445333,0.7215451588249836,0.9997871415975045,null,null,1638359400000,null,null],["2021-12-01 11:55:00",56941.89,57223.01,56885.57,57157.93,179.14126,11.958407097224836,58.61900409100495,63.787621168408066,83.29397268713396,-6.180047797228326,-27.774870333558386,21.59482253633006,35.82072084305813,56828.06620126914,56959.64116666666,57091.21613206418,1.253520370437712,0.004619936597301483,56787.4299776176,57068.420982636504,0.8996561228477319,0.9448751995197997,null,null,1638359700000,null,null],["2021-12-01 12:00:00",57160.66,57223,57052.74,57098.66,117.8539,12.5046244799203,55.247434825825536,63.349736671643406,68.07937159872755,3.4911218540073605,-21.521671896045238,25.012793750052598,41.7052508072487,56818.264623983894,56962.92683333333,57107.58904268277,0.9691383025224084,0.005079170519896256,56804.853178512894,57099.65389759195,0.9931275473430564,0.7850049259973622,null,null,1638360000000,null,null],["2021-12-01 12:05:00",57098.66,57221.05,57093.01,57154.65,104.84588,13.011826335280375,57.72129716008353,77.94178047027425,82.45199712496157,15.494902955644648,-14.11835692570726,29.613259881351908,46.16776141863054,56803.90670109495,56968.041833333344,57132.176965571736,1.0684589402700972,0.005762358225988846,56821.57945137238,57144.18745127865,0.9941178583021405,0.6263652231108421,null,null,1638360300000,null,null],["2021-12-01 12:10:00",57154.64,57384.75,57153.48,57253.24,162.06231,14.589799677248267,61.732668402932255,75.55894768569412,76.14547433339355,32.587724012984836,-4.777140737968841,37.36486475095368,53.51877714582154,56772.07153634222,56982.864,57193.65646365778,1.1413322262767156,0.007398451003016658,56837.63667331749,57217.59490280211,0.9546831796474308,0.46461102399479337,null,null,1638360600000,null,null],["2021-12-01 12:15:00",57253.24,57299.99,57119.31,57125,95.76688,15.654244585579326,54.4905191004237,68.85404450136996,47.96466204575507,35.37819379850407,3.2539261693257426,32.12426762917833,47.24264147270116,56769.19399152287,56995.72266666667,57222.251341810465,0.7853443018886435,0.007948971064675315,56870.46347291844,57197.996895837154,0.8452994608288784,0.21991490206478345,null,null,1638360900000,null,null],["2021-12-01 12:20:00",57125.01,57278.77,57121,57257.12,93.58643,16.64265771474388,59.73187415580682,61.889507724909244,61.558386795579466,47.70077617977222,12.143296171415038,35.55748000835718,53.49315771202118,56760.978547692044,57008.06083333334,57255.14311897463,1.0040004507410207,0.00866832802342297,56901.32066454333,57245.9530316838,0.7156744090080982,0.012190765606638848,null,null,1638361200000,null,null],["2021-12-01 12:25:00",57257.12,57318.47,57226.69,57232.01,102.62862,17.82739043667501,58.35627440846458,52.38940411436088,47.64516350174846,54.80854555335827,20.676346047803683,34.13219950555459,61.30211163668303,56749.225181580136,57020.60966666667,57291.994151753206,0.8894849281194591,0.009518820885045088,56930.32642467073,57260.61102626846,0.4971124758022176,-0.26203513004296913,null,null,1638361500000,null,null],["2021-12-01 12:30:00",57232.01,57289.79,57200.86,57227.26,105.46034,18.58675768503937,58.083770755219,49.95729152969029,40.668324291743296,59.373794543455006,28.415835746933947,30.95795879652106,61.79407785941253,56744.665757226234,57032.73049999999,57320.79524277375,0.8376489224729474,0.010101734223430064,56957.59183919049,57263.791372880034,0.42255883394026256,-0.3420817585365802,null,null,1638361800000,null,null],["2021-12-01 12:35:00",57227.26,57275.79,57178.92,57208.46,92.92895,19.00088630398651,56.95025037784313,44.35883080429761,44.763004619401435,60.77421703377331,34.88751200430182,25.886705029471493,64.33909173176066,56746.68564881532,57045.11516666666,57343.544684518005,0.7736740562887346,0.010462929804924796,56983.22132883906,57253.12175669873,0.3545855731271515,-0.41043164170907753,null,null,1638362100000,null,null],["2021-12-01 12:40:00",57208.46,57217.87,57064.81,57104.98,98.695,18.045279478898895,51.04533300765161,33.75582918289755,15.836158637548284,52.92401565685577,38.49481273481261,14.42920292204316,58.49237230984836,56762.01339067128,57055.925,57349.836609328726,0.5834519604585185,0.010302579769891487,57007.31304910872,57192.83426559672,0.260242508401815,-0.4987229624990328,null,null,1638362400000,null,null],["2021-12-01 12:45:00",57104.98,57140,57052.71,57122.31,106.61278,17.030176503398756,51.94398749033861,28.929402000760913,26.18904274533339,47.55290043953573,40.306430275757236,7.246470163778497,51.35033265279986,56773.38149924756,57063.679000000004,57353.97650075245,0.6009843347738507,0.01017451050614678,57029.9592661622,57160.902847485224,0.07214390004469522,-0.6542507853178988,null,null,1638362700000,null,null],["2021-12-01 12:50:00",57120.54,57153.53,57000,57013.93,94.61758,16.08571118912209,46.228612027351446,15.610710179492273,4.806929155595517,34.15715033548622,39.07657428770303,-4.91942395221681,52.13668259108773,56786.363987732766,57069.92666666666,57353.48934560055,0.4012622766910147,0.009937376670908394,57384.75,57086.95770344851,-0.050118288812706545,-0.7416571341279846,null,null,1638363000000,null,null],["2021-12-01 12:55:00",57010.99,57100.2,57006.44,57100.2,95.29302,15.208707683008043,50.86320541359242,22.44265454458919,36.331991732839036,30.154586574928544,37.29217674514813,-7.137590170219589,52.10163140947645,56814.51193510018,57080.369000000006,57346.226064899834,0.5372963569869078,0.009315183820897457,57377.055,57082.325285090315,-0.25953601341187943,-0.8663963321889084,null,null,1638363300000,null,null],["2021-12-01 13:00:00",57100.2,57330.84,57038.64,57311.73,198.13622,15.866598536718696,59.97302908780361,45.120904955799595,94.22379397896461,43.54922081864788,38.54358555984808,5.005635258799799,63.95265232983065,56848.299888413,57099.05983333334,57349.81977825368,0.924051310774977,0.008783330081170685,57369.5139,57183.90471150807,-0.4043195830798619,-0.9326295500101391,null,null,1638363600000,null,null],["2021-12-01 13:05:00",57311.74,57332.75,57141.07,57191,113.62133,16.490557330575125,53.83795744740916,62.65207883356126,57.40045078888054,43.91642176949972,39.61815280177841,4.298268967721313,55.28185685439565,56895.35965459235,57118.40666666668,57341.453678741,0.6627310149959166,0.007809987185951847,57362.123622,57190.17918441162,-0.5309904531219709,-0.9746535399065641,null,null,1638363900000,null,null],["2021-12-01 13:10:00",57194.17,57300,57176.54,57250.66,120.46996,17.0699476391561,56.22126242258333,75.65135732181386,75.32982719759684,48.46284505840595,41.38709125310392,7.075753805302028,55.36258050885184,56919.18797610975,57133.222499999996,57347.25702389024,0.7743424235153493,0.007492471613700579,57354.88114956,57222.48594245859,-0.6244501289661221,-0.9938490534244231,null,null,1638364200000,null,null],["2021-12-01 13:15:00",57249.36,57325,57200,57322.71,114.8594,17.79872256534039,58.97592743975157,76.55114973467686,96.92317121755357,57.2201528197038,44.55370356642389,12.666449253279907,55.64974415301096,56938.54629054707,57148.66316666667,57358.780042786275,0.9141667165141366,0.0073533435246533625,57347.783526568805,57277.23768012247,-0.6141188969509509,-0.9923058684000369,null,null,1638364500000,null,null],["2021-12-01 13:20:00",57322.71,57350,57293.24,57321.08,156.39845,18.666327317361883,58.88565537512267,87.65490491878779,90.71171634121333,63.299181375485205,48.30279912823615,14.996382247249052,55.49590664672957,56966.26815849414,57167.36216666667,57368.45617483921,0.8822039123150841,0.007035273294096097,57000,57309.68820519217,-0.6519221994177845,-0.997167681898884,null,null,1638364800000,null,null],["2021-12-01 13:25:00",57321.07,57458.55,57321.07,57350,226.23954,20.20567340107591,60.053938046420555,84.48125246961176,65.80886985006873,69.64760339069471,52.57175998072786,17.07584340996685,64.45434174386615,56983.49439849953,57186.76983333334,57390.045268167145,0.9014999815401078,0.007109177015111613,57007,57342.175669164855,-0.6553888906406103,-0.9975017414849799,null,null,1638365100000,null,null],["2021-12-01 13:30:00",57350,57617.36,57350,57607.63,211.96455,22.43643503474323,68.61084819621382,84.77111202217117,97.79274987523179,94.3794143326304,60.93329085110837,33.44612348152204,66.76386011418562,56991.26110353088,57215.456333333335,57439.65156313579,1.3746253589164614,0.007836876402638799,57025.062,57485.98410424945,-0.4343431794252756,-0.944051650834161,null,null,1638365400000,null,null],["2021-12-01 13:35:00",57607.64,57885,57549.99,57873.5,373.74068,25.38916267173843,74.64666085862675,87.30759586950394,98.32116788321169,133.88964325485722,75.52456133185814,58.36508192299908,71.08159540023355,56922.93962590325,57249.48933333333,57576.03904076341,1.4554604589567426,0.01140795179949134,57060.59988,57703.62060646048,0.4393222015644061,-0.32456721767030555,null,null,1638365700000,null,null],["2021-12-01 13:40:00",57873.5,57925,57652.31,57729.44,333.52965,28.232633279833333,67.11587674918857,88.38637493303065,69.04520704064882,151.82717710269935,90.78508448602638,61.042092616672974,64.07314329837796,56886.98597591306,57281.695166666665,57676.404357420266,1.0671831867893393,0.013781337636924209,57126.5518896,57765.38655795867,0.7475011404792615,0.05886000372400107,null,null,1638366000000,null,null],["2021-12-01 13:45:00",57729.44,57738.34,57456.11,57630.24,225.87808,28.84514007839667,62.44417919673625,72.85313132745334,51.19301905849985,156.23718593388185,103.87550477559748,52.36168115828437,60.59832005880153,56888.628430275,57304.294833333326,57719.96123639165,0.8920754290802457,0.01450733856047865,57206.39670064,57747.54499607236,0.7146342298069256,0.010702695413806328,null,null,1638366300000,null,null],["2021-12-01 13:50:00",57630.24,57799.03,57560.04,57650.01,177.08597,29.65830880709439,62.99697703562745,57.47129275768725,52.1756521739134,159.48893432373734,114.99819068522545,44.49074363851189,65.67854078993795,56878.70901235903,57324.58833333333,57770.467654307635,0.8649212369342248,0.01555630258979217,57278.257030576,57737.60202980077,0.5730576899569589,-0.17427165623872112,null,null,1638366600000,null,null],["2021-12-01 13:55:00",57650.01,57728.93,57596.3,57646.5,110.2419,30.413394055170844,62.82018064688828,47.991025794369726,40.60440615069625,159.93906272805907,123.98636509379217,35.9526976342669,65.55852705570845,56884.25861539079,57348.378833333336,57812.49905127588,0.8211680456286105,0.016185992608139042,57342.9313275184,57722.73191673781,0.42351267276790294,-0.34109240559102844,null,null,1638366900000,null,null],["2021-12-01 14:00:00",57646.49,57888,57639.62,57888,191.73458,31.71795140703903,69.22060124156386,61.6296939209808,92.10902343833308,177.73401731574268,134.73589553818226,42.998121777560414,70.38505570998814,56875.49681975047,57377.69099999999,57879.88518024951,1.0080793645860813,0.017504858473636396,57401.138194766565,57825.475580942315,0.2845908347528701,-0.47663115546134854,null,null,1638367200000,null,null],["2021-12-01 14:05:00",57887.99,58000,57811.68,57999.14,359.31277,33.284167673837764,71.6401948162172,77.51843646029953,99.84187979186957,198.51634336231655,147.4919851030091,51.024358259307434,73.09940239581258,56854.59054834469,57411.58516666667,57968.57978498865,1.02743313310945,0.019403561727307003,57453.52437528991,57939.7526733829,0.17265405296692843,-0.574402972359798,null,null,1638367500000,null,null],["2021-12-01 14:10:00",57999.15,57999.15,57824.98,57950,151.57427,34.73851135015087,69.05538104096365,93.52874457159726,88.63533048458947,208.616498032854,159.7168876889781,48.899610343875906,67.36928156986356,56850.473053687776,57445.855500000005,58041.237946312234,0.9233787065126308,0.020728473486210996,57519.10145025512,57981.8670820795,0.1420506164932572,-0.599491336604517,null,null,1638367800000,null,null],["2021-12-01 14:15:00",57949.99,58250,57949.99,58235.03,639.02861,36.7542153991073,74.74689055638353,95.39572299103611,97.70995869664965,236.8897645350371,175.1514630581899,61.7383014768472,75.79460173588942,56830.41629243342,57492.053,58153.68970756658,1.0614689991525579,0.023016631796626802,57576.80927622451,58140.363761538116,0.07344225655101641,-0.6532657012189581,null,null,1638368100000,null,null],["2021-12-01 14:20:00",58235.04,58353.48,58183,58268.41,323.46461,38.84274595352916,75.31939462559035,91.47612890245479,88.08309752612563,259.0043777258106,191.92204599171404,67.08233173409658,77.18650278683522,56825.65112374499,57549.00683333333,58272.36254292168,0.9972679119904071,0.025138773000314047,57671.05597755308,58249.559758870855,0.08538298965314998,-0.6441496810091656,null,null,1638368400000,null,null],["2021-12-01 14:25:00",58268.4,58527.78,58210.05,58501.68,762.60745,41.09642298604579,78.91657433064361,94.04943795611844,96.35525764558042,291.9874578299714,211.9351283593655,80.05232947060588,80.71019265756678,56826.415025699804,57614.41499999999,58402.41497430018,1.0629854244525658,0.02735426452911793,57780.243821144584,58423.32606516159,0.11655391390260804,-0.6198713373749184,null,null,1638368700000,null,null],["2021-12-01 14:30:00",58501.67,58528.99,58166.46,58356,610.79308,42.77922790545533,71.8714529807781,86.6220870084386,75.42790585361014,302.8802133779027,230.12414536307296,72.75606801482974,69.51892729621301,56871.88581870308,57679.148166666666,58486.41051463025,0.9192266832714117,0.027991479542345682,57914.80033333856,58452.0399852633,0.1825063713531614,-0.5661791971272289,null,null,1638369000000,null,null],["2021-12-01 14:35:00",58355.18,58470.99,58275.32,58452.47,207.03825,44.34183247347847,73.55505686805253,86.18909134486553,86.78411053540643,315.6584097373561,247.23099823792958,68.42741149942654,69.41905475362742,56930.869096883136,57745.6805,58560.49190311687,0.9337135546313814,0.028220687541014124,58037.638266670845,58505.750996063536,0.229490559135584,-0.5259603980043698,null,null,1638369300000,null,null],["2021-12-01 14:40:00",58452.47,58547.74,58300.89,58547.73,243.51444,45.95527012372072,75.13754209155779,87.40313121485927,99.9973772555616,329.6716586259645,263.7191303155366,65.95252831042791,69.64747652665322,56970.808159657245,57807.59966666666,58644.39117367608,0.9422429763767981,0.028950916897936246,58135.90861333667,58575.69072420964,0.26443179572135334,-0.4949553673114142,null,null,1638369600000,null,null],["2021-12-01 14:45:00",58547.72,58743.4,58400.01,58408.52,469.45097,47.80810190064551,68.67041715102684,76.24577458437074,41.95583596214454,325.7886865742912,276.1330415672875,49.65564500700373,70.28599766880312,57026.04239557632,57872.38483333333,58718.72727109034,0.8167365493851044,0.029248576508273963,58218.27489066934,58541.92781811602,0.24122112615962524,-0.5156569504249057,null,null,1638369900000,null,null],["2021-12-01 14:50:00",58408.53,58524.4,58300,58484.9,240.62701,48.59133657609756,70.1866269044368,65.71595361379188,55.19464762366989,325.12677187199006,285.931787628228,39.194984243762065,71.61997614765934,57104.61250367498,57932.0865,58759.560496325015,0.8340367808868692,0.02856703586276036,58743.4,58548.243322980416,0.17634211321708496,-0.571332963244525,null,null,1638370200000,null,null],["2021-12-01 14:55:00",58484.89,58579.48,58433.55,58536.42,128.58979,49.44617451692898,71.19911829896888,50.97718221731869,55.781063066142025,325.0128868844622,293.74800747947484,31.26487940498737,75.88111071128478,57186.45928224186,57993.782166666664,58801.105051091465,0.8360723719109928,0.027841704895350972,58743.4,58569.72725516562,0.06933080248810336,-0.6563810071141805,null,null,1638370500000,null,null],["2021-12-01 15:00:00",58536.41,58819.45,58531.41,58535.45,356.62454,50.71577692450743,71.15012502562979,52.10083287953441,45.32678794879168,321.14243127447116,299.2268922384741,21.915539035997085,76.80402831353656,57269.52935644456,58059.14866666667,58848.767976888776,0.801601877744956,0.027200512868541235,58300,58576.21959515048,-0.034857260516038345,-0.7313248784194827,null,null,1638370800000,null,null],["2021-12-01 15:05:00",58533.9,58693.86,58475.54,58527.66,186.40733,51.409424066968754,70.72919398142261,48.31165861950627,43.82712484358547,313.8288557250562,302.1472849357905,11.68157078926572,75.57096759062681,57367.25055457554,58118.60599999999,58869.961445424444,0.7722107109830891,0.025855934859292787,58310.389,58570.605839809105,-0.11271670007596324,-0.7823032502082063,null,null,1638371100000,null,null],["2021-12-01 15:10:00",58527.66,58560.65,58337,58432.19,334.38633,50.93197588515327,65.60652304164229,38.20066095549807,25.448070074117442,296.906608719386,301.09914969250957,-4.1925409731235845,69.59707607811438,57454.824868499265,58164.52016666667,58874.21546483407,0.6885808135015958,0.02440303113079307,58320.57022,58515.436027497795,-0.18583469325007676,-0.8261946762143342,null,null,1638371400000,null,null],["2021-12-01 15:15:00",58432.2,58448.09,58275.03,58332.12,192.2457,50.023186176527055,60.64817352388743,26.587194700841277,10.486389184821272,272.2820948691369,295.33573872783506,-23.053643858698138,64.60083717304403,57504.70066776595,58193.63266666668,58882.564665567406,0.6005087102604441,0.02367722952945495,58819.45,58427.791526278226,-0.2599856468033685,-0.8666287471768302,null,null,1638371700000,null,null],["2021-12-01 15:20:00",58332.12,58489.98,58314.64,58405.31,171.99276,49.31938391615902,62.859103694547834,19.954837753787604,23.930054002424463,255.72497325007134,287.4135856322823,-31.688612382210977,67.84767023425867,57560.76891349195,58225.35233333333,58889.93575317471,0.6353913303386508,0.022827974179931695,58808.56159999999,58406.01324025418,-0.3346133727240764,-0.9029533501730097,null,null,1638372000000,null,null],["2021-12-01 15:25:00",58405.31,58579.49,58384.01,58488.01,147.01678,48.95671358134236,65.23583650278798,28.422541285735832,50.85118066996211,246.43577570521302,279.21802364686846,-32.78224794165544,64.25596625043079,57662.92310524546,58269.132666666665,58875.342228087866,0.6805294301365028,0.020807227898485207,58797.89096799999,58432.470412234856,-0.40589009913917307,-0.9332480098873275,null,null,1638372300000,null,null],["2021-12-01 15:30:00",58488.02,58755,58488.01,58642.1,522.43192,49.120407578125146,69.19176496089037,50.419643731695096,76.47769652269908,248.6416092446525,273.10274076642526,-24.461131521772757,65.83066608356994,57760.886189696226,58317.0665,58873.246810303775,0.792201552247032,0.019074358285966753,58787.43374863999,58524.75602952996,-0.4615422278790991,-0.9536469624128034,null,null,1638372600000,null,null],["2021-12-01 15:35:00",58642.11,58750,58399.19,58411.26,263.184,48.579975132463844,58.45946556178737,51.90396704388587,28.383023938996782,229.12171689811657,264.30653599276354,-35.18481909464697,55.18790105255121,57892.74509837519,58360.21183333333,58827.67856829146,0.5546008548300728,0.016020049286083474,58777.18567366719,58470.26637839114,-0.514652885516468,-0.9701869293997238,null,null,1638372900000,null,null],["2021-12-01 15:40:00",58411.27,58500,58300,58416.19,178.17015,47.35453681645207,58.60713288997399,43.46566139931992,25.53626373626425,211.61055660498823,253.76734011520847,-42.15678351022024,61.7244040013626,58002.51716322403,58390.221333333335,58777.92550344264,0.5334903112588991,0.013279763674674566,58767.142560193846,58436.87106250549,-0.5766963048462506,-0.9854628415810869,null,null,1638373200000,null,null],["2021-12-01 15:45:00",58416.19,58523,58411.25,58483.04,94.68737,46.30263115107743,60.649803849712455,31.382619701277434,40.22857142857162,200.81223379293078,243.17631885075292,-42.36408505782214,60.50951102573182,58092.24465491729,58416.99583333333,58741.747011749365,0.6016842602216286,0.011118379977723249,58757.30030898997,58448.31339062152,-0.6537017885959161,-0.9973416169747662,null,null,1638373500000,null,null],["2021-12-01 15:50:00",58474.97,58629.36,58430.69,58596.92,178.21044,45.712801478870304,63.91652449465218,43.673992673992664,65.25714285714247,199.1479953072121,234.37065414204477,-35.22265883483266,59.76866924679234,58215.66973933143,58448.3765,58681.083260668565,0.8191645562278339,0.007962813498115447,58747.65490281017,58511.703443217324,-0.6744149866605367,-0.9989774755696789,null,null,1638373800000,null,null],["2021-12-01 15:55:00",58596.91,58666.92,58535.91,58614.49,194.59785,45.296410148929695,64.40746961353852,58.45746031745998,69.88666666666622,196.97620737330726,226.89176478829728,-29.91555741499002,56.3052282080307,58277.10131320334,58471.41483333333,58665.72835346332,0.8681554597203464,0.006646444957210587,58738.20240475397,58560.62413773114,-0.7362061754295435,-0.9991160676648447,null,null,1638374100000,null,null],["2021-12-01 16:00:00",58614.49,58744.11,58587.26,58665.18,359.33934,45.17437118460189,65.85103781762761,72.45706187477464,82.2273761005156,197.0735677399207,220.92812537862196,-23.854557638701266,65.15043879077223,58303.27883999032,58491.27583333333,58679.272826676344,0.9625184785518596,0.006428206280837333,58275.03,58615.469535575634,-0.7812707089117344,-0.9938124537718209,null,null,1638374400000,null,null],["2021-12-01 16:05:00",58665.19,58923.01,58564.85,58845.92,641.27767,45.59818644181572,70.45268333282382,79.01678034399747,84.93629826481094,209.32200030362583,218.60690036362274,-9.284900059996914,69.84784758516585,58286.00365845572,58509.51366666667,58733.02367487763,1.252553176535641,0.0076401253131007305,58284.4116,58736.77830386507,-0.7937821632328957,-0.9913526278328688,null,null,1638374700000,null,null],["2021-12-01 16:10:00",58845.93,58965,58839.03,58949.29,252.53232,46.105565361910735,72.71707477479393,88.07447789369313,97.05975931575318,224.77895458797138,219.84131120849247,4.937643379478914,69.0130278590676,58261.591188017985,58537.87816666668,58814.16514531537,1.2445371391469893,0.009439596627061153,58309.955536,58861.41373948921,-0.7374477156227598,-0.9990371878044119,null,null,1638375000000,null,null],["2021-12-01 16:15:00",58949.3,59053.55,58817.88,58940.37,414.65333,46.809565573449106,72.20286196415886,86.71048041496213,78.13538366432262,233.6159534764156,222.5962396620771,11.019713814338502,75.54415026686692,58244.06433778413,58564.76183333333,58885.45932888253,1.0856113188901593,0.010951892759740222,58349.25820384,58931.44631356796,-0.31789046554985745,-0.8952098496348826,null,null,1638375300000,null,null],["2021-12-01 16:20:00",58940.37,58948.79,58785.14,58833.66,204.29207,47.165711941376706,66.17421008079624,76.73341953097547,55.005115612850936,229.36475940352102,223.9499436103659,5.414815793155128,78.08228347608063,58242.22059557866,58584.282333333336,58926.34407108801,0.8645214286514573,0.011677594198676276,58405.6015475328,58917.66102432276,0.26094417588727215,-0.49809288709623945,null,null,1638375600000,null,null],["2021-12-01 16:25:00",58833.65,58875.53,58730,58796,111.99656,46.99540029261964,64.13882460813144,60.1464852307172,47.298956414978385,220.41599186033272,223.24315326035926,-2.82716140002654,79.73274999951879,58244.80302780481,58598.44233333333,58952.081638861855,0.7793208554284043,0.012069921706002658,58457.43742373018,58884.32121094253,0.48556945346869523,-0.27480194639743444,null,null,1638375900000,null,null],["2021-12-01 16:30:00",58796,58850,58553.29,58568.42,207.66218,45.41484656049726,53.44150348359541,35.1094997752112,3.024427297804605,192.7384561286599,217.1422138340194,-24.40375770535951,74.42393062710391,58263.43390152061,58609.482500000006,58955.5310984794,0.4406694606184735,0.011808621530804071,58505.12642983177,58747.1326521092,0.3905336475356989,-0.3748054895760698,null,null,1638376200000,null,null],["2021-12-01 16:35:00",58568.41,58757.53,58568.41,58608.91,150.60056,43.94718952352647,54.88325418248232,20.480534079716474,11.118218526366768,172.08729900408798,208.13123086803313,-36.04393186394515,70.46405392785154,58272.36554419109,58615.90583333334,58959.44612247559,0.489818030731124,0.011721742904359816,58549.00031544523,58676.76128450573,0.3727824256585448,-0.39254068095938777,null,null,1638376500000,null,null],["2021-12-01 16:40:00",58608.91,58728.33,58598.54,58651.81,115.20669,42.5843651320536,56.42297848591055,13.017628675481939,24.91024020227479,157.36873089789879,197.97873087400626,-40.609999976107474,66.89690446946507,58273.38674987864,58617.44533333334,58961.50391678803,0.549940138568271,0.011739119011351476,58553.29,58652.76317076656,0.2755321759652566,-0.484905315454792,null,null,1638376800000,null,null],["2021-12-01 16:45:00",58651.81,58674.04,58600,58658.03,104.20557,41.318885339971644,56.6539574484902,22.844060887037827,32.50372393247227,144.53989570475096,187.2909638401552,-42.75106813540424,70.19640980330288,58278.00166381175,58621.36216666667,58964.722669521594,0.5533955318512841,0.01171451805840714,58568.41,58641.558101468734,0.07028396422841932,-0.6556598556427382,null,null,1638377100000,null,null],["2021-12-01 16:50:00",58658.03,58729.99,58502.26,58514,102.99971,39.31585319818606,50.039757235641304,20.263349905309163,3.376085581180776,121.35206305251631,174.10318368262742,-52.7511206301111,71.8644731153307,58294.62290436,58628.30233333333,58961.98176230666,0.3287243332844636,0.011382878769921848,59053.55,58565.525053320074,-0.1931486233316245,-0.8303683160523059,null,null,1638377400000,null,null],["2021-12-01 16:55:00",58514.01,58552.24,58400,58430.46,158.47299,36.689757040573156,46.63865785308066,14.799791435139404,8.519564791765509,95.13786866056034,158.310120678214,-63.17225201765365,67.48793843683448,58315.932142521015,58633.759999999995,58951.587857478975,0.18017278030224101,0.010841121479467808,59042.5242,58478.335316580706,-0.5256281908330143,-0.9732211852958211,null,null,1638377700000,null,null],["2021-12-01 17:00:00",58430.45,58576.2,58416.9,58561.44,124.70163,34.41366618125561,52.13209031952316,20.27278166668562,48.92269462711092,83.96403694423498,143.44090393141818,-59.4768669871832,66.9353350580305,58335.352956854025,58639.503500000006,58943.65404314599,0.37166963571303524,0.010373571568387542,59016.823232,58490.11568537112,-0.7408580428588286,-0.9988022471953291,null,null,1638378000000,null,null],["2021-12-01 17:05:00",58561.44,58565.01,58400,58429,86.63121,32.16974788594214,46.877048523026914,22.076801504727356,8.788145095305973,63.68774101897725,127.49027134893,-63.802530329952745,62.91774300418519,58332.21644817428,58638.54516666666,58944.873885159046,0.15797335669676424,0.010448032693229805,58992.15030272,58436.98714435558,-0.8986050315007976,-0.9456588027280923,null,null,1638378300000,null,null],["2021-12-01 17:10:00",58427.02,58514.05,58425.27,58478,85.10955,30.086109468865338,48.92827291146747,27.115973211309722,23.637079911512615,50.98479986934399,112.1891770530128,-61.20437718366881,59.23457792760322,58315.521503111544,58630.74866666667,58945.97583022179,0.25771652267531203,0.010752963955731934,58968.4642906112,58430.855672630234,-0.9978985811459832,-0.7514379997283981,null,null,1638378600000,null,null],["2021-12-01 17:15:00",58478,58587.13,58461.39,58537.61,100.40346,28.707876830992298,51.38743544428027,35.320779414535615,73.5371132367886,45.20654341456975,98.79265032532419,-53.58610691075444,49.28220319876734,58316.55912347429,58631.17666666667,58945.79420985906,0.35130093872505647,0.010732090368271665,58945.72571898675,58460.07520805981,-0.9295603884529715,-0.3966094783861288,null,null,1638378900000,null,null],["2021-12-01 17:20:00",58537.61,58573.98,58414.24,58419.88,103.08422,27.009748217970472,46.61355418511178,35.93260792647056,10.62363063111081,30.772678176042973,85.18865589546795,-54.41597771942497,40.62455635892443,58328.235809869475,58634.37516666667,58940.51452346387,0.14967724354244394,0.010442316676079661,58923.89669022728,58424.6334258036,-0.7763947793164104,-0.10334216118203418,null,null,1638379200000,null,null],["2021-12-01 17:25:00",58419.89,58501.98,58330,58341.89,181.1549,25.420030618257933,43.71625040524858,29.59495465426417,4.624120094893454,12.89198400710302,70.72932151779496,-57.83733751069194,23.146885252890243,58313.18921108564,58630.31816666668,58947.447122247715,0.045250975051729425,0.01081791692412595,58902.94082261819,58366.88216684045,-0.3864748596406698,0.37888554920958833,null,null,1638379500000,null,null],["2021-12-01 17:30:00",58341.88,58420.4,58300,58392.86,136.59334,24.176514771505747,46.075262934708526,15.862834100648541,32.34075157594171,2.8019588433235185,57.14384898290067,-54.34189013957715,24.052268234959268,58284.96491246184,58621.25633333334,58957.54775420484,0.16041903070044525,0.011473361094797224,58868.5643732611,58358.33616940076,-0.12859902397199688,0.6103022003804904,null,null,1638379800000,null,null],["2021-12-01 17:35:00",58392.86,58435.66,58345.67,58379.43,112.19377,22.87995468186505,45.53372797745094,21.542766462168007,27.66342771566921,-6.206601713412965,44.473758843637945,-50.68036055705091,30.387993296358186,58258.03818428139,58610.31366666667,58962.58914905195,0.17229671349345754,0.012020938307505767,58823.07922340021,58350.021920239655,0.2570099803841483,0.8650876797193315,null,null,1638380100000,null,null],["2021-12-01 17:40:00",58379.43,58442.99,58362.97,58368.59,74.62663,21.604647954631215,45.07324303461387,28.34628445180309,25.034674063798708,-14.0585895944605,32.76728915601826,-46.82587875047876,37.425443661725716,58232.27243575476,58596.61366666667,58960.95489757858,0.1870740293433776,0.01243557291499826,58781.23288552819,58342.793472748046,0.39428068400548044,0.9286226531757824,null,null,1638380400000,null,null],["2021-12-01 17:45:00",58368.59,58580,58300,58427.34,142.85422,20.89850263894164,48.13466161108793,32.72555773601258,45.478571428570184,-15.363610417567543,23.141109241301095,-38.50471965886864,46.38288631467865,58218.89971668351,58579.50633333334,58940.112949983166,0.28901339256192143,0.012311698722685636,58742.734254685936,58369.91164646831,0.476210263430517,0.9585127321367867,null,null,1638380700000,null,null],["2021-12-01 17:50:00",58427.35,58427.35,58118.01,58136.99,247.62218,20.050641183459053,37.12246015100493,24.873853175046317,4.108314032770408,-39.37280211182224,10.638326970676427,-50.01112908249867,36.360168318804135,58188.584673121346,58544.99016666666,58901.39566021198,-0.07238198352123293,0.012175439522005109,58707.31551431106,58248.00362701038,0.4555199049151445,0.9515857712167146,null,null,1638381000000,null,null],["2021-12-01 17:55:00",58136.99,58157.75,57958.02,57994.96,332.56529,20.234966493371797,33.129671729112204,18.50866106050817,5.9390977201842725,-69.06475797356688,-5.302290018172236,-63.76246795539465,32.22815688126329,58125.2160877448,58499.97233333334,58874.72857892188,-0.17378774774018108,0.01281218539568455,58648.38496287996,58103.7682816528,0.34693582980272986,0.9085082569350752,null,null,1638381300000,null,null],["2021-12-01 18:00:00",57994.97,58107,57886.69,57923.59,207.57776,20.776304882659907,31.3074249588794,5.123235417749732,5.322294500294862,-97.23395691967744,-23.688623398473275,-73.54533352120416,30.644078064395703,58050.643307250706,58455.8005,58860.95769274929,-0.15679507796536807,0.013862001350893875,58565.54116733436,57981.94231509855,0.10728311712162777,0.7788863420479223,null,null,1638381600000,null,null],["2021-12-01 18:05:00",57923.58,58021.39,57680.92,57790.28,354.93025,22.167140062265652,28.188572341985658,7.80831239251535,12.163544957067264,-128.8301788071476,-44.71693448020814,-84.11324432693947,28.055761741554463,57947.47042150806,58407.318166666664,58867.16591182527,-0.1709157250013703,0.015746237272747956,58470.50200390755,57846.14383249249,-0.1702139286316345,0.5764286430488772,null,null,1638381900000,null,null],["2021-12-01 18:10:00",57790.28,57835,57683.8,57705.48,178.93459,23.458629871899557,26.387762413102315,6.925389362770809,3.29032863095065,-158.88157568415045,-67.5498627209966,-91.33171296315385,22.080032801392065,57829.70822920785,58361.52766666666,58893.347104125474,-0.11679549529201462,0.018225000568741552,58344.16888328234,57726.676193198946,-0.26113545807048233,0.4979210545755668,null,null,1638382200000,null,null],["2021-12-01 18:15:00",57705.47,57900.57,57600,57610.02,222.27283,24.978979653701163,24.491005512027385,5.750125799322562,1.796503809950121,-188.23054388482706,-91.68599895376269,-96.54454493106437,20.891028230336868,57724.760809061045,58314.456666666665,58904.152524272286,-0.09728812537952812,0.020224688398501313,58238.049061957165,57613.803730622385,-0.31459474039196583,0.44875212318156676,null,null,1638382500000,null,null],["2021-12-01 18:20:00",57610.02,57828.21,57538.9,57800,182.89604,26.610892963359024,34.57080355984503,17.015683570777124,45.960218271430946,-193.9245726017689,-112.13371368336394,-81.79085891840495,23.84001441301242,57645.32209182928,58267.59716666666,58889.87224150404,0.12428419072637859,0.02135921524470781,58123.200230804876,57645.383344787886,-0.31853002676324776,0.44504080664483325,1,null,1638382800000,57610.02,null],["2021-12-01 18:25:00",57799.99,57933.96,57786.68,57811.08,132.27945,27.131816230146814,35.1148239675002,34.72275130886687,56.41153184521988,-195.29186492869485,-128.7653439324301,-66.52652099626474,24.73247321100343,57604.33461956819,58227.59133333333,58850.84804709847,0.16585892768234212,0.02140760761327762,58006.3401846439,57681.32979561379,-0.28029836468511465,0.4805600653603674,null,null,1638383100000,null,null],["2021-12-01 18:30:00",57811.07,58052.76,57724.93,57766.88,178.97289,26.637225637091422,33.90378267123461,48.912639963506,44.366169773867526,-197.66348296342767,-142.5449717386296,-55.118511224798056,30.69073651979364,57569.10244687522,58190.89666666667,58812.69088645811,0.1590377868027717,0.021370841674884383,57538.9,57690.98731755903,-0.23714281832473483,0.5192511226771863,null,null,1638383400000,null,null],["2021-12-01 18:35:00",57765.51,57798.78,57717.38,57760.42,88.54802,26.217584240349908,33.72073658740348,47.962239879852966,43.10901802047183,-197.7843405921958,-153.59284550934285,-44.19149508285295,31.806034942827345,57519.093609962,58155.79466666667,58792.495723371336,0.18951310626608234,0.021896392624469015,57549.1772,57700.607987094605,-0.18475806968293046,0.5642895702846097,null,null,1638383700000,null,null],["2021-12-01 18:40:00",57760.42,57788.03,57565.29,57681.08,140.50904,26.569625942850934,31.4732445384986,38.381400900374324,27.669014906783975,-201.95419382736145,-163.26511517294657,-38.689078654414885,31.77830339752853,57466.99497328605,58113.79233333333,58760.589693380614,0.16549621252188135,0.022259685147970925,57559.248856,57673.450454667945,-0.12282322008853302,0.614903836335528,null,null,1638384000000,null,null],["2021-12-01 18:45:00",57681.08,57685.26,57435.92,57488.92,199.96476,27.423643844473904,26.812147098107463,26.45673747424952,8.592179495493106,-218.24870341243513,-174.2618328208443,-43.986870591590844,26.5507171671289,57393.98749994727,58067.393833333335,58740.800166719404,0.07048678884217296,0.023193957535580068,58052.76,57567.040382571686,-0.06000627705048761,0.6634017291773283,null,null,1638384300000,null,null],["2021-12-01 18:50:00",57488.92,57565.72,57400,57474.05,182.7378,28.353012938289734,26.485270566140866,15.868444378756061,11.344138733991464,-229.71410319091228,-185.35228689485788,-44.3618162960544,22.84381125646677,57324.06456703361,58017.768,58711.471432966384,0.10810486573854201,0.023913482261723254,58040.423200000005,57497.027574602,0.01674012282109544,0.7188447517371943,null,null,1638384600000,null,null],["2021-12-01 18:55:00",57474.05,57581.63,57400,57461.32,157.87454,29.069585966339883,26.190893092006,11.77107259103073,15.376899543607976,-237.0946403029302,-195.70075757647234,-41.39388272645786,23.189411411962098,57275.91113847374,57965.38166666667,58654.852194859595,0.13445742344651604,0.023789044714922023,58014.806272,57452.24551729717,0.08057256938530875,0.7617812070618069,null,null,1638384900000,null,null],["2021-12-01 19:00:00",57461.32,57563.86,57357.68,57409.38,223.18404,29.911603770062317,24.971341280031073,12.911505226571002,12.013477402113923,-244.318540999775,-205.42431426113288,-38.89422673864212,23.419987659355254,57229.89570553964,57914.09533333334,58598.29496112704,0.13116368905309975,0.023628086525592264,57990.21402112,57404.65313415406,0.13324333491790621,0.7950190256903934,null,null,1638385200000,null,null],["2021-12-01 19:05:00",57409.37,57447.87,57222.01,57239.58,186.43678,31.207568880299977,21.454249518877138,10.394381809753895,3.792768483540142,-260.73933452579513,-216.48731831406533,-44.252016211729796,24.747033257420377,57162.33309293121,57859.688500000004,58557.0439070688,0.05538560846146426,0.024105052244406636,57952.2619798528,57297.69184695543,0.17750235777122608,0.8213913117010007,null,null,1638385500000,null,null],["2021-12-01 19:10:00",57238.87,57250.1,57018.01,57044.63,333.3294,33.021767025626744,18.27222513269641,6.843095410661853,4.723040346331849,-286.1848071228087,-230.426816075814,-55.757991046994704,23.658021069901412,57065.252614849196,57796.3465,58527.4403851508,-0.014103944286816786,0.02529896539916424,57893.84182146458,57141.06035997336,0.19467755818134352,0.8312357365309215,null,null,1638385800000,null,null],["2021-12-01 19:15:00",57044.64,57138.64,57000.89,57103.22,248.23436,34.751818545010316,22.015760656163238,8.712143598317011,17.620621965079398,-298.1855072244798,-243.97855430554716,-54.20695291893264,24.642643264637947,56988.83805933142,57731.04633333334,58473.25460733526,0.07705515060607114,0.025712621583765544,57806.25863931812,57077.96868246852,0.19016753031834452,0.8286720023352628,null,null,1638386100000,null,null],["2021-12-01 19:20:00",57103.21,57349.2,57060.59,57349.14,171.25403,34.532038106817915,35.39249976782893,28.06769547901008,61.859424125619356,-284.5720898428917,-252.09726141301607,-32.47482842987566,31.16990573510721,56971.618056634215,57674.119333333336,58376.620610032456,0.26869840375213705,0.024361057778409898,57709.614402599946,57167.043332416746,0.20073045194534475,0.8346525545473129,1,null,1638386400000,57103.21,null],["2021-12-01 19:25:00",57349.15,57492.83,57317.75,57482.15,229.17029,33.324391298675685,41.261220719674895,59.10301654257169,97.82900353701666,-260.0528358847514,-253.68837630736314,-6.36445957738826,39.72961537140727,57012.97506083997,57623.87583333333,58234.77660582669,0.38400257479223415,0.021203043483582467,57624.56747428795,57296.69575176706,0.24457454016366148,0.8585726131924922,null,null,1638386700000,null,null],["2021-12-01 19:30:00",57482.16,57600,57390.73,57492.17,160.8694,31.53952316148662,41.69092019300124,80.56335447411521,82.00163575970997,-237.0797128590275,-250.366643617696,13.286930758668518,39.208286725505616,57044.64910292204,57587.21833333334,58129.787563744634,0.4124090272670938,0.018843390811854502,57000.89,57388.93769142462,0.30036149238348586,0.8868440862102562,null,null,1638387000000,null,null],["2021-12-01 19:35:00",57492.17,57693,57483.07,57600,178.52127,29.350313552338502,46.24804319467872,88.79782296824554,86.56282960801029,-207.777240826239,-241.8487630594046,34.07152223316561,40.247361575945355,57065.24443268229,57564.974,58064.703567317716,0.5350449546021453,0.017362278920432208,57012.8722,57502.031522223755,0.32303908082878896,0.8976188180897798,null,null,1638387300000,null,null],["2021-12-01 19:40:00",57600,57603.78,57472.42,57526.77,86.78261,27.376973942509263,43.74745885649285,80.75976742050229,73.7148368937869,-188.29334118999395,-231.13767868552247,42.84433749552852,34.728252734899215,57081.597307518656,57543.06883333334,58004.54035914802,0.4823403694252127,0.016039169796497298,57040.077312,57537.68055070641,0.37278768193548645,0.9197368667087731,null,null,1638387600000,null,null],["2021-12-01 19:45:00",57526.77,57649.65,57449,57617.49,234.83482,25.570988031773908,47.53222851897904,80.05169385280841,79.87741505662838,-163.64546151840477,-217.63923525209893,53.993773733694155,41.48444047269762,57088.55054284956,57530.128000000004,57971.70545715045,0.5989203576692431,0.015351172420490507,57066.19421952,57602.27473703523,0.5179688371344042,0.9711180556399673,null,null,1638387900000,null,null],["2021-12-01 19:50:00",57617.5,57675.01,57403.15,57415,86.2023,23.878075455649217,40.915144888382244,53.87383244235466,8.02924537664904,-158.6225875703676,-205.83590571575266,47.213318145385045,42.333745965985216,57087.60886829214,57517.94266666666,57948.276465041185,0.3803920734839997,0.014963462823016213,57091.266450739204,57541.44117090679,0.7272980650641243,0.999580146964596,null,null,1638388200000,null,null],["2021-12-01 19:55:00",57414.99,57461,57401.01,57427.9,57.10638,22.31973589895191,41.47412604515378,32.37195997569842,9.209219493818146,-151.85056282395817,-195.03883713739376,43.188274313435585,44.726513143987624,57081.44359620679,57504.26466666667,57927.08573712655,0.40969623795757154,0.01470572914585856,57115.33579270964,57505.75511703038,0.798789441016988,0.9902324328938428,null,null,1638388500000,null,null],["2021-12-01 20:00:00",57427.91,57459.36,57153,57186.36,134.08221,22.240606527952668,34.82973481811802,7.876382347102198,6.390682170839726,-164.082502833764,-188.8475702766678,24.765067442903785,45.61202826265613,57058.96507724671,57481.45816666668,57903.95125608665,0.15076568817751637,0.014700152114964055,57138.44236100125,57363.20797809382,0.9018118756209579,0.943238531140258,null,null,1638388800000,null,null],["2021-12-01 20:05:00",57186.36,57244.55,57075.35,57115.8,125.19436,22.515217058995752,33.1585382927464,7.448463591718064,6.745489110496637,-177.42476349290519,-186.56300891991526,9.138245427010077,39.788451054501635,57034.8148546255,57446.5245,57858.234145374496,0.09835225660165729,0.014333665925237868,57693,57237.67616223122,0.9654172303101672,0.8670026992203755,null,null,1638389100000,null,null],["2021-12-01 20:10:00",57115.8,57336.65,57115.79,57300,94.99891,22.110778565418773,41.10335124936248,16.866355640733076,37.46289564086318,-171.1621498954555,-183.4828371150233,12.320687219567787,46.06698394889855,57042.69459488959,57416.65566666667,57790.61673844376,0.3440269917503466,0.01302622270262907,57680.647,57249.921131334275,0.9981801187102313,0.7484605839913627,null,null,1638389400000,null,null],["2021-12-01 20:15:00",57300.01,57307.67,57148.01,57170.42,71.48029,21.735228535668718,37.70785969816299,22.9534237256249,24.651886425515194,-174.64184408667643,-181.71463850935393,7.072794422677504,48.46246059886116,57041.13658169841,57389.14766666667,57737.15875163493,0.18574612115211572,0.012128114778411173,57668.541059999996,57197.867128502374,0.6843708541471486,-0.031652393823039644,null,null,1638389700000,null,null],["2021-12-01 20:20:00",57170.43,57191.8,57000,57000,321.11275,22.09967912631552,33.75809990402301,20.704927355459358,0,-188.97263760872738,-183.16623832922863,-5.8063992794987485,48.735544787136256,57009.402843323245,57358.43766666667,57707.4724900101,-0.013469778220371736,0.012170304406539488,57656.677238799995,57084.67985130626,-0.9196670508157586,-0.9279829438728878,null,null,1638390000000,null,null],["2021-12-01 20:25:00",57000.01,57050.57,56743.25,56942.64,514.82952,23.395611502954264,32.523272373623975,19.417722393495353,33.60128075497117,-202.62265945524996,-187.0575225544329,-15.565136900817066,43.51429941647318,56936.10944924054,57327.210333333336,57718.31121742613,0.00834893377268715,0.013644511282468198,57630.410149248,56988.735975653646,-0.9955212995238916,-0.6370917420859864,null,null,1638390300000,null,null],["2021-12-01 20:30:00",56942.63,57151.88,56837.74,56942.03,192.81409,23.875372255557078,32.50965334841614,22.366588023817297,33.498483316481014,-211.05669184833096,-191.8573564132125,-19.199335435118456,43.98280977392688,56888.33769737824,57302.075,57715.81230262175,0.06488694913598594,0.014440569652032803,57577.18054029312,56932.95867685392,-0.8805383231205801,-0.2874837119329803,null,null,1638390600000,null,null],["2021-12-01 20:35:00",56942.02,57096.62,56890.28,57062.18,140.33481,24.320864382973976,38.01537660396887,41.20185254314695,56.50579355798896,-205.67473213523772,-194.62083155761755,-11.053900577620169,41.87679993152114,56855.34232239255,57278.84383333333,57702.345344274116,0.24419945651194203,0.014787362404627559,57527.14470787553,56962.4875150632,-0.593123492426092,0.14989815562180792,null,null,1638390900000,null,null],["2021-12-01 20:40:00",57062.17,57241.42,57029,57191.78,184.11141,23.74071428177688,43.38078147956752,60.013268971471994,90.0355300399463,-188.77576390263857,-193.45181802662177,4.676054123983192,42.41120215940147,56844.80444515759,57264.36516666666,57683.925888175734,0.4134986154023302,0.014653466262585785,57480.111025403,57050.526836126905,-0.272971665451192,0.48723221609580875,null,null,1638391200000,null,null],["2021-12-01 20:45:00",57191.78,57217.38,56918.13,56933.9,79.31447,23.687036962184834,36.593184055923864,61.603797349488104,38.270068450529365,-193.95616470156529,-193.55268736161048,-0.4034773399548044,36.506783510028974,56817.76767031336,57250.36433333333,57682.9609963533,0.13422702902504663,0.01511245100559456,57435.899363878816,56984.88562033233,0.18770428287408988,0.8272653439367028,null,null,1638391500000,null,null],["2021-12-01 20:50:00",56933.9,56999,56851.47,56861.28,168.736,23.911414450331666,34.93547385659506,44.71231668535736,5.831351565596724,-201.59760504600854,-195.1616708984901,-6.435934147518452,35.28202893849097,56784.83576662675,57240.347833333326,57695.859900039904,0.08391021770943936,0.015915768647419566,57394.34040204609,56910.56613114634,0.37298539884649734,0.9198204893552839,null,null,1638391800000,null,null],["2021-12-01 20:55:00",56861.28,56883.99,56618.72,56788.54,464.7145,24.94482486900062,33.307840358455095,23.79099311816368,27.271559338365265,-211.08970098486316,-198.3472769157647,-12.742424069098462,23.26290847866931,56725.58947479533,57224.48949999999,57723.38952520465,0.06308931852513845,0.017436591555951262,57355.27497792332,56831.527263810116,0.46051710845066096,0.9532986901919626,null,null,1638392100000,null,null],["2021-12-01 21:00:00",56788.54,56807.49,56564.98,56630.19,313.29168,26.070662660919833,30.028046725205137,14.247695312654384,9.640175034001478,-228.7528564812892,-204.4283928288696,-24.32446365241961,21.436901976114434,56638.061789504296,57195.21833333334,57752.37487716238,-0.007064252938855445,0.01948262669728568,57296.35057968945,56708.60557895346,0.45409317296288176,0.9510921199355795,null,null,1638392400000,null,null],["2021-12-01 21:05:00",56630.19,56902,56458.01,56899.07,433.52003,27.43330212848691,40.70491438412006,31.664697372095258,58.08235774391935,-218.53552410405973,-207.24981908390762,-11.285705020152108,32.303081293669,56582.483613086566,57161.32416666667,57740.16472024678,0.27346596999411926,0.020252874194879287,57223.21352172051,56767.39226211979,0.3968703097807161,0.9296651089867514,null,null,1638392700000,null,null],["2021-12-01 21:10:00",56899.07,57000.27,56621.09,56930.37,194.70634,27.983355888816675,41.81787541830655,51.61067914786,87.10950466565949,-205.5431921947893,-206.90849370608396,1.3653015112946605,37.61549022625368,56556.70276764328,57129.138,57701.57323235672,0.326383852037141,0.020040044446556216,57131.38909911404,56826.177716567654,0.350866524865404,0.9102529068138795,null,null,1638393000000,null,null],["2021-12-01 21:15:00",56930.38,56999.99,56758.14,56865.34,108.04537,28.49412009483717,40.132444439965184,73.43632163551179,75.11710249695689,-198.20922055994743,-205.16863907685666,6.959418516909238,41.10952691615406,56553.99672290789,57093.26133333333,57632.52594375877,0.2886739376856943,0.018890657069912168,57050.58360722036,56835.92855291656,0.3931755711797055,0.928175927879184,null,null,1638393300000,null,null],["2021-12-01 21:20:00",56865.35,56946.59,56777.4,56807.6,71.39951,28.968401143284776,38.64318741393033,75.56522701287214,64.46907387600042,-194.8104767370969,-203.0970066089047,8.2865298718078,38.48140767205937,56550.87242806179,57058.73833333333,57566.604238604865,0.25275133580875625,0.017801511919335437,57000.27,56816.58926939515,0.4346430619810001,0.9441614056402321,null,null,1638393600000,null,null],["2021-12-01 21:25:00",56807.61,56807.61,56513.4,56543,176.13332,30.2797216064811,32.661683929859926,51.753156542371755,15.673293254158297,-211.03527315238898,-204.68465991760155,-6.350613234787431,37.297506845776354,56528.27334257047,57011.20283333333,57494.13232409619,0.01524721280353498,0.0169415647017536,56999.99,56677.342575831186,0.3506038589737156,0.9101367359699807,null,null,1638393900000,null,null],["2021-12-01 21:30:00",56543.01,56716.29,56501,56627.66,162.77926,31.532812060188963,36.071306859132264,35.170468642267444,25.36903879664396,-214.58854358427925,-206.6654366509371,-7.923106933342154,39.1627110378524,56510.73533051959,56967.066000000006,57423.396669480426,0.12811397227973734,0.016020859121669336,56946.59,56633.03068384948,0.3093629559302857,0.8911716210749382,null,null,1638394200000,null,null],["2021-12-01 21:35:00",56627.66,56750,56600,56600,77.69629,32.41305920880946,35.43992015678375,20.294136335417335,19.840076955450087,-217.1334871581712,-208.7590467523839,-8.374440405787283,48.163618645911924,56506.301275238606,56928.06749999999,57349.833724761374,0.1110789807960614,0.014817514216915389,56887.960399999996,56595.88336157317,0.2614526268678345,0.8673859230956743,null,null,1638394500000,null,null],["2021-12-01 21:40:00",56600.01,56806.13,56574.45,56758.05,122.04709,32.75869389311971,41.71758467549843,34.29889202179577,57.687560313293595,-204.04495591654268,-207.81622858521567,3.7712726686729923,46.78813201754687,56499.979038164296,56900.39933333333,57300.81962850236,0.3222501018920209,0.014074428294370776,56836.366352,56654.05039361019,0.24806858392946327,0.8604153492933175,null,null,1638394800000,null,null],["2021-12-01 21:45:00",56758.04,56835.43,56649.99,56676.19,99.42719,32.83299024209085,39.57135174724291,43.30409725182755,52.38465448673929,-197.9952524546752,-205.85203335910757,7.856780904432355,45.95477307762279,56488.487223279866,56879.1645,57269.84177672013,0.24022740495168307,0.013737096181155503,56458.01,56655.16212057488,0.2516669230415624,0.8623031649112105,null,null,1638395100000,null,null],["2021-12-01 21:50:00",56676.2,56905.41,56673.26,56889.02,141.4179,32.3211159877805,47.17991386673938,68.67313237166944,95.94718231497575,-174.02120840387215,-199.4858683680605,25.464659964188343,45.04856015364455,56508.04613179649,56857.752,57207.45786820351,0.5447061414219675,0.012301079655893292,56465.5584,56762.4094147736,0.34617288165655213,0.9081680837245112,null,null,1638395400000,null,null],["2021-12-01 21:55:00",56889.02,57030.14,56889.01,56987.82,177.19977,30.908021983412386,50.30783919050745,79.68160716874296,90.71298470451414,-145.37349630248355,-188.6633939549451,43.28989765246155,49.97714744597455,56532.13454256184,56845.766500000005,57159.39845743817,0.7264652830029323,0.011034487763945031,56483.152464,56880.344965481345,0.4330374020744105,0.9435727321840813,null,null,1638395700000,null,null],["2021-12-01 22:00:00",56987.82,57140.06,56936.62,57133.99,208.87773,28.870738282900593,54.59208893947015,95.19566312941987,98.92682236877006,-109.61174469823163,-172.8530641036024,63.241319405370774,56.86636564230753,56531.5166740174,56846.08099999999,57160.64532598258,0.957631359024391,0.011067229981345184,56515.97171616,57025.739166524196,0.5005123697509102,0.9660788093913808,null,null,1638396000000,null,null],["2021-12-01 22:05:00",57133.99,57133.99,57032.79,57127.61,118.13993,26.978974846711072,54.371741879810266,95.69978455622292,97.45954659538492,-80.85308751885168,-154.45306878665227,73.59998126780059,69.9799997053836,56522.150127116365,56855.37983333333,57188.6095395503,0.9084722363999232,0.011722011433000768,56565.898778867195,57111.69448629802,0.5790502085313846,0.9859487488722579,null,null,1638396300000,null,null],["2021-12-01 22:10:00",57127.61,57133.97,56812.8,56848.93,147.96912,26.429480148097635,45.69568240008762,78.00639605289014,37.632819194515825,-79.63085653764574,-139.48862633685096,59.857769799205215,75.11061900872454,56522.76868842215,56853.114,57183.459311577855,0.49366723266024765,0.011621010296035987,56611.83167655782,57024.85914971519,0.6676702518197558,0.9985248553854235,null,null,1638396600000,null,null],["2021-12-01 22:15:00",56848.93,56848.93,56633.32,56646.34,89.63807,26.68043240939644,40.621125645736086,45.88724358341148,2.569364960334067,-93.92681965450902,-130.37626500038257,36.449445345873556,65.8820532894167,56510.86739731022,56837.7725,57164.67760268978,0.20720478446972312,0.011503093394090334,57140.06,56865.3276388847,0.7035283011914882,0.9999872587984308,null,null,1638396900000,null,null],["2021-12-01 22:20:00",56646.33,56859.14,56646.33,56750.32,74.86472,26.83898689577822,44.055121554282465,21.096982541098328,23.08876346844545,-95.76226859615417,-123.4534657195369,27.69119712338272,63.57599694386027,56524.99763691394,56817.66566666666,57110.33369641938,0.3849452966838193,0.01030200823348574,57133.97,56811.95186285461,0.7440877116690798,0.9985547362401336,null,null,1638397200000,null,null],["2021-12-01 22:25:00",56750.32,56925.82,56720,56904.74,101.20235,26.494390817804227,48.791518866743836,26.623161736897078,54.21135678191208,-83.79058593110676,-115.52088976185087,31.730303830744106,63.43407426040832,56532.11691778166,56809.01816666666,57085.91941555166,0.6728447121830994,0.009748496200818815,57123.957,56853.41448884674,0.7879356729144308,0.9925610052220222,null,null,1638397500000,null,null],["2021-12-01 22:30:00",56904.74,56915.37,56715.24,56746.98,83.14256,26.19719046697237,44.63402272809886,33.33420233918681,22.70248676720327,-86.04102730828163,-109.62491727113702,23.583889962855395,63.01825172775287,56530.12669155919,56803.44883333334,57076.770975107494,0.3966991240321825,0.00962343475221388,57114.14426,56803.248707660205,0.8540424085270961,0.9717385214359573,null,null,1638397800000,null,null],["2021-12-01 22:35:00",56746.98,56994.5,56742.33,56993.39,76.24007,25.325076397462954,51.574757311945504,58.86883918735745,99.69267401295737,-67.16703092505486,-101.13334000192059,33.96630907686573,71.27537956943371,56534.10409093872,56810.765,57087.425909061276,0.8300520493112945,0.009739735385055156,57104.5277748,56891.764193580326,0.9472992238466965,0.8963634263587824,null,null,1638398100000,null,null],["2021-12-01 22:40:00",56993.39,57058.11,56850,56864.09,77.88318,24.06119984986787,48.162833125795466,58.42592266586845,52.882607217445084,-61.92880548606627,-93.29243309874973,31.36362761268346,79.91548196961973,56551.13257329659,56823.59066666666,57096.048760036734,0.5743221330524476,0.009589611996480108,57095.103619304,56885.172044174746,0.9994871444182621,0.7293875487388939,null,null,1638398400000,null,null],["2021-12-01 22:45:00",56871.99,57078.49,56850.01,57002.66,70.88881,22.74246423967158,51.83992679629104,77.23328369529169,79.12456985547297,-46.06502423914935,-83.84695132682965,37.7819270876803,79.83495373201525,56556.19747303931,56834.792,57113.38652696069,0.8012765574244197,0.00980366135449881,57085.86794691792,56947.675072667174,0.9343058413393529,0.4085899220773469,null,null,1638398700000,null,null],["2021-12-01 22:50:00",57002.64,57097,56979.32,57093.77,54.67508,21.381170489902964,54.14321635718045,77.05369858842967,99.15391869237133,-25.843144068610854,-72.24618987518589,46.40304580657504,78.9496207581513,56549.32458839263,56845.098,57140.87141160737,0.9203758523266168,0.010406294368860787,56633.32,57030.745196698816,0.6714706266749969,-0.04918673312914978,null,null,1638399000000,null,null],["2021-12-01 22:55:00",57093.77,57100,57000,57057.38,67.47958,20.093749484296513,53.05186954004585,88.78749219383515,88.08398803366153,-12.608187877238379,-60.31858947559639,47.71040159835801,73.9659429858386,56544.12708076163,56853.99650000001,57163.865919238386,0.8281761402914198,0.010900532532954909,56642.5936,57063.466019173684,0.2706540952351393,-0.4893338515933882,null,null,1638399300000,null,null],["2021-12-01 23:00:00",57057.39,57132.58,56977.7,57058.28,95.96876,18.681356793366113,53.07706075307661,86.98148923330503,73.70656097388263,-2.023442281410098,-48.65956003675913,46.636117755349034,73.15559605308455,56541.921795141476,56864.61266666667,57187.30353819186,0.8000818281874015,0.011349444105660793,56660.889856,57081.36930556067,0.1137309680818934,-0.6220988392433391,null,null,1638399600000,null,null],["2021-12-01 23:05:00",57067.91,57175.55,57058.28,57157.83,89.12035,17.712365594693487,55.89603953057642,85.4490951689661,94.55673649935457,14.233819279783347,-36.080884173450634,50.31470345323398,71.41681428632704,56567.84743077542,56890.07350000001,57212.299569224604,0.9154792637422562,0.011328024359982267,56689.19126464,57137.87415724198,-0.027750026828172923,-0.7264567021662325,null,null,1638399900000,null,null]],"length":500,"buy_signals":4,"sell_signals":0,"last_analyzed":"2021-12-01 23:10:54","last_analyzed_ts":1638400254,"data_start_ts":1638250200000,"data_start":"2021-11-30 05:30:00+00:00","data_stop":"2021-12-01 23:05:00+00:00","data_stop_ts":1638399900000}'
        );

        /***/
      },

    /***/ "./src/crypto/_tradeData.json":
      /*!************************************!*\
  !*** ./src/crypto/_tradeData.json ***!
  \************************************/
      /***/ function (module) {
        "use strict";
        module.exports = JSON.parse(
          '{"trades":[{"trade_id":1,"pair":"ALGO/USDT","is_open":false,"exchange":"binance","amount":46.1701833,"amount_requested":46.1701833,"stake_amount":100,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.1,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.08998568724317835,"fee_close_currency":"USDT","open_date":"2021-11-12 22:05:12","open_timestamp":1636754712094,"open_rate":2.1659,"open_rate_requested":2.1659,"open_trade_value":100.1,"close_date":"2021-11-14 16:47:45","close_timestamp":1636908465806,"close_rate":1.949,"close_rate_requested":1.9493,"close_profit":-0.10194104,"close_profit_pct":-10.19,"close_profit_abs":-10.20429844,"trade_duration_s":153753,"trade_duration":2562,"profit_ratio":-0.10194104,"profit_pct":-10.19,"profit_abs":-10.20429844,"sell_reason":"stop_loss","sell_order_status":"closed","stop_loss_abs":1.94931,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-11-12 22:05:18","stoploss_last_update_timestamp":1636754718102,"initial_stop_loss_abs":1.94931,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":1.9493,"max_rate":2.1723,"open_order_id":null},{"trade_id":2,"pair":"ETH/USDT","is_open":false,"exchange":"binance","amount":0.0215,"amount_requested":0.0215,"stake_amount":100,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.09965529499999999,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.10086681999999998,"fee_close_currency":"USDT","open_date":"2021-11-13 02:15:11","open_timestamp":1636769711305,"open_rate":4635.13,"open_rate_requested":4635.13,"open_trade_value":99.7549503,"close_date":"2021-11-13 14:42:18","close_timestamp":1636814538408,"close_rate":4691.48,"close_rate_requested":4691.48,"close_profit":0.01013486,"close_profit_pct":1.01,"close_profit_abs":1.01100288,"trade_duration_s":44827,"trade_duration":747,"profit_ratio":0.01013486,"profit_pct":1.01,"profit_abs":1.01100288,"sell_reason":"roi","sell_order_status":"closed","stop_loss_abs":4171.617,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-11-13 02:15:33","stoploss_last_update_timestamp":1636769733134,"initial_stop_loss_abs":4171.617,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":4585.14,"max_rate":4691.48,"open_order_id":null},{"trade_id":3,"pair":"SOL/USDT","is_open":false,"exchange":"binance","amount":0.44,"amount_requested":0.44,"stake_amount":100,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.09974799999999999,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.10099759999999999,"fee_close_currency":"USDT","open_date":"2021-11-13 02:15:11","open_timestamp":1636769711877,"open_rate":226.7,"open_rate_requested":226.7,"open_trade_value":99.847748,"close_date":"2021-11-13 13:15:35","close_timestamp":1636809335992,"close_rate":229.54,"close_rate_requested":229.54,"close_profit":0.01050454,"close_profit_pct":1.05,"close_profit_abs":1.0488544,"trade_duration_s":39624,"trade_duration":660,"profit_ratio":0.01050454,"profit_pct":1.05,"profit_abs":1.0488544,"sell_reason":"roi","sell_order_status":"closed","stop_loss_abs":204.03,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-11-13 02:15:23","stoploss_last_update_timestamp":1636769723910,"initial_stop_loss_abs":204.03,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":224.96,"max_rate":229.54,"open_order_id":null},{"trade_id":4,"pair":"MANA/USDT","is_open":false,"exchange":"binance","amount":29.88107333,"amount_requested":29.88107333,"stake_amount":100,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.1,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.10122811211378713,"fee_close_currency":"USDT","open_date":"2021-11-13 13:55:11","open_timestamp":1636811711645,"open_rate":3.3466,"open_rate_requested":3.3466,"open_trade_value":100.1,"close_date":"2021-11-13 16:11:21","close_timestamp":1636819881154,"close_rate":3.3877,"close_rate_requested":3.3877,"close_profit":0.01025858,"close_profit_pct":1.03,"close_profit_abs":1.026884,"trade_duration_s":8169,"trade_duration":136,"profit_ratio":0.01025858,"profit_pct":1.03,"profit_abs":1.026884,"sell_reason":"roi","sell_order_status":"closed","stop_loss_abs":3.01194,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-11-13 13:55:13","stoploss_last_update_timestamp":1636811713124,"initial_stop_loss_abs":3.01194,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":3.258,"max_rate":3.4087,"open_order_id":null},{"trade_id":5,"pair":"CHZ/USDT","is_open":false,"exchange":"binance","amount":184.53589223,"amount_requested":184.53589223,"stake_amount":100,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.1,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.10131020483484038,"fee_close_currency":"USDT","open_date":"2021-11-13 18:45:11","open_timestamp":1636829111219,"open_rate":0.5419,"open_rate_requested":0.5419,"open_trade_value":100.1,"close_date":"2021-11-14 09:47:47","close_timestamp":1636883267554,"close_rate":0.549,"close_rate_requested":0.549,"close_profit":0.01107787,"close_profit_pct":1.11,"close_profit_abs":1.10889463,"trade_duration_s":54156,"trade_duration":902,"profit_ratio":0.01107787,"profit_pct":1.11,"profit_abs":1.10889463,"sell_reason":"roi","sell_order_status":"closed","stop_loss_abs":0.48771000000000003,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-11-13 18:48:07","stoploss_last_update_timestamp":1636829287796,"initial_stop_loss_abs":0.48771000000000003,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":0.5266,"max_rate":0.549,"open_order_id":null},{"trade_id":6,"pair":"BTC/USDT","is_open":false,"exchange":"binance","amount":0.00155,"amount_requested":0.00155,"stake_amount":100,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.0994325,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.1006304175,"fee_close_currency":"USDT","open_date":"2021-11-13 18:55:09","open_timestamp":1636829709725,"open_rate":64150,"open_rate_requested":64150,"open_trade_value":99.5319325,"close_date":"2021-11-14 00:20:44","close_timestamp":1636849244552,"close_rate":64922.85,"close_rate_requested":64922.85,"close_profit":0.01002547,"close_profit_pct":1,"close_profit_abs":0.99785458,"trade_duration_s":19534,"trade_duration":325,"profit_ratio":0.01002547,"profit_pct":1,"profit_abs":0.99785458,"sell_reason":"roi","sell_order_status":"closed","stop_loss_abs":57735,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-11-13 18:55:11","stoploss_last_update_timestamp":1636829711349,"initial_stop_loss_abs":57735,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":63845.04,"max_rate":64922.85,"open_order_id":null},{"trade_id":7,"pair":"OMG/USDT","is_open":false,"exchange":"binance","amount":8.3,"amount_requested":8.3,"stake_amount":100,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.09949210000000001,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.10078690000000001,"fee_close_currency":"USDT","open_date":"2021-11-14 01:20:11","open_timestamp":1636852811980,"open_rate":11.987,"open_rate_requested":11.987,"open_trade_value":99.5915921,"close_date":"2021-11-14 12:00:07","close_timestamp":1636891207311,"close_rate":12.143,"close_rate_requested":12.143,"close_profit":0.01099009,"close_profit_pct":1.1,"close_profit_abs":1.094521,"trade_duration_s":38395,"trade_duration":639,"profit_ratio":0.01099009,"profit_pct":1.1,"profit_abs":1.094521,"sell_reason":"roi","sell_order_status":"closed","stop_loss_abs":10.7883,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-11-14 01:20:23","stoploss_last_update_timestamp":1636852823480,"initial_stop_loss_abs":10.7883,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":11.786,"max_rate":12.143,"open_order_id":null},{"trade_id":8,"pair":"AVAX/USDT","is_open":false,"exchange":"binance","amount":1.05,"amount_requested":1.05,"stake_amount":100,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.0998865,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.10116750000000001,"fee_close_currency":"USDT","open_date":"2021-11-14 12:10:11","open_timestamp":1636891811293,"open_rate":95.13,"open_rate_requested":95.13,"open_trade_value":99.9863865,"close_date":"2021-11-14 13:53:08","close_timestamp":1636897988224,"close_rate":96.35,"close_rate_requested":96.35,"close_profit":0.01080093,"close_profit_pct":1.08,"close_profit_abs":1.079946,"trade_duration_s":6176,"trade_duration":102,"profit_ratio":0.01080093,"profit_pct":1.08,"profit_abs":1.079946,"sell_reason":"roi","sell_order_status":"closed","stop_loss_abs":85.617,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-11-14 12:10:17","stoploss_last_update_timestamp":1636891817575,"initial_stop_loss_abs":85.617,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":94.11,"max_rate":96.35,"open_order_id":null},{"trade_id":9,"pair":"SAND/USDT","is_open":false,"exchange":"binance","amount":35.96087457,"amount_requested":35.96087457,"stake_amount":100,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.10000000000000002,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.10125143843498274,"fee_close_currency":"USDT","open_date":"2021-11-14 15:20:09","open_timestamp":1636903209415,"open_rate":2.7808,"open_rate_requested":2.7808,"open_trade_value":100.1,"close_date":"2021-11-14 17:56:01","close_timestamp":1636912561710,"close_rate":2.8156,"close_rate_requested":2.8156,"close_profit":0.01049138,"close_profit_pct":1.05,"close_profit_abs":1.050187,"trade_duration_s":9352,"trade_duration":155,"profit_ratio":0.01049138,"profit_pct":1.05,"profit_abs":1.050187,"sell_reason":"roi","sell_order_status":"closed","stop_loss_abs":2.50272,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-11-14 15:21:47","stoploss_last_update_timestamp":1636903307600,"initial_stop_loss_abs":2.50272,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":2.7454,"max_rate":2.8156,"open_order_id":null},{"trade_id":10,"pair":"SOL/USDT","is_open":false,"exchange":"binance","amount":0.42,"amount_requested":0.42,"stake_amount":100,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.0982044,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.0994014,"fee_close_currency":"USDT","open_date":"2021-11-14 16:35:11","open_timestamp":1636907711840,"open_rate":233.82,"open_rate_requested":233.82,"open_trade_value":98.3026044,"close_date":"2021-11-14 20:02:56","close_timestamp":1636920176080,"close_rate":236.67,"close_rate_requested":236.67,"close_profit":0.01016651,"close_profit_pct":1.02,"close_profit_abs":0.9993942,"trade_duration_s":12464,"trade_duration":207,"profit_ratio":0.01016651,"profit_pct":1.02,"profit_abs":0.9993942,"sell_reason":"roi","sell_order_status":"closed","stop_loss_abs":210.438,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-11-14 16:35:33","stoploss_last_update_timestamp":1636907733389,"initial_stop_loss_abs":210.438,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":230.45,"max_rate":236.67,"open_order_id":null},{"trade_id":11,"pair":"DOT/USDT","is_open":false,"exchange":"binance","amount":2.21,"amount_requested":2.21,"stake_amount":100,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.09989200000000001,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.1011296,"fee_close_currency":"USDT","open_date":"2021-11-14 17:20:08","open_timestamp":1636910408139,"open_rate":45.2,"open_rate_requested":45.2,"open_trade_value":99.991892,"close_date":"2021-11-14 20:01:15","close_timestamp":1636920075689,"close_rate":45.76,"close_rate_requested":45.76,"close_profit":0.01036662,"close_profit_pct":1.04,"close_profit_abs":1.0365784,"trade_duration_s":9667,"trade_duration":161,"profit_ratio":0.01036662,"profit_pct":1.04,"profit_abs":1.0365784,"sell_reason":"roi","sell_order_status":"closed","stop_loss_abs":40.68000000000001,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-11-14 17:20:24","stoploss_last_update_timestamp":1636910424651,"initial_stop_loss_abs":40.68000000000001,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":45.03,"max_rate":45.76,"open_order_id":null},{"trade_id":12,"pair":"LTO/USDT","is_open":false,"exchange":"binance","amount":142.34875445,"amount_requested":142.34875445,"stake_amount":100,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.1,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.10152313167259785,"fee_close_currency":"USDT","open_date":"2021-11-14 20:55:11","open_timestamp":1636923311036,"open_rate":0.7025,"open_rate_requested":0.7025,"open_trade_value":100.1,"close_date":"2021-11-14 23:23:58","close_timestamp":1636932238328,"close_rate":0.7132,"close_rate_requested":0.7132,"close_profit":0.01320288,"close_profit_pct":1.32,"close_profit_abs":1.32160854,"trade_duration_s":8927,"trade_duration":148,"profit_ratio":0.01320288,"profit_pct":1.32,"profit_abs":1.32160854,"sell_reason":"roi","sell_order_status":"closed","stop_loss_abs":0.63225,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-11-14 20:55:17","stoploss_last_update_timestamp":1636923317008,"initial_stop_loss_abs":0.63225,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":0.6749,"max_rate":0.7161,"open_order_id":null},{"trade_id":13,"pair":"LRC/USDT","is_open":false,"exchange":"binance","amount":32.45488771,"amount_requested":32.45488771,"stake_amount":100,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.09999999999999999,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.08985784759184733,"fee_close_currency":"USDT","open_date":"2021-11-14 23:50:10","open_timestamp":1636933810187,"open_rate":3.0812,"open_rate_requested":3.0812,"open_trade_value":100.1,"close_date":"2021-11-16 00:12:57","close_timestamp":1637021577183,"close_rate":2.7687,"close_rate_requested":2.7727,"close_profit":-0.10321689,"close_profit_pct":-10.32,"close_profit_abs":-10.33201026,"trade_duration_s":87766,"trade_duration":1462,"profit_ratio":-0.10321689,"profit_pct":-10.32,"profit_abs":-10.33201026,"sell_reason":"stop_loss","sell_order_status":"closed","stop_loss_abs":2.77308,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-11-14 23:50:11","stoploss_last_update_timestamp":1636933811204,"initial_stop_loss_abs":2.77308,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":2.7727,"max_rate":3.117,"open_order_id":null},{"trade_id":14,"pair":"CHZ/USDT","is_open":false,"exchange":"binance","amount":177.6830135,"amount_requested":177.6830135,"stake_amount":100,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.09999999999999999,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.08969438521677328,"fee_close_currency":"USDT","open_date":"2021-11-15 05:20:10","open_timestamp":1636953610736,"open_rate":0.5628,"open_rate_requested":0.5628,"open_trade_value":100.1,"close_date":"2021-11-16 00:13:02","close_timestamp":1637021582321,"close_rate":0.5048,"close_rate_requested":0.505,"close_profit":-0.10484824,"close_profit_pct":-10.48,"close_profit_abs":-10.49530917,"trade_duration_s":67971,"trade_duration":1132,"profit_ratio":-0.10484824,"profit_pct":-10.48,"profit_abs":-10.49530917,"sell_reason":"stop_loss","sell_order_status":"closed","stop_loss_abs":0.50652,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-11-15 05:20:47","stoploss_last_update_timestamp":1636953647045,"initial_stop_loss_abs":0.50652,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":0.505,"max_rate":0.568,"open_order_id":null},{"trade_id":15,"pair":"IOTX/USDT","is_open":false,"exchange":"binance","amount":475.78266248,"amount_requested":475.78266248,"stake_amount":100,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.1,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.10146065277381291,"fee_close_currency":"USDT","open_date":"2021-11-15 07:35:09","open_timestamp":1636961709765,"open_rate":0.21018,"open_rate_requested":0.21018,"open_trade_value":100.1,"close_date":"2021-11-15 08:55:29","close_timestamp":1636966529811,"close_rate":0.21325,"close_rate_requested":0.21325,"close_profit":0.01257934,"close_profit_pct":1.26,"close_profit_abs":1.25919212,"trade_duration_s":4820,"trade_duration":80,"profit_ratio":0.01257934,"profit_pct":1.26,"profit_abs":1.25919212,"sell_reason":"roi","sell_order_status":"closed","stop_loss_abs":0.189162,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-11-15 07:35:16","stoploss_last_update_timestamp":1636961716342,"initial_stop_loss_abs":0.189162,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":0.20753,"max_rate":0.21325,"open_order_id":null},{"trade_id":16,"pair":"XRP/USDT","is_open":false,"exchange":"binance","amount":83.92077878,"amount_requested":83.92077878,"stake_amount":100,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.1,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.08997146693521316,"fee_close_currency":"USDT","open_date":"2021-11-15 14:30:07","open_timestamp":1636986607494,"open_rate":1.1916,"open_rate_requested":1.1916,"open_trade_value":100.1,"close_date":"2021-11-16 10:06:07","close_timestamp":1637057167656,"close_rate":1.0721,"close_rate_requested":1.0723,"close_profit":-0.10208296,"close_profit_pct":-10.21,"close_profit_abs":-10.21850453,"trade_duration_s":70560,"trade_duration":1176,"profit_ratio":-0.10208296,"profit_pct":-10.21,"profit_abs":-10.21850453,"sell_reason":"stop_loss","sell_order_status":"closed","stop_loss_abs":1.07244,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-11-15 14:30:30","stoploss_last_update_timestamp":1636986630073,"initial_stop_loss_abs":1.07244,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":1.0723,"max_rate":1.1936,"open_order_id":null},{"trade_id":17,"pair":"AVAX/USDT","is_open":false,"exchange":"binance","amount":1.08,"amount_requested":1.08,"stake_amount":100,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.099684,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.10088280000000001,"fee_close_currency":"USDT","open_date":"2021-11-16 00:25:10","open_timestamp":1637022310945,"open_rate":92.3,"open_rate_requested":92.3,"open_trade_value":99.783684,"close_date":"2021-11-16 17:43:50","close_timestamp":1637084630426,"close_rate":93.41,"close_rate_requested":93.41,"close_profit":0.01000397,"close_profit_pct":1,"close_profit_abs":0.9982332,"trade_duration_s":62319,"trade_duration":1038,"profit_ratio":0.01000397,"profit_pct":1,"profit_abs":0.9982332,"sell_reason":"roi","sell_order_status":"closed","stop_loss_abs":83.07,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-11-16 00:25:37","stoploss_last_update_timestamp":1637022337728,"initial_stop_loss_abs":83.07,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":83.57,"max_rate":93.41,"open_order_id":null},{"trade_id":18,"pair":"BTC/USDT","is_open":false,"exchange":"binance","amount":0.00159,"amount_requested":0.00159,"stake_amount":100,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.0998202636,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.0898450647,"fee_close_currency":"USDT","open_date":"2021-11-16 00:35:09","open_timestamp":1637022909547,"open_rate":62780.04,"open_rate_requested":62780.04,"open_trade_value":99.92008386,"close_date":"2021-11-18 23:02:13","close_timestamp":1637276533684,"close_rate":56506.33,"close_rate_requested":56477.04,"close_profit":-0.10172994,"close_profit_pct":-10.17,"close_profit_abs":-10.16486423,"trade_duration_s":253624,"trade_duration":4227,"profit_ratio":-0.10172994,"profit_pct":-10.17,"profit_abs":-10.16486423,"sell_reason":"stop_loss","sell_order_status":"closed","stop_loss_abs":56502.036,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-11-16 00:35:16","stoploss_last_update_timestamp":1637022916128,"initial_stop_loss_abs":56502.036,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":56477.04,"max_rate":62975.8,"open_order_id":null},{"trade_id":19,"pair":"ETH/USDT","is_open":false,"exchange":"binance","amount":0.0239,"amount_requested":0.0239,"stake_amount":100,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.09968905100000001,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.10189812800000002,"fee_close_currency":"USDT","open_date":"2021-11-16 10:20:08","open_timestamp":1637058008378,"open_rate":4171.09,"open_rate_requested":4171.09,"open_trade_value":99.78874005,"close_date":"2021-11-16 11:01:30","close_timestamp":1637060490226,"close_rate":4263.52,"close_rate_requested":4263.52,"close_profit":0.0201174,"close_profit_pct":2.01,"close_profit_abs":2.00748982,"trade_duration_s":2481,"trade_duration":41,"profit_ratio":0.0201174,"profit_pct":2.01,"profit_abs":2.00748982,"sell_reason":"roi","sell_order_status":"closed","stop_loss_abs":3753.981,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-11-16 10:20:24","stoploss_last_update_timestamp":1637058024991,"initial_stop_loss_abs":3753.981,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":4138.78,"max_rate":4263.52,"open_order_id":null},{"trade_id":20,"pair":"SXP/USDT","is_open":false,"exchange":"binance","amount":36.7,"amount_requested":36.7,"stake_amount":100,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.09997080000000001,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.08991500000000002,"fee_close_currency":"USDT","open_date":"2021-11-16 16:05:13","open_timestamp":1637078713448,"open_rate":2.724,"open_rate_requested":2.724,"open_trade_value":100.0707708,"close_date":"2021-11-17 03:08:14","close_timestamp":1637118494174,"close_rate":2.45,"close_rate_requested":2.451,"close_profit":-0.1023844,"close_profit_pct":-10.24,"close_profit_abs":-10.2456858,"trade_duration_s":39780,"trade_duration":663,"profit_ratio":-0.1023844,"profit_pct":-10.24,"profit_abs":-10.2456858,"sell_reason":"stop_loss","sell_order_status":"closed","stop_loss_abs":2.4516000000000004,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-11-16 16:05:20","stoploss_last_update_timestamp":1637078720004,"initial_stop_loss_abs":2.4516000000000004,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":2.451,"max_rate":2.744,"open_order_id":null},{"trade_id":21,"pair":"PORTO/USDT","is_open":false,"exchange":"binance","amount":11.14,"amount_requested":11.14,"stake_amount":100,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.09999486800000001,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.089828504,"fee_close_currency":"USDT","open_date":"2021-11-16 18:35:09","open_timestamp":1637087709111,"open_rate":8.9762,"open_rate_requested":8.9762,"open_trade_value":100.09486287,"close_date":"2021-11-16 20:40:12","close_timestamp":1637095212473,"close_rate":8.0636,"close_rate_requested":8.0762,"close_profit":-0.10346373,"close_profit_pct":-10.35,"close_profit_abs":-10.35618737,"trade_duration_s":7503,"trade_duration":125,"profit_ratio":-0.10346373,"profit_pct":-10.35,"profit_abs":-10.35618737,"sell_reason":"stop_loss","sell_order_status":"closed","stop_loss_abs":8.07858,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-11-16 18:39:40","stoploss_last_update_timestamp":1637087980330,"initial_stop_loss_abs":8.07858,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":8.0762,"max_rate":9.0075,"open_order_id":null},{"trade_id":22,"pair":"ETH/USDT","is_open":false,"exchange":"binance","amount":0.0238,"amount_requested":0.0238,"stake_amount":100,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.09989002800000002,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.10112025000000001,"fee_close_currency":"USDT","open_date":"2021-11-16 20:50:12","open_timestamp":1637095812157,"open_rate":4197.06,"open_rate_requested":4197.06,"open_trade_value":99.98991803,"close_date":"2021-11-16 21:51:54","close_timestamp":1637099514377,"close_rate":4248.75,"close_rate_requested":4248.75,"close_profit":0.01029315,"close_profit_pct":1.03,"close_profit_abs":1.02921172,"trade_duration_s":3702,"trade_duration":61,"profit_ratio":0.01029315,"profit_pct":1.03,"profit_abs":1.02921172,"sell_reason":"roi","sell_order_status":"closed","stop_loss_abs":3777.3540000000003,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-11-16 20:50:23","stoploss_last_update_timestamp":1637095823729,"initial_stop_loss_abs":3777.3540000000003,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":4168.78,"max_rate":4273.89,"open_order_id":null},{"trade_id":23,"pair":"ETH/USDT","is_open":false,"exchange":"binance","amount":0.0236,"amount_requested":0.0236,"stake_amount":99.914612,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.09991461200000001,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.101146532,"fee_close_currency":"USDT","open_date":"2021-11-17 00:10:09","open_timestamp":1637107809720,"open_rate":4233.67,"open_rate_requested":4233.67,"open_trade_value":100.01452661,"close_date":"2021-11-17 23:48:54","close_timestamp":1637192934563,"close_rate":4285.87,"close_rate_requested":4285.87,"close_profit":0.01030709,"close_profit_pct":1.03,"close_profit_abs":1.03085886,"trade_duration_s":85124,"trade_duration":1418,"profit_ratio":0.01030709,"profit_pct":1.03,"profit_abs":1.03085886,"sell_reason":"roi","sell_order_status":"closed","stop_loss_abs":3810.3030000000003,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-11-17 00:10:11","stoploss_last_update_timestamp":1637107811069,"initial_stop_loss_abs":3810.3030000000003,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":4067.15,"max_rate":4285.87,"open_order_id":null},{"trade_id":24,"pair":"AVAX/USDT","is_open":false,"exchange":"binance","amount":1.07,"amount_requested":1.07,"stake_amount":100,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.0995956,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.1024418,"fee_close_currency":"USDT","open_date":"2021-11-17 03:20:12","open_timestamp":1637119212465,"open_rate":93.08,"open_rate_requested":93.08,"open_trade_value":99.6951956,"close_date":"2021-11-17 03:50:32","close_timestamp":1637121032183,"close_rate":95.74,"close_rate_requested":95.74,"close_profit":0.02652247,"close_profit_pct":2.65,"close_profit_abs":2.6441626,"trade_duration_s":1819,"trade_duration":30,"profit_ratio":0.02652247,"profit_pct":2.65,"profit_abs":2.6441626,"sell_reason":"roi","sell_order_status":"closed","stop_loss_abs":83.772,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-11-17 03:20:28","stoploss_last_update_timestamp":1637119228952,"initial_stop_loss_abs":83.772,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":92.94,"max_rate":96.33,"open_order_id":null},{"trade_id":25,"pair":"LRC/USDT","is_open":false,"exchange":"binance","amount":37.51078435,"amount_requested":37.51078435,"stake_amount":100,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.09999999999999999,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.10160546157020142,"fee_close_currency":"USDT","open_date":"2021-11-17 10:05:08","open_timestamp":1637143508570,"open_rate":2.6659,"open_rate_requested":2.6659,"open_trade_value":100.1,"close_date":"2021-11-17 11:31:49","close_timestamp":1637148709061,"close_rate":2.7087,"close_rate_requested":2.7087,"close_profit":0.01402454,"close_profit_pct":1.4,"close_profit_abs":1.40385611,"trade_duration_s":5200,"trade_duration":86,"profit_ratio":0.01402454,"profit_pct":1.4,"profit_abs":1.40385611,"sell_reason":"roi","sell_order_status":"closed","stop_loss_abs":2.3993100000000003,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-11-17 10:07:15","stoploss_last_update_timestamp":1637143635562,"initial_stop_loss_abs":2.3993100000000003,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":2.6061,"max_rate":2.7271,"open_order_id":null},{"trade_id":26,"pair":"IOTX/USDT","is_open":false,"exchange":"binance","amount":501.88205772,"amount_requested":501.88205772,"stake_amount":100,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.1,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.10122961104140527,"fee_close_currency":"USDT","open_date":"2021-11-17 14:30:11","open_timestamp":1637159411906,"open_rate":0.19925,"open_rate_requested":0.19925,"open_trade_value":100.1,"close_date":"2021-11-17 16:12:25","close_timestamp":1637165545535,"close_rate":0.2017,"close_rate_requested":0.2017,"close_profit":0.01027354,"close_profit_pct":1.03,"close_profit_abs":1.02838143,"trade_duration_s":6133,"trade_duration":102,"profit_ratio":0.01027354,"profit_pct":1.03,"profit_abs":1.02838143,"sell_reason":"roi","sell_order_status":"closed","stop_loss_abs":0.179325,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-11-17 14:30:28","stoploss_last_update_timestamp":1637159428444,"initial_stop_loss_abs":0.179325,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":0.19534,"max_rate":0.2017,"open_order_id":null},{"trade_id":27,"pair":"SHIB/USDT","is_open":false,"exchange":"binance","amount":2094679.51403435,"amount_requested":2094679.51403435,"stake_amount":100,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.1,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.10125680770842062,"fee_close_currency":"USDT","open_date":"2021-11-17 20:05:09","open_timestamp":1637179509319,"open_rate":0.00004774,"open_rate_requested":0.00004774,"open_trade_value":100.1,"close_date":"2021-11-18 00:07:20","close_timestamp":1637194040755,"close_rate":0.00004834,"close_rate_requested":0.00004834,"close_profit":0.01054496,"close_profit_pct":1.05,"close_profit_abs":1.0555509,"trade_duration_s":14531,"trade_duration":242,"profit_ratio":0.01054496,"profit_pct":1.05,"profit_abs":1.0555509,"sell_reason":"roi","sell_order_status":"closed","stop_loss_abs":0.000042966,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-11-17 20:05:45","stoploss_last_update_timestamp":1637179545883,"initial_stop_loss_abs":0.000042966,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":0.00004756,"max_rate":0.00004845,"open_order_id":null},{"trade_id":28,"pair":"OMG/USDT","is_open":false,"exchange":"binance","amount":9.8,"amount_requested":9.8,"stake_amount":100,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.0995386,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.0895328,"fee_close_currency":"USDT","open_date":"2021-11-18 04:05:11","open_timestamp":1637208311895,"open_rate":10.157,"open_rate_requested":10.157,"open_trade_value":99.6381386,"close_date":"2021-11-18 15:23:09","close_timestamp":1637248989973,"close_rate":9.136,"close_rate_requested":9.139,"close_profit":-0.10231897,"close_profit_pct":-10.23,"close_profit_abs":-10.1948714,"trade_duration_s":40678,"trade_duration":677,"profit_ratio":-0.10231897,"profit_pct":-10.23,"profit_abs":-10.1948714,"sell_reason":"stop_loss","sell_order_status":"closed","stop_loss_abs":9.141300000000001,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-11-18 04:11:14","stoploss_last_update_timestamp":1637208674856,"initial_stop_loss_abs":9.141300000000001,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":9.139,"max_rate":10.194,"open_order_id":null},{"trade_id":29,"pair":"LTC/USDT","is_open":false,"exchange":"binance","amount":0.449,"amount_requested":0.449,"stake_amount":100,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.0999474,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.1013393,"fee_close_currency":"USDT","open_date":"2021-11-18 04:10:08","open_timestamp":1637208608309,"open_rate":222.6,"open_rate_requested":222.6,"open_trade_value":100.0473474,"close_date":"2021-11-18 10:58:12","close_timestamp":1637233092601,"close_rate":225.7,"close_rate_requested":225.7,"close_profit":0.0119005,"close_profit_pct":1.19,"close_profit_abs":1.1906133,"trade_duration_s":24484,"trade_duration":408,"profit_ratio":0.0119005,"profit_pct":1.19,"profit_abs":1.1906133,"sell_reason":"roi","sell_order_status":"closed","stop_loss_abs":200.34,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-11-18 04:11:39","stoploss_last_update_timestamp":1637208699899,"initial_stop_loss_abs":200.34,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":214,"max_rate":225.7,"open_order_id":null},{"trade_id":30,"pair":"SHIB/USDT","is_open":false,"exchange":"binance","amount":2169197.39696312,"amount_requested":2169197.39696312,"stake_amount":100,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.10000000000000002,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.09,"fee_close_currency":"USDT","open_date":"2021-11-18 12:05:09","open_timestamp":1637237109352,"open_rate":0.0000461,"open_rate_requested":0.0000461,"open_trade_value":100.1,"close_date":"2021-11-18 17:01:42","close_timestamp":1637254902833,"close_rate":0.00004149,"close_rate_requested":0.00004149,"close_profit":-0.1017982,"close_profit_pct":-10.18,"close_profit_abs":-10.19,"trade_duration_s":17793,"trade_duration":296,"profit_ratio":-0.1017982,"profit_pct":-10.18,"profit_abs":-10.19,"sell_reason":"stop_loss","sell_order_status":"closed","stop_loss_abs":0.000041490000000000004,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-11-18 12:06:06","stoploss_last_update_timestamp":1637237166528,"initial_stop_loss_abs":0.000041490000000000004,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":0.00004149,"max_rate":0.00004649,"open_order_id":null},{"trade_id":31,"pair":"ETH/USDT","is_open":false,"exchange":"binance","amount":0.0242,"amount_requested":0.0242,"stake_amount":100,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.09964954999999999,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.10084890200000002,"fee_close_currency":"USDT","open_date":"2021-11-18 15:30:13","open_timestamp":1637249413322,"open_rate":4117.75,"open_rate_requested":4117.75,"open_trade_value":99.74919955,"close_date":"2021-11-19 09:18:00","close_timestamp":1637313480991,"close_rate":4167.31,"close_rate_requested":4167.31,"close_profit":0.01001365,"close_profit_pct":1,"close_profit_abs":0.99885355,"trade_duration_s":64067,"trade_duration":1067,"profit_ratio":0.01001365,"profit_pct":1,"profit_abs":0.99885355,"sell_reason":"roi","sell_order_status":"closed","stop_loss_abs":3705.975,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-11-18 15:30:24","stoploss_last_update_timestamp":1637249424853,"initial_stop_loss_abs":3705.975,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":3957.63,"max_rate":4167.31,"open_order_id":null},{"trade_id":32,"pair":"SHIB/USDT","is_open":false,"exchange":"binance","amount":2393489.70799426,"amount_requested":2393489.70799426,"stake_amount":100,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.09999999999999999,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.10277644806127331,"fee_close_currency":"USDT","open_date":"2021-11-18 17:20:11","open_timestamp":1637256011451,"open_rate":0.00004178,"open_rate_requested":0.00004178,"open_trade_value":100.1,"close_date":"2021-11-18 17:50:13","close_timestamp":1637257813195,"close_rate":0.00004294,"close_rate_requested":0.00004294,"close_profit":0.02571101,"close_profit_pct":2.57,"close_profit_abs":2.57367161,"trade_duration_s":1801,"trade_duration":30,"profit_ratio":0.02571101,"profit_pct":2.57,"profit_abs":2.57367161,"sell_reason":"roi","sell_order_status":"closed","stop_loss_abs":0.000037602000000000004,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-11-18 17:20:17","stoploss_last_update_timestamp":1637256017964,"initial_stop_loss_abs":0.000037602000000000004,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":0.00004153,"max_rate":0.00004349,"open_order_id":null},{"trade_id":33,"pair":"SHIB/USDT","is_open":false,"exchange":"binance","amount":2359603.58659745,"amount_requested":2359603.58659745,"stake_amount":100,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.10000000000000002,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.10125058990089668,"fee_close_currency":"USDT","open_date":"2021-11-18 22:15:07","open_timestamp":1637273707784,"open_rate":0.00004238,"open_rate_requested":0.00004238,"open_trade_value":100.1,"close_date":"2021-11-19 00:36:39","close_timestamp":1637282199224,"close_rate":0.00004291,"close_rate_requested":0.00004291,"close_profit":0.01048291,"close_profit_pct":1.05,"close_profit_abs":1.04933931,"trade_duration_s":8491,"trade_duration":141,"profit_ratio":0.01048291,"profit_pct":1.05,"profit_abs":1.04933931,"sell_reason":"roi","sell_order_status":"closed","stop_loss_abs":0.000038142,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-11-18 22:15:10","stoploss_last_update_timestamp":1637273710027,"initial_stop_loss_abs":0.000038142,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":0.00004154,"max_rate":0.00004291,"open_order_id":null},{"trade_id":34,"pair":"FTM/USDT","is_open":false,"exchange":"binance","amount":55.01457886,"amount_requested":55.01457886,"stake_amount":100,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.1,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.10220608461242228,"fee_close_currency":"USDT","open_date":"2021-11-18 23:05:09","open_timestamp":1637276709295,"open_rate":1.8177,"open_rate_requested":1.8177,"open_trade_value":100.1,"close_date":"2021-11-19 00:01:11","close_timestamp":1637280071692,"close_rate":1.8578,"close_rate_requested":1.8578,"close_profit":0.02001877,"close_profit_pct":2,"close_profit_abs":2.00387853,"trade_duration_s":3362,"trade_duration":56,"profit_ratio":0.02001877,"profit_pct":2,"profit_abs":2.00387853,"sell_reason":"roi","sell_order_status":"closed","stop_loss_abs":1.63593,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-11-18 23:05:20","stoploss_last_update_timestamp":1637276720795,"initial_stop_loss_abs":1.63593,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":1.8146,"max_rate":1.8578,"open_order_id":null},{"trade_id":35,"pair":"SOL/USDT","is_open":false,"exchange":"binance","amount":0.52,"amount_requested":0.52,"stake_amount":99.1692,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.0991692,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.10136360000000001,"fee_close_currency":"USDT","open_date":"2021-11-19 03:50:12","open_timestamp":1637293812215,"open_rate":190.71,"open_rate_requested":190.71,"open_trade_value":99.2683692,"close_date":"2021-11-19 04:33:41","close_timestamp":1637296421906,"close_rate":194.93,"close_rate_requested":194.93,"close_profit":0.02008562,"close_profit_pct":2.01,"close_profit_abs":1.9938672,"trade_duration_s":2609,"trade_duration":43,"profit_ratio":0.02008562,"profit_pct":2.01,"profit_abs":1.9938672,"sell_reason":"roi","sell_order_status":"closed","stop_loss_abs":171.639,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-11-19 03:50:13","stoploss_last_update_timestamp":1637293813183,"initial_stop_loss_abs":171.639,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":190.31,"max_rate":194.93,"open_order_id":null},{"trade_id":36,"pair":"BTC/USDT","is_open":false,"exchange":"binance","amount":0.00179,"amount_requested":0.00179,"stake_amount":100,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.09989877230000001,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.1011027979,"fee_close_currency":"USDT","open_date":"2021-11-19 03:55:08","open_timestamp":1637294108670,"open_rate":55809.37,"open_rate_requested":55809.37,"open_trade_value":99.99867107,"close_date":"2021-11-19 05:59:00","close_timestamp":1637301540457,"close_rate":56482.01,"close_rate_requested":56482.01,"close_profit":0.01003037,"close_profit_pct":1,"close_profit_abs":1.00302403,"trade_duration_s":7431,"trade_duration":123,"profit_ratio":0.01003037,"profit_pct":1,"profit_abs":1.00302403,"sell_reason":"roi","sell_order_status":"closed","stop_loss_abs":50228.433000000005,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-11-19 03:55:16","stoploss_last_update_timestamp":1637294116259,"initial_stop_loss_abs":50228.433000000005,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":55778.05,"max_rate":56482.01,"open_order_id":null},{"trade_id":37,"pair":"ALICE/USDT","is_open":false,"exchange":"binance","amount":6.48,"amount_requested":6.48,"stake_amount":100,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.09992160000000001,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.1021896,"fee_close_currency":"USDT","open_date":"2021-11-19 04:50:10","open_timestamp":1637297410167,"open_rate":15.42,"open_rate_requested":15.42,"open_trade_value":100.0215216,"close_date":"2021-11-19 05:20:32","close_timestamp":1637299232114,"close_rate":15.77,"close_rate_requested":15.77,"close_profit":0.02065444,"close_profit_pct":2.07,"close_profit_abs":2.0658888,"trade_duration_s":1821,"trade_duration":30,"profit_ratio":0.02065444,"profit_pct":2.07,"profit_abs":2.0658888,"sell_reason":"roi","sell_order_status":"closed","stop_loss_abs":13.878,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-11-19 04:50:26","stoploss_last_update_timestamp":1637297426751,"initial_stop_loss_abs":13.878,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":15.35,"max_rate":15.88,"open_order_id":null},{"trade_id":38,"pair":"MANA/USDT","is_open":false,"exchange":"binance","amount":25.22958926,"amount_requested":25.22958926,"stake_amount":100,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.1,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.10124129579170453,"fee_close_currency":"USDT","open_date":"2021-11-19 06:30:11","open_timestamp":1637303411645,"open_rate":3.9636,"open_rate_requested":3.9636,"open_trade_value":100.1,"close_date":"2021-11-19 08:06:46","close_timestamp":1637309206856,"close_rate":4.0128,"close_rate_requested":4.0128,"close_profit":0.01039015,"close_profit_pct":1.04,"close_profit_abs":1.0400545,"trade_duration_s":5795,"trade_duration":96,"profit_ratio":0.01039015,"profit_pct":1.04,"profit_abs":1.0400545,"sell_reason":"roi","sell_order_status":"closed","stop_loss_abs":3.56724,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-11-19 06:30:17","stoploss_last_update_timestamp":1637303417973,"initial_stop_loss_abs":3.56724,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":3.8628,"max_rate":4.0128,"open_order_id":null},{"trade_id":39,"pair":"OMG/USDT","is_open":false,"exchange":"binance","amount":9.9,"amount_requested":9.9,"stake_amount":100,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.0990792,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.08915940000000001,"fee_close_currency":"USDT","open_date":"2021-11-20 00:45:10","open_timestamp":1637369110358,"open_rate":10.008,"open_rate_requested":10.008,"open_trade_value":99.1782792,"close_date":"2021-11-22 19:29:37","close_timestamp":1637609377846,"close_rate":9.006,"close_rate_requested":9.007,"close_profit":-0.10191787,"close_profit_pct":-10.19,"close_profit_abs":-10.1080386,"trade_duration_s":240267,"trade_duration":4004,"profit_ratio":-0.10191787,"profit_pct":-10.19,"profit_abs":-10.1080386,"sell_reason":"stop_loss","sell_order_status":"closed","stop_loss_abs":9.0072,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-11-20 00:45:21","stoploss_last_update_timestamp":1637369121454,"initial_stop_loss_abs":9.0072,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":9.007,"max_rate":10.107,"open_order_id":null},{"trade_id":40,"pair":"SAND/USDT","is_open":false,"exchange":"binance","amount":23.57489745,"amount_requested":23.57489745,"stake_amount":100,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.1,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.10133198170587959,"fee_close_currency":"USDT","open_date":"2021-11-20 01:35:07","open_timestamp":1637372107495,"open_rate":4.2418,"open_rate_requested":4.2418,"open_trade_value":100.1,"close_date":"2021-11-20 13:24:35","close_timestamp":1637414675539,"close_rate":4.2983,"close_rate_requested":4.2983,"close_profit":0.0112952,"close_profit_pct":1.13,"close_profit_abs":1.13064972,"trade_duration_s":42568,"trade_duration":709,"profit_ratio":0.0112952,"profit_pct":1.13,"profit_abs":1.13064972,"sell_reason":"roi","sell_order_status":"closed","stop_loss_abs":3.81762,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-11-20 01:35:18","stoploss_last_update_timestamp":1637372118993,"initial_stop_loss_abs":3.81762,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":4.0708,"max_rate":4.2986,"open_order_id":null},{"trade_id":41,"pair":"ENJ/USDT","is_open":false,"exchange":"binance","amount":28.2,"amount_requested":28.2,"stake_amount":100,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.0997152,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.10174559999999999,"fee_close_currency":"USDT","open_date":"2021-11-20 02:05:10","open_timestamp":1637373910340,"open_rate":3.536,"open_rate_requested":3.536,"open_trade_value":99.8149152,"close_date":"2021-11-20 05:17:06","close_timestamp":1637385426001,"close_rate":3.608,"close_rate_requested":3.608,"close_profit":0.01832331,"close_profit_pct":1.83,"close_profit_abs":1.8289392,"trade_duration_s":11515,"trade_duration":191,"profit_ratio":0.01832331,"profit_pct":1.83,"profit_abs":1.8289392,"sell_reason":"roi","sell_order_status":"closed","stop_loss_abs":3.1824,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-11-20 02:05:37","stoploss_last_update_timestamp":1637373937146,"initial_stop_loss_abs":3.1824,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":3.443,"max_rate":3.608,"open_order_id":null},{"trade_id":42,"pair":"AVAX/USDT","is_open":false,"exchange":"binance","amount":0.86,"amount_requested":0.86,"stake_amount":100,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.09918379999999999,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.10055980000000002,"fee_close_currency":"USDT","open_date":"2021-11-20 11:30:12","open_timestamp":1637407812266,"open_rate":115.33,"open_rate_requested":115.33,"open_trade_value":99.2829838,"close_date":"2021-11-20 12:30:16","close_timestamp":1637411416966,"close_rate":116.93,"close_rate_requested":116.93,"close_profit":0.01184751,"close_profit_pct":1.18,"close_profit_abs":1.1762564,"trade_duration_s":3604,"trade_duration":60,"profit_ratio":0.01184751,"profit_pct":1.18,"profit_abs":1.1762564,"sell_reason":"roi","sell_order_status":"closed","stop_loss_abs":103.797,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-11-20 11:30:13","stoploss_last_update_timestamp":1637407813777,"initial_stop_loss_abs":103.797,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":114.55,"max_rate":117.59,"open_order_id":null},{"trade_id":43,"pair":"CHR/USDT","is_open":false,"exchange":"binance","amount":72.21780891,"amount_requested":72.21780891,"stake_amount":100,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.1,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.10130714234130138,"fee_close_currency":"USDT","open_date":"2021-11-20 14:40:09","open_timestamp":1637419209201,"open_rate":1.3847,"open_rate_requested":1.3847,"open_trade_value":100.1,"close_date":"2021-11-20 15:59:16","close_timestamp":1637423956152,"close_rate":1.4028,"close_rate_requested":1.4028,"close_profit":0.0110473,"close_profit_pct":1.1,"close_profit_abs":1.1058352,"trade_duration_s":4746,"trade_duration":79,"profit_ratio":0.0110473,"profit_pct":1.1,"profit_abs":1.1058352,"sell_reason":"roi","sell_order_status":"closed","stop_loss_abs":1.2462300000000002,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-11-20 14:40:30","stoploss_last_update_timestamp":1637419230578,"initial_stop_loss_abs":1.2462300000000002,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":1.3403,"max_rate":1.4028,"open_order_id":null},{"trade_id":44,"pair":"FTM/USDT","is_open":false,"exchange":"binance","amount":46.55926995,"amount_requested":46.55926995,"stake_amount":100,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.1,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.1012384765806872,"fee_close_currency":"USDT","open_date":"2021-11-20 14:45:13","open_timestamp":1637419513029,"open_rate":2.1478,"open_rate_requested":2.1478,"open_trade_value":100.1,"close_date":"2021-11-20 18:43:05","close_timestamp":1637433785934,"close_rate":2.1744,"close_rate_requested":2.1744,"close_profit":0.01036202,"close_profit_pct":1.04,"close_profit_abs":1.0372381,"trade_duration_s":14272,"trade_duration":237,"profit_ratio":0.01036202,"profit_pct":1.04,"profit_abs":1.0372381,"sell_reason":"roi","sell_order_status":"closed","stop_loss_abs":1.9330200000000002,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-11-20 14:48:04","stoploss_last_update_timestamp":1637419684750,"initial_stop_loss_abs":1.9330200000000002,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":2.0784,"max_rate":2.1744,"open_order_id":null},{"trade_id":45,"pair":"SHIB/USDT","is_open":false,"exchange":"binance","amount":2162162.16216216,"amount_requested":2162162.16216216,"stake_amount":100,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.10000000000000002,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.10127567567567569,"fee_close_currency":"USDT","open_date":"2021-11-20 16:00:13","open_timestamp":1637424013348,"open_rate":0.00004625,"open_rate_requested":0.00004625,"open_trade_value":100.1,"close_date":"2021-11-20 18:22:21","close_timestamp":1637432541940,"close_rate":0.00004684,"close_rate_requested":0.00004684,"close_profit":0.01073327,"close_profit_pct":1.07,"close_profit_abs":1.0744,"trade_duration_s":8528,"trade_duration":142,"profit_ratio":0.01073327,"profit_pct":1.07,"profit_abs":1.0744,"sell_reason":"roi","sell_order_status":"closed","stop_loss_abs":0.000041625,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-11-20 16:00:20","stoploss_last_update_timestamp":1637424020598,"initial_stop_loss_abs":0.000041625,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":0.00004593,"max_rate":0.00004685,"open_order_id":null},{"trade_id":46,"pair":"AVAX/USDT","is_open":false,"exchange":"binance","amount":0.79,"amount_requested":0.79,"stake_amount":100,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.09946890000000001,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.10070920000000001,"fee_close_currency":"USDT","open_date":"2021-11-20 23:40:09","open_timestamp":1637451609805,"open_rate":125.91,"open_rate_requested":125.91,"open_trade_value":99.5683689,"close_date":"2021-11-21 03:02:07","close_timestamp":1637463727965,"close_rate":127.48,"close_rate_requested":127.48,"close_profit":0.01044631,"close_profit_pct":1.04,"close_profit_abs":1.0401219,"trade_duration_s":12118,"trade_duration":201,"profit_ratio":0.01044631,"profit_pct":1.04,"profit_abs":1.0401219,"sell_reason":"roi","sell_order_status":"closed","stop_loss_abs":113.319,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-11-20 23:40:21","stoploss_last_update_timestamp":1637451621118,"initial_stop_loss_abs":113.319,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":123.39,"max_rate":127.48,"open_order_id":null},{"trade_id":47,"pair":"CHR/USDT","is_open":false,"exchange":"binance","amount":74.7551768,"amount_requested":74.7551768,"stake_amount":100,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.09999999999999999,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.10130074007625028,"fee_close_currency":"USDT","open_date":"2021-11-21 01:05:10","open_timestamp":1637456710621,"open_rate":1.3377,"open_rate_requested":1.3377,"open_trade_value":100.1,"close_date":"2021-11-21 06:53:33","close_timestamp":1637477613526,"close_rate":1.3551,"close_rate_requested":1.3551,"close_profit":0.01098341,"close_profit_pct":1.1,"close_profit_abs":1.09943934,"trade_duration_s":20902,"trade_duration":348,"profit_ratio":0.01098341,"profit_pct":1.1,"profit_abs":1.09943934,"sell_reason":"roi","sell_order_status":"closed","stop_loss_abs":1.20393,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-11-21 01:05:37","stoploss_last_update_timestamp":1637456737143,"initial_stop_loss_abs":1.20393,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":1.3064,"max_rate":1.3551,"open_order_id":null},{"trade_id":48,"pair":"BTC/USDT","is_open":false,"exchange":"binance","amount":0.0017,"amount_requested":0.0017,"stake_amount":100,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.099943935,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.101146379,"fee_close_currency":"USDT","open_date":"2021-11-21 04:05:09","open_timestamp":1637467509584,"open_rate":58790.55,"open_rate_requested":58790.55,"open_trade_value":100.04387893,"close_date":"2021-11-21 16:52:12","close_timestamp":1637513532546,"close_rate":59497.87,"close_rate_requested":59497.87,"close_profit":0.01000914,"close_profit_pct":1,"close_profit_abs":1.00135369,"trade_duration_s":46022,"trade_duration":767,"profit_ratio":0.01000914,"profit_pct":1,"profit_abs":1.00135369,"sell_reason":"roi","sell_order_status":"closed","stop_loss_abs":52911.495,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-11-21 04:05:31","stoploss_last_update_timestamp":1637467531144,"initial_stop_loss_abs":52911.495,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":58494.02,"max_rate":59500,"open_order_id":null},{"trade_id":49,"pair":"MITH/USDT","is_open":false,"exchange":"binance","amount":796.5,"amount_requested":796.5,"stake_amount":100,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.09999261000000001,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.08988502500000001,"fee_close_currency":"USDT","open_date":"2021-11-21 08:35:13","open_timestamp":1637483713483,"open_rate":0.12554,"open_rate_requested":0.12554,"open_trade_value":100.09260261,"close_date":"2021-11-21 10:38:03","close_timestamp":1637491083237,"close_rate":0.11285,"close_rate_requested":0.11298,"close_profit":-0.10287936,"close_profit_pct":-10.29,"close_profit_abs":-10.29746264,"trade_duration_s":7369,"trade_duration":122,"profit_ratio":-0.10287936,"profit_pct":-10.29,"profit_abs":-10.29746264,"sell_reason":"stop_loss","sell_order_status":"closed","stop_loss_abs":0.11298600000000002,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-11-21 08:35:14","stoploss_last_update_timestamp":1637483714955,"initial_stop_loss_abs":0.11298600000000002,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":0.11298,"max_rate":0.12587,"open_order_id":null},{"trade_id":50,"pair":"MANA/USDT","is_open":false,"exchange":"binance","amount":26.59362285,"amount_requested":26.59362285,"stake_amount":100,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.1,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.10145467116985347,"fee_close_currency":"USDT","open_date":"2021-11-21 10:50:11","open_timestamp":1637491811336,"open_rate":3.7603,"open_rate_requested":3.7603,"open_trade_value":100.1,"close_date":"2021-11-22 00:33:46","close_timestamp":1637541226805,"close_rate":3.815,"close_rate_requested":3.815,"close_profit":0.01251965,"close_profit_pct":1.25,"close_profit_abs":1.2532165,"trade_duration_s":49415,"trade_duration":823,"profit_ratio":0.01251965,"profit_pct":1.25,"profit_abs":1.2532165,"sell_reason":"roi","sell_order_status":"closed","stop_loss_abs":3.38427,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-11-21 10:50:22","stoploss_last_update_timestamp":1637491822754,"initial_stop_loss_abs":3.38427,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":3.5391,"max_rate":3.815,"open_order_id":null},{"trade_id":51,"pair":"COCOS/USDT","is_open":false,"exchange":"binance","amount":29.71503284,"amount_requested":29.71503284,"stake_amount":100,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.1,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.10121237333967253,"fee_close_currency":"USDT","open_date":"2021-11-21 17:20:12","open_timestamp":1637515212907,"open_rate":3.3653,"open_rate_requested":3.3653,"open_trade_value":100.1,"close_date":"2021-11-21 18:42:28","close_timestamp":1637520148414,"close_rate":3.4061,"close_rate_requested":3.4061,"close_profit":0.01010151,"close_profit_pct":1.01,"close_profit_abs":1.01116097,"trade_duration_s":4935,"trade_duration":82,"profit_ratio":0.01010151,"profit_pct":1.01,"profit_abs":1.01116097,"sell_reason":"roi","sell_order_status":"closed","stop_loss_abs":3.02877,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-11-21 17:21:44","stoploss_last_update_timestamp":1637515304443,"initial_stop_loss_abs":3.02877,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":3.1867,"max_rate":3.4362,"open_order_id":null},{"trade_id":52,"pair":"KEY/USDT","is_open":false,"exchange":"binance","amount":5490.88513068,"amount_requested":5490.88513068,"stake_amount":100,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.1,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.1022128267076653,"fee_close_currency":"USDT","open_date":"2021-11-21 18:50:10","open_timestamp":1637520610806,"open_rate":0.018212,"open_rate_requested":0.018212,"open_trade_value":100.1,"close_date":"2021-11-21 19:25:49","close_timestamp":1637522749340,"close_rate":0.018615,"close_rate_requested":0.018615,"close_profit":0.02008605,"close_profit_pct":2.01,"close_profit_abs":2.01061388,"trade_duration_s":2138,"trade_duration":35,"profit_ratio":0.02008605,"profit_pct":2.01,"profit_abs":2.01061388,"sell_reason":"roi","sell_order_status":"closed","stop_loss_abs":0.0163908,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-11-21 18:52:32","stoploss_last_update_timestamp":1637520752822,"initial_stop_loss_abs":0.0163908,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":0.017464,"max_rate":0.018615,"open_order_id":null},{"trade_id":53,"pair":"GALA/USDT","is_open":false,"exchange":"binance","amount":266.46770411,"amount_requested":266.46770411,"stake_amount":100,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.09999999999999999,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.10124173950117245,"fee_close_currency":"USDT","open_date":"2021-11-21 20:05:10","open_timestamp":1637525110083,"open_rate":0.37528,"open_rate_requested":0.37528,"open_trade_value":100.1,"close_date":"2021-11-21 21:50:49","close_timestamp":1637531449317,"close_rate":0.37994,"close_rate_requested":0.37994,"close_profit":0.01039458,"close_profit_pct":1.04,"close_profit_abs":1.04049776,"trade_duration_s":6339,"trade_duration":105,"profit_ratio":0.01039458,"profit_pct":1.04,"profit_abs":1.04049776,"sell_reason":"roi","sell_order_status":"closed","stop_loss_abs":0.337752,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-11-21 20:05:22","stoploss_last_update_timestamp":1637525122048,"initial_stop_loss_abs":0.337752,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":0.35238,"max_rate":0.37994,"open_order_id":null},{"trade_id":54,"pair":"KEY/USDT","is_open":false,"exchange":"binance","amount":6496.88149688,"amount_requested":6496.88149688,"stake_amount":100,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.1,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.10224142411642413,"fee_close_currency":"USDT","open_date":"2021-11-21 22:00:08","open_timestamp":1637532008939,"open_rate":0.015392,"open_rate_requested":0.015392,"open_trade_value":100.1,"close_date":"2021-11-21 22:46:26","close_timestamp":1637534786800,"close_rate":0.015737,"close_rate_requested":0.015737,"close_profit":0.02037146,"close_profit_pct":2.04,"close_profit_abs":2.03918269,"trade_duration_s":2777,"trade_duration":46,"profit_ratio":0.02037146,"profit_pct":2.04,"profit_abs":2.03918269,"sell_reason":"roi","sell_order_status":"closed","stop_loss_abs":0.0138528,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-11-21 22:00:50","stoploss_last_update_timestamp":1637532050960,"initial_stop_loss_abs":0.0138528,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":0.015241,"max_rate":0.015737,"open_order_id":null},{"trade_id":55,"pair":"ETH/USDT","is_open":false,"exchange":"binance","amount":0.0231,"amount_requested":0.0231,"stake_amount":100,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.099794079,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.10100267099999999,"fee_close_currency":"USDT","open_date":"2021-11-21 22:50:08","open_timestamp":1637535008472,"open_rate":4320.09,"open_rate_requested":4320.09,"open_trade_value":99.89387308,"close_date":"2021-11-23 20:38:48","close_timestamp":1637699928348,"close_rate":4372.41,"close_rate_requested":4372.41,"close_profit":0.01008866,"close_profit_pct":1.01,"close_profit_abs":1.00779525,"trade_duration_s":164919,"trade_duration":2748,"profit_ratio":0.01008866,"profit_pct":1.01,"profit_abs":1.00779525,"sell_reason":"roi","sell_order_status":"closed","stop_loss_abs":3888.081,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-11-21 22:50:25","stoploss_last_update_timestamp":1637535025015,"initial_stop_loss_abs":3888.081,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":4026.64,"max_rate":4372.41,"open_order_id":null},{"trade_id":56,"pair":"BTC/USDT","is_open":false,"exchange":"binance","amount":0.00172,"amount_requested":0.00172,"stake_amount":99.6037896,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.0996037896,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.101328812,"fee_close_currency":"USDT","open_date":"2021-11-22 01:25:08","open_timestamp":1637544308152,"open_rate":57909.18,"open_rate_requested":57909.18,"open_trade_value":99.70339339,"close_date":"2021-11-22 13:37:31","close_timestamp":1637588251221,"close_rate":58912.1,"close_rate_requested":58912.1,"close_profit":0.01528624,"close_profit_pct":1.53,"close_profit_abs":1.5240898,"trade_duration_s":43943,"trade_duration":732,"profit_ratio":0.01528624,"profit_pct":1.53,"profit_abs":1.5240898,"sell_reason":"roi","sell_order_status":"closed","stop_loss_abs":52118.262,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-11-22 01:25:10","stoploss_last_update_timestamp":1637544310063,"initial_stop_loss_abs":52118.262,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":56611.7,"max_rate":58912.1,"open_order_id":null},{"trade_id":57,"pair":"EGLD/USDT","is_open":false,"exchange":"binance","amount":0.21,"amount_requested":0.21,"stake_amount":100,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.0982863,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.10046399999999998,"fee_close_currency":"USDT","open_date":"2021-11-22 14:25:12","open_timestamp":1637591112424,"open_rate":468.03,"open_rate_requested":468.03,"open_trade_value":98.3845863,"close_date":"2021-11-22 14:59:30","close_timestamp":1637593170524,"close_rate":478.4,"close_rate_requested":478.4,"close_profit":0.02011443,"close_profit_pct":2.01,"close_profit_abs":1.9789497,"trade_duration_s":2058,"trade_duration":34,"profit_ratio":0.02011443,"profit_pct":2.01,"profit_abs":1.9789497,"sell_reason":"roi","sell_order_status":"closed","stop_loss_abs":421.227,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-11-22 14:25:18","stoploss_last_update_timestamp":1637591118902,"initial_stop_loss_abs":421.227,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":465.37,"max_rate":478.4,"open_order_id":null},{"trade_id":58,"pair":"BTC/USDT","is_open":false,"exchange":"binance","amount":0.00174,"amount_requested":0.00174,"stake_amount":100,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.09996862020000001,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.1011768762,"fee_close_currency":"USDT","open_date":"2021-11-22 17:50:09","open_timestamp":1637603409392,"open_rate":57453.23,"open_rate_requested":57453.23,"open_trade_value":100.06858882,"close_date":"2021-11-25 00:47:25","close_timestamp":1637801245703,"close_rate":58147.63,"close_rate_requested":58147.63,"close_profit":0.0100642,"close_profit_pct":1.01,"close_profit_abs":1.0071105,"trade_duration_s":197836,"trade_duration":3297,"profit_ratio":0.0100642,"profit_pct":1.01,"profit_abs":1.0071105,"sell_reason":"roi","sell_order_status":"closed","stop_loss_abs":51707.90700000001,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-11-22 17:50:20","stoploss_last_update_timestamp":1637603420836,"initial_stop_loss_abs":51707.90700000001,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":55369.93,"max_rate":58147.63,"open_order_id":null},{"trade_id":59,"pair":"TRX/USDT","is_open":false,"exchange":"binance","amount":985.4,"amount_requested":985.4,"stake_amount":100,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.09999839199999999,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.10120058,"fee_close_currency":"USDT","open_date":"2021-11-22 20:00:09","open_timestamp":1637611209551,"open_rate":0.10148,"open_rate_requested":0.10148,"open_trade_value":100.09839039,"close_date":"2021-11-23 02:58:04","close_timestamp":1637636284244,"close_rate":0.1027,"close_rate_requested":0.1027,"close_profit":0.01000005,"close_profit_pct":1,"close_profit_abs":1.00098903,"trade_duration_s":25074,"trade_duration":417,"profit_ratio":0.01000005,"profit_pct":1,"profit_abs":1.00098903,"sell_reason":"roi","sell_order_status":"closed","stop_loss_abs":0.091332,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-11-22 20:00:16","stoploss_last_update_timestamp":1637611216028,"initial_stop_loss_abs":0.091332,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":0.10118,"max_rate":0.10272,"open_order_id":null},{"trade_id":60,"pair":"AVAX/USDT","is_open":false,"exchange":"binance","amount":0.75,"amount_requested":0.75,"stake_amount":100,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.09922500000000001,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.10047,"fee_close_currency":"USDT","open_date":"2021-11-23 04:35:12","open_timestamp":1637642112944,"open_rate":132.3,"open_rate_requested":132.3,"open_trade_value":99.324225,"close_date":"2021-11-23 05:49:34","close_timestamp":1637646574941,"close_rate":133.96,"close_rate_requested":133.96,"close_profit":0.01052417,"close_profit_pct":1.05,"close_profit_abs":1.045305,"trade_duration_s":4461,"trade_duration":74,"profit_ratio":0.01052417,"profit_pct":1.05,"profit_abs":1.045305,"sell_reason":"roi","sell_order_status":"closed","stop_loss_abs":119.07000000000001,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-11-23 04:35:24","stoploss_last_update_timestamp":1637642124370,"initial_stop_loss_abs":119.07000000000001,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":131.65,"max_rate":134.73,"open_order_id":null},{"trade_id":61,"pair":"ATOM/USDT","is_open":false,"exchange":"binance","amount":3.17,"amount_requested":3.17,"stake_amount":100,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.09979160000000001,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.10099620000000001,"fee_close_currency":"USDT","open_date":"2021-11-23 06:00:07","open_timestamp":1637647207958,"open_rate":31.48,"open_rate_requested":31.48,"open_trade_value":99.8913916,"close_date":"2021-11-23 10:20:09","close_timestamp":1637662809198,"close_rate":31.86,"close_rate_requested":31.86,"close_profit":0.01004904,"close_profit_pct":1,"close_profit_abs":1.0038122,"trade_duration_s":15601,"trade_duration":260,"profit_ratio":0.01004904,"profit_pct":1,"profit_abs":1.0038122,"sell_reason":"roi","sell_order_status":"closed","stop_loss_abs":28.332,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-11-23 06:00:14","stoploss_last_update_timestamp":1637647214127,"initial_stop_loss_abs":28.332,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":30.68,"max_rate":31.86,"open_order_id":null},{"trade_id":62,"pair":"EGLD/USDT","is_open":false,"exchange":"binance","amount":0.19,"amount_requested":0.19,"stake_amount":100,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.09614,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.09734080000000002,"fee_close_currency":"USDT","open_date":"2021-11-23 12:45:07","open_timestamp":1637671507887,"open_rate":506,"open_rate_requested":506,"open_trade_value":96.23614,"close_date":"2021-11-23 19:58:25","close_timestamp":1637697505083,"close_rate":512.32,"close_rate_requested":512.32,"close_profit":0.01046716,"close_profit_pct":1.05,"close_profit_abs":1.0073192,"trade_duration_s":25997,"trade_duration":433,"profit_ratio":0.01046716,"profit_pct":1.05,"profit_abs":1.0073192,"sell_reason":"roi","sell_order_status":"closed","stop_loss_abs":455.40000000000003,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-11-23 12:52:35","stoploss_last_update_timestamp":1637671955545,"initial_stop_loss_abs":455.40000000000003,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":480.5,"max_rate":513.49,"open_order_id":null},{"trade_id":63,"pair":"AVAX/USDT","is_open":false,"exchange":"binance","amount":0.79,"amount_requested":0.79,"stake_amount":100,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.0994452,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.08945170000000001,"fee_close_currency":"USDT","open_date":"2021-11-23 22:05:08","open_timestamp":1637705108209,"open_rate":125.88,"open_rate_requested":125.88,"open_trade_value":99.5446452,"close_date":"2021-11-24 14:46:22","close_timestamp":1637765182135,"close_rate":113.23,"close_rate_requested":113.24,"close_profit":-0.10228975,"close_profit_pct":-10.23,"close_profit_abs":-10.1823969,"trade_duration_s":60073,"trade_duration":1001,"profit_ratio":-0.10228975,"profit_pct":-10.23,"profit_abs":-10.1823969,"sell_reason":"stop_loss","sell_order_status":"closed","stop_loss_abs":113.292,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-11-23 22:05:09","stoploss_last_update_timestamp":1637705109400,"initial_stop_loss_abs":113.292,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":113.24,"max_rate":126.36,"open_order_id":null},{"trade_id":64,"pair":"EGLD/USDT","is_open":false,"exchange":"binance","amount":0.2,"amount_requested":0.2,"stake_amount":100,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.096304,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.09747800000000001,"fee_close_currency":"USDT","open_date":"2021-11-23 22:45:09","open_timestamp":1637707509958,"open_rate":481.52,"open_rate_requested":481.52,"open_trade_value":96.400304,"close_date":"2021-11-24 12:06:10","close_timestamp":1637755570099,"close_rate":487.39,"close_rate_requested":487.39,"close_profit":0.0101682,"close_profit_pct":1.02,"close_profit_abs":0.980218,"trade_duration_s":48060,"trade_duration":801,"profit_ratio":0.0101682,"profit_pct":1.02,"profit_abs":0.980218,"sell_reason":"roi","sell_order_status":"closed","stop_loss_abs":433.368,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-11-23 22:45:16","stoploss_last_update_timestamp":1637707516707,"initial_stop_loss_abs":433.368,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":452.31,"max_rate":487.39,"open_order_id":null},{"trade_id":65,"pair":"SOL/USDT","is_open":false,"exchange":"binance","amount":0.46,"amount_requested":0.46,"stake_amount":100,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.0982422,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.088343,"fee_close_currency":"USDT","open_date":"2021-11-24 13:15:09","open_timestamp":1637759709745,"open_rate":213.57,"open_rate_requested":213.57,"open_trade_value":98.3404422,"close_date":"2021-11-26 08:20:14","close_timestamp":1637914814764,"close_rate":192.05,"close_rate_requested":192.12,"close_profit":-0.10255989,"close_profit_pct":-10.26,"close_profit_abs":-10.0857852,"trade_duration_s":155105,"trade_duration":2585,"profit_ratio":-0.10255989,"profit_pct":-10.26,"profit_abs":-10.0857852,"sell_reason":"stop_loss","sell_order_status":"closed","stop_loss_abs":192.213,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-11-24 13:15:21","stoploss_last_update_timestamp":1637759721184,"initial_stop_loss_abs":192.213,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":192.12,"max_rate":216.3,"open_order_id":null},{"trade_id":66,"pair":"ETH/USDT","is_open":false,"exchange":"binance","amount":0.0238,"amount_requested":0.0238,"stake_amount":100,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.09989764400000002,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.10162623800000002,"fee_close_currency":"USDT","open_date":"2021-11-24 14:55:09","open_timestamp":1637765709557,"open_rate":4197.38,"open_rate_requested":4197.38,"open_trade_value":99.99754164,"close_date":"2021-11-24 15:55:36","close_timestamp":1637769336383,"close_rate":4270.01,"close_rate_requested":4270.01,"close_profit":0.01527108,"close_profit_pct":1.53,"close_profit_abs":1.52707012,"trade_duration_s":3626,"trade_duration":60,"profit_ratio":0.01527108,"profit_pct":1.53,"profit_abs":1.52707012,"sell_reason":"roi","sell_order_status":"closed","stop_loss_abs":3777.6420000000003,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-11-24 14:55:21","stoploss_last_update_timestamp":1637765721053,"initial_stop_loss_abs":3777.6420000000003,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":4194.91,"max_rate":4273.5,"open_order_id":null},{"trade_id":67,"pair":"SHIB/USDT","is_open":false,"exchange":"binance","amount":2687449.61031981,"amount_requested":2687449.61031981,"stake_amount":100,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.1,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.10123622682074711,"fee_close_currency":"USDT","open_date":"2021-11-24 16:55:08","open_timestamp":1637772908429,"open_rate":0.00003721,"open_rate_requested":0.00003721,"open_trade_value":100.1,"close_date":"2021-11-24 18:07:12","close_timestamp":1637777232477,"close_rate":0.00003767,"close_rate_requested":0.00003767,"close_profit":0.01033957,"close_profit_pct":1.03,"close_profit_abs":1.03499059,"trade_duration_s":4324,"trade_duration":72,"profit_ratio":0.01033957,"profit_pct":1.03,"profit_abs":1.03499059,"sell_reason":"roi","sell_order_status":"closed","stop_loss_abs":0.000033489,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-11-24 16:55:09","stoploss_last_update_timestamp":1637772909620,"initial_stop_loss_abs":0.000033489,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":0.00003604,"max_rate":0.00003767,"open_order_id":null},{"trade_id":68,"pair":"AVAX/USDT","is_open":false,"exchange":"binance","amount":0.87,"amount_requested":0.87,"stake_amount":100,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.0993801,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.10157250000000001,"fee_close_currency":"USDT","open_date":"2021-11-24 19:35:10","open_timestamp":1637782510909,"open_rate":114.23,"open_rate_requested":114.23,"open_trade_value":99.4794801,"close_date":"2021-11-24 20:23:37","close_timestamp":1637785417614,"close_rate":116.75,"close_rate_requested":116.75,"close_profit":0.02001868,"close_profit_pct":2,"close_profit_abs":1.9914474,"trade_duration_s":2906,"trade_duration":48,"profit_ratio":0.02001868,"profit_pct":2,"profit_abs":1.9914474,"sell_reason":"roi","sell_order_status":"closed","stop_loss_abs":102.807,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-11-24 19:35:47","stoploss_last_update_timestamp":1637782547473,"initial_stop_loss_abs":102.807,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":114.03,"max_rate":116.75,"open_order_id":null},{"trade_id":69,"pair":"ALICE/USDT","is_open":false,"exchange":"binance","amount":3.97,"amount_requested":3.97,"stake_amount":100,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.09992490000000001,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.10115560000000001,"fee_close_currency":"USDT","open_date":"2021-11-24 21:10:09","open_timestamp":1637788209087,"open_rate":25.17,"open_rate_requested":25.17,"open_trade_value":100.0248249,"close_date":"2021-11-24 22:54:54","close_timestamp":1637794494899,"close_rate":25.48,"close_rate_requested":25.48,"close_profit":0.01029364,"close_profit_pct":1.03,"close_profit_abs":1.0296195,"trade_duration_s":6285,"trade_duration":104,"profit_ratio":0.01029364,"profit_pct":1.03,"profit_abs":1.0296195,"sell_reason":"roi","sell_order_status":"closed","stop_loss_abs":22.653000000000002,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-11-24 21:10:26","stoploss_last_update_timestamp":1637788226462,"initial_stop_loss_abs":22.653000000000002,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":24.87,"max_rate":25.48,"open_order_id":null},{"trade_id":70,"pair":"AVAX/USDT","is_open":false,"exchange":"binance","amount":0.86,"amount_requested":0.86,"stake_amount":100,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.09889999999999999,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.10109299999999999,"fee_close_currency":"USDT","open_date":"2021-11-25 00:15:09","open_timestamp":1637799309163,"open_rate":115,"open_rate_requested":115,"open_trade_value":98.9989,"close_date":"2021-11-25 00:45:50","close_timestamp":1637801150229,"close_rate":117.55,"close_rate_requested":117.55,"close_profit":0.02013161,"close_profit_pct":2.01,"close_profit_abs":1.993007,"trade_duration_s":1841,"trade_duration":30,"profit_ratio":0.02013161,"profit_pct":2.01,"profit_abs":1.993007,"sell_reason":"roi","sell_order_status":"closed","stop_loss_abs":103.5,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-11-25 00:15:26","stoploss_last_update_timestamp":1637799326055,"initial_stop_loss_abs":103.5,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":114.8,"max_rate":117.81,"open_order_id":null},{"trade_id":71,"pair":"BTC/USDT","is_open":false,"exchange":"binance","amount":0.00174,"amount_requested":0.00174,"stake_amount":100,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.09958020000000001,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.10080321119999999,"fee_close_currency":"USDT","open_date":"2021-11-25 05:10:10","open_timestamp":1637817010582,"open_rate":57230,"open_rate_requested":57230,"open_trade_value":99.6797802,"close_date":"2021-11-25 10:08:00","close_timestamp":1637834880878,"close_rate":57932.88,"close_rate_requested":57932.88,"close_profit":0.01025913,"close_profit_pct":1.03,"close_profit_abs":1.02262779,"trade_duration_s":17870,"trade_duration":297,"profit_ratio":0.01025913,"profit_pct":1.03,"profit_abs":1.02262779,"sell_reason":"roi","sell_order_status":"closed","stop_loss_abs":51507,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-11-25 05:10:21","stoploss_last_update_timestamp":1637817021890,"initial_stop_loss_abs":51507,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":57011.16,"max_rate":57932.88,"open_order_id":null},{"trade_id":72,"pair":"FTM/USDT","is_open":false,"exchange":"binance","amount":39.27421255,"amount_requested":39.27421255,"stake_amount":100,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.1,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.10122928285287881,"fee_close_currency":"USDT","open_date":"2021-11-25 06:10:09","open_timestamp":1637820609088,"open_rate":2.5462,"open_rate_requested":2.5462,"open_trade_value":100.1,"close_date":"2021-11-25 07:12:41","close_timestamp":1637824361698,"close_rate":2.5775,"close_rate_requested":2.5775,"close_profit":0.01027027,"close_profit_pct":1.03,"close_profit_abs":1.02805357,"trade_duration_s":3752,"trade_duration":62,"profit_ratio":0.01027027,"profit_pct":1.03,"profit_abs":1.02805357,"sell_reason":"roi","sell_order_status":"closed","stop_loss_abs":2.2915799999999997,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-11-25 06:10:30","stoploss_last_update_timestamp":1637820630571,"initial_stop_loss_abs":2.2915799999999997,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":2.5196,"max_rate":2.5775,"open_order_id":null},{"trade_id":73,"pair":"SHIB/USDT","is_open":false,"exchange":"binance","amount":2570694.0874036,"amount_requested":2570694.0874036,"stake_amount":100,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.1,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.10161953727506429,"fee_close_currency":"USDT","open_date":"2021-11-25 09:15:10","open_timestamp":1637831710800,"open_rate":0.0000389,"open_rate_requested":0.0000389,"open_trade_value":100.1,"close_date":"2021-11-25 10:15:17","close_timestamp":1637835317632,"close_rate":0.00003953,"close_rate_requested":0.00003953,"close_profit":0.01416501,"close_profit_pct":1.42,"close_profit_abs":1.41791774,"trade_duration_s":3606,"trade_duration":60,"profit_ratio":0.01416501,"profit_pct":1.42,"profit_abs":1.41791774,"sell_reason":"roi","sell_order_status":"closed","stop_loss_abs":0.00003501,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-11-25 09:15:16","stoploss_last_update_timestamp":1637831716993,"initial_stop_loss_abs":0.00003501,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":0.00003839,"max_rate":0.00003954,"open_order_id":null},{"trade_id":74,"pair":"SAND/USDT","is_open":false,"exchange":"binance","amount":13.29822602,"amount_requested":13.29822602,"stake_amount":100,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.1,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.10224341072900875,"fee_close_currency":"USDT","open_date":"2021-11-25 10:50:08","open_timestamp":1637837408604,"open_rate":7.5198,"open_rate_requested":7.5198,"open_trade_value":100.1,"close_date":"2021-11-25 11:44:35","close_timestamp":1637840675002,"close_rate":7.6885,"close_rate_requested":7.6885,"close_profit":0.02039128,"close_profit_pct":2.04,"close_profit_abs":2.04116732,"trade_duration_s":3266,"trade_duration":54,"profit_ratio":0.02039128,"profit_pct":2.04,"profit_abs":2.04116732,"sell_reason":"roi","sell_order_status":"closed","stop_loss_abs":6.76782,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-11-25 10:51:06","stoploss_last_update_timestamp":1637837466197,"initial_stop_loss_abs":6.76782,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":7.4244,"max_rate":7.6885,"open_order_id":null},{"trade_id":75,"pair":"MANA/USDT","is_open":false,"exchange":"binance","amount":18.68704801,"amount_requested":18.68704801,"stake_amount":100,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.1,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.08997439874423037,"fee_close_currency":"USDT","open_date":"2021-11-25 10:50:09","open_timestamp":1637837409102,"open_rate":5.3513,"open_rate_requested":5.3513,"open_trade_value":100.1,"close_date":"2021-11-25 17:11:20","close_timestamp":1637860280102,"close_rate":4.8148,"close_rate_requested":4.815,"close_profit":-0.1020537,"close_profit_pct":-10.21,"close_profit_abs":-10.21557565,"trade_duration_s":22870,"trade_duration":381,"profit_ratio":-0.1020537,"profit_pct":-10.21,"profit_abs":-10.21557565,"sell_reason":"stop_loss","sell_order_status":"closed","stop_loss_abs":4.8161700000000005,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-11-25 10:50:10","stoploss_last_update_timestamp":1637837410966,"initial_stop_loss_abs":4.8161700000000005,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":4.815,"max_rate":5.417,"open_order_id":null},{"trade_id":76,"pair":"ALICE/USDT","is_open":false,"exchange":"binance","amount":3.95,"amount_requested":3.95,"stake_amount":100,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.0998165,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.089744,"fee_close_currency":"USDT","open_date":"2021-11-25 11:45:11","open_timestamp":1637840711354,"open_rate":25.27,"open_rate_requested":25.27,"open_trade_value":99.9163165,"close_date":"2021-11-26 03:04:33","close_timestamp":1637895873015,"close_rate":22.72,"close_rate_requested":22.73,"close_profit":-0.10270655,"close_profit_pct":-10.27,"close_profit_abs":-10.2620605,"trade_duration_s":55161,"trade_duration":919,"profit_ratio":-0.10270655,"profit_pct":-10.27,"profit_abs":-10.2620605,"sell_reason":"stop_loss","sell_order_status":"closed","stop_loss_abs":22.743,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-11-25 11:49:08","stoploss_last_update_timestamp":1637840948318,"initial_stop_loss_abs":22.743,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":22.73,"max_rate":25.45,"open_order_id":null},{"trade_id":77,"pair":"TLM/USDT","is_open":false,"exchange":"binance","amount":228.41480128,"amount_requested":228.41480128,"stake_amount":100,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.1,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.10223846505253541,"fee_close_currency":"USDT","open_date":"2021-11-25 17:20:12","open_timestamp":1637860812689,"open_rate":0.4378,"open_rate_requested":0.4378,"open_trade_value":100.1,"close_date":"2021-11-25 18:09:29","close_timestamp":1637863769677,"close_rate":0.4476,"close_rate_requested":0.4476,"close_profit":0.02034192,"close_profit_pct":2.03,"close_profit_abs":2.03622659,"trade_duration_s":2956,"trade_duration":49,"profit_ratio":0.02034192,"profit_pct":2.03,"profit_abs":2.03622659,"sell_reason":"roi","sell_order_status":"closed","stop_loss_abs":0.39402000000000004,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-11-25 17:20:19","stoploss_last_update_timestamp":1637860819139,"initial_stop_loss_abs":0.39402000000000004,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":0.4316,"max_rate":0.4476,"open_order_id":null},{"trade_id":78,"pair":"DOT/USDT","is_open":false,"exchange":"binance","amount":2.49,"amount_requested":2.49,"stake_amount":100,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.0996996,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.08956530000000001,"fee_close_currency":"USDT","open_date":"2021-11-25 19:53:49","open_timestamp":1637870029393,"open_rate":40.04,"open_rate_requested":40.04,"open_trade_value":99.7992996,"close_date":"2021-11-26 08:17:34","close_timestamp":1637914654146,"close_rate":35.97,"close_rate_requested":36,"close_profit":-0.10344326,"close_profit_pct":-10.34,"close_profit_abs":-10.3235649,"trade_duration_s":44624,"trade_duration":743,"profit_ratio":-0.10344326,"profit_pct":-10.34,"profit_abs":-10.3235649,"sell_reason":"stop_loss","sell_order_status":"closed","stop_loss_abs":36.036,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-11-25 19:58:23","stoploss_last_update_timestamp":1637870303939,"initial_stop_loss_abs":36.036,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":36,"max_rate":40.18,"open_order_id":null},{"trade_id":79,"pair":"BTC/USDT","is_open":false,"exchange":"binance","amount":0.00171,"amount_requested":0.00171,"stake_amount":100,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.09945127439999998,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.09634653,"fee_close_currency":"USDT","open_date":"2021-11-26 03:20:10","open_timestamp":1637896810793,"open_rate":58158.64,"open_rate_requested":58158.64,"open_trade_value":99.55072567,"close_date":"2021-11-28 22:40:11","close_timestamp":1638139211595,"close_rate":56343,"close_rate_requested":56343,"close_profit":-0.03315438,"close_profit_pct":-3.32,"close_profit_abs":-3.3005422,"trade_duration_s":242400,"trade_duration":4040,"profit_ratio":-0.03315438,"profit_pct":-3.32,"profit_abs":-3.3005422,"sell_reason":"sell_signal","sell_order_status":"closed","stop_loss_abs":52342.776,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-11-26 03:20:17","stoploss_last_update_timestamp":1637896817202,"initial_stop_loss_abs":52342.776,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":53284.61,"max_rate":58207.53,"open_order_id":null},{"trade_id":80,"pair":"MANA/USDT","is_open":false,"exchange":"binance","amount":21.76136487,"amount_requested":21.76136487,"stake_amount":100,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.1,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.10231758535895372,"fee_close_currency":"USDT","open_date":"2021-11-26 08:35:07","open_timestamp":1637915707261,"open_rate":4.5953,"open_rate_requested":4.5953,"open_trade_value":100.1,"close_date":"2021-11-26 09:07:00","close_timestamp":1637917620963,"close_rate":4.7018,"close_rate_requested":4.7018,"close_profit":0.02113155,"close_profit_pct":2.11,"close_profit_abs":2.11526777,"trade_duration_s":1913,"trade_duration":31,"profit_ratio":0.02113155,"profit_pct":2.11,"profit_abs":2.11526777,"sell_reason":"roi","sell_order_status":"closed","stop_loss_abs":4.13577,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-11-26 08:35:13","stoploss_last_update_timestamp":1637915713219,"initial_stop_loss_abs":4.13577,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":4.4473,"max_rate":4.7074,"open_order_id":null},{"trade_id":81,"pair":"AVAX/USDT","is_open":false,"exchange":"binance","amount":0.93,"amount_requested":0.93,"stake_amount":100,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.0998913,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.1011003,"fee_close_currency":"USDT","open_date":"2021-11-26 08:40:11","open_timestamp":1637916011274,"open_rate":107.41,"open_rate_requested":107.41,"open_trade_value":99.9911913,"close_date":"2021-11-26 09:43:41","close_timestamp":1637919821681,"close_rate":108.71,"close_rate_requested":108.71,"close_profit":0.01008097,"close_profit_pct":1.01,"close_profit_abs":1.0080084,"trade_duration_s":3810,"trade_duration":63,"profit_ratio":0.01008097,"profit_pct":1.01,"profit_abs":1.0080084,"sell_reason":"roi","sell_order_status":"closed","stop_loss_abs":96.669,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-11-26 08:40:12","stoploss_last_update_timestamp":1637916012823,"initial_stop_loss_abs":96.669,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":104.76,"max_rate":109.72,"open_order_id":null},{"trade_id":82,"pair":"ETH/USDT","is_open":false,"exchange":"binance","amount":0.0243,"amount_requested":0.0243,"stake_amount":100,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.099642393,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.10084597199999999,"fee_close_currency":"USDT","open_date":"2021-11-26 09:10:11","open_timestamp":1637917811629,"open_rate":4100.51,"open_rate_requested":4100.51,"open_trade_value":99.74203539,"close_date":"2021-11-27 08:11:57","close_timestamp":1638000717771,"close_rate":4150.04,"close_rate_requested":4150.04,"close_profit":0.01005685,"close_profit_pct":1.01,"close_profit_abs":1.00309063,"trade_duration_s":82906,"trade_duration":1381,"profit_ratio":0.01005685,"profit_pct":1.01,"profit_abs":1.00309063,"sell_reason":"roi","sell_order_status":"closed","stop_loss_abs":3690.4590000000003,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-11-26 09:10:38","stoploss_last_update_timestamp":1637917838052,"initial_stop_loss_abs":3690.4590000000003,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":3916.36,"max_rate":4150.04,"open_order_id":null},{"trade_id":83,"pair":"AVAX/USDT","is_open":false,"exchange":"binance","amount":0.95,"amount_requested":0.95,"stake_amount":100,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.0996835,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.101023,"fee_close_currency":"USDT","open_date":"2021-11-26 11:20:09","open_timestamp":1637925609782,"open_rate":104.93,"open_rate_requested":104.93,"open_trade_value":99.7831835,"close_date":"2021-11-26 12:33:03","close_timestamp":1637929983839,"close_rate":106.34,"close_rate_requested":106.34,"close_profit":0.01141268,"close_profit_pct":1.14,"close_profit_abs":1.1387935,"trade_duration_s":4374,"trade_duration":72,"profit_ratio":0.01141268,"profit_pct":1.14,"profit_abs":1.1387935,"sell_reason":"roi","sell_order_status":"closed","stop_loss_abs":94.43700000000001,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-11-26 11:20:17","stoploss_last_update_timestamp":1637925617074,"initial_stop_loss_abs":94.43700000000001,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":101.44,"max_rate":106.92,"open_order_id":null},{"trade_id":84,"pair":"BAT/USDT","is_open":false,"exchange":"binance","amount":71.06310404,"amount_requested":71.06310404,"stake_amount":100,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.09999999999999999,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.1013146674246731,"fee_close_currency":"USDT","open_date":"2021-11-26 18:35:10","open_timestamp":1637951710353,"open_rate":1.4072,"open_rate_requested":1.4072,"open_trade_value":100.1,"close_date":"2021-11-27 00:13:22","close_timestamp":1637972002009,"close_rate":1.4257,"close_rate_requested":1.4257,"close_profit":0.01112241,"close_profit_pct":1.11,"close_profit_abs":1.11335276,"trade_duration_s":20291,"trade_duration":338,"profit_ratio":0.01112241,"profit_pct":1.11,"profit_abs":1.11335276,"sell_reason":"roi","sell_order_status":"closed","stop_loss_abs":1.26648,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-11-26 18:35:21","stoploss_last_update_timestamp":1637951721831,"initial_stop_loss_abs":1.26648,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":1.3224,"max_rate":1.4257,"open_order_id":null},{"trade_id":85,"pair":"GALA/USDT","is_open":false,"exchange":"binance","amount":141.74545351,"amount_requested":141.74545351,"stake_amount":100,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.10000000000000002,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.10121192362754967,"fee_close_currency":"USDT","open_date":"2021-11-27 00:15:07","open_timestamp":1637972107613,"open_rate":0.70549,"open_rate_requested":0.70549,"open_trade_value":100.1,"close_date":"2021-11-27 02:56:09","close_timestamp":1637981769895,"close_rate":0.71404,"close_rate_requested":0.71404,"close_profit":0.01009702,"close_profit_pct":1.01,"close_profit_abs":1.0107117,"trade_duration_s":9662,"trade_duration":161,"profit_ratio":0.01009702,"profit_pct":1.01,"profit_abs":1.0107117,"sell_reason":"roi","sell_order_status":"closed","stop_loss_abs":0.634941,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-11-27 00:15:14","stoploss_last_update_timestamp":1637972114074,"initial_stop_loss_abs":0.634941,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":0.66542,"max_rate":0.71404,"open_order_id":null},{"trade_id":86,"pair":"SAND/USDT","is_open":false,"exchange":"binance","amount":15.43376599,"amount_requested":15.43376599,"stake_amount":100,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.1,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.10130260984982946,"fee_close_currency":"USDT","open_date":"2021-11-27 06:05:09","open_timestamp":1637993109865,"open_rate":6.4793,"open_rate_requested":6.4793,"open_trade_value":100.1,"close_date":"2021-11-27 08:12:32","close_timestamp":1638000752327,"close_rate":6.5637,"close_rate_requested":6.5637,"close_profit":0.01100207,"close_profit_pct":1.1,"close_profit_abs":1.10130724,"trade_duration_s":7642,"trade_duration":127,"profit_ratio":0.01100207,"profit_pct":1.1,"profit_abs":1.10130724,"sell_reason":"roi","sell_order_status":"closed","stop_loss_abs":5.831370000000001,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-11-27 06:06:41","stoploss_last_update_timestamp":1637993201429,"initial_stop_loss_abs":5.831370000000001,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":6.1951,"max_rate":6.5637,"open_order_id":null},{"trade_id":87,"pair":"GTC/USDT","is_open":false,"exchange":"binance","amount":4.1,"amount_requested":4.1,"stake_amount":100,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.0991257,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.10133149999999999,"fee_close_currency":"USDT","open_date":"2021-11-27 09:45:11","open_timestamp":1638006311695,"open_rate":24.177,"open_rate_requested":24.177,"open_trade_value":99.2248257,"close_date":"2021-11-27 11:00:36","close_timestamp":1638010836450,"close_rate":24.715,"close_rate_requested":24.715,"close_profit":0.02021009,"close_profit_pct":2.02,"close_profit_abs":2.0053428,"trade_duration_s":4524,"trade_duration":75,"profit_ratio":0.02021009,"profit_pct":2.02,"profit_abs":2.0053428,"sell_reason":"roi","sell_order_status":"closed","stop_loss_abs":21.7593,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-11-27 09:45:52","stoploss_last_update_timestamp":1638006352962,"initial_stop_loss_abs":21.7593,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":23.392,"max_rate":24.715,"open_order_id":null},{"trade_id":88,"pair":"MASK/USDT","is_open":false,"exchange":"binance","amount":5.2,"amount_requested":5.2,"stake_amount":100,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.0999076,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.10131680000000001,"fee_close_currency":"USDT","open_date":"2021-11-27 13:50:10","open_timestamp":1638021010954,"open_rate":19.213,"open_rate_requested":19.213,"open_trade_value":100.0075076,"close_date":"2021-11-27 15:32:13","close_timestamp":1638027133434,"close_rate":19.484,"close_rate_requested":19.484,"close_profit":0.01207885,"close_profit_pct":1.21,"close_profit_abs":1.2079756,"trade_duration_s":6122,"trade_duration":102,"profit_ratio":0.01207885,"profit_pct":1.21,"profit_abs":1.2079756,"sell_reason":"roi","sell_order_status":"closed","stop_loss_abs":17.291700000000002,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-11-27 14:00:08","stoploss_last_update_timestamp":1638021608576,"initial_stop_loss_abs":17.291700000000002,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":18.567,"max_rate":19.797,"open_order_id":null},{"trade_id":89,"pair":"GTC/USDT","is_open":false,"exchange":"binance","amount":4.5,"amount_requested":4.5,"stake_amount":100,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.0979425,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.0874755,"fee_close_currency":"USDT","open_date":"2021-11-27 17:25:11","open_timestamp":1638033911411,"open_rate":21.765,"open_rate_requested":21.765,"open_trade_value":98.0404425,"close_date":"2021-11-28 01:34:57","close_timestamp":1638063297555,"close_rate":19.439,"close_rate_requested":19.51,"close_profit":-0.1086533,"close_profit_pct":-10.87,"close_profit_abs":-10.652418,"trade_duration_s":29386,"trade_duration":489,"profit_ratio":-0.1086533,"profit_pct":-10.87,"profit_abs":-10.652418,"sell_reason":"stop_loss","sell_order_status":"closed","stop_loss_abs":19.5885,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-11-27 17:25:47","stoploss_last_update_timestamp":1638033947625,"initial_stop_loss_abs":19.5885,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":19.51,"max_rate":21.984,"open_order_id":null},{"trade_id":90,"pair":"FIL/USDT","is_open":false,"exchange":"binance","amount":1.76,"amount_requested":1.76,"stake_amount":100,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.099792,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.1010064,"fee_close_currency":"USDT","open_date":"2021-11-27 18:30:10","open_timestamp":1638037810323,"open_rate":56.7,"open_rate_requested":56.7,"open_trade_value":99.891792,"close_date":"2021-11-27 21:56:12","close_timestamp":1638050172377,"close_rate":57.39,"close_rate_requested":57.39,"close_profit":0.010147,"close_profit_pct":1.01,"close_profit_abs":1.0136016,"trade_duration_s":12362,"trade_duration":206,"profit_ratio":0.010147,"profit_pct":1.01,"profit_abs":1.0136016,"sell_reason":"roi","sell_order_status":"closed","stop_loss_abs":51.03,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-11-27 18:30:16","stoploss_last_update_timestamp":1638037816749,"initial_stop_loss_abs":51.03,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":55.83,"max_rate":57.39,"open_order_id":null},{"trade_id":91,"pair":"MANA/USDT","is_open":false,"exchange":"binance","amount":21.87083087,"amount_requested":21.87083087,"stake_amount":100,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.1,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.1013231852678083,"fee_close_currency":"USDT","open_date":"2021-11-28 00:50:10","open_timestamp":1638060610425,"open_rate":4.5723,"open_rate_requested":4.5723,"open_trade_value":100.1,"close_date":"2021-11-28 07:26:28","close_timestamp":1638084388523,"close_rate":4.6328,"close_rate_requested":4.6328,"close_profit":0.01120741,"close_profit_pct":1.12,"close_profit_abs":1.12186208,"trade_duration_s":23778,"trade_duration":396,"profit_ratio":0.01120741,"profit_pct":1.12,"profit_abs":1.12186208,"sell_reason":"roi","sell_order_status":"closed","stop_loss_abs":4.11507,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-11-28 00:50:17","stoploss_last_update_timestamp":1638060617352,"initial_stop_loss_abs":4.11507,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":4.2922,"max_rate":4.6328,"open_order_id":null},{"trade_id":92,"pair":"DOT/USDT","is_open":false,"exchange":"binance","amount":2.92,"amount_requested":2.92,"stake_amount":100,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.09995159999999999,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.10129479999999999,"fee_close_currency":"USDT","open_date":"2021-11-28 02:00:12","open_timestamp":1638064812573,"open_rate":34.23,"open_rate_requested":34.23,"open_trade_value":100.0515516,"close_date":"2021-11-28 21:28:54","close_timestamp":1638134934340,"close_rate":34.69,"close_rate_requested":34.69,"close_profit":0.01141365,"close_profit_pct":1.14,"close_profit_abs":1.1419536,"trade_duration_s":70121,"trade_duration":1168,"profit_ratio":0.01141365,"profit_pct":1.14,"profit_abs":1.1419536,"sell_reason":"roi","sell_order_status":"closed","stop_loss_abs":30.807,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-11-28 02:00:24","stoploss_last_update_timestamp":1638064824547,"initial_stop_loss_abs":30.807,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":32.25,"max_rate":34.69,"open_order_id":null},{"trade_id":93,"pair":"GTC/USDT","is_open":false,"exchange":"binance","amount":4.9,"amount_requested":4.9,"stake_amount":100,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.09893100000000002,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.0886508,"fee_close_currency":"USDT","open_date":"2021-11-28 11:55:10","open_timestamp":1638100510853,"open_rate":20.19,"open_rate_requested":20.19,"open_trade_value":99.029931,"close_date":"2021-11-28 16:38:28","close_timestamp":1638117508318,"close_rate":18.092,"close_rate_requested":18.115,"close_profit":-0.10570321,"close_profit_pct":-10.57,"close_profit_abs":-10.4677818,"trade_duration_s":16997,"trade_duration":283,"profit_ratio":-0.10570321,"profit_pct":-10.57,"profit_abs":-10.4677818,"sell_reason":"stop_loss","sell_order_status":"closed","stop_loss_abs":18.171000000000003,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-11-28 11:55:32","stoploss_last_update_timestamp":1638100532255,"initial_stop_loss_abs":18.171000000000003,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":18.115,"max_rate":20.19,"open_order_id":null},{"trade_id":94,"pair":"AVAX/USDT","is_open":false,"exchange":"binance","amount":0.95,"amount_requested":0.95,"stake_amount":100,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.099674,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.10103249999999998,"fee_close_currency":"USDT","open_date":"2021-11-28 16:50:08","open_timestamp":1638118208302,"open_rate":104.92,"open_rate_requested":104.92,"open_trade_value":99.773674,"close_date":"2021-11-28 19:37:41","close_timestamp":1638128261621,"close_rate":106.35,"close_rate_requested":106.35,"close_profit":0.0116042,"close_profit_pct":1.16,"close_profit_abs":1.1577935,"trade_duration_s":10053,"trade_duration":167,"profit_ratio":0.0116042,"profit_pct":1.16,"profit_abs":1.1577935,"sell_reason":"roi","sell_order_status":"closed","stop_loss_abs":94.428,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-11-28 16:52:30","stoploss_last_update_timestamp":1638118350757,"initial_stop_loss_abs":94.428,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":100.71,"max_rate":106.35,"open_order_id":null},{"trade_id":95,"pair":"SOL/USDT","is_open":false,"exchange":"binance","amount":0.49,"amount_requested":0.49,"stake_amount":100,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.099176,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.1004304,"fee_close_currency":"USDT","open_date":"2021-11-29 08:35:07","open_timestamp":1638174907261,"open_rate":202.4,"open_rate_requested":202.4,"open_trade_value":99.275176,"close_date":"2021-11-29 10:44:29","close_timestamp":1638182669513,"close_rate":204.96,"close_rate_requested":204.96,"close_profit":0.01062495,"close_profit_pct":1.06,"close_profit_abs":1.0547936,"trade_duration_s":7762,"trade_duration":129,"profit_ratio":0.01062495,"profit_pct":1.06,"profit_abs":1.0547936,"sell_reason":"roi","sell_order_status":"closed","stop_loss_abs":182.16,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-11-29 08:35:09","stoploss_last_update_timestamp":1638174909438,"initial_stop_loss_abs":182.16,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":201.08,"max_rate":204.96,"open_order_id":null},{"trade_id":96,"pair":"TLM/USDT","is_open":false,"exchange":"binance","amount":254.71217524,"amount_requested":254.71217524,"stake_amount":100,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.1,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.10122261844116147,"fee_close_currency":"USDT","open_date":"2021-11-29 09:50:11","open_timestamp":1638179411314,"open_rate":0.3926,"open_rate_requested":0.3926,"open_trade_value":100.1,"close_date":"2021-11-29 17:18:59","close_timestamp":1638206339077,"close_rate":0.3974,"close_rate_requested":0.3974,"close_profit":0.01020375,"close_profit_pct":1.02,"close_profit_abs":1.02139582,"trade_duration_s":26927,"trade_duration":448,"profit_ratio":0.01020375,"profit_pct":1.02,"profit_abs":1.02139582,"sell_reason":"roi","sell_order_status":"closed","stop_loss_abs":0.35334,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-11-29 09:50:17","stoploss_last_update_timestamp":1638179417506,"initial_stop_loss_abs":0.35334,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":0.3809,"max_rate":0.3974,"open_order_id":null},{"trade_id":97,"pair":"XRP/USDT","is_open":false,"exchange":"binance","amount":102.39606799,"amount_requested":102.39606799,"stake_amount":100,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.1,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.10122875281589187,"fee_close_currency":"USDT","open_date":"2021-11-29 19:55:10","open_timestamp":1638215710795,"open_rate":0.9766,"open_rate_requested":0.9766,"open_trade_value":100.1,"close_date":"2021-11-29 20:55:30","close_timestamp":1638219330945,"close_rate":0.9886,"close_rate_requested":0.9886,"close_profit":0.01026498,"close_profit_pct":1.03,"close_profit_abs":1.02752406,"trade_duration_s":3620,"trade_duration":60,"profit_ratio":0.01026498,"profit_pct":1.03,"profit_abs":1.02752406,"sell_reason":"roi","sell_order_status":"closed","stop_loss_abs":0.87894,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-11-29 19:57:02","stoploss_last_update_timestamp":1638215822319,"initial_stop_loss_abs":0.87894,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":0.9742,"max_rate":0.9892,"open_order_id":null},{"trade_id":98,"pair":"LUNA/USDT","is_open":false,"exchange":"binance","amount":1.93,"amount_requested":1.93,"stake_amount":100,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.09956870000000001,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.100939,"fee_close_currency":"USDT","open_date":"2021-11-29 22:50:10","open_timestamp":1638226210371,"open_rate":51.59,"open_rate_requested":51.59,"open_trade_value":99.6682687,"close_date":"2021-11-30 04:46:25","close_timestamp":1638247585550,"close_rate":52.3,"close_rate_requested":52.3,"close_profit":0.01173686,"close_profit_pct":1.17,"close_profit_abs":1.1697923,"trade_duration_s":21375,"trade_duration":356,"profit_ratio":0.01173686,"profit_pct":1.17,"profit_abs":1.1697923,"sell_reason":"roi","sell_order_status":"closed","stop_loss_abs":46.431000000000004,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-11-29 22:50:46","stoploss_last_update_timestamp":1638226246359,"initial_stop_loss_abs":46.431000000000004,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":50.52,"max_rate":52.3,"open_order_id":null},{"trade_id":99,"pair":"GALA/USDT","is_open":false,"exchange":"binance","amount":150.83411264,"amount_requested":150.83411264,"stake_amount":100,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.1,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.10122326465353405,"fee_close_currency":"USDT","open_date":"2021-11-29 23:00:07","open_timestamp":1638226807300,"open_rate":0.66298,"open_rate_requested":0.66298,"open_trade_value":100.1,"close_date":"2021-12-02 00:04:58","close_timestamp":1638403498801,"close_rate":0.67109,"close_rate_requested":0.67109,"close_profit":0.0102102,"close_profit_pct":1.02,"close_profit_abs":1.02204139,"trade_duration_s":176691,"trade_duration":2944,"profit_ratio":0.0102102,"profit_pct":1.02,"profit_abs":1.02204139,"sell_reason":"roi","sell_order_status":"closed","stop_loss_abs":0.596682,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-11-29 23:00:18","stoploss_last_update_timestamp":1638226818559,"initial_stop_loss_abs":0.596682,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":0.6137,"max_rate":0.67109,"open_order_id":null},{"trade_id":100,"pair":"MANA/USDT","is_open":false,"exchange":"binance","amount":20.16535592,"amount_requested":20.16535592,"stake_amount":100,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.10000000000000002,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.089794313369631,"fee_close_currency":"USDT","open_date":"2021-11-29 23:25:10","open_timestamp":1638228310459,"open_rate":4.959,"open_rate_requested":4.959,"open_trade_value":100.1,"close_date":"2021-12-01 21:39:27","close_timestamp":1638394767506,"close_rate":4.4529,"close_rate_requested":4.4581,"close_profit":-0.10385096,"close_profit_pct":-10.39,"close_profit_abs":-10.39548094,"trade_duration_s":166457,"trade_duration":2774,"profit_ratio":-0.10385096,"profit_pct":-10.39,"profit_abs":-10.39548094,"sell_reason":"stop_loss","sell_order_status":"closed","stop_loss_abs":4.4631,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-11-29 23:25:17","stoploss_last_update_timestamp":1638228317307,"initial_stop_loss_abs":4.4631,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":4.4581,"max_rate":4.9993,"open_order_id":null},{"trade_id":101,"pair":"ETH/USDT","is_open":false,"exchange":"binance","amount":0.0228,"amount_requested":0.0228,"stake_amount":99.905952,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.09990595200000002,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.1011636,"fee_close_currency":"USDT","open_date":"2021-11-30 06:25:07","open_timestamp":1638253507382,"open_rate":4381.84,"open_rate_requested":4381.84,"open_trade_value":100.00585795,"close_date":"2021-11-30 08:44:44","close_timestamp":1638261884446,"close_rate":4437,"close_rate_requested":4437,"close_profit":0.01056517,"close_profit_pct":1.06,"close_profit_abs":1.05657845,"trade_duration_s":8377,"trade_duration":139,"profit_ratio":0.01056517,"profit_pct":1.06,"profit_abs":1.05657845,"sell_reason":"roi","sell_order_status":"closed","stop_loss_abs":3943.6560000000004,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-11-30 06:25:09","stoploss_last_update_timestamp":1638253509057,"initial_stop_loss_abs":3943.6560000000004,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":4376.49,"max_rate":4437,"open_order_id":null},{"trade_id":102,"pair":"RSR/USDT","is_open":false,"exchange":"binance","amount":1917.9,"amount_requested":1917.9,"stake_amount":100,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.09999930600000001,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.101245941,"fee_close_currency":"USDT","open_date":"2021-11-30 09:35:07","open_timestamp":1638264907123,"open_rate":0.05214,"open_rate_requested":0.05214,"open_trade_value":100.09930531,"close_date":"2021-12-01 01:28:57","close_timestamp":1638322137574,"close_rate":0.05279,"close_rate_requested":0.05279,"close_profit":0.01044353,"close_profit_pct":1.04,"close_profit_abs":1.04538975,"trade_duration_s":57230,"trade_duration":953,"profit_ratio":0.01044353,"profit_pct":1.04,"profit_abs":1.04538975,"sell_reason":"roi","sell_order_status":"closed","stop_loss_abs":0.046926,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-11-30 09:35:18","stoploss_last_update_timestamp":1638264918491,"initial_stop_loss_abs":0.046926,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":0.04844,"max_rate":0.05279,"open_order_id":null},{"trade_id":103,"pair":"SHIB/USDT","is_open":false,"exchange":"binance","amount":2192021.04340202,"amount_requested":2192021.04340202,"stake_amount":100,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.1,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.10133713283647523,"fee_close_currency":"USDT","open_date":"2021-12-01 04:40:08","open_timestamp":1638333608151,"open_rate":0.00004562,"open_rate_requested":0.00004562,"open_trade_value":100.1,"close_date":"2021-12-01 12:40:23","close_timestamp":1638362423552,"close_rate":0.00004623,"close_rate_requested":0.00004623,"close_profit":0.01134661,"close_profit_pct":1.13,"close_profit_abs":1.1357957,"trade_duration_s":28815,"trade_duration":480,"profit_ratio":0.01134661,"profit_pct":1.13,"profit_abs":1.1357957,"sell_reason":"roi","sell_order_status":"closed","stop_loss_abs":0.000041058,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-12-01 04:40:14","stoploss_last_update_timestamp":1638333614581,"initial_stop_loss_abs":0.000041058,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":0.0000443,"max_rate":0.00004625,"open_order_id":null},{"trade_id":104,"pair":"ALICE/USDT","is_open":false,"exchange":"binance","amount":4.67,"amount_requested":4.67,"stake_amount":100,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.0998446,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.1010588,"fee_close_currency":"USDT","open_date":"2021-12-01 14:40:11","open_timestamp":1638369611076,"open_rate":21.38,"open_rate_requested":21.38,"open_trade_value":99.9444446,"close_date":"2021-12-01 16:41:42","close_timestamp":1638376902327,"close_rate":21.64,"close_rate_requested":21.64,"close_profit":0.0101386,"close_profit_pct":1.01,"close_profit_abs":1.0132966,"trade_duration_s":7291,"trade_duration":121,"profit_ratio":0.0101386,"profit_pct":1.01,"profit_abs":1.0132966,"sell_reason":"roi","sell_order_status":"closed","stop_loss_abs":19.242,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-12-01 14:40:17","stoploss_last_update_timestamp":1638369617483,"initial_stop_loss_abs":19.242,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":21.17,"max_rate":21.64,"open_order_id":null},{"trade_id":105,"pair":"BTC/USDT","is_open":false,"exchange":"binance","amount":0.00172,"amount_requested":0.00172,"stake_amount":100,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.0994331828,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.08944,"fee_close_currency":"USDT","open_date":"2021-12-01 18:25:07","open_timestamp":1638383107775,"open_rate":57809.99,"open_rate_requested":57809.99,"open_trade_value":99.53261598,"close_date":"2021-12-03 20:19:15","close_timestamp":1638562755850,"close_rate":52000,"close_rate_requested":52000.57,"close_profit":-0.10229869,"close_profit_pct":-10.23,"close_profit_abs":-10.18205598,"trade_duration_s":179648,"trade_duration":2994,"profit_ratio":-0.10229869,"profit_pct":-10.23,"profit_abs":-10.18205598,"sell_reason":"stop_loss","sell_order_status":"closed","stop_loss_abs":52028.991,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-12-01 18:25:54","stoploss_last_update_timestamp":1638383154278,"initial_stop_loss_abs":52028.991,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":52000.57,"max_rate":57932.77,"open_order_id":null},{"trade_id":106,"pair":"TLM/USDT","is_open":false,"exchange":"binance","amount":244.43901247,"amount_requested":244.43901247,"stake_amount":100,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.1,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.10127108286482522,"fee_close_currency":"USDT","open_date":"2021-12-01 21:39:28","open_timestamp":1638394768309,"open_rate":0.4091,"open_rate_requested":0.4091,"open_trade_value":100.1,"close_date":"2021-12-01 22:54:39","close_timestamp":1638399279724,"close_rate":0.4143,"close_rate_requested":0.4143,"close_profit":0.01068743,"close_profit_pct":1.07,"close_profit_abs":1.06981178,"trade_duration_s":4511,"trade_duration":75,"profit_ratio":0.01068743,"profit_pct":1.07,"profit_abs":1.06981178,"sell_reason":"roi","sell_order_status":"closed","stop_loss_abs":0.36819,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-12-01 21:39:42","stoploss_last_update_timestamp":1638394782748,"initial_stop_loss_abs":0.36819,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":0.409,"max_rate":0.4177,"open_order_id":null},{"trade_id":107,"pair":"SANTOS/USDT","is_open":false,"exchange":"binance","amount":9.3,"amount_requested":9.3,"stake_amount":100,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.0999564,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.10125840000000001,"fee_close_currency":"USDT","open_date":"2021-12-02 00:05:09","open_timestamp":1638403509099,"open_rate":10.748,"open_rate_requested":10.748,"open_trade_value":100.0563564,"close_date":"2021-12-02 01:50:21","close_timestamp":1638409821273,"close_rate":10.888,"close_rate_requested":10.888,"close_profit":0.01100165,"close_profit_pct":1.1,"close_profit_abs":1.1007852,"trade_duration_s":6312,"trade_duration":105,"profit_ratio":0.01100165,"profit_pct":1.1,"profit_abs":1.1007852,"sell_reason":"roi","sell_order_status":"closed","stop_loss_abs":9.6732,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-12-02 00:05:10","stoploss_last_update_timestamp":1638403510233,"initial_stop_loss_abs":9.6732,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":10.049,"max_rate":10.96,"open_order_id":null},{"trade_id":108,"pair":"REQ/USDT","is_open":false,"exchange":"binance","amount":152.64845062,"amount_requested":152.64845062,"stake_amount":100,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.10000000000000002,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.10129751183025493,"fee_close_currency":"USDT","open_date":"2021-12-02 00:35:11","open_timestamp":1638405311123,"open_rate":0.6551,"open_rate_requested":0.6551,"open_trade_value":100.1,"close_date":"2021-12-02 04:49:57","close_timestamp":1638420597431,"close_rate":0.6636,"close_rate_requested":0.6636,"close_profit":0.01095119,"close_profit_pct":1.1,"close_profit_abs":1.09621432,"trade_duration_s":15286,"trade_duration":254,"profit_ratio":0.01095119,"profit_pct":1.1,"profit_abs":1.09621432,"sell_reason":"roi","sell_order_status":"closed","stop_loss_abs":0.5895900000000001,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-12-02 00:35:47","stoploss_last_update_timestamp":1638405347593,"initial_stop_loss_abs":0.5895900000000001,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":0.595,"max_rate":0.6636,"open_order_id":null},{"trade_id":109,"pair":"SHIB/USDT","is_open":false,"exchange":"binance","amount":2402113.86019697,"amount_requested":2402113.86019697,"stake_amount":100,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.1,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.1018976699495556,"fee_close_currency":"USDT","open_date":"2021-12-02 03:25:09","open_timestamp":1638415509726,"open_rate":0.00004163,"open_rate_requested":0.00004163,"open_trade_value":100.1,"close_date":"2021-12-02 04:25:43","close_timestamp":1638419143698,"close_rate":0.00004242,"close_rate_requested":0.00004242,"close_profit":0.01694078,"close_profit_pct":1.69,"close_profit_abs":1.69577228,"trade_duration_s":3633,"trade_duration":60,"profit_ratio":0.01694078,"profit_pct":1.69,"profit_abs":1.69577228,"sell_reason":"roi","sell_order_status":"closed","stop_loss_abs":0.000037467,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-12-02 03:25:11","stoploss_last_update_timestamp":1638415511551,"initial_stop_loss_abs":0.000037467,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":0.0000415,"max_rate":0.00004252,"open_order_id":null},{"trade_id":110,"pair":"LUNA/USDT","is_open":false,"exchange":"binance","amount":1.61,"amount_requested":1.61,"stake_amount":100,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.09986830000000001,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.10109190000000001,"fee_close_currency":"USDT","open_date":"2021-12-02 06:40:09","open_timestamp":1638427209646,"open_rate":62.03,"open_rate_requested":62.03,"open_trade_value":99.9681683,"close_date":"2021-12-02 08:17:06","close_timestamp":1638433026267,"close_rate":62.79,"close_rate_requested":62.79,"close_profit":0.01022965,"close_profit_pct":1.02,"close_profit_abs":1.0226398,"trade_duration_s":5816,"trade_duration":96,"profit_ratio":0.01022965,"profit_pct":1.02,"profit_abs":1.0226398,"sell_reason":"roi","sell_order_status":"closed","stop_loss_abs":55.827000000000005,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-12-02 06:40:10","stoploss_last_update_timestamp":1638427210920,"initial_stop_loss_abs":55.827000000000005,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":61.96,"max_rate":63.18,"open_order_id":null},{"trade_id":111,"pair":"SANTOS/USDT","is_open":false,"exchange":"binance","amount":10.75,"amount_requested":10.75,"stake_amount":100,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.09996424999999999,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.08968725000000001,"fee_close_currency":"USDT","open_date":"2021-12-02 11:20:19","open_timestamp":1638444019028,"open_rate":9.299,"open_rate_requested":9.299,"open_trade_value":100.06421425,"close_date":"2021-12-02 16:02:51","close_timestamp":1638460971439,"close_rate":8.343,"close_rate_requested":8.361,"close_profit":-0.10459935,"close_profit_pct":-10.46,"close_profit_abs":-10.4666515,"trade_duration_s":16952,"trade_duration":282,"profit_ratio":-0.10459935,"profit_pct":-10.46,"profit_abs":-10.4666515,"sell_reason":"stop_loss","sell_order_status":"closed","stop_loss_abs":8.3691,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-12-02 11:20:25","stoploss_last_update_timestamp":1638444025201,"initial_stop_loss_abs":8.3691,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":8.361,"max_rate":9.314,"open_order_id":null},{"trade_id":112,"pair":"REQ/USDT","is_open":false,"exchange":"binance","amount":146.99397325,"amount_requested":146.99397325,"stake_amount":100,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.1,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.10138174334852272,"fee_close_currency":"USDT","open_date":"2021-12-02 12:25:11","open_timestamp":1638447911487,"open_rate":0.6803,"open_rate_requested":0.6803,"open_trade_value":100.1,"close_date":"2021-12-02 19:21:55","close_timestamp":1638472915217,"close_rate":0.6897,"close_rate_requested":0.6897,"close_profit":0.01179182,"close_profit_pct":1.18,"close_profit_abs":1.18036161,"trade_duration_s":25003,"trade_duration":416,"profit_ratio":0.01179182,"profit_pct":1.18,"profit_abs":1.18036161,"sell_reason":"roi","sell_order_status":"closed","stop_loss_abs":0.61227,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-12-02 12:25:32","stoploss_last_update_timestamp":1638447932992,"initial_stop_loss_abs":0.61227,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":0.6171,"max_rate":0.6897,"open_order_id":null},{"trade_id":113,"pair":"AVAX/USDT","is_open":false,"exchange":"binance","amount":0.88,"amount_requested":0.88,"stake_amount":100,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.09959840000000002,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.08960159999999999,"fee_close_currency":"USDT","open_date":"2021-12-02 16:10:08","open_timestamp":1638461408050,"open_rate":113.18,"open_rate_requested":113.18,"open_trade_value":99.6979984,"close_date":"2021-12-03 20:02:17","close_timestamp":1638561737127,"close_rate":101.82,"close_rate_requested":101.85,"close_profit":-0.10216855,"close_profit_pct":-10.22,"close_profit_abs":-10.186,"trade_duration_s":100329,"trade_duration":1672,"profit_ratio":-0.10216855,"profit_pct":-10.22,"profit_abs":-10.186,"sell_reason":"stop_loss","sell_order_status":"closed","stop_loss_abs":101.86200000000001,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-12-02 16:10:24","stoploss_last_update_timestamp":1638461424492,"initial_stop_loss_abs":101.86200000000001,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":101.85,"max_rate":113.48,"open_order_id":null},{"trade_id":114,"pair":"ALICE/USDT","is_open":false,"exchange":"binance","amount":4.77,"amount_requested":4.77,"stake_amount":100,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.09983609999999998,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.1011717,"fee_close_currency":"USDT","open_date":"2021-12-03 00:00:08","open_timestamp":1638489608245,"open_rate":20.93,"open_rate_requested":20.93,"open_trade_value":99.9359361,"close_date":"2021-12-03 05:46:47","close_timestamp":1638510407129,"close_rate":21.21,"close_rate_requested":21.21,"close_profit":0.0113532,"close_profit_pct":1.14,"close_profit_abs":1.1345922,"trade_duration_s":20798,"trade_duration":346,"profit_ratio":0.0113532,"profit_pct":1.14,"profit_abs":1.1345922,"sell_reason":"roi","sell_order_status":"closed","stop_loss_abs":18.837,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-12-03 00:01:49","stoploss_last_update_timestamp":1638489709785,"initial_stop_loss_abs":18.837,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":20.34,"max_rate":21.28,"open_order_id":null},{"trade_id":115,"pair":"WRX/USDT","is_open":false,"exchange":"binance","amount":70.8,"amount_requested":70.8,"stake_amount":100,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.09996959999999999,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.1022352,"fee_close_currency":"USDT","open_date":"2021-12-03 07:25:11","open_timestamp":1638516311364,"open_rate":1.412,"open_rate_requested":1.412,"open_trade_value":100.0695696,"close_date":"2021-12-03 07:56:26","close_timestamp":1638518186331,"close_rate":1.444,"close_rate_requested":1.444,"close_profit":0.02061961,"close_profit_pct":2.06,"close_profit_abs":2.0633952,"trade_duration_s":1874,"trade_duration":31,"profit_ratio":0.02061961,"profit_pct":2.06,"profit_abs":2.0633952,"sell_reason":"roi","sell_order_status":"closed","stop_loss_abs":1.2708,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-12-03 07:25:17","stoploss_last_update_timestamp":1638516317828,"initial_stop_loss_abs":1.2708,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":1.411,"max_rate":1.444,"open_order_id":null},{"trade_id":116,"pair":"GALA/USDT","is_open":false,"exchange":"binance","amount":184.42358409,"amount_requested":184.42358409,"stake_amount":100,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.1,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.08986407981852719,"fee_close_currency":"USDT","open_date":"2021-12-03 14:20:08","open_timestamp":1638541208003,"open_rate":0.54223,"open_rate_requested":0.54223,"open_trade_value":100.1,"close_date":"2021-12-03 20:03:07","close_timestamp":1638561787168,"close_rate":0.48727,"close_rate_requested":0.48772,"close_profit":-0.10315469,"close_profit_pct":-10.32,"close_profit_abs":-10.32578426,"trade_duration_s":20579,"trade_duration":342,"profit_ratio":-0.10315469,"profit_pct":-10.32,"profit_abs":-10.32578426,"sell_reason":"stop_loss","sell_order_status":"closed","stop_loss_abs":0.488007,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-12-03 14:20:12","stoploss_last_update_timestamp":1638541212020,"initial_stop_loss_abs":0.488007,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":0.48772,"max_rate":0.54223,"open_order_id":null},{"trade_id":117,"pair":"ETH/USDT","is_open":false,"exchange":"binance","amount":0.0241,"amount_requested":0.0241,"stake_amount":100,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.09999427400000001,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.102315586,"fee_close_currency":"USDT","open_date":"2021-12-03 20:25:07","open_timestamp":1638563107618,"open_rate":4149.14,"open_rate_requested":4149.14,"open_trade_value":100.09426827,"close_date":"2021-12-03 21:08:29","close_timestamp":1638565709684,"close_rate":4245.46,"close_rate_requested":4245.46,"close_profit":0.02117006,"close_profit_pct":2.12,"close_profit_abs":2.11900214,"trade_duration_s":2602,"trade_duration":43,"profit_ratio":0.02117006,"profit_pct":2.12,"profit_abs":2.11900214,"sell_reason":"roi","sell_order_status":"closed","stop_loss_abs":3734.2260000000006,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-12-03 20:25:15","stoploss_last_update_timestamp":1638563115604,"initial_stop_loss_abs":3734.2260000000006,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":4132.84,"max_rate":4245.46,"open_order_id":null},{"trade_id":118,"pair":"BTC/USDT","is_open":false,"exchange":"binance","amount":0.00188,"amount_requested":0.00188,"stake_amount":100,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.0996653612,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.10106598,"fee_close_currency":"USDT","open_date":"2021-12-03 20:25:08","open_timestamp":1638563108573,"open_rate":53013.49,"open_rate_requested":53013.49,"open_trade_value":99.76502656,"close_date":"2021-12-03 21:25:09","close_timestamp":1638566709529,"close_rate":53758.5,"close_rate_requested":53758.5,"close_profit":0.01202714,"close_profit_pct":1.2,"close_profit_abs":1.19988746,"trade_duration_s":3600,"trade_duration":60,"profit_ratio":0.01202714,"profit_pct":1.2,"profit_abs":1.19988746,"sell_reason":"roi","sell_order_status":"closed","stop_loss_abs":47712.140999999996,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-12-03 20:25:15","stoploss_last_update_timestamp":1638563115842,"initial_stop_loss_abs":47712.140999999996,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":52629.07,"max_rate":54034.34,"open_order_id":null},{"trade_id":119,"pair":"MATIC/USDT","is_open":false,"exchange":"binance","amount":46.3,"amount_requested":46.3,"stake_amount":100,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.09991539999999999,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.1022767,"fee_close_currency":"USDT","open_date":"2021-12-03 20:25:09","open_timestamp":1638563109089,"open_rate":2.158,"open_rate_requested":2.158,"open_trade_value":100.0153154,"close_date":"2021-12-03 20:55:10","close_timestamp":1638564910627,"close_rate":2.209,"close_rate_requested":2.209,"close_profit":0.02158777,"close_profit_pct":2.16,"close_profit_abs":2.1591079,"trade_duration_s":1801,"trade_duration":30,"profit_ratio":0.02158777,"profit_pct":2.16,"profit_abs":2.1591079,"sell_reason":"roi","sell_order_status":"closed","stop_loss_abs":1.9422,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-12-03 20:25:16","stoploss_last_update_timestamp":1638563116080,"initial_stop_loss_abs":1.9422,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":2.136,"max_rate":2.209,"open_order_id":null},{"trade_id":120,"pair":"TRX/USDT","is_open":false,"exchange":"binance","amount":1063.3,"amount_requested":1063.3,"stake_amount":100,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.09999273199999999,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.089572392,"fee_close_currency":"USDT","open_date":"2021-12-03 22:40:09","open_timestamp":1638571209817,"open_rate":0.09404,"open_rate_requested":0.09404,"open_trade_value":100.09272473,"close_date":"2021-12-04 05:03:43","close_timestamp":1638594223274,"close_rate":0.08424,"close_rate_requested":0.08429,"close_profit":-0.10600076,"close_profit_pct":-10.6,"close_profit_abs":-10.60990512,"trade_duration_s":23013,"trade_duration":383,"profit_ratio":-0.10600076,"profit_pct":-10.6,"profit_abs":-10.60990512,"sell_reason":"stop_loss","sell_order_status":"closed","stop_loss_abs":0.084636,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-12-03 22:42:25","stoploss_last_update_timestamp":1638571345934,"initial_stop_loss_abs":0.084636,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":0.08429,"max_rate":0.09447,"open_order_id":null},{"trade_id":121,"pair":"CTXC/USDT","is_open":false,"exchange":"binance","amount":132.01320132,"amount_requested":132.01320132,"stake_amount":100,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.1,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.08972937293729373,"fee_close_currency":"USDT","open_date":"2021-12-04 01:20:09","open_timestamp":1638580809752,"open_rate":0.7575,"open_rate_requested":0.7575,"open_trade_value":100.1,"close_date":"2021-12-04 02:31:57","close_timestamp":1638585117899,"close_rate":0.6797,"close_rate_requested":0.681,"close_profit":-0.10449907,"close_profit_pct":-10.45,"close_profit_abs":-10.46035644,"trade_duration_s":4308,"trade_duration":71,"profit_ratio":-0.10449907,"profit_pct":-10.45,"profit_abs":-10.46035644,"sell_reason":"stop_loss","sell_order_status":"closed","stop_loss_abs":0.68175,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-12-04 01:24:38","stoploss_last_update_timestamp":1638581078219,"initial_stop_loss_abs":0.68175,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":0.681,"max_rate":0.7707,"open_order_id":null},{"trade_id":122,"pair":"MATIC/USDT","is_open":false,"exchange":"binance","amount":46.9,"amount_requested":46.9,"stake_amount":100,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.0998501,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.10210129999999999,"fee_close_currency":"USDT","open_date":"2021-12-04 01:20:10","open_timestamp":1638580810246,"open_rate":2.129,"open_rate_requested":2.129,"open_trade_value":99.9499501,"close_date":"2021-12-04 01:57:07","close_timestamp":1638583027903,"close_rate":2.177,"close_rate_requested":2.177,"close_profit":0.02050275,"close_profit_pct":2.05,"close_profit_abs":2.0492486,"trade_duration_s":2217,"trade_duration":36,"profit_ratio":0.02050275,"profit_pct":2.05,"profit_abs":2.0492486,"sell_reason":"roi","sell_order_status":"closed","stop_loss_abs":1.9161000000000001,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-12-04 01:24:41","stoploss_last_update_timestamp":1638581081968,"initial_stop_loss_abs":1.9161000000000001,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":2.108,"max_rate":2.177,"open_order_id":null},{"trade_id":123,"pair":"CTXC/USDT","is_open":false,"exchange":"binance","amount":150.0825454,"amount_requested":150.0825454,"stake_amount":100,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.1,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.1044424433438391,"fee_close_currency":"USDT","open_date":"2021-12-04 03:15:11","open_timestamp":1638587711513,"open_rate":0.6663,"open_rate_requested":0.6663,"open_trade_value":100.1,"close_date":"2021-12-04 03:38:48","close_timestamp":1638589128544,"close_rate":0.6959,"close_rate_requested":0.6959,"close_profit":0.04233767,"close_profit_pct":4.23,"close_profit_abs":4.2380009,"trade_duration_s":1417,"trade_duration":23,"profit_ratio":0.04233767,"profit_pct":4.23,"profit_abs":4.2380009,"sell_reason":"roi","sell_order_status":"closed","stop_loss_abs":0.59967,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-12-04 03:15:13","stoploss_last_update_timestamp":1638587713211,"initial_stop_loss_abs":0.59967,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":0.6554,"max_rate":0.6959,"open_order_id":null},{"trade_id":124,"pair":"MATIC/USDT","is_open":false,"exchange":"binance","amount":48.4,"amount_requested":48.4,"stake_amount":99.8976,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.0998976,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.0895884,"fee_close_currency":"USDT","open_date":"2021-12-04 03:35:12","open_timestamp":1638588912670,"open_rate":2.064,"open_rate_requested":2.064,"open_trade_value":99.9974976,"close_date":"2021-12-04 05:03:28","close_timestamp":1638594208860,"close_rate":1.851,"close_rate_requested":1.855,"close_profit":-0.10498949,"close_profit_pct":-10.5,"close_profit_abs":-10.498686,"trade_duration_s":5296,"trade_duration":88,"profit_ratio":-0.10498949,"profit_pct":-10.5,"profit_abs":-10.498686,"sell_reason":"stop_loss","sell_order_status":"closed","stop_loss_abs":1.8576000000000001,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-12-04 03:35:14","stoploss_last_update_timestamp":1638588914721,"initial_stop_loss_abs":1.8576000000000001,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":1.855,"max_rate":2.064,"open_order_id":null},{"trade_id":125,"pair":"COS/USDT","is_open":false,"exchange":"binance","amount":2686,"amount_requested":2686,"stake_amount":100,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.09999978,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.08995414,"fee_close_currency":"USDT","open_date":"2021-12-04 03:38:49","open_timestamp":1638589129545,"open_rate":0.03723,"open_rate_requested":0.03723,"open_trade_value":100.09977978,"close_date":"2021-12-04 04:52:35","close_timestamp":1638593555876,"close_rate":0.03349,"close_rate_requested":0.0335,"close_profit":-0.10225391,"close_profit_pct":-10.23,"close_profit_abs":-10.23559392,"trade_duration_s":4426,"trade_duration":73,"profit_ratio":-0.10225391,"profit_pct":-10.23,"profit_abs":-10.23559392,"sell_reason":"stop_loss","sell_order_status":"closed","stop_loss_abs":0.033507,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-12-04 03:38:55","stoploss_last_update_timestamp":1638589135581,"initial_stop_loss_abs":0.033507,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":0.0335,"max_rate":0.03821,"open_order_id":null},{"trade_id":126,"pair":"COS/USDT","is_open":false,"exchange":"binance","amount":3146.6,"amount_requested":3146.6,"stake_amount":100,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.099998948,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.08747548,"fee_close_currency":"USDT","open_date":"2021-12-04 05:10:09","open_timestamp":1638594609030,"open_rate":0.03178,"open_rate_requested":0.03178,"open_trade_value":100.09894695,"close_date":"2021-12-04 05:23:04","close_timestamp":1638595384196,"close_rate":0.0278,"close_rate_requested":0.02835,"close_profit":-0.12698378,"close_profit_pct":-12.7,"close_profit_abs":-12.71094243,"trade_duration_s":775,"trade_duration":12,"profit_ratio":-0.12698378,"profit_pct":-12.7,"profit_abs":-12.71094243,"sell_reason":"stop_loss","sell_order_status":"closed","stop_loss_abs":0.028602000000000002,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-12-04 05:11:00","stoploss_last_update_timestamp":1638594660049,"initial_stop_loss_abs":0.028602000000000002,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":0.02835,"max_rate":0.03178,"open_order_id":null},{"trade_id":128,"pair":"MATIC/USDT","is_open":false,"exchange":"binance","amount":57.2,"amount_requested":57.2,"stake_amount":100,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.09987120000000001,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.10410400000000002,"fee_close_currency":"USDT","open_date":"2021-12-04 05:35:46","open_timestamp":1638596146394,"open_rate":1.746,"open_rate_requested":1.746,"open_trade_value":99.9710712,"close_date":"2021-12-04 05:54:36","close_timestamp":1638597276235,"close_rate":1.82,"close_rate_requested":1.82,"close_profit":0.04029991,"close_profit_pct":4.03,"close_profit_abs":4.0288248,"trade_duration_s":1129,"trade_duration":18,"profit_ratio":0.04029991,"profit_pct":4.03,"profit_abs":4.0288248,"sell_reason":"roi","sell_order_status":"closed","stop_loss_abs":1.5714000000000001,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-12-04 05:36:17","stoploss_last_update_timestamp":1638596177657,"initial_stop_loss_abs":1.5714000000000001,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":1.697,"max_rate":1.82,"open_order_id":null},{"trade_id":129,"pair":"SOL/USDT","is_open":false,"exchange":"binance","amount":0.54,"amount_requested":0.54,"stake_amount":100,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.0986742,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.10290780000000001,"fee_close_currency":"USDT","open_date":"2021-12-04 05:40:08","open_timestamp":1638596408944,"open_rate":182.73,"open_rate_requested":182.73,"open_trade_value":98.7728742,"close_date":"2021-12-04 05:55:52","close_timestamp":1638597352334,"close_rate":190.57,"close_rate_requested":190.57,"close_profit":0.04082111,"close_profit_pct":4.08,"close_profit_abs":4.032018,"trade_duration_s":943,"trade_duration":15,"profit_ratio":0.04082111,"profit_pct":4.08,"profit_abs":4.032018,"sell_reason":"roi","sell_order_status":"closed","stop_loss_abs":164.457,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-12-04 05:41:40","stoploss_last_update_timestamp":1638596500566,"initial_stop_loss_abs":164.457,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":180.14,"max_rate":190.57,"open_order_id":null},{"trade_id":130,"pair":"BTC/USDT","is_open":false,"exchange":"binance","amount":0.00211,"amount_requested":0.00211,"stake_amount":100,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.09968929210000001,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.10090148709999999,"fee_close_currency":"USDT","open_date":"2021-12-04 05:50:15","open_timestamp":1638597015303,"open_rate":47246.11,"open_rate_requested":47246.11,"open_trade_value":99.78898139,"close_date":"2021-12-04 08:37:38","close_timestamp":1638607058254,"close_rate":47820.61,"close_rate_requested":47820.61,"close_profit":0.01013743,"close_profit_pct":1.01,"close_profit_abs":1.01160422,"trade_duration_s":10042,"trade_duration":167,"profit_ratio":0.01013743,"profit_pct":1.01,"profit_abs":1.01160422,"sell_reason":"roi","sell_order_status":"closed","stop_loss_abs":42521.499,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-12-04 05:50:21","stoploss_last_update_timestamp":1638597021720,"initial_stop_loss_abs":42521.499,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":46614.55,"max_rate":47997.15,"open_order_id":null},{"trade_id":131,"pair":"ETH/USDT","is_open":false,"exchange":"binance","amount":0.0262,"amount_requested":0.0262,"stake_amount":99.924704,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.099924704,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.1021538,"fee_close_currency":"USDT","open_date":"2021-12-04 05:54:37","open_timestamp":1638597277222,"open_rate":3813.92,"open_rate_requested":3813.92,"open_trade_value":100.0246287,"close_date":"2021-12-04 06:33:08","close_timestamp":1638599588524,"close_rate":3899,"close_rate_requested":3899,"close_profit":0.02026518,"close_profit_pct":2.03,"close_profit_abs":2.0270175,"trade_duration_s":2311,"trade_duration":38,"profit_ratio":0.02026518,"profit_pct":2.03,"profit_abs":2.0270175,"sell_reason":"roi","sell_order_status":"closed","stop_loss_abs":3432.5280000000002,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-12-04 05:54:41","stoploss_last_update_timestamp":1638597281681,"initial_stop_loss_abs":3432.5280000000002,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":3792.24,"max_rate":3899,"open_order_id":null},{"trade_id":132,"pair":"MATIC/USDT","is_open":false,"exchange":"binance","amount":56,"amount_requested":56,"stake_amount":100,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.09996,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.10309600000000001,"fee_close_currency":"USDT","open_date":"2021-12-04 11:50:10","open_timestamp":1638618610511,"open_rate":1.785,"open_rate_requested":1.785,"open_trade_value":100.05996,"close_date":"2021-12-04 12:20:25","close_timestamp":1638620425012,"close_rate":1.841,"close_rate_requested":1.841,"close_profit":0.02931186,"close_profit_pct":2.93,"close_profit_abs":2.932944,"trade_duration_s":1814,"trade_duration":30,"profit_ratio":0.02931186,"profit_pct":2.93,"profit_abs":2.932944,"sell_reason":"roi","sell_order_status":"closed","stop_loss_abs":1.6065,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-12-04 11:50:43","stoploss_last_update_timestamp":1638618643431,"initial_stop_loss_abs":1.6065,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":1.771,"max_rate":1.841,"open_order_id":null},{"trade_id":134,"pair":"GALA/USDT","is_open":false,"exchange":"binance","amount":244.02147389,"amount_requested":244.02147389,"stake_amount":100,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.1,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.10427281600780869,"fee_close_currency":"USDT","open_date":"2021-12-04 11:50:11","open_timestamp":1638618611557,"open_rate":0.4098,"open_rate_requested":0.4098,"open_trade_value":100.1,"close_date":"2021-12-04 12:15:59","close_timestamp":1638620159243,"close_rate":0.42731,"close_rate_requested":0.42731,"close_profit":0.04064479,"close_profit_pct":4.06,"close_profit_abs":4.06854319,"trade_duration_s":1547,"trade_duration":25,"profit_ratio":0.04064479,"profit_pct":4.06,"profit_abs":4.06854319,"sell_reason":"roi","sell_order_status":"closed","stop_loss_abs":0.36882,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-12-04 11:50:48","stoploss_last_update_timestamp":1638618648001,"initial_stop_loss_abs":0.36882,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":0.40969,"max_rate":0.42731,"open_order_id":null},{"trade_id":135,"pair":"COS/USDT","is_open":false,"exchange":"binance","amount":2950.7,"amount_requested":2950.7,"stake_amount":100,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.099999223,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.08976029399999999,"fee_close_currency":"USDT","open_date":"2021-12-04 15:25:10","open_timestamp":1638631510959,"open_rate":0.03389,"open_rate_requested":0.03389,"open_trade_value":100.09922222,"close_date":"2021-12-04 16:33:14","close_timestamp":1638635594295,"close_rate":0.03042,"close_rate_requested":0.03046,"close_profit":-0.10418351,"close_profit_pct":-10.42,"close_profit_abs":-10.42868852,"trade_duration_s":4083,"trade_duration":68,"profit_ratio":-0.10418351,"profit_pct":-10.42,"profit_abs":-10.42868852,"sell_reason":"stop_loss","sell_order_status":"closed","stop_loss_abs":0.030501000000000004,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-12-04 15:25:22","stoploss_last_update_timestamp":1638631522023,"initial_stop_loss_abs":0.030501000000000004,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":0.03046,"max_rate":0.03528,"open_order_id":null},{"trade_id":136,"pair":"COS/USDT","is_open":false,"exchange":"binance","amount":3245.6,"amount_requested":3245.6,"stake_amount":100,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.09999693600000001,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.101392544,"fee_close_currency":"USDT","open_date":"2021-12-04 16:45:10","open_timestamp":1638636310237,"open_rate":0.03081,"open_rate_requested":0.03081,"open_trade_value":100.09693294,"close_date":"2021-12-04 17:47:27","close_timestamp":1638640047353,"close_rate":0.03124,"close_rate_requested":0.03124,"close_profit":0.01193062,"close_profit_pct":1.19,"close_profit_abs":1.19421852,"trade_duration_s":3737,"trade_duration":62,"profit_ratio":0.01193062,"profit_pct":1.19,"profit_abs":1.19421852,"sell_reason":"roi","sell_order_status":"closed","stop_loss_abs":0.027729,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-12-04 16:45:16","stoploss_last_update_timestamp":1638636316190,"initial_stop_loss_abs":0.027729,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":0.02975,"max_rate":0.03166,"open_order_id":null},{"trade_id":137,"pair":"COS/USDT","is_open":false,"exchange":"binance","amount":3323.3,"amount_requested":3323.3,"stake_amount":100,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.09999809700000001,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.10132741700000002,"fee_close_currency":"USDT","open_date":"2021-12-04 21:05:09","open_timestamp":1638651909072,"open_rate":0.03009,"open_rate_requested":0.03009,"open_trade_value":100.0980951,"close_date":"2021-12-05 00:06:29","close_timestamp":1638662789072,"close_rate":0.03049,"close_rate_requested":0.03049,"close_profit":0.01126889,"close_profit_pct":1.13,"close_profit_abs":1.12799449,"trade_duration_s":10880,"trade_duration":181,"profit_ratio":0.01126889,"profit_pct":1.13,"profit_abs":1.12799449,"sell_reason":"roi","sell_order_status":"closed","stop_loss_abs":0.027081,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-12-04 21:07:10","stoploss_last_update_timestamp":1638652030088,"initial_stop_loss_abs":0.027081,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":0.02834,"max_rate":0.03138,"open_order_id":null},{"trade_id":138,"pair":"SOL/USDT","is_open":false,"exchange":"binance","amount":0.49,"amount_requested":0.49,"stake_amount":100,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.0985929,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.1008175,"fee_close_currency":"USDT","open_date":"2021-12-04 21:55:13","open_timestamp":1638654913249,"open_rate":201.21,"open_rate_requested":201.21,"open_trade_value":98.6914929,"close_date":"2021-12-04 22:46:03","close_timestamp":1638657963798,"close_rate":205.75,"close_rate_requested":205.75,"close_profit":0.02052041,"close_profit_pct":2.05,"close_profit_abs":2.0251896,"trade_duration_s":3050,"trade_duration":50,"profit_ratio":0.02052041,"profit_pct":2.05,"profit_abs":2.0251896,"sell_reason":"roi","sell_order_status":"closed","stop_loss_abs":181.089,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-12-04 21:55:49","stoploss_last_update_timestamp":1638654949429,"initial_stop_loss_abs":181.089,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":200.41,"max_rate":205.75,"open_order_id":null},{"trade_id":139,"pair":"SAND/USDT","is_open":false,"exchange":"binance","amount":17.21881672,"amount_requested":17.21881672,"stake_amount":100,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.1,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.10122597975067155,"fee_close_currency":"USDT","open_date":"2021-12-05 00:50:11","open_timestamp":1638665411733,"open_rate":5.8076,"open_rate_requested":5.8076,"open_trade_value":100.1,"close_date":"2021-12-05 01:53:14","close_timestamp":1638669194046,"close_rate":5.8788,"close_rate_requested":5.8788,"close_profit":0.0102373,"close_profit_pct":1.02,"close_profit_abs":1.02475377,"trade_duration_s":3782,"trade_duration":63,"profit_ratio":0.0102373,"profit_pct":1.02,"profit_abs":1.02475377,"sell_reason":"roi","sell_order_status":"closed","stop_loss_abs":5.22684,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-12-05 00:51:59","stoploss_last_update_timestamp":1638665519493,"initial_stop_loss_abs":5.22684,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":5.7476,"max_rate":5.8788,"open_order_id":null},{"trade_id":140,"pair":"MANA/USDT","is_open":false,"exchange":"binance","amount":25.32671462,"amount_requested":25.32671462,"stake_amount":100,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.1,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.10122581298753926,"fee_close_currency":"USDT","open_date":"2021-12-05 00:50:12","open_timestamp":1638665412254,"open_rate":3.9484,"open_rate_requested":3.9484,"open_trade_value":100.1,"close_date":"2021-12-05 05:34:37","close_timestamp":1638682477111,"close_rate":3.9968,"close_rate_requested":3.9968,"close_profit":0.01023564,"close_profit_pct":1.02,"close_profit_abs":1.02458717,"trade_duration_s":17064,"trade_duration":284,"profit_ratio":0.01023564,"profit_pct":1.02,"profit_abs":1.02458717,"sell_reason":"roi","sell_order_status":"closed","stop_loss_abs":3.55356,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-12-05 00:50:19","stoploss_last_update_timestamp":1638665419175,"initial_stop_loss_abs":3.55356,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":3.843,"max_rate":3.9968,"open_order_id":null},{"trade_id":141,"pair":"DOT/USDT","is_open":false,"exchange":"binance","amount":3.47,"amount_requested":3.47,"stake_amount":100,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.09986660000000001,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.10115049999999999,"fee_close_currency":"USDT","open_date":"2021-12-05 00:50:12","open_timestamp":1638665412754,"open_rate":28.78,"open_rate_requested":28.78,"open_trade_value":99.9664666,"close_date":"2021-12-05 03:43:04","close_timestamp":1638675784176,"close_rate":29.15,"close_rate_requested":29.15,"close_profit":0.01083246,"close_profit_pct":1.08,"close_profit_abs":1.0828829,"trade_duration_s":10371,"trade_duration":172,"profit_ratio":0.01083246,"profit_pct":1.08,"profit_abs":1.0828829,"sell_reason":"roi","sell_order_status":"closed","stop_loss_abs":25.902,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-12-05 00:52:19","stoploss_last_update_timestamp":1638665539265,"initial_stop_loss_abs":25.902,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":28.39,"max_rate":29.15,"open_order_id":null},{"trade_id":142,"pair":"BTC/USDT","is_open":false,"exchange":"binance","amount":0.00203,"amount_requested":0.00203,"stake_amount":100,"strategy":"SampleStrategy","buy_tag":null,"timeframe":5,"fee_open":0.001,"fee_open_cost":0.0995325646,"fee_open_currency":"USDT","fee_close":0.001,"fee_close_cost":0.10074739780000001,"fee_close_currency":"USDT","open_date":"2021-12-05 09:30:11","open_timestamp":1638696611224,"open_rate":49030.82,"open_rate_requested":49030.82,"open_trade_value":99.63209716,"close_date":"2021-12-05 12:23:09","close_timestamp":1638706989587,"close_rate":49629.26,"close_rate_requested":49629.26,"close_profit":0.010183,"close_profit_pct":1.02,"close_profit_abs":1.01455324,"trade_duration_s":10378,"trade_duration":172,"profit_ratio":0.010183,"profit_pct":1.02,"profit_abs":1.01455324,"sell_reason":"roi","sell_order_status":"closed","stop_loss_abs":44127.738,"stop_loss_ratio":-0.1,"stop_loss_pct":-10,"stoploss_order_id":null,"stoploss_last_update":"2021-12-05 09:34:18","stoploss_last_update_timestamp":1638696858833,"initial_stop_loss_abs":44127.738,"initial_stop_loss_ratio":-0.1,"initial_stop_loss_pct":-10,"min_rate":48849,"max_rate":49629.26,"open_order_id":null}],"trades_count":140,"total_trades":140}'
        );

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/compat get default export */
  /******/ !(function () {
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/ __webpack_require__.n = function (module) {
      /******/ var getter =
        module && module.__esModule
          ? /******/ function () {
              return module["default"];
            }
          : /******/ function () {
              return module;
            };
      /******/ __webpack_require__.d(getter, { a: getter });
      /******/ return getter;
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/define property getters */
  /******/ !(function () {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = function (exports, definition) {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ !(function () {
    /******/ __webpack_require__.o = function (obj, prop) {
      return Object.prototype.hasOwnProperty.call(obj, prop);
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ !(function () {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = function (exports) {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /************************************************************************/
  var __webpack_exports__ = {};
  // This entry need to be wrapped in an IIFE because it need to be in strict mode.
  !(function () {
    "use strict";
    /*!*****************************!*\
  !*** ./src/crypto/index.js ***!
  \*****************************/
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__ =
      __webpack_require__(
        /*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js"
      );
    /* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0___default =
      /*#__PURE__*/ __webpack_require__.n(
        regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__
      );
    /* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ =
      __webpack_require__(/*! ./style.css */ "./src/crypto/style.css");
    /* harmony import */ var _oldfiles_mitar__WEBPACK_IMPORTED_MODULE_2__ =
      __webpack_require__(
        /*! ./oldfiles/_mitar */ "./src/crypto/oldfiles/_mitar.js"
      );
    /* harmony import */ var _oldfiles_mitar__WEBPACK_IMPORTED_MODULE_2___default =
      /*#__PURE__*/ __webpack_require__.n(
        _oldfiles_mitar__WEBPACK_IMPORTED_MODULE_2__
      );
    /* harmony import */ var _simeon__WEBPACK_IMPORTED_MODULE_3__ =
      __webpack_require__(/*! ./simeon */ "./src/crypto/simeon.js");
    /* harmony import */ var _signal__WEBPACK_IMPORTED_MODULE_4__ =
      __webpack_require__(/*! ./signal */ "./src/crypto/signal.js");
    /* harmony import */ var _data_handlers__WEBPACK_IMPORTED_MODULE_5__ =
      __webpack_require__(
        /*! ./data-handlers */ "./src/crypto/data-handlers.js"
      );
    /* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_6__ =
      __webpack_require__(/*! ./helpers */ "./src/crypto/helpers.js");
    function _slicedToArray(arr, i) {
      return (
        _arrayWithHoles(arr) ||
        _iterableToArrayLimit(arr, i) ||
        _unsupportedIterableToArray(arr, i) ||
        _nonIterableRest()
      );
    }

    function _nonIterableRest() {
      throw new TypeError(
        "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
      );
    }

    function _unsupportedIterableToArray(o, minLen) {
      if (!o) return;
      if (typeof o === "string") return _arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor) n = o.constructor.name;
      if (n === "Map" || n === "Set") return Array.from(o);
      if (
        n === "Arguments" ||
        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
      )
        return _arrayLikeToArray(o, minLen);
    }

    function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length) len = arr.length;
      for (var i = 0, arr2 = new Array(len); i < len; i++) {
        arr2[i] = arr[i];
      }
      return arr2;
    }

    function _iterableToArrayLimit(arr, i) {
      if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr)))
        return;
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;
      try {
        for (
          var _i = arr[Symbol.iterator](), _s;
          !(_n = (_s = _i.next()).done);
          _n = true
        ) {
          _arr.push(_s.value);
          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"] != null) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }
      return _arr;
    }

    function _arrayWithHoles(arr) {
      if (Array.isArray(arr)) return arr;
    }

    function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
      try {
        var info = gen[key](arg);
        var value = info.value;
      } catch (error) {
        reject(error);
        return;
      }
      if (info.done) {
        resolve(value);
      } else {
        Promise.resolve(value).then(_next, _throw);
      }
    }

    function _asyncToGenerator(fn) {
      return function () {
        var self = this,
          args = arguments;
        return new Promise(function (resolve, reject) {
          var gen = fn.apply(self, args);
          function _next(value) {
            asyncGeneratorStep(
              gen,
              resolve,
              reject,
              _next,
              _throw,
              "next",
              value
            );
          }
          function _throw(err) {
            asyncGeneratorStep(
              gen,
              resolve,
              reject,
              _next,
              _throw,
              "throw",
              err
            );
          }
          _next(undefined);
        });
      };
    }

    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }

    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps) _defineProperties(Constructor.prototype, protoProps);
      if (staticProps) _defineProperties(Constructor, staticProps);
      return Constructor;
    }

    /* eslint-disable no-use-before-define */

    /* eslint-disable no-console */

    /* eslint-disable no-shadow */

    /* eslint-disable no-undef */

    /* eslint-disable unused-imports/no-unused-vars */

    var CANDLE_DATA_LIMIT = 500;

    var SignalsApp = /*#__PURE__*/ (function () {
      function SignalsApp(htmlElement) {
        _classCallCheck(this, SignalsApp);

        if (!htmlElement) throw Error("No root element passed to the App");
        this.rootHTML = htmlElement;
        this.dataCharter = null;
        this.profitCharter = null;
        this.signalHighlight = null;
        this.pairList = [];
        this.frequencyList = [];
        this.activePair = null;
        this.activeFrequency = null;
        this.initialize();
        console.log(this);
      }

      _createClass(SignalsApp, [
        {
          key: "initialize",
          value: function initialize() {
            var _this = this;

            this.rootHTML.innerHTML =
              '\n    <div id="signal-panel"></div>\n      <div id="signals">\n        <div id="charts">\n          <div id="data-chart-wrapper"></div>\n          <div id="profit-chart-wrapper"></div>\n        </div>\n        <div id="signal-controls">\n        </div>\n      </div>\n    ';
            this.dataCharter = new _simeon__WEBPACK_IMPORTED_MODULE_3__.Charter(
              {
                root: document.getElementById("data-chart-wrapper"),
              }
            );
            this.profitCharter =
              new _simeon__WEBPACK_IMPORTED_MODULE_3__.Charter({
                root: document.getElementById("profit-chart-wrapper"),
              });
            this.signalHighlight =
              new _signal__WEBPACK_IMPORTED_MODULE_4__.Signal({
                root: document.getElementById("signal-panel"),
              });
            (0,
            _data_handlers__WEBPACK_IMPORTED_MODULE_5__.fetchPairlist)().then(
              function (data) {
                return _this.setPairs(data);
              }
            );
          },
        },
        {
          key: "setPairs",
          value: function setPairs(pairs) {
            this.pairList = pairs || [];
          },
        },
        {
          key: "setFrequencies",
          value: function setFrequencies(frequencies) {
            this.frequencyList = frequencies || [];
          },
        },
        {
          key: "renderControls",
          value: function renderControls() {
            var _this2 = this;

            var root = document.getElementById("signal-controls");
            _helpers__WEBPACK_IMPORTED_MODULE_6__.eventRegistry.clear(root);
            root.innerHTML = "";
            var controls = this.pairList.map(function (e) {
              var name = e.name,
                frequency = e.frequency,
                delayed = e.delayed; // CONTROL HTML

              var btn = document.createElement("BUTTON");
              btn.classList.add("pair-control");
              btn.setAttribute("type", "button"); // NAME HTML

              var nameSpan = document.createElement("SPAN");
              nameSpan.innerHTML = name;
              btn.appendChild(nameSpan);

              if (delayed) {
                // DELAYED HTML ADDITION
                var delayedSpan = document.createElement("SPAN");
                delayedSpan.innerHTML = " (delayed)";
                btn.appendChild(delayedSpan); // TOOLTIP HTML

                var tooltip = document.createElement("DIV");
                tooltip.classList.add("tooltip");
                tooltip.innerHTML = "You are not subscribed to this signal.";
                btn.appendChild(tooltip);
              }

              var handler = /*#__PURE__*/ (function () {
                var _ref = _asyncToGenerator(
                  /*#__PURE__*/ regeneratorRuntime.mark(function _callee(
                    event
                  ) {
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                      while (1) {
                        switch ((_context.prev = _context.next)) {
                          case 0:
                            _this2.loadingData = true;
                            _this2.dataFetchError = null;
                            Promise.all(
                              (0,
                              _data_handlers__WEBPACK_IMPORTED_MODULE_5__.fetchCandleData)(
                                name,
                                frequency,
                                CANDLE_DATA_LIMIT
                              ),
                              (0,
                              _data_handlers__WEBPACK_IMPORTED_MODULE_5__.fetchTradeData)()
                            )
                              .then(function (_ref2) {
                                var _ref3 = _slicedToArray(_ref2, 2),
                                  candleData = _ref3[0],
                                  tradeData = _ref3[1];

                                _this2.updateSignalData(candleData);

                                _this2.updateProfitData(tradeData);

                                _this2.loadingData = false;
                              })
                              .catch(function (error) {
                                _this2.loadingData = false;
                                _this2.dataFetchError = error;
                              });
                            if (_this2.active)
                              _this2.active.classList.remove("active");
                            _this2.active = event.currentTarget;

                            _this2.active.classList.add("active");

                          case 6:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee);
                  })
                );

                return function handler(_x) {
                  return _ref.apply(this, arguments);
                };
              })();

              _helpers__WEBPACK_IMPORTED_MODULE_6__.eventRegistry.addEventListener(
                btn,
                "click",
                handler
              );
              return btn;
            }); // if (!this.active) {
            //   // eslint-disable-next-line prefer-destructuring
            //   controls[0].click()
            // }

            controls.forEach(function (control) {
              return root.appendChild(control);
            });
          },
        },
        {
          key: "updateSignalData",
          value: function updateSignalData(data) {
            var signals = (0,
            _helpers__WEBPACK_IMPORTED_MODULE_6__.extractSignalData)(data);
            var lastSignal = signals[signals.length - 1];
            this.dataCharter.setData(data);
            this.signalHighlight.setData(
              lastSignal.timestamp,
              lastSignal.signalType
            );
          },
        },
        {
          key: "updateProfitData",
          value: function updateProfitData(data) {
            this.profitCharter.setProfitData(data);
          },
        },
      ]);

      return SignalsApp;
    })();

    var app = new SignalsApp(document.getElementById("signals-root"));
  })();
  /******/
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yci1kZXZlbG9wbWVudC1lbnYvLi9zcmMvY3J5cHRvL2RhdGEtaGFuZGxlcnMuanMiLCJ3ZWJwYWNrOi8vcnItZGV2ZWxvcG1lbnQtZW52Ly4vc3JjL2NyeXB0by9oZWxwZXJzLmpzIiwid2VicGFjazovL3JyLWRldmVsb3BtZW50LWVudi8uL3NyYy9jcnlwdG8vb2xkZmlsZXMvX21pdGFyLmpzIiwid2VicGFjazovL3JyLWRldmVsb3BtZW50LWVudi8uL3NyYy9jcnlwdG8vc2lnbmFsLmpzIiwid2VicGFjazovL3JyLWRldmVsb3BtZW50LWVudi8uL3NyYy9jcnlwdG8vc2ltZW9uLmpzIiwid2VicGFjazovL3JyLWRldmVsb3BtZW50LWVudi8uL3NyYy9jcnlwdG8vc3R5bGUuY3NzPzUxY2UiLCJ3ZWJwYWNrOi8vcnItZGV2ZWxvcG1lbnQtZW52Ly4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyIsIndlYnBhY2s6Ly9yci1kZXZlbG9wbWVudC1lbnYvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcnItZGV2ZWxvcG1lbnQtZW52L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3JyLWRldmVsb3BtZW50LWVudi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcnItZGV2ZWxvcG1lbnQtZW52L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcnItZGV2ZWxvcG1lbnQtZW52L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcnItZGV2ZWxvcG1lbnQtZW52Ly4vc3JjL2NyeXB0by9pbmRleC5qcyJdLCJuYW1lcyI6WyJJU19ERVYiLCJwcm9jZXNzIiwid2hpdGVsaXN0IiwibWFwIiwiZSIsIm5hbWUiLCJmcmVxdWVuY3kiLCJkZWxheWVkIiwiTWF0aCIsInJvdW5kIiwicmFuZG9tIiwiZmV0Y2hDYW5kbGVEYXRhIiwibGltaXQiLCJQcm9taXNlIiwicmVzb2x2ZSIsImNhbmRsZURhdGEiLCJib2R5IiwiRm9ybURhdGEiLCJhcHBlbmQiLCJmZXRjaCIsImJyYWluYWx5emVkX3dwIiwiYWpheF91cmwiLCJoZWFkZXJzIiwiYWNjZXB0IiwibWV0aG9kIiwibW9kZSIsImNhY2hlIiwiY3JlZGVudGlhbHMiLCJyZWRpcmVjdCIsInJlZmVycmVyUG9saWN5IiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwiZXJyIiwiRXJyb3IiLCJtZXNzYWdlIiwiZmV0Y2hQYWlybGlzdCIsImZldGNoVHJhZGVEYXRhIiwidHJhZGVEYXRhIiwiZXh0cmFjdFNpZ25hbERhdGEiLCJzaWduYWxzIiwiZGF0YUFycmF5IiwiZGF0ZSIsIm1vbWVudCIsImNvbHVtbnMiLCJpbmRleE9mIiwidmFsdWVPZiIsImJ1eSIsInNlbGwiLCJmaWx0ZXIiLCJzaWduYWwiLCJ0aW1lc3RhbXAiLCJzaWduYWxUeXBlIiwiZXZlbnRSZWdpc3RyeSIsImhhbmRsZXJzIiwiTWFwIiwiYWRkRXZlbnRMaXN0ZW5lciIsImVsZW1lbnQiLCJldmVudCIsImZuIiwidGFibGUiLCJoYXMiLCJnZXQiLCJwdXNoIiwic2V0IiwiY2xlYXIiLCJyb290IiwiY2hpbGRyZW4iLCJmb3JFYWNoIiwiT2JqZWN0Iiwia2V5cyIsImhhbmRsZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY29uc29sZSIsImxvZyIsImxlbmd0aCIsIm50RmV0Y2giLCJpbml0RGF0YSIsImluaXRQcm9maXQiLCJpbml0U2lnbmFsIiwiaW5pdFBpY2tlciIsInBhdGgiLCJiYXNlIiwicmVzdCIsImNyZWRzIiwiQXV0aG9yaXphdGlvbiIsImFjY2Vzc190b2tlbiIsInRva2VuIiwicHJvZml0IiwicmVzcCIsImxhc3RTaWduYWwiLCJuYW1lc3BhY2UiLCJpbnRlcnZhbCIsIlNpZ25hbCIsInByb3BzIiwiY2xlYXJJbnRlcnZhbCIsInJlbmRlciIsInNwYW5FbGVtZW50IiwiZWxhcHNlZFNlY29uZHMiLCJEYXRlIiwibm93IiwiZWxhcHNlZE1pbnV0ZXMiLCJmbG9vciIsImVsYXBzZWRIb3VycyIsImVsYXBzZWREYXlzIiwiaW5uZXJIVE1MIiwiY29sb3IiLCJzaWduYWxQYW5lbCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzaWduYWxTVkciLCJjcmVhdGVFbGVtZW50TlMiLCJpZCIsInNldEF0dHJpYnV0ZU5TIiwic2V0QXR0cmlidXRlIiwiYXBwZW5kQ2hpbGQiLCJzaWduYWxESVYiLCJjcmVhdGVFbGVtZW50Iiwic2lnbmFsU1BBTiIsImNsYXNzTGlzdCIsImFkZCIsInNpZ25hbFRJTUUiLCJzZXRJbnRlcnZhbCIsInVwZGF0ZVRpbWUiLCJidW95U3RlbSIsImJ1b3lIZWFkIiwiYnVveUJvZHkiLCJjaXJjbGUxIiwiYW5pbVIxIiwiYW5pbU8xIiwiY2lyY2xlMiIsImFuaW1SMiIsImFuaW1PMiIsImNpcmNsZTMiLCJhbmltUjMiLCJhbmltTzMiLCJJbnN0YWxsVHJpZ2dlciIsImJlZ2luRWxlbWVudCIsInNldFRpbWVvdXQiLCJyZW1vdmVNaWxsaXMiLCJ0aW1lUG9uZGVyIiwidGltZVJhbmdlIiwidmlld0JveFlQYWRkaW5nVG9wIiwidmlld0JveFlQYWRkaW5nQm90dG9tIiwiY2FuZGxlTWluV2lkdGgiLCJzY3JvbGxIZWlnaHQiLCJncmlkU2l6ZVgiLCJncmlkU2l6ZVkiLCJyb3VuZGluZyIsIkNoYXJ0ZXIiLCJyb290RWxlbWVudCIsInNhbXBsZUNvdW50IiwicGFyc2VkRGF0YSIsImxhc3RQb2ludCIsInByb2ZpdERhdGEiLCJkYXRhWCIsImRhdGFYUmFuZ2UiLCJkYXRhWSIsImRhdGFZUmFuZ2UiLCJwcm9maXRYIiwicHJvZml0WFJhbmdlIiwicHJvZml0WSIsInByb2ZpdFlSYW5nZSIsImNhbmRsZUJvdW5kc0ZpZWxkc1RvQ2hlY2siLCJyZWR1Y2UiLCJhY2MiLCJjdXIiLCJ0ZW1wRGF0YSIsInRlbXBSb3ciLCJhY2N1bXVsYXRlZCIsImN1cnJlbnQiLCJpIiwiY2FuZGxlVmFsdWVzIiwiZmllbGQiLCJzb3J0IiwiYSIsImIiLCJ0ZW1wQ2FuZGxlTWluIiwibWluIiwidGVtcENhbmRsZU1heCIsIm1heCIsImNhbmRsZU1pbiIsImNhbmRsZU1heCIsInN0YXJ0VGltZSIsImVuZFRpbWUiLCJvcGVuIiwibG93IiwiaGlnaCIsImNsb3NlIiwic2lnbmFsRGF0YSIsInRlbXBSZXN1bHQiLCJ4IiwicG9zIiwiZGlyZWN0aW9uIiwidm9sdW1lRGF0YSIsInZvbHVtZSIsImRhdGFQb2ludHMiLCJwYXJzZURhdGEiLCJyZW5kZXJEYXRhQ2hhcnQiLCJ0cmFkZXMiLCJjbG9zZV90aW1lc3RhbXAiLCJjbG9zZV9wcm9maXRfcGN0IiwidGVtcEN1bW11bGF0aXZlIiwiY3VtdWxhdGl2ZSIsInRlbXBPYmoiLCJ0ZW1wTWluIiwidGVtcE1heCIsInJlbmRlclByb2ZpdENoYXJ0Iiwid2lkdGgiLCJoZWlnaHQiLCJ5IiwieFJhbmdlIiwieVJhbmdlIiwiZ3JhcGhTVkciLCJ4QXhpcyIsInlBeGlzIiwic2V0RGltZW5zaW9ucyIsImdyaWRHcm91cCIsInJlbGF0aXZlWEdyaWRTaXplIiwicmVsYXRpdmVZR3JpZFNpemUiLCJ0ZW1wVmFsdWVzIiwicG9uZGVyIiwiY2FsY3VsYXRlWFBvaW50cyIsImxvZ2FyaXRobVdpdGhCYXNlIiwidmFsdWUiLCJncmlkVGltZVNwYW4iLCJtaW5pbXVtIiwiYWJzUG9uZGVyIiwicmVsUG9uZGVyIiwic2NhbGUiLCJ0ZW1wUmFuZ2UiLCJsb2cxMCIsInJlbFZhbHVlcyIsImFic1ZhbHVlcyIsInRydW5jIiwibG9nNjAiLCJzdGFydGluZ1BvaW50IiwicG9pbnRzIiwic3RhcnRPZiIsInJlbWFpbmRlciIsImlzb1dlZWtkYXkiLCJuZXdQb2ludCIsImoiLCJzcGxpY2UiLCJwb3AiLCJwb2ludCIsInN1YnRyYWN0IiwiY2FsY3VsYXRlWVBvaW50cyIsInJhbmdlIiwic3RhcnQiLCJ2YWx1ZXMiLCJ0ZW1wTm9ybWFsaXplciIsInYiLCJkaXN0YW5jZSIsImRlY2ltYWxzIiwiTnVtYmVyIiwicGFyc2VGbG9hdCIsInRvRml4ZWQiLCJjZWlsIiwieFBvaW50cyIsInhTY2FsZSIsInlQb2ludHMiLCJmb250U2l6ZSIsInhSYXRpbyIsInlSYXRpbyIsInhWYWwiLCJ0ZW1wR3JpZExpbmUiLCJnZXRGb3JtYXRGcm9tU2NhbGUiLCJ0ZW1wR3JpZFRleHQiLCJmb3JtYXQiLCJjYW5kbGVHcm91cCIsImNhbmRsZSIsImNhbmRsZVNwYW4iLCJjYW5kbGVIZWlnaHQiLCJhYnMiLCJ0ZW1wQ2FuZGxlIiwidGVtcFdpY2siLCJ2b2x1bWVHcm91cCIsIm1heFZvbHVtZSIsInRlbXBWb2x1bWUiLCJzaWduYWxTaXplIiwic2lnbmFsT2Zmc2V0IiwicGF0aFdpZHRoIiwicGF0aEhlaWdodCIsInBhdGhMZWZ0IiwicGF0aFRvcCIsInRlbXBTaWduYWwiLCJ0ZW1wUmluZyIsInRlbXBNYXNrIiwibWFza1JlY3QiLCJtYXNrQ2lyY2xlTGVmdCIsIm1hc2tDaXJjbGVSaWdodCIsInNpZ25hbFJhdGlvIiwic2lnbmFsR3JvdXAiLCJkZWZzIiwic2lnbmFsR3JhZGllbnRQb3NpdGl2ZSIsImJlZ2luUCIsImVuZFAiLCJzaWduYWxHcmFkaWVudE5lZ2F0aXZlIiwiYmVnaW5OIiwiZW5kTiIsIm1pZFgiLCJtaWRZIiwiY3JlYXRlU2lnbmFsUGF0aCIsInNpZ25hbExpbmUiLCJuZXh0WCIsInNpZ25hbEFyZWEiLCJwcm9maXRHcm91cCIsImVuZCIsImxpbmUiLCJuZWciLCJwcm9maXQwTGluZSIsInBvc1BhdGgiLCJuZWdQYXRoIiwidGVtcFBhdGgiLCJzdmciLCJ4U3BhbiIsInlTcGFuIiwic2V0RGF0YVZpZXdCb3giLCJ4QXhpc1JhdGlvIiwieUF4aXNSYXRpbyIsImdlbmVyYXRlR3JpZCIsImdlbmVyYXRlQ2FuZGxlcyIsImdlbmVyYXRlVm9sdW1lcyIsImdlbmVyYXRlU2lnbmFscyIsImNoYXJ0QXJlYSIsInNjcm9sbFRvIiwic2V0UHJvZml0Vmlld0JveCIsImdlbmVyYXRlUHJvZml0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiZ2VuZXJhdGVTVkdzIiwicG9wdWxhdGVEYXRhU1ZHIiwicG9wdWxhdGVQcm9maXRTVkciLCJkYXRhQ2hhcnRlciIsInByb2ZpdENoYXJ0ZXIiLCJDQU5ETEVfREFUQV9MSU1JVCIsIlNpZ25hbHNBcHAiLCJodG1sRWxlbWVudCIsInJvb3RIVE1MIiwic2lnbmFsSGlnaGxpZ2h0IiwicGFpckxpc3QiLCJmcmVxdWVuY3lMaXN0IiwiYWN0aXZlUGFpciIsImFjdGl2ZUZyZXF1ZW5jeSIsImluaXRpYWxpemUiLCJzZXRQYWlycyIsInBhaXJzIiwiZnJlcXVlbmNpZXMiLCJjb250cm9scyIsImJ0biIsIm5hbWVTcGFuIiwiZGVsYXllZFNwYW4iLCJ0b29sdGlwIiwibG9hZGluZ0RhdGEiLCJkYXRhRmV0Y2hFcnJvciIsImFsbCIsInVwZGF0ZVNpZ25hbERhdGEiLCJ1cGRhdGVQcm9maXREYXRhIiwiY2F0Y2giLCJlcnJvciIsImFjdGl2ZSIsInJlbW92ZSIsImN1cnJlbnRUYXJnZXQiLCJjb250cm9sIiwic2V0RGF0YSIsInNldFByb2ZpdERhdGEiLCJhcHAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLE1BQU0sR0FBR0MsYUFBQSxLQUF5QixhQUF4QztBQUVBLElBQU1DLFNBQVMsR0FBRyxDQUNoQixVQURnQixFQUVoQixVQUZnQixFQUdoQixXQUhnQixFQUloQixXQUpnQixFQUtoQixXQUxnQixFQU1oQixXQU5nQixFQU9oQixVQVBnQixFQVFoQixVQVJnQixFQVNoQixXQVRnQixFQVVoQixZQVZnQixFQVdoQixXQVhnQixFQVloQixXQVpnQixFQWFoQixXQWJnQixFQWNoQixVQWRnQixFQWVoQixZQWZnQixFQWdCaEIsVUFoQmdCLEVBaUJoQixVQWpCZ0IsRUFrQmhCLFVBbEJnQixFQW1CaEIsYUFuQmdCLEVBb0JoQixVQXBCZ0IsRUFxQmhCQyxHQXJCZ0IsQ0FxQlosVUFBQUMsQ0FBQztBQUFBLFNBQUs7QUFDVkMsUUFBSSxFQUFFRCxDQURJO0FBRVZFLGFBQVMsRUFBRSxJQUZEO0FBR1ZDLFdBQU8sRUFBRSxDQUFDLENBQUNDLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsRUFBWDtBQUhELEdBQUw7QUFBQSxDQXJCVyxDQUFsQjtBQTJCTyxJQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNOLElBQUQsRUFBT0MsU0FBUCxFQUFrQk0sS0FBbEIsRUFBNEI7QUFDekQsTUFBSVosTUFBSixFQUFZLE9BQU9hLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQkMsNkNBQWhCLENBQVA7QUFFWixNQUFNQyxJQUFJLEdBQUcsSUFBSUMsUUFBSixFQUFiO0FBQ0FELE1BQUksQ0FBQ0UsTUFBTCxDQUFZLFFBQVosRUFBc0IsTUFBdEI7QUFDQUYsTUFBSSxDQUFDRSxNQUFMLENBQVksTUFBWixFQUFvQmIsSUFBcEI7QUFDQVcsTUFBSSxDQUFDRSxNQUFMLENBQVksV0FBWixFQUF5QlosU0FBekI7QUFDQVUsTUFBSSxDQUFDRSxNQUFMLENBQVksT0FBWixFQUFxQk4sS0FBckI7QUFDQSxTQUFPTyxLQUFLLENBQUNDLGNBQWMsQ0FBQ0MsUUFBaEIsRUFBMEI7QUFDcENDLFdBQU8sRUFBRTtBQUNQQyxZQUFNLEVBQUU7QUFERCxLQUQyQjtBQUlwQ0MsVUFBTSxFQUFFLE1BSjRCO0FBS3BDQyxRQUFJLEVBQUUsTUFMOEI7QUFNcENDLFNBQUssRUFBRSxVQU42QjtBQU9wQ0MsZUFBVyxFQUFFLGFBUHVCO0FBUXBDQyxZQUFRLEVBQUUsUUFSMEI7QUFTcENDLGtCQUFjLEVBQUUsYUFUb0I7QUFVcENiLFFBQUksRUFBSkE7QUFWb0MsR0FBMUIsQ0FBTCxDQVlKYyxJQVpJLENBWUMsVUFBQUMsR0FBRztBQUFBLFdBQUlBLEdBQUcsQ0FBQ0MsSUFBSixFQUFKO0FBQUEsR0FaSixFQWFKRixJQWJJLENBY0gsVUFBQUcsSUFBSTtBQUFBLFdBQUlBLElBQUo7QUFBQSxHQWRELEVBZUgsVUFBQUMsR0FBRyxFQUFJO0FBQ0wsVUFBTSxJQUFJQyxLQUFKLGdHQUNvRkQsR0FBRyxDQUFDRSxPQUR4RixFQUFOO0FBR0QsR0FuQkUsQ0FBUDtBQXFCRCxDQTdCTTtBQStCQSxJQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07QUFDakMsTUFBSXJDLE1BQUosRUFBWSxPQUFPYSxPQUFPLENBQUNDLE9BQVIsQ0FBZ0JaLFNBQWhCLENBQVA7QUFDWixNQUFNYyxJQUFJLEdBQUcsSUFBSUMsUUFBSixFQUFiO0FBQ0FELE1BQUksQ0FBQ0UsTUFBTCxDQUFZLFFBQVosRUFBc0IsT0FBdEI7QUFDQSxTQUFPQyxLQUFLLENBQUNDLGNBQWMsQ0FBQ0MsUUFBaEIsRUFBMEI7QUFDcENDLFdBQU8sRUFBRTtBQUNQQyxZQUFNLEVBQUU7QUFERCxLQUQyQjtBQUlwQ0MsVUFBTSxFQUFFLE1BSjRCO0FBS3BDQyxRQUFJLEVBQUUsTUFMOEI7QUFNcENDLFNBQUssRUFBRSxVQU42QjtBQU9wQ0MsZUFBVyxFQUFFLGFBUHVCO0FBUXBDQyxZQUFRLEVBQUUsUUFSMEI7QUFTcENDLGtCQUFjLEVBQUUsYUFUb0I7QUFVcENiLFFBQUksRUFBSkE7QUFWb0MsR0FBMUIsQ0FBTCxDQVlKYyxJQVpJLENBWUMsVUFBQUMsR0FBRztBQUFBLFdBQUlBLEdBQUcsQ0FBQ0MsSUFBSixFQUFKO0FBQUEsR0FaSixFQWFKRixJQWJJLENBY0gsVUFBQUcsSUFBSTtBQUFBLFdBQUlBLElBQUo7QUFBQSxHQWRELEVBZUgsVUFBQUMsR0FBRyxFQUFJO0FBQ0wsVUFBTSxJQUFJQyxLQUFKLGdHQUNvRkQsR0FBRyxDQUFDRSxPQUR4RixFQUFOO0FBR0QsR0FuQkUsQ0FBUDtBQXFCRCxDQXpCTTtBQTJCQSxJQUFNRSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQU07QUFDbEMsTUFBSXRDLE1BQUosRUFBWSxPQUFPYSxPQUFPLENBQUNDLE9BQVIsQ0FBZ0J5Qiw0Q0FBaEIsQ0FBUDtBQUNaLE1BQU12QixJQUFJLEdBQUcsSUFBSUMsUUFBSixFQUFiO0FBQ0FELE1BQUksQ0FBQ0UsTUFBTCxDQUFZLFFBQVosRUFBc0IsUUFBdEI7QUFDQSxTQUFPQyxLQUFLLENBQUNDLGNBQWMsQ0FBQ0MsUUFBaEIsRUFBMEI7QUFDcENDLFdBQU8sRUFBRTtBQUNQQyxZQUFNLEVBQUU7QUFERCxLQUQyQjtBQUlwQ0MsVUFBTSxFQUFFLE1BSjRCO0FBS3BDQyxRQUFJLEVBQUUsTUFMOEI7QUFNcENDLFNBQUssRUFBRSxVQU42QjtBQU9wQ0MsZUFBVyxFQUFFLGFBUHVCO0FBUXBDQyxZQUFRLEVBQUUsUUFSMEI7QUFTcENDLGtCQUFjLEVBQUUsYUFUb0I7QUFVcENiLFFBQUksRUFBSkE7QUFWb0MsR0FBMUIsQ0FBTCxDQVlKYyxJQVpJLENBWUMsVUFBQUMsR0FBRztBQUFBLFdBQUlBLEdBQUcsQ0FBQ0MsSUFBSixFQUFKO0FBQUEsR0FaSixFQWFKRixJQWJJLENBY0gsVUFBQUcsSUFBSTtBQUFBLFdBQUlBLElBQUo7QUFBQSxHQWRELEVBZUgsVUFBQUMsR0FBRyxFQUFJO0FBQ0wsVUFBTSxJQUFJQyxLQUFKLGdHQUNvRkQsR0FBRyxDQUFDRSxPQUR4RixFQUFOO0FBR0QsR0FuQkUsQ0FBUDtBQXFCRCxDQXpCTSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0ZQO0FBRU8sSUFBTUksaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFBekIsVUFBVSxFQUFJO0FBQzdDLE1BQU0wQixPQUFPLEdBQUcxQixVQUFVLENBQUNrQixJQUFYLENBQ2I5QixHQURhLENBQ1QsVUFBQXVDLFNBQVM7QUFBQSxXQUFLO0FBQ2pCQyxVQUFJLEVBQUVDLE1BQU0sQ0FBQ0YsU0FBUyxDQUFDM0IsVUFBVSxDQUFDOEIsT0FBWCxDQUFtQkMsT0FBbkIsQ0FBMkIsTUFBM0IsQ0FBRCxDQUFWLENBQU4sQ0FBc0RDLE9BQXRELEVBRFc7QUFFakJDLFNBQUcsRUFBRU4sU0FBUyxDQUFDM0IsVUFBVSxDQUFDOEIsT0FBWCxDQUFtQkMsT0FBbkIsQ0FBMkIsS0FBM0IsQ0FBRCxDQUZHO0FBR2pCRyxVQUFJLEVBQUVQLFNBQVMsQ0FBQzNCLFVBQVUsQ0FBQzhCLE9BQVgsQ0FBbUJDLE9BQW5CLENBQTJCLE1BQTNCLENBQUQ7QUFIRSxLQUFMO0FBQUEsR0FEQSxFQU1iSSxNQU5hLENBTU4sVUFBQTlDLENBQUM7QUFBQSxXQUFJQSxDQUFDLENBQUM0QyxHQUFGLElBQVM1QyxDQUFDLENBQUM2QyxJQUFmO0FBQUEsR0FOSyxFQU9iOUMsR0FQYSxDQU9ULFVBQUFnRCxNQUFNO0FBQUEsV0FBSztBQUNkQyxlQUFTLEVBQUVELE1BQU0sQ0FBQ1IsSUFESjtBQUVkVSxnQkFBVSxFQUFFRixNQUFNLENBQUNILEdBQVAsR0FBYSxLQUFiLEdBQXFCO0FBRm5CLEtBQUw7QUFBQSxHQVBHLENBQWhCO0FBV0EsU0FBT1AsT0FBUDtBQUNELENBYk07QUFlQSxJQUFNYSxhQUFhLEdBQUksWUFBTTtBQUNsQyxNQUFNQyxRQUFRLEdBQUcsSUFBSUMsR0FBSixFQUFqQjtBQUNBLFNBQU87QUFDTEMsb0JBQWdCLEVBQUUsMEJBQUNDLE9BQUQsRUFBVUMsS0FBVixFQUFpQkMsRUFBakIsRUFBd0I7QUFDeEMsVUFBTUMsS0FBSyxHQUFHTixRQUFRLENBQUNPLEdBQVQsQ0FBYUosT0FBYixJQUF3QkgsUUFBUSxDQUFDUSxHQUFULENBQWFMLE9BQWIsQ0FBeEIsR0FBZ0QsRUFBOUQ7QUFDQUcsV0FBSyxDQUFDRixLQUFELENBQUwsR0FBZUUsS0FBSyxDQUFDRixLQUFELENBQUwsSUFBZ0IsRUFBL0I7QUFDQUUsV0FBSyxDQUFDRixLQUFELENBQUwsQ0FBYUssSUFBYixDQUFrQkosRUFBbEI7QUFDQUwsY0FBUSxDQUFDVSxHQUFULENBQWFQLE9BQWIsRUFBc0JHLEtBQXRCO0FBQ0FILGFBQU8sQ0FBQ0QsZ0JBQVIsQ0FBeUJFLEtBQXpCLEVBQWdDQyxFQUFoQztBQUNELEtBUEk7QUFRTE0sU0FBSyxFQUFFLGVBQUFDLElBQUksRUFBSTtBQUNiOztBQUFDLHlCQUFJQSxJQUFJLENBQUNDLFFBQVQsRUFBbUJDLE9BQW5CLENBQTJCLFVBQUFqRSxDQUFDLEVBQUk7QUFDL0IsWUFBSW1ELFFBQVEsQ0FBQ08sR0FBVCxDQUFhMUQsQ0FBYixDQUFKLEVBQXFCO0FBQ25CLGNBQU15RCxLQUFLLEdBQUdOLFFBQVEsQ0FBQ1EsR0FBVCxDQUFhM0QsQ0FBYixDQUFkO0FBQ0FrRSxnQkFBTSxDQUFDQyxJQUFQLENBQVlWLEtBQVosRUFBbUJRLE9BQW5CLENBQTJCLFVBQUFWLEtBQUssRUFBSTtBQUNsQ0UsaUJBQUssQ0FBQ0YsS0FBRCxDQUFMLENBQWFVLE9BQWIsQ0FBcUIsVUFBQUcsT0FBTyxFQUFJO0FBQzlCcEUsZUFBQyxDQUFDcUUsbUJBQUYsQ0FBc0JkLEtBQXRCLEVBQTZCYSxPQUE3QjtBQUNBRSxxQkFBTyxDQUFDQyxHQUFSLENBQVksaUJBQVosRUFBK0J2RSxDQUEvQjtBQUNELGFBSEQ7QUFJRCxXQUxEO0FBTUQ7O0FBQ0QsWUFBSUEsQ0FBQyxDQUFDZ0UsUUFBRixDQUFXUSxNQUFmLEVBQXVCO0FBQ3JCOztBQUFDLDZCQUFJeEUsQ0FBQyxDQUFDZ0UsUUFBTixFQUFnQkMsT0FBaEIsQ0FBd0JmLGFBQWEsQ0FBQ1ksS0FBdEM7QUFDRjtBQUNGLE9BYkE7O0FBY0QsVUFBSVgsUUFBUSxDQUFDTyxHQUFULENBQWFLLElBQWIsQ0FBSixFQUF3QjtBQUN0QixZQUFNTixLQUFLLEdBQUdOLFFBQVEsQ0FBQ1EsR0FBVCxDQUFhSSxJQUFiLENBQWQ7QUFDQUcsY0FBTSxDQUFDQyxJQUFQLENBQVlWLEtBQVosRUFBbUJRLE9BQW5CLENBQTJCLFVBQUFWLEtBQUssRUFBSTtBQUNsQ0UsZUFBSyxDQUFDRixLQUFELENBQUwsQ0FBYVUsT0FBYixDQUFxQixVQUFBRyxPQUFPLEVBQUk7QUFDOUJMLGdCQUFJLENBQUNNLG1CQUFMLENBQXlCZCxLQUF6QixFQUFnQ2EsT0FBaEM7QUFDRCxXQUZEO0FBR0QsU0FKRDtBQUtEO0FBQ0Y7QUEvQkksR0FBUDtBQWlDRCxDQW5DNEIsRUFBdEIsQzs7Ozs7Ozs7Ozs7Ozs7QUNqQlA7O0FBQ0E7O0FBQ0E7O0FBQ0E7QUFDQTtBQUFDO0FBQUEscUVBQUMsaUJBQWdCSyxPQUFoQixFQUF5QkMsUUFBekIsRUFBbUNDLFVBQW5DLEVBQStDQyxVQUEvQyxFQUEyREMsVUFBM0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ005RCxpQkFETixHQUNjLFNBQVJBLEtBQVEsQ0FBQytELElBQUQsRUFBbUI7QUFDL0Isa0JBQU1DLElBQUksR0FBRywrQ0FBYjs7QUFEK0IsZ0RBQVRDLElBQVM7QUFBVEEsb0JBQVM7QUFBQTs7QUFFL0IscUJBQU9QLE9BQU8sTUFBUCxVQUFRTSxJQUFJLEdBQUdELElBQWYsU0FBd0JFLElBQXhCLEVBQVA7QUFDRCxhQUpEOztBQU1NQyxpQkFOTixHQU1jLDhCQU5kO0FBQUE7QUFBQSxtQkFPb0JsRSxLQUFLLENBQUMsY0FBRCxFQUFpQjtBQUN4Q0ssb0JBQU0sRUFBRSxNQURnQztBQUV4Q0YscUJBQU8sRUFBRTtBQUNQZ0UsNkJBQWEsa0JBQVdELEtBQVgsQ0FETixDQUVQOztBQUZPLGVBRitCO0FBTXhDMUQseUJBQVcsRUFBRTtBQU4yQixhQUFqQixDQUFMLENBUWpCRyxJQVJpQixDQVFaLFVBQUFDLEdBQUc7QUFBQSxxQkFBSUEsR0FBRyxDQUFDQyxJQUFKLEVBQUo7QUFBQSxhQVJTLEVBU2pCRixJQVRpQixDQVNaLFVBQUFHLElBQUk7QUFBQSxxQkFBSUEsSUFBSSxDQUFDc0QsWUFBVDtBQUFBLGFBVFEsQ0FQcEI7O0FBQUE7QUFPTUMsaUJBUE47QUFBQTtBQUFBLG1CQWtCbUJyRSxLQUFLLENBQUMsc0RBQUQsRUFBeUQ7QUFDL0VHLHFCQUFPLEVBQUU7QUFDUGdFLDZCQUFhLG1CQUFZRSxLQUFaO0FBRE47QUFEc0UsYUFBekQsQ0FBTCxDQUloQjFELElBSmdCLENBSVgsVUFBQUMsR0FBRztBQUFBLHFCQUFJQSxHQUFHLENBQUNDLElBQUosRUFBSjtBQUFBLGFBSlEsQ0FsQm5COztBQUFBO0FBa0JNQyxnQkFsQk47QUFBQTtBQUFBLG1CQXdCcUJkLEtBQUssQ0FBQyxTQUFELEVBQVk7QUFDcENHLHFCQUFPLEVBQUU7QUFDUGdFLDZCQUFhLG1CQUFZRSxLQUFaO0FBRE47QUFEMkIsYUFBWixDQUFMLENBSWxCMUQsSUFKa0IsQ0FJYixVQUFBQyxHQUFHO0FBQUEscUJBQUlBLEdBQUcsQ0FBQ0MsSUFBSixFQUFKO0FBQUEsYUFKVSxDQXhCckI7O0FBQUE7QUF3Qk15RCxrQkF4Qk47QUFBQTtBQUFBLG1CQThCd0J0RSxLQUFLLENBQUMsWUFBRCxFQUFlO0FBQzFDRyxxQkFBTyxFQUFFO0FBQ1BnRSw2QkFBYSxtQkFBWUUsS0FBWjtBQUROO0FBRGlDLGFBQWYsQ0FBTCxDQUtyQjFELElBTHFCLENBS2hCLFVBQUFDLEdBQUc7QUFBQSxxQkFBSUEsR0FBRyxDQUFDQyxJQUFKLEVBQUo7QUFBQSxhQUxhLEVBTXJCRixJQU5xQixDQU1oQixVQUFBNEQsSUFBSTtBQUFBLHFCQUNSQSxJQUFJLENBQUN4RixTQUFMLENBQWVDLEdBQWYsQ0FBbUIsVUFBQUMsQ0FBQztBQUFBLHVCQUFLO0FBQ3ZCQyxzQkFBSSxFQUFFRCxDQURpQjtBQUV2QkUsMkJBQVMsRUFBRSxJQUZZO0FBR3ZCQyx5QkFBTyxFQUFFLENBQUMsQ0FBQ0MsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxFQUFYO0FBSFksaUJBQUw7QUFBQSxlQUFwQixDQURRO0FBQUEsYUFOWSxDQTlCeEI7O0FBQUE7QUE4Qk1SLHFCQTlCTjtBQTRDTXVDLG1CQTVDTixHQTRDZ0JSLElBQUksQ0FBQ0EsSUFBTCxDQUNiOUIsR0FEYSxDQUNULFVBQUF1QyxTQUFTO0FBQUEscUJBQUs7QUFDakJDLG9CQUFJLEVBQUVDLE1BQU0sQ0FBQ0YsU0FBUyxDQUFDVCxJQUFJLENBQUNZLE9BQUwsQ0FBYUMsT0FBYixDQUFxQixNQUFyQixDQUFELENBQVYsQ0FBTixDQUFnREMsT0FBaEQsRUFEVztBQUVqQkMsbUJBQUcsRUFBRU4sU0FBUyxDQUFDVCxJQUFJLENBQUNZLE9BQUwsQ0FBYUMsT0FBYixDQUFxQixLQUFyQixDQUFELENBRkc7QUFHakJHLG9CQUFJLEVBQUVQLFNBQVMsQ0FBQ1QsSUFBSSxDQUFDWSxPQUFMLENBQWFDLE9BQWIsQ0FBcUIsTUFBckIsQ0FBRDtBQUhFLGVBQUw7QUFBQSxhQURBLEVBTWJJLE1BTmEsQ0FNTixVQUFBOUMsQ0FBQztBQUFBLHFCQUFJQSxDQUFDLENBQUM0QyxHQUFGLElBQVM1QyxDQUFDLENBQUM2QyxJQUFmO0FBQUEsYUFOSyxFQU9iOUMsR0FQYSxDQU9ULFVBQUFnRCxNQUFNO0FBQUEscUJBQUs7QUFDZEMseUJBQVMsRUFBRUQsTUFBTSxDQUFDUixJQURKO0FBRWRVLDBCQUFVLEVBQUVGLE1BQU0sQ0FBQ0gsR0FBUCxHQUFhLEtBQWIsR0FBcUI7QUFGbkIsZUFBTDtBQUFBLGFBUEcsQ0E1Q2hCO0FBdURNMkMsc0JBdkROLEdBdURtQmxELE9BQU8sQ0FBQ0EsT0FBTyxDQUFDbUMsTUFBUixHQUFpQixDQUFsQixDQXZEMUIsRUF5REE7QUFDQTtBQUNBO0FBQ0E7O0FBNURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUQ7O0FBQUE7QUFBQTtBQUFBO0FBQUEsS0E4REN6RCxLQTlERCxDQStEQztBQUNBO0FBQ0E7QUFDQTtBQWxFRCxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKRDtBQUVBLElBQU15RSxTQUFTLEdBQUcsNEJBQWxCO0FBQ0EsSUFBSUMsUUFBUSxHQUFHLElBQWY7QUFFTyxJQUFNQyxNQUFiO0FBQ0Usa0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFDakIsU0FBSzNDLFNBQUwsR0FBaUIsSUFBakI7QUFDQSxTQUFLQyxVQUFMLEdBQWtCLEVBQWxCO0FBQ0Q7O0FBSkg7QUFBQTtBQUFBLFdBTUUsaUJBQVFELFNBQVIsRUFBbUJDLFVBQW5CLEVBQStCO0FBQzdCLFdBQUtELFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0EsV0FBS0MsVUFBTCxHQUFrQkEsVUFBbEI7QUFDQTJDLG1CQUFhLENBQUNILFFBQUQsQ0FBYjtBQUNBLFdBQUtJLE1BQUw7QUFDRDtBQVhIO0FBQUE7QUFBQSxXQWFFLG9CQUFXQyxXQUFYLEVBQXdCO0FBQ3RCLFVBQUlDLGNBQWMsR0FBRzNGLElBQUksQ0FBQ0MsS0FBTCxDQUNuQixDQUFDbUMsTUFBTSxDQUFDd0QsSUFBSSxDQUFDQyxHQUFMLEVBQUQsQ0FBTixDQUFtQnRELE9BQW5CLEtBQStCLEtBQUtLLFNBQXJDLElBQWtELElBRC9CLENBQXJCO0FBR0EsVUFBSWtELGNBQWMsR0FBRzlGLElBQUksQ0FBQytGLEtBQUwsQ0FBV0osY0FBYyxHQUFHLEVBQTVCLENBQXJCO0FBQ0EsVUFBSUssWUFBWSxHQUFHaEcsSUFBSSxDQUFDK0YsS0FBTCxDQUFXRCxjQUFjLEdBQUcsRUFBNUIsQ0FBbkI7QUFDQSxVQUFNRyxXQUFXLEdBQUdqRyxJQUFJLENBQUMrRixLQUFMLENBQVdDLFlBQVksR0FBRyxFQUExQixDQUFwQjtBQUNBTCxvQkFBYyxJQUFJRyxjQUFjLEdBQUcsRUFBbkM7QUFDQUEsb0JBQWMsSUFBSUUsWUFBWSxHQUFHLEVBQWpDO0FBQ0FBLGtCQUFZLElBQUlDLFdBQVcsR0FBRyxFQUE5QixDQVRzQixDQVd0Qjs7QUFDQVAsaUJBQVcsQ0FBQ1EsU0FBWixhQUEyQkQsV0FBVyxhQUFNQSxXQUFOLFVBQXdCLEVBQTlELFNBQ0VELFlBQVksYUFBTUEsWUFBTixVQUF5QixFQUR2QyxTQUVHRixjQUFjLGFBQU1BLGNBQU4sVUFBMkIsRUFGNUMsU0FHRUgsY0FBYyxhQUFNQSxjQUFOLFVBQTJCLEVBSDNDO0FBS0Q7QUE5Qkg7QUFBQTtBQUFBLFdBZ0NFLGtCQUFTO0FBQUE7O0FBQ1AsVUFBTVEsS0FBSyxHQUFHLEtBQUt0RCxVQUFMLEtBQW9CLEtBQXBCLEdBQTRCLFVBQTVCLEdBQXlDLFVBQXZEO0FBRUEsVUFBTXVELFdBQVcsR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLGNBQXhCLENBQXBCO0FBQ0FGLGlCQUFXLENBQUNGLFNBQVosR0FBd0IsRUFBeEI7QUFDQSxVQUFNSyxTQUFTLEdBQUdGLFFBQVEsQ0FBQ0csZUFBVCxDQUF5QnBCLFNBQXpCLEVBQW9DLEtBQXBDLENBQWxCO0FBQ0FtQixlQUFTLENBQUNFLEVBQVYsR0FBZSxZQUFmO0FBQ0FGLGVBQVMsQ0FBQ0csY0FBVixDQUF5QixJQUF6QixFQUErQixTQUEvQixFQUEwQyxLQUExQztBQUNBSCxlQUFTLENBQUNJLFlBQVYsQ0FBdUIsT0FBdkIsRUFBZ0MsNEJBQWhDO0FBQ0FKLGVBQVMsQ0FBQ0csY0FBVixDQUF5QixJQUF6QixFQUErQixTQUEvQixFQUEwQyxtQkFBMUM7QUFDQUgsZUFBUyxDQUFDRyxjQUFWLENBQXlCLElBQXpCLEVBQStCLHFCQUEvQixFQUFzRCxNQUF0RDtBQUNBTixpQkFBVyxDQUFDUSxXQUFaLENBQXdCTCxTQUF4QjtBQUVBLFVBQU1NLFNBQVMsR0FBR1IsUUFBUSxDQUFDUyxhQUFULENBQXVCLEtBQXZCLENBQWxCO0FBQ0FELGVBQVMsQ0FBQ0osRUFBVixHQUFlLFlBQWY7QUFDQSxVQUFNTSxVQUFVLEdBQUdWLFFBQVEsQ0FBQ1MsYUFBVCxDQUF1QixNQUF2QixDQUFuQjtBQUNBQyxnQkFBVSxDQUFDTixFQUFYLEdBQWdCLGFBQWhCO0FBQ0FNLGdCQUFVLENBQUNiLFNBQVgsR0FBdUIsS0FBS3JELFVBQTVCO0FBQ0FrRSxnQkFBVSxDQUFDQyxTQUFYLENBQXFCQyxHQUFyQixDQUF5QmQsS0FBekI7QUFDQVUsZUFBUyxDQUFDRCxXQUFWLENBQXNCRyxVQUF0QjtBQUNBLFVBQU1HLFVBQVUsR0FBR2IsUUFBUSxDQUFDUyxhQUFULENBQXVCLE1BQXZCLENBQW5CO0FBQ0FJLGdCQUFVLENBQUNULEVBQVgsR0FBZ0IsYUFBaEI7QUFDQVMsZ0JBQVUsQ0FBQ0YsU0FBWCxDQUFxQkMsR0FBckIsQ0FBeUJkLEtBQXpCO0FBQ0FVLGVBQVMsQ0FBQ0QsV0FBVixDQUFzQk0sVUFBdEI7QUFDQWQsaUJBQVcsQ0FBQ1EsV0FBWixDQUF3QkMsU0FBeEI7QUFFQXhCLGNBQVEsR0FBRzhCLFdBQVcsQ0FBQztBQUFBLGVBQU0sS0FBSSxDQUFDQyxVQUFMLENBQWdCRixVQUFoQixDQUFOO0FBQUEsT0FBRCxFQUFvQyxJQUFwQyxDQUF0QjtBQUVBLFVBQU1HLFFBQVEsR0FBR2hCLFFBQVEsQ0FBQ0csZUFBVCxDQUF5QnBCLFNBQXpCLEVBQW9DLE1BQXBDLENBQWpCO0FBQ0FpQyxjQUFRLENBQUNMLFNBQVQsQ0FBbUJDLEdBQW5CLENBQXVCLFdBQXZCO0FBQ0FJLGNBQVEsQ0FBQ1gsY0FBVCxDQUF3QixJQUF4QixFQUE4QixHQUE5QixFQUFtQywyQ0FBbkM7QUFDQVcsY0FBUSxDQUFDTCxTQUFULENBQW1CQyxHQUFuQixDQUF1QmQsS0FBdkI7QUFDQUksZUFBUyxDQUFDSyxXQUFWLENBQXNCUyxRQUF0QjtBQUNBLFVBQU1DLFFBQVEsR0FBR2pCLFFBQVEsQ0FBQ0csZUFBVCxDQUF5QnBCLFNBQXpCLEVBQW9DLFFBQXBDLENBQWpCO0FBQ0FrQyxjQUFRLENBQUNOLFNBQVQsQ0FBbUJDLEdBQW5CLENBQXVCLFdBQXZCO0FBQ0FLLGNBQVEsQ0FBQ1osY0FBVCxDQUF3QixJQUF4QixFQUE4QixJQUE5QixFQUFvQyxFQUFwQztBQUNBWSxjQUFRLENBQUNaLGNBQVQsQ0FBd0IsSUFBeEIsRUFBOEIsSUFBOUIsRUFBb0MsRUFBcEM7QUFDQVksY0FBUSxDQUFDWixjQUFULENBQXdCLElBQXhCLEVBQThCLEdBQTlCLEVBQW1DLENBQW5DO0FBQ0FZLGNBQVEsQ0FBQ04sU0FBVCxDQUFtQkMsR0FBbkIsQ0FBdUJkLEtBQXZCO0FBQ0FJLGVBQVMsQ0FBQ0ssV0FBVixDQUFzQlUsUUFBdEI7QUFDQSxVQUFNQyxRQUFRLEdBQUdsQixRQUFRLENBQUNHLGVBQVQsQ0FBeUJwQixTQUF6QixFQUFvQyxNQUFwQyxDQUFqQjtBQUNBbUMsY0FBUSxDQUFDUCxTQUFULENBQW1CQyxHQUFuQixDQUF1QixXQUF2QjtBQUNBTSxjQUFRLENBQUNiLGNBQVQsQ0FBd0IsSUFBeEIsRUFBOEIsTUFBOUIsRUFBc0MsaUJBQXRDO0FBQ0FhLGNBQVEsQ0FBQ2IsY0FBVCxDQUNFLElBREYsRUFFRSxHQUZGLEVBR0U7QUFDQSxpT0FKRjtBQU1BYSxjQUFRLENBQUNQLFNBQVQsQ0FBbUJDLEdBQW5CLENBQXVCZCxLQUF2QjtBQUNBSSxlQUFTLENBQUNLLFdBQVYsQ0FBc0JXLFFBQXRCLEVBbERPLENBb0RQOztBQUNBLFVBQU1DLE9BQU8sR0FBR25CLFFBQVEsQ0FBQ0csZUFBVCxDQUF5QnBCLFNBQXpCLEVBQW9DLFFBQXBDLENBQWhCO0FBQ0FvQyxhQUFPLENBQUNSLFNBQVIsQ0FBa0JDLEdBQWxCLENBQXNCLGFBQXRCO0FBQ0FPLGFBQU8sQ0FBQ2QsY0FBUixDQUF1QixJQUF2QixFQUE2QixJQUE3QixFQUFtQyxFQUFuQztBQUNBYyxhQUFPLENBQUNkLGNBQVIsQ0FBdUIsSUFBdkIsRUFBNkIsSUFBN0IsRUFBbUMsRUFBbkM7QUFDQWMsYUFBTyxDQUFDZCxjQUFSLENBQXVCLElBQXZCLEVBQTZCLEdBQTdCLEVBQWtDLENBQWxDO0FBQ0FjLGFBQU8sQ0FBQ1IsU0FBUixDQUFrQkMsR0FBbEIsQ0FBc0JkLEtBQXRCO0FBQ0FJLGVBQVMsQ0FBQ0ssV0FBVixDQUFzQlksT0FBdEI7QUFDQSxVQUFNQyxNQUFNLEdBQUdwQixRQUFRLENBQUNHLGVBQVQsQ0FBeUJwQixTQUF6QixFQUFvQyxTQUFwQyxDQUFmO0FBQ0FxQyxZQUFNLENBQUNoQixFQUFQLEdBQVksVUFBWjtBQUNBZ0IsWUFBTSxDQUFDZixjQUFQLENBQXNCLElBQXRCLEVBQTRCLGVBQTVCLEVBQTZDLEdBQTdDO0FBQ0FlLFlBQU0sQ0FBQ2YsY0FBUCxDQUFzQixJQUF0QixFQUE0QixlQUE1QixFQUE2QyxLQUE3QztBQUNBZSxZQUFNLENBQUNmLGNBQVAsQ0FBc0IsSUFBdEIsRUFBNEIsT0FBNUIsRUFBcUMsbUJBQXJDO0FBQ0FlLFlBQU0sQ0FBQ2YsY0FBUCxDQUFzQixJQUF0QixFQUE0QixLQUE1QixFQUFtQyxNQUFuQztBQUNBZSxZQUFNLENBQUNmLGNBQVAsQ0FBc0IsSUFBdEIsRUFBNEIsTUFBNUIsRUFBb0MsR0FBcEM7QUFDQWUsWUFBTSxDQUFDZixjQUFQLENBQXNCLElBQXRCLEVBQTRCLElBQTVCLEVBQWtDLElBQWxDO0FBQ0FjLGFBQU8sQ0FBQ1osV0FBUixDQUFvQmEsTUFBcEI7QUFDQSxVQUFNQyxNQUFNLEdBQUdyQixRQUFRLENBQUNHLGVBQVQsQ0FBeUJwQixTQUF6QixFQUFvQyxTQUFwQyxDQUFmO0FBQ0FzQyxZQUFNLENBQUNqQixFQUFQLEdBQVksVUFBWjtBQUNBaUIsWUFBTSxDQUFDaEIsY0FBUCxDQUFzQixJQUF0QixFQUE0QixlQUE1QixFQUE2QyxTQUE3QztBQUNBZ0IsWUFBTSxDQUFDaEIsY0FBUCxDQUFzQixJQUF0QixFQUE0QixlQUE1QixFQUE2QyxLQUE3QztBQUNBZ0IsWUFBTSxDQUFDaEIsY0FBUCxDQUFzQixJQUF0QixFQUE0QixPQUE1QixFQUFxQyx1QkFBckM7QUFDQWdCLFlBQU0sQ0FBQ2hCLGNBQVAsQ0FBc0IsSUFBdEIsRUFBNEIsS0FBNUIsRUFBbUMsSUFBbkM7QUFDQWdCLFlBQU0sQ0FBQ2hCLGNBQVAsQ0FBc0IsSUFBdEIsRUFBNEIsTUFBNUIsRUFBb0MsS0FBcEM7QUFDQWdCLFlBQU0sQ0FBQ2hCLGNBQVAsQ0FBc0IsSUFBdEIsRUFBNEIsSUFBNUIsRUFBa0MsR0FBbEM7QUFDQWdCLFlBQU0sQ0FBQ2hCLGNBQVAsQ0FBc0IsSUFBdEIsRUFBNEIsTUFBNUIsRUFBb0MsUUFBcEM7QUFDQWMsYUFBTyxDQUFDWixXQUFSLENBQW9CYyxNQUFwQjtBQUVBLFVBQU1DLE9BQU8sR0FBR3RCLFFBQVEsQ0FBQ0csZUFBVCxDQUF5QnBCLFNBQXpCLEVBQW9DLFFBQXBDLENBQWhCO0FBQ0F1QyxhQUFPLENBQUNYLFNBQVIsQ0FBa0JDLEdBQWxCLENBQXNCLGFBQXRCO0FBQ0FVLGFBQU8sQ0FBQ2pCLGNBQVIsQ0FBdUIsSUFBdkIsRUFBNkIsSUFBN0IsRUFBbUMsRUFBbkM7QUFDQWlCLGFBQU8sQ0FBQ2pCLGNBQVIsQ0FBdUIsSUFBdkIsRUFBNkIsSUFBN0IsRUFBbUMsRUFBbkM7QUFDQWlCLGFBQU8sQ0FBQ2pCLGNBQVIsQ0FBdUIsSUFBdkIsRUFBNkIsR0FBN0IsRUFBa0MsQ0FBbEM7QUFDQWlCLGFBQU8sQ0FBQ1gsU0FBUixDQUFrQkMsR0FBbEIsQ0FBc0JkLEtBQXRCO0FBQ0FJLGVBQVMsQ0FBQ0ssV0FBVixDQUFzQmUsT0FBdEI7QUFDQSxVQUFNQyxNQUFNLEdBQUd2QixRQUFRLENBQUNHLGVBQVQsQ0FBeUJwQixTQUF6QixFQUFvQyxTQUFwQyxDQUFmO0FBQ0F3QyxZQUFNLENBQUNuQixFQUFQLEdBQVksVUFBWjtBQUNBbUIsWUFBTSxDQUFDbEIsY0FBUCxDQUFzQixJQUF0QixFQUE0QixlQUE1QixFQUE2QyxHQUE3QztBQUNBa0IsWUFBTSxDQUFDbEIsY0FBUCxDQUFzQixJQUF0QixFQUE0QixlQUE1QixFQUE2QyxLQUE3QztBQUNBa0IsWUFBTSxDQUFDbEIsY0FBUCxDQUFzQixJQUF0QixFQUE0QixPQUE1QixFQUFxQyxxQkFBckM7QUFDQWtCLFlBQU0sQ0FBQ2xCLGNBQVAsQ0FBc0IsSUFBdEIsRUFBNEIsS0FBNUIsRUFBbUMsTUFBbkM7QUFDQWtCLFlBQU0sQ0FBQ2xCLGNBQVAsQ0FBc0IsSUFBdEIsRUFBNEIsTUFBNUIsRUFBb0MsR0FBcEM7QUFDQWtCLFlBQU0sQ0FBQ2xCLGNBQVAsQ0FBc0IsSUFBdEIsRUFBNEIsSUFBNUIsRUFBa0MsSUFBbEM7QUFDQWlCLGFBQU8sQ0FBQ2YsV0FBUixDQUFvQmdCLE1BQXBCO0FBQ0EsVUFBTUMsTUFBTSxHQUFHeEIsUUFBUSxDQUFDRyxlQUFULENBQXlCcEIsU0FBekIsRUFBb0MsU0FBcEMsQ0FBZjtBQUNBeUMsWUFBTSxDQUFDcEIsRUFBUCxHQUFZLFVBQVo7QUFDQW9CLFlBQU0sQ0FBQ25CLGNBQVAsQ0FBc0IsSUFBdEIsRUFBNEIsZUFBNUIsRUFBNkMsU0FBN0M7QUFDQW1CLFlBQU0sQ0FBQ25CLGNBQVAsQ0FBc0IsSUFBdEIsRUFBNEIsZUFBNUIsRUFBNkMsS0FBN0M7QUFDQW1CLFlBQU0sQ0FBQ25CLGNBQVAsQ0FBc0IsSUFBdEIsRUFBNEIsT0FBNUIsRUFBcUMsdUJBQXJDO0FBQ0FtQixZQUFNLENBQUNuQixjQUFQLENBQXNCLElBQXRCLEVBQTRCLEtBQTVCLEVBQW1DLElBQW5DO0FBQ0FtQixZQUFNLENBQUNuQixjQUFQLENBQXNCLElBQXRCLEVBQTRCLE1BQTVCLEVBQW9DLEtBQXBDO0FBQ0FtQixZQUFNLENBQUNuQixjQUFQLENBQXNCLElBQXRCLEVBQTRCLElBQTVCLEVBQWtDLEdBQWxDO0FBQ0FtQixZQUFNLENBQUNuQixjQUFQLENBQXNCLElBQXRCLEVBQTRCLE1BQTVCLEVBQW9DLFFBQXBDO0FBQ0FpQixhQUFPLENBQUNmLFdBQVIsQ0FBb0JpQixNQUFwQjtBQUVBLFVBQU1DLE9BQU8sR0FBR3pCLFFBQVEsQ0FBQ0csZUFBVCxDQUF5QnBCLFNBQXpCLEVBQW9DLFFBQXBDLENBQWhCO0FBQ0EwQyxhQUFPLENBQUNkLFNBQVIsQ0FBa0JDLEdBQWxCLENBQXNCLGFBQXRCO0FBQ0FhLGFBQU8sQ0FBQ3BCLGNBQVIsQ0FBdUIsSUFBdkIsRUFBNkIsSUFBN0IsRUFBbUMsRUFBbkM7QUFDQW9CLGFBQU8sQ0FBQ3BCLGNBQVIsQ0FBdUIsSUFBdkIsRUFBNkIsSUFBN0IsRUFBbUMsRUFBbkM7QUFDQW9CLGFBQU8sQ0FBQ3BCLGNBQVIsQ0FBdUIsSUFBdkIsRUFBNkIsR0FBN0IsRUFBa0MsQ0FBbEM7QUFDQW9CLGFBQU8sQ0FBQ2QsU0FBUixDQUFrQkMsR0FBbEIsQ0FBc0JkLEtBQXRCO0FBQ0FJLGVBQVMsQ0FBQ0ssV0FBVixDQUFzQmtCLE9BQXRCO0FBQ0EsVUFBTUMsTUFBTSxHQUFHMUIsUUFBUSxDQUFDRyxlQUFULENBQXlCcEIsU0FBekIsRUFBb0MsU0FBcEMsQ0FBZjtBQUNBMkMsWUFBTSxDQUFDdEIsRUFBUCxHQUFZLFVBQVo7QUFDQXNCLFlBQU0sQ0FBQ3JCLGNBQVAsQ0FBc0IsSUFBdEIsRUFBNEIsZUFBNUIsRUFBNkMsR0FBN0M7QUFDQXFCLFlBQU0sQ0FBQ3JCLGNBQVAsQ0FBc0IsSUFBdEIsRUFBNEIsZUFBNUIsRUFBNkMsS0FBN0M7QUFDQXFCLFlBQU0sQ0FBQ3JCLGNBQVAsQ0FBc0IsSUFBdEIsRUFBNEIsT0FBNUIsRUFBcUMscUJBQXJDO0FBQ0FxQixZQUFNLENBQUNyQixjQUFQLENBQXNCLElBQXRCLEVBQTRCLEtBQTVCLEVBQW1DLE1BQW5DO0FBQ0FxQixZQUFNLENBQUNyQixjQUFQLENBQXNCLElBQXRCLEVBQTRCLE1BQTVCLEVBQW9DLEdBQXBDO0FBQ0FxQixZQUFNLENBQUNyQixjQUFQLENBQXNCLElBQXRCLEVBQTRCLElBQTVCLEVBQWtDLElBQWxDO0FBQ0FvQixhQUFPLENBQUNsQixXQUFSLENBQW9CbUIsTUFBcEI7QUFDQSxVQUFNQyxNQUFNLEdBQUczQixRQUFRLENBQUNHLGVBQVQsQ0FBeUJwQixTQUF6QixFQUFvQyxTQUFwQyxDQUFmO0FBQ0E0QyxZQUFNLENBQUN2QixFQUFQLEdBQVksVUFBWjtBQUNBdUIsWUFBTSxDQUFDdEIsY0FBUCxDQUFzQixJQUF0QixFQUE0QixlQUE1QixFQUE2QyxTQUE3QztBQUNBc0IsWUFBTSxDQUFDdEIsY0FBUCxDQUFzQixJQUF0QixFQUE0QixlQUE1QixFQUE2QyxLQUE3QztBQUNBc0IsWUFBTSxDQUFDdEIsY0FBUCxDQUFzQixJQUF0QixFQUE0QixPQUE1QixFQUFxQyx1QkFBckM7QUFDQXNCLFlBQU0sQ0FBQ3RCLGNBQVAsQ0FBc0IsSUFBdEIsRUFBNEIsS0FBNUIsRUFBbUMsSUFBbkM7QUFDQXNCLFlBQU0sQ0FBQ3RCLGNBQVAsQ0FBc0IsSUFBdEIsRUFBNEIsTUFBNUIsRUFBb0MsS0FBcEM7QUFDQXNCLFlBQU0sQ0FBQ3RCLGNBQVAsQ0FBc0IsSUFBdEIsRUFBNEIsSUFBNUIsRUFBa0MsR0FBbEM7QUFDQXNCLFlBQU0sQ0FBQ3RCLGNBQVAsQ0FBc0IsSUFBdEIsRUFBNEIsTUFBNUIsRUFBb0MsUUFBcEM7QUFDQW9CLGFBQU8sQ0FBQ2xCLFdBQVIsQ0FBb0JvQixNQUFwQjtBQUVBLFVBQUksT0FBT0MsY0FBUCxLQUEwQixXQUE5QixFQUEyQ1IsTUFBTSxDQUFDUyxZQUFQLEdBQTNDLENBQ0E7QUFEQSxXQUdFQyxVQUFVLENBQUMsWUFBWTtBQUNyQlYsZ0JBQU0sQ0FBQ1MsWUFBUDtBQUNELFNBRlMsRUFFUCxDQUZPLENBQVY7QUFHSDtBQTVLSDs7QUFBQTtBQUFBO0FBK0tBLCtEQUFlNUMsTUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BMQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTtBQUVBLElBQU1GLFNBQVMsR0FBRyw0QkFBbEI7QUFDQSxJQUFNZ0QsWUFBWSxHQUFHLElBQXJCO0FBQ0EsSUFBTUMsVUFBVSxHQUFHLEdBQW5CO0FBQ0EsSUFBTUMsU0FBUyxHQUFHLFNBQVNGLFlBQTNCLEMsQ0FBd0M7O0FBQ3hDLElBQU1HLGtCQUFrQixHQUFHLEdBQTNCLEMsQ0FBK0I7O0FBQy9CLElBQU1DLHFCQUFxQixHQUFHLEdBQTlCLEMsQ0FBa0M7O0FBQ2xDLElBQU1DLGNBQWMsR0FBRyxDQUF2QixDLENBQXlCOztBQUN6QixJQUFNQyxZQUFZLEdBQUcsRUFBckI7QUFDQSxJQUFNQyxTQUFTLEdBQUcsRUFBbEI7QUFDQSxJQUFNQyxTQUFTLEdBQUcsRUFBbEI7QUFDQSxJQUFNQyxRQUFRLEdBQUcsS0FBakI7QUFFTyxJQUFNQyxPQUFiO0FBQ0UsbUJBQVl2RCxLQUFaLEVBQW1CO0FBQUE7O0FBQ2pCLFNBQUt3RCxXQUFMLEdBQW1CeEQsS0FBSyxDQUFDNUIsSUFBekI7QUFDQSxTQUFLbEMsSUFBTCxHQUFZLElBQVo7QUFDQSxTQUFLdUgsV0FBTCxHQUFtQixJQUFuQjtBQUNBLFNBQUtDLFVBQUwsR0FBa0IsSUFBbEI7QUFDQSxTQUFLQyxTQUFMLEdBQWlCLElBQWpCO0FBQ0EsU0FBS0MsVUFBTCxHQUFrQixJQUFsQjtBQUNBLFNBQUtDLEtBQUwsR0FBYSxJQUFiO0FBQ0EsU0FBS0MsVUFBTCxHQUFrQixJQUFsQjtBQUNBLFNBQUtDLEtBQUwsR0FBYSxJQUFiO0FBQ0EsU0FBS0MsVUFBTCxHQUFrQixJQUFsQjtBQUNBLFNBQUtDLE9BQUwsR0FBZSxJQUFmO0FBQ0EsU0FBS0MsWUFBTCxHQUFvQixJQUFwQjtBQUNBLFNBQUtDLE9BQUwsR0FBZSxJQUFmO0FBQ0EsU0FBS0MsWUFBTCxHQUFvQixJQUFwQjtBQUNEOztBQWhCSDtBQUFBO0FBQUEsV0FrQkUscUJBQVk7QUFBQTs7QUFDVixVQUFNQyx5QkFBeUIsR0FBRyxDQUFDLE1BQUQsRUFBUyxLQUFULEVBQWdCLE1BQWhCLEVBQXdCLE9BQXhCLENBQWxDOztBQURVLGtDQUUyQixLQUFLbkksSUFBTCxDQUFVQSxJQUFWLENBQWVvSSxNQUFmLENBQ25DLFVBQUNDLEdBQUQsRUFBTUMsR0FBTixFQUFjO0FBQ1osWUFBTUMsUUFBUSxzQkFBT0YsR0FBRyxDQUFDLENBQUQsQ0FBVixDQUFkOztBQUNBLFlBQU1HLE9BQU8sR0FBRyxLQUFJLENBQUN4SSxJQUFMLENBQVVZLE9BQVYsQ0FBa0J3SCxNQUFsQixDQUF5QixVQUFDSyxXQUFELEVBQWNDLE9BQWQsRUFBdUJDLENBQXZCLEVBQTZCO0FBQ3BFLGNBQUlELE9BQU8sS0FBSyxNQUFoQixFQUF3Qix1Q0FBWUQsV0FBWiwyQkFBMEJDLE9BQTFCLEVBQW9DSixHQUFHLENBQUNLLENBQUQsQ0FBdkM7QUFDeEIsaURBQVlGLFdBQVo7QUFBeUIvSCxnQkFBSSxFQUFFQyxNQUFNLENBQUMySCxHQUFHLENBQUNLLENBQUQsQ0FBSixDQUFOLENBQWU3SCxPQUFmLEtBQTJCNkY7QUFBMUQ7QUFDRCxTQUhlLEVBR2IsRUFIYSxDQUFoQjs7QUFJQTRCLGdCQUFRLENBQUN4RyxJQUFULENBQWN5RyxPQUFkO0FBQ0EsWUFBTUksWUFBWSxHQUFHVCx5QkFBeUIsQ0FDM0NqSyxHQURrQixDQUNkLFVBQUEySyxLQUFLO0FBQUEsaUJBQUlMLE9BQU8sQ0FBQ0ssS0FBRCxDQUFYO0FBQUEsU0FEUyxFQUVsQkMsSUFGa0IsQ0FFYixVQUFDQyxDQUFELEVBQUlDLENBQUo7QUFBQSxpQkFBVUQsQ0FBQyxHQUFHQyxDQUFkO0FBQUEsU0FGYSxDQUFyQjtBQUdBLFlBQU1DLGFBQWEsR0FBR1osR0FBRyxDQUFDLENBQUQsQ0FBSCxHQUNsQjlKLElBQUksQ0FBQzJLLEdBQUwsQ0FBU2IsR0FBRyxDQUFDLENBQUQsQ0FBWixFQUFpQk8sWUFBWSxDQUFDLENBQUQsQ0FBN0IsQ0FEa0IsR0FFbEJBLFlBQVksQ0FBQyxDQUFELENBRmhCO0FBR0EsWUFBTU8sYUFBYSxHQUFHZCxHQUFHLENBQUMsQ0FBRCxDQUFILEdBQ2xCOUosSUFBSSxDQUFDNkssR0FBTCxDQUFTZixHQUFHLENBQUMsQ0FBRCxDQUFaLEVBQWlCTyxZQUFZLENBQUNBLFlBQVksQ0FBQ2pHLE1BQWIsR0FBc0IsQ0FBdkIsQ0FBN0IsQ0FEa0IsR0FFbEJpRyxZQUFZLENBQUNBLFlBQVksQ0FBQ2pHLE1BQWIsR0FBc0IsQ0FBdkIsQ0FGaEI7QUFHQSxlQUFPLENBQUM0RixRQUFELEVBQVdVLGFBQVgsRUFBMEJFLGFBQTFCLENBQVA7QUFDRCxPQWxCa0MsRUFtQm5DLENBQUMsRUFBRCxFQUFLLElBQUwsRUFBVyxJQUFYLENBbkJtQyxDQUYzQjtBQUFBO0FBQUEsVUFFSG5KLElBRkc7QUFBQSxVQUVHcUosU0FGSDtBQUFBLFVBRWNDLFNBRmQ7O0FBdUJWdEosVUFBSSxDQUFDOEksSUFBTCxDQUFVLFVBQUNDLENBQUQsRUFBSUMsQ0FBSjtBQUFBLGVBQVVELENBQUMsQ0FBQ3JJLElBQUYsR0FBU3NJLENBQUMsQ0FBQ3RJLElBQXJCO0FBQUEsT0FBVjtBQUNBLFdBQUsrRyxTQUFMLEdBQWlCekgsSUFBSSxDQUFDQSxJQUFJLENBQUMyQyxNQUFMLEdBQWMsQ0FBZixDQUFKLENBQXNCakMsSUFBdEIsR0FBNkJpRyxZQUE5QztBQUNBLFdBQUthLFVBQUwsR0FBa0I7QUFDaEIrQixpQkFBUyxFQUFFdkosSUFBSSxDQUFDLENBQUQsQ0FBSixDQUFRVSxJQURIO0FBRWhCOEksZUFBTyxFQUFFeEosSUFBSSxDQUFDQSxJQUFJLENBQUMyQyxNQUFMLEdBQWMsQ0FBZixDQUFKLENBQXNCakMsSUFGZjtBQUdoQjJJLGlCQUFTLEVBQVRBLFNBSGdCO0FBSWhCQyxpQkFBUyxFQUFUQSxTQUpnQjtBQUtoQnRKLFlBQUksRUFBSkEsSUFMZ0I7QUFNaEJsQixrQkFBVSxFQUFFa0IsSUFBSSxDQUFDOUIsR0FBTCxDQUFTO0FBQUEsY0FBR3dDLElBQUgsUUFBR0EsSUFBSDtBQUFBLGNBQVMrSSxJQUFULFFBQVNBLElBQVQ7QUFBQSxjQUFlQyxHQUFmLFFBQWVBLEdBQWY7QUFBQSxjQUFvQkMsSUFBcEIsUUFBb0JBLElBQXBCO0FBQUEsY0FBMEJDLEtBQTFCLFFBQTBCQSxLQUExQjtBQUFBLGlCQUF1QztBQUMxRGxKLGdCQUFJLEVBQUpBLElBRDBEO0FBRTFEK0ksZ0JBQUksRUFBSkEsSUFGMEQ7QUFHMURDLGVBQUcsRUFBSEEsR0FIMEQ7QUFJMURDLGdCQUFJLEVBQUpBLElBSjBEO0FBSzFEQyxpQkFBSyxFQUFMQTtBQUwwRCxXQUF2QztBQUFBLFNBQVQsQ0FOSTtBQWFoQkMsa0JBQVUsRUFBRTdKLElBQUksQ0FBQ29JLE1BQUwsQ0FBWSxVQUFDQyxHQUFELFNBQWtDTSxDQUFsQyxFQUF3QztBQUFBLGNBQWhDNUgsR0FBZ0MsU0FBaENBLEdBQWdDO0FBQUEsY0FBM0JDLElBQTJCLFNBQTNCQSxJQUEyQjtBQUFBLGNBQXJCeUksSUFBcUIsU0FBckJBLElBQXFCO0FBQUEsY0FBZkcsS0FBZSxTQUFmQSxLQUFlOztBQUM5RCxjQUFNRSxVQUFVLHNCQUFPekIsR0FBUCxDQUFoQjs7QUFDQSxjQUFJdEgsR0FBRyxJQUFJQyxJQUFYLEVBQ0U4SSxVQUFVLENBQUMvSCxJQUFYLENBQWdCO0FBQ2RnSSxhQUFDLEVBQUVwQixDQURXO0FBRWQ1SCxlQUFHLEVBQUhBLEdBRmM7QUFHZEMsZ0JBQUksRUFBSkEsSUFIYztBQUlkZ0osZUFBRyxFQUFFUCxJQUpTO0FBS2RRLHFCQUFTLEVBQUVSLElBQUksR0FBR0csS0FBUCxHQUFlLE1BQWYsR0FBd0I7QUFMckIsV0FBaEI7QUFPRixpQkFBT0UsVUFBUDtBQUNELFNBWFcsRUFXVCxFQVhTLENBYkk7QUF5QmhCSSxrQkFBVSxFQUFFbEssSUFBSSxDQUFDOUIsR0FBTCxDQUFTO0FBQUEsY0FBR3dDLElBQUgsU0FBR0EsSUFBSDtBQUFBLGNBQVN5SixNQUFULFNBQVNBLE1BQVQ7QUFBQSxjQUFpQlYsSUFBakIsU0FBaUJBLElBQWpCO0FBQUEsY0FBdUJHLEtBQXZCLFNBQXVCQSxLQUF2QjtBQUFBLGlCQUFvQztBQUN2RGxKLGdCQUFJLEVBQUpBLElBRHVEO0FBRXZEeUosa0JBQU0sRUFBTkEsTUFGdUQ7QUFHdkR6RixpQkFBSyxFQUFFK0UsSUFBSSxHQUFHRyxLQUFQLEdBQWUsQ0FBZixHQUFtQixVQUFuQixHQUFnQztBQUhnQixXQUFwQztBQUFBLFNBQVQ7QUF6QkksT0FBbEI7QUErQkQ7QUExRUg7QUFBQTtBQUFBLFdBNEVFLGlCQUFRUSxVQUFSLEVBQW9CO0FBQUE7O0FBQ2xCLFdBQUtwSyxJQUFMLEdBQVlvSyxVQUFaOztBQUNBLFVBQUksS0FBS3BLLElBQUwsa0JBQWEsS0FBS0EsSUFBbEIsMERBQWEsV0FBV0EsSUFBeEIsNENBQWEsZ0JBQWlCMkMsTUFBbEMsRUFBMEM7QUFDeEMsYUFBSzRFLFdBQUwsR0FBbUIsS0FBS3ZILElBQUwsQ0FBVUEsSUFBVixDQUFlMkMsTUFBbEM7QUFDQSxhQUFLMEgsU0FBTDtBQUNEOztBQUNELFdBQUtDLGVBQUw7QUFDRDtBQW5GSDtBQUFBO0FBQUEsV0FxRkUsdUJBQWNGLFVBQWQsRUFBMEI7QUFBQSw2QkFDSyxtQkFBSUEsVUFBVSxDQUFDRyxNQUFmLEVBQzFCck0sR0FEMEIsQ0FDdEI7QUFBQSxZQUFHc00sZUFBSCxTQUFHQSxlQUFIO0FBQUEsWUFBb0JDLGdCQUFwQixTQUFvQkEsZ0JBQXBCO0FBQUEsZUFBNEM7QUFDL0MvSixjQUFJLEVBQUVuQyxJQUFJLENBQUNDLEtBQUwsQ0FBV2dNLGVBQWUsR0FBRzdELFlBQTdCLENBRHlDO0FBRS9DbkQsZ0JBQU0sRUFBRWlIO0FBRnVDLFNBQTVDO0FBQUEsT0FEc0IsRUFLMUIzQixJQUwwQixDQUtyQixVQUFDQyxDQUFELEVBQUlDLENBQUo7QUFBQSxlQUFVRCxDQUFDLENBQUNySSxJQUFGLEdBQVNzSSxDQUFDLENBQUN0SSxJQUFyQjtBQUFBLE9BTHFCLEVBTTFCMEgsTUFOMEIsQ0FPekIsVUFBQ0MsR0FBRCxFQUFNQyxHQUFOLEVBQVdLLENBQVgsRUFBaUI7QUFDZixZQUFNK0IsZUFBZSxHQUFHL0IsQ0FBQyxHQUNyQk4sR0FBRyxDQUFDLENBQUQsQ0FBSCxDQUFPTSxDQUFDLEdBQUcsQ0FBWCxFQUFjZ0MsVUFBZCxHQUEyQnJDLEdBQUcsQ0FBQzlFLE1BRFYsR0FFckI4RSxHQUFHLENBQUM5RSxNQUZSOztBQUdBLFlBQU1vSCxPQUFPLG1DQUFRdEMsR0FBUjtBQUFhcUMsb0JBQVUsRUFBRUQ7QUFBekIsVUFBYjs7QUFDQSxZQUFNRyxPQUFPLEdBQ1h4QyxHQUFHLENBQUMsQ0FBRCxDQUFILEtBQVcsSUFBWCxHQUFrQjlKLElBQUksQ0FBQzJLLEdBQUwsQ0FBU2IsR0FBRyxDQUFDLENBQUQsQ0FBWixFQUFpQnFDLGVBQWpCLENBQWxCLEdBQXNEQSxlQUR4RDtBQUVBLFlBQU1JLE9BQU8sR0FDWHpDLEdBQUcsQ0FBQyxDQUFELENBQUgsS0FBVyxJQUFYLEdBQWtCOUosSUFBSSxDQUFDNkssR0FBTCxDQUFTZixHQUFHLENBQUMsQ0FBRCxDQUFaLEVBQWlCcUMsZUFBakIsQ0FBbEIsR0FBc0RBLGVBRHhEOztBQUVBLFlBQU1aLFVBQVUsc0JBQU96QixHQUFHLENBQUMsQ0FBRCxDQUFWLENBQWhCOztBQUNBeUIsa0JBQVUsQ0FBQy9ILElBQVgsQ0FBZ0I2SSxPQUFoQjtBQUNBLGVBQU8sQ0FBQ2QsVUFBRCxFQUFhZSxPQUFiLEVBQXNCQyxPQUF0QixDQUFQO0FBQ0QsT0FuQndCLEVBb0J6QixDQUFDLEVBQUQsRUFBSyxJQUFMLEVBQVcsSUFBWCxDQXBCeUIsQ0FETDtBQUFBO0FBQUEsVUFDakJ2QyxRQURpQjtBQUFBLFVBQ1BXLEdBRE87QUFBQSxVQUNGRSxHQURFOztBQXVCeEIsV0FBSzFCLFVBQUwsR0FBa0I7QUFDaEI2QixpQkFBUyxFQUFFaEIsUUFBUSxDQUFDLENBQUQsQ0FBUixDQUFZN0gsSUFEUDtBQUVoQjhJLGVBQU8sRUFBRWpCLFFBQVEsQ0FBQ0EsUUFBUSxDQUFDNUYsTUFBVCxHQUFrQixDQUFuQixDQUFSLENBQThCakMsSUFGdkI7QUFHaEJnSCxrQkFBVSxFQUFFYSxRQUhJO0FBSWhCVyxXQUFHLEVBQUhBLEdBSmdCO0FBS2hCRSxXQUFHLEVBQUhBO0FBTGdCLE9BQWxCO0FBT0EsV0FBSzJCLGlCQUFMO0FBQ0Q7QUFwSEg7QUFBQTtBQUFBLFdBc0hFLHVCQUFjQyxLQUFkLEVBQXFCQyxNQUFyQixFQUE2QjtBQUMzQixXQUFLRCxLQUFMLEdBQWFBLEtBQWI7QUFDQSxXQUFLQyxNQUFMLEdBQWNBLE1BQWQ7QUFDRDtBQXpISDtBQUFBO0FBQUEsV0EySEUsd0JBQWVsQixDQUFmLEVBQWtCbUIsQ0FBbEIsRUFBcUJDLE1BQXJCLEVBQTZCQyxNQUE3QixFQUFxQztBQUNuQyxXQUFLekQsS0FBTCxHQUFhb0MsQ0FBYjtBQUNBLFdBQUtsQyxLQUFMLEdBQWFxRCxDQUFiO0FBQ0EsV0FBS3RELFVBQUwsR0FBa0J1RCxNQUFsQjtBQUNBLFdBQUtyRCxVQUFMLEdBQWtCc0QsTUFBbEI7QUFDRDtBQWhJSDtBQUFBO0FBQUEsV0FrSUUsMEJBQWlCckIsQ0FBakIsRUFBb0JtQixDQUFwQixFQUF1QkMsTUFBdkIsRUFBK0JDLE1BQS9CLEVBQXVDO0FBQ3JDLFdBQUtyRCxPQUFMLEdBQWVnQyxDQUFmO0FBQ0EsV0FBSzlCLE9BQUwsR0FBZWlELENBQWY7QUFDQSxXQUFLbEQsWUFBTCxHQUFvQm1ELE1BQXBCO0FBQ0EsV0FBS2pELFlBQUwsR0FBb0JrRCxNQUFwQjtBQUNEO0FBdklIO0FBQUE7QUFBQSxXQXlJRSxzQkFBYUosS0FBYixFQUFvQkMsTUFBcEIsRUFBNEI7QUFDMUI7QUFDQSxVQUFNSSxRQUFRLEdBQUd6RyxRQUFRLENBQUNHLGVBQVQsQ0FBeUJwQixTQUF6QixFQUFvQyxLQUFwQyxDQUFqQjtBQUNBMEgsY0FBUSxDQUFDckcsRUFBVCxHQUFjLGFBQWQ7QUFDQXFHLGNBQVEsQ0FBQ3BHLGNBQVQsQ0FBd0IsSUFBeEIsRUFBOEIsU0FBOUIsRUFBeUMsS0FBekM7QUFDQW9HLGNBQVEsQ0FBQ25HLFlBQVQsQ0FBc0IsT0FBdEIsRUFBK0IsNEJBQS9CO0FBQ0FtRyxjQUFRLENBQUNwRyxjQUFULENBQXdCLElBQXhCLEVBQThCLHFCQUE5QixFQUFxRCxNQUFyRDtBQUNBb0csY0FBUSxDQUFDcEcsY0FBVCxDQUF3QixJQUF4QixFQUE4QixPQUE5QixZQUEwQytGLEtBQTFDLFNBUDBCLENBUTFCO0FBRUE7O0FBQ0EsVUFBTU0sS0FBSyxHQUFHMUcsUUFBUSxDQUFDRyxlQUFULENBQXlCcEIsU0FBekIsRUFBb0MsS0FBcEMsQ0FBZDtBQUNBMkgsV0FBSyxDQUFDdEcsRUFBTixHQUFXLGNBQVg7QUFDQXNHLFdBQUssQ0FBQ3JHLGNBQU4sQ0FBcUIsSUFBckIsRUFBMkIsU0FBM0IsRUFBc0MsS0FBdEMsRUFiMEIsQ0FjMUI7QUFDQTs7QUFDQXFHLFdBQUssQ0FBQ3JHLGNBQU4sQ0FBcUIsSUFBckIsRUFBMkIsT0FBM0IsWUFBdUMrRixLQUF2QyxTQWhCMEIsQ0FpQjFCO0FBRUE7O0FBQ0EsVUFBTU8sS0FBSyxHQUFHM0csUUFBUSxDQUFDRyxlQUFULENBQXlCcEIsU0FBekIsRUFBb0MsS0FBcEMsQ0FBZDtBQUNBNEgsV0FBSyxDQUFDdkcsRUFBTixHQUFXLGNBQVg7QUFDQXVHLFdBQUssQ0FBQ3RHLGNBQU4sQ0FBcUIsSUFBckIsRUFBMkIsU0FBM0IsRUFBc0MsS0FBdEMsRUF0QjBCLENBdUIxQjtBQUNBOztBQUNBc0csV0FBSyxDQUFDdEcsY0FBTixDQUFxQixJQUFyQixFQUEyQixRQUEzQixZQUF3Q2dHLE1BQXhDLFNBekIwQixDQTBCMUI7O0FBRUEsV0FBS08sYUFBTCxDQUFtQlIsS0FBbkIsRUFBMEJDLE1BQTFCO0FBRUEsYUFBTyxDQUFDSSxRQUFELEVBQVdDLEtBQVgsRUFBa0JDLEtBQWxCLENBQVA7QUFDRDtBQXhLSDtBQUFBO0FBQUEsV0EwS0Usc0JBQWFFLFNBQWIsRUFBd0JILEtBQXhCLEVBQStCQyxLQUEvQixFQUFzQ3hCLENBQXRDLEVBQXlDb0IsTUFBekMsRUFBaURELENBQWpELEVBQW9ERSxNQUFwRCxFQUE0RGxDLEdBQTVELEVBQWlFRSxHQUFqRSxFQUFzRTtBQUNwRSxVQUFNc0MsaUJBQWlCLEdBQUl4RSxTQUFTLEdBQUdpRSxNQUFiLEdBQXVCLEtBQUtILEtBQXREO0FBQ0EsVUFBTVcsaUJBQWlCLEdBQUl4RSxTQUFTLEdBQUdpRSxNQUFiLEdBQXVCLEtBQUtILE1BQXREO0FBQ0EsVUFBTVcsVUFBVSxHQUFHLENBQUMsR0FBRCxFQUFNLENBQU4sRUFBUyxHQUFULEVBQWMsQ0FBZCxFQUFpQixFQUFqQixDQUFuQjtBQUNBLFVBQUlDLE1BQU0sR0FBRyxDQUFiOztBQUNBLFVBQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsR0FBTTtBQUM3QixZQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUNDLEtBQUQsRUFBUTlJLElBQVI7QUFBQSxpQkFBaUIzRSxJQUFJLENBQUNtRSxHQUFMLENBQVNzSixLQUFULElBQWtCek4sSUFBSSxDQUFDbUUsR0FBTCxDQUFTUSxJQUFULENBQW5DO0FBQUEsU0FBMUI7O0FBQ0EsWUFBTStJLFlBQVksR0FBR1AsaUJBQWlCLEdBQUc5RSxVQUFwQixHQUFpQ0QsWUFBdEQsQ0FGNkIsQ0FHN0I7O0FBQ0EsWUFBTXVGLE9BQU8sR0FBR2hELEdBQWhCO0FBQ0EsWUFBSWlELFNBQVMsR0FBRyxDQUFoQjtBQUNBLFlBQUlDLFNBQVMsR0FBRyxDQUFoQjtBQUNBLFlBQUlDLEtBQUssR0FBRyxFQUFaO0FBQ0EsWUFBSUMsU0FBUyxHQUFHTCxZQUFoQjtBQUNBLFlBQU1NLEtBQUssR0FBR2hPLElBQUksQ0FBQ2dPLEtBQUwsQ0FBV04sWUFBWCxDQUFkOztBQUNBLFlBQUlNLEtBQUssR0FBRyxDQUFaLEVBQWU7QUFDYkosbUJBQVMsYUFBSSxFQUFKLEVBQVU1TixJQUFJLENBQUMrRixLQUFMLENBQVdpSSxLQUFYLENBQVYsQ0FBVDtBQUNBRixlQUFLLEdBQUcsYUFBUixDQUZhLENBR2I7O0FBQ0EsY0FBTUcsU0FBUyxHQUFHLENBQUMsR0FBRCxFQUFNLENBQU4sRUFBUyxFQUFULENBQWxCO0FBQ0EsY0FBTUMsU0FBUyxHQUFHLFVBQUlELFNBQUosRUFDZnRPLEdBRGUsQ0FDWCxVQUFBQyxDQUFDO0FBQUEsbUJBQUlBLENBQUMsR0FBR2dPLFNBQVI7QUFBQSxXQURVLEVBRWZsTCxNQUZlLENBRVIsVUFBQTlDLENBQUM7QUFBQSxtQkFBSSxFQUFFQSxDQUFDLEdBQUdJLElBQUksQ0FBQ21PLEtBQUwsQ0FBV3ZPLENBQVgsQ0FBTixDQUFKO0FBQUEsV0FGTyxDQUFsQjtBQUdBLGNBQUl3SyxDQUFDLEdBQUcsQ0FBUjs7QUFDQSxpQkFBTzhELFNBQVMsQ0FBQzlELENBQUQsQ0FBVCxJQUFnQnNELFlBQXZCO0FBQXFDdEQsYUFBQztBQUF0Qzs7QUFDQTJELG1CQUFTLEdBQUdHLFNBQVMsQ0FBQzlELENBQUQsQ0FBckI7QUFDQXlELG1CQUFTLEdBQUdJLFNBQVMsQ0FBQzdELENBQUQsQ0FBVCxZQUFlLEVBQWYsRUFBcUJwSyxJQUFJLENBQUMrRixLQUFMLENBQVdpSSxLQUFYLENBQXJCLENBQVo7QUFDRCxTQVpELE1BWU87QUFDTEosbUJBQVMsSUFBSSxJQUFiO0FBQ0EsY0FBTVEsS0FBSyxHQUFHWixpQkFBaUIsQ0FBQ0UsWUFBWSxHQUFHRSxTQUFoQixFQUEyQixFQUEzQixDQUEvQjs7QUFDQSxjQUFJUSxLQUFLLEdBQUcsQ0FBWixFQUFlO0FBQ2JSLHFCQUFTLGFBQUksRUFBSixFQUFVNU4sSUFBSSxDQUFDK0YsS0FBTCxDQUFXcUksS0FBWCxDQUFWLENBQVQ7QUFDQU4saUJBQUssR0FBR00sS0FBSyxHQUFHLENBQVIsR0FBWSxRQUFaLEdBQXVCLFFBQS9CLENBRmEsQ0FHYjs7QUFDQSxnQkFBTUgsVUFBUyxHQUFHLENBQUMsQ0FBRCxFQUFJLEVBQUosRUFBUSxFQUFSLEVBQVksRUFBWixDQUFsQjs7QUFDQSxnQkFBTUMsVUFBUyxHQUFHLFVBQUlELFVBQUosRUFBZXRPLEdBQWYsQ0FBbUIsVUFBQUMsQ0FBQztBQUFBLHFCQUFJQSxDQUFDLEdBQUdnTyxTQUFSO0FBQUEsYUFBcEIsQ0FBbEI7O0FBQ0EsZ0JBQUl4RCxHQUFDLEdBQUcsQ0FBUjs7QUFDQSxtQkFBTzhELFVBQVMsQ0FBQzlELEdBQUQsQ0FBVCxJQUFnQnNELFlBQXZCO0FBQXFDdEQsaUJBQUM7QUFBdEM7O0FBQ0EyRCxxQkFBUyxHQUFHRyxVQUFTLENBQUM5RCxHQUFELENBQXJCO0FBQ0F5RCxxQkFBUyxHQUFHSSxVQUFTLENBQUM3RCxHQUFELENBQXJCO0FBQ0QsV0FWRCxNQVVPO0FBQ0x3RCxxQkFBUyxJQUFJLEtBQUssRUFBbEI7O0FBQ0EsZ0JBQUlGLFlBQVksR0FBR0UsU0FBUyxHQUFHLEVBQS9CLEVBQW1DO0FBQ2pDRSxtQkFBSyxHQUFHLE1BQVIsQ0FEaUMsQ0FFakM7O0FBQ0Esa0JBQU1HLFdBQVMsR0FBRyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sRUFBUCxDQUFsQjs7QUFDQSxrQkFBTUMsV0FBUyxHQUFHLFVBQUlELFdBQUosRUFBZXRPLEdBQWYsQ0FBbUIsVUFBQUMsQ0FBQztBQUFBLHVCQUFJQSxDQUFDLEdBQUdnTyxTQUFSO0FBQUEsZUFBcEIsQ0FBbEI7O0FBQ0Esa0JBQUl4RCxHQUFDLEdBQUcsQ0FBUjs7QUFDQSxxQkFBTzhELFdBQVMsQ0FBQzlELEdBQUQsQ0FBVCxJQUFnQnNELFlBQXZCO0FBQXFDdEQsbUJBQUM7QUFBdEM7O0FBQ0EyRCx1QkFBUyxHQUFHRyxXQUFTLENBQUM5RCxHQUFELENBQXJCO0FBQ0F5RCx1QkFBUyxHQUFHSSxXQUFTLENBQUM3RCxHQUFELENBQXJCO0FBQ0QsYUFURCxNQVNPO0FBQ0x3RCx1QkFBUyxJQUFJLEVBQWI7O0FBQ0Esa0JBQUlGLFlBQVksR0FBR0UsU0FBUyxHQUFHLEVBQS9CLEVBQW1DO0FBQ2pDRSxxQkFBSyxHQUFHLE1BQVI7QUFDQSxvQkFBTUcsV0FBUyxHQUFHLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsRUFBaEIsQ0FBbEI7O0FBQ0Esb0JBQU1DLFdBQVMsR0FBRyxVQUFJRCxXQUFKLEVBQWV0TyxHQUFmLENBQW1CLFVBQUFDLENBQUM7QUFBQSx5QkFBSUEsQ0FBQyxHQUFHZ08sU0FBUjtBQUFBLGlCQUFwQixDQUFsQjs7QUFDQSxvQkFBSXhELEdBQUMsR0FBRyxDQUFSOztBQUNBLHVCQUFPOEQsV0FBUyxDQUFDOUQsR0FBRCxDQUFULElBQWdCc0QsWUFBdkI7QUFBcUN0RCxxQkFBQztBQUF0Qzs7QUFDQTJELHlCQUFTLEdBQUdHLFdBQVMsQ0FBQzlELEdBQUQsQ0FBckI7QUFDQXlELHlCQUFTLEdBQUdJLFdBQVMsQ0FBQzdELEdBQUQsQ0FBckI7QUFDRCxlQVJELE1BUU87QUFDTDBELHFCQUFLLEdBQUcsUUFBUjtBQUNEO0FBQ0Y7QUFDRjtBQUNGOztBQUNELFlBQUlPLGFBQWEsR0FBR1YsT0FBcEI7QUFDQSxZQUFJVyxNQUFNLEdBQUcsRUFBYjs7QUFDQSxZQUFJUixLQUFLLEtBQUssUUFBZCxFQUF3QjtBQUN0Qk8sdUJBQWEsR0FBR2pNLE1BQU0sQ0FBQ2lNLGFBQUQsQ0FBTixDQUFzQkUsT0FBdEIsQ0FBOEJULEtBQTlCLENBQWhCO0FBQ0EsY0FBTVUsU0FBUyxHQUFHSCxhQUFhLENBQUNQLEtBQUQsQ0FBYixFQUFsQjs7QUFDQSxjQUFJQSxLQUFLLEtBQUssTUFBZCxFQUFzQjtBQUNwQixnQkFBSUQsU0FBUyxJQUFJLENBQWpCLEVBQ0VRLGFBQWEsR0FBR2pNLE1BQU0sQ0FBQ2lNLGFBQWEsQ0FBQzlMLE9BQWQsRUFBRCxDQUFOLENBQWdDa00sVUFBaEMsQ0FBMkMsQ0FBM0MsQ0FBaEIsQ0FERixLQUdFSixhQUFhLEdBQUdqTSxNQUFNLENBQUNpTSxhQUFhLENBQUM5TCxPQUFkLEVBQUQsQ0FBTixDQUFnQzBFLEdBQWhDLENBQ2Q0RyxTQUFTLEdBQUcsQ0FBWixHQUFpQixDQUFDVyxTQUFTLEdBQUcsQ0FBYixJQUFrQlgsU0FEckIsRUFFZCxLQUZjLENBQWhCO0FBSUgsV0FSRCxNQVFPO0FBQ0xRLHlCQUFhLEdBQUdqTSxNQUFNLENBQUNpTSxhQUFhLENBQUM5TCxPQUFkLEVBQUQsQ0FBTixDQUFnQzBFLEdBQWhDLENBQ2Q0RyxTQUFTLEdBQUcsQ0FBWixHQUFpQixDQUFDVyxTQUFTLEdBQUcsQ0FBYixJQUFrQlgsU0FEckIsRUFFZEMsS0FGYyxDQUFoQjtBQUlEOztBQUNEUSxnQkFBTSxDQUFDOUssSUFBUCxDQUFZNkssYUFBYSxDQUFDOUwsT0FBZCxFQUFaO0FBQ0EsY0FBSTJHLFNBQVMsR0FBR29GLE1BQU0sQ0FBQ0EsTUFBTSxDQUFDbEssTUFBUCxHQUFnQixDQUFqQixDQUF0Qjs7QUFDQSxpQkFBTzhFLFNBQVMsR0FBRzJCLEdBQW5CLEVBQXdCO0FBQ3RCLGdCQUFNNkQsUUFBUSxHQUFHeEYsU0FBUyxHQUFHNkUsU0FBN0I7QUFDQU8sa0JBQU0sQ0FBQzlLLElBQVAsQ0FBWWtMLFFBQVo7QUFDQXhGLHFCQUFTLEdBQUdvRixNQUFNLENBQUNBLE1BQU0sQ0FBQ2xLLE1BQVAsR0FBZ0IsQ0FBakIsQ0FBbEI7QUFDRDtBQUNGLFNBeEJELE1Bd0JPO0FBQ0x3SixtQkFBUyxJQUFJLEVBQWI7O0FBQ0EsY0FBSUYsWUFBWSxHQUFHRSxTQUFTLEdBQUcsQ0FBL0IsRUFBa0M7QUFDaENFLGlCQUFLLEdBQUcsT0FBUjtBQUNBLGdCQUFNRyxXQUFTLEdBQUcsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FBbEI7O0FBQ0EsZ0JBQU1DLFdBQVMsR0FBRyxVQUFJRCxXQUFKLEVBQWV0TyxHQUFmLENBQW1CLFVBQUFDLENBQUM7QUFBQSxxQkFBSUEsQ0FBQyxHQUFHZ08sU0FBUjtBQUFBLGFBQXBCLENBQWxCOztBQUNBLGdCQUFJeEQsR0FBQyxHQUFHLENBQVI7O0FBQ0EsbUJBQU84RCxXQUFTLENBQUM5RCxHQUFELENBQVQsSUFBZ0JzRCxZQUF2QjtBQUFxQ3RELGlCQUFDO0FBQXRDLGFBTGdDLENBTWhDOzs7QUFDQXlELHFCQUFTLEdBQUdJLFdBQVMsQ0FBQzdELEdBQUQsQ0FBckI7QUFDRCxXQVJELE1BUU87QUFBQTtBQUNMd0QsdUJBQVMsSUFBSSxNQUFNLEVBQW5CO0FBQ0FFLG1CQUFLLEdBQUcsTUFBUjtBQUNBLGtCQUFNRyxTQUFTLEdBQUcsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLEVBQVAsQ0FBbEI7QUFDQSxrQkFBSUMsU0FBUyxHQUFHLFVBQUlELFNBQUosRUFBZXRPLEdBQWYsQ0FBbUIsVUFBQUMsQ0FBQztBQUFBLHVCQUFJQSxDQUFDLEdBQUdnTyxTQUFSO0FBQUEsZUFBcEIsQ0FBaEI7QUFDQSxrQkFBSXhELENBQUMsR0FBRyxDQUFSO0FBQ0Esa0JBQUl1RSxDQUFDLEdBQUcsQ0FBUjs7QUFDQSxxQkFBT1QsU0FBUyxDQUFDOUQsQ0FBRCxDQUFULElBQWdCc0QsWUFBdkIsRUFBcUM7QUFDbkN0RCxpQkFBQzs7QUFDRCxvQkFBSUEsQ0FBQyxLQUFLOEQsU0FBUyxDQUFDOUosTUFBcEIsRUFBNEI7QUFDMUIsc0JBQUksQ0FBQ3VLLENBQUwsRUFBUTtBQUNOViw2QkFBUyxDQUFDVyxNQUFWLENBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCLEdBQXZCO0FBQ0Q7O0FBQ0R4RSxtQkFBQyxHQUFHLENBQUo7QUFDQXVFLG1CQUFDLEdBTHlCLENBTTFCOztBQUNBVCwyQkFBUyxHQUFHLFVBQUlELFNBQUosRUFBZXRPLEdBQWYsQ0FBbUIsVUFBQUMsQ0FBQztBQUFBLDJCQUFJQSxDQUFDLFlBQUcsRUFBSCxFQUFTK08sQ0FBVCxDQUFELEdBQWNmLFNBQWxCO0FBQUEsbUJBQXBCLENBQVo7QUFDRDtBQUNGLGVBbEJJLENBbUJMOzs7QUFDQUMsdUJBQVMsR0FBR0ksU0FBUyxDQUFDN0QsQ0FBRCxDQUFULFlBQWUsRUFBZixFQUFxQnVFLENBQXJCLENBQVo7QUFwQks7QUFxQk47O0FBQ0ROLHVCQUFhLEdBQUdqTSxNQUFNLENBQUN1TCxPQUFELENBQU4sQ0FBZ0JZLE9BQWhCLENBQXdCVCxLQUF4QixFQUErQjdHLEdBQS9CLENBQW1DLENBQW5DLEVBQXNDNkcsS0FBdEMsQ0FBaEI7O0FBQ0EsY0FBTVUsVUFBUyxHQUFHSCxhQUFhLENBQUNQLEtBQUQsQ0FBYixFQUFsQjs7QUFDQU8sdUJBQWEsR0FBR2pNLE1BQU0sQ0FBQ2lNLGFBQWEsQ0FBQzlMLE9BQWQsRUFBRCxDQUFOLENBQWdDMEUsR0FBaEMsQ0FDZDRHLFNBQVMsR0FBRyxDQUFaLEdBQWlCLENBQUNXLFVBQVMsR0FBRyxDQUFiLElBQWtCWCxTQURyQixFQUVkQyxLQUZjLENBQWhCO0FBSUFRLGdCQUFNLENBQUM5SyxJQUFQLENBQVk2SyxhQUFhLENBQUM5TCxPQUFkLEVBQVo7QUFDQSxjQUFJMkcsVUFBUyxHQUFHb0YsTUFBTSxDQUFDQSxNQUFNLENBQUNsSyxNQUFQLEdBQWdCLENBQWpCLENBQXRCOztBQUNBLGlCQUFPOEUsVUFBUyxHQUFHMkIsR0FBbkIsRUFBd0I7QUFDdEIsZ0JBQU02RCxTQUFRLEdBQUd0TSxNQUFNLENBQUM4RyxVQUFELENBQU4sQ0FBa0JqQyxHQUFsQixDQUFzQjRHLFNBQXRCLEVBQWlDQyxLQUFqQyxFQUF3Q3ZMLE9BQXhDLEVBQWpCOztBQUNBK0wsa0JBQU0sQ0FBQzlLLElBQVAsQ0FBWWtMLFNBQVo7QUFDQXhGLHNCQUFTLEdBQUdvRixNQUFNLENBQUNBLE1BQU0sQ0FBQ2xLLE1BQVAsR0FBZ0IsQ0FBakIsQ0FBbEI7QUFDRDs7QUFDRGtLLGdCQUFNLENBQUNPLEdBQVA7QUFDRDs7QUFDRCxZQUFJZixLQUFLLEtBQUssT0FBVixJQUFxQkQsU0FBUyxHQUFHLENBQXJDLEVBQ0VTLE1BQU0sR0FBRyxtQkFBSUEsTUFBSixFQUFZM08sR0FBWixDQUFnQixVQUFBbVAsS0FBSztBQUFBLGlCQUFJMU0sTUFBTSxDQUFDME0sS0FBRCxDQUFOLENBQWNDLFFBQWQsQ0FBdUIsQ0FBdkIsRUFBMEIsS0FBMUIsRUFBaUN4TSxPQUFqQyxFQUFKO0FBQUEsU0FBckIsQ0FBVDtBQUNGLGVBQU8sQ0FDTCtMLE1BQU0sQ0FBQzNPLEdBQVAsQ0FBVyxVQUFBbVAsS0FBSztBQUFBLGlCQUFLO0FBQ25CdEQsYUFBQyxFQUFFLENBQUNzRCxLQUFLLEdBQUduQixPQUFULElBQW9CdEYsVUFBcEIsR0FBaUNELFlBRGpCO0FBRW5CcUYsaUJBQUssRUFBRXFCO0FBRlksV0FBTDtBQUFBLFNBQWhCLENBREssRUFLTGhCLEtBTEssQ0FBUDtBQU9ELE9BaEpEOztBQWlKQSxVQUFNa0IsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDQyxLQUFELEVBQVFDLEtBQVIsRUFBa0I7QUFDekMsWUFBSTdCLFVBQVUsQ0FBQ0EsVUFBVSxDQUFDakosTUFBWCxHQUFvQixDQUFyQixDQUFWLEdBQW9Da0osTUFBcEMsR0FBNkNGLGlCQUFqRCxFQUFvRTtBQUNsRSxpQkFBT0MsVUFBVSxDQUFDQSxVQUFVLENBQUNqSixNQUFYLEdBQW9CLENBQXJCLENBQVYsR0FBb0NrSixNQUFwQyxHQUE2Q0YsaUJBQXBEO0FBQ0VFLGtCQUFNLElBQUksRUFBVjtBQURGOztBQUVBQSxnQkFBTSxJQUFJLEVBQVY7QUFDRDs7QUFDRCxZQUFJRCxVQUFVLENBQUMsQ0FBRCxDQUFWLEdBQWdCQyxNQUFoQixHQUF5QkYsaUJBQTdCLEVBQWdEO0FBQzlDLGlCQUFPQyxVQUFVLENBQUMsQ0FBRCxDQUFWLEdBQWdCQyxNQUFoQixHQUF5QkYsaUJBQWhDO0FBQW1ERSxrQkFBTSxJQUFJLEVBQVY7QUFBbkQ7O0FBQ0FBLGdCQUFNLElBQUksRUFBVjtBQUNEOztBQUNELFlBQU02QixNQUFNLEdBQ1Y7QUFDQXRHLGdCQUFRLElBQUl5RSxNQUFNLEdBQUc4QixjQUFULElBQTJCLENBQXZDLEdBQ0kvQixVQUFVLENBQUMzSyxNQUFYLENBQWtCLFVBQUEyTSxDQUFDO0FBQUEsaUJBQUksQ0FBQ3hHLFFBQUQsSUFBYXdHLENBQUMsS0FBSyxHQUF2QjtBQUFBLFNBQW5CLENBREosR0FFSWhDLFVBSk4sQ0FWeUMsQ0FlekM7O0FBZnlDLDZCQWdCbkI4QixNQUFNLENBQUN0RixNQUFQLENBQ3BCLFVBQUNDLEdBQUQsRUFBTUMsR0FBTixFQUFXSyxDQUFYLEVBQWlCO0FBQ2YsaUJBQU9OLEdBQUcsQ0FBQyxDQUFELENBQUgsR0FBU3dELE1BQVQsR0FBa0JGLGlCQUFsQixHQUNILENBQUN0RCxHQUFHLENBQUMsQ0FBRCxDQUFKLEVBQVNBLEdBQUcsQ0FBQyxDQUFELENBQVosQ0FERyxHQUVILENBQUNDLEdBQUQsRUFBTUssQ0FBQyxLQUFLLENBQVosQ0FGSixDQURlLENBR0k7QUFDcEIsU0FMbUIsRUFNcEIsQ0FBQyxDQUFELEVBQUksS0FBSixDQU5vQixDQWhCbUI7QUFBQTtBQUFBLFlBZ0JwQ2tGLFFBaEJvQztBQUFBLFlBZ0IxQnJJLEdBaEIwQjs7QUF3QnpDLFlBQUlzSSxRQUFRLEdBQUcsQ0FBZjtBQUNBLFlBQUlqQyxNQUFKLEVBQVksT0FBTyxhQUFNaUMsUUFBTixJQUFpQixJQUFJakMsTUFBNUI7QUFBb0NpQyxrQkFBUTtBQUE1QztBQUNaLFlBQUl0SSxHQUFKLEVBQVNzSSxRQUFRO0FBQ2pCRCxnQkFBUSxHQUFHRSxNQUFNLENBQUNBLE1BQU0sQ0FBQ0MsVUFBUCxDQUFrQkgsUUFBUSxHQUFHaEMsTUFBN0IsRUFBcUNvQyxPQUFyQyxDQUE2Q0gsUUFBN0MsQ0FBRCxDQUFqQjtBQUNBLFlBQU1sQixhQUFhLEdBQ2pCbUIsTUFBTSxDQUNKQSxNQUFNLENBQUNDLFVBQVAsQ0FBa0J6UCxJQUFJLENBQUMyUCxJQUFMLENBQVVULEtBQUssR0FBR0ksUUFBbEIsSUFBOEJBLFFBQWhELEVBQTBESSxPQUExRCxDQUFrRUgsUUFBbEUsQ0FESSxDQUFOLElBRUssQ0FIUDtBQUlBLFlBQU1qQixNQUFNLEdBQUcsRUFBZjs7QUFDQSxZQUFJZ0IsUUFBSixFQUFjO0FBQ1poQixnQkFBTSxDQUFDOUssSUFBUCxDQUFZNkssYUFBWjs7QUFDQSxpQkFBT0MsTUFBTSxDQUFDQSxNQUFNLENBQUNsSyxNQUFQLEdBQWdCLENBQWpCLENBQU4sR0FBNEJrTCxRQUE1QixJQUF3Q0osS0FBSyxHQUFHRCxLQUF2RCxFQUE4RDtBQUM1RCxnQkFBTVAsUUFBUSxHQUFHYyxNQUFNLENBQ3JCQSxNQUFNLENBQUNDLFVBQVAsQ0FBa0JuQixNQUFNLENBQUNBLE1BQU0sQ0FBQ2xLLE1BQVAsR0FBZ0IsQ0FBakIsQ0FBTixHQUE0QmtMLFFBQTlDLEVBQXdESSxPQUF4RCxDQUFnRUgsUUFBaEUsQ0FEcUIsQ0FBdkI7QUFHQWpCLGtCQUFNLENBQUM5SyxJQUFQLENBQVlrTCxRQUFaO0FBQ0Q7QUFDRjs7QUFDRCxlQUFPSixNQUFQO0FBQ0QsT0EzQ0Q7O0FBdEpvRSw4QkFrTTFDZixnQkFBZ0IsQ0FBQ1gsTUFBTSxHQUFHdkUsVUFBVCxHQUFzQkQsWUFBdkIsRUFBcUMsQ0FBckMsQ0FsTTBCO0FBQUE7QUFBQSxVQWtNN0R3SCxPQWxNNkQ7QUFBQSxVQWtNcERDLE1BbE1vRDs7QUFtTXBFLFVBQU1DLE9BQU8sR0FBR2QsZ0JBQWdCLENBQUNuQyxNQUFELEVBQVNGLENBQVQsQ0FBaEM7QUFFQSxVQUFNb0QsUUFBUSxHQUFHLEVBQWpCO0FBQ0EsVUFBTUMsTUFBTSxHQUFHcEQsTUFBTSxHQUFHLEtBQUtILEtBQTdCO0FBQ0EsVUFBTXdELE1BQU0sR0FBR3BELE1BQU0sR0FBRyxLQUFLSCxNQUE3QjtBQUVBa0QsYUFBTyxDQUFDL0wsT0FBUixDQUFnQixpQkFBd0I7QUFBQSxZQUFsQnFNLElBQWtCLFNBQXJCMUUsQ0FBcUI7QUFBQSxZQUFaaUMsS0FBWSxTQUFaQSxLQUFZO0FBQ3RDLFlBQU0wQyxZQUFZLEdBQUc5SixRQUFRLENBQUNHLGVBQVQsQ0FBeUJwQixTQUF6QixFQUFvQyxNQUFwQyxDQUFyQjtBQUNBK0ssb0JBQVksQ0FBQ25KLFNBQWIsQ0FBdUJDLEdBQXZCLENBQTJCLFdBQTNCO0FBQ0FrSixvQkFBWSxDQUFDekosY0FBYixDQUE0QixJQUE1QixFQUFrQyxJQUFsQyxFQUF3Q3dKLElBQXhDO0FBQ0FDLG9CQUFZLENBQUN6SixjQUFiLENBQTRCLElBQTVCLEVBQWtDLElBQWxDLEVBQXdDd0osSUFBeEM7QUFDQUMsb0JBQVksQ0FBQ3pKLGNBQWIsQ0FBNEIsSUFBNUIsRUFBa0MsSUFBbEMsRUFBd0NpRyxDQUF4QztBQUNBd0Qsb0JBQVksQ0FBQ3pKLGNBQWIsQ0FBNEIsSUFBNUIsRUFBa0MsSUFBbEMsRUFBd0NpRyxDQUFDLEdBQUdFLE1BQTVDO0FBQ0FzRCxvQkFBWSxDQUFDekosY0FBYixDQUE0QixJQUE1QixFQUFrQyxjQUFsQyxFQUFrRCxLQUFsRDtBQUNBd0csaUJBQVMsQ0FBQ3RHLFdBQVYsQ0FBc0J1SixZQUF0Qjs7QUFFQSxZQUFNQyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUF0QyxLQUFLLEVBQUk7QUFDbEMsa0JBQVFBLEtBQVI7QUFDRSxpQkFBSyxhQUFMO0FBQ0UscUJBQU8sUUFBUDs7QUFDRixpQkFBSyxRQUFMO0FBQ0UscUJBQU8sT0FBUDs7QUFDRixpQkFBSyxRQUFMO0FBQ0UscUJBQU8sYUFBUDs7QUFDRixpQkFBSyxNQUFMO0FBQ0UscUJBQU8sYUFBUDs7QUFDRixpQkFBSyxNQUFMO0FBQ0UscUJBQU8sT0FBUDs7QUFDRixpQkFBSyxPQUFMO0FBQ0UscUJBQU8sVUFBUDs7QUFDRixpQkFBSyxNQUFMO0FBQ0UscUJBQU8sTUFBUDs7QUFDRjtBQUNFLHFCQUFPLElBQVA7QUFoQko7QUFrQkQsU0FuQkQ7O0FBcUJBLFlBQU11QyxZQUFZLEdBQUdoSyxRQUFRLENBQUNHLGVBQVQsQ0FBeUJwQixTQUF6QixFQUFvQyxNQUFwQyxDQUFyQjtBQUNBaUwsb0JBQVksQ0FBQ3JKLFNBQWIsQ0FBdUJDLEdBQXZCLENBQTJCLFlBQTNCO0FBQ0FvSixvQkFBWSxDQUFDM0osY0FBYixDQUE0QixJQUE1QixFQUFrQyxHQUFsQyxFQUF1Q3dKLElBQXZDO0FBQ0FHLG9CQUFZLENBQUMzSixjQUFiLENBQTRCLElBQTVCLEVBQWtDLEdBQWxDLEVBQXVDLENBQXZDO0FBQ0EySixvQkFBWSxDQUFDMUosWUFBYixDQUEwQixXQUExQixZQUEwQ29KLFFBQVEsR0FBR0MsTUFBckQ7QUFDQUssb0JBQVksQ0FBQzFKLFlBQWIsQ0FBMEIsbUJBQTFCLEVBQStDLFNBQS9DO0FBQ0EwSixvQkFBWSxDQUFDMUosWUFBYixDQUEwQixhQUExQixFQUF5QyxRQUF6QztBQUNBMEosb0JBQVksQ0FBQ25LLFNBQWIsYUFBNEI5RCxNQUFNLENBQUNxTCxLQUFELENBQU4sQ0FBYzZDLE1BQWQsQ0FBcUJGLGtCQUFrQixDQUFDUCxNQUFELENBQXZDLENBQTVCO0FBQ0E5QyxhQUFLLENBQUNuRyxXQUFOLENBQWtCeUosWUFBbEI7QUFDRCxPQXhDRDtBQXlDQVAsYUFBTyxDQUFDak0sT0FBUixDQUFnQixVQUFBaUwsS0FBSyxFQUFJO0FBQ3ZCLFlBQU1xQixZQUFZLEdBQUc5SixRQUFRLENBQUNHLGVBQVQsQ0FBeUJwQixTQUF6QixFQUFvQyxNQUFwQyxDQUFyQjtBQUNBK0ssb0JBQVksQ0FBQ25KLFNBQWIsQ0FBdUJDLEdBQXZCLENBQTJCLFdBQTNCO0FBQ0FrSixvQkFBWSxDQUFDekosY0FBYixDQUE0QixJQUE1QixFQUFrQyxJQUFsQyxFQUF3QzhFLENBQXhDO0FBQ0EyRSxvQkFBWSxDQUFDekosY0FBYixDQUE0QixJQUE1QixFQUFrQyxJQUFsQyxFQUF3QzhFLENBQUMsR0FBR29CLE1BQTVDO0FBQ0F1RCxvQkFBWSxDQUFDekosY0FBYixDQUE0QixJQUE1QixFQUFrQyxJQUFsQyxFQUF3Q29JLEtBQXhDO0FBQ0FxQixvQkFBWSxDQUFDekosY0FBYixDQUE0QixJQUE1QixFQUFrQyxJQUFsQyxFQUF3Q29JLEtBQXhDO0FBQ0FxQixvQkFBWSxDQUFDekosY0FBYixDQUE0QixJQUE1QixFQUFrQyxjQUFsQyxFQUFrRCxLQUFsRDtBQUNBd0csaUJBQVMsQ0FBQ3RHLFdBQVYsQ0FBc0J1SixZQUF0QjtBQUVBLFlBQU1FLFlBQVksR0FBR2hLLFFBQVEsQ0FBQ0csZUFBVCxDQUF5QnBCLFNBQXpCLEVBQW9DLE1BQXBDLENBQXJCO0FBQ0FpTCxvQkFBWSxDQUFDckosU0FBYixDQUF1QkMsR0FBdkIsQ0FBMkIsWUFBM0I7QUFDQW9KLG9CQUFZLENBQUMzSixjQUFiLENBQTRCLElBQTVCLEVBQWtDLEdBQWxDLEVBQXVDLENBQXZDO0FBQ0EySixvQkFBWSxDQUFDM0osY0FBYixDQUE0QixJQUE1QixFQUFrQyxHQUFsQyxFQUF1Q29JLEtBQXZDO0FBQ0F1QixvQkFBWSxDQUFDMUosWUFBYixDQUEwQixXQUExQixZQUEwQ29KLFFBQVEsR0FBR0UsTUFBckQ7QUFDQUksb0JBQVksQ0FBQzFKLFlBQWIsQ0FBMEIsbUJBQTFCLEVBQStDLFFBQS9DO0FBQ0EwSixvQkFBWSxDQUFDbkssU0FBYixhQUE0QixDQUFDNEksS0FBN0I7QUFDQTlCLGFBQUssQ0FBQ3BHLFdBQU4sQ0FBa0J5SixZQUFsQjtBQUNELE9BbEJEO0FBbUJEO0FBL2FIO0FBQUE7QUFBQSxXQWliRSx5QkFBZ0JFLFdBQWhCLEVBQTZCO0FBQzNCLFdBQUt0SCxVQUFMLENBQWdCMUksVUFBaEIsQ0FBMkJzRCxPQUEzQixDQUFtQyxVQUFDMk0sTUFBRCxFQUFTcEcsQ0FBVCxFQUFlO0FBQ2hELFlBQU1xRyxVQUFVLEdBQUdELE1BQU0sQ0FBQ25GLEtBQVAsR0FBZW1GLE1BQU0sQ0FBQ3RGLElBQXpDO0FBQ0EsWUFBTXdGLFlBQVksR0FBRzFRLElBQUksQ0FBQzJRLEdBQUwsQ0FBU0YsVUFBVCxDQUFyQjtBQUVBLFlBQU1HLFVBQVUsR0FBR3ZLLFFBQVEsQ0FBQ0csZUFBVCxDQUF5QnBCLFNBQXpCLEVBQW9DLE1BQXBDLENBQW5CO0FBQ0F3TCxrQkFBVSxDQUFDNUosU0FBWCxDQUFxQkMsR0FBckIsQ0FBeUIsYUFBekI7QUFDQTJKLGtCQUFVLENBQUNsSyxjQUFYLENBQTBCLElBQTFCLEVBQWdDLEdBQWhDLEVBQXFDLElBQUswRCxDQUFDLEdBQUc5QixTQUFMLEdBQWtCRCxVQUEzRDtBQUNBdUksa0JBQVUsQ0FBQ2xLLGNBQVgsQ0FBMEIsSUFBMUIsRUFBZ0MsR0FBaEMsRUFBcUMsQ0FBQzFHLElBQUksQ0FBQzZLLEdBQUwsQ0FBUzJGLE1BQU0sQ0FBQ25GLEtBQWhCLEVBQXVCbUYsTUFBTSxDQUFDdEYsSUFBOUIsQ0FBdEM7QUFDQTBGLGtCQUFVLENBQUNsSyxjQUFYLENBQTBCLElBQTFCLEVBQWdDLE9BQWhDLEVBQXlDNEIsU0FBUyxHQUFHRCxVQUFyRDtBQUNBdUksa0JBQVUsQ0FBQ2xLLGNBQVgsQ0FBMEIsSUFBMUIsRUFBZ0MsUUFBaEMsRUFBMENnSyxZQUExQztBQUVBLFlBQU1HLFFBQVEsR0FBR3hLLFFBQVEsQ0FBQ0csZUFBVCxDQUF5QnBCLFNBQXpCLEVBQW9DLE1BQXBDLENBQWpCO0FBQ0F5TCxnQkFBUSxDQUFDN0osU0FBVCxDQUFtQkMsR0FBbkIsQ0FBdUIsYUFBdkI7QUFDQTRKLGdCQUFRLENBQUNuSyxjQUFULENBQXdCLElBQXhCLEVBQThCLElBQTlCLEVBQXFDLENBQUMsTUFBTTBELENBQVAsSUFBWTlCLFNBQWIsR0FBMEJELFVBQTlEO0FBQ0F3SSxnQkFBUSxDQUFDbkssY0FBVCxDQUF3QixJQUF4QixFQUE4QixJQUE5QixFQUFxQyxDQUFDLE1BQU0wRCxDQUFQLElBQVk5QixTQUFiLEdBQTBCRCxVQUE5RDtBQUNBd0ksZ0JBQVEsQ0FBQ25LLGNBQVQsQ0FBd0IsSUFBeEIsRUFBOEIsSUFBOUIsRUFBb0MsQ0FBQzhKLE1BQU0sQ0FBQ3BGLElBQTVDO0FBQ0F5RixnQkFBUSxDQUFDbkssY0FBVCxDQUF3QixJQUF4QixFQUE4QixJQUE5QixFQUFvQyxDQUFDOEosTUFBTSxDQUFDckYsR0FBNUM7QUFDQTBGLGdCQUFRLENBQUNuSyxjQUFULENBQXdCLElBQXhCLEVBQThCLGNBQTlCLEVBQThDLEtBQTlDOztBQUVBLFlBQUkrSixVQUFKLEVBQWdCO0FBQ2RHLG9CQUFVLENBQUM1SixTQUFYLENBQXFCQyxHQUFyQixXQUE0QndKLFVBQVUsR0FBRyxDQUFiLEdBQWlCLFVBQWpCLEdBQThCLFVBQTFEO0FBQ0FJLGtCQUFRLENBQUM3SixTQUFULENBQW1CQyxHQUFuQixXQUEwQndKLFVBQVUsR0FBRyxDQUFiLEdBQWlCLFVBQWpCLEdBQThCLFVBQXhEO0FBQ0Q7O0FBRURGLG1CQUFXLENBQUMzSixXQUFaLENBQXdCZ0ssVUFBeEI7QUFDQUwsbUJBQVcsQ0FBQzNKLFdBQVosQ0FBd0JpSyxRQUF4QjtBQUNELE9BMUJEO0FBMkJEO0FBN2NIO0FBQUE7QUFBQSxXQStjRSx5QkFBZ0JDLFdBQWhCLEVBQTZCO0FBQUE7O0FBQzNCLFVBQU1DLFNBQVMsR0FBRyxLQUFLOUgsVUFBTCxDQUFnQjBDLFVBQWhCLENBQTJCOUIsTUFBM0IsQ0FDaEIsVUFBQ0MsR0FBRDtBQUFBLFlBQVE4QixNQUFSLFNBQVFBLE1BQVI7QUFBQSxlQUFxQjVMLElBQUksQ0FBQzZLLEdBQUwsQ0FBU2YsR0FBVCxFQUFjOEIsTUFBZCxDQUFyQjtBQUFBLE9BRGdCLEVBRWhCLENBRmdCLENBQWxCO0FBSUEsV0FBSzNDLFVBQUwsQ0FBZ0IwQyxVQUFoQixDQUEyQjlILE9BQTNCLENBQW1DLGlCQUEwQnVHLENBQTFCLEVBQWdDO0FBQUEsWUFBN0JqSSxJQUE2QixTQUE3QkEsSUFBNkI7QUFBQSxZQUF2QnlKLE1BQXVCLFNBQXZCQSxNQUF1QjtBQUFBLFlBQWZ6RixLQUFlLFNBQWZBLEtBQWU7O0FBQ2pFLFlBQUl5RixNQUFKLEVBQVk7QUFDVixjQUFNYyxNQUFNLEdBQUlkLE1BQU0sR0FBR21GLFNBQVYsR0FBdUIsTUFBSSxDQUFDeEgsVUFBNUIsR0FBeUNmLHFCQUF4RDtBQUNBLGNBQU13SSxVQUFVLEdBQUczSyxRQUFRLENBQUNHLGVBQVQsQ0FBeUJwQixTQUF6QixFQUFvQyxNQUFwQyxDQUFuQjtBQUNBNEwsb0JBQVUsQ0FBQ2hLLFNBQVgsQ0FBcUJDLEdBQXJCLENBQXlCLFFBQXpCO0FBQ0ErSixvQkFBVSxDQUFDdEssY0FBWCxDQUEwQixJQUExQixFQUFnQyxHQUFoQyxFQUFxQyxJQUFLMEQsQ0FBQyxHQUFHOUIsU0FBTCxHQUFrQkQsVUFBM0Q7QUFDQTJJLG9CQUFVLENBQUN0SyxjQUFYLENBQTBCLElBQTFCLEVBQWdDLEdBQWhDLEVBQXFDLE1BQUksQ0FBQzRDLEtBQUwsR0FBYSxNQUFJLENBQUNDLFVBQWxCLEdBQStCbUQsTUFBcEU7QUFDQXNFLG9CQUFVLENBQUN0SyxjQUFYLENBQTBCLElBQTFCLEVBQWdDLE9BQWhDLEVBQXlDNEIsU0FBUyxHQUFHRCxVQUFyRDtBQUNBMkksb0JBQVUsQ0FBQ3RLLGNBQVgsQ0FBMEIsSUFBMUIsRUFBZ0MsUUFBaEMsRUFBMENnRyxNQUExQztBQUNBc0Usb0JBQVUsQ0FBQ2hLLFNBQVgsQ0FBcUJDLEdBQXJCLFdBQTRCZCxLQUE1QjtBQUNBMksscUJBQVcsQ0FBQ2xLLFdBQVosQ0FBd0JvSyxVQUF4QjtBQUNEO0FBQ0YsT0FaRDtBQWFEO0FBamVIO0FBQUE7QUFBQSxXQW1lRSwwQkFBaUJ4RixDQUFqQixFQUFvQm1CLENBQXBCLEVBQXVCakIsU0FBdkIsRUFBa0N2RixLQUFsQyxFQUF5QztBQUN2QyxVQUFNOEssVUFBVSxHQUFHLEVBQW5CO0FBQ0EsVUFBTUMsWUFBWSxHQUFHLEVBQXJCO0FBQ0EsVUFBTWxCLE1BQU0sR0FBRyxLQUFLM0csVUFBTCxHQUFrQixLQUFLb0QsS0FBdEM7QUFDQSxVQUFNd0QsTUFBTSxHQUFHLEtBQUsxRyxVQUFMLEdBQWtCLEtBQUttRCxNQUF0QztBQUNBLFVBQU15RSxTQUFTLEdBQUdGLFVBQVUsR0FBR2pCLE1BQS9CO0FBQ0EsVUFBTW9CLFVBQVUsR0FBR0gsVUFBVSxHQUFHaEIsTUFBaEM7QUFDQSxVQUFNb0IsUUFBUSxHQUFHN0YsQ0FBQyxHQUFHMkYsU0FBUyxHQUFHLENBQWpDO0FBQ0EsVUFBTUcsT0FBTyxHQUNYM0UsQ0FBQyxHQUFHeUUsVUFBVSxHQUFHLENBQWpCLElBQXNCMUYsU0FBUyxLQUFLLElBQWQsR0FBcUJ3RixZQUFZLEdBQUdqQixNQUFwQyxHQUE2QyxDQUFuRSxDQURGO0FBRUEsVUFBTXNCLFVBQVUsR0FBR2xMLFFBQVEsQ0FBQ0csZUFBVCxDQUF5QnBCLFNBQXpCLEVBQW9DLEdBQXBDLENBQW5CO0FBQ0FtTSxnQkFBVSxDQUFDdkssU0FBWCxDQUFxQkMsR0FBckIsQ0FBeUIsUUFBekIsRUFYdUMsQ0FhdkM7O0FBQ0EsVUFBTXVLLFFBQVEsR0FBR25MLFFBQVEsQ0FBQ0csZUFBVCxDQUF5QnBCLFNBQXpCLEVBQW9DLFFBQXBDLENBQWpCO0FBQ0FvTSxjQUFRLENBQUN4SyxTQUFULENBQW1CQyxHQUFuQixDQUF1QixhQUF2QjtBQUNBdUssY0FBUSxDQUFDOUssY0FBVCxDQUF3QixJQUF4QixFQUE4QixJQUE5QixFQUFvQyxFQUFwQztBQUNBOEssY0FBUSxDQUFDOUssY0FBVCxDQUF3QixJQUF4QixFQUE4QixJQUE5QixFQUFvQyxFQUFwQztBQUNBOEssY0FBUSxDQUFDOUssY0FBVCxDQUF3QixJQUF4QixFQUE4QixHQUE5QixFQUFtQyxFQUFuQztBQUNBNkssZ0JBQVUsQ0FBQzNLLFdBQVgsQ0FBdUI0SyxRQUF2QixFQW5CdUMsQ0FvQnZDO0FBRUE7O0FBQ0EsVUFBTUMsUUFBUSxHQUFHcEwsUUFBUSxDQUFDRyxlQUFULENBQXlCcEIsU0FBekIsRUFBb0MsTUFBcEMsQ0FBakI7QUFDQXFNLGNBQVEsQ0FBQ2hMLEVBQVQsR0FBYyxXQUFkO0FBQ0EsVUFBTWlMLFFBQVEsR0FBR3JMLFFBQVEsQ0FBQ0csZUFBVCxDQUF5QnBCLFNBQXpCLEVBQW9DLE1BQXBDLENBQWpCO0FBQ0FzTSxjQUFRLENBQUMxSyxTQUFULENBQW1CQyxHQUFuQixDQUF1QixZQUF2QjtBQUNBeUssY0FBUSxDQUFDaEwsY0FBVCxDQUF3QixJQUF4QixFQUE4QixHQUE5QixFQUFtQyxDQUFuQztBQUNBZ0wsY0FBUSxDQUFDaEwsY0FBVCxDQUF3QixJQUF4QixFQUE4QixHQUE5QixFQUFtQyxDQUFuQztBQUNBZ0wsY0FBUSxDQUFDaEwsY0FBVCxDQUF3QixJQUF4QixFQUE4QixPQUE5QixFQUF1QyxHQUF2QztBQUNBZ0wsY0FBUSxDQUFDaEwsY0FBVCxDQUF3QixJQUF4QixFQUE4QixRQUE5QixFQUF3QyxHQUF4QztBQUNBK0ssY0FBUSxDQUFDN0ssV0FBVCxDQUFxQjhLLFFBQXJCO0FBQ0EsVUFBTUMsY0FBYyxHQUFHdEwsUUFBUSxDQUFDRyxlQUFULENBQXlCcEIsU0FBekIsRUFBb0MsUUFBcEMsQ0FBdkI7QUFDQXVNLG9CQUFjLENBQUMzSyxTQUFmLENBQXlCQyxHQUF6QixDQUE2QixZQUE3QjtBQUNBMEssb0JBQWMsQ0FBQ2pMLGNBQWYsQ0FBOEIsSUFBOUIsRUFBb0MsSUFBcEMsRUFBMEMsSUFBMUM7QUFDQWlMLG9CQUFjLENBQUNqTCxjQUFmLENBQThCLElBQTlCLEVBQW9DLElBQXBDLEVBQTBDLElBQTFDO0FBQ0FpTCxvQkFBYyxDQUFDakwsY0FBZixDQUE4QixJQUE5QixFQUFvQyxHQUFwQyxFQUF5QyxHQUF6QztBQUNBK0ssY0FBUSxDQUFDN0ssV0FBVCxDQUFxQitLLGNBQXJCO0FBQ0EsVUFBTUMsZUFBZSxHQUFHdkwsUUFBUSxDQUFDRyxlQUFULENBQXlCcEIsU0FBekIsRUFBb0MsUUFBcEMsQ0FBeEI7QUFDQXdNLHFCQUFlLENBQUM1SyxTQUFoQixDQUEwQkMsR0FBMUIsQ0FBOEIsWUFBOUI7QUFDQTJLLHFCQUFlLENBQUNsTCxjQUFoQixDQUErQixJQUEvQixFQUFxQyxJQUFyQyxFQUEyQyxJQUEzQztBQUNBa0wscUJBQWUsQ0FBQ2xMLGNBQWhCLENBQStCLElBQS9CLEVBQXFDLElBQXJDLEVBQTJDLElBQTNDO0FBQ0FrTCxxQkFBZSxDQUFDbEwsY0FBaEIsQ0FBK0IsSUFBL0IsRUFBcUMsR0FBckMsRUFBMEMsR0FBMUM7QUFDQStLLGNBQVEsQ0FBQzdLLFdBQVQsQ0FBcUJnTCxlQUFyQjtBQUNBTCxnQkFBVSxDQUFDM0ssV0FBWCxDQUF1QjZLLFFBQXZCLEVBNUN1QyxDQTZDdkM7QUFFQTs7QUFDQSxVQUFNcEssUUFBUSxHQUFHaEIsUUFBUSxDQUFDRyxlQUFULENBQXlCcEIsU0FBekIsRUFBb0MsTUFBcEMsQ0FBakI7QUFDQWlDLGNBQVEsQ0FBQ0wsU0FBVCxDQUFtQkMsR0FBbkIsQ0FBdUIsV0FBdkI7QUFDQUksY0FBUSxDQUFDWCxjQUFULENBQXdCLElBQXhCLEVBQThCLEdBQTlCLEVBQW1DLDJDQUFuQztBQUNBVyxjQUFRLENBQUNMLFNBQVQsQ0FBbUJDLEdBQW5CLENBQXVCZCxLQUF2QjtBQUNBb0wsZ0JBQVUsQ0FBQzNLLFdBQVgsQ0FBdUJTLFFBQXZCO0FBQ0EsVUFBTUMsUUFBUSxHQUFHakIsUUFBUSxDQUFDRyxlQUFULENBQXlCcEIsU0FBekIsRUFBb0MsUUFBcEMsQ0FBakI7QUFDQWtDLGNBQVEsQ0FBQ04sU0FBVCxDQUFtQkMsR0FBbkIsQ0FBdUIsV0FBdkI7QUFDQUssY0FBUSxDQUFDWixjQUFULENBQXdCLElBQXhCLEVBQThCLElBQTlCLEVBQW9DLEVBQXBDO0FBQ0FZLGNBQVEsQ0FBQ1osY0FBVCxDQUF3QixJQUF4QixFQUE4QixJQUE5QixFQUFvQyxFQUFwQztBQUNBWSxjQUFRLENBQUNaLGNBQVQsQ0FBd0IsSUFBeEIsRUFBOEIsR0FBOUIsRUFBbUMsQ0FBbkM7QUFDQVksY0FBUSxDQUFDTixTQUFULENBQW1CQyxHQUFuQixDQUF1QmQsS0FBdkI7QUFDQW9MLGdCQUFVLENBQUMzSyxXQUFYLENBQXVCVSxRQUF2QjtBQUNBLFVBQU1DLFFBQVEsR0FBR2xCLFFBQVEsQ0FBQ0csZUFBVCxDQUF5QnBCLFNBQXpCLEVBQW9DLE1BQXBDLENBQWpCO0FBQ0FtQyxjQUFRLENBQUNQLFNBQVQsQ0FBbUJDLEdBQW5CLENBQXVCLFdBQXZCO0FBQ0FNLGNBQVEsQ0FBQ2IsY0FBVCxDQUF3QixJQUF4QixFQUE4QixNQUE5QixFQUFzQyxpQkFBdEM7QUFDQWEsY0FBUSxDQUFDYixjQUFULENBQ0UsSUFERixFQUVFLEdBRkYsRUFHRTtBQUNBLGlPQUpGO0FBTUFhLGNBQVEsQ0FBQ1AsU0FBVCxDQUFtQkMsR0FBbkIsQ0FBdUJkLEtBQXZCO0FBQ0EsVUFBTTBMLFdBQVcsR0FBR1osVUFBVSxHQUFHLEdBQWpDO0FBQ0FNLGdCQUFVLENBQUM3SyxjQUFYLENBQ0UsSUFERixFQUVFLFdBRkYsc0JBR2UySyxRQUhmLGNBRzJCQyxPQUgzQixxQkFHNkN0QixNQUFNLEdBQUc2QixXQUh0RCxjQUlJNUIsTUFBTSxHQUFHNEIsV0FKYjtBQU9BTixnQkFBVSxDQUFDM0ssV0FBWCxDQUF1QlcsUUFBdkIsRUE5RXVDLENBK0V2QztBQUVBOztBQUNBLFVBQU1DLE9BQU8sR0FBR25CLFFBQVEsQ0FBQ0csZUFBVCxDQUF5QnBCLFNBQXpCLEVBQW9DLFFBQXBDLENBQWhCO0FBQ0FvQyxhQUFPLENBQUNSLFNBQVIsQ0FBa0JDLEdBQWxCLENBQXNCLGFBQXRCO0FBQ0FPLGFBQU8sQ0FBQ2QsY0FBUixDQUF1QixJQUF2QixFQUE2QixJQUE3QixFQUFtQyxFQUFuQztBQUNBYyxhQUFPLENBQUNkLGNBQVIsQ0FBdUIsSUFBdkIsRUFBNkIsSUFBN0IsRUFBbUMsRUFBbkM7QUFDQWMsYUFBTyxDQUFDZCxjQUFSLENBQXVCLElBQXZCLEVBQTZCLEdBQTdCLEVBQWtDLENBQWxDO0FBQ0FjLGFBQU8sQ0FBQ1IsU0FBUixDQUFrQkMsR0FBbEIsQ0FBc0JkLEtBQXRCO0FBQ0FvTCxnQkFBVSxDQUFDM0ssV0FBWCxDQUF1QlksT0FBdkI7QUFDQSxVQUFNQyxNQUFNLEdBQUdwQixRQUFRLENBQUNHLGVBQVQsQ0FBeUJwQixTQUF6QixFQUFvQyxTQUFwQyxDQUFmO0FBQ0FxQyxZQUFNLENBQUNoQixFQUFQLEdBQVksVUFBWjtBQUNBZ0IsWUFBTSxDQUFDZixjQUFQLENBQXNCLElBQXRCLEVBQTRCLGVBQTVCLEVBQTZDLEdBQTdDO0FBQ0FlLFlBQU0sQ0FBQ2YsY0FBUCxDQUFzQixJQUF0QixFQUE0QixlQUE1QixFQUE2QyxLQUE3QztBQUNBZSxZQUFNLENBQUNmLGNBQVAsQ0FBc0IsSUFBdEIsRUFBNEIsT0FBNUIsRUFBcUMsbUJBQXJDO0FBQ0FlLFlBQU0sQ0FBQ2YsY0FBUCxDQUFzQixJQUF0QixFQUE0QixLQUE1QixFQUFtQyxNQUFuQztBQUNBZSxZQUFNLENBQUNmLGNBQVAsQ0FBc0IsSUFBdEIsRUFBNEIsTUFBNUIsRUFBb0MsR0FBcEM7QUFDQWUsWUFBTSxDQUFDZixjQUFQLENBQXNCLElBQXRCLEVBQTRCLElBQTVCLEVBQWtDLEtBQWxDO0FBQ0FjLGFBQU8sQ0FBQ1osV0FBUixDQUFvQmEsTUFBcEI7QUFDQSxVQUFNQyxNQUFNLEdBQUdyQixRQUFRLENBQUNHLGVBQVQsQ0FBeUJwQixTQUF6QixFQUFvQyxTQUFwQyxDQUFmO0FBQ0FzQyxZQUFNLENBQUNqQixFQUFQLEdBQVksVUFBWjtBQUNBaUIsWUFBTSxDQUFDaEIsY0FBUCxDQUFzQixJQUF0QixFQUE0QixlQUE1QixFQUE2QyxTQUE3QztBQUNBZ0IsWUFBTSxDQUFDaEIsY0FBUCxDQUFzQixJQUF0QixFQUE0QixlQUE1QixFQUE2QyxLQUE3QztBQUNBZ0IsWUFBTSxDQUFDaEIsY0FBUCxDQUFzQixJQUF0QixFQUE0QixPQUE1QixFQUFxQyx1QkFBckM7QUFDQWdCLFlBQU0sQ0FBQ2hCLGNBQVAsQ0FBc0IsSUFBdEIsRUFBNEIsS0FBNUIsRUFBbUMsSUFBbkM7QUFDQWdCLFlBQU0sQ0FBQ2hCLGNBQVAsQ0FBc0IsSUFBdEIsRUFBNEIsTUFBNUIsRUFBb0MsS0FBcEM7QUFDQWdCLFlBQU0sQ0FBQ2hCLGNBQVAsQ0FBc0IsSUFBdEIsRUFBNEIsSUFBNUIsRUFBa0MsR0FBbEM7QUFDQWdCLFlBQU0sQ0FBQ2hCLGNBQVAsQ0FBc0IsSUFBdEIsRUFBNEIsTUFBNUIsRUFBb0MsUUFBcEM7QUFDQWMsYUFBTyxDQUFDWixXQUFSLENBQW9CYyxNQUFwQjtBQUVBLFVBQU1DLE9BQU8sR0FBR3RCLFFBQVEsQ0FBQ0csZUFBVCxDQUF5QnBCLFNBQXpCLEVBQW9DLFFBQXBDLENBQWhCO0FBQ0F1QyxhQUFPLENBQUNYLFNBQVIsQ0FBa0JDLEdBQWxCLENBQXNCLGFBQXRCO0FBQ0FVLGFBQU8sQ0FBQ2pCLGNBQVIsQ0FBdUIsSUFBdkIsRUFBNkIsSUFBN0IsRUFBbUMsRUFBbkM7QUFDQWlCLGFBQU8sQ0FBQ2pCLGNBQVIsQ0FBdUIsSUFBdkIsRUFBNkIsSUFBN0IsRUFBbUMsRUFBbkM7QUFDQWlCLGFBQU8sQ0FBQ2pCLGNBQVIsQ0FBdUIsSUFBdkIsRUFBNkIsR0FBN0IsRUFBa0MsQ0FBbEM7QUFDQWlCLGFBQU8sQ0FBQ1gsU0FBUixDQUFrQkMsR0FBbEIsQ0FBc0JkLEtBQXRCO0FBQ0FvTCxnQkFBVSxDQUFDM0ssV0FBWCxDQUF1QmUsT0FBdkI7QUFDQSxVQUFNQyxNQUFNLEdBQUd2QixRQUFRLENBQUNHLGVBQVQsQ0FBeUJwQixTQUF6QixFQUFvQyxTQUFwQyxDQUFmO0FBQ0F3QyxZQUFNLENBQUNuQixFQUFQLEdBQVksVUFBWjtBQUNBbUIsWUFBTSxDQUFDbEIsY0FBUCxDQUFzQixJQUF0QixFQUE0QixlQUE1QixFQUE2QyxHQUE3QztBQUNBa0IsWUFBTSxDQUFDbEIsY0FBUCxDQUFzQixJQUF0QixFQUE0QixlQUE1QixFQUE2QyxLQUE3QztBQUNBa0IsWUFBTSxDQUFDbEIsY0FBUCxDQUFzQixJQUF0QixFQUE0QixPQUE1QixFQUFxQyxxQkFBckM7QUFDQWtCLFlBQU0sQ0FBQ2xCLGNBQVAsQ0FBc0IsSUFBdEIsRUFBNEIsS0FBNUIsRUFBbUMsTUFBbkM7QUFDQWtCLFlBQU0sQ0FBQ2xCLGNBQVAsQ0FBc0IsSUFBdEIsRUFBNEIsTUFBNUIsRUFBb0MsR0FBcEM7QUFDQWtCLFlBQU0sQ0FBQ2xCLGNBQVAsQ0FBc0IsSUFBdEIsRUFBNEIsSUFBNUIsRUFBa0MsS0FBbEM7QUFDQWlCLGFBQU8sQ0FBQ2YsV0FBUixDQUFvQmdCLE1BQXBCO0FBQ0EsVUFBTUMsTUFBTSxHQUFHeEIsUUFBUSxDQUFDRyxlQUFULENBQXlCcEIsU0FBekIsRUFBb0MsU0FBcEMsQ0FBZjtBQUNBeUMsWUFBTSxDQUFDcEIsRUFBUCxHQUFZLFVBQVo7QUFDQW9CLFlBQU0sQ0FBQ25CLGNBQVAsQ0FBc0IsSUFBdEIsRUFBNEIsZUFBNUIsRUFBNkMsU0FBN0M7QUFDQW1CLFlBQU0sQ0FBQ25CLGNBQVAsQ0FBc0IsSUFBdEIsRUFBNEIsZUFBNUIsRUFBNkMsS0FBN0M7QUFDQW1CLFlBQU0sQ0FBQ25CLGNBQVAsQ0FBc0IsSUFBdEIsRUFBNEIsT0FBNUIsRUFBcUMsdUJBQXJDO0FBQ0FtQixZQUFNLENBQUNuQixjQUFQLENBQXNCLElBQXRCLEVBQTRCLEtBQTVCLEVBQW1DLElBQW5DO0FBQ0FtQixZQUFNLENBQUNuQixjQUFQLENBQXNCLElBQXRCLEVBQTRCLE1BQTVCLEVBQW9DLEtBQXBDO0FBQ0FtQixZQUFNLENBQUNuQixjQUFQLENBQXNCLElBQXRCLEVBQTRCLElBQTVCLEVBQWtDLEdBQWxDO0FBQ0FtQixZQUFNLENBQUNuQixjQUFQLENBQXNCLElBQXRCLEVBQTRCLE1BQTVCLEVBQW9DLFFBQXBDO0FBQ0FpQixhQUFPLENBQUNmLFdBQVIsQ0FBb0JpQixNQUFwQjtBQUVBLFVBQU1DLE9BQU8sR0FBR3pCLFFBQVEsQ0FBQ0csZUFBVCxDQUF5QnBCLFNBQXpCLEVBQW9DLFFBQXBDLENBQWhCO0FBQ0EwQyxhQUFPLENBQUNkLFNBQVIsQ0FBa0JDLEdBQWxCLENBQXNCLGFBQXRCO0FBQ0FhLGFBQU8sQ0FBQ3BCLGNBQVIsQ0FBdUIsSUFBdkIsRUFBNkIsSUFBN0IsRUFBbUMsRUFBbkM7QUFDQW9CLGFBQU8sQ0FBQ3BCLGNBQVIsQ0FBdUIsSUFBdkIsRUFBNkIsSUFBN0IsRUFBbUMsRUFBbkM7QUFDQW9CLGFBQU8sQ0FBQ3BCLGNBQVIsQ0FBdUIsSUFBdkIsRUFBNkIsR0FBN0IsRUFBa0MsQ0FBbEM7QUFDQW9CLGFBQU8sQ0FBQ2QsU0FBUixDQUFrQkMsR0FBbEIsQ0FBc0JkLEtBQXRCO0FBQ0FvTCxnQkFBVSxDQUFDM0ssV0FBWCxDQUF1QmtCLE9BQXZCO0FBQ0EsVUFBTUMsTUFBTSxHQUFHMUIsUUFBUSxDQUFDRyxlQUFULENBQXlCcEIsU0FBekIsRUFBb0MsU0FBcEMsQ0FBZjtBQUNBMkMsWUFBTSxDQUFDdEIsRUFBUCxHQUFZLFVBQVo7QUFDQXNCLFlBQU0sQ0FBQ3JCLGNBQVAsQ0FBc0IsSUFBdEIsRUFBNEIsZUFBNUIsRUFBNkMsR0FBN0M7QUFDQXFCLFlBQU0sQ0FBQ3JCLGNBQVAsQ0FBc0IsSUFBdEIsRUFBNEIsZUFBNUIsRUFBNkMsS0FBN0M7QUFDQXFCLFlBQU0sQ0FBQ3JCLGNBQVAsQ0FBc0IsSUFBdEIsRUFBNEIsT0FBNUIsRUFBcUMscUJBQXJDO0FBQ0FxQixZQUFNLENBQUNyQixjQUFQLENBQXNCLElBQXRCLEVBQTRCLEtBQTVCLEVBQW1DLE1BQW5DO0FBQ0FxQixZQUFNLENBQUNyQixjQUFQLENBQXNCLElBQXRCLEVBQTRCLE1BQTVCLEVBQW9DLEdBQXBDO0FBQ0FxQixZQUFNLENBQUNyQixjQUFQLENBQXNCLElBQXRCLEVBQTRCLElBQTVCLEVBQWtDLEtBQWxDO0FBQ0FvQixhQUFPLENBQUNsQixXQUFSLENBQW9CbUIsTUFBcEI7QUFDQSxVQUFNQyxNQUFNLEdBQUczQixRQUFRLENBQUNHLGVBQVQsQ0FBeUJwQixTQUF6QixFQUFvQyxTQUFwQyxDQUFmO0FBQ0E0QyxZQUFNLENBQUN2QixFQUFQLEdBQVksVUFBWjtBQUNBdUIsWUFBTSxDQUFDdEIsY0FBUCxDQUFzQixJQUF0QixFQUE0QixlQUE1QixFQUE2QyxTQUE3QztBQUNBc0IsWUFBTSxDQUFDdEIsY0FBUCxDQUFzQixJQUF0QixFQUE0QixlQUE1QixFQUE2QyxLQUE3QztBQUNBc0IsWUFBTSxDQUFDdEIsY0FBUCxDQUFzQixJQUF0QixFQUE0QixPQUE1QixFQUFxQyx1QkFBckM7QUFDQXNCLFlBQU0sQ0FBQ3RCLGNBQVAsQ0FBc0IsSUFBdEIsRUFBNEIsS0FBNUIsRUFBbUMsSUFBbkM7QUFDQXNCLFlBQU0sQ0FBQ3RCLGNBQVAsQ0FBc0IsSUFBdEIsRUFBNEIsTUFBNUIsRUFBb0MsS0FBcEM7QUFDQXNCLFlBQU0sQ0FBQ3RCLGNBQVAsQ0FBc0IsSUFBdEIsRUFBNEIsSUFBNUIsRUFBa0MsR0FBbEM7QUFDQXNCLFlBQU0sQ0FBQ3RCLGNBQVAsQ0FBc0IsSUFBdEIsRUFBNEIsTUFBNUIsRUFBb0MsUUFBcEM7QUFDQW9CLGFBQU8sQ0FBQ2xCLFdBQVIsQ0FBb0JvQixNQUFwQjtBQUVBLFVBQUksT0FBT0MsY0FBUCxLQUEwQixXQUE5QixFQUEyQ1IsTUFBTSxDQUFDUyxZQUFQLEdBQTNDLENBQ0E7QUFEQSxXQUdFQyxVQUFVLENBQUMsWUFBWTtBQUNyQlYsZ0JBQU0sQ0FBQ1MsWUFBUDtBQUNELFNBRlMsRUFFUCxDQUZPLENBQVYsQ0F0S3FDLENBMEt2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQU9xSixVQUFQO0FBQ0Q7QUFucUJIO0FBQUE7QUFBQSxXQXFxQkUseUJBQWdCTyxXQUFoQixFQUE2QjtBQUFBOztBQUMzQixVQUFNQyxJQUFJLEdBQUcxTCxRQUFRLENBQUNHLGVBQVQsQ0FBeUJwQixTQUF6QixFQUFvQyxNQUFwQyxDQUFiO0FBQ0EwTSxpQkFBVyxDQUFDbEwsV0FBWixDQUF3Qm1MLElBQXhCO0FBQ0EsVUFBTUMsc0JBQXNCLEdBQUczTCxRQUFRLENBQUNHLGVBQVQsQ0FDN0JwQixTQUQ2QixFQUU3QixnQkFGNkIsQ0FBL0I7QUFJQTRNLDRCQUFzQixDQUFDdkwsRUFBdkIsR0FBNEIsMEJBQTVCO0FBQ0FzTCxVQUFJLENBQUNuTCxXQUFMLENBQWlCb0wsc0JBQWpCO0FBQ0EsVUFBTUMsTUFBTSxHQUFHNUwsUUFBUSxDQUFDRyxlQUFULENBQXlCcEIsU0FBekIsRUFBb0MsTUFBcEMsQ0FBZjtBQUNBNk0sWUFBTSxDQUFDakwsU0FBUCxDQUFpQkMsR0FBakIsQ0FBcUIsc0JBQXJCO0FBQ0FnTCxZQUFNLENBQUNqTCxTQUFQLENBQWlCQyxHQUFqQixDQUFxQixVQUFyQjtBQUNBZ0wsWUFBTSxDQUFDdkwsY0FBUCxDQUFzQixJQUF0QixFQUE0QixRQUE1QixFQUFzQyxJQUF0QztBQUNBc0wsNEJBQXNCLENBQUNwTCxXQUF2QixDQUFtQ3FMLE1BQW5DO0FBQ0EsVUFBTUMsSUFBSSxHQUFHN0wsUUFBUSxDQUFDRyxlQUFULENBQXlCcEIsU0FBekIsRUFBb0MsTUFBcEMsQ0FBYjtBQUNBOE0sVUFBSSxDQUFDbEwsU0FBTCxDQUFlQyxHQUFmLENBQW1CLHNCQUFuQjtBQUNBaUwsVUFBSSxDQUFDeEwsY0FBTCxDQUFvQixJQUFwQixFQUEwQixRQUExQixFQUFvQyxNQUFwQztBQUNBc0wsNEJBQXNCLENBQUNwTCxXQUF2QixDQUFtQ3NMLElBQW5DO0FBRUEsVUFBTUMsc0JBQXNCLEdBQUc5TCxRQUFRLENBQUNHLGVBQVQsQ0FDN0JwQixTQUQ2QixFQUU3QixnQkFGNkIsQ0FBL0I7QUFJQStNLDRCQUFzQixDQUFDMUwsRUFBdkIsR0FBNEIsMEJBQTVCO0FBQ0FzTCxVQUFJLENBQUNuTCxXQUFMLENBQWlCdUwsc0JBQWpCO0FBQ0EsVUFBTUMsTUFBTSxHQUFHL0wsUUFBUSxDQUFDRyxlQUFULENBQXlCcEIsU0FBekIsRUFBb0MsTUFBcEMsQ0FBZjtBQUNBZ04sWUFBTSxDQUFDcEwsU0FBUCxDQUFpQkMsR0FBakIsQ0FBcUIsc0JBQXJCO0FBQ0FtTCxZQUFNLENBQUNwTCxTQUFQLENBQWlCQyxHQUFqQixDQUFxQixVQUFyQjtBQUNBbUwsWUFBTSxDQUFDMUwsY0FBUCxDQUFzQixJQUF0QixFQUE0QixRQUE1QixFQUFzQyxJQUF0QztBQUNBeUwsNEJBQXNCLENBQUN2TCxXQUF2QixDQUFtQ3dMLE1BQW5DO0FBQ0EsVUFBTUMsSUFBSSxHQUFHaE0sUUFBUSxDQUFDRyxlQUFULENBQXlCcEIsU0FBekIsRUFBb0MsTUFBcEMsQ0FBYjtBQUNBaU4sVUFBSSxDQUFDckwsU0FBTCxDQUFlQyxHQUFmLENBQW1CLHNCQUFuQjtBQUNBb0wsVUFBSSxDQUFDM0wsY0FBTCxDQUFvQixJQUFwQixFQUEwQixRQUExQixFQUFvQyxNQUFwQztBQUNBeUwsNEJBQXNCLENBQUN2TCxXQUF2QixDQUFtQ3lMLElBQW5DO0FBRUEsV0FBS3BKLFVBQUwsQ0FBZ0JxQyxVQUFoQixDQUEyQnpILE9BQTNCLENBQW1DLGlCQUE2QnVHLENBQTdCLEVBQW1DO0FBQUEsWUFBaENvQixDQUFnQyxTQUFoQ0EsQ0FBZ0M7QUFBQSxZQUE3QmhKLEdBQTZCLFNBQTdCQSxHQUE2QjtBQUFBLFlBQXhCaUosR0FBd0IsU0FBeEJBLEdBQXdCO0FBQUEsWUFBbkJDLFNBQW1CLFNBQW5CQSxTQUFtQjtBQUNwRSxZQUFNNEcsSUFBSSxHQUFJLENBQUM5RyxDQUFDLEdBQUcsR0FBTCxJQUFZbEQsU0FBYixHQUEwQkQsVUFBdkMsQ0FEb0UsQ0FFcEU7O0FBQ0EsWUFBTWtLLElBQUksR0FBRyxDQUFDOUcsR0FBZDs7QUFDQSxZQUFNOUksTUFBTSxHQUFHLE1BQUksQ0FBQzZQLGdCQUFMLENBQ2JGLElBRGEsRUFFYkMsSUFGYSxFQUdiN0csU0FIYSxZQUlWbEosR0FBRyxHQUFHLENBQU4sR0FBVSxVQUFWLEdBQXVCLFVBSmIsRUFBZjs7QUFPQSxZQUFNaVEsVUFBVSxHQUFHcE0sUUFBUSxDQUFDRyxlQUFULENBQXlCcEIsU0FBekIsRUFBb0MsTUFBcEMsQ0FBbkI7QUFDQXFOLGtCQUFVLENBQUN6TCxTQUFYLENBQXFCQyxHQUFyQixDQUF5QixhQUF6QjtBQUNBd0wsa0JBQVUsQ0FBQy9MLGNBQVgsQ0FBMEIsSUFBMUIsRUFBZ0MsSUFBaEMsRUFBc0M0TCxJQUF0QztBQUNBRyxrQkFBVSxDQUFDL0wsY0FBWCxDQUEwQixJQUExQixFQUFnQyxJQUFoQyxFQUFzQzRMLElBQXRDO0FBQ0FHLGtCQUFVLENBQUMvTCxjQUFYLENBQTBCLElBQTFCLEVBQWdDLElBQWhDLEVBQXNDLE1BQUksQ0FBQzRDLEtBQTNDO0FBQ0FtSixrQkFBVSxDQUFDL0wsY0FBWCxDQUEwQixJQUExQixFQUFnQyxJQUFoQyxFQUFzQyxNQUFJLENBQUM0QyxLQUFMLEdBQWEsTUFBSSxDQUFDQyxVQUF4RDtBQUNBa0osa0JBQVUsQ0FBQy9MLGNBQVgsQ0FBMEIsSUFBMUIsRUFBZ0MsY0FBaEMsRUFBZ0QsS0FBaEQ7QUFDQStMLGtCQUFVLENBQUN6TCxTQUFYLENBQXFCQyxHQUFyQixXQUE0QnpFLEdBQUcsR0FBRyxDQUFOLEdBQVUsVUFBVixHQUF1QixVQUFuRCxHQWxCb0UsQ0FtQnBFOztBQUNBc1AsbUJBQVcsQ0FBQ2xMLFdBQVosQ0FBd0I2TCxVQUF4QjtBQUVBLFlBQUlDLEtBQUssR0FBRyxHQUFaOztBQUNBLFlBQUlsSCxDQUFDLEdBQUcsR0FBUixFQUFhO0FBQ1gsY0FBSXBCLENBQUMsR0FBRyxNQUFJLENBQUNuQixVQUFMLENBQWdCcUMsVUFBaEIsQ0FBMkJsSCxNQUEzQixHQUFvQyxDQUE1QyxFQUNFc08sS0FBSyxHQUFHLE1BQUksQ0FBQ3pKLFVBQUwsQ0FBZ0JxQyxVQUFoQixDQUEyQmxCLENBQUMsR0FBRyxDQUEvQixFQUFrQ29CLENBQTFDO0FBQ0YsY0FBTW1ILFVBQVUsR0FBR3RNLFFBQVEsQ0FBQ0csZUFBVCxDQUF5QnBCLFNBQXpCLEVBQW9DLE1BQXBDLENBQW5CO0FBQ0F1TixvQkFBVSxDQUFDM0wsU0FBWCxDQUFxQkMsR0FBckIsQ0FBeUIsYUFBekI7QUFDQTBMLG9CQUFVLENBQUNqTSxjQUFYLENBQTBCLElBQTFCLEVBQWdDLEdBQWhDLEVBQXFDNEwsSUFBckM7QUFDQUssb0JBQVUsQ0FBQ2pNLGNBQVgsQ0FBMEIsSUFBMUIsRUFBZ0MsR0FBaEMsRUFBcUMsTUFBSSxDQUFDNEMsS0FBMUM7QUFDQXFKLG9CQUFVLENBQUNqTSxjQUFYLENBQTBCLElBQTFCLEVBQWdDLE9BQWhDLEVBQXlDZ00sS0FBSyxHQUFHbEgsQ0FBakQ7QUFDQW1ILG9CQUFVLENBQUNqTSxjQUFYLENBQTBCLElBQTFCLEVBQWdDLFFBQWhDLEVBQTBDLE1BQUksQ0FBQzZDLFVBQS9DO0FBQ0FvSixvQkFBVSxDQUFDak0sY0FBWCxDQUNFLElBREYsRUFFRSxNQUZGLGlDQUcwQmxFLEdBQUcsR0FBRyxDQUFOLEdBQVUsVUFBVixHQUF1QixVQUhqRCxRQVRXLENBY1g7O0FBQ0FzUCxxQkFBVyxDQUFDbEwsV0FBWixDQUF3QitMLFVBQXhCO0FBQ0Q7O0FBRURiLG1CQUFXLENBQUNsTCxXQUFaLENBQXdCakUsTUFBeEI7QUFDRCxPQTFDRDtBQTJDRDtBQW52Qkg7QUFBQTtBQUFBLFdBcXZCRSx3QkFBZWlRLFdBQWYsRUFBNEI7QUFDMUIsVUFBTTFELEtBQUssR0FBRyxLQUFLL0YsVUFBTCxDQUFnQjZCLFNBQTlCO0FBQ0EsVUFBTTZILEdBQUcsR0FBRyxLQUFLMUosVUFBTCxDQUFnQjhCLE9BQTVCO0FBQ0EsVUFBTXhKLElBQUksR0FBRyxLQUFLMEgsVUFBTCxDQUFnQkEsVUFBaEIsQ0FBMkJ4SixHQUEzQixDQUErQixVQUFBQyxDQUFDO0FBQUEsK0NBQ3hDQSxDQUR3QztBQUUzQ3VDLGNBQUksRUFBRSxDQUFDdkMsQ0FBQyxDQUFDdUMsSUFBRixHQUFTK00sS0FBVixJQUFtQjdHO0FBRmtCO0FBQUEsT0FBaEMsQ0FBYjs7QUFIMEIseUJBT0Q1RyxJQUFJLENBQUNvSSxNQUFMLENBQ3ZCLFVBQUNDLEdBQUQsRUFBTUMsR0FBTixFQUFXSyxDQUFYLEVBQWlCO0FBQ2YsWUFBTWdDLFVBQVUsR0FBRyxDQUFDckMsR0FBRyxDQUFDcUMsVUFBeEI7QUFDQSxlQUFPLFdBQ0Z0QyxHQUFHLENBQUMsQ0FBRCxDQURELFNBQ09NLENBQUMsS0FBSyxDQUFOLEdBQVUsR0FBVixHQUFnQixJQUR2QixjQUMrQkwsR0FBRyxDQUFDNUgsSUFBSixDQUFTdU4sT0FBVCxDQUFpQixDQUFqQixDQUQvQixjQUVINUYsR0FBRyxDQUFDLENBQUQsQ0FGQSxnQkFHQ0MsR0FBRyxDQUFDNUgsSUFBSixDQUFTdU4sT0FBVCxDQUFpQixDQUFqQixDQUhELGNBR3dCdEQsVUFBVSxDQUFDc0QsT0FBWCxDQUFtQixDQUFuQixDQUh4QixhQUlGNUYsR0FBRyxDQUFDLENBQUQsQ0FKRCxTQUlPTSxDQUFDLEtBQUssQ0FBTixHQUFVLEdBQVYsR0FBZ0IsSUFKdkIsY0FJK0JMLEdBQUcsQ0FBQzVILElBQUosQ0FBU3VOLE9BQVQsQ0FBaUIsQ0FBakIsQ0FKL0IsY0FLSDVGLEdBQUcsQ0FBQyxDQUFELENBQUgsR0FBUyxDQUFULEdBQWFBLEdBQUcsQ0FBQyxDQUFELENBQWhCLEdBQXNCLENBTG5CLGdCQU1DQyxHQUFHLENBQUM1SCxJQUFKLENBQVN1TixPQUFULENBQWlCLENBQWpCLENBTkQsY0FNd0J0RCxVQUFVLEdBQUcsQ0FBYixHQUFpQkEsVUFBVSxDQUFDc0QsT0FBWCxDQUFtQixDQUFuQixDQUFqQixHQUF5QyxDQU5qRSxTQU9IdEYsQ0FBQyxLQUFLM0ksSUFBSSxDQUFDMkMsTUFBTCxHQUFjLENBQXBCLGdCQUE4QjJGLEdBQUcsQ0FBQzVILElBQUosQ0FBU3VOLE9BQVQsQ0FBaUIsQ0FBakIsQ0FBOUIsVUFBd0QsRUFQckQsYUFTRjVGLEdBQUcsQ0FBQyxDQUFELENBVEQsU0FTT00sQ0FBQyxLQUFLLENBQU4sR0FBVSxHQUFWLEdBQWdCLElBVHZCLGNBUytCTCxHQUFHLENBQUM1SCxJQUFKLENBQVN1TixPQUFULENBQWlCLENBQWpCLENBVC9CLGNBVUg1RixHQUFHLENBQUMsQ0FBRCxDQUFILEdBQVMsQ0FBVCxHQUFhQSxHQUFHLENBQUMsQ0FBRCxDQUFoQixHQUFzQixDQVZuQixnQkFXQ0MsR0FBRyxDQUFDNUgsSUFBSixDQUFTdU4sT0FBVCxDQUFpQixDQUFqQixDQVhELGNBV3dCdEQsVUFBVSxHQUFHLENBQWIsR0FBaUJBLFVBQVUsQ0FBQ3NELE9BQVgsQ0FBbUIsQ0FBbkIsQ0FBakIsR0FBeUMsQ0FYakUsU0FZSHRGLENBQUMsS0FBSzNJLElBQUksQ0FBQzJDLE1BQUwsR0FBYyxDQUFwQixnQkFBOEIyRixHQUFHLENBQUM1SCxJQUFKLENBQVN1TixPQUFULENBQWlCLENBQWpCLENBQTlCLFVBQXdELEVBWnJELEdBY0x0RCxVQWRLLENBQVA7QUFnQkQsT0FuQnNCLEVBb0J2QixDQUFDLEVBQUQsRUFBSyxFQUFMLEVBQVMsRUFBVCxFQUFhLENBQWIsQ0FwQnVCLENBUEM7QUFBQTtBQUFBLFVBT25CMEcsSUFQbUI7QUFBQSxVQU9ickgsR0FQYTtBQUFBLFVBT1JzSCxHQVBROztBQThCMUIsVUFBTUMsV0FBVyxHQUFHM00sUUFBUSxDQUFDRyxlQUFULENBQXlCcEIsU0FBekIsRUFBb0MsTUFBcEMsQ0FBcEI7QUFDQTROLGlCQUFXLENBQUN2TSxFQUFaLEdBQWlCLFdBQWpCO0FBQ0F1TSxpQkFBVyxDQUFDdE0sY0FBWixDQUEyQixJQUEzQixFQUFpQyxJQUFqQyxFQUF1QyxDQUF2QztBQUNBc00saUJBQVcsQ0FBQ3RNLGNBQVosQ0FBMkIsSUFBM0IsRUFBaUMsSUFBakMsRUFBdUMsQ0FBQ21NLEdBQUcsR0FBRzNELEtBQVAsSUFBZ0I3RyxVQUF2RDtBQUNBMkssaUJBQVcsQ0FBQ3RNLGNBQVosQ0FBMkIsSUFBM0IsRUFBaUMsSUFBakMsRUFBdUMsQ0FBdkM7QUFDQXNNLGlCQUFXLENBQUN0TSxjQUFaLENBQTJCLElBQTNCLEVBQWlDLElBQWpDLEVBQXVDLENBQXZDO0FBQ0FzTSxpQkFBVyxDQUFDdE0sY0FBWixDQUEyQixJQUEzQixFQUFpQyxjQUFqQyxFQUFpRCxPQUFqRDtBQUNBa00saUJBQVcsQ0FBQ2hNLFdBQVosQ0FBd0JvTSxXQUF4Qjs7QUFFQSxVQUFJdlIsSUFBSSxDQUFDMkMsTUFBVCxFQUFpQjtBQUNmLFlBQU02TyxPQUFPLEdBQUc1TSxRQUFRLENBQUNHLGVBQVQsQ0FBeUJwQixTQUF6QixFQUFvQyxNQUFwQyxDQUFoQjtBQUNBNk4sZUFBTyxDQUFDak0sU0FBUixDQUFrQkMsR0FBbEIsQ0FBc0IsTUFBdEI7QUFDQWdNLGVBQU8sQ0FBQ2pNLFNBQVIsQ0FBa0JDLEdBQWxCLENBQXNCLFVBQXRCO0FBQ0FnTSxlQUFPLENBQUN2TSxjQUFSLENBQXVCLElBQXZCLEVBQTZCLEdBQTdCLFlBQXFDK0UsR0FBckM7QUFDQXdILGVBQU8sQ0FBQ3ZNLGNBQVIsQ0FBdUIsSUFBdkIsRUFBNkIsY0FBN0IsRUFBNkMsS0FBN0M7QUFDQWtNLG1CQUFXLENBQUNoTSxXQUFaLENBQXdCcU0sT0FBeEI7QUFFQSxZQUFNQyxPQUFPLEdBQUc3TSxRQUFRLENBQUNHLGVBQVQsQ0FBeUJwQixTQUF6QixFQUFvQyxNQUFwQyxDQUFoQjtBQUNBOE4sZUFBTyxDQUFDbE0sU0FBUixDQUFrQkMsR0FBbEIsQ0FBc0IsTUFBdEI7QUFDQWlNLGVBQU8sQ0FBQ2xNLFNBQVIsQ0FBa0JDLEdBQWxCLENBQXNCLFVBQXRCO0FBQ0FpTSxlQUFPLENBQUN4TSxjQUFSLENBQXVCLElBQXZCLEVBQTZCLEdBQTdCLFlBQXFDcU0sR0FBckM7QUFDQUcsZUFBTyxDQUFDeE0sY0FBUixDQUF1QixJQUF2QixFQUE2QixjQUE3QixFQUE2QyxLQUE3QztBQUNBa00sbUJBQVcsQ0FBQ2hNLFdBQVosQ0FBd0JzTSxPQUF4QjtBQUVBLFlBQU1DLFFBQVEsR0FBRzlNLFFBQVEsQ0FBQ0csZUFBVCxDQUF5QnBCLFNBQXpCLEVBQW9DLE1BQXBDLENBQWpCO0FBQ0ErTixnQkFBUSxDQUFDbk0sU0FBVCxDQUFtQkMsR0FBbkIsQ0FBdUIsTUFBdkI7QUFDQWtNLGdCQUFRLENBQUN6TSxjQUFULENBQXdCLElBQXhCLEVBQThCLEdBQTlCLEVBQW1Db00sSUFBbkM7QUFDQUssZ0JBQVEsQ0FBQ3pNLGNBQVQsQ0FBd0IsSUFBeEIsRUFBOEIsY0FBOUIsRUFBOEMsS0FBOUM7QUFDQWtNLG1CQUFXLENBQUNoTSxXQUFaLENBQXdCdU0sUUFBeEI7QUFDRDtBQUNGO0FBanpCSDtBQUFBO0FBQUEsV0FtekJFLHlCQUFnQkMsR0FBaEIsRUFBcUJyRyxLQUFyQixFQUE0QkMsS0FBNUIsRUFBbUNQLEtBQW5DLEVBQTBDQyxNQUExQyxFQUFrRDtBQUFBOztBQUNoRCxVQUFNUSxTQUFTLEdBQUc3RyxRQUFRLENBQUNHLGVBQVQsQ0FBeUJwQixTQUF6QixFQUFvQyxHQUFwQyxDQUFsQjtBQUNBOEgsZUFBUyxDQUFDekcsRUFBVixHQUFlLGtCQUFmO0FBQ0EsVUFBTThKLFdBQVcsR0FBR2xLLFFBQVEsQ0FBQ0csZUFBVCxDQUF5QnBCLFNBQXpCLEVBQW9DLEdBQXBDLENBQXBCO0FBQ0FtTCxpQkFBVyxDQUFDOUosRUFBWixHQUFpQixvQkFBakIsQ0FKZ0QsQ0FLaEQ7QUFDQTs7QUFDQSxVQUFNcUssV0FBVyxHQUFHekssUUFBUSxDQUFDRyxlQUFULENBQXlCcEIsU0FBekIsRUFBb0MsR0FBcEMsQ0FBcEI7QUFDQTBMLGlCQUFXLENBQUNySyxFQUFaLEdBQWlCLG9CQUFqQjtBQUNBLFVBQU1xTCxXQUFXLEdBQUd6TCxRQUFRLENBQUNHLGVBQVQsQ0FBeUJwQixTQUF6QixFQUFvQyxHQUFwQyxDQUFwQjtBQUNBME0saUJBQVcsQ0FBQ3JMLEVBQVosR0FBaUIsb0JBQWpCO0FBQ0EyTSxTQUFHLENBQUN4TSxXQUFKLENBQWdCc0csU0FBaEI7QUFDQWtHLFNBQUcsQ0FBQ3hNLFdBQUosQ0FBZ0IySixXQUFoQixFQVpnRCxDQWFoRDs7QUFDQTZDLFNBQUcsQ0FBQ3hNLFdBQUosQ0FBZ0JrSyxXQUFoQjtBQUNBc0MsU0FBRyxDQUFDeE0sV0FBSixDQUFnQmtMLFdBQWhCO0FBQ0EsVUFBTXVCLEtBQUssR0FDVCxDQUFDLEtBQUtwSyxVQUFMLENBQWdCZ0MsT0FBaEIsR0FBMEIsS0FBS2hDLFVBQUwsQ0FBZ0IrQixTQUExQyxHQUFzRCxHQUF2RCxJQUE4RDNDLFVBRGhFO0FBRUEsVUFBTW1ELENBQUMsR0FBRyxDQUFWO0FBQ0EsVUFBTW9CLE1BQU0sR0FBR3lHLEtBQWY7QUFDQSxVQUFNQyxLQUFLLEdBQUcsS0FBS3JLLFVBQUwsQ0FBZ0I4QixTQUFoQixHQUE0QixLQUFLOUIsVUFBTCxDQUFnQjZCLFNBQTFEO0FBQ0EsVUFBTTZCLENBQUMsR0FBRyxDQUFDLEtBQUsxRCxVQUFMLENBQWdCOEIsU0FBakIsR0FBNkJ4QyxrQkFBa0IsR0FBRytLLEtBQTVEO0FBQ0EsVUFBTXpHLE1BQU0sR0FBR3lHLEtBQUssSUFBSSxJQUFJL0ssa0JBQUosR0FBeUJDLHFCQUE3QixDQUFwQjtBQUNBLFdBQUsrSyxjQUFMLENBQW9CL0gsQ0FBcEIsRUFBdUJtQixDQUF2QixFQUEwQkMsTUFBMUIsRUFBa0NDLE1BQWxDO0FBQ0EsVUFBTTJHLFVBQVUsR0FBRy9HLEtBQUssR0FBRyxFQUFSLElBQWMsS0FBS2hELFlBQUwsR0FBb0IsR0FBbEMsQ0FBbkI7QUFDQSxVQUFNZ0ssVUFBVSxHQUFHLEtBQUsvRyxNQUFMLElBQWUsS0FBSy9DLFlBQUwsR0FBb0IsR0FBbkMsQ0FBbkI7QUFDQXlKLFNBQUcsQ0FBQzFNLGNBQUosQ0FDRSxJQURGLEVBRUUsU0FGRixZQUdLLEtBQUswQyxLQUhWLGNBR21CLEtBQUtFLEtBSHhCLGNBR2lDLEtBQUtELFVBSHRDLGNBR29ELEtBQUtFLFVBSHpEO0FBS0F3RCxXQUFLLENBQUNyRyxjQUFOLENBQXFCLElBQXJCLEVBQTJCLFNBQTNCLFlBQXlDLEtBQUswQyxLQUE5QyxnQkFBeUQsS0FBS0MsVUFBOUQ7QUFDQTBELFdBQUssQ0FBQ3JHLGNBQU4sQ0FDRSxJQURGLEVBRUUscUJBRkYscUJBR2M4TSxVQUFVLEdBQUcsQ0FBYixHQUFpQixPQUFqQixHQUEyQixNQUh6QztBQUtBeEcsV0FBSyxDQUFDdEcsY0FBTixDQUFxQixJQUFyQixFQUEyQixTQUEzQixjQUEyQyxLQUFLNEMsS0FBaEQsa0JBQTZELEtBQUtDLFVBQWxFO0FBQ0F5RCxXQUFLLENBQUN0RyxjQUFOLENBQ0UsSUFERixFQUVFLHFCQUZGLHFCQUdjK00sVUFBVSxHQUFHLENBQWIsR0FBaUIsT0FBakIsR0FBMkIsTUFIekM7O0FBS0EsOEJBQUksS0FBS3hLLFVBQVQsc0VBQUksaUJBQWlCeEgsSUFBckIsa0RBQUksc0JBQXVCMkMsTUFBM0IsRUFBbUM7QUFBQTs7QUFDakMsYUFBS3NQLFlBQUwsQ0FDRXhHLFNBREYsRUFFRUgsS0FGRixFQUdFQyxLQUhGLEVBSUUsS0FBSzVELEtBSlAsRUFLRSxLQUFLQyxVQUxQLEVBTUUsS0FBS0MsS0FOUCxFQU9FLEtBQUtDLFVBUFAsRUFRRSxLQUFLTCxTQUFMLEdBQWlCLEtBQUtGLFdBQUwsR0FBbUJYLFVBQW5CLEdBQWdDRCxZQVJuRCxFQVNFLEtBQUtjLFNBVFA7QUFXQSxxQ0FBSSxLQUFLRCxVQUFMLENBQWdCMUksVUFBcEIsa0RBQUksc0JBQTRCNkQsTUFBaEMsRUFBd0MsS0FBS3VQLGVBQUwsQ0FBcUJwRCxXQUFyQjtBQUN4QyxxQ0FBSSxLQUFLdEgsVUFBTCxDQUFnQjBDLFVBQXBCLGtEQUFJLHNCQUE0QnZILE1BQWhDLEVBQXdDLEtBQUt3UCxlQUFMLENBQXFCOUMsV0FBckI7QUFDeEMscUNBQUksS0FBSzdILFVBQUwsQ0FBZ0JxQyxVQUFwQixrREFBSSxzQkFBNEJsSCxNQUFoQyxFQUF3QyxLQUFLeVAsZUFBTCxDQUFxQi9CLFdBQXJCO0FBQ3pDOztBQUVELFVBQU1nQyxTQUFTLEdBQUd6TixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsWUFBeEIsQ0FBbEI7QUFDQXdOLGVBQVMsQ0FBQ0MsUUFBVixDQUFtQixLQUFLdEgsS0FBeEIsRUFBK0IsQ0FBL0I7QUFDRDtBQWozQkg7QUFBQTtBQUFBLFdBbTNCRSwyQkFBa0IyRyxHQUFsQixFQUF1QnJHLEtBQXZCLEVBQThCQyxLQUE5QixFQUFxQ1AsS0FBckMsRUFBNENDLE1BQTVDLEVBQW9EO0FBQUE7O0FBQ2xELFVBQU1RLFNBQVMsR0FBRzdHLFFBQVEsQ0FBQ0csZUFBVCxDQUF5QnBCLFNBQXpCLEVBQW9DLEdBQXBDLENBQWxCO0FBQ0E4SCxlQUFTLENBQUN6RyxFQUFWLEdBQWUsa0JBQWY7QUFDQSxVQUFNbU0sV0FBVyxHQUFHdk0sUUFBUSxDQUFDRyxlQUFULENBQXlCcEIsU0FBekIsRUFBb0MsR0FBcEMsQ0FBcEI7QUFDQXdOLGlCQUFXLENBQUNuTSxFQUFaLEdBQWlCLG9CQUFqQjtBQUNBMk0sU0FBRyxDQUFDeE0sV0FBSixDQUFnQnNHLFNBQWhCO0FBQ0FrRyxTQUFHLENBQUN4TSxXQUFKLENBQWdCZ00sV0FBaEI7QUFFQSxVQUFNUyxLQUFLLEdBQUcsQ0FBQyxLQUFLbEssVUFBTCxDQUFnQjhCLE9BQWhCLEdBQTBCLEtBQUs5QixVQUFMLENBQWdCNkIsU0FBM0MsSUFBd0QzQyxVQUF0RTtBQUNBLFVBQU1tRCxDQUFDLEdBQUcsQ0FBVjtBQUNBLFVBQU1vQixNQUFNLEdBQUd5RyxLQUFmO0FBQ0EsVUFBTUMsS0FBSyxHQUFHLEtBQUtuSyxVQUFMLENBQWdCMEIsR0FBaEIsR0FBc0IsS0FBSzFCLFVBQUwsQ0FBZ0J3QixHQUFwRDtBQUNBLFVBQU1nQyxDQUFDLEdBQUcsQ0FBQyxLQUFLeEQsVUFBTCxDQUFnQjBCLEdBQWpCLEdBQXVCdEMsa0JBQWtCLEdBQUcrSyxLQUF0RDtBQUNBLFVBQU16RyxNQUFNLEdBQUd5RyxLQUFLLElBQUksSUFBSSxJQUFJL0ssa0JBQVosQ0FBcEI7QUFDQSxXQUFLeUwsZ0JBQUwsQ0FBc0J4SSxDQUF0QixFQUF5Qm1CLENBQXpCLEVBQTRCQyxNQUE1QixFQUFvQ0MsTUFBcEM7QUFDQSxVQUFNMkcsVUFBVSxHQUFHL0csS0FBSyxHQUFHLEVBQVIsSUFBYyxLQUFLaEQsWUFBTCxHQUFvQixHQUFsQyxDQUFuQjtBQUNBLFVBQU1nSyxVQUFVLEdBQUcsS0FBSy9HLE1BQUwsSUFBZSxLQUFLL0MsWUFBTCxHQUFvQixHQUFuQyxDQUFuQjtBQUNBeUosU0FBRyxDQUFDMU0sY0FBSixDQUNFLElBREYsRUFFRSxTQUZGLFlBR0ssS0FBSzhDLE9BSFYsY0FHcUIsS0FBS0UsT0FIMUIsY0FHcUMsS0FBS0QsWUFIMUMsY0FHMEQsS0FBS0UsWUFIL0Q7QUFLQW9ELFdBQUssQ0FBQ3JHLGNBQU4sQ0FDRSxJQURGLEVBRUUsU0FGRixZQUdLLEtBQUs4QyxPQUhWLGdCQUd1QixLQUFLQyxZQUg1QjtBQUtBc0QsV0FBSyxDQUFDckcsY0FBTixDQUNFLElBREYsRUFFRSxxQkFGRixxQkFHYzhNLFVBQVUsR0FBRyxDQUFiLEdBQWlCLE9BQWpCLEdBQTJCLE1BSHpDO0FBS0F4RyxXQUFLLENBQUN0RyxjQUFOLENBQ0UsSUFERixFQUVFLFNBRkYsY0FHTyxLQUFLZ0QsT0FIWixrQkFHMkIsS0FBS0MsWUFIaEM7QUFLQXFELFdBQUssQ0FBQ3RHLGNBQU4sQ0FDRSxJQURGLEVBRUUscUJBRkYscUJBR2MrTSxVQUFVLEdBQUcsQ0FBYixHQUFpQixPQUFqQixHQUEyQixNQUh6Qzs7QUFLQSw4QkFBSSxLQUFLdEssVUFBVCxzRUFBSSxpQkFBaUJBLFVBQXJCLGtEQUFJLHNCQUE2Qi9FLE1BQWpDLEVBQXlDO0FBQUE7O0FBQ3ZDLGFBQUtzUCxZQUFMLENBQ0V4RyxTQURGLEVBRUVILEtBRkYsRUFHRUMsS0FIRixFQUlFLEtBQUt4RCxPQUpQLEVBS0UsS0FBS0MsWUFMUCxFQU1FLEtBQUtDLE9BTlAsRUFPRSxLQUFLQyxZQVBQLEVBUUUsS0FBS1IsVUFBTCxDQUFnQjZCLFNBQWhCLEdBQTRCNUMsWUFSOUIsRUFTRSxLQUFLZSxVQUFMLENBQWdCOEIsT0FBaEIsR0FBMEI3QyxZQVQ1QjtBQVdBLHNDQUFJLEtBQUtlLFVBQUwsQ0FBZ0JBLFVBQXBCLG1EQUFJLHVCQUE0Qi9FLE1BQWhDLEVBQXdDLEtBQUs2UCxjQUFMLENBQW9CckIsV0FBcEI7QUFDekM7QUFDRjtBQTM2Qkg7QUFBQTtBQUFBLFdBNjZCRSwyQkFBa0I7QUFDaEIsVUFBTWtCLFNBQVMsR0FBR3pOLFFBQVEsQ0FBQ1MsYUFBVCxDQUF1QixLQUF2QixDQUFsQjtBQUNBZ04sZUFBUyxDQUFDck4sRUFBVixHQUFlLFlBQWY7QUFDQSxXQUFLc0MsV0FBTCxDQUFpQjdDLFNBQWpCLEdBQTZCLEVBQTdCO0FBQ0EsV0FBSzZDLFdBQUwsQ0FBaUJuQyxXQUFqQixDQUE2QmtOLFNBQTdCO0FBQ0EsVUFBTXJILEtBQUssR0FDUmhFLGNBQWMsR0FBR0gsU0FBbEIsSUFDQyxLQUFLVyxVQUFMLENBQWdCZ0MsT0FBaEIsR0FBMEIsS0FBS2hDLFVBQUwsQ0FBZ0IrQixTQUQzQyxDQURGO0FBR0EsVUFBTTBCLE1BQU0sR0FBR29ILFNBQVMsQ0FBQ0kscUJBQVYsR0FBa0N4SCxNQUFsQyxHQUEyQyxFQUEzQyxHQUFnRCxJQUFJaEUsWUFBbkU7O0FBUmdCLCtCQVNZLEtBQUt5TCxZQUFMLENBQWtCMUgsS0FBbEIsRUFBeUJDLE1BQXpCLENBVFo7QUFBQTtBQUFBLFVBU1QwRyxHQVRTO0FBQUEsVUFTSnJHLEtBVEk7QUFBQSxVQVNHQyxLQVRIOztBQVVoQixXQUFLakUsV0FBTCxDQUFpQm5DLFdBQWpCLENBQTZCb0csS0FBN0I7QUFDQThHLGVBQVMsQ0FBQ2xOLFdBQVYsQ0FBc0J3TSxHQUF0QjtBQUNBVSxlQUFTLENBQUNsTixXQUFWLENBQXNCbUcsS0FBdEI7QUFDQSxXQUFLcUgsZUFBTCxDQUFxQmhCLEdBQXJCLEVBQTBCckcsS0FBMUIsRUFBaUNDLEtBQWpDLEVBQXdDUCxLQUF4QyxFQUErQ0MsTUFBL0M7QUFDRDtBQTM3Qkg7QUFBQTtBQUFBLFdBNjdCRSw2QkFBb0I7QUFDbEIsVUFBTW9ILFNBQVMsR0FBR3pOLFFBQVEsQ0FBQ1MsYUFBVCxDQUF1QixLQUF2QixDQUFsQjtBQUNBZ04sZUFBUyxDQUFDck4sRUFBVixHQUFlLFlBQWY7QUFDQSxXQUFLc0MsV0FBTCxDQUFpQjdDLFNBQWpCLEdBQTZCLEVBQTdCO0FBQ0EsV0FBSzZDLFdBQUwsQ0FBaUJuQyxXQUFqQixDQUE2QmtOLFNBQTdCOztBQUprQixrQ0FLQUEsU0FBUyxDQUFDSSxxQkFBVixFQUxBO0FBQUEsVUFLVnpILEtBTFUseUJBS1ZBLEtBTFU7O0FBTWxCLFVBQU1DLE1BQU0sR0FBR29ILFNBQVMsQ0FBQ0kscUJBQVYsR0FBa0N4SCxNQUFsQyxHQUEyQyxFQUEzQyxHQUFnRCxJQUFJaEUsWUFBbkU7O0FBTmtCLGdDQU9VLEtBQUt5TCxZQUFMLENBQWtCMUgsS0FBbEIsRUFBeUJDLE1BQXpCLENBUFY7QUFBQTtBQUFBLFVBT1gwRyxHQVBXO0FBQUEsVUFPTnJHLEtBUE07QUFBQSxVQU9DQyxLQVBEOztBQVFsQixXQUFLakUsV0FBTCxDQUFpQm5DLFdBQWpCLENBQTZCb0csS0FBN0I7QUFDQThHLGVBQVMsQ0FBQ2xOLFdBQVYsQ0FBc0J3TSxHQUF0QjtBQUNBVSxlQUFTLENBQUNsTixXQUFWLENBQXNCbUcsS0FBdEI7QUFDQSxXQUFLc0gsaUJBQUwsQ0FBdUJqQixHQUF2QixFQUE0QnJHLEtBQTVCLEVBQW1DQyxLQUFuQyxFQUEwQ1AsS0FBMUMsRUFBaURDLE1BQWpEO0FBQ0Q7QUF6OEJIOztBQUFBO0FBQUEsSSxDQTQ4QkE7O0FBQ0EsSUFBTTRILFdBQVcsR0FBRyxJQUFJeEwsT0FBSixDQUFZO0FBQzlCbkYsTUFBSSxFQUFFMEMsUUFBUSxDQUFDQyxjQUFULENBQXdCLG9CQUF4QjtBQUR3QixDQUFaLENBQXBCLEMsQ0FHQTs7QUFDQSxJQUFNaU8sYUFBYSxHQUFHLElBQUl6TCxPQUFKLENBQVk7QUFDaENuRixNQUFJLEVBQUUwQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0Isc0JBQXhCO0FBRDBCLENBQVosQ0FBdEI7QUFJQSwrREFBZXdDLE9BQWYsRTs7Ozs7Ozs7Ozs7O0FDeitCQTs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZCxLQUFLO0FBQ0wsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVztBQUNuRDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0NBQW9DLGNBQWM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUNBQWlDLGtCQUFrQjtBQUNuRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGlCQUFpQjtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7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QUNELE9BaERnQixDQUFqQixDQUplLENBc0RmO0FBQ0E7QUFDQTtBQUNBOztBQUNBRCxjQUFRLENBQUN4UixPQUFULENBQWlCLFVBQUF1UyxPQUFPO0FBQUEsZUFBSXpTLElBQUksQ0FBQ2lELFdBQUwsQ0FBaUJ3UCxPQUFqQixDQUFKO0FBQUEsT0FBeEI7QUFDRDs7O1dBRUQsMEJBQWlCM1UsSUFBakIsRUFBdUI7QUFDckIsVUFBTVEsT0FBTyxHQUFHRCwyREFBaUIsQ0FBQ1AsSUFBRCxDQUFqQztBQUNBLFVBQU0wRCxVQUFVLEdBQUdsRCxPQUFPLENBQUNBLE9BQU8sQ0FBQ21DLE1BQVIsR0FBaUIsQ0FBbEIsQ0FBMUI7QUFDQSxXQUFLa1EsV0FBTCxDQUFpQitCLE9BQWpCLENBQXlCNVUsSUFBekI7QUFDQSxXQUFLbVQsZUFBTCxDQUFxQnlCLE9BQXJCLENBQTZCbFIsVUFBVSxDQUFDdkMsU0FBeEMsRUFBbUR1QyxVQUFVLENBQUN0QyxVQUE5RDtBQUNEOzs7V0FFRCwwQkFBaUJwQixJQUFqQixFQUF1QjtBQUNyQixXQUFLOFMsYUFBTCxDQUFtQitCLGFBQW5CLENBQWlDN1UsSUFBakM7QUFDRDs7Ozs7O0FBR0gsSUFBTThVLEdBQUcsR0FBRyxJQUFJOUIsVUFBSixDQUFlcE8sUUFBUSxDQUFDQyxjQUFULENBQXdCLGNBQXhCLENBQWYsQ0FBWixDIiwiZmlsZSI6ImNyeXB0by5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGdsb2JhbCBicmFpbmFseXplZF93cCAqL1xyXG5pbXBvcnQgY2FuZGxlRGF0YSBmcm9tICdfY2FuZGxlRGF0YS5qc29uJ1xyXG5pbXBvcnQgdHJhZGVEYXRhIGZyb20gJ190cmFkZURhdGEuanNvbidcclxuXHJcbmNvbnN0IElTX0RFViA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnXHJcblxyXG5jb25zdCB3aGl0ZWxpc3QgPSBbXHJcbiAgJ0JUQy9VU0RUJyxcclxuICAnRVRIL1VTRFQnLFxyXG4gICdNQk9YL1VTRFQnLFxyXG4gICdCVVNEL1VTRFQnLFxyXG4gICdTSElCL1VTRFQnLFxyXG4gICdTQU5EL1VTRFQnLFxyXG4gICdTT0wvVVNEVCcsXHJcbiAgJ1JFUS9VU0RUJyxcclxuICAnTFVOQS9VU0RUJyxcclxuICAnTUFUSUMvVVNEVCcsXHJcbiAgJ0dBTEEvVVNEVCcsXHJcbiAgJ01BTkEvVVNEVCcsXHJcbiAgJ0FWQVgvVVNEVCcsXHJcbiAgJ1RMTS9VU0RUJyxcclxuICAnQUxJQ0UvVVNEVCcsXHJcbiAgJ1RSWC9VU0RUJyxcclxuICAnQ1RLL1VTRFQnLFxyXG4gICdET1QvVVNEVCcsXHJcbiAgJ1NBTlRPUy9VU0RUJyxcclxuICAnWFJQL1VTRFQnLFxyXG5dLm1hcChlID0+ICh7XHJcbiAgbmFtZTogZSxcclxuICBmcmVxdWVuY3k6ICc1bScsXHJcbiAgZGVsYXllZDogISFNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpLFxyXG59KSlcclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaENhbmRsZURhdGEgPSAobmFtZSwgZnJlcXVlbmN5LCBsaW1pdCkgPT4ge1xyXG4gIGlmIChJU19ERVYpIHJldHVybiBQcm9taXNlLnJlc29sdmUoY2FuZGxlRGF0YSlcclxuXHJcbiAgY29uc3QgYm9keSA9IG5ldyBGb3JtRGF0YSgpXHJcbiAgYm9keS5hcHBlbmQoJ2FjdGlvbicsICdkYXRhJylcclxuICBib2R5LmFwcGVuZCgncGFpcicsIG5hbWUpXHJcbiAgYm9keS5hcHBlbmQoJ2ZyZXF1ZW5jeScsIGZyZXF1ZW5jeSlcclxuICBib2R5LmFwcGVuZCgnbGltaXQnLCBsaW1pdClcclxuICByZXR1cm4gZmV0Y2goYnJhaW5hbHl6ZWRfd3AuYWpheF91cmwsIHtcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgYWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICB9LFxyXG4gICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICBtb2RlOiAnY29ycycsXHJcbiAgICBjYWNoZTogJ25vLWNhY2hlJyxcclxuICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxyXG4gICAgcmVkaXJlY3Q6ICdmb2xsb3cnLFxyXG4gICAgcmVmZXJyZXJQb2xpY3k6ICduby1yZWZlcnJlcicsXHJcbiAgICBib2R5LFxyXG4gIH0pXHJcbiAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgIC50aGVuKFxyXG4gICAgICBkYXRhID0+IGRhdGEsXHJcbiAgICAgIGVyciA9PiB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgICAgYE1vc3QgbGlrZWx5IHRoaXMgZXJyb3Igb2NjdXJlZCBiZWNhdXNlIHNlcnZlciBkaWQgbm90IHJlc3BvbmQgd2l0aCBKU09OLiBNZXNzYWdlIHdhcyAke2Vyci5tZXNzYWdlfWBcclxuICAgICAgICApXHJcbiAgICAgIH1cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoUGFpcmxpc3QgPSAoKSA9PiB7XHJcbiAgaWYgKElTX0RFVikgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh3aGl0ZWxpc3QpXHJcbiAgY29uc3QgYm9keSA9IG5ldyBGb3JtRGF0YSgpXHJcbiAgYm9keS5hcHBlbmQoJ2FjdGlvbicsICdwYWlycycpXHJcbiAgcmV0dXJuIGZldGNoKGJyYWluYWx5emVkX3dwLmFqYXhfdXJsLCB7XHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIGFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgfSxcclxuICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgbW9kZTogJ2NvcnMnLFxyXG4gICAgY2FjaGU6ICduby1jYWNoZScsXHJcbiAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcclxuICAgIHJlZGlyZWN0OiAnZm9sbG93JyxcclxuICAgIHJlZmVycmVyUG9saWN5OiAnbm8tcmVmZXJyZXInLFxyXG4gICAgYm9keSxcclxuICB9KVxyXG4gICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAudGhlbihcclxuICAgICAgZGF0YSA9PiBkYXRhLFxyXG4gICAgICBlcnIgPT4ge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgICAgIGBNb3N0IGxpa2VseSB0aGlzIGVycm9yIG9jY3VyZWQgYmVjYXVzZSBzZXJ2ZXIgZGlkIG5vdCByZXNwb25kIHdpdGggSlNPTi4gTWVzc2FnZSB3YXMgJHtlcnIubWVzc2FnZX1gXHJcbiAgICAgICAgKVxyXG4gICAgICB9XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaFRyYWRlRGF0YSA9ICgpID0+IHtcclxuICBpZiAoSVNfREVWKSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRyYWRlRGF0YSlcclxuICBjb25zdCBib2R5ID0gbmV3IEZvcm1EYXRhKClcclxuICBib2R5LmFwcGVuZCgnYWN0aW9uJywgJ3RyYWRlcycpXHJcbiAgcmV0dXJuIGZldGNoKGJyYWluYWx5emVkX3dwLmFqYXhfdXJsLCB7XHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIGFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgfSxcclxuICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgbW9kZTogJ2NvcnMnLFxyXG4gICAgY2FjaGU6ICduby1jYWNoZScsXHJcbiAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcclxuICAgIHJlZGlyZWN0OiAnZm9sbG93JyxcclxuICAgIHJlZmVycmVyUG9saWN5OiAnbm8tcmVmZXJyZXInLFxyXG4gICAgYm9keSxcclxuICB9KVxyXG4gICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAudGhlbihcclxuICAgICAgZGF0YSA9PiBkYXRhLFxyXG4gICAgICBlcnIgPT4ge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgICAgIGBNb3N0IGxpa2VseSB0aGlzIGVycm9yIG9jY3VyZWQgYmVjYXVzZSBzZXJ2ZXIgZGlkIG5vdCByZXNwb25kIHdpdGggSlNPTi4gTWVzc2FnZSB3YXMgJHtlcnIubWVzc2FnZX1gXHJcbiAgICAgICAgKVxyXG4gICAgICB9XHJcbiAgICApXHJcbn1cclxuIiwiLyogZ2xvYmFsIG1vbWVudCAqL1xyXG5cclxuZXhwb3J0IGNvbnN0IGV4dHJhY3RTaWduYWxEYXRhID0gY2FuZGxlRGF0YSA9PiB7XHJcbiAgY29uc3Qgc2lnbmFscyA9IGNhbmRsZURhdGEuZGF0YVxyXG4gICAgLm1hcChkYXRhQXJyYXkgPT4gKHtcclxuICAgICAgZGF0ZTogbW9tZW50KGRhdGFBcnJheVtjYW5kbGVEYXRhLmNvbHVtbnMuaW5kZXhPZignZGF0ZScpXSkudmFsdWVPZigpLFxyXG4gICAgICBidXk6IGRhdGFBcnJheVtjYW5kbGVEYXRhLmNvbHVtbnMuaW5kZXhPZignYnV5JyldLFxyXG4gICAgICBzZWxsOiBkYXRhQXJyYXlbY2FuZGxlRGF0YS5jb2x1bW5zLmluZGV4T2YoJ3NlbGwnKV0sXHJcbiAgICB9KSlcclxuICAgIC5maWx0ZXIoZSA9PiBlLmJ1eSB8fCBlLnNlbGwpXHJcbiAgICAubWFwKHNpZ25hbCA9PiAoe1xyXG4gICAgICB0aW1lc3RhbXA6IHNpZ25hbC5kYXRlLFxyXG4gICAgICBzaWduYWxUeXBlOiBzaWduYWwuYnV5ID8gJ0JVWScgOiAnU0VMTCcsXHJcbiAgICB9KSlcclxuICByZXR1cm4gc2lnbmFsc1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZXZlbnRSZWdpc3RyeSA9ICgoKSA9PiB7XHJcbiAgY29uc3QgaGFuZGxlcnMgPSBuZXcgTWFwKClcclxuICByZXR1cm4ge1xyXG4gICAgYWRkRXZlbnRMaXN0ZW5lcjogKGVsZW1lbnQsIGV2ZW50LCBmbikgPT4ge1xyXG4gICAgICBjb25zdCB0YWJsZSA9IGhhbmRsZXJzLmhhcyhlbGVtZW50KSA/IGhhbmRsZXJzLmdldChlbGVtZW50KSA6IHt9XHJcbiAgICAgIHRhYmxlW2V2ZW50XSA9IHRhYmxlW2V2ZW50XSB8fCBbXVxyXG4gICAgICB0YWJsZVtldmVudF0ucHVzaChmbilcclxuICAgICAgaGFuZGxlcnMuc2V0KGVsZW1lbnQsIHRhYmxlKVxyXG4gICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGZuKVxyXG4gICAgfSxcclxuICAgIGNsZWFyOiByb290ID0+IHtcclxuICAgICAgO1suLi5yb290LmNoaWxkcmVuXS5mb3JFYWNoKGUgPT4ge1xyXG4gICAgICAgIGlmIChoYW5kbGVycy5oYXMoZSkpIHtcclxuICAgICAgICAgIGNvbnN0IHRhYmxlID0gaGFuZGxlcnMuZ2V0KGUpXHJcbiAgICAgICAgICBPYmplY3Qua2V5cyh0YWJsZSkuZm9yRWFjaChldmVudCA9PiB7XHJcbiAgICAgICAgICAgIHRhYmxlW2V2ZW50XS5mb3JFYWNoKGhhbmRsZXIgPT4ge1xyXG4gICAgICAgICAgICAgIGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlcilcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY2xlYXJpbmcgZnJvbTogJywgZSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChlLmNoaWxkcmVuLmxlbmd0aCkge1xyXG4gICAgICAgICAgO1suLi5lLmNoaWxkcmVuXS5mb3JFYWNoKGV2ZW50UmVnaXN0cnkuY2xlYXIpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICBpZiAoaGFuZGxlcnMuaGFzKHJvb3QpKSB7XHJcbiAgICAgICAgY29uc3QgdGFibGUgPSBoYW5kbGVycy5nZXQocm9vdClcclxuICAgICAgICBPYmplY3Qua2V5cyh0YWJsZSkuZm9yRWFjaChldmVudCA9PiB7XHJcbiAgICAgICAgICB0YWJsZVtldmVudF0uZm9yRWFjaChoYW5kbGVyID0+IHtcclxuICAgICAgICAgICAgcm9vdC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyKVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gIH1cclxufSkoKVxyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBwcmVmZXItZGVzdHJ1Y3R1cmluZyAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1tdWx0aS1hc3NpZ24gKi9cclxuLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cclxuLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWYgKi9cclxuOyhhc3luYyBmdW5jdGlvbiAobnRGZXRjaCwgaW5pdERhdGEsIGluaXRQcm9maXQsIGluaXRTaWduYWwsIGluaXRQaWNrZXIpIHtcclxuICBjb25zdCBmZXRjaCA9IChwYXRoLCAuLi5yZXN0KSA9PiB7XHJcbiAgICBjb25zdCBiYXNlID0gJ2h0dHBzOi8vZnJlcXRyYWRlLWRlbW8uYnJhaW5hbHl6ZWQuY29tL2FwaS92MSdcclxuICAgIHJldHVybiBudEZldGNoKGJhc2UgKyBwYXRoLCAuLi5yZXN0KVxyXG4gIH1cclxuXHJcbiAgY29uc3QgY3JlZHMgPSAnWm5KbGNYUnlZV1JsY2pwMFpYTjBkR1Z6ZEE9PSdcclxuICBjb25zdCB0b2tlbiA9IGF3YWl0IGZldGNoKCcvdG9rZW4vbG9naW4nLCB7XHJcbiAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgQXV0aG9yaXphdGlvbjogYEJhc2ljICR7Y3JlZHN9YCxcclxuICAgICAgLy8gJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgIH0sXHJcbiAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxyXG4gIH0pXHJcbiAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgIC50aGVuKGRhdGEgPT4gZGF0YS5hY2Nlc3NfdG9rZW4pXHJcblxyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaCgnL3BhaXJfY2FuZGxlcz9wYWlyPUJUQyUyRlVTRFQmdGltZWZyYW1lPTVtJmxpbWl0PTUwMCcsIHtcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcbiAgICB9LFxyXG4gIH0pLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcblxyXG4gIGNvbnN0IHByb2ZpdCA9IGF3YWl0IGZldGNoKCcvdHJhZGVzJywge1xyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuICAgIH0sXHJcbiAgfSkudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuXHJcbiAgY29uc3Qgd2hpdGVsaXN0ID0gYXdhaXQgZmV0Y2goJy93aGl0ZWxpc3QnLCB7XHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG4gICAgfSxcclxuICB9KVxyXG4gICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAudGhlbihyZXNwID0+XHJcbiAgICAgIHJlc3Aud2hpdGVsaXN0Lm1hcChlID0+ICh7XHJcbiAgICAgICAgbmFtZTogZSxcclxuICAgICAgICBmcmVxdWVuY3k6ICc1bScsXHJcbiAgICAgICAgZGVsYXllZDogISFNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpLFxyXG4gICAgICB9KSlcclxuICAgIClcclxuXHJcbiAgY29uc3Qgc2lnbmFscyA9IGRhdGEuZGF0YVxyXG4gICAgLm1hcChkYXRhQXJyYXkgPT4gKHtcclxuICAgICAgZGF0ZTogbW9tZW50KGRhdGFBcnJheVtkYXRhLmNvbHVtbnMuaW5kZXhPZignZGF0ZScpXSkudmFsdWVPZigpLFxyXG4gICAgICBidXk6IGRhdGFBcnJheVtkYXRhLmNvbHVtbnMuaW5kZXhPZignYnV5JyldLFxyXG4gICAgICBzZWxsOiBkYXRhQXJyYXlbZGF0YS5jb2x1bW5zLmluZGV4T2YoJ3NlbGwnKV0sXHJcbiAgICB9KSlcclxuICAgIC5maWx0ZXIoZSA9PiBlLmJ1eSB8fCBlLnNlbGwpXHJcbiAgICAubWFwKHNpZ25hbCA9PiAoe1xyXG4gICAgICB0aW1lc3RhbXA6IHNpZ25hbC5kYXRlLFxyXG4gICAgICBzaWduYWxUeXBlOiBzaWduYWwuYnV5ID8gJ0JVWScgOiAnU0VMTCcsXHJcbiAgICB9KSlcclxuICBjb25zdCBsYXN0U2lnbmFsID0gc2lnbmFsc1tzaWduYWxzLmxlbmd0aCAtIDFdXHJcblxyXG4gIC8vIGluaXRQaWNrZXIod2hpdGVsaXN0KVxyXG4gIC8vIGluaXREYXRhKGRhdGEpXHJcbiAgLy8gaW5pdFByb2ZpdChwcm9maXQpXHJcbiAgLy8gaW5pdFNpZ25hbChsYXN0U2lnbmFsLnRpbWVzdGFtcCwgbGFzdFNpZ25hbC5zaWduYWxUeXBlKVxyXG59KShcclxuICBmZXRjaFxyXG4gIC8vIGRhdGFDaGFydGVyLnNldERhdGEuYmluZChkYXRhQ2hhcnRlciksXHJcbiAgLy8gcHJvZml0Q2hhcnRlci5zZXRQcm9maXREYXRhLmJpbmQocHJvZml0Q2hhcnRlciksXHJcbiAgLy8gc2lnbmFsSGlnaGxpZ2h0LnNldERhdGEuYmluZChzaWduYWxIaWdobGlnaHQpLFxyXG4gIC8vIGFwcC5zZXRQYWlycy5iaW5kKGFwcClcclxuKVxyXG4iLCIvKiBnbG9iYWwgbW9tZW50ICovXHJcblxyXG5jb25zdCBuYW1lc3BhY2UgPSAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXHJcbmxldCBpbnRlcnZhbCA9IG51bGxcclxuXHJcbmV4cG9ydCBjbGFzcyBTaWduYWwge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICB0aGlzLnRpbWVzdGFtcCA9IG51bGxcclxuICAgIHRoaXMuc2lnbmFsVHlwZSA9ICcnXHJcbiAgfVxyXG5cclxuICBzZXREYXRhKHRpbWVzdGFtcCwgc2lnbmFsVHlwZSkge1xyXG4gICAgdGhpcy50aW1lc3RhbXAgPSB0aW1lc3RhbXBcclxuICAgIHRoaXMuc2lnbmFsVHlwZSA9IHNpZ25hbFR5cGVcclxuICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpXHJcbiAgICB0aGlzLnJlbmRlcigpXHJcbiAgfVxyXG5cclxuICB1cGRhdGVUaW1lKHNwYW5FbGVtZW50KSB7XHJcbiAgICBsZXQgZWxhcHNlZFNlY29uZHMgPSBNYXRoLnJvdW5kKFxyXG4gICAgICAobW9tZW50KERhdGUubm93KCkpLnZhbHVlT2YoKSAtIHRoaXMudGltZXN0YW1wKSAvIDEwMDBcclxuICAgIClcclxuICAgIGxldCBlbGFwc2VkTWludXRlcyA9IE1hdGguZmxvb3IoZWxhcHNlZFNlY29uZHMgLyA2MClcclxuICAgIGxldCBlbGFwc2VkSG91cnMgPSBNYXRoLmZsb29yKGVsYXBzZWRNaW51dGVzIC8gNjApXHJcbiAgICBjb25zdCBlbGFwc2VkRGF5cyA9IE1hdGguZmxvb3IoZWxhcHNlZEhvdXJzIC8gMjQpXHJcbiAgICBlbGFwc2VkU2Vjb25kcyAtPSBlbGFwc2VkTWludXRlcyAqIDYwXHJcbiAgICBlbGFwc2VkTWludXRlcyAtPSBlbGFwc2VkSG91cnMgKiA2MFxyXG4gICAgZWxhcHNlZEhvdXJzIC09IGVsYXBzZWREYXlzICogMjRcclxuXHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cclxuICAgIHNwYW5FbGVtZW50LmlubmVySFRNTCA9IGAke2VsYXBzZWREYXlzID8gYCR7ZWxhcHNlZERheXN9ZCBgIDogJyd9JHtcclxuICAgICAgZWxhcHNlZEhvdXJzID8gYCR7ZWxhcHNlZEhvdXJzfWggYCA6ICcnXHJcbiAgICB9JHtlbGFwc2VkTWludXRlcyA/IGAke2VsYXBzZWRNaW51dGVzfW0gYCA6ICcnfSR7XHJcbiAgICAgIGVsYXBzZWRTZWNvbmRzID8gYCR7ZWxhcHNlZFNlY29uZHN9cyBgIDogJydcclxuICAgIH0gYWdvYFxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgY29sb3IgPSB0aGlzLnNpZ25hbFR5cGUgPT09ICdCVVknID8gJ3Bvc2l0aXZlJyA6ICduZWdhdGl2ZSdcclxuXHJcbiAgICBjb25zdCBzaWduYWxQYW5lbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaWduYWwtcGFuZWwnKVxyXG4gICAgc2lnbmFsUGFuZWwuaW5uZXJIVE1MID0gJydcclxuICAgIGNvbnN0IHNpZ25hbFNWRyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhuYW1lc3BhY2UsICdzdmcnKVxyXG4gICAgc2lnbmFsU1ZHLmlkID0gJ3NpZ25hbC1zdmcnXHJcbiAgICBzaWduYWxTVkcuc2V0QXR0cmlidXRlTlMobnVsbCwgJ3ZlcnNpb24nLCAnMS4xJylcclxuICAgIHNpZ25hbFNWRy5zZXRBdHRyaWJ1dGUoJ3htbG5zJywgJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJylcclxuICAgIHNpZ25hbFNWRy5zZXRBdHRyaWJ1dGVOUyhudWxsLCAndmlld0JveCcsICctMTcuNSAtNzUgMTI1IDI1MCcpXHJcbiAgICBzaWduYWxTVkcuc2V0QXR0cmlidXRlTlMobnVsbCwgJ3ByZXNlcnZlQXNwZWN0UmF0aW8nLCAnbm9uZScpXHJcbiAgICBzaWduYWxQYW5lbC5hcHBlbmRDaGlsZChzaWduYWxTVkcpXHJcblxyXG4gICAgY29uc3Qgc2lnbmFsRElWID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIHNpZ25hbERJVi5pZCA9ICdzaWduYWwtZGl2J1xyXG4gICAgY29uc3Qgc2lnbmFsU1BBTiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxyXG4gICAgc2lnbmFsU1BBTi5pZCA9ICdzaWduYWwtc3BhbidcclxuICAgIHNpZ25hbFNQQU4uaW5uZXJIVE1MID0gdGhpcy5zaWduYWxUeXBlXHJcbiAgICBzaWduYWxTUEFOLmNsYXNzTGlzdC5hZGQoY29sb3IpXHJcbiAgICBzaWduYWxESVYuYXBwZW5kQ2hpbGQoc2lnbmFsU1BBTilcclxuICAgIGNvbnN0IHNpZ25hbFRJTUUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcclxuICAgIHNpZ25hbFRJTUUuaWQgPSAnc2lnbmFsLXRpbWUnXHJcbiAgICBzaWduYWxUSU1FLmNsYXNzTGlzdC5hZGQoY29sb3IpXHJcbiAgICBzaWduYWxESVYuYXBwZW5kQ2hpbGQoc2lnbmFsVElNRSlcclxuICAgIHNpZ25hbFBhbmVsLmFwcGVuZENoaWxkKHNpZ25hbERJVilcclxuXHJcbiAgICBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHRoaXMudXBkYXRlVGltZShzaWduYWxUSU1FKSwgMTAwMClcclxuXHJcbiAgICBjb25zdCBidW95U3RlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhuYW1lc3BhY2UsICdwYXRoJylcclxuICAgIGJ1b3lTdGVtLmNsYXNzTGlzdC5hZGQoJ2J1b3ktc3RlbScpXHJcbiAgICBidW95U3RlbS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnZCcsICdNIDQ3LjUgMTUuNSBMIDQ4IDI0IEwgNTIgMjQgTCA1Mi41IDE1LjUgWicpXHJcbiAgICBidW95U3RlbS5jbGFzc0xpc3QuYWRkKGNvbG9yKVxyXG4gICAgc2lnbmFsU1ZHLmFwcGVuZENoaWxkKGJ1b3lTdGVtKVxyXG4gICAgY29uc3QgYnVveUhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobmFtZXNwYWNlLCAnY2lyY2xlJylcclxuICAgIGJ1b3lIZWFkLmNsYXNzTGlzdC5hZGQoJ2J1b3ktaGVhZCcpXHJcbiAgICBidW95SGVhZC5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnY3gnLCA1MClcclxuICAgIGJ1b3lIZWFkLnNldEF0dHJpYnV0ZU5TKG51bGwsICdjeScsIDEwKVxyXG4gICAgYnVveUhlYWQuc2V0QXR0cmlidXRlTlMobnVsbCwgJ3InLCA2KVxyXG4gICAgYnVveUhlYWQuY2xhc3NMaXN0LmFkZChjb2xvcilcclxuICAgIHNpZ25hbFNWRy5hcHBlbmRDaGlsZChidW95SGVhZClcclxuICAgIGNvbnN0IGJ1b3lCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5hbWVzcGFjZSwgJ3BhdGgnKVxyXG4gICAgYnVveUJvZHkuY2xhc3NMaXN0LmFkZCgnYnVveS1ib2R5JylcclxuICAgIGJ1b3lCb2R5LnNldEF0dHJpYnV0ZU5TKG51bGwsICdtYXNrJywgJ3VybCgjaG9sZXNNYXNrKScpXHJcbiAgICBidW95Qm9keS5zZXRBdHRyaWJ1dGVOUyhcclxuICAgICAgbnVsbCxcclxuICAgICAgJ2QnLFxyXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxlblxyXG4gICAgICAnTSA0NSAyNCBMIDQzIDcxLjUgTCA0MCA3MS41IEwgNDAuNSA3NiBMIDM3IDc2IEwgMzcuNSA3MiBDIDM4IDY3LCAzMSA2NywgMzEuNSA3MiBMIDMyIDc2IEwgMjguNSA3NiBMIDMwLjUgOTEgTCA2OS41IDkxIEwgNzEuNSA3NiBMIDY4IDc2IEwgNjguNSA3MiBDIDY5IDY3LCA2MiA2NywgNjIuNSA3MiBMIDYzIDc2IEwgNTkuNSA3NiBMIDYwIDcxLjUgTCA1NyA3MS41IEwgNTUgMjQgWidcclxuICAgIClcclxuICAgIGJ1b3lCb2R5LmNsYXNzTGlzdC5hZGQoY29sb3IpXHJcbiAgICBzaWduYWxTVkcuYXBwZW5kQ2hpbGQoYnVveUJvZHkpXHJcblxyXG4gICAgLy8gOjo6Ojo6Ojo6OiBBTklNIDo6Ojo6Ojo6OjogLy9cclxuICAgIGNvbnN0IGNpcmNsZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobmFtZXNwYWNlLCAnY2lyY2xlJylcclxuICAgIGNpcmNsZTEuY2xhc3NMaXN0LmFkZCgnYnVveS1jaXJjbGUnKVxyXG4gICAgY2lyY2xlMS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnY3gnLCA1MClcclxuICAgIGNpcmNsZTEuc2V0QXR0cmlidXRlTlMobnVsbCwgJ2N5JywgMTApXHJcbiAgICBjaXJjbGUxLnNldEF0dHJpYnV0ZU5TKG51bGwsICdyJywgNilcclxuICAgIGNpcmNsZTEuY2xhc3NMaXN0LmFkZChjb2xvcilcclxuICAgIHNpZ25hbFNWRy5hcHBlbmRDaGlsZChjaXJjbGUxKVxyXG4gICAgY29uc3QgYW5pbVIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5hbWVzcGFjZSwgJ2FuaW1hdGUnKVxyXG4gICAgYW5pbVIxLmlkID0gJ2FuaW0tci0xJ1xyXG4gICAgYW5pbVIxLnNldEF0dHJpYnV0ZU5TKG51bGwsICdhdHRyaWJ1dGVOYW1lJywgJ3InKVxyXG4gICAgYW5pbVIxLnNldEF0dHJpYnV0ZU5TKG51bGwsICdhdHRyaWJ1dGVUeXBlJywgJ1hNTCcpXHJcbiAgICBhbmltUjEuc2V0QXR0cmlidXRlTlMobnVsbCwgJ2JlZ2luJywgJ2FuaW0tci0xLmVuZCArIDNzJylcclxuICAgIGFuaW1SMS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnZHVyJywgJzMuNnMnKVxyXG4gICAgYW5pbVIxLnNldEF0dHJpYnV0ZU5TKG51bGwsICdmcm9tJywgJzYnKVxyXG4gICAgYW5pbVIxLnNldEF0dHJpYnV0ZU5TKG51bGwsICd0bycsICc2NCcpXHJcbiAgICBjaXJjbGUxLmFwcGVuZENoaWxkKGFuaW1SMSlcclxuICAgIGNvbnN0IGFuaW1PMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhuYW1lc3BhY2UsICdhbmltYXRlJylcclxuICAgIGFuaW1PMS5pZCA9ICdhbmltLW8tMSdcclxuICAgIGFuaW1PMS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnYXR0cmlidXRlTmFtZScsICdvcGFjaXR5JylcclxuICAgIGFuaW1PMS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnYXR0cmlidXRlVHlwZScsICdYTUwnKVxyXG4gICAgYW5pbU8xLnNldEF0dHJpYnV0ZU5TKG51bGwsICdiZWdpbicsICdhbmltLXItMS5iZWdpbiArIDAuMXMnKVxyXG4gICAgYW5pbU8xLnNldEF0dHJpYnV0ZU5TKG51bGwsICdkdXInLCAnM3MnKVxyXG4gICAgYW5pbU8xLnNldEF0dHJpYnV0ZU5TKG51bGwsICdmcm9tJywgJzAuNicpXHJcbiAgICBhbmltTzEuc2V0QXR0cmlidXRlTlMobnVsbCwgJ3RvJywgJzAnKVxyXG4gICAgYW5pbU8xLnNldEF0dHJpYnV0ZU5TKG51bGwsICdmaWxsJywgJ2ZyZWV6ZScpXHJcbiAgICBjaXJjbGUxLmFwcGVuZENoaWxkKGFuaW1PMSlcclxuXHJcbiAgICBjb25zdCBjaXJjbGUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5hbWVzcGFjZSwgJ2NpcmNsZScpXHJcbiAgICBjaXJjbGUyLmNsYXNzTGlzdC5hZGQoJ2J1b3ktY2lyY2xlJylcclxuICAgIGNpcmNsZTIuc2V0QXR0cmlidXRlTlMobnVsbCwgJ2N4JywgNTApXHJcbiAgICBjaXJjbGUyLnNldEF0dHJpYnV0ZU5TKG51bGwsICdjeScsIDEwKVxyXG4gICAgY2lyY2xlMi5zZXRBdHRyaWJ1dGVOUyhudWxsLCAncicsIDYpXHJcbiAgICBjaXJjbGUyLmNsYXNzTGlzdC5hZGQoY29sb3IpXHJcbiAgICBzaWduYWxTVkcuYXBwZW5kQ2hpbGQoY2lyY2xlMilcclxuICAgIGNvbnN0IGFuaW1SMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhuYW1lc3BhY2UsICdhbmltYXRlJylcclxuICAgIGFuaW1SMi5pZCA9ICdhbmltLXItMidcclxuICAgIGFuaW1SMi5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnYXR0cmlidXRlTmFtZScsICdyJylcclxuICAgIGFuaW1SMi5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnYXR0cmlidXRlVHlwZScsICdYTUwnKVxyXG4gICAgYW5pbVIyLnNldEF0dHJpYnV0ZU5TKG51bGwsICdiZWdpbicsICdhbmltLXItMS5iZWdpbiArIDFzJylcclxuICAgIGFuaW1SMi5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnZHVyJywgJzMuNnMnKVxyXG4gICAgYW5pbVIyLnNldEF0dHJpYnV0ZU5TKG51bGwsICdmcm9tJywgJzYnKVxyXG4gICAgYW5pbVIyLnNldEF0dHJpYnV0ZU5TKG51bGwsICd0bycsICc2NCcpXHJcbiAgICBjaXJjbGUyLmFwcGVuZENoaWxkKGFuaW1SMilcclxuICAgIGNvbnN0IGFuaW1PMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhuYW1lc3BhY2UsICdhbmltYXRlJylcclxuICAgIGFuaW1PMi5pZCA9ICdhbmltLW8tMidcclxuICAgIGFuaW1PMi5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnYXR0cmlidXRlTmFtZScsICdvcGFjaXR5JylcclxuICAgIGFuaW1PMi5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnYXR0cmlidXRlVHlwZScsICdYTUwnKVxyXG4gICAgYW5pbU8yLnNldEF0dHJpYnV0ZU5TKG51bGwsICdiZWdpbicsICdhbmltLXItMi5iZWdpbiArIDAuMXMnKVxyXG4gICAgYW5pbU8yLnNldEF0dHJpYnV0ZU5TKG51bGwsICdkdXInLCAnM3MnKVxyXG4gICAgYW5pbU8yLnNldEF0dHJpYnV0ZU5TKG51bGwsICdmcm9tJywgJzAuNicpXHJcbiAgICBhbmltTzIuc2V0QXR0cmlidXRlTlMobnVsbCwgJ3RvJywgJzAnKVxyXG4gICAgYW5pbU8yLnNldEF0dHJpYnV0ZU5TKG51bGwsICdmaWxsJywgJ2ZyZWV6ZScpXHJcbiAgICBjaXJjbGUyLmFwcGVuZENoaWxkKGFuaW1PMilcclxuXHJcbiAgICBjb25zdCBjaXJjbGUzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5hbWVzcGFjZSwgJ2NpcmNsZScpXHJcbiAgICBjaXJjbGUzLmNsYXNzTGlzdC5hZGQoJ2J1b3ktY2lyY2xlJylcclxuICAgIGNpcmNsZTMuc2V0QXR0cmlidXRlTlMobnVsbCwgJ2N4JywgNTApXHJcbiAgICBjaXJjbGUzLnNldEF0dHJpYnV0ZU5TKG51bGwsICdjeScsIDEwKVxyXG4gICAgY2lyY2xlMy5zZXRBdHRyaWJ1dGVOUyhudWxsLCAncicsIDYpXHJcbiAgICBjaXJjbGUzLmNsYXNzTGlzdC5hZGQoY29sb3IpXHJcbiAgICBzaWduYWxTVkcuYXBwZW5kQ2hpbGQoY2lyY2xlMylcclxuICAgIGNvbnN0IGFuaW1SMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhuYW1lc3BhY2UsICdhbmltYXRlJylcclxuICAgIGFuaW1SMy5pZCA9ICdhbmltLXItMydcclxuICAgIGFuaW1SMy5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnYXR0cmlidXRlTmFtZScsICdyJylcclxuICAgIGFuaW1SMy5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnYXR0cmlidXRlVHlwZScsICdYTUwnKVxyXG4gICAgYW5pbVIzLnNldEF0dHJpYnV0ZU5TKG51bGwsICdiZWdpbicsICdhbmltLXItMi5iZWdpbiArIDFzJylcclxuICAgIGFuaW1SMy5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnZHVyJywgJzMuNnMnKVxyXG4gICAgYW5pbVIzLnNldEF0dHJpYnV0ZU5TKG51bGwsICdmcm9tJywgJzYnKVxyXG4gICAgYW5pbVIzLnNldEF0dHJpYnV0ZU5TKG51bGwsICd0bycsICc2NCcpXHJcbiAgICBjaXJjbGUzLmFwcGVuZENoaWxkKGFuaW1SMylcclxuICAgIGNvbnN0IGFuaW1PMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhuYW1lc3BhY2UsICdhbmltYXRlJylcclxuICAgIGFuaW1PMy5pZCA9ICdhbmltLW8tMydcclxuICAgIGFuaW1PMy5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnYXR0cmlidXRlTmFtZScsICdvcGFjaXR5JylcclxuICAgIGFuaW1PMy5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnYXR0cmlidXRlVHlwZScsICdYTUwnKVxyXG4gICAgYW5pbU8zLnNldEF0dHJpYnV0ZU5TKG51bGwsICdiZWdpbicsICdhbmltLXItMy5iZWdpbiArIDAuMXMnKVxyXG4gICAgYW5pbU8zLnNldEF0dHJpYnV0ZU5TKG51bGwsICdkdXInLCAnM3MnKVxyXG4gICAgYW5pbU8zLnNldEF0dHJpYnV0ZU5TKG51bGwsICdmcm9tJywgJzAuNicpXHJcbiAgICBhbmltTzMuc2V0QXR0cmlidXRlTlMobnVsbCwgJ3RvJywgJzAnKVxyXG4gICAgYW5pbU8zLnNldEF0dHJpYnV0ZU5TKG51bGwsICdmaWxsJywgJ2ZyZWV6ZScpXHJcbiAgICBjaXJjbGUzLmFwcGVuZENoaWxkKGFuaW1PMylcclxuXHJcbiAgICBpZiAodHlwZW9mIEluc3RhbGxUcmlnZ2VyID09PSAndW5kZWZpbmVkJykgYW5pbVIxLmJlZ2luRWxlbWVudCgpXHJcbiAgICAvLyBkZXRlY3QgRmlyZWZveFxyXG4gICAgZWxzZVxyXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBhbmltUjEuYmVnaW5FbGVtZW50KClcclxuICAgICAgfSwgMClcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZ25hbFxyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSB1bnVzZWQtaW1wb3J0cy9uby11bnVzZWQtdmFycyAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGluZXMgKi9cclxuLyogZXNsaW50LWRpc2FibGUgY2FtZWxjYXNlICovXHJcbi8qIGVzbGludC1kaXNhYmxlIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXMgKi9cclxuLyogZXNsaW50LWRpc2FibGUgcmVhY3QvcHJvcC10eXBlcyAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBtYXgtY2xhc3Nlcy1wZXItZmlsZSAqL1xyXG4vKiBnbG9iYWwgbW9tZW50ICovXHJcblxyXG5jb25zdCBuYW1lc3BhY2UgPSAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXHJcbmNvbnN0IHJlbW92ZU1pbGxpcyA9IDEwMDBcclxuY29uc3QgdGltZVBvbmRlciA9IDMwMFxyXG5jb25zdCB0aW1lUmFuZ2UgPSAzMDAwMDAgLyByZW1vdmVNaWxsaXMgLy8gMzAwMDAwID0gNW1pbnNcclxuY29uc3Qgdmlld0JveFlQYWRkaW5nVG9wID0gMC4xIC8vIDEwJSBvbiB0b3BcclxuY29uc3Qgdmlld0JveFlQYWRkaW5nQm90dG9tID0gMC4zIC8vIDMwJSBvbiBib3R0b21cclxuY29uc3QgY2FuZGxlTWluV2lkdGggPSA4IC8vIHB4XHJcbmNvbnN0IHNjcm9sbEhlaWdodCA9IDE3XHJcbmNvbnN0IGdyaWRTaXplWCA9IDY0XHJcbmNvbnN0IGdyaWRTaXplWSA9IDE2XHJcbmNvbnN0IHJvdW5kaW5nID0gZmFsc2VcclxuXHJcbmV4cG9ydCBjbGFzcyBDaGFydGVyIHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgdGhpcy5yb290RWxlbWVudCA9IHByb3BzLnJvb3RcclxuICAgIHRoaXMuZGF0YSA9IG51bGxcclxuICAgIHRoaXMuc2FtcGxlQ291bnQgPSBudWxsXHJcbiAgICB0aGlzLnBhcnNlZERhdGEgPSBudWxsXHJcbiAgICB0aGlzLmxhc3RQb2ludCA9IG51bGxcclxuICAgIHRoaXMucHJvZml0RGF0YSA9IG51bGxcclxuICAgIHRoaXMuZGF0YVggPSBudWxsXHJcbiAgICB0aGlzLmRhdGFYUmFuZ2UgPSBudWxsXHJcbiAgICB0aGlzLmRhdGFZID0gbnVsbFxyXG4gICAgdGhpcy5kYXRhWVJhbmdlID0gbnVsbFxyXG4gICAgdGhpcy5wcm9maXRYID0gbnVsbFxyXG4gICAgdGhpcy5wcm9maXRYUmFuZ2UgPSBudWxsXHJcbiAgICB0aGlzLnByb2ZpdFkgPSBudWxsXHJcbiAgICB0aGlzLnByb2ZpdFlSYW5nZSA9IG51bGxcclxuICB9XHJcblxyXG4gIHBhcnNlRGF0YSgpIHtcclxuICAgIGNvbnN0IGNhbmRsZUJvdW5kc0ZpZWxkc1RvQ2hlY2sgPSBbJ29wZW4nLCAnbG93JywgJ2hpZ2gnLCAnY2xvc2UnXVxyXG4gICAgY29uc3QgW2RhdGEsIGNhbmRsZU1pbiwgY2FuZGxlTWF4XSA9IHRoaXMuZGF0YS5kYXRhLnJlZHVjZShcclxuICAgICAgKGFjYywgY3VyKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdGVtcERhdGEgPSBbLi4uYWNjWzBdXVxyXG4gICAgICAgIGNvbnN0IHRlbXBSb3cgPSB0aGlzLmRhdGEuY29sdW1ucy5yZWR1Y2UoKGFjY3VtdWxhdGVkLCBjdXJyZW50LCBpKSA9PiB7XHJcbiAgICAgICAgICBpZiAoY3VycmVudCAhPT0gJ2RhdGUnKSByZXR1cm4geyAuLi5hY2N1bXVsYXRlZCwgW2N1cnJlbnRdOiBjdXJbaV0gfVxyXG4gICAgICAgICAgcmV0dXJuIHsgLi4uYWNjdW11bGF0ZWQsIGRhdGU6IG1vbWVudChjdXJbaV0pLnZhbHVlT2YoKSAvIHJlbW92ZU1pbGxpcyB9XHJcbiAgICAgICAgfSwge30pXHJcbiAgICAgICAgdGVtcERhdGEucHVzaCh0ZW1wUm93KVxyXG4gICAgICAgIGNvbnN0IGNhbmRsZVZhbHVlcyA9IGNhbmRsZUJvdW5kc0ZpZWxkc1RvQ2hlY2tcclxuICAgICAgICAgIC5tYXAoZmllbGQgPT4gdGVtcFJvd1tmaWVsZF0pXHJcbiAgICAgICAgICAuc29ydCgoYSwgYikgPT4gYSAtIGIpXHJcbiAgICAgICAgY29uc3QgdGVtcENhbmRsZU1pbiA9IGFjY1sxXVxyXG4gICAgICAgICAgPyBNYXRoLm1pbihhY2NbMV0sIGNhbmRsZVZhbHVlc1swXSlcclxuICAgICAgICAgIDogY2FuZGxlVmFsdWVzWzBdXHJcbiAgICAgICAgY29uc3QgdGVtcENhbmRsZU1heCA9IGFjY1syXVxyXG4gICAgICAgICAgPyBNYXRoLm1heChhY2NbMl0sIGNhbmRsZVZhbHVlc1tjYW5kbGVWYWx1ZXMubGVuZ3RoIC0gMV0pXHJcbiAgICAgICAgICA6IGNhbmRsZVZhbHVlc1tjYW5kbGVWYWx1ZXMubGVuZ3RoIC0gMV1cclxuICAgICAgICByZXR1cm4gW3RlbXBEYXRhLCB0ZW1wQ2FuZGxlTWluLCB0ZW1wQ2FuZGxlTWF4XVxyXG4gICAgICB9LFxyXG4gICAgICBbW10sIG51bGwsIG51bGxdXHJcbiAgICApXHJcbiAgICBkYXRhLnNvcnQoKGEsIGIpID0+IGEuZGF0ZSAtIGIuZGF0ZSlcclxuICAgIHRoaXMubGFzdFBvaW50ID0gZGF0YVtkYXRhLmxlbmd0aCAtIDFdLmRhdGUgKiByZW1vdmVNaWxsaXNcclxuICAgIHRoaXMucGFyc2VkRGF0YSA9IHtcclxuICAgICAgc3RhcnRUaW1lOiBkYXRhWzBdLmRhdGUsXHJcbiAgICAgIGVuZFRpbWU6IGRhdGFbZGF0YS5sZW5ndGggLSAxXS5kYXRlLFxyXG4gICAgICBjYW5kbGVNaW4sXHJcbiAgICAgIGNhbmRsZU1heCxcclxuICAgICAgZGF0YSxcclxuICAgICAgY2FuZGxlRGF0YTogZGF0YS5tYXAoKHsgZGF0ZSwgb3BlbiwgbG93LCBoaWdoLCBjbG9zZSB9KSA9PiAoe1xyXG4gICAgICAgIGRhdGUsXHJcbiAgICAgICAgb3BlbixcclxuICAgICAgICBsb3csXHJcbiAgICAgICAgaGlnaCxcclxuICAgICAgICBjbG9zZSxcclxuICAgICAgfSkpLFxyXG4gICAgICBzaWduYWxEYXRhOiBkYXRhLnJlZHVjZSgoYWNjLCB7IGJ1eSwgc2VsbCwgb3BlbiwgY2xvc2UgfSwgaSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRlbXBSZXN1bHQgPSBbLi4uYWNjXVxyXG4gICAgICAgIGlmIChidXkgfHwgc2VsbClcclxuICAgICAgICAgIHRlbXBSZXN1bHQucHVzaCh7XHJcbiAgICAgICAgICAgIHg6IGksXHJcbiAgICAgICAgICAgIGJ1eSxcclxuICAgICAgICAgICAgc2VsbCxcclxuICAgICAgICAgICAgcG9zOiBvcGVuLFxyXG4gICAgICAgICAgICBkaXJlY3Rpb246IG9wZW4gPiBjbG9zZSA/ICdkb3duJyA6ICd1cCcsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiB0ZW1wUmVzdWx0XHJcbiAgICAgIH0sIFtdKSxcclxuICAgICAgdm9sdW1lRGF0YTogZGF0YS5tYXAoKHsgZGF0ZSwgdm9sdW1lLCBvcGVuLCBjbG9zZSB9KSA9PiAoe1xyXG4gICAgICAgIGRhdGUsXHJcbiAgICAgICAgdm9sdW1lLFxyXG4gICAgICAgIGNvbG9yOiBvcGVuIC0gY2xvc2UgPiAwID8gJ25lZ2F0aXZlJyA6ICdwb3NpdGl2ZScsXHJcbiAgICAgIH0pKSxcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldERhdGEoZGF0YVBvaW50cykge1xyXG4gICAgdGhpcy5kYXRhID0gZGF0YVBvaW50c1xyXG4gICAgaWYgKHRoaXMuZGF0YSAmJiB0aGlzLmRhdGE/LmRhdGE/Lmxlbmd0aCkge1xyXG4gICAgICB0aGlzLnNhbXBsZUNvdW50ID0gdGhpcy5kYXRhLmRhdGEubGVuZ3RoXHJcbiAgICAgIHRoaXMucGFyc2VEYXRhKClcclxuICAgIH1cclxuICAgIHRoaXMucmVuZGVyRGF0YUNoYXJ0KClcclxuICB9XHJcblxyXG4gIHNldFByb2ZpdERhdGEoZGF0YVBvaW50cykge1xyXG4gICAgY29uc3QgW3RlbXBEYXRhLCBtaW4sIG1heF0gPSBbLi4uZGF0YVBvaW50cy50cmFkZXNdXHJcbiAgICAgIC5tYXAoKHsgY2xvc2VfdGltZXN0YW1wLCBjbG9zZV9wcm9maXRfcGN0IH0pID0+ICh7XHJcbiAgICAgICAgZGF0ZTogTWF0aC5yb3VuZChjbG9zZV90aW1lc3RhbXAgLyByZW1vdmVNaWxsaXMpLFxyXG4gICAgICAgIHByb2ZpdDogY2xvc2VfcHJvZml0X3BjdCxcclxuICAgICAgfSkpXHJcbiAgICAgIC5zb3J0KChhLCBiKSA9PiBhLmRhdGUgLSBiLmRhdGUpXHJcbiAgICAgIC5yZWR1Y2UoXHJcbiAgICAgICAgKGFjYywgY3VyLCBpKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCB0ZW1wQ3VtbXVsYXRpdmUgPSBpXHJcbiAgICAgICAgICAgID8gYWNjWzBdW2kgLSAxXS5jdW11bGF0aXZlICsgY3VyLnByb2ZpdFxyXG4gICAgICAgICAgICA6IGN1ci5wcm9maXRcclxuICAgICAgICAgIGNvbnN0IHRlbXBPYmogPSB7IC4uLmN1ciwgY3VtdWxhdGl2ZTogdGVtcEN1bW11bGF0aXZlIH1cclxuICAgICAgICAgIGNvbnN0IHRlbXBNaW4gPVxyXG4gICAgICAgICAgICBhY2NbMV0gIT09IG51bGwgPyBNYXRoLm1pbihhY2NbMV0sIHRlbXBDdW1tdWxhdGl2ZSkgOiB0ZW1wQ3VtbXVsYXRpdmVcclxuICAgICAgICAgIGNvbnN0IHRlbXBNYXggPVxyXG4gICAgICAgICAgICBhY2NbMl0gIT09IG51bGwgPyBNYXRoLm1heChhY2NbMl0sIHRlbXBDdW1tdWxhdGl2ZSkgOiB0ZW1wQ3VtbXVsYXRpdmVcclxuICAgICAgICAgIGNvbnN0IHRlbXBSZXN1bHQgPSBbLi4uYWNjWzBdXVxyXG4gICAgICAgICAgdGVtcFJlc3VsdC5wdXNoKHRlbXBPYmopXHJcbiAgICAgICAgICByZXR1cm4gW3RlbXBSZXN1bHQsIHRlbXBNaW4sIHRlbXBNYXhdXHJcbiAgICAgICAgfSxcclxuICAgICAgICBbW10sIG51bGwsIG51bGxdXHJcbiAgICAgIClcclxuICAgIHRoaXMucHJvZml0RGF0YSA9IHtcclxuICAgICAgc3RhcnRUaW1lOiB0ZW1wRGF0YVswXS5kYXRlLFxyXG4gICAgICBlbmRUaW1lOiB0ZW1wRGF0YVt0ZW1wRGF0YS5sZW5ndGggLSAxXS5kYXRlLFxyXG4gICAgICBwcm9maXREYXRhOiB0ZW1wRGF0YSxcclxuICAgICAgbWluLFxyXG4gICAgICBtYXgsXHJcbiAgICB9XHJcbiAgICB0aGlzLnJlbmRlclByb2ZpdENoYXJ0KClcclxuICB9XHJcblxyXG4gIHNldERpbWVuc2lvbnMod2lkdGgsIGhlaWdodCkge1xyXG4gICAgdGhpcy53aWR0aCA9IHdpZHRoXHJcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodFxyXG4gIH1cclxuXHJcbiAgc2V0RGF0YVZpZXdCb3goeCwgeSwgeFJhbmdlLCB5UmFuZ2UpIHtcclxuICAgIHRoaXMuZGF0YVggPSB4XHJcbiAgICB0aGlzLmRhdGFZID0geVxyXG4gICAgdGhpcy5kYXRhWFJhbmdlID0geFJhbmdlXHJcbiAgICB0aGlzLmRhdGFZUmFuZ2UgPSB5UmFuZ2VcclxuICB9XHJcblxyXG4gIHNldFByb2ZpdFZpZXdCb3goeCwgeSwgeFJhbmdlLCB5UmFuZ2UpIHtcclxuICAgIHRoaXMucHJvZml0WCA9IHhcclxuICAgIHRoaXMucHJvZml0WSA9IHlcclxuICAgIHRoaXMucHJvZml0WFJhbmdlID0geFJhbmdlXHJcbiAgICB0aGlzLnByb2ZpdFlSYW5nZSA9IHlSYW5nZVxyXG4gIH1cclxuXHJcbiAgZ2VuZXJhdGVTVkdzKHdpZHRoLCBoZWlnaHQpIHtcclxuICAgIC8vIDo6Ojo6Ojo6OjogR1JBUEggOjo6Ojo6Ojo6OiAvL1xyXG4gICAgY29uc3QgZ3JhcGhTVkcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobmFtZXNwYWNlLCAnc3ZnJylcclxuICAgIGdyYXBoU1ZHLmlkID0gJ2NoYXJ0LWdyYXBoJ1xyXG4gICAgZ3JhcGhTVkcuc2V0QXR0cmlidXRlTlMobnVsbCwgJ3ZlcnNpb24nLCAnMS4xJylcclxuICAgIGdyYXBoU1ZHLnNldEF0dHJpYnV0ZSgneG1sbnMnLCAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnKVxyXG4gICAgZ3JhcGhTVkcuc2V0QXR0cmlidXRlTlMobnVsbCwgJ3ByZXNlcnZlQXNwZWN0UmF0aW8nLCAnbm9uZScpXHJcbiAgICBncmFwaFNWRy5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnd2lkdGgnLCBgJHt3aWR0aH1weGApXHJcbiAgICAvLyA6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6OjogLy9cclxuXHJcbiAgICAvLyA6Ojo6Ojo6Ojo6IFhBWElTIDo6Ojo6Ojo6OjogLy9cclxuICAgIGNvbnN0IHhBeGlzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5hbWVzcGFjZSwgJ3N2ZycpXHJcbiAgICB4QXhpcy5pZCA9ICdjaGFydC14LWF4aXMnXHJcbiAgICB4QXhpcy5zZXRBdHRyaWJ1dGVOUyhudWxsLCAndmVyc2lvbicsICcxLjEnKVxyXG4gICAgLy8geEF4aXMuc2V0QXR0cmlidXRlKCd4bWxucycsICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycpXHJcbiAgICAvLyB4QXhpcy5zZXRBdHRyaWJ1dGVOUyhudWxsLCAncHJlc2VydmVBc3BlY3RSYXRpbycsICd4TWlkWU1pbiBzbGljZScpXHJcbiAgICB4QXhpcy5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnd2lkdGgnLCBgJHt3aWR0aH1weGApXHJcbiAgICAvLyA6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6OjogLy9cclxuXHJcbiAgICAvLyA6Ojo6Ojo6Ojo6IFlBWElTIDo6Ojo6Ojo6OjogLy9cclxuICAgIGNvbnN0IHlBeGlzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5hbWVzcGFjZSwgJ3N2ZycpXHJcbiAgICB5QXhpcy5pZCA9ICdjaGFydC15LWF4aXMnXHJcbiAgICB5QXhpcy5zZXRBdHRyaWJ1dGVOUyhudWxsLCAndmVyc2lvbicsICcxLjEnKVxyXG4gICAgLy8geUF4aXMuc2V0QXR0cmlidXRlKCd4bWxucycsICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycpXHJcbiAgICAvLyB5QXhpcy5zZXRBdHRyaWJ1dGVOUyhudWxsLCAncHJlc2VydmVBc3BlY3RSYXRpbycsICd4TWluWU1pZCBtZWV0JylcclxuICAgIHlBeGlzLnNldEF0dHJpYnV0ZU5TKG51bGwsICdoZWlnaHQnLCBgJHtoZWlnaHR9cHhgKVxyXG4gICAgLy8gOjo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6IC8vXHJcblxyXG4gICAgdGhpcy5zZXREaW1lbnNpb25zKHdpZHRoLCBoZWlnaHQpXHJcblxyXG4gICAgcmV0dXJuIFtncmFwaFNWRywgeEF4aXMsIHlBeGlzXVxyXG4gIH1cclxuXHJcbiAgZ2VuZXJhdGVHcmlkKGdyaWRHcm91cCwgeEF4aXMsIHlBeGlzLCB4LCB4UmFuZ2UsIHksIHlSYW5nZSwgbWluLCBtYXgpIHtcclxuICAgIGNvbnN0IHJlbGF0aXZlWEdyaWRTaXplID0gKGdyaWRTaXplWCAqIHhSYW5nZSkgLyB0aGlzLndpZHRoXHJcbiAgICBjb25zdCByZWxhdGl2ZVlHcmlkU2l6ZSA9IChncmlkU2l6ZVkgKiB5UmFuZ2UpIC8gdGhpcy5oZWlnaHRcclxuICAgIGNvbnN0IHRlbXBWYWx1ZXMgPSBbMC41LCAxLCAyLjUsIDUsIDEwXVxyXG4gICAgbGV0IHBvbmRlciA9IDFcclxuICAgIGNvbnN0IGNhbGN1bGF0ZVhQb2ludHMgPSAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGxvZ2FyaXRobVdpdGhCYXNlID0gKHZhbHVlLCBiYXNlKSA9PiBNYXRoLmxvZyh2YWx1ZSkgLyBNYXRoLmxvZyhiYXNlKVxyXG4gICAgICBjb25zdCBncmlkVGltZVNwYW4gPSByZWxhdGl2ZVhHcmlkU2l6ZSAqIHRpbWVQb25kZXIgKiByZW1vdmVNaWxsaXNcclxuICAgICAgLy8gY29uc3QgbWluaW11bSA9IHRoaXMubGFzdFBvaW50IC0gdGhpcy5zYW1wbGVDb3VudCAqIHRpbWVQb25kZXIgKiByZW1vdmVNaWxsaXNcclxuICAgICAgY29uc3QgbWluaW11bSA9IG1pblxyXG4gICAgICBsZXQgYWJzUG9uZGVyID0gMVxyXG4gICAgICBsZXQgcmVsUG9uZGVyID0gMVxyXG4gICAgICBsZXQgc2NhbGUgPSAnJ1xyXG4gICAgICBsZXQgdGVtcFJhbmdlID0gZ3JpZFRpbWVTcGFuXHJcbiAgICAgIGNvbnN0IGxvZzEwID0gTWF0aC5sb2cxMChncmlkVGltZVNwYW4pXHJcbiAgICAgIGlmIChsb2cxMCA8IDMpIHtcclxuICAgICAgICBhYnNQb25kZXIgKj0gMTAgKiogTWF0aC5mbG9vcihsb2cxMClcclxuICAgICAgICBzY2FsZSA9ICdtaWxsaXNlY29uZCdcclxuICAgICAgICAvLyBjb25zdCByZWxWYWx1ZXMgPSBbMSwgMi41LCA1LCAxMF1cclxuICAgICAgICBjb25zdCByZWxWYWx1ZXMgPSBbMi41LCA1LCAxMF1cclxuICAgICAgICBjb25zdCBhYnNWYWx1ZXMgPSBbLi4ucmVsVmFsdWVzXVxyXG4gICAgICAgICAgLm1hcChlID0+IGUgKiBhYnNQb25kZXIpXHJcbiAgICAgICAgICAuZmlsdGVyKGUgPT4gIShlIC0gTWF0aC50cnVuYyhlKSkpXHJcbiAgICAgICAgbGV0IGkgPSAwXHJcbiAgICAgICAgd2hpbGUgKGFic1ZhbHVlc1tpXSA8PSBncmlkVGltZVNwYW4pIGkrK1xyXG4gICAgICAgIHRlbXBSYW5nZSA9IGFic1ZhbHVlc1tpXVxyXG4gICAgICAgIHJlbFBvbmRlciA9IHJlbFZhbHVlc1tpXSAqIDEwICoqIE1hdGguZmxvb3IobG9nMTApXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYWJzUG9uZGVyICo9IDEwMDBcclxuICAgICAgICBjb25zdCBsb2c2MCA9IGxvZ2FyaXRobVdpdGhCYXNlKGdyaWRUaW1lU3BhbiAvIGFic1BvbmRlciwgNjApXHJcbiAgICAgICAgaWYgKGxvZzYwIDwgMikge1xyXG4gICAgICAgICAgYWJzUG9uZGVyICo9IDYwICoqIE1hdGguZmxvb3IobG9nNjApXHJcbiAgICAgICAgICBzY2FsZSA9IGxvZzYwIDwgMSA/ICdzZWNvbmQnIDogJ21pbnV0ZSdcclxuICAgICAgICAgIC8vIGNvbnN0IHJlbFZhbHVlcyA9IFsxLCA1LCAxMCwgMzAsIDYwXVxyXG4gICAgICAgICAgY29uc3QgcmVsVmFsdWVzID0gWzUsIDEwLCAzMCwgNjBdXHJcbiAgICAgICAgICBjb25zdCBhYnNWYWx1ZXMgPSBbLi4ucmVsVmFsdWVzXS5tYXAoZSA9PiBlICogYWJzUG9uZGVyKVxyXG4gICAgICAgICAgbGV0IGkgPSAwXHJcbiAgICAgICAgICB3aGlsZSAoYWJzVmFsdWVzW2ldIDw9IGdyaWRUaW1lU3BhbikgaSsrXHJcbiAgICAgICAgICB0ZW1wUmFuZ2UgPSBhYnNWYWx1ZXNbaV1cclxuICAgICAgICAgIHJlbFBvbmRlciA9IHJlbFZhbHVlc1tpXVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBhYnNQb25kZXIgKj0gNjAgKiA2MFxyXG4gICAgICAgICAgaWYgKGdyaWRUaW1lU3BhbiA8IGFic1BvbmRlciAqIDEyKSB7XHJcbiAgICAgICAgICAgIHNjYWxlID0gJ2hvdXInXHJcbiAgICAgICAgICAgIC8vIGNvbnN0IHJlbFZhbHVlcyA9IFsxLCAzLCA2LCAxMl1cclxuICAgICAgICAgICAgY29uc3QgcmVsVmFsdWVzID0gWzMsIDYsIDEyXVxyXG4gICAgICAgICAgICBjb25zdCBhYnNWYWx1ZXMgPSBbLi4ucmVsVmFsdWVzXS5tYXAoZSA9PiBlICogYWJzUG9uZGVyKVxyXG4gICAgICAgICAgICBsZXQgaSA9IDBcclxuICAgICAgICAgICAgd2hpbGUgKGFic1ZhbHVlc1tpXSA8PSBncmlkVGltZVNwYW4pIGkrK1xyXG4gICAgICAgICAgICB0ZW1wUmFuZ2UgPSBhYnNWYWx1ZXNbaV1cclxuICAgICAgICAgICAgcmVsUG9uZGVyID0gcmVsVmFsdWVzW2ldXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBhYnNQb25kZXIgKj0gMjRcclxuICAgICAgICAgICAgaWYgKGdyaWRUaW1lU3BhbiA8IGFic1BvbmRlciAqIDE0KSB7XHJcbiAgICAgICAgICAgICAgc2NhbGUgPSAnZGF0ZSdcclxuICAgICAgICAgICAgICBjb25zdCByZWxWYWx1ZXMgPSBbMSwgMiwgMywgNSwgNywgMTRdXHJcbiAgICAgICAgICAgICAgY29uc3QgYWJzVmFsdWVzID0gWy4uLnJlbFZhbHVlc10ubWFwKGUgPT4gZSAqIGFic1BvbmRlcilcclxuICAgICAgICAgICAgICBsZXQgaSA9IDBcclxuICAgICAgICAgICAgICB3aGlsZSAoYWJzVmFsdWVzW2ldIDw9IGdyaWRUaW1lU3BhbikgaSsrXHJcbiAgICAgICAgICAgICAgdGVtcFJhbmdlID0gYWJzVmFsdWVzW2ldXHJcbiAgICAgICAgICAgICAgcmVsUG9uZGVyID0gcmVsVmFsdWVzW2ldXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgc2NhbGUgPSAnYmlnZ2VyJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGxldCBzdGFydGluZ1BvaW50ID0gbWluaW11bVxyXG4gICAgICBsZXQgcG9pbnRzID0gW11cclxuICAgICAgaWYgKHNjYWxlICE9PSAnYmlnZ2VyJykge1xyXG4gICAgICAgIHN0YXJ0aW5nUG9pbnQgPSBtb21lbnQoc3RhcnRpbmdQb2ludCkuc3RhcnRPZihzY2FsZSlcclxuICAgICAgICBjb25zdCByZW1haW5kZXIgPSBzdGFydGluZ1BvaW50W3NjYWxlXSgpXHJcbiAgICAgICAgaWYgKHNjYWxlID09PSAnZGF0ZScpIHtcclxuICAgICAgICAgIGlmIChyZWxQb25kZXIgPj0gNylcclxuICAgICAgICAgICAgc3RhcnRpbmdQb2ludCA9IG1vbWVudChzdGFydGluZ1BvaW50LnZhbHVlT2YoKSkuaXNvV2Vla2RheSg4KVxyXG4gICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICBzdGFydGluZ1BvaW50ID0gbW9tZW50KHN0YXJ0aW5nUG9pbnQudmFsdWVPZigpKS5hZGQoXHJcbiAgICAgICAgICAgICAgcmVsUG9uZGVyIC0gMSAtICgocmVtYWluZGVyIC0gMSkgJSByZWxQb25kZXIpLFxyXG4gICAgICAgICAgICAgICdkYXknXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc3RhcnRpbmdQb2ludCA9IG1vbWVudChzdGFydGluZ1BvaW50LnZhbHVlT2YoKSkuYWRkKFxyXG4gICAgICAgICAgICByZWxQb25kZXIgLSAxIC0gKChyZW1haW5kZXIgLSAxKSAlIHJlbFBvbmRlciksXHJcbiAgICAgICAgICAgIHNjYWxlXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHBvaW50cy5wdXNoKHN0YXJ0aW5nUG9pbnQudmFsdWVPZigpKVxyXG4gICAgICAgIGxldCBsYXN0UG9pbnQgPSBwb2ludHNbcG9pbnRzLmxlbmd0aCAtIDFdXHJcbiAgICAgICAgd2hpbGUgKGxhc3RQb2ludCA8IG1heCkge1xyXG4gICAgICAgICAgY29uc3QgbmV3UG9pbnQgPSBsYXN0UG9pbnQgKyB0ZW1wUmFuZ2VcclxuICAgICAgICAgIHBvaW50cy5wdXNoKG5ld1BvaW50KVxyXG4gICAgICAgICAgbGFzdFBvaW50ID0gcG9pbnRzW3BvaW50cy5sZW5ndGggLSAxXVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBhYnNQb25kZXIgKj0gMzBcclxuICAgICAgICBpZiAoZ3JpZFRpbWVTcGFuIDwgYWJzUG9uZGVyICogNikge1xyXG4gICAgICAgICAgc2NhbGUgPSAnbW9udGgnXHJcbiAgICAgICAgICBjb25zdCByZWxWYWx1ZXMgPSBbMSwgMywgNl1cclxuICAgICAgICAgIGNvbnN0IGFic1ZhbHVlcyA9IFsuLi5yZWxWYWx1ZXNdLm1hcChlID0+IGUgKiBhYnNQb25kZXIpXHJcbiAgICAgICAgICBsZXQgaSA9IDBcclxuICAgICAgICAgIHdoaWxlIChhYnNWYWx1ZXNbaV0gPD0gZ3JpZFRpbWVTcGFuKSBpKytcclxuICAgICAgICAgIC8vIHRlbXBSYW5nZSA9IGFic1ZhbHVlc1tpXVxyXG4gICAgICAgICAgcmVsUG9uZGVyID0gcmVsVmFsdWVzW2ldXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGFic1BvbmRlciAqPSAzNjUgLyAzMFxyXG4gICAgICAgICAgc2NhbGUgPSAneWVhcidcclxuICAgICAgICAgIGNvbnN0IHJlbFZhbHVlcyA9IFsxLCA1LCAxMF1cclxuICAgICAgICAgIGxldCBhYnNWYWx1ZXMgPSBbLi4ucmVsVmFsdWVzXS5tYXAoZSA9PiBlICogYWJzUG9uZGVyKVxyXG4gICAgICAgICAgbGV0IGkgPSAwXHJcbiAgICAgICAgICBsZXQgaiA9IDBcclxuICAgICAgICAgIHdoaWxlIChhYnNWYWx1ZXNbaV0gPD0gZ3JpZFRpbWVTcGFuKSB7XHJcbiAgICAgICAgICAgIGkrK1xyXG4gICAgICAgICAgICBpZiAoaSA9PT0gYWJzVmFsdWVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgIGlmICghaikge1xyXG4gICAgICAgICAgICAgICAgcmVsVmFsdWVzLnNwbGljZSgxLCAwLCAyLjUpXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGkgPSAwXHJcbiAgICAgICAgICAgICAgaisrXHJcbiAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWxvb3AtZnVuY1xyXG4gICAgICAgICAgICAgIGFic1ZhbHVlcyA9IFsuLi5yZWxWYWx1ZXNdLm1hcChlID0+IGUgKiAxMCAqKiBqICogYWJzUG9uZGVyKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAvLyB0ZW1wUmFuZ2UgPSBhYnNWYWx1ZXNbaV1cclxuICAgICAgICAgIHJlbFBvbmRlciA9IHJlbFZhbHVlc1tpXSAqIDEwICoqIGpcclxuICAgICAgICB9XHJcbiAgICAgICAgc3RhcnRpbmdQb2ludCA9IG1vbWVudChtaW5pbXVtKS5zdGFydE9mKHNjYWxlKS5hZGQoMSwgc2NhbGUpXHJcbiAgICAgICAgY29uc3QgcmVtYWluZGVyID0gc3RhcnRpbmdQb2ludFtzY2FsZV0oKVxyXG4gICAgICAgIHN0YXJ0aW5nUG9pbnQgPSBtb21lbnQoc3RhcnRpbmdQb2ludC52YWx1ZU9mKCkpLmFkZChcclxuICAgICAgICAgIHJlbFBvbmRlciAtIDEgLSAoKHJlbWFpbmRlciAtIDEpICUgcmVsUG9uZGVyKSxcclxuICAgICAgICAgIHNjYWxlXHJcbiAgICAgICAgKVxyXG4gICAgICAgIHBvaW50cy5wdXNoKHN0YXJ0aW5nUG9pbnQudmFsdWVPZigpKVxyXG4gICAgICAgIGxldCBsYXN0UG9pbnQgPSBwb2ludHNbcG9pbnRzLmxlbmd0aCAtIDFdXHJcbiAgICAgICAgd2hpbGUgKGxhc3RQb2ludCA8IG1heCkge1xyXG4gICAgICAgICAgY29uc3QgbmV3UG9pbnQgPSBtb21lbnQobGFzdFBvaW50KS5hZGQocmVsUG9uZGVyLCBzY2FsZSkudmFsdWVPZigpXHJcbiAgICAgICAgICBwb2ludHMucHVzaChuZXdQb2ludClcclxuICAgICAgICAgIGxhc3RQb2ludCA9IHBvaW50c1twb2ludHMubGVuZ3RoIC0gMV1cclxuICAgICAgICB9XHJcbiAgICAgICAgcG9pbnRzLnBvcCgpXHJcbiAgICAgIH1cclxuICAgICAgaWYgKHNjYWxlID09PSAnbW9udGgnICYmIHJlbFBvbmRlciA+IDEpXHJcbiAgICAgICAgcG9pbnRzID0gWy4uLnBvaW50c10ubWFwKHBvaW50ID0+IG1vbWVudChwb2ludCkuc3VidHJhY3QoMSwgJ2RheScpLnZhbHVlT2YoKSlcclxuICAgICAgcmV0dXJuIFtcclxuICAgICAgICBwb2ludHMubWFwKHBvaW50ID0+ICh7XHJcbiAgICAgICAgICB4OiAocG9pbnQgLSBtaW5pbXVtKSAvIHRpbWVQb25kZXIgLyByZW1vdmVNaWxsaXMsXHJcbiAgICAgICAgICB2YWx1ZTogcG9pbnQsXHJcbiAgICAgICAgfSkpLFxyXG4gICAgICAgIHNjYWxlLFxyXG4gICAgICBdXHJcbiAgICB9XHJcbiAgICBjb25zdCBjYWxjdWxhdGVZUG9pbnRzID0gKHJhbmdlLCBzdGFydCkgPT4ge1xyXG4gICAgICBpZiAodGVtcFZhbHVlc1t0ZW1wVmFsdWVzLmxlbmd0aCAtIDFdICogcG9uZGVyID4gcmVsYXRpdmVZR3JpZFNpemUpIHtcclxuICAgICAgICB3aGlsZSAodGVtcFZhbHVlc1t0ZW1wVmFsdWVzLmxlbmd0aCAtIDFdICogcG9uZGVyID4gcmVsYXRpdmVZR3JpZFNpemUpXHJcbiAgICAgICAgICBwb25kZXIgLz0gMTBcclxuICAgICAgICBwb25kZXIgKj0gMTBcclxuICAgICAgfVxyXG4gICAgICBpZiAodGVtcFZhbHVlc1swXSAqIHBvbmRlciA8IHJlbGF0aXZlWUdyaWRTaXplKSB7XHJcbiAgICAgICAgd2hpbGUgKHRlbXBWYWx1ZXNbMF0gKiBwb25kZXIgPCByZWxhdGl2ZVlHcmlkU2l6ZSkgcG9uZGVyICo9IDEwXHJcbiAgICAgICAgcG9uZGVyIC89IDEwXHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgdmFsdWVzID1cclxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcclxuICAgICAgICByb3VuZGluZyAmJiBwb25kZXIgKiB0ZW1wTm9ybWFsaXplciA8PSAxXHJcbiAgICAgICAgICA/IHRlbXBWYWx1ZXMuZmlsdGVyKHYgPT4gIXJvdW5kaW5nIHx8IHYgIT09IDIuNSlcclxuICAgICAgICAgIDogdGVtcFZhbHVlc1xyXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWNvbnN0XHJcbiAgICAgIGxldCBbZGlzdGFuY2UsIGFkZF0gPSB2YWx1ZXMucmVkdWNlKFxyXG4gICAgICAgIChhY2MsIGN1ciwgaSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIGFjY1swXSAqIHBvbmRlciA+IHJlbGF0aXZlWUdyaWRTaXplXHJcbiAgICAgICAgICAgID8gW2FjY1swXSwgYWNjWzFdXVxyXG4gICAgICAgICAgICA6IFtjdXIsIGkgPT09IDJdIC8vIDIuNSBkZWNpbWFsIG9wdGlvblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgWzAsIGZhbHNlXVxyXG4gICAgICApXHJcbiAgICAgIGxldCBkZWNpbWFscyA9IDBcclxuICAgICAgaWYgKHBvbmRlcikgd2hpbGUgKDEwICoqIGRlY2ltYWxzIDwgMSAvIHBvbmRlcikgZGVjaW1hbHMrK1xyXG4gICAgICBpZiAoYWRkKSBkZWNpbWFscysrXHJcbiAgICAgIGRpc3RhbmNlID0gTnVtYmVyKE51bWJlci5wYXJzZUZsb2F0KGRpc3RhbmNlICogcG9uZGVyKS50b0ZpeGVkKGRlY2ltYWxzKSlcclxuICAgICAgY29uc3Qgc3RhcnRpbmdQb2ludCA9XHJcbiAgICAgICAgTnVtYmVyKFxyXG4gICAgICAgICAgTnVtYmVyLnBhcnNlRmxvYXQoTWF0aC5jZWlsKHN0YXJ0IC8gZGlzdGFuY2UpICogZGlzdGFuY2UpLnRvRml4ZWQoZGVjaW1hbHMpXHJcbiAgICAgICAgKSB8fCAwXHJcbiAgICAgIGNvbnN0IHBvaW50cyA9IFtdXHJcbiAgICAgIGlmIChkaXN0YW5jZSkge1xyXG4gICAgICAgIHBvaW50cy5wdXNoKHN0YXJ0aW5nUG9pbnQpXHJcbiAgICAgICAgd2hpbGUgKHBvaW50c1twb2ludHMubGVuZ3RoIC0gMV0gKyBkaXN0YW5jZSA8PSBzdGFydCArIHJhbmdlKSB7XHJcbiAgICAgICAgICBjb25zdCBuZXdQb2ludCA9IE51bWJlcihcclxuICAgICAgICAgICAgTnVtYmVyLnBhcnNlRmxvYXQocG9pbnRzW3BvaW50cy5sZW5ndGggLSAxXSArIGRpc3RhbmNlKS50b0ZpeGVkKGRlY2ltYWxzKVxyXG4gICAgICAgICAgKVxyXG4gICAgICAgICAgcG9pbnRzLnB1c2gobmV3UG9pbnQpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBwb2ludHNcclxuICAgIH1cclxuICAgIGNvbnN0IFt4UG9pbnRzLCB4U2NhbGVdID0gY2FsY3VsYXRlWFBvaW50cyh4UmFuZ2UgKiB0aW1lUG9uZGVyICogcmVtb3ZlTWlsbGlzLCAwKVxyXG4gICAgY29uc3QgeVBvaW50cyA9IGNhbGN1bGF0ZVlQb2ludHMoeVJhbmdlLCB5KVxyXG5cclxuICAgIGNvbnN0IGZvbnRTaXplID0gMTJcclxuICAgIGNvbnN0IHhSYXRpbyA9IHhSYW5nZSAvIHRoaXMud2lkdGhcclxuICAgIGNvbnN0IHlSYXRpbyA9IHlSYW5nZSAvIHRoaXMuaGVpZ2h0XHJcblxyXG4gICAgeFBvaW50cy5mb3JFYWNoKCh7IHg6IHhWYWwsIHZhbHVlIH0pID0+IHtcclxuICAgICAgY29uc3QgdGVtcEdyaWRMaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5hbWVzcGFjZSwgJ2xpbmUnKVxyXG4gICAgICB0ZW1wR3JpZExpbmUuY2xhc3NMaXN0LmFkZCgnZ3JpZC1saW5lJylcclxuICAgICAgdGVtcEdyaWRMaW5lLnNldEF0dHJpYnV0ZU5TKG51bGwsICd4MScsIHhWYWwpXHJcbiAgICAgIHRlbXBHcmlkTGluZS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAneDInLCB4VmFsKVxyXG4gICAgICB0ZW1wR3JpZExpbmUuc2V0QXR0cmlidXRlTlMobnVsbCwgJ3kxJywgeSlcclxuICAgICAgdGVtcEdyaWRMaW5lLnNldEF0dHJpYnV0ZU5TKG51bGwsICd5MicsIHkgKyB5UmFuZ2UpXHJcbiAgICAgIHRlbXBHcmlkTGluZS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnc3Ryb2tlLXdpZHRoJywgJzFweCcpXHJcbiAgICAgIGdyaWRHcm91cC5hcHBlbmRDaGlsZCh0ZW1wR3JpZExpbmUpXHJcblxyXG4gICAgICBjb25zdCBnZXRGb3JtYXRGcm9tU2NhbGUgPSBzY2FsZSA9PiB7XHJcbiAgICAgICAgc3dpdGNoIChzY2FsZSkge1xyXG4gICAgICAgICAgY2FzZSAnbWlsbGlzZWNvbmQnOlxyXG4gICAgICAgICAgICByZXR1cm4gJ3NzLlNTUydcclxuICAgICAgICAgIGNhc2UgJ3NlY29uZCc6XHJcbiAgICAgICAgICAgIHJldHVybiAnbW06c3MnXHJcbiAgICAgICAgICBjYXNlICdtaW51dGUnOlxyXG4gICAgICAgICAgICByZXR1cm4gJ0RELk1NIEhIOm1tJ1xyXG4gICAgICAgICAgY2FzZSAnaG91cic6XHJcbiAgICAgICAgICAgIHJldHVybiAnREQuTU0gSEg6bW0nXHJcbiAgICAgICAgICBjYXNlICdkYXRlJzpcclxuICAgICAgICAgICAgcmV0dXJuICdERC1NTSdcclxuICAgICAgICAgIGNhc2UgJ21vbnRoJzpcclxuICAgICAgICAgICAgcmV0dXJuICdERC1NTS1ZWSdcclxuICAgICAgICAgIGNhc2UgJ3llYXInOlxyXG4gICAgICAgICAgICByZXR1cm4gJ1lZWVknXHJcbiAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgdGVtcEdyaWRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5hbWVzcGFjZSwgJ3RleHQnKVxyXG4gICAgICB0ZW1wR3JpZFRleHQuY2xhc3NMaXN0LmFkZCgneEF4aXMtdGV4dCcpXHJcbiAgICAgIHRlbXBHcmlkVGV4dC5zZXRBdHRyaWJ1dGVOUyhudWxsLCAneCcsIHhWYWwpXHJcbiAgICAgIHRlbXBHcmlkVGV4dC5zZXRBdHRyaWJ1dGVOUyhudWxsLCAneScsIDApXHJcbiAgICAgIHRlbXBHcmlkVGV4dC5zZXRBdHRyaWJ1dGUoJ2ZvbnQtc2l6ZScsIGAke2ZvbnRTaXplICogeFJhdGlvfWApXHJcbiAgICAgIHRlbXBHcmlkVGV4dC5zZXRBdHRyaWJ1dGUoJ2RvbWluYW50LWJhc2VsaW5lJywgJ2hhbmdpbmcnKVxyXG4gICAgICB0ZW1wR3JpZFRleHQuc2V0QXR0cmlidXRlKCd0ZXh0LWFuY2hvcicsICdtaWRkbGUnKVxyXG4gICAgICB0ZW1wR3JpZFRleHQuaW5uZXJIVE1MID0gYCR7bW9tZW50KHZhbHVlKS5mb3JtYXQoZ2V0Rm9ybWF0RnJvbVNjYWxlKHhTY2FsZSkpfWBcclxuICAgICAgeEF4aXMuYXBwZW5kQ2hpbGQodGVtcEdyaWRUZXh0KVxyXG4gICAgfSlcclxuICAgIHlQb2ludHMuZm9yRWFjaChwb2ludCA9PiB7XHJcbiAgICAgIGNvbnN0IHRlbXBHcmlkTGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhuYW1lc3BhY2UsICdsaW5lJylcclxuICAgICAgdGVtcEdyaWRMaW5lLmNsYXNzTGlzdC5hZGQoJ2dyaWQtbGluZScpXHJcbiAgICAgIHRlbXBHcmlkTGluZS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAneDEnLCB4KVxyXG4gICAgICB0ZW1wR3JpZExpbmUuc2V0QXR0cmlidXRlTlMobnVsbCwgJ3gyJywgeCArIHhSYW5nZSlcclxuICAgICAgdGVtcEdyaWRMaW5lLnNldEF0dHJpYnV0ZU5TKG51bGwsICd5MScsIHBvaW50KVxyXG4gICAgICB0ZW1wR3JpZExpbmUuc2V0QXR0cmlidXRlTlMobnVsbCwgJ3kyJywgcG9pbnQpXHJcbiAgICAgIHRlbXBHcmlkTGluZS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnc3Ryb2tlLXdpZHRoJywgJzFweCcpXHJcbiAgICAgIGdyaWRHcm91cC5hcHBlbmRDaGlsZCh0ZW1wR3JpZExpbmUpXHJcblxyXG4gICAgICBjb25zdCB0ZW1wR3JpZFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobmFtZXNwYWNlLCAndGV4dCcpXHJcbiAgICAgIHRlbXBHcmlkVGV4dC5jbGFzc0xpc3QuYWRkKCd5QXhpcy10ZXh0JylcclxuICAgICAgdGVtcEdyaWRUZXh0LnNldEF0dHJpYnV0ZU5TKG51bGwsICd4JywgMClcclxuICAgICAgdGVtcEdyaWRUZXh0LnNldEF0dHJpYnV0ZU5TKG51bGwsICd5JywgcG9pbnQpXHJcbiAgICAgIHRlbXBHcmlkVGV4dC5zZXRBdHRyaWJ1dGUoJ2ZvbnQtc2l6ZScsIGAke2ZvbnRTaXplICogeVJhdGlvfWApXHJcbiAgICAgIHRlbXBHcmlkVGV4dC5zZXRBdHRyaWJ1dGUoJ2RvbWluYW50LWJhc2VsaW5lJywgJ21pZGRsZScpXHJcbiAgICAgIHRlbXBHcmlkVGV4dC5pbm5lckhUTUwgPSBgJHstcG9pbnR9YFxyXG4gICAgICB5QXhpcy5hcHBlbmRDaGlsZCh0ZW1wR3JpZFRleHQpXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgZ2VuZXJhdGVDYW5kbGVzKGNhbmRsZUdyb3VwKSB7XHJcbiAgICB0aGlzLnBhcnNlZERhdGEuY2FuZGxlRGF0YS5mb3JFYWNoKChjYW5kbGUsIGkpID0+IHtcclxuICAgICAgY29uc3QgY2FuZGxlU3BhbiA9IGNhbmRsZS5jbG9zZSAtIGNhbmRsZS5vcGVuXHJcbiAgICAgIGNvbnN0IGNhbmRsZUhlaWdodCA9IE1hdGguYWJzKGNhbmRsZVNwYW4pXHJcblxyXG4gICAgICBjb25zdCB0ZW1wQ2FuZGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5hbWVzcGFjZSwgJ3JlY3QnKVxyXG4gICAgICB0ZW1wQ2FuZGxlLmNsYXNzTGlzdC5hZGQoJ2NhbmRsZS1ib2R5JylcclxuICAgICAgdGVtcENhbmRsZS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAneCcsIDAgKyAoaSAqIHRpbWVSYW5nZSkgLyB0aW1lUG9uZGVyKVxyXG4gICAgICB0ZW1wQ2FuZGxlLnNldEF0dHJpYnV0ZU5TKG51bGwsICd5JywgLU1hdGgubWF4KGNhbmRsZS5jbG9zZSwgY2FuZGxlLm9wZW4pKVxyXG4gICAgICB0ZW1wQ2FuZGxlLnNldEF0dHJpYnV0ZU5TKG51bGwsICd3aWR0aCcsIHRpbWVSYW5nZSAvIHRpbWVQb25kZXIpXHJcbiAgICAgIHRlbXBDYW5kbGUuc2V0QXR0cmlidXRlTlMobnVsbCwgJ2hlaWdodCcsIGNhbmRsZUhlaWdodClcclxuXHJcbiAgICAgIGNvbnN0IHRlbXBXaWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5hbWVzcGFjZSwgJ2xpbmUnKVxyXG4gICAgICB0ZW1wV2ljay5jbGFzc0xpc3QuYWRkKCdjYW5kbGUtd2ljaycpXHJcbiAgICAgIHRlbXBXaWNrLnNldEF0dHJpYnV0ZU5TKG51bGwsICd4MScsICgoMC41ICsgaSkgKiB0aW1lUmFuZ2UpIC8gdGltZVBvbmRlcilcclxuICAgICAgdGVtcFdpY2suc2V0QXR0cmlidXRlTlMobnVsbCwgJ3gyJywgKCgwLjUgKyBpKSAqIHRpbWVSYW5nZSkgLyB0aW1lUG9uZGVyKVxyXG4gICAgICB0ZW1wV2ljay5zZXRBdHRyaWJ1dGVOUyhudWxsLCAneTEnLCAtY2FuZGxlLmhpZ2gpXHJcbiAgICAgIHRlbXBXaWNrLnNldEF0dHJpYnV0ZU5TKG51bGwsICd5MicsIC1jYW5kbGUubG93KVxyXG4gICAgICB0ZW1wV2ljay5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnc3Ryb2tlLXdpZHRoJywgJzFweCcpXHJcblxyXG4gICAgICBpZiAoY2FuZGxlU3Bhbikge1xyXG4gICAgICAgIHRlbXBDYW5kbGUuY2xhc3NMaXN0LmFkZChgJHtjYW5kbGVTcGFuID4gMCA/ICdwb3NpdGl2ZScgOiAnbmVnYXRpdmUnfWApXHJcbiAgICAgICAgdGVtcFdpY2suY2xhc3NMaXN0LmFkZChgJHtjYW5kbGVTcGFuID4gMCA/ICdwb3NpdGl2ZScgOiAnbmVnYXRpdmUnfWApXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNhbmRsZUdyb3VwLmFwcGVuZENoaWxkKHRlbXBDYW5kbGUpXHJcbiAgICAgIGNhbmRsZUdyb3VwLmFwcGVuZENoaWxkKHRlbXBXaWNrKVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGdlbmVyYXRlVm9sdW1lcyh2b2x1bWVHcm91cCkge1xyXG4gICAgY29uc3QgbWF4Vm9sdW1lID0gdGhpcy5wYXJzZWREYXRhLnZvbHVtZURhdGEucmVkdWNlKFxyXG4gICAgICAoYWNjLCB7IHZvbHVtZSB9KSA9PiBNYXRoLm1heChhY2MsIHZvbHVtZSksXHJcbiAgICAgIDBcclxuICAgIClcclxuICAgIHRoaXMucGFyc2VkRGF0YS52b2x1bWVEYXRhLmZvckVhY2goKHsgZGF0ZSwgdm9sdW1lLCBjb2xvciB9LCBpKSA9PiB7XHJcbiAgICAgIGlmICh2b2x1bWUpIHtcclxuICAgICAgICBjb25zdCBoZWlnaHQgPSAodm9sdW1lIC8gbWF4Vm9sdW1lKSAqIHRoaXMuZGF0YVlSYW5nZSAqIHZpZXdCb3hZUGFkZGluZ0JvdHRvbVxyXG4gICAgICAgIGNvbnN0IHRlbXBWb2x1bWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobmFtZXNwYWNlLCAncmVjdCcpXHJcbiAgICAgICAgdGVtcFZvbHVtZS5jbGFzc0xpc3QuYWRkKCd2b2x1bWUnKVxyXG4gICAgICAgIHRlbXBWb2x1bWUuc2V0QXR0cmlidXRlTlMobnVsbCwgJ3gnLCAwICsgKGkgKiB0aW1lUmFuZ2UpIC8gdGltZVBvbmRlcilcclxuICAgICAgICB0ZW1wVm9sdW1lLnNldEF0dHJpYnV0ZU5TKG51bGwsICd5JywgdGhpcy5kYXRhWSArIHRoaXMuZGF0YVlSYW5nZSAtIGhlaWdodClcclxuICAgICAgICB0ZW1wVm9sdW1lLnNldEF0dHJpYnV0ZU5TKG51bGwsICd3aWR0aCcsIHRpbWVSYW5nZSAvIHRpbWVQb25kZXIpXHJcbiAgICAgICAgdGVtcFZvbHVtZS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnaGVpZ2h0JywgaGVpZ2h0KVxyXG4gICAgICAgIHRlbXBWb2x1bWUuY2xhc3NMaXN0LmFkZChgJHtjb2xvcn1gKVxyXG4gICAgICAgIHZvbHVtZUdyb3VwLmFwcGVuZENoaWxkKHRlbXBWb2x1bWUpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBjcmVhdGVTaWduYWxQYXRoKHgsIHksIGRpcmVjdGlvbiwgY29sb3IpIHtcclxuICAgIGNvbnN0IHNpZ25hbFNpemUgPSAxNlxyXG4gICAgY29uc3Qgc2lnbmFsT2Zmc2V0ID0gMTZcclxuICAgIGNvbnN0IHhSYXRpbyA9IHRoaXMuZGF0YVhSYW5nZSAvIHRoaXMud2lkdGhcclxuICAgIGNvbnN0IHlSYXRpbyA9IHRoaXMuZGF0YVlSYW5nZSAvIHRoaXMuaGVpZ2h0XHJcbiAgICBjb25zdCBwYXRoV2lkdGggPSBzaWduYWxTaXplICogeFJhdGlvXHJcbiAgICBjb25zdCBwYXRoSGVpZ2h0ID0gc2lnbmFsU2l6ZSAqIHlSYXRpb1xyXG4gICAgY29uc3QgcGF0aExlZnQgPSB4IC0gcGF0aFdpZHRoIC8gMlxyXG4gICAgY29uc3QgcGF0aFRvcCA9XHJcbiAgICAgIHkgLSBwYXRoSGVpZ2h0IC8gMiArIChkaXJlY3Rpb24gPT09ICd1cCcgPyBzaWduYWxPZmZzZXQgKiB5UmF0aW8gOiAwKVxyXG4gICAgY29uc3QgdGVtcFNpZ25hbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhuYW1lc3BhY2UsICdnJylcclxuICAgIHRlbXBTaWduYWwuY2xhc3NMaXN0LmFkZCgnc2lnbmFsJylcclxuXHJcbiAgICAvLyA6Ojo6Ojo6Ojo6IENJUkMgOjo6Ojo6Ojo6OiAvL1xyXG4gICAgY29uc3QgdGVtcFJpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobmFtZXNwYWNlLCAnY2lyY2xlJylcclxuICAgIHRlbXBSaW5nLmNsYXNzTGlzdC5hZGQoJ3NpZ25hbC1yaW5nJylcclxuICAgIHRlbXBSaW5nLnNldEF0dHJpYnV0ZU5TKG51bGwsICdjeCcsIDUwKVxyXG4gICAgdGVtcFJpbmcuc2V0QXR0cmlidXRlTlMobnVsbCwgJ2N5JywgNTApXHJcbiAgICB0ZW1wUmluZy5zZXRBdHRyaWJ1dGVOUyhudWxsLCAncicsIDYwKVxyXG4gICAgdGVtcFNpZ25hbC5hcHBlbmRDaGlsZCh0ZW1wUmluZylcclxuICAgIC8vIDo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6IC8vXHJcblxyXG4gICAgLy8gOjo6Ojo6Ojo6OiBNQVNLIDo6Ojo6Ojo6OjogLy9cclxuICAgIGNvbnN0IHRlbXBNYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5hbWVzcGFjZSwgJ21hc2snKVxyXG4gICAgdGVtcE1hc2suaWQgPSAnaG9sZXNNYXNrJ1xyXG4gICAgY29uc3QgbWFza1JlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobmFtZXNwYWNlLCAncmVjdCcpXHJcbiAgICBtYXNrUmVjdC5jbGFzc0xpc3QuYWRkKCdtYXNrLXdoaXRlJylcclxuICAgIG1hc2tSZWN0LnNldEF0dHJpYnV0ZU5TKG51bGwsICd4JywgMClcclxuICAgIG1hc2tSZWN0LnNldEF0dHJpYnV0ZU5TKG51bGwsICd5JywgMClcclxuICAgIG1hc2tSZWN0LnNldEF0dHJpYnV0ZU5TKG51bGwsICd3aWR0aCcsIDEwMClcclxuICAgIG1hc2tSZWN0LnNldEF0dHJpYnV0ZU5TKG51bGwsICdoZWlnaHQnLCAxMDApXHJcbiAgICB0ZW1wTWFzay5hcHBlbmRDaGlsZChtYXNrUmVjdClcclxuICAgIGNvbnN0IG1hc2tDaXJjbGVMZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5hbWVzcGFjZSwgJ2NpcmNsZScpXHJcbiAgICBtYXNrQ2lyY2xlTGVmdC5jbGFzc0xpc3QuYWRkKCdtYXNrLWJsYWNrJylcclxuICAgIG1hc2tDaXJjbGVMZWZ0LnNldEF0dHJpYnV0ZU5TKG51bGwsICdjeCcsIDM0LjUpXHJcbiAgICBtYXNrQ2lyY2xlTGVmdC5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnY3knLCA3MS41KVxyXG4gICAgbWFza0NpcmNsZUxlZnQuc2V0QXR0cmlidXRlTlMobnVsbCwgJ3InLCAxLjUpXHJcbiAgICB0ZW1wTWFzay5hcHBlbmRDaGlsZChtYXNrQ2lyY2xlTGVmdClcclxuICAgIGNvbnN0IG1hc2tDaXJjbGVSaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhuYW1lc3BhY2UsICdjaXJjbGUnKVxyXG4gICAgbWFza0NpcmNsZVJpZ2h0LmNsYXNzTGlzdC5hZGQoJ21hc2stYmxhY2snKVxyXG4gICAgbWFza0NpcmNsZVJpZ2h0LnNldEF0dHJpYnV0ZU5TKG51bGwsICdjeCcsIDY1LjUpXHJcbiAgICBtYXNrQ2lyY2xlUmlnaHQuc2V0QXR0cmlidXRlTlMobnVsbCwgJ2N5JywgNzEuNSlcclxuICAgIG1hc2tDaXJjbGVSaWdodC5zZXRBdHRyaWJ1dGVOUyhudWxsLCAncicsIDEuNSlcclxuICAgIHRlbXBNYXNrLmFwcGVuZENoaWxkKG1hc2tDaXJjbGVSaWdodClcclxuICAgIHRlbXBTaWduYWwuYXBwZW5kQ2hpbGQodGVtcE1hc2spXHJcbiAgICAvLyA6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6OiAvL1xyXG5cclxuICAgIC8vIDo6Ojo6Ojo6OjogUEFUSCA6Ojo6Ojo6Ojo6IC8vXHJcbiAgICBjb25zdCBidW95U3RlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhuYW1lc3BhY2UsICdwYXRoJylcclxuICAgIGJ1b3lTdGVtLmNsYXNzTGlzdC5hZGQoJ2J1b3ktc3RlbScpXHJcbiAgICBidW95U3RlbS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnZCcsICdNIDQ3LjUgMTUuNSBMIDQ4IDI0IEwgNTIgMjQgTCA1Mi41IDE1LjUgWicpXHJcbiAgICBidW95U3RlbS5jbGFzc0xpc3QuYWRkKGNvbG9yKVxyXG4gICAgdGVtcFNpZ25hbC5hcHBlbmRDaGlsZChidW95U3RlbSlcclxuICAgIGNvbnN0IGJ1b3lIZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5hbWVzcGFjZSwgJ2NpcmNsZScpXHJcbiAgICBidW95SGVhZC5jbGFzc0xpc3QuYWRkKCdidW95LWhlYWQnKVxyXG4gICAgYnVveUhlYWQuc2V0QXR0cmlidXRlTlMobnVsbCwgJ2N4JywgNTApXHJcbiAgICBidW95SGVhZC5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnY3knLCAxMClcclxuICAgIGJ1b3lIZWFkLnNldEF0dHJpYnV0ZU5TKG51bGwsICdyJywgNilcclxuICAgIGJ1b3lIZWFkLmNsYXNzTGlzdC5hZGQoY29sb3IpXHJcbiAgICB0ZW1wU2lnbmFsLmFwcGVuZENoaWxkKGJ1b3lIZWFkKVxyXG4gICAgY29uc3QgYnVveUJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobmFtZXNwYWNlLCAncGF0aCcpXHJcbiAgICBidW95Qm9keS5jbGFzc0xpc3QuYWRkKCdidW95LWJvZHknKVxyXG4gICAgYnVveUJvZHkuc2V0QXR0cmlidXRlTlMobnVsbCwgJ21hc2snLCAndXJsKCNob2xlc01hc2spJylcclxuICAgIGJ1b3lCb2R5LnNldEF0dHJpYnV0ZU5TKFxyXG4gICAgICBudWxsLFxyXG4gICAgICAnZCcsXHJcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGVuXHJcbiAgICAgICdNIDQ1IDI0IEwgNDMgNzEuNSBMIDQwIDcxLjUgTCA0MC41IDc2IEwgMzcgNzYgTCAzNy41IDcyIEMgMzggNjcsIDMxIDY3LCAzMS41IDcyIEwgMzIgNzYgTCAyOC41IDc2IEwgMzAuNSA5MSBMIDY5LjUgOTEgTCA3MS41IDc2IEwgNjggNzYgTCA2OC41IDcyIEMgNjkgNjcsIDYyIDY3LCA2Mi41IDcyIEwgNjMgNzYgTCA1OS41IDc2IEwgNjAgNzEuNSBMIDU3IDcxLjUgTCA1NSAyNCBaJ1xyXG4gICAgKVxyXG4gICAgYnVveUJvZHkuY2xhc3NMaXN0LmFkZChjb2xvcilcclxuICAgIGNvbnN0IHNpZ25hbFJhdGlvID0gc2lnbmFsU2l6ZSAvIDEwMFxyXG4gICAgdGVtcFNpZ25hbC5zZXRBdHRyaWJ1dGVOUyhcclxuICAgICAgbnVsbCxcclxuICAgICAgJ3RyYW5zZm9ybScsXHJcbiAgICAgIGB0cmFuc2xhdGUoJHtwYXRoTGVmdH0gJHtwYXRoVG9wfSkgc2NhbGUoJHt4UmF0aW8gKiBzaWduYWxSYXRpb30gJHtcclxuICAgICAgICB5UmF0aW8gKiBzaWduYWxSYXRpb1xyXG4gICAgICB9KWBcclxuICAgIClcclxuICAgIHRlbXBTaWduYWwuYXBwZW5kQ2hpbGQoYnVveUJvZHkpXHJcbiAgICAvLyA6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6OiAvL1xyXG5cclxuICAgIC8vIDo6Ojo6Ojo6OjogQU5JTSA6Ojo6Ojo6Ojo6IC8vXHJcbiAgICBjb25zdCBjaXJjbGUxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5hbWVzcGFjZSwgJ2NpcmNsZScpXHJcbiAgICBjaXJjbGUxLmNsYXNzTGlzdC5hZGQoJ2J1b3ktY2lyY2xlJylcclxuICAgIGNpcmNsZTEuc2V0QXR0cmlidXRlTlMobnVsbCwgJ2N4JywgNTApXHJcbiAgICBjaXJjbGUxLnNldEF0dHJpYnV0ZU5TKG51bGwsICdjeScsIDEwKVxyXG4gICAgY2lyY2xlMS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAncicsIDYpXHJcbiAgICBjaXJjbGUxLmNsYXNzTGlzdC5hZGQoY29sb3IpXHJcbiAgICB0ZW1wU2lnbmFsLmFwcGVuZENoaWxkKGNpcmNsZTEpXHJcbiAgICBjb25zdCBhbmltUjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobmFtZXNwYWNlLCAnYW5pbWF0ZScpXHJcbiAgICBhbmltUjEuaWQgPSAnYW5pbS1yLTEnXHJcbiAgICBhbmltUjEuc2V0QXR0cmlidXRlTlMobnVsbCwgJ2F0dHJpYnV0ZU5hbWUnLCAncicpXHJcbiAgICBhbmltUjEuc2V0QXR0cmlidXRlTlMobnVsbCwgJ2F0dHJpYnV0ZVR5cGUnLCAnWE1MJylcclxuICAgIGFuaW1SMS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnYmVnaW4nLCAnYW5pbS1yLTEuZW5kICsgM3MnKVxyXG4gICAgYW5pbVIxLnNldEF0dHJpYnV0ZU5TKG51bGwsICdkdXInLCAnMy42cycpXHJcbiAgICBhbmltUjEuc2V0QXR0cmlidXRlTlMobnVsbCwgJ2Zyb20nLCAnNicpXHJcbiAgICBhbmltUjEuc2V0QXR0cmlidXRlTlMobnVsbCwgJ3RvJywgJzEyOCcpXHJcbiAgICBjaXJjbGUxLmFwcGVuZENoaWxkKGFuaW1SMSlcclxuICAgIGNvbnN0IGFuaW1PMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhuYW1lc3BhY2UsICdhbmltYXRlJylcclxuICAgIGFuaW1PMS5pZCA9ICdhbmltLW8tMSdcclxuICAgIGFuaW1PMS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnYXR0cmlidXRlTmFtZScsICdvcGFjaXR5JylcclxuICAgIGFuaW1PMS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnYXR0cmlidXRlVHlwZScsICdYTUwnKVxyXG4gICAgYW5pbU8xLnNldEF0dHJpYnV0ZU5TKG51bGwsICdiZWdpbicsICdhbmltLXItMS5iZWdpbiArIDAuMXMnKVxyXG4gICAgYW5pbU8xLnNldEF0dHJpYnV0ZU5TKG51bGwsICdkdXInLCAnM3MnKVxyXG4gICAgYW5pbU8xLnNldEF0dHJpYnV0ZU5TKG51bGwsICdmcm9tJywgJzAuNicpXHJcbiAgICBhbmltTzEuc2V0QXR0cmlidXRlTlMobnVsbCwgJ3RvJywgJzAnKVxyXG4gICAgYW5pbU8xLnNldEF0dHJpYnV0ZU5TKG51bGwsICdmaWxsJywgJ2ZyZWV6ZScpXHJcbiAgICBjaXJjbGUxLmFwcGVuZENoaWxkKGFuaW1PMSlcclxuXHJcbiAgICBjb25zdCBjaXJjbGUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5hbWVzcGFjZSwgJ2NpcmNsZScpXHJcbiAgICBjaXJjbGUyLmNsYXNzTGlzdC5hZGQoJ2J1b3ktY2lyY2xlJylcclxuICAgIGNpcmNsZTIuc2V0QXR0cmlidXRlTlMobnVsbCwgJ2N4JywgNTApXHJcbiAgICBjaXJjbGUyLnNldEF0dHJpYnV0ZU5TKG51bGwsICdjeScsIDEwKVxyXG4gICAgY2lyY2xlMi5zZXRBdHRyaWJ1dGVOUyhudWxsLCAncicsIDYpXHJcbiAgICBjaXJjbGUyLmNsYXNzTGlzdC5hZGQoY29sb3IpXHJcbiAgICB0ZW1wU2lnbmFsLmFwcGVuZENoaWxkKGNpcmNsZTIpXHJcbiAgICBjb25zdCBhbmltUjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobmFtZXNwYWNlLCAnYW5pbWF0ZScpXHJcbiAgICBhbmltUjIuaWQgPSAnYW5pbS1yLTInXHJcbiAgICBhbmltUjIuc2V0QXR0cmlidXRlTlMobnVsbCwgJ2F0dHJpYnV0ZU5hbWUnLCAncicpXHJcbiAgICBhbmltUjIuc2V0QXR0cmlidXRlTlMobnVsbCwgJ2F0dHJpYnV0ZVR5cGUnLCAnWE1MJylcclxuICAgIGFuaW1SMi5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnYmVnaW4nLCAnYW5pbS1yLTEuYmVnaW4gKyAxcycpXHJcbiAgICBhbmltUjIuc2V0QXR0cmlidXRlTlMobnVsbCwgJ2R1cicsICczLjZzJylcclxuICAgIGFuaW1SMi5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnZnJvbScsICc2JylcclxuICAgIGFuaW1SMi5zZXRBdHRyaWJ1dGVOUyhudWxsLCAndG8nLCAnMTI4JylcclxuICAgIGNpcmNsZTIuYXBwZW5kQ2hpbGQoYW5pbVIyKVxyXG4gICAgY29uc3QgYW5pbU8yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5hbWVzcGFjZSwgJ2FuaW1hdGUnKVxyXG4gICAgYW5pbU8yLmlkID0gJ2FuaW0tby0yJ1xyXG4gICAgYW5pbU8yLnNldEF0dHJpYnV0ZU5TKG51bGwsICdhdHRyaWJ1dGVOYW1lJywgJ29wYWNpdHknKVxyXG4gICAgYW5pbU8yLnNldEF0dHJpYnV0ZU5TKG51bGwsICdhdHRyaWJ1dGVUeXBlJywgJ1hNTCcpXHJcbiAgICBhbmltTzIuc2V0QXR0cmlidXRlTlMobnVsbCwgJ2JlZ2luJywgJ2FuaW0tci0yLmJlZ2luICsgMC4xcycpXHJcbiAgICBhbmltTzIuc2V0QXR0cmlidXRlTlMobnVsbCwgJ2R1cicsICczcycpXHJcbiAgICBhbmltTzIuc2V0QXR0cmlidXRlTlMobnVsbCwgJ2Zyb20nLCAnMC42JylcclxuICAgIGFuaW1PMi5zZXRBdHRyaWJ1dGVOUyhudWxsLCAndG8nLCAnMCcpXHJcbiAgICBhbmltTzIuc2V0QXR0cmlidXRlTlMobnVsbCwgJ2ZpbGwnLCAnZnJlZXplJylcclxuICAgIGNpcmNsZTIuYXBwZW5kQ2hpbGQoYW5pbU8yKVxyXG5cclxuICAgIGNvbnN0IGNpcmNsZTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobmFtZXNwYWNlLCAnY2lyY2xlJylcclxuICAgIGNpcmNsZTMuY2xhc3NMaXN0LmFkZCgnYnVveS1jaXJjbGUnKVxyXG4gICAgY2lyY2xlMy5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnY3gnLCA1MClcclxuICAgIGNpcmNsZTMuc2V0QXR0cmlidXRlTlMobnVsbCwgJ2N5JywgMTApXHJcbiAgICBjaXJjbGUzLnNldEF0dHJpYnV0ZU5TKG51bGwsICdyJywgNilcclxuICAgIGNpcmNsZTMuY2xhc3NMaXN0LmFkZChjb2xvcilcclxuICAgIHRlbXBTaWduYWwuYXBwZW5kQ2hpbGQoY2lyY2xlMylcclxuICAgIGNvbnN0IGFuaW1SMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhuYW1lc3BhY2UsICdhbmltYXRlJylcclxuICAgIGFuaW1SMy5pZCA9ICdhbmltLXItMydcclxuICAgIGFuaW1SMy5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnYXR0cmlidXRlTmFtZScsICdyJylcclxuICAgIGFuaW1SMy5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnYXR0cmlidXRlVHlwZScsICdYTUwnKVxyXG4gICAgYW5pbVIzLnNldEF0dHJpYnV0ZU5TKG51bGwsICdiZWdpbicsICdhbmltLXItMi5iZWdpbiArIDFzJylcclxuICAgIGFuaW1SMy5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnZHVyJywgJzMuNnMnKVxyXG4gICAgYW5pbVIzLnNldEF0dHJpYnV0ZU5TKG51bGwsICdmcm9tJywgJzYnKVxyXG4gICAgYW5pbVIzLnNldEF0dHJpYnV0ZU5TKG51bGwsICd0bycsICcxMjgnKVxyXG4gICAgY2lyY2xlMy5hcHBlbmRDaGlsZChhbmltUjMpXHJcbiAgICBjb25zdCBhbmltTzMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobmFtZXNwYWNlLCAnYW5pbWF0ZScpXHJcbiAgICBhbmltTzMuaWQgPSAnYW5pbS1vLTMnXHJcbiAgICBhbmltTzMuc2V0QXR0cmlidXRlTlMobnVsbCwgJ2F0dHJpYnV0ZU5hbWUnLCAnb3BhY2l0eScpXHJcbiAgICBhbmltTzMuc2V0QXR0cmlidXRlTlMobnVsbCwgJ2F0dHJpYnV0ZVR5cGUnLCAnWE1MJylcclxuICAgIGFuaW1PMy5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnYmVnaW4nLCAnYW5pbS1yLTMuYmVnaW4gKyAwLjFzJylcclxuICAgIGFuaW1PMy5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnZHVyJywgJzNzJylcclxuICAgIGFuaW1PMy5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnZnJvbScsICcwLjYnKVxyXG4gICAgYW5pbU8zLnNldEF0dHJpYnV0ZU5TKG51bGwsICd0bycsICcwJylcclxuICAgIGFuaW1PMy5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnZmlsbCcsICdmcmVlemUnKVxyXG4gICAgY2lyY2xlMy5hcHBlbmRDaGlsZChhbmltTzMpXHJcblxyXG4gICAgaWYgKHR5cGVvZiBJbnN0YWxsVHJpZ2dlciA9PT0gJ3VuZGVmaW5lZCcpIGFuaW1SMS5iZWdpbkVsZW1lbnQoKVxyXG4gICAgLy8gZGV0ZWN0IEZpcmVmb3hcclxuICAgIGVsc2VcclxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgYW5pbVIxLmJlZ2luRWxlbWVudCgpXHJcbiAgICAgIH0sIDApXHJcblxyXG4gICAgLy8gY29uc3QgYW5pbWF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhuYW1lc3BhY2UsICdhbmltYXRlVHJhbnNmb3JtJylcclxuICAgIC8vIGFuaW1hdGUuc2V0QXR0cmlidXRlTlMobnVsbCwgJ2F0dHJpYnV0ZU5hbWUnLCAndHJhbnNmb3JtJylcclxuICAgIC8vIGFuaW1hdGUuc2V0QXR0cmlidXRlTlMobnVsbCwgJ2F0dHJpYnV0ZVR5cGUnLCAnWE1MJylcclxuICAgIC8vIGFuaW1hdGUuc2V0QXR0cmlidXRlTlMobnVsbCwgJ2FkZGl0aXZlJywgJ3N1bScpXHJcbiAgICAvLyBhbmltYXRlLnNldEF0dHJpYnV0ZU5TKG51bGwsICd0eXBlJywgJ3JvdGF0ZScpXHJcbiAgICAvLyBhbmltYXRlLnNldEF0dHJpYnV0ZU5TKG51bGwsICdiZWdpbicsICduZXZlcicpXHJcbiAgICAvLyBhbmltYXRlLnNldEF0dHJpYnV0ZU5TKG51bGwsICdkdXInLCAnM3MnKVxyXG4gICAgLy8gYW5pbWF0ZS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAndmFsdWVzJywgJy0yMCA1MCA3MDsgMjAgNTAgNzA7IC0yMCA1MCA3MCcpXHJcbiAgICAvLyBhbmltYXRlLnNldEF0dHJpYnV0ZU5TKG51bGwsICdjYWxjTW9kZScsICdzcGxpbmUnKVxyXG4gICAgLy8gYW5pbWF0ZS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAna2V5U3BsaW5lcycsICcwLjcgMCAwLjMgMTsgMC43IDAgMC4zIDEnKVxyXG4gICAgLy8gYW5pbWF0ZS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAna2V5VGltZXMnLCAnMDswLjU7MScpXHJcbiAgICAvLyBhbmltYXRlLnNldEF0dHJpYnV0ZU5TKG51bGwsICdyZXBlYXRDb3VudCcsICdpbmRlZmluaXRlJylcclxuICAgIC8vIHRlbXBTaWduYWwuYXBwZW5kQ2hpbGQoYW5pbWF0ZSlcclxuICAgIC8vIGlmICh0eXBlb2YgSW5zdGFsbFRyaWdnZXIgPT09ICd1bmRlZmluZWQnKSBhbmltYXRlLmJlZ2luRWxlbWVudCgpXHJcbiAgICAvLyAvLyBkZXRlY3QgRmlyZWZveFxyXG4gICAgLy8gZWxzZVxyXG4gICAgLy8gICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgIC8vICAgICBhbmltYXRlLmJlZ2luRWxlbWVudCgpXHJcbiAgICAvLyAgIH0sIDApXHJcbiAgICAvLyA6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6OiAvL1xyXG5cclxuICAgIHJldHVybiB0ZW1wU2lnbmFsXHJcbiAgfVxyXG5cclxuICBnZW5lcmF0ZVNpZ25hbHMoc2lnbmFsR3JvdXApIHtcclxuICAgIGNvbnN0IGRlZnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobmFtZXNwYWNlLCAnZGVmcycpXHJcbiAgICBzaWduYWxHcm91cC5hcHBlbmRDaGlsZChkZWZzKVxyXG4gICAgY29uc3Qgc2lnbmFsR3JhZGllbnRQb3NpdGl2ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcclxuICAgICAgbmFtZXNwYWNlLFxyXG4gICAgICAnbGluZWFyR3JhZGllbnQnXHJcbiAgICApXHJcbiAgICBzaWduYWxHcmFkaWVudFBvc2l0aXZlLmlkID0gJ3NpZ25hbC1ncmFkaWVudC1wb3NpdGl2ZSdcclxuICAgIGRlZnMuYXBwZW5kQ2hpbGQoc2lnbmFsR3JhZGllbnRQb3NpdGl2ZSlcclxuICAgIGNvbnN0IGJlZ2luUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhuYW1lc3BhY2UsICdzdG9wJylcclxuICAgIGJlZ2luUC5jbGFzc0xpc3QuYWRkKCdzaWduYWwtZ3JhZGllbnQtc3RvcCcpXHJcbiAgICBiZWdpblAuY2xhc3NMaXN0LmFkZCgncG9zaXRpdmUnKVxyXG4gICAgYmVnaW5QLnNldEF0dHJpYnV0ZU5TKG51bGwsICdvZmZzZXQnLCAnMCUnKVxyXG4gICAgc2lnbmFsR3JhZGllbnRQb3NpdGl2ZS5hcHBlbmRDaGlsZChiZWdpblApXHJcbiAgICBjb25zdCBlbmRQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5hbWVzcGFjZSwgJ3N0b3AnKVxyXG4gICAgZW5kUC5jbGFzc0xpc3QuYWRkKCdzaWduYWwtZ3JhZGllbnQtc3RvcCcpXHJcbiAgICBlbmRQLnNldEF0dHJpYnV0ZU5TKG51bGwsICdvZmZzZXQnLCAnMTAwJScpXHJcbiAgICBzaWduYWxHcmFkaWVudFBvc2l0aXZlLmFwcGVuZENoaWxkKGVuZFApXHJcblxyXG4gICAgY29uc3Qgc2lnbmFsR3JhZGllbnROZWdhdGl2ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcclxuICAgICAgbmFtZXNwYWNlLFxyXG4gICAgICAnbGluZWFyR3JhZGllbnQnXHJcbiAgICApXHJcbiAgICBzaWduYWxHcmFkaWVudE5lZ2F0aXZlLmlkID0gJ3NpZ25hbC1ncmFkaWVudC1uZWdhdGl2ZSdcclxuICAgIGRlZnMuYXBwZW5kQ2hpbGQoc2lnbmFsR3JhZGllbnROZWdhdGl2ZSlcclxuICAgIGNvbnN0IGJlZ2luTiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhuYW1lc3BhY2UsICdzdG9wJylcclxuICAgIGJlZ2luTi5jbGFzc0xpc3QuYWRkKCdzaWduYWwtZ3JhZGllbnQtc3RvcCcpXHJcbiAgICBiZWdpbk4uY2xhc3NMaXN0LmFkZCgnbmVnYXRpdmUnKVxyXG4gICAgYmVnaW5OLnNldEF0dHJpYnV0ZU5TKG51bGwsICdvZmZzZXQnLCAnMCUnKVxyXG4gICAgc2lnbmFsR3JhZGllbnROZWdhdGl2ZS5hcHBlbmRDaGlsZChiZWdpbk4pXHJcbiAgICBjb25zdCBlbmROID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5hbWVzcGFjZSwgJ3N0b3AnKVxyXG4gICAgZW5kTi5jbGFzc0xpc3QuYWRkKCdzaWduYWwtZ3JhZGllbnQtc3RvcCcpXHJcbiAgICBlbmROLnNldEF0dHJpYnV0ZU5TKG51bGwsICdvZmZzZXQnLCAnMTAwJScpXHJcbiAgICBzaWduYWxHcmFkaWVudE5lZ2F0aXZlLmFwcGVuZENoaWxkKGVuZE4pXHJcblxyXG4gICAgdGhpcy5wYXJzZWREYXRhLnNpZ25hbERhdGEuZm9yRWFjaCgoeyB4LCBidXksIHBvcywgZGlyZWN0aW9uIH0sIGkpID0+IHtcclxuICAgICAgY29uc3QgbWlkWCA9ICgoeCArIDAuNSkgKiB0aW1lUmFuZ2UpIC8gdGltZVBvbmRlclxyXG4gICAgICAvLyBjb25zdCBtaWRZID0gdGhpcy5kYXRhWSArICh0aGlzLmRhdGFZUmFuZ2UgKiB2aWV3Qm94WVBhZGRpbmdUb3ApIC8gMlxyXG4gICAgICBjb25zdCBtaWRZID0gLXBvc1xyXG4gICAgICBjb25zdCBzaWduYWwgPSB0aGlzLmNyZWF0ZVNpZ25hbFBhdGgoXHJcbiAgICAgICAgbWlkWCxcclxuICAgICAgICBtaWRZLFxyXG4gICAgICAgIGRpcmVjdGlvbixcclxuICAgICAgICBgJHtidXkgPiAwID8gJ3Bvc2l0aXZlJyA6ICduZWdhdGl2ZSd9YFxyXG4gICAgICApXHJcblxyXG4gICAgICBjb25zdCBzaWduYWxMaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5hbWVzcGFjZSwgJ2xpbmUnKVxyXG4gICAgICBzaWduYWxMaW5lLmNsYXNzTGlzdC5hZGQoJ3NpZ25hbC1saW5lJylcclxuICAgICAgc2lnbmFsTGluZS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAneDEnLCBtaWRYKVxyXG4gICAgICBzaWduYWxMaW5lLnNldEF0dHJpYnV0ZU5TKG51bGwsICd4MicsIG1pZFgpXHJcbiAgICAgIHNpZ25hbExpbmUuc2V0QXR0cmlidXRlTlMobnVsbCwgJ3kxJywgdGhpcy5kYXRhWSlcclxuICAgICAgc2lnbmFsTGluZS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAneTInLCB0aGlzLmRhdGFZICsgdGhpcy5kYXRhWVJhbmdlKVxyXG4gICAgICBzaWduYWxMaW5lLnNldEF0dHJpYnV0ZU5TKG51bGwsICdzdHJva2Utd2lkdGgnLCAnMXB4JylcclxuICAgICAgc2lnbmFsTGluZS5jbGFzc0xpc3QuYWRkKGAke2J1eSA+IDAgPyAncG9zaXRpdmUnIDogJ25lZ2F0aXZlJ31gKVxyXG4gICAgICAvLyBzaWduYWxMaW5lLnNldEF0dHJpYnV0ZU5TKG51bGwsICd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlKDAuNSAwKScpXHJcbiAgICAgIHNpZ25hbEdyb3VwLmFwcGVuZENoaWxkKHNpZ25hbExpbmUpXHJcblxyXG4gICAgICBsZXQgbmV4dFggPSA1MDBcclxuICAgICAgaWYgKHggPCA1MDApIHtcclxuICAgICAgICBpZiAoaSA8IHRoaXMucGFyc2VkRGF0YS5zaWduYWxEYXRhLmxlbmd0aCAtIDEpXHJcbiAgICAgICAgICBuZXh0WCA9IHRoaXMucGFyc2VkRGF0YS5zaWduYWxEYXRhW2kgKyAxXS54XHJcbiAgICAgICAgY29uc3Qgc2lnbmFsQXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhuYW1lc3BhY2UsICdyZWN0JylcclxuICAgICAgICBzaWduYWxBcmVhLmNsYXNzTGlzdC5hZGQoJ3NpZ25hbC1hcmVhJylcclxuICAgICAgICBzaWduYWxBcmVhLnNldEF0dHJpYnV0ZU5TKG51bGwsICd4JywgbWlkWClcclxuICAgICAgICBzaWduYWxBcmVhLnNldEF0dHJpYnV0ZU5TKG51bGwsICd5JywgdGhpcy5kYXRhWSlcclxuICAgICAgICBzaWduYWxBcmVhLnNldEF0dHJpYnV0ZU5TKG51bGwsICd3aWR0aCcsIG5leHRYIC0geClcclxuICAgICAgICBzaWduYWxBcmVhLnNldEF0dHJpYnV0ZU5TKG51bGwsICdoZWlnaHQnLCB0aGlzLmRhdGFZUmFuZ2UpXHJcbiAgICAgICAgc2lnbmFsQXJlYS5zZXRBdHRyaWJ1dGVOUyhcclxuICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAnZmlsbCcsXHJcbiAgICAgICAgICBgdXJsKCNzaWduYWwtZ3JhZGllbnQtJHtidXkgPiAwID8gJ3Bvc2l0aXZlJyA6ICduZWdhdGl2ZSd9KWBcclxuICAgICAgICApXHJcbiAgICAgICAgLy8gc2lnbmFsQXJlYS5jbGFzc0xpc3QuYWRkKGAke2J1eSA+IDAgPyAncG9zaXRpdmUnIDogJ25lZ2F0aXZlJ31gKVxyXG4gICAgICAgIHNpZ25hbEdyb3VwLmFwcGVuZENoaWxkKHNpZ25hbEFyZWEpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNpZ25hbEdyb3VwLmFwcGVuZENoaWxkKHNpZ25hbClcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBnZW5lcmF0ZVByb2ZpdChwcm9maXRHcm91cCkge1xyXG4gICAgY29uc3Qgc3RhcnQgPSB0aGlzLnByb2ZpdERhdGEuc3RhcnRUaW1lXHJcbiAgICBjb25zdCBlbmQgPSB0aGlzLnByb2ZpdERhdGEuZW5kVGltZVxyXG4gICAgY29uc3QgZGF0YSA9IHRoaXMucHJvZml0RGF0YS5wcm9maXREYXRhLm1hcChlID0+ICh7XHJcbiAgICAgIC4uLmUsXHJcbiAgICAgIGRhdGU6IChlLmRhdGUgLSBzdGFydCkgLyB0aW1lUG9uZGVyLFxyXG4gICAgfSkpXHJcbiAgICBjb25zdCBbbGluZSwgcG9zLCBuZWddID0gZGF0YS5yZWR1Y2UoXHJcbiAgICAgIChhY2MsIGN1ciwgaSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGN1bXVsYXRpdmUgPSAtY3VyLmN1bXVsYXRpdmVcclxuICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgYCR7YWNjWzBdfSR7aSA9PT0gMCA/ICdNJyA6ICcgTCd9ICR7Y3VyLmRhdGUudG9GaXhlZCg0KX0gJHtcclxuICAgICAgICAgICAgYWNjWzNdXHJcbiAgICAgICAgICB9IEwgJHtjdXIuZGF0ZS50b0ZpeGVkKDQpfSAke2N1bXVsYXRpdmUudG9GaXhlZCg0KX1gLFxyXG4gICAgICAgICAgYCR7YWNjWzFdfSR7aSA9PT0gMCA/ICdNJyA6ICcgTCd9ICR7Y3VyLmRhdGUudG9GaXhlZCg0KX0gJHtcclxuICAgICAgICAgICAgYWNjWzNdIDwgMCA/IGFjY1szXSA6IDBcclxuICAgICAgICAgIH0gTCAke2N1ci5kYXRlLnRvRml4ZWQoNCl9ICR7Y3VtdWxhdGl2ZSA8IDAgPyBjdW11bGF0aXZlLnRvRml4ZWQoNCkgOiAwfSR7XHJcbiAgICAgICAgICAgIGkgPT09IGRhdGEubGVuZ3RoIC0gMSA/IGAgTCAke2N1ci5kYXRlLnRvRml4ZWQoNCl9IDBgIDogJydcclxuICAgICAgICAgIH1gLFxyXG4gICAgICAgICAgYCR7YWNjWzJdfSR7aSA9PT0gMCA/ICdNJyA6ICcgTCd9ICR7Y3VyLmRhdGUudG9GaXhlZCg0KX0gJHtcclxuICAgICAgICAgICAgYWNjWzNdID4gMCA/IGFjY1szXSA6IDBcclxuICAgICAgICAgIH0gTCAke2N1ci5kYXRlLnRvRml4ZWQoNCl9ICR7Y3VtdWxhdGl2ZSA+IDAgPyBjdW11bGF0aXZlLnRvRml4ZWQoNCkgOiAwfSR7XHJcbiAgICAgICAgICAgIGkgPT09IGRhdGEubGVuZ3RoIC0gMSA/IGAgTCAke2N1ci5kYXRlLnRvRml4ZWQoNCl9IDBgIDogJydcclxuICAgICAgICAgIH1gLFxyXG4gICAgICAgICAgY3VtdWxhdGl2ZSxcclxuICAgICAgICBdXHJcbiAgICAgIH0sXHJcbiAgICAgIFsnJywgJycsICcnLCAwXVxyXG4gICAgKVxyXG5cclxuICAgIGNvbnN0IHByb2ZpdDBMaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5hbWVzcGFjZSwgJ2xpbmUnKVxyXG4gICAgcHJvZml0MExpbmUuaWQgPSAnemVyby1saW5lJ1xyXG4gICAgcHJvZml0MExpbmUuc2V0QXR0cmlidXRlTlMobnVsbCwgJ3gxJywgMClcclxuICAgIHByb2ZpdDBMaW5lLnNldEF0dHJpYnV0ZU5TKG51bGwsICd4MicsIChlbmQgLSBzdGFydCkgLyB0aW1lUG9uZGVyKVxyXG4gICAgcHJvZml0MExpbmUuc2V0QXR0cmlidXRlTlMobnVsbCwgJ3kxJywgMClcclxuICAgIHByb2ZpdDBMaW5lLnNldEF0dHJpYnV0ZU5TKG51bGwsICd5MicsIDApXHJcbiAgICBwcm9maXQwTGluZS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnc3Ryb2tlLXdpZHRoJywgJzAuNXB4JylcclxuICAgIHByb2ZpdEdyb3VwLmFwcGVuZENoaWxkKHByb2ZpdDBMaW5lKVxyXG5cclxuICAgIGlmIChkYXRhLmxlbmd0aCkge1xyXG4gICAgICBjb25zdCBwb3NQYXRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5hbWVzcGFjZSwgJ3BhdGgnKVxyXG4gICAgICBwb3NQYXRoLmNsYXNzTGlzdC5hZGQoJ3BhdGgnKVxyXG4gICAgICBwb3NQYXRoLmNsYXNzTGlzdC5hZGQoJ3Bvc2l0aXZlJylcclxuICAgICAgcG9zUGF0aC5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnZCcsIGAke3Bvc30gWmApXHJcbiAgICAgIHBvc1BhdGguc2V0QXR0cmlidXRlTlMobnVsbCwgJ3N0cm9rZS13aWR0aCcsICcxcHgnKVxyXG4gICAgICBwcm9maXRHcm91cC5hcHBlbmRDaGlsZChwb3NQYXRoKVxyXG5cclxuICAgICAgY29uc3QgbmVnUGF0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhuYW1lc3BhY2UsICdwYXRoJylcclxuICAgICAgbmVnUGF0aC5jbGFzc0xpc3QuYWRkKCdwYXRoJylcclxuICAgICAgbmVnUGF0aC5jbGFzc0xpc3QuYWRkKCduZWdhdGl2ZScpXHJcbiAgICAgIG5lZ1BhdGguc2V0QXR0cmlidXRlTlMobnVsbCwgJ2QnLCBgJHtuZWd9IFpgKVxyXG4gICAgICBuZWdQYXRoLnNldEF0dHJpYnV0ZU5TKG51bGwsICdzdHJva2Utd2lkdGgnLCAnMXB4JylcclxuICAgICAgcHJvZml0R3JvdXAuYXBwZW5kQ2hpbGQobmVnUGF0aClcclxuXHJcbiAgICAgIGNvbnN0IHRlbXBQYXRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5hbWVzcGFjZSwgJ3BhdGgnKVxyXG4gICAgICB0ZW1wUGF0aC5jbGFzc0xpc3QuYWRkKCdwYXRoJylcclxuICAgICAgdGVtcFBhdGguc2V0QXR0cmlidXRlTlMobnVsbCwgJ2QnLCBsaW5lKVxyXG4gICAgICB0ZW1wUGF0aC5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnc3Ryb2tlLXdpZHRoJywgJzFweCcpXHJcbiAgICAgIHByb2ZpdEdyb3VwLmFwcGVuZENoaWxkKHRlbXBQYXRoKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcG9wdWxhdGVEYXRhU1ZHKHN2ZywgeEF4aXMsIHlBeGlzLCB3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICBjb25zdCBncmlkR3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobmFtZXNwYWNlLCAnZycpXHJcbiAgICBncmlkR3JvdXAuaWQgPSAnY2hhcnQtZ3JpZC1ncm91cCdcclxuICAgIGNvbnN0IGNhbmRsZUdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5hbWVzcGFjZSwgJ2cnKVxyXG4gICAgY2FuZGxlR3JvdXAuaWQgPSAnY2hhcnQtY2FuZGxlLWdyb3VwJ1xyXG4gICAgLy8gY29uc3QgcGF0aEdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5hbWVzcGFjZSwgJ2cnKVxyXG4gICAgLy8gcGF0aEdyb3VwLmlkID0gJ2NoYXJ0LXBhdGgtZ3JvdXAnXHJcbiAgICBjb25zdCB2b2x1bWVHcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhuYW1lc3BhY2UsICdnJylcclxuICAgIHZvbHVtZUdyb3VwLmlkID0gJ2NoYXJ0LXZvbHVtZS1ncm91cCdcclxuICAgIGNvbnN0IHNpZ25hbEdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5hbWVzcGFjZSwgJ2cnKVxyXG4gICAgc2lnbmFsR3JvdXAuaWQgPSAnY2hhcnQtc2lnbmFsLWdyb3VwJ1xyXG4gICAgc3ZnLmFwcGVuZENoaWxkKGdyaWRHcm91cClcclxuICAgIHN2Zy5hcHBlbmRDaGlsZChjYW5kbGVHcm91cClcclxuICAgIC8vIHN2Zy5hcHBlbmRDaGlsZChwYXRoR3JvdXApXHJcbiAgICBzdmcuYXBwZW5kQ2hpbGQodm9sdW1lR3JvdXApXHJcbiAgICBzdmcuYXBwZW5kQ2hpbGQoc2lnbmFsR3JvdXApXHJcbiAgICBjb25zdCB4U3BhbiA9XHJcbiAgICAgICh0aGlzLnBhcnNlZERhdGEuZW5kVGltZSAtIHRoaXMucGFyc2VkRGF0YS5zdGFydFRpbWUgKyAzMDApIC8gdGltZVBvbmRlclxyXG4gICAgY29uc3QgeCA9IDBcclxuICAgIGNvbnN0IHhSYW5nZSA9IHhTcGFuXHJcbiAgICBjb25zdCB5U3BhbiA9IHRoaXMucGFyc2VkRGF0YS5jYW5kbGVNYXggLSB0aGlzLnBhcnNlZERhdGEuY2FuZGxlTWluXHJcbiAgICBjb25zdCB5ID0gLXRoaXMucGFyc2VkRGF0YS5jYW5kbGVNYXggLSB2aWV3Qm94WVBhZGRpbmdUb3AgKiB5U3BhblxyXG4gICAgY29uc3QgeVJhbmdlID0geVNwYW4gKiAoMSArIHZpZXdCb3hZUGFkZGluZ1RvcCArIHZpZXdCb3hZUGFkZGluZ0JvdHRvbSlcclxuICAgIHRoaXMuc2V0RGF0YVZpZXdCb3goeCwgeSwgeFJhbmdlLCB5UmFuZ2UpXHJcbiAgICBjb25zdCB4QXhpc1JhdGlvID0gd2lkdGggLyAzMCAvICh0aGlzLnByb2ZpdFhSYW5nZSAvIDEwMClcclxuICAgIGNvbnN0IHlBeGlzUmF0aW8gPSA0MCAvIGhlaWdodCAvICh0aGlzLnByb2ZpdFlSYW5nZSAvIDEwMClcclxuICAgIHN2Zy5zZXRBdHRyaWJ1dGVOUyhcclxuICAgICAgbnVsbCxcclxuICAgICAgJ3ZpZXdCb3gnLFxyXG4gICAgICBgJHt0aGlzLmRhdGFYfSAke3RoaXMuZGF0YVl9ICR7dGhpcy5kYXRhWFJhbmdlfSAke3RoaXMuZGF0YVlSYW5nZX1gXHJcbiAgICApXHJcbiAgICB4QXhpcy5zZXRBdHRyaWJ1dGVOUyhudWxsLCAndmlld0JveCcsIGAke3RoaXMuZGF0YVh9IDAgJHt0aGlzLmRhdGFYUmFuZ2V9IDEwMGApXHJcbiAgICB4QXhpcy5zZXRBdHRyaWJ1dGVOUyhcclxuICAgICAgbnVsbCxcclxuICAgICAgJ3ByZXNlcnZlQXNwZWN0UmF0aW8nLFxyXG4gICAgICBgeE1pZFlNaW4gJHt4QXhpc1JhdGlvID4gMSA/ICdzbGljZScgOiAnbWVldCd9YFxyXG4gICAgKVxyXG4gICAgeUF4aXMuc2V0QXR0cmlidXRlTlMobnVsbCwgJ3ZpZXdCb3gnLCBgMCAke3RoaXMuZGF0YVl9IDEwMCAke3RoaXMuZGF0YVlSYW5nZX1gKVxyXG4gICAgeUF4aXMuc2V0QXR0cmlidXRlTlMoXHJcbiAgICAgIG51bGwsXHJcbiAgICAgICdwcmVzZXJ2ZUFzcGVjdFJhdGlvJyxcclxuICAgICAgYHhNaW5ZTWlkICR7eUF4aXNSYXRpbyA8IDEgPyAnc2xpY2UnIDogJ21lZXQnfWBcclxuICAgIClcclxuICAgIGlmICh0aGlzLnBhcnNlZERhdGE/LmRhdGE/Lmxlbmd0aCkge1xyXG4gICAgICB0aGlzLmdlbmVyYXRlR3JpZChcclxuICAgICAgICBncmlkR3JvdXAsXHJcbiAgICAgICAgeEF4aXMsXHJcbiAgICAgICAgeUF4aXMsXHJcbiAgICAgICAgdGhpcy5kYXRhWCxcclxuICAgICAgICB0aGlzLmRhdGFYUmFuZ2UsXHJcbiAgICAgICAgdGhpcy5kYXRhWSxcclxuICAgICAgICB0aGlzLmRhdGFZUmFuZ2UsXHJcbiAgICAgICAgdGhpcy5sYXN0UG9pbnQgLSB0aGlzLnNhbXBsZUNvdW50ICogdGltZVBvbmRlciAqIHJlbW92ZU1pbGxpcyxcclxuICAgICAgICB0aGlzLmxhc3RQb2ludFxyXG4gICAgICApXHJcbiAgICAgIGlmICh0aGlzLnBhcnNlZERhdGEuY2FuZGxlRGF0YT8ubGVuZ3RoKSB0aGlzLmdlbmVyYXRlQ2FuZGxlcyhjYW5kbGVHcm91cClcclxuICAgICAgaWYgKHRoaXMucGFyc2VkRGF0YS52b2x1bWVEYXRhPy5sZW5ndGgpIHRoaXMuZ2VuZXJhdGVWb2x1bWVzKHZvbHVtZUdyb3VwKVxyXG4gICAgICBpZiAodGhpcy5wYXJzZWREYXRhLnNpZ25hbERhdGE/Lmxlbmd0aCkgdGhpcy5nZW5lcmF0ZVNpZ25hbHMoc2lnbmFsR3JvdXApXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2hhcnRBcmVhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NoYXJ0LWFyZWEnKVxyXG4gICAgY2hhcnRBcmVhLnNjcm9sbFRvKHRoaXMud2lkdGgsIDApXHJcbiAgfVxyXG5cclxuICBwb3B1bGF0ZVByb2ZpdFNWRyhzdmcsIHhBeGlzLCB5QXhpcywgd2lkdGgsIGhlaWdodCkge1xyXG4gICAgY29uc3QgZ3JpZEdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5hbWVzcGFjZSwgJ2cnKVxyXG4gICAgZ3JpZEdyb3VwLmlkID0gJ2NoYXJ0LWdyaWQtZ3JvdXAnXHJcbiAgICBjb25zdCBwcm9maXRHcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhuYW1lc3BhY2UsICdnJylcclxuICAgIHByb2ZpdEdyb3VwLmlkID0gJ2NoYXJ0LXByb2ZpdC1ncm91cCdcclxuICAgIHN2Zy5hcHBlbmRDaGlsZChncmlkR3JvdXApXHJcbiAgICBzdmcuYXBwZW5kQ2hpbGQocHJvZml0R3JvdXApXHJcblxyXG4gICAgY29uc3QgeFNwYW4gPSAodGhpcy5wcm9maXREYXRhLmVuZFRpbWUgLSB0aGlzLnByb2ZpdERhdGEuc3RhcnRUaW1lKSAvIHRpbWVQb25kZXJcclxuICAgIGNvbnN0IHggPSAwXHJcbiAgICBjb25zdCB4UmFuZ2UgPSB4U3BhblxyXG4gICAgY29uc3QgeVNwYW4gPSB0aGlzLnByb2ZpdERhdGEubWF4IC0gdGhpcy5wcm9maXREYXRhLm1pblxyXG4gICAgY29uc3QgeSA9IC10aGlzLnByb2ZpdERhdGEubWF4IC0gdmlld0JveFlQYWRkaW5nVG9wICogeVNwYW5cclxuICAgIGNvbnN0IHlSYW5nZSA9IHlTcGFuICogKDEgKyAyICogdmlld0JveFlQYWRkaW5nVG9wKVxyXG4gICAgdGhpcy5zZXRQcm9maXRWaWV3Qm94KHgsIHksIHhSYW5nZSwgeVJhbmdlKVxyXG4gICAgY29uc3QgeEF4aXNSYXRpbyA9IHdpZHRoIC8gMzAgLyAodGhpcy5wcm9maXRYUmFuZ2UgLyAxMDApXHJcbiAgICBjb25zdCB5QXhpc1JhdGlvID0gNDAgLyBoZWlnaHQgLyAodGhpcy5wcm9maXRZUmFuZ2UgLyAxMDApXHJcbiAgICBzdmcuc2V0QXR0cmlidXRlTlMoXHJcbiAgICAgIG51bGwsXHJcbiAgICAgICd2aWV3Qm94JyxcclxuICAgICAgYCR7dGhpcy5wcm9maXRYfSAke3RoaXMucHJvZml0WX0gJHt0aGlzLnByb2ZpdFhSYW5nZX0gJHt0aGlzLnByb2ZpdFlSYW5nZX1gXHJcbiAgICApXHJcbiAgICB4QXhpcy5zZXRBdHRyaWJ1dGVOUyhcclxuICAgICAgbnVsbCxcclxuICAgICAgJ3ZpZXdCb3gnLFxyXG4gICAgICBgJHt0aGlzLnByb2ZpdFh9IDAgJHt0aGlzLnByb2ZpdFhSYW5nZX0gMTAwYFxyXG4gICAgKVxyXG4gICAgeEF4aXMuc2V0QXR0cmlidXRlTlMoXHJcbiAgICAgIG51bGwsXHJcbiAgICAgICdwcmVzZXJ2ZUFzcGVjdFJhdGlvJyxcclxuICAgICAgYHhNaWRZTWluICR7eEF4aXNSYXRpbyA+IDEgPyAnc2xpY2UnIDogJ21lZXQnfWBcclxuICAgIClcclxuICAgIHlBeGlzLnNldEF0dHJpYnV0ZU5TKFxyXG4gICAgICBudWxsLFxyXG4gICAgICAndmlld0JveCcsXHJcbiAgICAgIGAwICR7dGhpcy5wcm9maXRZfSAxMDAgJHt0aGlzLnByb2ZpdFlSYW5nZX1gXHJcbiAgICApXHJcbiAgICB5QXhpcy5zZXRBdHRyaWJ1dGVOUyhcclxuICAgICAgbnVsbCxcclxuICAgICAgJ3ByZXNlcnZlQXNwZWN0UmF0aW8nLFxyXG4gICAgICBgeE1pbllNaWQgJHt5QXhpc1JhdGlvIDwgMSA/ICdzbGljZScgOiAnbWVldCd9YFxyXG4gICAgKVxyXG4gICAgaWYgKHRoaXMucHJvZml0RGF0YT8ucHJvZml0RGF0YT8ubGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMuZ2VuZXJhdGVHcmlkKFxyXG4gICAgICAgIGdyaWRHcm91cCxcclxuICAgICAgICB4QXhpcyxcclxuICAgICAgICB5QXhpcyxcclxuICAgICAgICB0aGlzLnByb2ZpdFgsXHJcbiAgICAgICAgdGhpcy5wcm9maXRYUmFuZ2UsXHJcbiAgICAgICAgdGhpcy5wcm9maXRZLFxyXG4gICAgICAgIHRoaXMucHJvZml0WVJhbmdlLFxyXG4gICAgICAgIHRoaXMucHJvZml0RGF0YS5zdGFydFRpbWUgKiByZW1vdmVNaWxsaXMsXHJcbiAgICAgICAgdGhpcy5wcm9maXREYXRhLmVuZFRpbWUgKiByZW1vdmVNaWxsaXNcclxuICAgICAgKVxyXG4gICAgICBpZiAodGhpcy5wcm9maXREYXRhLnByb2ZpdERhdGE/Lmxlbmd0aCkgdGhpcy5nZW5lcmF0ZVByb2ZpdChwcm9maXRHcm91cClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlckRhdGFDaGFydCgpIHtcclxuICAgIGNvbnN0IGNoYXJ0QXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpXHJcbiAgICBjaGFydEFyZWEuaWQgPSAnY2hhcnQtYXJlYSdcclxuICAgIHRoaXMucm9vdEVsZW1lbnQuaW5uZXJIVE1MID0gJydcclxuICAgIHRoaXMucm9vdEVsZW1lbnQuYXBwZW5kQ2hpbGQoY2hhcnRBcmVhKVxyXG4gICAgY29uc3Qgd2lkdGggPVxyXG4gICAgICAoY2FuZGxlTWluV2lkdGggLyB0aW1lUmFuZ2UpICpcclxuICAgICAgKHRoaXMucGFyc2VkRGF0YS5lbmRUaW1lIC0gdGhpcy5wYXJzZWREYXRhLnN0YXJ0VGltZSlcclxuICAgIGNvbnN0IGhlaWdodCA9IGNoYXJ0QXJlYS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQgLSA0MCAtIDEgKiBzY3JvbGxIZWlnaHRcclxuICAgIGNvbnN0IFtzdmcsIHhBeGlzLCB5QXhpc10gPSB0aGlzLmdlbmVyYXRlU1ZHcyh3aWR0aCwgaGVpZ2h0KVxyXG4gICAgdGhpcy5yb290RWxlbWVudC5hcHBlbmRDaGlsZCh5QXhpcylcclxuICAgIGNoYXJ0QXJlYS5hcHBlbmRDaGlsZChzdmcpXHJcbiAgICBjaGFydEFyZWEuYXBwZW5kQ2hpbGQoeEF4aXMpXHJcbiAgICB0aGlzLnBvcHVsYXRlRGF0YVNWRyhzdmcsIHhBeGlzLCB5QXhpcywgd2lkdGgsIGhlaWdodClcclxuICB9XHJcblxyXG4gIHJlbmRlclByb2ZpdENoYXJ0KCkge1xyXG4gICAgY29uc3QgY2hhcnRBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRElWJylcclxuICAgIGNoYXJ0QXJlYS5pZCA9ICdjaGFydC1hcmVhJ1xyXG4gICAgdGhpcy5yb290RWxlbWVudC5pbm5lckhUTUwgPSAnJ1xyXG4gICAgdGhpcy5yb290RWxlbWVudC5hcHBlbmRDaGlsZChjaGFydEFyZWEpXHJcbiAgICBjb25zdCB7IHdpZHRoIH0gPSBjaGFydEFyZWEuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcclxuICAgIGNvbnN0IGhlaWdodCA9IGNoYXJ0QXJlYS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQgLSA0MCAtIDAgKiBzY3JvbGxIZWlnaHRcclxuICAgIGNvbnN0IFtzdmcsIHhBeGlzLCB5QXhpc10gPSB0aGlzLmdlbmVyYXRlU1ZHcyh3aWR0aCwgaGVpZ2h0KVxyXG4gICAgdGhpcy5yb290RWxlbWVudC5hcHBlbmRDaGlsZCh5QXhpcylcclxuICAgIGNoYXJ0QXJlYS5hcHBlbmRDaGlsZChzdmcpXHJcbiAgICBjaGFydEFyZWEuYXBwZW5kQ2hpbGQoeEF4aXMpXHJcbiAgICB0aGlzLnBvcHVsYXRlUHJvZml0U1ZHKHN2ZywgeEF4aXMsIHlBeGlzLCB3aWR0aCwgaGVpZ2h0KVxyXG4gIH1cclxufVxyXG5cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHVudXNlZC1pbXBvcnRzL25vLXVudXNlZC12YXJzXHJcbmNvbnN0IGRhdGFDaGFydGVyID0gbmV3IENoYXJ0ZXIoe1xyXG4gIHJvb3Q6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRhLWNoYXJ0LXdyYXBwZXInKSxcclxufSlcclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHVudXNlZC1pbXBvcnRzL25vLXVudXNlZC12YXJzXHJcbmNvbnN0IHByb2ZpdENoYXJ0ZXIgPSBuZXcgQ2hhcnRlcih7XHJcbiAgcm9vdDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2ZpdC1jaGFydC13cmFwcGVyJyksXHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGFydGVyXHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxudmFyIHJ1bnRpbWUgPSAoZnVuY3Rpb24gKGV4cG9ydHMpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICBmdW5jdGlvbiBkZWZpbmUob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gb2JqW2tleV07XG4gIH1cbiAgdHJ5IHtcbiAgICAvLyBJRSA4IGhhcyBhIGJyb2tlbiBPYmplY3QuZGVmaW5lUHJvcGVydHkgdGhhdCBvbmx5IHdvcmtzIG9uIERPTSBvYmplY3RzLlxuICAgIGRlZmluZSh7fSwgXCJcIik7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGRlZmluZSA9IGZ1bmN0aW9uKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIG9ialtrZXldID0gdmFsdWU7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIGV4cG9ydHMud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIGRlZmluZShJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSk7XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgZGVmaW5lKEdwLCBcImNvbnN0cnVjdG9yXCIsIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgZGVmaW5lKEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLCBcImNvbnN0cnVjdG9yXCIsIEdlbmVyYXRvckZ1bmN0aW9uKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBkZWZpbmUoXG4gICAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsXG4gICAgdG9TdHJpbmdUYWdTeW1ib2wsXG4gICAgXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICk7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgZGVmaW5lKHByb3RvdHlwZSwgbWV0aG9kLCBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIGV4cG9ydHMubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgZGVmaW5lKGdlbkZ1biwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yRnVuY3Rpb25cIik7XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuXG4gIGV4cG9ydHMuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvciwgUHJvbWlzZUltcGwpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgJiZcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgLy8gSWYgYSByZWplY3RlZCBQcm9taXNlIHdhcyB5aWVsZGVkLCB0aHJvdyB0aGUgcmVqZWN0aW9uIGJhY2tcbiAgICAgICAgICAvLyBpbnRvIHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gc28gaXQgY2FuIGJlIGhhbmRsZWQgdGhlcmUuXG4gICAgICAgICAgcmV0dXJuIGludm9rZShcInRocm93XCIsIGVycm9yLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xuXG4gICAgZnVuY3Rpb24gZW5xdWV1ZShtZXRob2QsIGFyZykge1xuICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZUltcGwoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICBkZWZpbmUoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUsIGFzeW5jSXRlcmF0b3JTeW1ib2wsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSk7XG4gIGV4cG9ydHMuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIGV4cG9ydHMuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCwgUHJvbWlzZUltcGwpIHtcbiAgICBpZiAoUHJvbWlzZUltcGwgPT09IHZvaWQgMCkgUHJvbWlzZUltcGwgPSBQcm9taXNlO1xuXG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpLFxuICAgICAgUHJvbWlzZUltcGxcbiAgICApO1xuXG4gICAgcmV0dXJuIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKVxuICAgICAgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICAgICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcblxuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQubWV0aG9kID0gbWV0aG9kO1xuICAgICAgY29udGV4dC5hcmcgPSBhcmc7XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgLy8gU2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgICAgdGhyb3cgY29udGV4dC5hcmc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XG5cbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXG4gICAgICAgICAgICA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcblxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGVcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKSBjYWxsIGFib3ZlLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBDYWxsIGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXShjb250ZXh0LmFyZykgYW5kIGhhbmRsZSB0aGVcbiAgLy8gcmVzdWx0LCBlaXRoZXIgYnkgcmV0dXJuaW5nIGEgeyB2YWx1ZSwgZG9uZSB9IHJlc3VsdCBmcm9tIHRoZVxuICAvLyBkZWxlZ2F0ZSBpdGVyYXRvciwgb3IgYnkgbW9kaWZ5aW5nIGNvbnRleHQubWV0aG9kIGFuZCBjb250ZXh0LmFyZyxcbiAgLy8gc2V0dGluZyBjb250ZXh0LmRlbGVnYXRlIHRvIG51bGwsIGFuZCByZXR1cm5pbmcgdGhlIENvbnRpbnVlU2VudGluZWwuXG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdO1xuICAgIGlmIChtZXRob2QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gQSAudGhyb3cgb3IgLnJldHVybiB3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gLnRocm93XG4gICAgICAvLyBtZXRob2QgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLlxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIC8vIE5vdGU6IFtcInJldHVyblwiXSBtdXN0IGJlIHVzZWQgZm9yIEVTMyBwYXJzaW5nIGNvbXBhdGliaWxpdHkuXG4gICAgICAgIGlmIChkZWxlZ2F0ZS5pdGVyYXRvcltcInJldHVyblwiXSkge1xuICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIC8vIElmIG1heWJlSW52b2tlRGVsZWdhdGUoY29udGV4dCkgY2hhbmdlZCBjb250ZXh0Lm1ldGhvZCBmcm9tXG4gICAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cbiAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICd0aHJvdycgbWV0aG9kXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuXG4gICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG5cbiAgICBpZiAoISBpbmZvKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAvLyBBc3NpZ24gdGhlIHJlc3VsdCBvZiB0aGUgZmluaXNoZWQgZGVsZWdhdGUgdG8gdGhlIHRlbXBvcmFyeVxuICAgICAgLy8gdmFyaWFibGUgc3BlY2lmaWVkIGJ5IGRlbGVnYXRlLnJlc3VsdE5hbWUgKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuXG4gICAgICAvLyBSZXN1bWUgZXhlY3V0aW9uIGF0IHRoZSBkZXNpcmVkIGxvY2F0aW9uIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuXG4gICAgICAvLyBJZiBjb250ZXh0Lm1ldGhvZCB3YXMgXCJ0aHJvd1wiIGJ1dCB0aGUgZGVsZWdhdGUgaGFuZGxlZCB0aGVcbiAgICAgIC8vIGV4Y2VwdGlvbiwgbGV0IHRoZSBvdXRlciBnZW5lcmF0b3IgcHJvY2VlZCBub3JtYWxseS4gSWZcbiAgICAgIC8vIGNvbnRleHQubWV0aG9kIHdhcyBcIm5leHRcIiwgZm9yZ2V0IGNvbnRleHQuYXJnIHNpbmNlIGl0IGhhcyBiZWVuXG4gICAgICAvLyBcImNvbnN1bWVkXCIgYnkgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yLiBJZiBjb250ZXh0Lm1ldGhvZCB3YXNcbiAgICAgIC8vIFwicmV0dXJuXCIsIGFsbG93IHRoZSBvcmlnaW5hbCAucmV0dXJuIGNhbGwgdG8gY29udGludWUgaW4gdGhlXG4gICAgICAvLyBvdXRlciBnZW5lcmF0b3IuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmUteWllbGQgdGhlIHJlc3VsdCByZXR1cm5lZCBieSB0aGUgZGVsZWdhdGUgbWV0aG9kLlxuICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxuXG4gICAgLy8gVGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGlzIGZpbmlzaGVkLCBzbyBmb3JnZXQgaXQgYW5kIGNvbnRpbnVlIHdpdGhcbiAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLlxuICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIGRlZmluZShHcCwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yXCIpO1xuXG4gIC8vIEEgR2VuZXJhdG9yIHNob3VsZCBhbHdheXMgcmV0dXJuIGl0c2VsZiBhcyB0aGUgaXRlcmF0b3Igb2JqZWN0IHdoZW4gdGhlXG4gIC8vIEBAaXRlcmF0b3IgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIGl0LiBTb21lIGJyb3dzZXJzJyBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlXG4gIC8vIGl0ZXJhdG9yIHByb3RvdHlwZSBjaGFpbiBpbmNvcnJlY3RseSBpbXBsZW1lbnQgdGhpcywgY2F1c2luZyB0aGUgR2VuZXJhdG9yXG4gIC8vIG9iamVjdCB0byBub3QgYmUgcmV0dXJuZWQgZnJvbSB0aGlzIGNhbGwuIFRoaXMgZW5zdXJlcyB0aGF0IGRvZXNuJ3QgaGFwcGVuLlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2lzc3Vlcy8yNzQgZm9yIG1vcmUgZGV0YWlscy5cbiAgZGVmaW5lKEdwLCBpdGVyYXRvclN5bWJvbCwgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pO1xuXG4gIGRlZmluZShHcCwgXCJ0b1N0cmluZ1wiLCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBleHBvcnRzLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgZXhwb3J0cy52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcblxuICAvLyBSZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlXG4gIC8vIG9yIG5vdCwgcmV0dXJuIHRoZSBydW50aW1lIG9iamVjdCBzbyB0aGF0IHdlIGNhbiBkZWNsYXJlIHRoZSB2YXJpYWJsZVxuICAvLyByZWdlbmVyYXRvclJ1bnRpbWUgaW4gdGhlIG91dGVyIHNjb3BlLCB3aGljaCBhbGxvd3MgdGhpcyBtb2R1bGUgdG8gYmVcbiAgLy8gaW5qZWN0ZWQgZWFzaWx5IGJ5IGBiaW4vcmVnZW5lcmF0b3IgLS1pbmNsdWRlLXJ1bnRpbWUgc2NyaXB0LmpzYC5cbiAgcmV0dXJuIGV4cG9ydHM7XG5cbn0oXG4gIC8vIElmIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZSwgdXNlIG1vZHVsZS5leHBvcnRzXG4gIC8vIGFzIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgbmFtZXNwYWNlLiBPdGhlcndpc2UgY3JlYXRlIGEgbmV3IGVtcHR5XG4gIC8vIG9iamVjdC4gRWl0aGVyIHdheSwgdGhlIHJlc3VsdGluZyBvYmplY3Qgd2lsbCBiZSB1c2VkIHRvIGluaXRpYWxpemVcbiAgLy8gdGhlIHJlZ2VuZXJhdG9yUnVudGltZSB2YXJpYWJsZSBhdCB0aGUgdG9wIG9mIHRoaXMgZmlsZS5cbiAgdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiA/IG1vZHVsZS5leHBvcnRzIDoge31cbikpO1xuXG50cnkge1xuICByZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xufSBjYXRjaCAoYWNjaWRlbnRhbFN0cmljdE1vZGUpIHtcbiAgLy8gVGhpcyBtb2R1bGUgc2hvdWxkIG5vdCBiZSBydW5uaW5nIGluIHN0cmljdCBtb2RlLCBzbyB0aGUgYWJvdmVcbiAgLy8gYXNzaWdubWVudCBzaG91bGQgYWx3YXlzIHdvcmsgdW5sZXNzIHNvbWV0aGluZyBpcyBtaXNjb25maWd1cmVkLiBKdXN0XG4gIC8vIGluIGNhc2UgcnVudGltZS5qcyBhY2NpZGVudGFsbHkgcnVucyBpbiBzdHJpY3QgbW9kZSwgaW4gbW9kZXJuIGVuZ2luZXNcbiAgLy8gd2UgY2FuIGV4cGxpY2l0bHkgYWNjZXNzIGdsb2JhbFRoaXMuIEluIG9sZGVyIGVuZ2luZXMgd2UgY2FuIGVzY2FwZVxuICAvLyBzdHJpY3QgbW9kZSB1c2luZyBhIGdsb2JhbCBGdW5jdGlvbiBjYWxsLiBUaGlzIGNvdWxkIGNvbmNlaXZhYmx5IGZhaWxcbiAgLy8gaWYgYSBDb250ZW50IFNlY3VyaXR5IFBvbGljeSBmb3JiaWRzIHVzaW5nIEZ1bmN0aW9uLCBidXQgaW4gdGhhdCBjYXNlXG4gIC8vIHRoZSBwcm9wZXIgc29sdXRpb24gaXMgdG8gZml4IHRoZSBhY2NpZGVudGFsIHN0cmljdCBtb2RlIHByb2JsZW0uIElmXG4gIC8vIHlvdSd2ZSBtaXNjb25maWd1cmVkIHlvdXIgYnVuZGxlciB0byBmb3JjZSBzdHJpY3QgbW9kZSBhbmQgYXBwbGllZCBhXG4gIC8vIENTUCB0byBmb3JiaWQgRnVuY3Rpb24sIGFuZCB5b3UncmUgbm90IHdpbGxpbmcgdG8gZml4IGVpdGhlciBvZiB0aG9zZVxuICAvLyBwcm9ibGVtcywgcGxlYXNlIGRldGFpbCB5b3VyIHVuaXF1ZSBwcmVkaWNhbWVudCBpbiBhIEdpdEh1YiBpc3N1ZS5cbiAgaWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSBcIm9iamVjdFwiKSB7XG4gICAgZ2xvYmFsVGhpcy5yZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xuICB9IGVsc2Uge1xuICAgIEZ1bmN0aW9uKFwiclwiLCBcInJlZ2VuZXJhdG9yUnVudGltZSA9IHJcIikocnVudGltZSk7XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuXHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgZGVmaW5pdGlvbikge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmosIHByb3ApIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApOyB9IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11c2UtYmVmb3JlLWRlZmluZSAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXHJcbi8qIGVzbGludC1kaXNhYmxlIG5vLXNoYWRvdyAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlZiAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSB1bnVzZWQtaW1wb3J0cy9uby11bnVzZWQtdmFycyAqL1xyXG5cclxuaW1wb3J0ICdyZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUnXHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnXHJcblxyXG5pbXBvcnQgJy4vb2xkZmlsZXMvX21pdGFyJ1xyXG5cclxuaW1wb3J0IHsgQ2hhcnRlciB9IGZyb20gJy4vc2ltZW9uJ1xyXG5pbXBvcnQgeyBTaWduYWwgfSBmcm9tICcuL3NpZ25hbCdcclxuXHJcbmltcG9ydCB7IGZldGNoUGFpcmxpc3QsIGZldGNoQ2FuZGxlRGF0YSwgZmV0Y2hUcmFkZURhdGEgfSBmcm9tICcuL2RhdGEtaGFuZGxlcnMnXHJcbmltcG9ydCB7IGV4dHJhY3RTaWduYWxEYXRhLCBldmVudFJlZ2lzdHJ5IH0gZnJvbSAnLi9oZWxwZXJzJ1xyXG5cclxuY29uc3QgQ0FORExFX0RBVEFfTElNSVQgPSA1MDBcclxuXHJcbmNsYXNzIFNpZ25hbHNBcHAge1xyXG4gIGNvbnN0cnVjdG9yKGh0bWxFbGVtZW50KSB7XHJcbiAgICBpZiAoIWh0bWxFbGVtZW50KSB0aHJvdyBFcnJvcignTm8gcm9vdCBlbGVtZW50IHBhc3NlZCB0byB0aGUgQXBwJylcclxuXHJcbiAgICB0aGlzLnJvb3RIVE1MID0gaHRtbEVsZW1lbnRcclxuICAgIHRoaXMuZGF0YUNoYXJ0ZXIgPSBudWxsXHJcbiAgICB0aGlzLnByb2ZpdENoYXJ0ZXIgPSBudWxsXHJcbiAgICB0aGlzLnNpZ25hbEhpZ2hsaWdodCA9IG51bGxcclxuXHJcbiAgICB0aGlzLnBhaXJMaXN0ID0gW11cclxuICAgIHRoaXMuZnJlcXVlbmN5TGlzdCA9IFtdXHJcbiAgICB0aGlzLmFjdGl2ZVBhaXIgPSBudWxsXHJcbiAgICB0aGlzLmFjdGl2ZUZyZXF1ZW5jeSA9IG51bGxcclxuXHJcbiAgICB0aGlzLmluaXRpYWxpemUoKVxyXG4gICAgY29uc29sZS5sb2codGhpcylcclxuICB9XHJcblxyXG4gIGluaXRpYWxpemUoKSB7XHJcbiAgICB0aGlzLnJvb3RIVE1MLmlubmVySFRNTCA9IGBcclxuICAgIDxkaXYgaWQ9XCJzaWduYWwtcGFuZWxcIj48L2Rpdj5cclxuICAgICAgPGRpdiBpZD1cInNpZ25hbHNcIj5cclxuICAgICAgICA8ZGl2IGlkPVwiY2hhcnRzXCI+XHJcbiAgICAgICAgICA8ZGl2IGlkPVwiZGF0YS1jaGFydC13cmFwcGVyXCI+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGlkPVwicHJvZml0LWNoYXJ0LXdyYXBwZXJcIj48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGlkPVwic2lnbmFsLWNvbnRyb2xzXCI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgYFxyXG4gICAgdGhpcy5kYXRhQ2hhcnRlciA9IG5ldyBDaGFydGVyKHtcclxuICAgICAgcm9vdDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGEtY2hhcnQtd3JhcHBlcicpLFxyXG4gICAgfSlcclxuICAgIHRoaXMucHJvZml0Q2hhcnRlciA9IG5ldyBDaGFydGVyKHtcclxuICAgICAgcm9vdDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2ZpdC1jaGFydC13cmFwcGVyJyksXHJcbiAgICB9KVxyXG4gICAgdGhpcy5zaWduYWxIaWdobGlnaHQgPSBuZXcgU2lnbmFsKHtcclxuICAgICAgcm9vdDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpZ25hbC1wYW5lbCcpLFxyXG4gICAgfSlcclxuXHJcbiAgICBmZXRjaFBhaXJsaXN0KCkudGhlbihkYXRhID0+IHRoaXMuc2V0UGFpcnMoZGF0YSkpXHJcbiAgfVxyXG5cclxuICBzZXRQYWlycyhwYWlycykge1xyXG4gICAgdGhpcy5wYWlyTGlzdCA9IHBhaXJzIHx8IFtdXHJcbiAgfVxyXG5cclxuICBzZXRGcmVxdWVuY2llcyhmcmVxdWVuY2llcykge1xyXG4gICAgdGhpcy5mcmVxdWVuY3lMaXN0ID0gZnJlcXVlbmNpZXMgfHwgW11cclxuICB9XHJcblxyXG4gIHJlbmRlckNvbnRyb2xzKCkge1xyXG4gICAgY29uc3Qgcm9vdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaWduYWwtY29udHJvbHMnKVxyXG4gICAgZXZlbnRSZWdpc3RyeS5jbGVhcihyb290KVxyXG4gICAgcm9vdC5pbm5lckhUTUwgPSAnJ1xyXG4gICAgY29uc3QgY29udHJvbHMgPSB0aGlzLnBhaXJMaXN0Lm1hcChlID0+IHtcclxuICAgICAgY29uc3QgeyBuYW1lLCBmcmVxdWVuY3ksIGRlbGF5ZWQgfSA9IGVcclxuICAgICAgLy8gQ09OVFJPTCBIVE1MXHJcbiAgICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0JVVFRPTicpXHJcbiAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCdwYWlyLWNvbnRyb2wnKVxyXG4gICAgICBidG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpXHJcblxyXG4gICAgICAvLyBOQU1FIEhUTUxcclxuICAgICAgY29uc3QgbmFtZVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdTUEFOJylcclxuICAgICAgbmFtZVNwYW4uaW5uZXJIVE1MID0gbmFtZVxyXG4gICAgICBidG4uYXBwZW5kQ2hpbGQobmFtZVNwYW4pXHJcblxyXG4gICAgICBpZiAoZGVsYXllZCkge1xyXG4gICAgICAgIC8vIERFTEFZRUQgSFRNTCBBRERJVElPTlxyXG4gICAgICAgIGNvbnN0IGRlbGF5ZWRTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnU1BBTicpXHJcbiAgICAgICAgZGVsYXllZFNwYW4uaW5uZXJIVE1MID0gJyAoZGVsYXllZCknXHJcbiAgICAgICAgYnRuLmFwcGVuZENoaWxkKGRlbGF5ZWRTcGFuKVxyXG5cclxuICAgICAgICAvLyBUT09MVElQIEhUTUxcclxuICAgICAgICBjb25zdCB0b29sdGlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRElWJylcclxuICAgICAgICB0b29sdGlwLmNsYXNzTGlzdC5hZGQoJ3Rvb2x0aXAnKVxyXG4gICAgICAgIHRvb2x0aXAuaW5uZXJIVE1MID0gJ1lvdSBhcmUgbm90IHN1YnNjcmliZWQgdG8gdGhpcyBzaWduYWwuJ1xyXG4gICAgICAgIGJ0bi5hcHBlbmRDaGlsZCh0b29sdGlwKVxyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBoYW5kbGVyID0gYXN5bmMgZXZlbnQgPT4ge1xyXG4gICAgICAgIHRoaXMubG9hZGluZ0RhdGEgPSB0cnVlXHJcbiAgICAgICAgdGhpcy5kYXRhRmV0Y2hFcnJvciA9IG51bGxcclxuICAgICAgICBQcm9taXNlLmFsbChcclxuICAgICAgICAgIGZldGNoQ2FuZGxlRGF0YShuYW1lLCBmcmVxdWVuY3ksIENBTkRMRV9EQVRBX0xJTUlUKSxcclxuICAgICAgICAgIGZldGNoVHJhZGVEYXRhKClcclxuICAgICAgICApXHJcbiAgICAgICAgICAudGhlbigoW2NhbmRsZURhdGEsIHRyYWRlRGF0YV0pID0+IHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVTaWduYWxEYXRhKGNhbmRsZURhdGEpXHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUHJvZml0RGF0YSh0cmFkZURhdGEpXHJcbiAgICAgICAgICAgIHRoaXMubG9hZGluZ0RhdGEgPSBmYWxzZVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZGluZ0RhdGEgPSBmYWxzZVxyXG4gICAgICAgICAgICB0aGlzLmRhdGFGZXRjaEVycm9yID0gZXJyb3JcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlKSB0aGlzLmFjdGl2ZS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG4gICAgICAgIHRoaXMuYWN0aXZlID0gZXZlbnQuY3VycmVudFRhcmdldFxyXG4gICAgICAgIHRoaXMuYWN0aXZlLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXHJcbiAgICAgIH1cclxuICAgICAgZXZlbnRSZWdpc3RyeS5hZGRFdmVudExpc3RlbmVyKGJ0biwgJ2NsaWNrJywgaGFuZGxlcilcclxuXHJcbiAgICAgIHJldHVybiBidG5cclxuICAgIH0pXHJcblxyXG4gICAgLy8gaWYgKCF0aGlzLmFjdGl2ZSkge1xyXG4gICAgLy8gICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcclxuICAgIC8vICAgY29udHJvbHNbMF0uY2xpY2soKVxyXG4gICAgLy8gfVxyXG4gICAgY29udHJvbHMuZm9yRWFjaChjb250cm9sID0+IHJvb3QuYXBwZW5kQ2hpbGQoY29udHJvbCkpXHJcbiAgfVxyXG5cclxuICB1cGRhdGVTaWduYWxEYXRhKGRhdGEpIHtcclxuICAgIGNvbnN0IHNpZ25hbHMgPSBleHRyYWN0U2lnbmFsRGF0YShkYXRhKVxyXG4gICAgY29uc3QgbGFzdFNpZ25hbCA9IHNpZ25hbHNbc2lnbmFscy5sZW5ndGggLSAxXVxyXG4gICAgdGhpcy5kYXRhQ2hhcnRlci5zZXREYXRhKGRhdGEpXHJcbiAgICB0aGlzLnNpZ25hbEhpZ2hsaWdodC5zZXREYXRhKGxhc3RTaWduYWwudGltZXN0YW1wLCBsYXN0U2lnbmFsLnNpZ25hbFR5cGUpXHJcbiAgfVxyXG5cclxuICB1cGRhdGVQcm9maXREYXRhKGRhdGEpIHtcclxuICAgIHRoaXMucHJvZml0Q2hhcnRlci5zZXRQcm9maXREYXRhKGRhdGEpXHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBhcHAgPSBuZXcgU2lnbmFsc0FwcChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2lnbmFscy1yb290JykpXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
