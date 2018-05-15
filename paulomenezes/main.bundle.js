webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"hero is-primary is-medium\">\n  <!-- Hero header: will stick at the top -->\n  <div class=\"hero-head\">\n    <header class=\"nav\">\n      <div class=\"container\">\n        <div class=\"nav-left\">\n          <a class=\"nav-item\">\n            Paulo Menezes\n          </a>\n        </div>\n        <span class=\"nav-toggle\">\n          <span></span>\n        <span></span>\n        <span></span>\n        </span>\n        <div class=\"nav-right nav-menu\">\n          <a class=\"nav-item is-active\">\n            Home\n          </a>\n          <a class=\"nav-item\">\n            Projects\n          </a>\n          <a class=\"nav-item\">\n            Contact\n          </a>\n        </div>\n      </div>\n    </header>\n  </div>\n</section>\n\n<section class=\"section\">\n  <div class=\"container\">\n    <div class=\"columns\">\n      <div class=\"column\">\n        <h1 class=\"title\">Education</h1>\n        <h2><strong>Federal Rural University of Pernambuco</strong></h2>\n        <p>BS in Computer Science</p>\n        <p>April 2014 - March 2018</p>\n        <br />\n        <h2><strong>NAVE Recife</strong></h2>\n        <p>Technical Course in Game Programming</p>\n        <p>February 2011 - December 2013</p>\n      </div>\n      <div class=\"column\">\n        <h1 class=\"title\">Career</h1>\n        <h2><strong>CESAR</strong></h2>\n        <p>Software Engineer</p>\n        <p>March 2014 - Pres</p>\n        <br />\n        <h2><strong>DataEvent</strong></h2>\n        <p>Web Developer</p>\n        <p>December 2013 - June 2014</p>\n      </div>\n      <div class=\"column\">\n        <h1 class=\"title\">Courseworks</h1>\n        <ul>\n          <li>Artificial Intelligence</li>\n          <li>Machine Learning</li>\n          <li>Multi-agents system</li>\n          <li>Evolucionary Computation</li>\n          <li>Neural Networks</li>\n          <li>Text Mining</li>\n          <li>Computer Vision</li>\n          <li>Computer Graphics</li>\n          <li>Image Processing</li>\n          <li>Virtual Reality</li>\n        </ul>\n      </div>\n    </div>\n    <div class=\"columns\">\n      <div class=\"column\">\n        <h1 class=\"title\">Projects</h1>\n      </div>\n    </div>\n    <div class=\"columns\">\n      <div class=\"column\">\n        <div class=\"tabs is-centered\">\n          <ul>\n            <li class=\"is-active\">\n              <a>\n                <span class=\"icon is-small\"><i class=\"fa fa-list\"></i></span>\n                <span>All</span>\n              </a>\n            </li>\n            <li>\n              <a>\n                <span class=\"icon is-small\"><i class=\"fa fa-desktop\"></i></span>\n                <span>Web</span>\n              </a>\n            </li>\n            <li>\n              <a>\n                <span class=\"icon is-small\"><i class=\"fa fa-mobile\"></i></span>\n                <span>Mobile</span>\n              </a>\n            </li>\n            <li>\n              <a>\n                <span class=\"icon is-small\"><i class=\"fa fa-gamepad\"></i></span>\n                <span>Games</span>\n              </a>\n            </li>\n            <li>\n              <a>\n                <span class=\"icon is-small\"><i class=\"fa fa-graduation-cap\"></i></span>\n                <span>University Projects</span>\n              </a>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n    <div class=\"columns is-multiline\">\n      <div class=\"column is-one-third\" *ngFor=\"let project of projects\">\n        <div class=\"card\">\n          <div class=\"card-image\">\n            <figure class=\"image is-4by3\">\n              <img src=\"http://bulma.io/images/placeholders/1280x960.png\" alt=\"Image\">\n            </figure>\n          </div>\n          <div class=\"card-content\">\n            <div class=\"media\">\n              <div class=\"media-left\">\n                <figure class=\"image is-48x48\">\n                  <img src=\"http://bulma.io/images/placeholders/96x96.png\" alt=\"Image\">\n                </figure>\n              </div>\n              <div class=\"media-content\">\n                <p class=\"title is-4\">{{ project.name }}</p>\n                <p class=\"subtitle is-6\">{{ project.tecnologies }}</p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!-- Hero footer: will stick at the bottom -->\n<footer class=\"footer\">\n  <div class=\"container\">\n    <div class=\"content has-text-centered\">\n      <p>\n        <strong>Paulo Menezes</strong> hosted by Github\n      </p>\n      <p>\n        <a class=\"icon\" href=\"https://github.com/paulomenezes/paulomenezes.github.io\" target=\"_blank\">\n          <i class=\"fa fa-github\"></i>\n        </a>\n      </p>\n    </div>\n  </div>\n</footer>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.projects = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        this.projects.push({
            name: 'UFRPE Conectada',
            tecnologies: ['Android']
        });
        this.projects.push({
            name: 'Edutive',
            tecnologies: ['Web', 'Android', 'iOS']
        });
        this.projects.push({
            name: 'Achow',
            tecnologies: ['Web', 'Android', 'iOS']
        });
        this.projects.push({
            name: 'Hoje Tem',
            tecnologies: ['Web', 'Android', 'iOS']
        });
        this.projects.push({
            name: 'ATEFFA',
            tecnologies: ['Web']
        });
        this.projects.push({
            name: 'Labore',
            tecnologies: ['Web']
        });
        this.projects.push({
            name: 'Minha Prova',
            tecnologies: ['Web', 'Android', 'iOS']
        });
        this.projects.push({
            name: 'E-ris',
            tecnologies: ['Web', 'Android', 'iOS']
        });
        this.projects.push({
            name: 'Safe',
            tecnologies: ['Android']
        });
        this.projects.push({
            name: 'Eatfit',
            tecnologies: ['Web', 'Android', 'iOS']
        });
        this.projects.push({
            name: 'Bom de Bola',
            tecnologies: ['Android']
        });
        this.projects.push({
            name: 'Tripcard',
            tecnologies: ['Android']
        });
        this.projects.push({
            name: 'Medhelp',
            tecnologies: ['Web', 'Android', 'iOS']
        });
        this.projects.push({
            name: 'Prazer & Cia',
            tecnologies: ['Web']
        });
        this.projects.push({
            name: 'Risland',
            tecnologies: ['Desktop']
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map