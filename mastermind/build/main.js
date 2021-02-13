webpackJsonp([0],{

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatsStore; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_store__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mapTo__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mapTo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mapTo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_defaultIfEmpty__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_defaultIfEmpty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_defaultIfEmpty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_pluck__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_pluck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_pluck__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var defaultTime = {
    min: 0,
    sec: 0,
    micSec: 0,
    counter: 1e20
};
var defaultStats = {
    numberOfGames: 0,
    bestTime: defaultTime
};
var STATS = {
    easy: __assign({}, defaultStats),
    hard: __assign({}, defaultStats),
    medium: __assign({}, defaultStats)
};
var StatsStore = (function (_super) {
    __extends(StatsStore, _super);
    function StatsStore(storage) {
        return _super.call(this, storage, STATS, '__stats') || this;
    }
    StatsStore = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], StatsStore);
    return StatsStore;
}(__WEBPACK_IMPORTED_MODULE_0__base_store__["a" /* BaseStore */]));

//# sourceMappingURL=stats.store.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SequenceGeneratorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store_settings_store__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_withLatestFrom__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_withLatestFrom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_withLatestFrom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash_sampleSize__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash_sampleSize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash_sampleSize__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SequenceGeneratorService = (function () {
    function SequenceGeneratorService(settingsStore) {
        var _this = this;
        this.settingsStore = settingsStore;
        this._generator = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["Subject"]();
        this._stop = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["Subject"]();
        this._sequence = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this._generator
            .withLatestFrom(this.settingsStore.colors$, this.settingsStore.duplicates$, function (_, colors, duplicates) {
            return !duplicates
                ? __WEBPACK_IMPORTED_MODULE_5_lodash_sampleSize___default()(colors, 4)
                : __WEBPACK_IMPORTED_MODULE_5_lodash_sampleSize___default()(colors, 2).concat(__WEBPACK_IMPORTED_MODULE_5_lodash_sampleSize___default()(colors, 2));
        })
            .takeUntil(this._stop)
            .subscribe(function (sequence) {
            console.log('in generator');
            console.log(sequence);
            _this._sequence.next(sequence);
        });
    }
    SequenceGeneratorService.prototype.generateSequence = function () {
        this._generator.next(true);
    };
    Object.defineProperty(SequenceGeneratorService.prototype, "sequence$", {
        get: function () {
            return this._sequence.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    SequenceGeneratorService.prototype.stop = function () {
        this._stop.next(true);
    };
    SequenceGeneratorService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__store_settings_store__["a" /* SettingsStore */]])
    ], SequenceGeneratorService);
    return SequenceGeneratorService;
}());

//# sourceMappingURL=sequence-generator.service.js.map

/***/ }),

/***/ 134:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 134;

/***/ }),

/***/ 178:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 178;

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseStore; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_mapTo__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_mapTo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_mapTo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_defaultIfEmpty__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_defaultIfEmpty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_defaultIfEmpty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_pluck__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_pluck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_pluck__);







var BaseStore = (function () {
    function BaseStore(storage, defaultData, key) {
        this.storage = storage;
        this.defaultData = defaultData;
        this.key = key;
        this._store = new __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__["BehaviorSubject"]({});
        this.store$ = this._store.asObservable();
        this.setup();
    }
    BaseStore.prototype.setup = function () {
        this.readStorage()
            .do(function (data) { return console.log(data); })
            .subscribe(this._store);
    };
    BaseStore.prototype.readStorage = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
            _this.storage.get(_this.key)
                .then(function (data) {
                data === null
                    ? observer.next(_this.defaultData)
                    : observer.next(data);
            });
        });
    };
    BaseStore.prototype.set = function (data) {
        var _this = this;
        data = Object.assign({}, this._store.value, data);
        this.storage.set(this.key, data)
            .then(function (value) {
            _this._store.next(value);
        });
    };
    return BaseStore;
}());

//# sourceMappingURL=base.store.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainScene; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_tap__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_tap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_tap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__menu_main__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__store_stats_store__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__store_settings_store__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_observable_combineLatest__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_observable_combineLatest___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_observable_combineLatest__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_game_timer_component__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_sequence_generator_service__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_alert_component__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_do__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_do__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var MainScene = (function () {
    function MainScene(events, statsStore, navCtrl, settingsStore, modalContrller, sequenceGenerator) {
        var _this = this;
        this.events = events;
        this.statsStore = statsStore;
        this.navCtrl = navCtrl;
        this.settingsStore = settingsStore;
        this.modalContrller = modalContrller;
        this.sequenceGenerator = sequenceGenerator;
        this.lastRow = 1;
        this.gameOver = false;
        this.playerWon = false;
        this.newRecord = false;
        this.reset = false;
        this.activeRow = 10;
        this.running = false;
        this.sceneDestroyed$ = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["Subject"]();
        this.rows = this.fillRows();
        this.events.subscribe('game:quit', function (_) {
            _this.resetGame();
            _this.timer.reset();
        });
    }
    MainScene.prototype.ngOnInit = function () {
        var _this = this;
        this.showMenu();
        Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_observable_combineLatest__["combineLatest"])(this.statsStore.store$, this.settingsStore.difficulty$)
            .do(function (_a) {
            var stats = _a[0], difficulty = _a[1];
            return _this.difficulty = difficulty;
        })
            .map(function (_a) {
            var stats = _a[0], difficulty = _a[1];
            return stats[difficulty];
        })
            .takeUntil(this.sceneDestroyed$)
            .subscribe(function (stats) { return _this.stats = stats; });
    };
    MainScene.prototype.ngOnDestroy = function () {
        this.sceneDestroyed$.next(true);
    };
    MainScene.prototype.setUp = function () {
        this.sequenceGenerator.generateSequence();
        this.currentColor = null;
        this.activeRow = 10;
    };
    MainScene.prototype.showMenu = function () {
        var _this = this;
        this.running && this.timer.pause();
        this.gameOver && (this.gameOver = false);
        __WEBPACK_IMPORTED_MODULE_2_lodash_tap___default()(this.modalContrller.create(__WEBPACK_IMPORTED_MODULE_3__menu_main__["a" /* MainMenu */], { running: this.running }, { enableBackdropDismiss: false }), function (modal) {
            return modal.onDidDismiss(function (command) { return _this[command](); });
        }).present();
    };
    MainScene.prototype.play = function () {
        this.resetGame();
        this.timer.reset();
        this.timer.play();
        this.running = true;
        this.stats.numberOfGames++;
        this.statsStore.set((_a = {},
            _a[this.difficulty] = this.stats,
            _a));
        var _a;
    };
    MainScene.prototype.resume = function () {
        this.timer.play();
    };
    MainScene.prototype.replay = function () {
        var _this = this;
        if (this.running) {
            this.timer.pause();
            this.alert.show()
                .then(function () { return _this.play(); }, function () { return _this.timer.play(); });
        }
        else
            this.play();
    };
    MainScene.prototype.resetGame = function () {
        this.setUp();
        // chains down to rows for reset event.
        this.reset = true;
        this.gameOver = false;
        this.playerWon = false;
        this.newRecord = false;
    };
    MainScene.prototype.update = function (event) {
        if (event === true) {
            this.gameWon();
        }
        else if (this.activeRow > this.lastRow) {
            this.activeRow--;
        }
        else {
            this.gameLost();
        }
    };
    MainScene.prototype.gameWon = function () {
        this.timer.pause();
        this.running = false;
        this.gameOver = true;
        this.playerWon = true;
        this.currentTime = this.timer.value();
        if (this.currentTime.counter < this.stats.bestTime.counter) {
            this.newRecord = true;
            this.stats.bestTime = this.currentTime;
            this.statsStore.set((_a = {},
                _a[this.difficulty] = this.stats,
                _a));
        }
        var _a;
    };
    MainScene.prototype.gameLost = function () {
        this.timer.pause();
        this.running = false;
        this.gameOver = true;
        this.playerWon = false;
        this.currentTime = this.timer.value();
    };
    MainScene.prototype.fillRows = function (rows) {
        if (rows === void 0) { rows = 10; }
        return Array(rows)
            .fill(0)
            .map(function (v, i) { return i + 1; });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_10__components_alert_component__["a" /* AlertComponent */]),
        __metadata("design:type", Object)
    ], MainScene.prototype, "alert", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_8__components_game_timer_component__["a" /* GameTimerComponent */]),
        __metadata("design:type", Object)
    ], MainScene.prototype, "timer", void 0);
    MainScene = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'main-scene',template:/*ion-inline-start:"/home/usman/Desktop/CodeBreakers/src/app/scenes/main-scene.html"*/'<ion-content padding scrol="false" class="main-bg">\n    <alert></alert>\n    <div class="control-bar">\n        <ul class="controls">\n            <li>\n                <a class="game-control" (click)="showMenu()">Menu</a>\n            </li>\n            <li class="timer">\n                <ion-icon name="clock"></ion-icon> <span class="badge"><game-timer></game-timer></span>\n            </li>\n        </ul>\n    </div>\n    <ion-grid fixed>\n        <overlay-message\n            [gameOver]="gameOver"\n            [playerWon]="playerWon"\n            [newRecord]="newRecord"\n            [difficulty]="difficulty"\n            [time]="currentTime"\n        ></overlay-message>\n        <ion-row>\n            <ion-col text-center col-4 offset-1>\n                <ion-row class="hidden-sequence" >\n                    <ion-col *ngFor="let color of sequenceGenerator.sequence$ | async">\n                        <div class="slot" [ngClass]="gameOver === true ? color : \'default\'">\n                            {{!gameOver ? \'?\': \'\'}}\n                        </div>\n                    </ion-col>\n                </ion-row>\n            </ion-col>\n            <ion-col offset-2 no-padding>\n                <ion-row [style.margin-top.px]="15">\n                    <ion-col class="button-reset">\n                        <div class="slot" (click)="replay()"><ion-icon name="refresh"></ion-icon></div>\n                    </ion-col>\n                </ion-row>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col col-6 class="game-wraper">\n                <game-row [currentColor]="currentColor" [activeRow]="activeRow" (rowMatched)="update($event)" *ngFor="let row of rows" [currentRow]="row" [(resetRow)]="reset"></game-row>\n            </ion-col>\n            <ion-col col-1 offset-1 align-self-end no-padding class="color-chooser">\n                <color-chooser [(selectedColor)]="currentColor"></color-chooser>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n    <!-- <div> -->\n    <!--     <p>{{currentColor | json}}</p> -->\n    <!--     <p> -->\n    <!--         {{sequenceGenerator.sequence$ | async | json}} -->\n    <!--     </p> -->\n    <!-- </div> -->\n</ion-content>\n\n\n'/*ion-inline-end:"/home/usman/Desktop/CodeBreakers/src/app/scenes/main-scene.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__store_stats_store__["a" /* StatsStore */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__store_stats_store__["a" /* StatsStore */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__store_settings_store__["a" /* SettingsStore */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__store_settings_store__["a" /* SettingsStore */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_9__services_sequence_generator_service__["a" /* SequenceGeneratorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__services_sequence_generator_service__["a" /* SequenceGeneratorService */]) === "function" && _f || Object])
    ], MainScene);
    return MainScene;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=main-scene.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainMenu; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store_stats_store__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__store_settings_store__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_observable_combineLatest__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_observable_combineLatest___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_observable_combineLatest__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MainMenu = (function () {
    function MainMenu(events, platform, navParams, statsStore, viewCtrl, settingsStore, modalContrller) {
        this.events = events;
        this.platform = platform;
        this.navParams = navParams;
        this.statsStore = statsStore;
        this.viewCtrl = viewCtrl;
        this.settingsStore = settingsStore;
        this.modalContrller = modalContrller;
        this.running = false;
        this.menuDestroyed$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.running = navParams.get('running');
    }
    MainMenu.prototype.ngOnInit = function () {
        var _this = this;
        Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_observable_combineLatest__["combineLatest"])(this.statsStore.store$, this.settingsStore.store$)
            .takeUntil(this.menuDestroyed$)
            .subscribe(function (_a) {
            var stats = _a[0], settings = _a[1];
            _this.stats = stats[settings.difficulty];
            _this.settings = settings;
        });
    };
    MainMenu.prototype.play = function () {
        var _this = this;
        this.viewCtrl
            .dismiss('play')
            .then(function () { return _this.menuDestroyed$.next(true); });
    };
    MainMenu.prototype.resume = function () {
        var _this = this;
        this.viewCtrl
            .dismiss('resume')
            .then(function () { return _this.menuDestroyed$.next(true); });
    };
    MainMenu.prototype.quitGame = function () {
        this.running = false;
        this.events.publish('game:quit');
    };
    MainMenu.prototype.exit = function () {
        this.platform.exitApp();
    };
    MainMenu.prototype.settingsMenu = function () {
        this.modalContrller.create(__WEBPACK_IMPORTED_MODULE_3__settings__["a" /* SettingsMenu */], { running: this.running }).present();
    };
    MainMenu.prototype.formatTime = function (time) {
        return (time.min < 10 ? '0' : '') + time.min + ':'
            + (time.sec < 10 ? '0' : '') + time.sec + ':0'
            + time.micSec;
    };
    MainMenu = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/usman/Desktop/CodeBreakers/src/app/scenes/menu/main.html"*/'<ion-content padding scroll="false" class="menu-content">\n    <ion-grid fixed [style.margin-top.px]="50">\n        <ion-row>\n            <ion-col col-4 offset-2>\n                <ion-row padding>\n                    <ion-col *ngIf="!running">\n                        <a class="game-control" (click)="play()">Play</a>\n                    </ion-col>\n                    <ion-col *ngIf="running">\n                        <a class="game-control" (click)="resume()">Resume</a>\n                    </ion-col>\n                </ion-row>\n                <ion-row *ngIf="running" padding>\n                    <ion-col>\n                        <a class="game-control" (click)="quitGame()">Quit Game</a>\n                    </ion-col>\n                </ion-row>\n                 <ion-row padding>\n                    <ion-col >\n                        <a class="game-control" (click)="settingsMenu()">Settings</a>\n                    </ion-col>\n                </ion-row>\n               <ion-row padding>\n                    <ion-col>\n                        <a class="game-control" (click)="exit()">Exit</a>\n                    </ion-col>\n                </ion-row>\n            </ion-col>\n        </ion-row>\n        <ion-row class="stats">\n            <ion-col>\n                <ion-row>\n                    <ion-col offset-1>\n                        <span>Best score: {{stats && formatTime(stats.bestTime)}}</span>\n                    </ion-col>\n                    <ion-col>\n                        <span>Difficulty: {{settings?.difficulty}}</span>\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col offset-1>\n                        <span>Games Played: {{stats?.numberOfGames}}</span>\n                    </ion-col>\n                    <ion-col>\n                        <span>Theme: {{settings?.theme}}</span>\n                    </ion-col>\n                </ion-row>\n            </ion-col>\n        </ion-row>\n     </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/home/usman/Desktop/CodeBreakers/src/app/scenes/menu/main.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["b" /* Events */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__store_stats_store__["a" /* StatsStore */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["j" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_5__store_settings_store__["a" /* SettingsStore */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["f" /* ModalController */]])
    ], MainMenu);
    return MainMenu;
}());

//# sourceMappingURL=main.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsMenu; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store_settings_store__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_debounceTime__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_distinctUntilChanged__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SettingsMenu = (function () {
    function SettingsMenu(app, platform, navParams, viewCtrl, settingsStore, formBuilder) {
        this.app = app;
        this.platform = platform;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.settingsStore = settingsStore;
        this.formBuilder = formBuilder;
        this.running = false;
        this.dissmissEvent$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.running = navParams.get('running');
    }
    SettingsMenu.prototype.ngOnInit = function () {
        var _this = this;
        this.settingsForm = this.createForm();
        this.settingsStore
            .store$
            .takeUntil(this.dissmissEvent$)
            .subscribe(function (settings) { return _this.settingsForm.patchValue(settings, { emitEvent: false }); });
        this.settingsForm
            .valueChanges
            .debounceTime(500)
            .distinctUntilChanged(this.comparator())
            .takeUntil(this.dissmissEvent$)
            .subscribe(function (value) { return _this.settingsStore.set(value); });
    };
    SettingsMenu.prototype.createForm = function () {
        return this.formBuilder
            .group({
            difficulty: { value: 'hard', disabled: this.running },
            theme: 'default',
            duplicates: { value: true, disabled: this.running },
        });
    };
    SettingsMenu.prototype.dismiss = function () {
        var _this = this;
        this.viewCtrl
            .dismiss()
            .then(function () { return _this.dissmissEvent$.next(true); });
    };
    SettingsMenu.prototype.comparator = function () {
        return function (prev, next) {
            return prev.theme === next.theme &&
                prev.difficulty === next.difficulty &&
                prev.duplicates === next.duplicates;
        };
    };
    SettingsMenu.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.removeBackButtonAction = this.platform.registerBackButtonAction(function () {
            _this.app.goBack();
        }, 100);
    };
    SettingsMenu.prototype.ionViewWillLeave = function () {
        if (this.removeBackButtonAction) {
            this.removeBackButtonAction();
        }
    };
    SettingsMenu = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/usman/Desktop/CodeBreakers/src/app/scenes/menu/settings.html"*/'<ion-content class="menu-content">\n    <form [formGroup]="settingsForm">\n        <ion-item-group radio-group formControlName="difficulty">\n            <ion-item-divider>Difficulty</ion-item-divider>\n            <ion-item>\n                <ion-label>Hard</ion-label>\n                <ion-radio value="hard"></ion-radio>\n            </ion-item>\n            <ion-item>\n                <ion-label>Medium</ion-label>\n                <ion-radio value="medium"></ion-radio>\n            </ion-item>\n            <ion-item>\n                <ion-label>Easy</ion-label>\n                <ion-radio value="easy"></ion-radio>\n            </ion-item>\n        </ion-item-group>\n        <ion-item-group>\n            <ion-item-divider color="light">Duplicates</ion-item-divider>\n            <ion-item>\n                <ion-label>Enable/Disable</ion-label>\n                <ion-toggle formControlName="duplicates"></ion-toggle>\n            </ion-item>\n        </ion-item-group>\n        <ion-item-group radio-group formControlName="theme">\n            <ion-item-divider color="light">Theme</ion-item-divider>\n            <ion-item>\n                <ion-label>Default</ion-label>\n                <ion-radio value="default"></ion-radio>\n            </ion-item>\n            <ion-item>\n                <ion-label>Alternate</ion-label>\n                <ion-radio value="alternate"></ion-radio>\n            </ion-item>\n        </ion-item-group>\n    </form>\n</ion-content>\n'/*ion-inline-end:"/home/usman/Desktop/CodeBreakers/src/app/scenes/menu/settings.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* App */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_4__store_settings_store__["a" /* SettingsStore */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]])
    ], SettingsMenu);
    return SettingsMenu;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameTimerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_never__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_never___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_never__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_interval__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_interval___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_interval__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GameTimerComponent = (function () {
    function GameTimerComponent() {
        this.timerCtrl = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.timer = { min: 0, sec: 0, micSec: 0, counter: 0 };
        this.tick$ = this.getTickStream();
        this.timer$ = this.createTimer();
    }
    GameTimerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.timerSubscription = this.timer$.subscribe(function () { return _this.setTimerValues(); });
    };
    GameTimerComponent.prototype.getTickStream = function () {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].interval(100);
    };
    GameTimerComponent.prototype.createTimer = function () {
        var _this = this;
        return this.timerCtrl.asObservable()
            .switchMap(function (state) { return !state ? __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].never() : _this.tick$; });
    };
    GameTimerComponent.prototype.play = function () {
        this.timerCtrl.next(true);
    };
    GameTimerComponent.prototype.pause = function () {
        this.timerCtrl.next(false);
    };
    GameTimerComponent.prototype.reset = function () {
        this.timer = {
            min: 0,
            sec: 0,
            micSec: 0,
            counter: 0
        };
    };
    GameTimerComponent.prototype.setTimerValues = function () {
        var sec, micros;
        micros = this.timer.counter;
        sec = micros / 10;
        this.timer.micSec = micros % 10;
        this.timer.min = Math.floor(sec / 60);
        this.timer.sec = Math.floor(sec % 60);
        ++this.timer.counter;
    };
    GameTimerComponent.prototype.getFormatedTimer = function () {
        return (this.timer.min < 10 ? '0' : '') + this.timer.min + ':'
            + (this.timer.sec < 10 ? '0' : '') + this.timer.sec + ':0'
            + this.timer.micSec;
    };
    GameTimerComponent.prototype.value = function () {
        return this.timer;
    };
    GameTimerComponent.prototype.ngOnDestroy = function () {
        this.timerSubscription.unsubscribe();
    };
    GameTimerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'game-timer',
            template: "{{getFormatedTimer()}}"
        }),
        __metadata("design:paramtypes", [])
    ], GameTimerComponent);
    return GameTimerComponent;
}());

//# sourceMappingURL=game-timer.component.js.map

/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertComponent = (function () {
    function AlertComponent() {
        this.message = 'Are you sure?';
        this.showAlert = false;
    }
    AlertComponent.prototype.show = function () {
        var _this = this;
        this.showAlert = true;
        return new Promise(function (res, rej) {
            _this.resolve = res;
            _this.reject = rej;
        });
    };
    AlertComponent.prototype.dismiss = function (confirmation) {
        this.showAlert = false;
        if (confirmation) {
            this.resolve(true);
        }
        else {
            this.reject(false);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], AlertComponent.prototype, "message", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], AlertComponent.prototype, "showAlert", void 0);
    AlertComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'alert',template:/*ion-inline-start:"/home/usman/Desktop/CodeBreakers/src/app/components/alert.html"*/'<div *ngIf="showAlert" [@slideRight] class="alert">\n    <div class="dialog">\n        <ion-row>\n            <ion-col>\n                <p>{{message}}</p>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col (click)="dismiss(false)">\n                <ion-icon name="close"></ion-icon>\n            </ion-col>\n            <ion-col (click)="dismiss(true)">\n                <ion-icon name="checkmark"></ion-icon>\n            </ion-col>\n        </ion-row>\n    </div>\n</div>\n\n'/*ion-inline-end:"/home/usman/Desktop/CodeBreakers/src/app/components/alert.html"*/,
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* trigger */])('slideRight', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])(':enter', [Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ transform: 'translateX(-100%)' }), Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('.5s ease-out')]),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])(':leave', [Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('.2s ease-in', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ transform: 'translateX(100%)' }))])
                ])
            ]
        }),
        __metadata("design:paramtypes", [])
    ], AlertComponent);
    return AlertComponent;
}());

//# sourceMappingURL=alert.component.js.map

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SequenceMatcherService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_includes__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_includes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_includes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sequence_generator_service__ = __webpack_require__(121);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SequenceMatcherService = (function () {
    function SequenceMatcherService(sequenceGenerator) {
        this.sequenceGenerator = sequenceGenerator;
        this.setUp();
    }
    SequenceMatcherService.prototype.matchSequence = function (sequence) {
        var lookup = this.currentSequence.slice();
        var partialMatch = sequence.map(function (value, index) {
            if (lookup[index] === value) {
                lookup[index] = 'visited';
                return 'exists';
            }
            return value;
        });
        var fullMatch = partialMatch.map(function (value, index) {
            if (value === 'exists')
                return value;
            var lookupIndex = lookup.indexOf(value);
            if (__WEBPACK_IMPORTED_MODULE_0_lodash_includes___default()(lookup, value)) {
                lookup[lookupIndex] = 'visited';
                return 'includes';
            }
            return 'notexist';
        });
        fullMatch.sort();
        return fullMatch;
    };
    SequenceMatcherService.prototype.setUp = function () {
        var _this = this;
        this.sequenceGenerator
            .sequence$
            .subscribe(function (value) {
            _this.currentSequence = value;
        });
    };
    SequenceMatcherService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__sequence_generator_service__["a" /* SequenceGeneratorService */]])
    ], SequenceMatcherService);
    return SequenceMatcherService;
}());

//# sourceMappingURL=sequence-matcher.service.js.map

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColorSlotDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ColorSlotDirective = (function () {
    function ColorSlotDirective(renderer, el) {
        this.renderer = renderer;
        this.el = el;
        this.slotChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.slot = true;
        console.log('Hello SlotDirective Directive');
    }
    ColorSlotDirective.prototype.changeSlotColor = function () {
        if (this.currentColor === this.oldColor || this.inactive === true) {
            return;
        }
        this.addNewClass();
        this.removeOldClass();
        this._color = this.currentColor;
        this.slotChanged.emit(true);
        this.oldColor = this.currentColor;
    };
    ColorSlotDirective.prototype.removeOldClass = function () {
        if (this.oldColor) {
            this.renderer.setElementClass(this.el.nativeElement, this.oldColor, false);
        }
    };
    ColorSlotDirective.prototype.addNewClass = function () {
        this.renderer.setElementClass(this.el.nativeElement, this.currentColor, true);
    };
    ColorSlotDirective.prototype.resetDirective = function () {
        this._color = '';
        this.removeOldClass();
        this.oldColor = '';
    };
    Object.defineProperty(ColorSlotDirective.prototype, "color", {
        get: function () {
            return this._color || '';
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], ColorSlotDirective.prototype, "inactive", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], ColorSlotDirective.prototype, "currentColor", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", Object)
    ], ColorSlotDirective.prototype, "slotChanged", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* HostBinding */])('class.slot'),
        __metadata("design:type", Object)
    ], ColorSlotDirective.prototype, "slot", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ColorSlotDirective.prototype, "changeSlotColor", null);
    ColorSlotDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[colorSlot]' // Attribute selector
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Renderer */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], ColorSlotDirective);
    return ColorSlotDirective;
}());

//# sourceMappingURL=color-slot.directive.js.map

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(258);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_android_full_screen__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__scenes_main_scene__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_color_chooser_component__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_game_row_component__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_game_timer_component__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_directives_color_slot_directive__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_overlay_message_component__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__store_stats_store__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__store_settings_store__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_sequence_generator_service__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_sequence_matcher_service__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__scenes_menu_main__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__scenes_menu_settings__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_alert_component__ = __webpack_require__(239);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__scenes_main_scene__["a" /* MainScene */],
                __WEBPACK_IMPORTED_MODULE_13__components_game_timer_component__["a" /* GameTimerComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_color_chooser_component__["a" /* ColorChooserComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_game_row_component__["a" /* GameRowComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_directives_color_slot_directive__["a" /* ColorSlotDirective */],
                __WEBPACK_IMPORTED_MODULE_15__components_overlay_message_component__["a" /* OverlayMessageComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_alert_component__["a" /* AlertComponent */],
                __WEBPACK_IMPORTED_MODULE_20__scenes_menu_main__["a" /* MainMenu */],
                __WEBPACK_IMPORTED_MODULE_21__scenes_menu_settings__["a" /* SettingsMenu */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* ReactiveFormsModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__scenes_main_scene__["a" /* MainScene */],
                __WEBPACK_IMPORTED_MODULE_20__scenes_menu_main__["a" /* MainMenu */],
                __WEBPACK_IMPORTED_MODULE_21__scenes_menu_settings__["a" /* SettingsMenu */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_16__store_stats_store__["a" /* StatsStore */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_android_full_screen__["a" /* AndroidFullScreen */],
                __WEBPACK_IMPORTED_MODULE_17__store_settings_store__["a" /* SettingsStore */],
                __WEBPACK_IMPORTED_MODULE_19__services_sequence_matcher_service__["a" /* SequenceMatcherService */],
                __WEBPACK_IMPORTED_MODULE_18__services_sequence_generator_service__["a" /* SequenceGeneratorService */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["d" /* IonicErrorHandler */] },
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsStore; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_store__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mapTo__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mapTo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mapTo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_defaultIfEmpty__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_defaultIfEmpty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_defaultIfEmpty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_pluck__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_pluck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_pluck__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CONFIG = {
    colors: [
        'orange',
        'yellow',
        'green',
        'cyan',
        'blue',
        'magenta',
        'pink',
        'red',
        'grey',
        'black'
    ],
    difficulty: 'hard',
    duplicates: false,
    theme: 'default'
};
var SettingsStore = (function (_super) {
    __extends(SettingsStore, _super);
    function SettingsStore(storage) {
        return _super.call(this, storage, CONFIG, '__settings') || this;
    }
    Object.defineProperty(SettingsStore.prototype, "colors$", {
        get: function () {
            return this.store$
                .pluck('colors')
                .withLatestFrom(this.difficulty$, function (colors, difficulty) {
                switch (difficulty) {
                    case 'easy':
                        return colors.slice(0, 6);
                    case 'medium':
                        return colors.slice(0, 8);
                    default:
                        return colors;
                }
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SettingsStore.prototype, "difficulty$", {
        get: function () {
            return this.store$
                .pluck('difficulty');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SettingsStore.prototype, "theme$", {
        get: function () {
            return this.store$
                .pluck('theme');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SettingsStore.prototype, "duplicates$", {
        get: function () {
            return this.store$
                .pluck('duplicates');
        },
        enumerable: true,
        configurable: true
    });
    SettingsStore = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], SettingsStore);
    return SettingsStore;
}(__WEBPACK_IMPORTED_MODULE_0__base_store__["a" /* BaseStore */]));

//# sourceMappingURL=settings.store.js.map

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store_settings_store__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_android_full_screen__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__scenes_main_scene__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_startWith__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_startWith__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = (function () {
    function MyApp(app, platform, settingsStore, splashScreen, statusBar, fullScreen) {
        var _this = this;
        this.app = app;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__scenes_main_scene__["a" /* MainScene */];
        this.currentClass = 'default';
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            settingsStore.theme$.startWith('default').subscribe(function (theme) {
                if (theme) {
                    _this.app.setElementClass(_this.currentClass, false);
                    _this.app.setElementClass(theme, true);
                    _this.currentClass = theme;
                }
            });
            fullScreen.isImmersiveModeSupported()
                .then(function () { return fullScreen.immersiveMode(); })
                .catch(function (error) { return console.log(error); });
            platform.registerBackButtonAction(function () { }, 100);
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/usman/Desktop/CodeBreakers/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/usman/Desktop/CodeBreakers/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3__store_settings_store__["a" /* SettingsStore */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_android_full_screen__["a" /* AndroidFullScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColorChooserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store_settings_store__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ColorChooserComponent = (function () {
    function ColorChooserComponent(settingsStore) {
        this.settingsStore = settingsStore;
        this.selectedColorChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.colorClasses$ = this.settingsStore.colors$;
    }
    ColorChooserComponent.prototype.updateColor = function (color) {
        this.selectedColor = color;
        this.selectedColorChange.emit(color);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], ColorChooserComponent.prototype, "selectedColor", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", Object)
    ], ColorChooserComponent.prototype, "selectedColorChange", void 0);
    ColorChooserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'color-chooser',template:/*ion-inline-start:"/home/usman/Desktop/CodeBreakers/src/app/components/color-chooser.html"*/'<ion-row class="row-height" *ngFor="let colorClass of colorClasses$ | async">\n    <ion-col>\n        <div [@chooserState]="selectedColor === colorClass" class="slot {{colorClass}}" (click)="updateColor(colorClass)"></div>\n    </ion-col>\n</ion-row>\n\n'/*ion-inline-end:"/home/usman/Desktop/CodeBreakers/src/app/components/color-chooser.html"*/,
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* trigger */])('chooserState', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('false', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({
                        transform: 'scale(1)'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('true', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({
                        transform: 'scale(1.2)'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('0 => 1', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('.2s ease-out')),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('1 => 0', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('.05s ease-in'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__store_settings_store__["a" /* SettingsStore */]])
    ], ColorChooserComponent);
    return ColorChooserComponent;
}());

//# sourceMappingURL=color-chooser.component.js.map

/***/ }),

/***/ 388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameRowComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_sequence_matcher_service__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__directives_color_slot_directive__ = __webpack_require__(241);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GameRowComponent = (function () {
    function GameRowComponent(sequenceMatcher) {
        this.sequenceMatcher = sequenceMatcher;
        this.rowMatched = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.resetRowChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.match = ['nomatch', 'nomatch', 'nomatch', 'nomatch'];
        this.activateResultColumn = false;
        //
    }
    GameRowComponent.prototype.ngOnInit = function () {
        //
    };
    GameRowComponent.prototype.ngOnChanges = function () {
        var _this = this;
        if (this.resetRow) {
            this.resetRowData();
            if (this.currentRow === this.activeRow) {
                //wait for this tick to end
                setTimeout(function (_) { return _this.resetRowChange.emit(false); });
            }
        }
    };
    GameRowComponent.prototype.updateRow = function () {
        this._colorSequence = this.children
            .filter(function (item) { return item.color.length > 0; });
        this.activateResultColumn = this._colorSequence.length === 4;
    };
    GameRowComponent.prototype.checkUserColorSequence = function () {
        if (this.currentRow !== this.activeRow ||
            this.activateResultColumn === false)
            return;
        this.match = this.sequenceMatcher.matchSequence(this.colorSequence);
        console.log(this.match);
        this.rowMatched.emit(this.reduceMatch(this.match));
    };
    GameRowComponent.prototype.reduceMatch = function (matchedSeq) {
        return matchedSeq.reduce(function (acc, value) { return acc && (value === 'exists'); }, true);
    };
    GameRowComponent.prototype.resetRowData = function () {
        this.match = this.match.map(function (v) { return 'nomatch'; });
        this.children.forEach(function (c) { return c.resetDirective(); });
        this.updateRow();
    };
    Object.defineProperty(GameRowComponent.prototype, "colorSequence", {
        get: function () {
            return this._colorSequence.map(function (item) { return item.color; });
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], GameRowComponent.prototype, "currentColor", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], GameRowComponent.prototype, "currentRow", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], GameRowComponent.prototype, "activeRow", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], GameRowComponent.prototype, "resetRow", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], GameRowComponent.prototype, "rowMatched", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], GameRowComponent.prototype, "resetRowChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChildren */])(__WEBPACK_IMPORTED_MODULE_2__directives_color_slot_directive__["a" /* ColorSlotDirective */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* QueryList */])
    ], GameRowComponent.prototype, "children", void 0);
    GameRowComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'game-row',template:/*ion-inline-start:"/home/usman/Desktop/CodeBreakers/src/app/components/game-row.html"*/'<ion-row class="row-height" [ngClass]="{\'row-inactive\': activeRow > currentRow, \'row-active\': activeRow <= currentRow}">\n    <ion-col class="result-col" [ngClass]="{\'inactive\' : ! activateResultColumn, \'active\' : activateResultColumn}">\n        <div class="slot" (click)="checkUserColorSequence()">\n            <ion-row>\n                <ion-col class="match" [ngClass]="{\'black\': match[0] === \'exists\', \'grey\': match[0] === \'includes\'}"></ion-col>\n                <ion-col class="match" [ngClass]="{\'black\': match[1] === \'exists\', \'grey\': match[1] === \'includes\'}"></ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col class="match" [ngClass]="{\'black\': match[2] === \'exists\', \'grey\': match[2] === \'includes\'}"></ion-col>\n                <ion-col class="match" [ngClass]="{\'black\': match[3] === \'exists\', \'grey\': match[3] === \'includes\'}"></ion-col>\n            </ion-row>\n        </div>\n    </ion-col>\n    <ion-col *ngFor="let col of [1, 2, 3, 4]; let localFirst = first" [class.offset-1]="localFirst === true">\n        <div *ngIf="currentRow < activeRow" class="slot"></div>\n        <div *ngIf="currentRow >= activeRow" colorSlot [inactive]="currentRow !== activeRow" [currentColor]="currentColor" (slotChanged)="updateRow()"></div>\n    </ion-col>\n</ion-row>\n'/*ion-inline-end:"/home/usman/Desktop/CodeBreakers/src/app/components/game-row.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_sequence_matcher_service__["a" /* SequenceMatcherService */]])
    ], GameRowComponent);
    return GameRowComponent;
}());

//# sourceMappingURL=game-row.component.js.map

/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OverlayMessageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OverlayMessageComponent = (function () {
    function OverlayMessageComponent() {
        this.gameOver = false;
        this.newRecord = false;
        this.playerWon = false;
    }
    OverlayMessageComponent.prototype.ngOnInit = function () { };
    OverlayMessageComponent.prototype.formattedTime = function (time) {
        return (this.time.min < 10 ? '0' : '') + this.time.min + ':'
            + (this.time.sec < 10 ? '0' : '') + this.time.sec + ':0'
            + this.time.micSec;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], OverlayMessageComponent.prototype, "gameOver", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], OverlayMessageComponent.prototype, "newRecord", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], OverlayMessageComponent.prototype, "playerWon", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], OverlayMessageComponent.prototype, "difficulty", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], OverlayMessageComponent.prototype, "time", void 0);
    OverlayMessageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'overlay-message',template:/*ion-inline-start:"/home/usman/Desktop/CodeBreakers/src/app/components/overlay-message.html"*/'<div *ngIf="gameOver" [@slideUpDown] class="overlay-message">\n    <div  class="result">\n        <h1 *ngIf="playerWon" class="won" [style.line-height.em]="2">Congratulations!</h1>\n        <h1 *ngIf="!playerWon" class="won" [style.line-height.em]="2">Game Over!</h1>\n        <h2 *ngIf="newRecord" class="new-record"[style.line-height.em]="2">New Record</h2>\n        <h3 class="time" [style.line-height.em]="2">Time: {{formattedTime()}}</h3>\n        <h4 class="difficulty" [style.line-height.em]="2">Difficulty: {{difficulty}}</h4>\n    </div>\n</div>\n\n'/*ion-inline-end:"/home/usman/Desktop/CodeBreakers/src/app/components/overlay-message.html"*/,
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* trigger */])('slideUpDown', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])(':enter', [Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ transform: 'translateY(100%)' }), Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('.5s ease-out')]),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])(':leave', [Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('.2s ease-in', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ transform: 'translateY(100%)' }))])
                ])
            ]
        }),
        __metadata("design:paramtypes", [])
    ], OverlayMessageComponent);
    return OverlayMessageComponent;
}());

//# sourceMappingURL=overlay-message.component.js.map

/***/ })

},[242]);
//# sourceMappingURL=main.js.map