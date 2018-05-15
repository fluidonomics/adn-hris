webpackJsonp(["hr.module"],{

/***/ "./node_modules/ng2-material-dropdown/ng2-material-dropdown.es5.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ng2Dropdown; });
/* unused harmony export Ng2DropdownMenu */
/* unused harmony export Ng2MenuItem */
/* unused harmony export Ng2DropdownButton */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Ng2DropdownModule; });
/* unused harmony export DropdownStateService */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");



var Ng2DropdownButton = (function () {
    /**
     * @param {?} element
     */
    function Ng2DropdownButton(element) {
        this.element = element;
        this.onMenuToggled = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.showCaret = true;
    }
    /**
     * \@name toggleMenu
     * @desc emits event to toggle menu
     * @return {?}
     */
    Ng2DropdownButton.prototype.toggleMenu = function () {
        this.onMenuToggled.emit(true);
    };
    /**
     * \@name getPosition
     * @desc returns position of the button
     * @return {?}
     */
    Ng2DropdownButton.prototype.getPosition = function () {
        return this.element.nativeElement.getBoundingClientRect();
    };
    return Ng2DropdownButton;
}());
Ng2DropdownButton.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                selector: 'ng2-dropdown-button',
                styles: ["\n      .ng2-dropdown-button {\n        font-family: \"Roboto\", \"Helvetica Neue\", Helvetica, Arial;\n        background: #fff;\n        padding: 0.45rem 0.25rem;\n        font-size: 14px;\n        letter-spacing: 0.08rem;\n        color: #444;\n        outline: 0;\n        cursor: pointer;\n        font-weight: 400;\n        border: none;\n        border-bottom: 1px solid #efefef;\n        text-align: left;\n        min-width: 100px;\n        width: 100%;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        max-width: 150px; }\n\n      .ng2-dropdown-button:hover {\n        color: #222; }\n\n      .ng2-dropdown-button:active,\n      .ng2-dropdown-button:focus {\n        color: #222;\n        border-bottom: 2px solid #2196F3; }\n\n      .ng2-dropdown-button__label {\n        -webkit-box-flex: 1;\n            -ms-flex: 1 1 95%;\n                flex: 1 1 95%; }\n\n      .ng2-dropdown-button__caret {\n        width: 12px;\n        height: 12px;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-flex: 1;\n            -ms-flex: 1 1 6%;\n                flex: 1 1 6%; }\n\n      :host-context(.ng2-dropdown-button--icon) .ng2-dropdown-button {\n        border: none;\n        min-width: 40px;\n        width: 40px;\n        border-radius: 100%;\n        -webkit-transition: all 0.2s;\n        transition: all 0.2s;\n        text-align: center;\n        height: 40px;\n        padding: 0.5em; }\n\n      :host-context(.ng2-dropdown-button--icon) .ng2-dropdown-button:active {\n        background: rgba(0, 0, 0, 0.2); }\n    "],
                template: "\n      <button class='ng2-dropdown-button' type=\"button\" (click)=\"toggleMenu()\" tabindex=\"0s\">\n          <span class=\"ng2-dropdown-button__label\">\n              <ng-content></ng-content>\n          </span>\n\n          <span class=\"ng2-dropdown-button__caret\" *ngIf=\"showCaret\">\n              <svg enable-background=\"new 0 0 32 32\" height=\"16px\" id=\"\u0421\u043B\u043E\u0439_1\" version=\"1.1\" viewBox=\"0 0 32 32\" width=\"16px\" xml:space=\"preserve\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"><path d=\"M24.285,11.284L16,19.571l-8.285-8.288c-0.395-0.395-1.034-0.395-1.429,0  c-0.394,0.395-0.394,1.035,0,1.43l8.999,9.002l0,0l0,0c0.394,0.395,1.034,0.395,1.428,0l8.999-9.002  c0.394-0.395,0.394-1.036,0-1.431C25.319,10.889,24.679,10.889,24.285,11.284z\" fill=\"#121313\" id=\"Expand_More\"/><g/><g/><g/><g/><g/><g/></svg>\n          </span>\n      </button>\n    "
            },] },
];
/**
 * @nocollapse
 */
Ng2DropdownButton.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], },
]; };
Ng2DropdownButton.propDecorators = {
    'onMenuToggled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */] },],
    'showCaret': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
};
var KEYS = {
    BACKSPACE: 9,
    PREV: 38,
    NEXT: 40,
    ENTER: 13,
    ESCAPE: 27
};
/**
 * \@name onSwitchNext
 * @param index
 * @param items
 * @param state
 */
var onSwitchNext = function (index, items, state$$1) {
    if (index < items.length - 1) {
        state$$1.select(items[index + 1], true);
    }
};
/**
 * \@name onSwitchPrev
 * @param index
 * @param items
 * @param state
 */
var onSwitchPrev = function (index, items, state$$1) {
    if (index > 0) {
        state$$1.select(items[index - 1], true);
    }
};
/**
 * \@name onBackspace
 * @param index
 * @param items
 * @param state
 */
var onBackspace = function (index, items, state$$1) {
    if (index < items.length - 1) {
        state$$1.select(items[index + 1], true);
    }
    else {
        state$$1.select(items[0], true);
    }
};
/**
 * @this {?}
 * @return {?}
 */
function onEscape() {
    this.hide();
}
/**
 * \@name onItemClicked
 * @param index
 * @param items
 * @param state
 */
var onItemClicked = function (index, items, state$$1) {
    return state$$1.selectedItem ? state$$1.selectedItem.click() : undefined;
};
var ACTIONS = (_a = {},
    _a[KEYS.BACKSPACE] = onBackspace,
    _a[KEYS.PREV] = onSwitchPrev,
    _a[KEYS.NEXT] = onSwitchNext,
    _a[KEYS.ENTER] = onItemClicked,
    _a[KEYS.ESCAPE] = onEscape,
    _a);
/**
 * @param {?} event
 * @return {?}
 */
function arrowKeysHandler(event) {
    if ([38, 40].indexOf(event.keyCode) > -1) {
        event.preventDefault();
    }
}
var Ng2DropdownState = (function () {
    function Ng2DropdownState() {
        this.onItemSelected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onItemClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    Object.defineProperty(Ng2DropdownState.prototype, "selectedItem", {
        /**
         * \@name selectedItem
         * @desc getter for _selectedItem
         * @return {?}
         */
        get: function () {
            return this._selectedItem;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * \@name selects a menu item and emits event
     * @param {?} item {Ng2MenuItem}
     * @param {?=} dispatchEvent {boolean}
     * @return {?}
     */
    Ng2DropdownState.prototype.select = function (item, dispatchEvent) {
        if (dispatchEvent === void 0) { dispatchEvent = true; }
        this._selectedItem = item;
        if (!dispatchEvent) {
            return;
        }
        item.focus();
        this.onItemSelected.emit(item);
    };
    /**
     * \@name unselect
     * @desc sets _selectedItem as undefined
     * @return {?}
     */
    Ng2DropdownState.prototype.unselect = function () {
        this._selectedItem = undefined;
    };
    return Ng2DropdownState;
}());
var DropdownStateService = (function () {
    function DropdownStateService() {
        this.menuState = {
            isVisible: /** @type {?} */ (false),
            /**
             * @return {?}
             */
            toString: function () {
                return this.isVisible === true ? 'visible' : 'hidden';
            }
        };
        this.dropdownState = new Ng2DropdownState();
    }
    return DropdownStateService;
}());
DropdownStateService.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */] },
];
/**
 * @nocollapse
 */
DropdownStateService.ctorParameters = function () { return []; };
var Ng2MenuItem = (function () {
    /**
     * @param {?} state
     * @param {?} element
     * @param {?} renderer
     */
    function Ng2MenuItem(state$$1, element, renderer) {
        this.state = state$$1;
        this.element = element;
        this.renderer = renderer;
        /**
         * \@preventClose
         * @desc if true, clicking on the item won't close the dropdown
         */
        this.preventClose = false;
    }
    Object.defineProperty(Ng2MenuItem.prototype, "isSelected", {
        /**
         * \@name isSelected
         * @desc returns current selected item
         * @return {?}
         */
        get: function () {
            return this === this.state.dropdownState.selectedItem;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * \@name click
     * @desc emits select event
     * @param {?=} $event
     * @return {?}
     */
    Ng2MenuItem.prototype.select = function ($event) {
        this.state.dropdownState.select(this, true);
        if ($event) {
            $event.stopPropagation();
            $event.preventDefault();
        }
    };
    /**
     * \@name click
     * @desc emits click event
     * @return {?}
     */
    Ng2MenuItem.prototype.click = function () {
        this.state.dropdownState.onItemClicked.emit(this);
    };
    /**
     * \@name focus
     * @return {?}
     */
    Ng2MenuItem.prototype.focus = function () {
        this.renderer.invokeElementMethod(this.element.nativeElement.children[0], 'focus');
    };
    return Ng2MenuItem;
}());
Ng2MenuItem.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                selector: 'ng2-menu-item',
                styles: ["\n      .ng2-menu-item {\n        font-family: \"Roboto\", \"Helvetica Neue\", Helvetica, Arial;\n        background: #fff;\n        color: rgba(0, 0, 0, 0.87);\n        cursor: pointer;\n        font-size: 0.9em;\n        text-transform: none;\n        font-weight: 400;\n        letter-spacing: 0.03em;\n        height: 48px;\n        line-height: 48px;\n        padding: 0.3em 1.25rem;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n        overflow: hidden;\n        -webkit-transition: background 0.25s;\n        transition: background 0.25s; }\n\n      .ng2-menu-item--selected {\n        background: rgba(158, 158, 158, 0.2);\n        outline: 0; }\n\n      .ng2-menu-item:focus {\n        outline: 0; }\n\n      .ng2-menu-item:active {\n        background: rgba(158, 158, 158, 0.4); }\n\n      :host(ng2-menu-item) /deep/ [ng2-menu-item-icon] {\n        vertical-align: middle;\n        font-size: 28px;\n        width: 1.5em;\n        height: 30px;\n        color: rgba(0, 0, 0, 0.44); }\n    "],
                template: "\n      <div class='ng2-menu-item'\n           role=\"button\"\n           tabindex=\"0\"\n           [class.ng2-menu-item--selected]=\"isSelected\"\n           (keydown.enter)=\"click()\"\n           (click)=\"click()\"\n           (mouseover)=\"select()\">\n              <ng-content></ng-content>\n      </div>\n    "
            },] },
];
/**
 * @nocollapse
 */
Ng2MenuItem.ctorParameters = function () { return [
    { type: DropdownStateService, },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Renderer */], },
]; };
Ng2MenuItem.propDecorators = {
    'preventClose': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'value': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
};
var Ng2DropdownMenu = (function () {
    /**
     * @param {?} state
     * @param {?} element
     * @param {?} renderer
     */
    function Ng2DropdownMenu(state$$1, element, renderer) {
        this.state = state$$1;
        this.element = element;
        this.renderer = renderer;
        /**
         * \@name width
         */
        this.width = 4;
        /**
         * \@description if set to true, the first element of the dropdown will be automatically focused
         * \@name focusFirstElement
         */
        this.focusFirstElement = true;
        /**
         * \@name appendToBody
         */
        this.appendToBody = true;
        /**
         * \@name zIndex
         */
        this.zIndex = 1000;
        this.listeners = {
            arrowHandler: undefined,
            handleKeypress: undefined
        };
    }
    /**
     * \@name show
     * \@shows menu and selects first item
     * @param {?=} position
     * @return {?}
     */
    Ng2DropdownMenu.prototype.show = function (position) {
        var /** @type {?} */ dc = typeof document !== 'undefined' ? document : undefined;
        var /** @type {?} */ wd = typeof window !== 'undefined' ? window : undefined;
        // update state
        this.state.menuState.isVisible = true;
        if (position) {
            this.updatePosition(position);
        }
        // setting handlers
        this.listeners.handleKeypress = this.renderer.listen(dc.body, 'keydown', this.handleKeypress.bind(this));
        this.listeners.arrowHandler = this.renderer.listen(wd, 'keydown', arrowKeysHandler);
    };
    /**
     * \@name hide
     * @desc hides menu
     * @return {?}
     */
    Ng2DropdownMenu.prototype.hide = function () {
        this.state.menuState.isVisible = false;
        // reset selected item state
        this.state.dropdownState.unselect();
        // call function to unlisten
        this.listeners.arrowHandler ? this.listeners.arrowHandler() : undefined;
        this.listeners.handleKeypress ? this.listeners.handleKeypress() : undefined;
    };
    /**
     * \@name updatePosition
     * @desc updates the menu position every time it is toggled
     * @param {?} position {ClientRect}
     * @return {?}
     */
    Ng2DropdownMenu.prototype.updatePosition = function (position) {
        this.position = position;
        this.ngDoCheck();
    };
    /**
     * \@name handleKeypress
     * @desc executes functions on keyPress based on the key pressed
     * @param {?} $event
     * @return {?}
     */
    Ng2DropdownMenu.prototype.handleKeypress = function ($event) {
        var /** @type {?} */ key = $event.keyCode;
        var /** @type {?} */ items = this.items.toArray();
        var /** @type {?} */ index = items.indexOf(this.state.dropdownState.selectedItem);
        if (!ACTIONS.hasOwnProperty(key)) {
            return;
        }
        ACTIONS[key].call(this, index, items, this.state.dropdownState);
    };
    /**
     * \@name getMenuElement
     * @return {?}
     */
    Ng2DropdownMenu.prototype.getMenuElement = function () {
        return this.element.nativeElement.children[0];
    };
    /**
     * \@name calcPositionOffset
     * @param {?} position
     * @return {?}
     */
    Ng2DropdownMenu.prototype.calcPositionOffset = function (position) {
        var /** @type {?} */ wd = typeof window !== 'undefined' ? window : undefined;
        var /** @type {?} */ dc = typeof document !== 'undefined' ? document : undefined;
        if (!wd || !dc || !position) {
            return;
        }
        var /** @type {?} */ element = this.getMenuElement();
        var /** @type {?} */ supportPageOffset = wd.pageXOffset !== undefined;
        var /** @type {?} */ isCSS1Compat = ((dc.compatMode || '') === 'CSS1Compat');
        var /** @type {?} */ x = supportPageOffset ? wd.pageXOffset : isCSS1Compat ?
            dc.documentElement.scrollLeft : dc.body.scrollLeft;
        var /** @type {?} */ y = supportPageOffset ? wd.pageYOffset : isCSS1Compat ?
            dc.documentElement.scrollTop : dc.body.scrollTop;
        var _a = this.applyOffset(position.top + (this.appendToBody ? y - 15 : 0) + "px", position.left + x - 5 + "px"), top = _a.top, left = _a.left;
        var /** @type {?} */ clientWidth = element.clientWidth;
        var /** @type {?} */ clientHeight = element.clientHeight;
        var /** @type {?} */ marginFromBottom = parseInt(top) + clientHeight + (this.appendToBody ? 0 : y - 15);
        var /** @type {?} */ marginFromRight = parseInt(left) + clientWidth;
        var /** @type {?} */ windowScrollHeight = wd.innerHeight + wd.scrollY;
        var /** @type {?} */ windowScrollWidth = wd.innerWidth + wd.scrollX;
        if (marginFromBottom >= windowScrollHeight) {
            top = parseInt(top.replace('px', '')) - clientHeight + "px";
        }
        if (marginFromRight >= windowScrollWidth) {
            var /** @type {?} */ marginRight = marginFromRight - windowScrollWidth + 30;
            left = parseInt(left.replace('px', '')) - marginRight + "px";
        }
        return { top: top, left: left };
    };
    /**
     * @param {?} top
     * @param {?} left
     * @return {?}
     */
    Ng2DropdownMenu.prototype.applyOffset = function (top, left) {
        if (!this.offset) {
            return { top: top, left: left };
        }
        var /** @type {?} */ offset = this.offset.split(' ');
        if (!offset[1]) {
            offset[1] = '0';
        }
        top = parseInt(top.replace('px', '')) + parseInt(offset[0]) + "px";
        left = parseInt(left.replace('px', '')) + parseInt(offset[1]) + "px";
        return { top: top, left: left };
    };
    /**
     * @return {?}
     */
    Ng2DropdownMenu.prototype.ngOnInit = function () {
        var /** @type {?} */ dc = typeof document !== 'undefined' ? document : undefined;
        if (this.appendToBody) {
            // append menu element to the body
            dc.body.appendChild(this.element.nativeElement);
        }
    };
    /**
     * @return {?}
     */
    Ng2DropdownMenu.prototype.ngDoCheck = function () {
        if (this.state.menuState.isVisible && this.position) {
            var /** @type {?} */ element = this.getMenuElement();
            var /** @type {?} */ position = this.calcPositionOffset(this.position);
            if (position) {
                this.renderer.setElementStyle(element, 'top', position.top);
                this.renderer.setElementStyle(element, 'left', position.left);
            }
            // select first item unless user disabled this option
            if (this.focusFirstElement &&
                this.items.first &&
                !this.state.dropdownState.selectedItem) {
                this.state.dropdownState.select(this.items.first, false);
            }
        }
    };
    /**
     * @return {?}
     */
    Ng2DropdownMenu.prototype.ngOnDestroy = function () {
        var /** @type {?} */ elem = this.element.nativeElement;
        elem.parentNode.removeChild(elem);
        if (this.listeners.handleKeypress) {
            this.listeners.handleKeypress();
        }
    };
    return Ng2DropdownMenu;
}());
Ng2DropdownMenu.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                selector: 'ng2-dropdown-menu',
                styles: ["\n      :host {\n        display: block; }\n\n      .ng2-dropdown-menu {\n        overflow-y: auto;\n        -webkit-box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.3);\n                box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.3);\n        position: absolute;\n        padding: 0.5em 0;\n        background: #fff;\n        border-radius: 1px;\n        max-height: 400px;\n        width: 260px;\n        min-height: 0;\n        display: block; }\n\n      .ng2-dropdown-menu.ng2-dropdown-menu--inside-element {\n        position: fixed; }\n\n      .ng2-dropdown-menu.ng2-dropdown-menu--width--2 {\n        width: 200px; }\n\n      .ng2-dropdown-menu.ng2-dropdown-menu--width--4 {\n        width: 260px; }\n\n      .ng2-dropdown-menu.ng2-dropdown-menu--width--6 {\n        width: 320px; }\n\n      .ng2-dropdown-backdrop {\n        position: fixed;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        z-index: 1;\n        overflow: hidden; }\n\n      :host /deep/ .ng2-menu-divider {\n        height: 1px;\n        min-height: 1px;\n        max-height: 1px;\n        width: 100%;\n        display: block;\n        background: #f9f9f9; }\n    "],
                template: "\n      <!-- MENU -->\n      <div class='ng2-dropdown-menu ng2-dropdown-menu---width--{{ width }}'\n           [class.ng2-dropdown-menu--inside-element]=\"!appendToBody\"\n           [class.ng2-dropdown-menu--open]=\"state.menuState.isVisible\"\n           [style.z-index]=\"zIndex\"\n           [@fade]=\"state.menuState.toString()\">\n              <div class=\"ng2-dropdown-menu__options-container\"\n                   [@opacity]=\"state.menuState.toString()\">\n                  <ng-content></ng-content>\n              </div>\n      </div>\n\n      <!-- BACKDROP -->\n      <div class=\"ng2-dropdown-backdrop\" *ngIf=\"state.menuState.isVisible\" (click)=\"hide()\"></div>\n    ",
                animations: [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* trigger */])('fade', [
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* state */])('visible', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({ display: 'block', height: '*', width: '*' })),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* state */])('hidden', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({ display: 'none', overflow: 'hidden', height: 0, width: 0 })),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* transition */])('hidden => visible', [
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('250ms ease-in', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* keyframes */])([
                                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({ opacity: 0, offset: 0 }),
                                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({ opacity: 1, offset: 1, height: '*', width: '*' }),
                            ]))
                        ]),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* transition */])('visible => hidden', [
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('350ms ease-out', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* keyframes */])([
                                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({ opacity: 1, offset: 0 }),
                                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({ opacity: 0, offset: 1, width: '0', height: '0' }),
                            ]))
                        ])
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* trigger */])('opacity', [
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* transition */])('hidden => visible', [
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('450ms ease-in', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* keyframes */])([
                                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({ opacity: 0, offset: 0 }),
                                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({ opacity: 1, offset: 1 }),
                            ]))
                        ]),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* transition */])('visible => hidden', [
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('250ms ease-out', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* keyframes */])([
                                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({ opacity: 1, offset: 0 }),
                                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({ opacity: 0.5, offset: 0.3 }),
                                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({ opacity: 0, offset: 1 }),
                            ]))
                        ])
                    ])
                ]
            },] },
];
/**
 * @nocollapse
 */
Ng2DropdownMenu.ctorParameters = function () { return [
    { type: DropdownStateService, },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Renderer */], },
]; };
Ng2DropdownMenu.propDecorators = {
    'width': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'focusFirstElement': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'offset': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'appendToBody': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'zIndex': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'items': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* ContentChildren */], args: [Ng2MenuItem,] },],
};
var Ng2Dropdown = (function () {
    /**
     * @param {?} state
     */
    function Ng2Dropdown(state$$1) {
        this.state = state$$1;
        this.dynamicUpdate = true;
        this.onItemClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onItemSelected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onShow = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onHide = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    /**
     * \@name toggleMenu
     * @desc toggles menu visibility
     * @param {?=} position
     * @return {?}
     */
    Ng2Dropdown.prototype.toggleMenu = function (position) {
        if (position === void 0) { position = this.button.getPosition(); }
        this.state.menuState.isVisible ? this.hide() : this.show(position);
    };
    /**
     * - hides dropdown
     * \@name hide
     * @return {?}
     */
    Ng2Dropdown.prototype.hide = function () {
        this.menu.hide();
        this.onHide.emit(this);
    };
    /**
     * - shows dropdown
     * \@name show
     * @param {?=} position
     * @return {?}
     */
    Ng2Dropdown.prototype.show = function (position) {
        if (position === void 0) { position = this.button.getPosition(); }
        this.menu.show(position);
        this.onShow.emit(this);
    };
    /**
     * \@name scrollListener
     * @return {?}
     */
    Ng2Dropdown.prototype.scrollListener = function () {
        if (this.button && this.dynamicUpdate) {
            this.menu.updatePosition(this.button.getPosition());
        }
    };
    /**
     * @return {?}
     */
    Ng2Dropdown.prototype.ngOnInit = function () {
        var _this = this;
        this.state.dropdownState.onItemClicked.subscribe(function (item) {
            _this.onItemClicked.emit(item);
            if (item.preventClose) {
                return;
            }
            _this.hide.call(_this);
        });
        if (this.button) {
            this.button.onMenuToggled.subscribe(function () {
                _this.toggleMenu();
            });
        }
        this.state.dropdownState.onItemSelected.subscribe(function (item) {
            _this.onItemSelected.emit(item);
        });
    };
    return Ng2Dropdown;
}());
Ng2Dropdown.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                selector: 'ng2-dropdown',
                template: "\n      <div class=\"ng2-dropdown-container\">\n          <ng-content select=\"ng2-dropdown-button\"></ng-content>\n          <ng-content select=\"ng2-dropdown-menu\"></ng-content>\n      </div>\n    ",
                providers: [DropdownStateService]
            },] },
];
/**
 * @nocollapse
 */
Ng2Dropdown.ctorParameters = function () { return [
    { type: DropdownStateService, },
]; };
Ng2Dropdown.propDecorators = {
    'button': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ContentChild */], args: [Ng2DropdownButton,] },],
    'menu': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ContentChild */], args: [Ng2DropdownMenu,] },],
    'dynamicUpdate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'onItemClicked': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */] },],
    'onItemSelected': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */] },],
    'onShow': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */] },],
    'onHide': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */] },],
    'scrollListener': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */], args: ['window:scroll',] },],
};
var Ng2DropdownModule = (function () {
    function Ng2DropdownModule() {
    }
    return Ng2DropdownModule;
}());
Ng2DropdownModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */], args: [{
                exports: [
                    Ng2MenuItem,
                    Ng2DropdownButton,
                    Ng2DropdownMenu,
                    Ng2Dropdown
                ],
                declarations: [
                    Ng2Dropdown,
                    Ng2MenuItem,
                    Ng2DropdownButton,
                    Ng2DropdownMenu,
                ],
                imports: [
                    __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */]
                ]
            },] },
];
/**
 * @nocollapse
 */
Ng2DropdownModule.ctorParameters = function () { return []; };
/**
 * Generated bundle index. Do not edit.
 */

var _a;
//# sourceMappingURL=ng2-material-dropdown.es5.js.map


/***/ }),

/***/ "./node_modules/ngx-chips/esm5/ngx-chips.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TagInputModule; });
/* unused harmony export TagInputDropdown */
/* unused harmony export DeleteIconComponent */
/* unused harmony export TagInputForm */
/* unused harmony export TagRipple */
/* unused harmony export TagComponent */
/* unused harmony export TagInputComponent */
/* unused harmony export ɵb */
/* unused harmony export ɵa */
/* unused harmony export ɵd */
/* unused harmony export ɵc */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_material_dropdown__ = __webpack_require__("./node_modules/ng2-material-dropdown/ng2-material-dropdown.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_tslib__ = __webpack_require__("./node_modules/tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_observable_combineLatest__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/combineLatest.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_Subscription__ = __webpack_require__("./node_modules/rxjs/_esm5/Subscription.js");
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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};











/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var escape = function (s) { return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'); };
var HighlightPipe = /** @class */ (function () {
    function HighlightPipe() {
    }
    /**
     * \@name transform
     * @param {?} value {string}
     * @param {?} arg {string}
     * @return {?}
     */
    HighlightPipe.prototype.transform = function (value, arg) {
        if (!arg.trim()) {
            return value;
        }
        try {
            var /** @type {?} */ regex = new RegExp("(" + escape(arg) + ")", 'i');
            return value.replace(regex, '<b>$1</b>');
        }
        catch (e) {
            return value;
        }
    };
    return HighlightPipe;
}());
HighlightPipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Pipe */], args: [{
                name: 'highlight'
            },] },
];
/** @nocollapse */
HighlightPipe.ctorParameters = function () { return []; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/*
** constants and default values for <tag-input>
 */
var PLACEHOLDER = '+ Tag';
var SECONDARY_PLACEHOLDER = 'Enter a new tag';
var KEYDOWN = 'keydown';
var KEYUP = 'keyup';
var MAX_ITEMS_WARNING = 'The number of items specified was greater than the property max-items.';
var ACTIONS_KEYS = {
    DELETE: 'DELETE',
    SWITCH_PREV: 'SWITCH_PREV',
    SWITCH_NEXT: 'SWITCH_NEXT',
    TAB: 'TAB'
};
var KEY_PRESS_ACTIONS = {
    8: ACTIONS_KEYS.DELETE,
    37: ACTIONS_KEYS.SWITCH_PREV,
    39: ACTIONS_KEYS.SWITCH_NEXT,
    9: ACTIONS_KEYS.TAB
};
var DRAG_AND_DROP_KEY = 'Text';
var NEXT = 'NEXT';
var PREV = 'PREV';
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// rx
var defaults$2 = Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* forwardRef */])(function () { return OptionsProvider.defaults.dropdown; });
var TagInputDropdown = /** @class */ (function () {
    /**
     * @param {?} injector
     */
    function TagInputDropdown(injector) {
        var _this = this;
        this.injector = injector;
        /**
         * \@name offset
         */
        this.offset = new defaults$2().offset;
        /**
         * \@name focusFirstElement
         */
        this.focusFirstElement = new defaults$2().focusFirstElement;
        /**
         * - show autocomplete dropdown if the value of input is empty
         * \@name showDropdownIfEmpty
         */
        this.showDropdownIfEmpty = new defaults$2().showDropdownIfEmpty;
        /**
         * - desc minimum text length in order to display the autocomplete dropdown
         * \@name minimumTextLength
         */
        this.minimumTextLength = new defaults$2().minimumTextLength;
        /**
         * - number of items to display in the autocomplete dropdown
         * \@name limitItemsTo
         */
        this.limitItemsTo = new defaults$2().limitItemsTo;
        /**
         * \@name displayBy
         */
        this.displayBy = new defaults$2().displayBy;
        /**
         * \@name identifyBy
         */
        this.identifyBy = new defaults$2().identifyBy;
        /**
         * \@description a function a developer can use to implement custom matching for the autocomplete
         * \@name matchingFn
         */
        this.matchingFn = new defaults$2().matchingFn;
        /**
         * \@name appendToBody
         */
        this.appendToBody = new defaults$2().appendToBody;
        /**
         * \@name keepOpen
         * \@description option to leave dropdown open when adding a new item
         */
        this.keepOpen = new defaults$2().keepOpen;
        /**
         * \@name dynamicUpdate
         */
        this.dynamicUpdate = new defaults$2().dynamicUpdate;
        /**
         * \@name zIndex
         */
        this.zIndex = new defaults$2().zIndex;
        /**
         * list of items that match the current value of the input (for autocomplete)
         * \@name items
         */
        this.items = [];
        /**
         * \@name tagInput
         */
        this.tagInput = this.injector.get(TagInputComponent);
        /**
         * \@name _autocompleteItems
         */
        this._autocompleteItems = [];
        /**
         *
         * \@name show
         */
        this.show = function () {
            var /** @type {?} */ maxItemsReached = _this.tagInput.items.length === _this.tagInput.maxItems;
            var /** @type {?} */ value = _this.getFormValue();
            var /** @type {?} */ hasMinimumText = value.trim().length >= _this.minimumTextLength;
            var /** @type {?} */ position = _this.calculatePosition();
            var /** @type {?} */ items = _this.getMatchingItems(value);
            var /** @type {?} */ hasItems = items.length > 0;
            var /** @type {?} */ isHidden = _this.isVisible === false;
            var /** @type {?} */ showDropdownIfEmpty = _this.showDropdownIfEmpty && hasItems && !value;
            var /** @type {?} */ isDisabled = _this.tagInput.disable;
            var /** @type {?} */ shouldShow = isHidden && ((hasItems && hasMinimumText) || showDropdownIfEmpty);
            var /** @type {?} */ shouldHide = _this.isVisible && !hasItems;
            if (_this.autocompleteObservable && hasMinimumText) {
                return _this.getItemsFromObservable(value);
            }
            if ((!_this.showDropdownIfEmpty && !value) || maxItemsReached || isDisabled) {
                return _this.dropdown.hide();
            }
            _this.setItems(items);
            if (shouldShow) {
                _this.dropdown.show(position);
            }
            else if (shouldHide) {
                _this.hide();
            }
        };
        /**
         * \@name requestAdding
         * @param item {Ng2MenuItem}
         */
        this.requestAdding = function (item) { return Object(__WEBPACK_IMPORTED_MODULE_4_tslib__["b" /* __awaiter */])(_this, void 0, void 0, function () {
            var tag, _a_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        tag = this.createTagModel(item);
                        return [4 /*yield*/, this.tagInput.onAddingRequested(true, tag)];
                    case 1:
                        _b.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        _a_1 = _b.sent();
                        return [2 /*return*/];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        /**
         * \@name resetItems
         */
        this.resetItems = function () {
            _this.items = [];
        };
        /**
         * \@name getItemsFromObservable
         * @param text
         */
        this.getItemsFromObservable = function (text) {
            _this.setLoadingState(true);
            var /** @type {?} */ subscribeFn = function (data) {
                // hide loading animation
                _this.setLoadingState(false)
                    .populateItems(data);
                _this.setItems(_this.getMatchingItems(text));
                if (_this.items.length) {
                    _this.dropdown.show(_this.calculatePosition());
                }
                else if (!_this.showDropdownIfEmpty && _this.isVisible) {
                    _this.dropdown.hide();
                }
                else if (!_this.showDropdownIfEmpty) {
                    _this.dropdown.hide();
                }
            };
            _this.autocompleteObservable(text)
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_8_rxjs_operators__["first"])())
                .subscribe(subscribeFn, function () { return _this.setLoadingState(false); });
        };
    }
    Object.defineProperty(TagInputDropdown.prototype, "autocompleteItems", {
        /**
         * \@name autocompleteItems
         * @desc array of items that will populate the autocomplete
         * @return {?}
         */
        get: function () {
            var _this = this;
            var /** @type {?} */ items = this._autocompleteItems;
            if (!items) {
                return [];
            }
            return items.map(function (item) {
                return typeof item === 'string' ? (_b = {},
                    _b[_this.displayBy] = item,
                    _b[_this.identifyBy] = item,
                    _b) : item;
                var _b;
            });
        },
        /**
         * \@name autocompleteItems
         * @param {?} items
         * @return {?}
         */
        set: function (items) {
            this._autocompleteItems = items;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * \@name ngOnInit
     * @return {?}
     */
    TagInputDropdown.prototype.ngOnInit = function () {
        this.onItemClicked().subscribe(this.requestAdding);
        // reset itemsMatching array when the dropdown is hidden
        this.onHide().subscribe(this.resetItems);
        var /** @type {?} */ DEBOUNCE_TIME = 200;
        var /** @type {?} */ KEEP_OPEN = this.keepOpen;
        this.tagInput
            .onTextChange
            .asObservable()
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_8_rxjs_operators__["debounceTime"])(DEBOUNCE_TIME), Object(__WEBPACK_IMPORTED_MODULE_8_rxjs_operators__["filter"])(function (value) {
            if (KEEP_OPEN === false) {
                return value.length > 0;
            }
            return true;
        }))
            .subscribe(this.show);
    };
    /**
     * \@name updatePosition
     * @return {?}
     */
    TagInputDropdown.prototype.updatePosition = function () {
        var /** @type {?} */ position = this.tagInput.inputForm.getElementPosition();
        this.dropdown.menu.updatePosition(position);
    };
    Object.defineProperty(TagInputDropdown.prototype, "isVisible", {
        /**
         * \@name isVisible
         * @return {?}
         */
        get: function () {
            return this.dropdown.menu.state.menuState.isVisible;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * \@name onHide
     * @return {?}
     */
    TagInputDropdown.prototype.onHide = function () {
        return this.dropdown.onHide;
    };
    /**
     * \@name onItemClicked
     * @return {?}
     */
    TagInputDropdown.prototype.onItemClicked = function () {
        return this.dropdown.onItemClicked;
    };
    Object.defineProperty(TagInputDropdown.prototype, "selectedItem", {
        /**
         * \@name selectedItem
         * @return {?}
         */
        get: function () {
            return this.dropdown.menu.state.dropdownState.selectedItem;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TagInputDropdown.prototype, "state", {
        /**
         * \@name state
         * @return {?}
         */
        get: function () {
            return this.dropdown.menu.state;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * \@name hide
     * @return {?}
     */
    TagInputDropdown.prototype.hide = function () {
        this.resetItems();
        this.dropdown.hide();
    };
    /**
     * \@name scrollListener
     * @return {?}
     */
    TagInputDropdown.prototype.scrollListener = function () {
        if (!this.isVisible) {
            return;
        }
        this.updatePosition();
    };
    /**
     * \@name onWindowBlur
     * @return {?}
     */
    TagInputDropdown.prototype.onWindowBlur = function () {
        this.dropdown.hide();
    };
    /**
     * \@name getFormValue
     * @return {?}
     */
    TagInputDropdown.prototype.getFormValue = function () {
        return this.tagInput.formValue.trim();
    };
    /**
     * \@name calculatePosition
     * @return {?}
     */
    TagInputDropdown.prototype.calculatePosition = function () {
        return this.tagInput.inputForm.getElementPosition();
    };
    /**
     * \@name createTagModel
     * @param {?} item
     * @return {?}
     */
    TagInputDropdown.prototype.createTagModel = function (item) {
        var /** @type {?} */ display = typeof item.value === 'string' ? item.value : item.value[this.displayBy];
        var /** @type {?} */ value = typeof item.value === 'string' ? item.value : item.value[this.identifyBy];
        return Object.assign({}, item.value, (_b = {}, _b[this.tagInput.displayBy] = display, _b[this.tagInput.identifyBy] = value, _b));
        var _b;
    };
    /**
     *
     * @param {?} value {string}
     * @return {?}
     */
    TagInputDropdown.prototype.getMatchingItems = function (value) {
        var _this = this;
        if (!value && !this.showDropdownIfEmpty) {
            return [];
        }
        var /** @type {?} */ dupesAllowed = this.tagInput.allowDupes;
        return this.autocompleteItems.filter(function (item) {
            var /** @type {?} */ hasValue = dupesAllowed ? false : _this.tagInput.tags.some(function (tag) {
                var /** @type {?} */ identifyBy = _this.tagInput.identifyBy;
                var /** @type {?} */ model = typeof tag.model === 'string' ? tag.model : tag.model[identifyBy];
                return model === item[_this.identifyBy];
            });
            return _this.matchingFn(value, item) && (hasValue === false);
        });
    };
    /**
     * \@name setItems
     * @param {?} items
     * @return {?}
     */
    TagInputDropdown.prototype.setItems = function (items) {
        this.items = items.slice(0, this.limitItemsTo || items.length);
    };
    /**
     * \@name populateItems
     * @param {?} data
     * @return {?}
     */
    TagInputDropdown.prototype.populateItems = function (data) {
        var _this = this;
        this.autocompleteItems = data.map(function (item) {
            return typeof item === 'string' ? (_b = {},
                _b[_this.displayBy] = item,
                _b[_this.identifyBy] = item,
                _b) : item;
            var _b;
        });
        return this;
    };
    /**
     * \@name setLoadingState
     * @param {?} state
     * @return {?}
     */
    TagInputDropdown.prototype.setLoadingState = function (state$$1) {
        this.tagInput.isLoading = state$$1;
        return this;
    };
    return TagInputDropdown;
}());
TagInputDropdown.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                selector: 'tag-input-dropdown',
                template: "<ng2-dropdown [dynamicUpdate]=\"dynamicUpdate\">\n    <ng2-dropdown-menu [focusFirstElement]=\"focusFirstElement\"\n                       [zIndex]=\"zIndex\"\n                       [appendToBody]=\"appendToBody\"\n                       [offset]=\"offset\">\n        <ng2-menu-item *ngFor=\"let item of items; let index = index; let last = last\"\n                       [value]=\"item\"\n                       [ngSwitch]=\"!!templates.length\">\n\n            <span *ngSwitchCase=\"false\"\n                  [innerHTML]=\"item[displayBy] | highlight : tagInput.inputForm.value.value\">\n            </span>\n\n            <ng-template *ngSwitchDefault\n                      [ngTemplateOutlet]=\"templates.first\"\n                      [ngTemplateOutletContext]=\"{ item: item, index: index, last: last }\">\n            </ng-template>\n        </ng2-menu-item>\n    </ng2-dropdown-menu>\n</ng2-dropdown>\n"
            },] },
];
/** @nocollapse */
TagInputDropdown.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Injector */], },
]; };
TagInputDropdown.propDecorators = {
    "dropdown": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */], args: [__WEBPACK_IMPORTED_MODULE_3_ng2_material_dropdown__["a" /* Ng2Dropdown */],] },],
    "templates": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* ContentChildren */], args: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* TemplateRef */],] },],
    "offset": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    "focusFirstElement": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    "showDropdownIfEmpty": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    "autocompleteObservable": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    "minimumTextLength": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    "limitItemsTo": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    "displayBy": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    "identifyBy": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    "matchingFn": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    "appendToBody": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    "keepOpen": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    "dynamicUpdate": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    "zIndex": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    "autocompleteItems": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    "scrollListener": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */], args: ['window:scroll',] },],
    "onWindowBlur": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */], args: ['window:blur',] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @record
 */
/**
 * @record
 */
var defaults$1 = {
    tagInput: /** @type {?} */ ({
        separatorKeys: [],
        separatorKeyCodes: [],
        maxItems: Infinity,
        placeholder: PLACEHOLDER,
        secondaryPlaceholder: SECONDARY_PLACEHOLDER,
        validators: [],
        asyncValidators: [],
        onlyFromAutocomplete: false,
        errorMessages: {},
        theme: '',
        onTextChangeDebounce: 250,
        inputId: null,
        inputClass: '',
        clearOnBlur: false,
        hideForm: false,
        addOnBlur: false,
        addOnPaste: false,
        pasteSplitPattern: ',',
        blinkIfDupe: true,
        removable: true,
        editable: false,
        allowDupes: false,
        modelAsStrings: false,
        trimTags: true,
        ripple: true,
        tabIndex: '',
        disable: false,
        dragZone: '',
        onRemoving: undefined,
        onAdding: undefined,
        displayBy: 'display',
        identifyBy: 'value',
        animationDuration: {
            enter: '250ms',
            leave: '150ms'
        }
    }),
    dropdown: /** @type {?} */ ({
        displayBy: 'display',
        identifyBy: 'value',
        appendToBody: true,
        offset: '50 0',
        focusFirstElement: false,
        showDropdownIfEmpty: false,
        minimumTextLength: 1,
        limitItemsTo: Infinity,
        keepOpen: true,
        dynamicUpdate: true,
        zIndex: 1000,
        matchingFn: matchingFn
    })
};
/**
 * \@name matchingFn
 * @this {?}
 * @param {?} value
 * @param {?} target
 * @return {?}
 */
function matchingFn(value, target) {
    var /** @type {?} */ targetValue = target[this.displayBy].toString();
    return targetValue && targetValue
        .toLowerCase()
        .indexOf(value.toLowerCase()) >= 0;
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var OptionsProvider = /** @class */ (function () {
    function OptionsProvider() {
    }
    /**
     * @param {?} options
     * @return {?}
     */
    OptionsProvider.prototype.setOptions = function (options) {
        OptionsProvider.defaults.tagInput = Object.assign({}, defaults$1.tagInput, options.tagInput);
        OptionsProvider.defaults.dropdown = Object.assign({}, defaults$1.dropdown, options.dropdown);
    };
    return OptionsProvider;
}());
OptionsProvider.defaults = defaults$1;
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?} obj
 * @return {?}
 */
function isObject(obj) {
    return obj === Object(obj);
}
var TagInputAccessor = /** @class */ (function () {
    function TagInputAccessor() {
        this._items = [];
        /**
         * \@name displayBy
         */
        this.displayBy = OptionsProvider.defaults.tagInput.displayBy;
        /**
         * \@name identifyBy
         */
        this.identifyBy = OptionsProvider.defaults.tagInput.identifyBy;
    }
    Object.defineProperty(TagInputAccessor.prototype, "items", {
        /**
         * @return {?}
         */
        get: function () {
            return this._items;
        },
        /**
         * @param {?} items
         * @return {?}
         */
        set: function (items) {
            this._items = items;
            this._onChangeCallback(this._items);
        },
        enumerable: true,
        configurable: true
    });
    ;
    /**
     * @return {?}
     */
    TagInputAccessor.prototype.onTouched = function () {
        this._onTouchedCallback();
    };
    /**
     * @param {?} items
     * @return {?}
     */
    TagInputAccessor.prototype.writeValue = function (items) {
        this._items = items || [];
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    TagInputAccessor.prototype.registerOnChange = function (fn) {
        this._onChangeCallback = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    TagInputAccessor.prototype.registerOnTouched = function (fn) {
        this._onTouchedCallback = fn;
    };
    /**
     * \@name getItemValue
     * @param {?} item
     * @return {?}
     */
    TagInputAccessor.prototype.getItemValue = function (item) {
        return isObject(item) ? item[this.identifyBy] : item;
    };
    /**
     * \@name getItemDisplay
     * @param {?} item
     * @return {?}
     */
    TagInputAccessor.prototype.getItemDisplay = function (item) {
        return isObject(item) ? item[this.displayBy] : item;
    };
    /**
     * \@name getItemsWithout
     * @param {?} index
     * @return {?}
     */
    TagInputAccessor.prototype.getItemsWithout = function (index) {
        return this.items.filter(function (item, position) { return position !== index; });
    };
    return TagInputAccessor;
}());
TagInputAccessor.propDecorators = {
    "displayBy": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    "identifyBy": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@name listen
 * @param {?} listenerType
 * @param {?} action
 * @param {?=} condition
 * @return {?}
 */
function listen(listenerType, action, condition) {
    if (condition === void 0) { condition = true; }
    // if the event provided does not exist, throw an error
    if (!this.listeners.hasOwnProperty(listenerType)) {
        throw new Error('The event entered may be wrong');
    }
    // if a condition is present and is false, exit early
    if (!condition) {
        return;
    }
    // fire listener
    this.listeners[listenerType].push(action);
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TagInputForm = /** @class */ (function () {
    function TagInputForm() {
        /**
         * \@name onSubmit
         */
        this.onSubmit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        /**
         * \@name onBlur
         */
        this.onBlur = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        /**
         * \@name onFocus
         */
        this.onFocus = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        /**
         * \@name onKeyup
         */
        this.onKeyup = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        /**
         * \@name onKeydown
         */
        this.onKeydown = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        /**
         * \@name validators
         */
        this.validators = [];
        /**
         * \@name asyncValidators
         * @desc array of AsyncValidator that are used to validate the tag before it gets appended to the list
         */
        this.asyncValidators = [];
        /**
         * \@name tabindex
         * @desc pass through the specified tabindex to the input
         */
        this.tabindex = '';
        /**
         * \@name disabled
         */
        this.disabled = false;
        /**
         * \@name inputTextChange
         */
        this.inputTextChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        /**
         * \@name inputTextValue
         */
        this.inputTextValue = '';
    }
    Object.defineProperty(TagInputForm.prototype, "inputText", {
        /**
         * \@name inputText
         * @return {?}
         */
        get: function () {
            return this.inputTextValue;
        },
        /**
         * \@name inputText
         * @param {?} text {string}
         * @return {?}
         */
        set: function (text) {
            this.inputTextValue = text;
            this.inputTextChange.emit(text);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TagInputForm.prototype.ngOnInit = function () {
        // creating form
        this.form = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */]({
            item: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]({ value: '', disabled: this.disabled }, this.validators, this.asyncValidators)
        });
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    TagInputForm.prototype.ngOnChanges = function (changes) {
        if (changes["disabled"] && !changes["disabled"].firstChange) {
            if (changes["disabled"].currentValue) {
                this.form.controls['item'].disable();
            }
            else {
                this.form.controls['item'].enable();
            }
        }
    };
    Object.defineProperty(TagInputForm.prototype, "value", {
        /**
         * \@name value
         * @return {?}
         */
        get: function () {
            return /** @type {?} */ (this.form.get('item'));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * \@name isInputFocused
     * @return {?}
     */
    TagInputForm.prototype.isInputFocused = function () {
        return document.activeElement === this.input.nativeElement;
    };
    /**
     * \@name getErrorMessages
     * @param {?} messages
     * @return {?}
     */
    TagInputForm.prototype.getErrorMessages = function (messages) {
        var _this = this;
        return Object.keys(messages)
            .filter(function (err) { return _this.value.hasError(err); })
            .map(function (err) { return messages[err]; });
    };
    /**
     * \@name hasErrors
     * @return {?}
     */
    TagInputForm.prototype.hasErrors = function () {
        var _b = this.form, dirty = _b.dirty, value = _b.value, valid = _b.valid;
        return dirty && value.item && !valid;
    };
    /**
     * \@name focus
     * @return {?}
     */
    TagInputForm.prototype.focus = function () {
        this.input.nativeElement.focus();
    };
    /**
     * \@name blur
     * @return {?}
     */
    TagInputForm.prototype.blur = function () {
        this.input.nativeElement.blur();
    };
    /**
     * \@name getElementPosition
     * @return {?}
     */
    TagInputForm.prototype.getElementPosition = function () {
        return this.input.nativeElement.getBoundingClientRect();
    };
    /**
     * - removes input from the component
     * \@name destroy
     * @return {?}
     */
    TagInputForm.prototype.destroy = function () {
        var /** @type {?} */ input = this.input.nativeElement;
        input.parentElement.removeChild(input);
    };
    /**
     * \@name onKeyDown
     * @param {?} $event
     * @return {?}
     */
    TagInputForm.prototype.onKeyDown = function ($event) {
        return this.onKeydown.emit($event);
    };
    /**
     * \@name submit
     * @param {?} $event
     * @return {?}
     */
    TagInputForm.prototype.submit = function ($event) {
        if (this.form.valid) {
            this.onSubmit.emit($event);
        }
    };
    return TagInputForm;
}());
TagInputForm.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                selector: 'tag-input-form',
                styles: [".dark tag:focus {\n  -webkit-box-shadow: 0 0 0 1px #323232;\n          box-shadow: 0 0 0 1px #323232; }\n\n.ng2-tag-input.bootstrap3-info {\n  background-color: #fff;\n  display: inline-block;\n  color: #555;\n  vertical-align: middle;\n  max-width: 100%;\n  height: 42px;\n  line-height: 44px; }\n\n.ng2-tag-input.bootstrap3-info input {\n  border: none;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  outline: none;\n  background-color: transparent;\n  padding: 0 6px;\n  margin: 0;\n  width: auto;\n  max-width: inherit; }\n\n.ng2-tag-input.bootstrap3-info .form-control input::-moz-placeholder {\n  color: #777;\n  opacity: 1; }\n\n.ng2-tag-input.bootstrap3-info .form-control input:-ms-input-placeholder {\n  color: #777; }\n\n.ng2-tag-input.bootstrap3-info .form-control input::-webkit-input-placeholder {\n  color: #777; }\n\n.ng2-tag-input.bootstrap3-info input:focus {\n  border: none;\n  -webkit-box-shadow: none;\n          box-shadow: none; }\n\n.bootstrap3-info.ng2-tag-input.ng2-tag-input--focused {\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.4);\n          box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.4);\n  border: 1px solid #ccc; }\n\n.bootstrap3-info.ng2-tag-input.ng2-tag-input--invalid {\n  -webkit-box-shadow: inset 0 1px 1px #d9534f;\n          box-shadow: inset 0 1px 1px #d9534f; }\n\n.ng2-tag-input {\n  display: block;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  position: relative;\n  -webkit-transition: all 0.25s;\n  transition: all 0.25s;\n  padding: 0.25rem 0;\n  min-height: 32px;\n  cursor: text;\n  border-bottom: 2px solid #efefef; }\n  .ng2-tag-input:focus {\n    outline: 0; }\n  .ng2-tag-input.ng2-tag-input--dropping {\n    opacity: 0.7; }\n  .ng2-tag-input.ng2-tag-input--focused {\n    border-bottom: 2px solid #2196F3; }\n  .ng2-tag-input.ng2-tag-input--invalid {\n    border-bottom: 2px solid #f44336; }\n  .ng2-tag-input.ng2-tag-input--loading {\n    border: none; }\n  .ng2-tag-input.ng2-tag-input--disabled {\n    opacity: 0.5;\n    cursor: not-allowed; }\n  .ng2-tag-input form {\n    margin: 0.1em 0; }\n  .ng2-tag-input .ng2-tags-container {\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n\n.minimal.ng2-tag-input {\n  display: block;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  position: relative;\n  cursor: text;\n  border-bottom: 1px solid transparent; }\n  .minimal.ng2-tag-input:focus {\n    outline: 0; }\n  .minimal.ng2-tag-input.ng2-tag-input--dropping {\n    opacity: 0.7; }\n  .minimal.ng2-tag-input.ng2-tag-input--loading {\n    border: none; }\n  .minimal.ng2-tag-input.ng2-tag-input--disabled {\n    opacity: 0.5;\n    cursor: not-allowed; }\n  .minimal.ng2-tag-input .ng2-tags-container {\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n\n.dark.ng2-tag-input {\n  display: block;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  position: relative;\n  cursor: text;\n  border-bottom: 2px solid #444; }\n  .dark.ng2-tag-input:focus {\n    outline: 0; }\n  .dark.ng2-tag-input.ng2-tag-input--dropping {\n    opacity: 0.7; }\n  .dark.ng2-tag-input.ng2-tag-input--loading {\n    border: none; }\n  .dark.ng2-tag-input.ng2-tag-input--disabled {\n    opacity: 0.5;\n    cursor: not-allowed; }\n  .dark.ng2-tag-input .ng2-tags-container {\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n\n.bootstrap.ng2-tag-input {\n  display: block;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  position: relative;\n  cursor: text;\n  border-bottom: 2px solid #efefef; }\n  .bootstrap.ng2-tag-input:focus {\n    outline: 0; }\n  .bootstrap.ng2-tag-input.ng2-tag-input--dropping {\n    opacity: 0.7; }\n  .bootstrap.ng2-tag-input.ng2-tag-input--focused {\n    border-bottom: 2px solid #0275d8; }\n  .bootstrap.ng2-tag-input.ng2-tag-input--invalid {\n    border-bottom: 2px solid #d9534f; }\n  .bootstrap.ng2-tag-input.ng2-tag-input--loading {\n    border: none; }\n  .bootstrap.ng2-tag-input.ng2-tag-input--disabled {\n    opacity: 0.5;\n    cursor: not-allowed; }\n  .bootstrap.ng2-tag-input .ng2-tags-container {\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n\n.bootstrap3-info.ng2-tag-input {\n  display: block;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  position: relative;\n  padding: 4px;\n  cursor: text;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n          box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  border-radius: 4px; }\n  .bootstrap3-info.ng2-tag-input:focus {\n    outline: 0; }\n  .bootstrap3-info.ng2-tag-input.ng2-tag-input--dropping {\n    opacity: 0.7; }\n  .bootstrap3-info.ng2-tag-input.ng2-tag-input--invalid {\n    border-bottom: 1px solid #d9534f; }\n  .bootstrap3-info.ng2-tag-input.ng2-tag-input--loading {\n    border: none; }\n  .bootstrap3-info.ng2-tag-input.ng2-tag-input--disabled {\n    opacity: 0.5;\n    cursor: not-allowed; }\n  .bootstrap3-info.ng2-tag-input form {\n    margin: 0.1em 0; }\n  .bootstrap3-info.ng2-tag-input .ng2-tags-container {\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n\n.error-message {\n  font-size: 0.8em;\n  color: #f44336;\n  margin: 0.5em 0 0 0; }\n\n.bootstrap .error-message {\n  color: #d9534f; }\n\n.ng2-tag-input__text-input {\n  display: inline;\n  vertical-align: middle;\n  border: none;\n  padding: 0 0.5rem;\n  height: 38px;\n  font-size: 1em;\n  font-family: \"Roboto\", \"Helvetica Neue\", sans-serif; }\n  .ng2-tag-input__text-input:focus {\n    outline: 0; }\n  .ng2-tag-input__text-input[disabled=true] {\n    opacity: 0.5;\n    background: #fff; }\n"],
                template: "<!-- form -->\n<form (submit)=\"submit($event)\" [formGroup]=\"form\">\n    <input #input\n\n           type=\"text\"\n           class=\"ng2-tag-input__text-input\"\n           autocomplete=\"off\"\n           tabindex=\"{{ disabled ? -1 : tabindex ? tabindex : 0 }}\"\n           minlength=\"1\"\n\n           [(ngModel)]=\"inputText\"\n           [formControlName]=\"'item'\"\n           [ngClass]=\"inputClass\"\n           [attr.id]=\"inputId\"\n           [attr.placeholder]=\"placeholder\"\n           [attr.aria-label]=\"placeholder\"\n           [attr.tabindex]=\"tabindex\"\n           [attr.disabled]=\"disabled ? disabled : null\"\n\n           (focus)=\"onFocus.emit($event)\"\n           (blur)=\"onBlur.emit($event)\"\n           (keydown)=\"onKeyDown($event)\"\n           (keyup)=\"onKeyup.emit($event)\"\n    />\n</form>\n"
            },] },
];
/** @nocollapse */
TagInputForm.ctorParameters = function () { return []; };
TagInputForm.propDecorators = {
    "onSubmit": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */] },],
    "onBlur": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */] },],
    "onFocus": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */] },],
    "onKeyup": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */] },],
    "onKeydown": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */] },],
    "placeholder": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    "validators": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    "asyncValidators": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    "inputId": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    "inputClass": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    "inputText": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    "tabindex": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    "disabled": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    "input": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */], args: ['input',] },],
    "inputTextChange": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TagRipple = /** @class */ (function () {
    function TagRipple() {
        this.state = 'none';
    }
    return TagRipple;
}());
TagRipple.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                selector: 'tag-ripple',
                styles: ["\n        :host {\n            width: 100%;\n            height: 100%;\n            left: 0;\n            overflow: hidden;\n            position: absolute;\n        }\n        \n        .tag-ripple {\n            background: rgba(0, 0, 0, 0.1);\n            top: 50%;\n            left: 50%;\n            height: 100%;\n            transform: translate(-50%, -50%);\n            position: absolute;\n        }\n    "],
                template: "\n        <div class=\"tag-ripple\" [@ink]=\"state\"></div>\n    ",
                animations: [
                    Object(__WEBPACK_IMPORTED_MODULE_9__angular_animations__["k" /* trigger */])('ink', [
                        Object(__WEBPACK_IMPORTED_MODULE_9__angular_animations__["h" /* state */])('none', Object(__WEBPACK_IMPORTED_MODULE_9__angular_animations__["i" /* style */])({ width: 0, opacity: 0 })),
                        Object(__WEBPACK_IMPORTED_MODULE_9__angular_animations__["j" /* transition */])('none => clicked', [
                            Object(__WEBPACK_IMPORTED_MODULE_9__angular_animations__["e" /* animate */])(300, Object(__WEBPACK_IMPORTED_MODULE_9__angular_animations__["f" /* keyframes */])([
                                Object(__WEBPACK_IMPORTED_MODULE_9__angular_animations__["i" /* style */])({ opacity: 1, offset: 0, width: '30%', borderRadius: '100%' }),
                                Object(__WEBPACK_IMPORTED_MODULE_9__angular_animations__["i" /* style */])({ opacity: 1, offset: 0.5, width: '50%' }),
                                Object(__WEBPACK_IMPORTED_MODULE_9__angular_animations__["i" /* style */])({ opacity: 0.5, offset: 1, width: '100%', borderRadius: '16px' })
                            ]))
                        ])
                    ])
                ]
            },] },
];
/** @nocollapse */
TagRipple.ctorParameters = function () { return []; };
TagRipple.propDecorators = {
    "state": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// angular universal hacks
/* tslint:disable-next-line */
var KeyboardEvent = ((window)).KeyboardEvent;
var MouseEvent = ((window)).MouseEvent;
// mocking navigator
var navigator = typeof window !== 'undefined' ? window.navigator : {
    userAgent: 'Chrome',
    vendor: 'Google Inc'
};
var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
var TagComponent = /** @class */ (function () {
    /**
     * @param {?} element
     * @param {?} renderer
     * @param {?} cdRef
     */
    function TagComponent(element, renderer, cdRef) {
        this.element = element;
        this.renderer = renderer;
        this.cdRef = cdRef;
        /**
         * \@name disabled
         */
        this.disabled = false;
        /**
         * \@name onSelect
         */
        this.onSelect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        /**
         * \@name onRemove
         */
        this.onRemove = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        /**
         * \@name onBlur
         */
        this.onBlur = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        /**
         * \@name onKeyDown
         */
        this.onKeyDown = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        /**
         * \@name onTagEdited
         */
        this.onTagEdited = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        /**
         * \@name editing
         */
        this.editing = false;
        /**
         * \@name rippleState
         */
        this.rippleState = 'none';
    }
    Object.defineProperty(TagComponent.prototype, "readonly", {
        /**
         * \@name readonly {boolean}
         * @return {?}
         */
        get: function () {
            return typeof this.model !== 'string' && this.model["readonly"] === true;
        },
        enumerable: true,
        configurable: true
    });
    ;
    /**
     * \@name select
     * @param {?=} $event
     * @return {?}
     */
    TagComponent.prototype.select = function ($event) {
        if (this.readonly || this.disabled) {
            return;
        }
        if ($event) {
            $event.stopPropagation();
        }
        this.focus();
        this.onSelect.emit(this.model);
    };
    /**
     * \@name remove
     * @param {?} $event
     * @return {?}
     */
    TagComponent.prototype.remove = function ($event) {
        $event.stopPropagation();
        this.onRemove.emit(this);
    };
    /**
     * \@name focus
     * @return {?}
     */
    TagComponent.prototype.focus = function () {
        this.element.nativeElement.focus();
    };
    /**
     * @return {?}
     */
    TagComponent.prototype.move = function () {
        this.moving = true;
    };
    /**
     * \@name keydown
     * @param {?} event
     * @return {?}
     */
    TagComponent.prototype.keydown = function (event) {
        if (this.editing) {
            event.keyCode === 13 ? this.disableEditMode(event) : undefined;
            return;
        }
        this.onKeyDown.emit({ event: event, model: this.model });
    };
    /**
     * \@name blink
     * @return {?}
     */
    TagComponent.prototype.blink = function () {
        var /** @type {?} */ classList = this.element.nativeElement.classList;
        classList.add('blink');
        setTimeout(function () { return classList.remove('blink'); }, 50);
    };
    /**
     * \@name toggleEditMode
     * @return {?}
     */
    TagComponent.prototype.toggleEditMode = function () {
        if (this.editable) {
            this.editing ? undefined : this.activateEditMode();
        }
    };
    /**
     * \@name onBlurred
     * @param {?} event
     * @return {?}
     */
    TagComponent.prototype.onBlurred = function (event) {
        // Checks if it is editable first before handeling the onBlurred event in order to prevent
        // a bug in IE where tags are still editable with onlyFromAutocomplete set to true
        if (!this.editable) {
            return;
        }
        this.disableEditMode();
        var /** @type {?} */ value = event.target.innerText;
        var /** @type {?} */ result = typeof this.model === 'string' ? value : Object.assign({}, this.model, (_b = {}, _b[this.displayBy] = value, _b));
        this.onBlur.emit(result);
        var _b;
    };
    /**
     * \@name getDisplayValue
     * @param {?} item
     * @return {?}
     */
    TagComponent.prototype.getDisplayValue = function (item) {
        return typeof item === 'string' ? item : item[this.displayBy];
    };
    Object.defineProperty(TagComponent.prototype, "isRippleVisible", {
        /**
         * @desc returns whether the ripple is visible or not
         * only works in Chrome
         * \@name isRippleVisible
         * @return {?}
         */
        get: function () {
            return !this.readonly &&
                !this.editing &&
                isChrome &&
                this.hasRipple;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * \@name disableEditMode
     * @param {?=} $event
     * @return {?}
     */
    TagComponent.prototype.disableEditMode = function ($event) {
        var /** @type {?} */ classList = this.element.nativeElement.classList;
        var /** @type {?} */ input = this.getContentEditableText();
        this.editing = false;
        classList.remove('tag--editing');
        if (!input) {
            this.setContentEditableText(this.model);
            return;
        }
        this.storeNewValue(input);
        this.cdRef.detectChanges();
        if ($event) {
            $event.preventDefault();
        }
    };
    /**
     * \@name isDeleteIconVisible
     * @return {?}
     */
    TagComponent.prototype.isDeleteIconVisible = function () {
        return !this.readonly &&
            !this.disabled &&
            this.removable &&
            !this.editing;
    };
    /**
     * \@name getContentEditableText
     * @return {?}
     */
    TagComponent.prototype.getContentEditableText = function () {
        var /** @type {?} */ input = this.getContentEditable();
        return input ? input.innerText.trim() : '';
    };
    /**
     * \@name setContentEditableText
     * @param {?} model
     * @return {?}
     */
    TagComponent.prototype.setContentEditableText = function (model) {
        var /** @type {?} */ input = this.getContentEditable();
        var /** @type {?} */ value = this.getDisplayValue(model);
        input.innerText = value;
    };
    /**
     * \@name
     * @return {?}
     */
    TagComponent.prototype.activateEditMode = function () {
        var /** @type {?} */ classList = this.element.nativeElement.classList;
        classList.add('tag--editing');
        this.editing = true;
    };
    /**
     * \@name storeNewValue
     * @param {?} input
     * @return {?}
     */
    TagComponent.prototype.storeNewValue = function (input) {
        var _this = this;
        var /** @type {?} */ exists = function (tag) {
            return typeof tag === 'string' ?
                tag === input :
                tag[_this.displayBy] === input;
        };
        var /** @type {?} */ hasId = function () {
            return _this.model[_this.identifyBy] !== _this.model[_this.displayBy];
        };
        // if the value changed, replace the value in the model
        if (exists(this.model)) {
            return;
        }
        var /** @type {?} */ model = typeof this.model === 'string' ? input : (_b = {},
            _b[this.identifyBy] = hasId() ? this.model[this.identifyBy] : input,
            _b[this.displayBy] = input,
            _b);
        if (this.canAddTag(model)) {
            this.onTagEdited.emit({ tag: model, index: this.index });
        }
        else {
            this.setContentEditableText(this.model);
        }
        var _b;
    };
    /**
     * \@name getContentEditable
     * @return {?}
     */
    TagComponent.prototype.getContentEditable = function () {
        return this.element.nativeElement.querySelector('[contenteditable]');
    };
    return TagComponent;
}());
TagComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                selector: 'tag',
                template: "<div (click)=\"select($event)\"\n     (dblclick)=\"toggleEditMode()\"\n     (mousedown)=\"rippleState='clicked'\"\n     (mouseup)=\"rippleState='none'\"\n     [ngSwitch]=\"!!template\"\n     [class.disabled]=\"disabled\"\n     [attr.tabindex]=\"-1\"\n     [attr.aria-label]=\"getDisplayValue(model)\">\n\n    <div *ngSwitchCase=\"true\" [attr.contenteditable]=\"editing\">\n        <!-- CUSTOM TEMPLATE -->\n        <ng-template\n            [ngTemplateOutletContext]=\"{ item: model, index: index }\"\n            [ngTemplateOutlet]=\"template\">\n        </ng-template>\n    </div>\n\n    <div *ngSwitchCase=\"false\" class=\"tag-wrapper\">\n        <!-- TAG NAME -->\n        <div [attr.contenteditable]=\"editing\"\n             [attr.title]=\"getDisplayValue(model)\"\n             class=\"tag__text inline\"\n             spellcheck=\"false\"\n             (keydown.enter)=\"disableEditMode($event)\"\n             (keydown.escape)=\"disableEditMode($event)\"\n             (click)=\"editing ? $event.stopPropagation() : undefined\"\n             (blur)=\"onBlurred($event)\">\n            {{ getDisplayValue(model) }}\n        </div>\n\n        <!-- 'X' BUTTON -->\n        <delete-icon\n            aria-label=\"Remove tag\"\n            role=\"button\"\n            (click)=\"remove($event)\"\n            *ngIf=\"isDeleteIconVisible()\">\n        </delete-icon>\n    </div>\n</div>\n\n<tag-ripple [state]=\"rippleState\"\n            [attr.tabindex]=\"-1\"\n            *ngIf=\"isRippleVisible\">\n</tag-ripple>\n",
                styles: [":host,\n:host > div,\n:host > div:focus {\n  outline: 0;\n  overflow: hidden;\n  -webkit-transition: opacity 1s;\n  transition: opacity 1s;\n  z-index: 1; }\n\n:host {\n  max-width: 400px; }\n\n:host.blink {\n  -webkit-animation: blink 0.3s normal forwards ease-in-out;\n  animation: blink 0.3s normal forwards ease-in-out; }\n\n@-webkit-keyframes blink {\n  0% {\n    opacity: 0.3; } }\n\n@keyframes blink {\n  0% {\n    opacity: 0.3; } }\n\n:host .disabled {\n  cursor: not-allowed; }\n\n:host [contenteditable='true'] {\n  outline: 0; }\n\n.tag-wrapper {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.tag__text {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n"]
            },] },
];
/** @nocollapse */
TagComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Renderer2 */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */], },
]; };
TagComponent.propDecorators = {
    "model": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    "removable": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    "editable": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    "template": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    "displayBy": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    "identifyBy": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    "index": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    "hasRipple": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    "disabled": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    "canAddTag": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    "onSelect": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */] },],
    "onRemove": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */] },],
    "onBlur": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */] },],
    "onKeyDown": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */] },],
    "onTagEdited": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */] },],
    "moving": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostBinding */], args: ['class.moving',] },],
    "ripple": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */], args: [TagRipple,] },],
    "keydown": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */], args: ['keydown', ['$event'],] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@name animations
 */
var animations$1 = [
    Object(__WEBPACK_IMPORTED_MODULE_9__angular_animations__["k" /* trigger */])('animation', [
        Object(__WEBPACK_IMPORTED_MODULE_9__angular_animations__["h" /* state */])('in', Object(__WEBPACK_IMPORTED_MODULE_9__angular_animations__["i" /* style */])({
            opacity: 1
        })),
        Object(__WEBPACK_IMPORTED_MODULE_9__angular_animations__["h" /* state */])('out', Object(__WEBPACK_IMPORTED_MODULE_9__angular_animations__["i" /* style */])({
            opacity: 0
        })),
        Object(__WEBPACK_IMPORTED_MODULE_9__angular_animations__["j" /* transition */])(':enter', [
            Object(__WEBPACK_IMPORTED_MODULE_9__angular_animations__["e" /* animate */])("{{ enter }}", Object(__WEBPACK_IMPORTED_MODULE_9__angular_animations__["f" /* keyframes */])([
                Object(__WEBPACK_IMPORTED_MODULE_9__angular_animations__["i" /* style */])({ opacity: 0, offset: 0, transform: 'translate(0px, 20px)' }),
                Object(__WEBPACK_IMPORTED_MODULE_9__angular_animations__["i" /* style */])({ opacity: 0.3, offset: 0.3, transform: 'translate(0px, -10px)' }),
                Object(__WEBPACK_IMPORTED_MODULE_9__angular_animations__["i" /* style */])({ opacity: 0.5, offset: 0.5, transform: 'translate(0px, 0px)' }),
                Object(__WEBPACK_IMPORTED_MODULE_9__angular_animations__["i" /* style */])({ opacity: 0.75, offset: 0.75, transform: 'translate(0px, 5px)' }),
                Object(__WEBPACK_IMPORTED_MODULE_9__angular_animations__["i" /* style */])({ opacity: 1, offset: 1, transform: 'translate(0px, 0px)' })
            ]))
        ]),
        Object(__WEBPACK_IMPORTED_MODULE_9__angular_animations__["j" /* transition */])(':leave', [
            Object(__WEBPACK_IMPORTED_MODULE_9__angular_animations__["e" /* animate */])("{{ leave }}", Object(__WEBPACK_IMPORTED_MODULE_9__angular_animations__["f" /* keyframes */])([
                Object(__WEBPACK_IMPORTED_MODULE_9__angular_animations__["i" /* style */])({ opacity: 1, transform: 'translateX(0)', offset: 0 }),
                Object(__WEBPACK_IMPORTED_MODULE_9__angular_animations__["i" /* style */])({ opacity: 1, transform: 'translateX(-15px)', offset: 0.7 }),
                Object(__WEBPACK_IMPORTED_MODULE_9__angular_animations__["i" /* style */])({ opacity: 0, transform: 'translateX(100%)', offset: 1.0 })
            ]))
        ])
    ])
];
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// angular
// rx
// ng2-tag-input
// angular universal hacks
/* tslint:disable-next-line */
var DragEvent = ((window)).DragEvent;
var CUSTOM_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* NG_VALUE_ACCESSOR */],
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* forwardRef */])(function () { return TagInputComponent; }),
    multi: true
};
var defaults = Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* forwardRef */])(function () { return OptionsProvider.defaults.tagInput; });
var TagInputComponent = /** @class */ (function (_super) {
    __extends(TagInputComponent, _super);
    /**
     * @param {?} renderer
     * @param {?} dragProvider
     */
    function TagInputComponent(renderer, dragProvider) {
        var _this = _super.call(this) || this;
        _this.renderer = renderer;
        _this.dragProvider = dragProvider;
        /**
         * \@name separatorKeys
         * @desc keyboard keys with which a user can separate items
         */
        _this.separatorKeys = new defaults().separatorKeys;
        /**
         * \@name separatorKeyCodes
         * @desc keyboard key codes with which a user can separate items
         */
        _this.separatorKeyCodes = new defaults().separatorKeyCodes;
        /**
         * \@name placeholder
         * @desc the placeholder of the input text
         */
        _this.placeholder = new defaults().placeholder;
        /**
         * \@name secondaryPlaceholder
         * @desc placeholder to appear when the input is empty
         */
        _this.secondaryPlaceholder = new defaults().secondaryPlaceholder;
        /**
         * \@name maxItems
         * @desc maximum number of items that can be added
         */
        _this.maxItems = new defaults().maxItems;
        /**
         * \@name validators
         * @desc array of Validators that are used to validate the tag before it gets appended to the list
         */
        _this.validators = new defaults().validators;
        /**
         * \@name asyncValidators
         * @desc array of AsyncValidator that are used to validate the tag before it gets appended to the list
         */
        _this.asyncValidators = new defaults().asyncValidators;
        /**
         * - if set to true, it will only possible to add items from the autocomplete
         * \@name onlyFromAutocomplete
         */
        _this.onlyFromAutocomplete = new defaults().onlyFromAutocomplete;
        /**
         * \@name errorMessages
         */
        _this.errorMessages = new defaults().errorMessages;
        /**
         * \@name theme
         */
        _this.theme = new defaults().theme;
        /**
         * \@name onTextChangeDebounce
         */
        _this.onTextChangeDebounce = new defaults().onTextChangeDebounce;
        /**
         * - custom id assigned to the input
         * \@name id
         */
        _this.inputId = new defaults().inputId;
        /**
         * - custom class assigned to the input
         */
        _this.inputClass = new defaults().inputClass;
        /**
         * - option to clear text input when the form is blurred
         * \@name clearOnBlur
         */
        _this.clearOnBlur = new defaults().clearOnBlur;
        /**
         * - hideForm
         * \@name clearOnBlur
         */
        _this.hideForm = new defaults().hideForm;
        /**
         * \@name addOnBlur
         */
        _this.addOnBlur = new defaults().addOnBlur;
        /**
         * \@name addOnPaste
         */
        _this.addOnPaste = new defaults().addOnPaste;
        /**
         * - pattern used with the native method split() to separate patterns in the string pasted
         * \@name pasteSplitPattern
         */
        _this.pasteSplitPattern = new defaults().pasteSplitPattern;
        /**
         * \@name blinkIfDupe
         */
        _this.blinkIfDupe = new defaults().blinkIfDupe;
        /**
         * \@name removable
         */
        _this.removable = new defaults().removable;
        /**
         * \@name editable
         */
        _this.editable = new defaults().editable;
        /**
         * \@name allowDupes
         */
        _this.allowDupes = new defaults().allowDupes;
        /**
         * \@description if set to true, the newly added tags will be added as strings, and not objects
         * \@name modelAsStrings
         */
        _this.modelAsStrings = new defaults().modelAsStrings;
        /**
         * \@name trimTags
         */
        _this.trimTags = new defaults().trimTags;
        /**
         * \@name ripple
         */
        _this.ripple = new defaults().ripple;
        /**
         * \@name tabindex
         * @desc pass through the specified tabindex to the input
         */
        _this.tabindex = new defaults().tabIndex;
        /**
         * \@name disable
         */
        _this.disable = new defaults().disable;
        /**
         * \@name dragZone
         */
        _this.dragZone = new defaults().dragZone;
        /**
         * \@name onRemoving
         */
        _this.onRemoving = new defaults().onRemoving;
        /**
         * \@name onAdding
         */
        _this.onAdding = new defaults().onAdding;
        /**
         * \@name animationDuration
         */
        _this.animationDuration = new defaults().animationDuration;
        /**
         * \@name onAdd
         * @desc event emitted when adding a new item
         */
        _this.onAdd = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        /**
         * \@name onRemove
         * @desc event emitted when removing an existing item
         */
        _this.onRemove = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        /**
         * \@name onSelect
         * @desc event emitted when selecting an item
         */
        _this.onSelect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        /**
         * \@name onFocus
         * @desc event emitted when the input is focused
         */
        _this.onFocus = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        /**
         * \@name onFocus
         * @desc event emitted when the input is blurred
         */
        _this.onBlur = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        /**
         * \@name onTextChange
         * @desc event emitted when the input value changes
         */
        _this.onTextChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        /**
         * - output triggered when text is pasted in the form
         * \@name onPaste
         */
        _this.onPaste = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        /**
         * - output triggered when tag entered is not valid
         * \@name onValidationError
         */
        _this.onValidationError = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        /**
         * - output triggered when tag is edited
         * \@name onTagEdited
         */
        _this.onTagEdited = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        /**
         * \@name isLoading
         */
        _this.isLoading = false;
        /**
         * \@name listeners
         * @desc array of events that get fired using \@fireEvents
         */
        _this.listeners = (_b = {},
            _b[KEYDOWN] = ([]),
            _b[KEYUP] = ([]),
            _b);
        /**
         * \@description emitter for the 2-way data binding inputText value
         * \@name inputTextChange
         */
        _this.inputTextChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        /**
         * \@description private variable to bind get/set
         * \@name inputTextValue
         */
        _this.inputTextValue = '';
        _this.errors = [];
        /**
         * \@name appendTag
         * @param tag {TagModel}
         */
        _this.appendTag = function (tag, index) {
            if (index === void 0) { index = _this.items.length; }
            var /** @type {?} */ items = _this.items;
            var /** @type {?} */ model = _this.modelAsStrings ? tag[_this.identifyBy] : tag;
            _this.items = __spread(items.slice(0, index), [
                model
            ], items.slice(index, items.length));
        };
        /**
         * \@name createTag
         * @param model
         */
        _this.createTag = function (model) {
            var /** @type {?} */ trim = function (val, key) {
                return typeof val === 'string' ? val.trim() : val[key];
            };
            return Object.assign({}, typeof model !== 'string' ? model : {}, (_b = {}, _b[_this.displayBy] = _this.trimTags ? trim(model, _this.displayBy) : model, _b[_this.identifyBy] = _this.trimTags ? trim(model, _this.identifyBy) : model, _b));
            var _b;
        };
        /**
         *
         * @param tag
         * @param isFromAutocomplete
         */
        _this.isTagValid = function (tag, fromAutocomplete) {
            if (fromAutocomplete === void 0) { fromAutocomplete = false; }
            var /** @type {?} */ selectedItem = _this.dropdown ? _this.dropdown.selectedItem : undefined;
            if (selectedItem && !fromAutocomplete) {
                return false;
            }
            var /** @type {?} */ dupe = _this.findDupe(tag, fromAutocomplete);
            // if so, give a visual cue and return false
            if (!_this.allowDupes && dupe && _this.blinkIfDupe) {
                var /** @type {?} */ model = _this.tags.find(function (item) {
                    return _this.getItemValue(item.model) === _this.getItemValue(dupe);
                });
                if (model) {
                    model.blink();
                }
            }
            var /** @type {?} */ isFromAutocomplete = fromAutocomplete && _this.onlyFromAutocomplete;
            var /** @type {?} */ assertions = [
                // 1. there must be no dupe OR dupes are allowed
                !dupe || _this.allowDupes === true,
                // 2. check max items has not been reached
                _this.maxItemsReached === false,
                // 3. check item comes from autocomplete or onlyFromAutocomplete is false
                ((isFromAutocomplete) || _this.onlyFromAutocomplete === false)
            ];
            return assertions.filter(function (item) { return item; }).length === assertions.length;
        };
        /**
         * \@name onPasteCallback
         * @param data
         */
        _this.onPasteCallback = function (data) { return Object(__WEBPACK_IMPORTED_MODULE_4_tslib__["b" /* __awaiter */])(_this, void 0, void 0, function () {
            var _this = this;
            var getText, text, requests, resetInput;
            return __generator(this, function (_b) {
                getText = function () {
                    var /** @type {?} */ isIE = Boolean(((window)).clipboardData);
                    var /** @type {?} */ clipboardData = isIE ? (((window)).clipboardData) : data.clipboardData;
                    var /** @type {?} */ type = isIE ? 'Text' : 'text/plain';
                    return clipboardData.getData(type) || '';
                };
                text = getText();
                requests = text
                    .split(this.pasteSplitPattern)
                    .map(function (item) {
                    var /** @type {?} */ tag = _this.createTag(item);
                    _this.setInputValue(tag[_this.displayBy]);
                    return _this.onAddingRequested(false, tag);
                });
                resetInput = function () { return setTimeout(function () { return _this.setInputValue(''); }, 50); };
                Promise.all(requests).then(function () {
                    _this.onPaste.emit(text);
                    resetInput();
                })
                    .catch(resetInput);
                return [2 /*return*/];
            });
        }); };
        return _this;
        var _b;
    }
    Object.defineProperty(TagInputComponent.prototype, "inputText", {
        /**
         * \@name inputText
         * @return {?}
         */
        get: function () {
            return this.inputTextValue;
        },
        /**
         * \@name inputText
         * @param {?} text
         * @return {?}
         */
        set: function (text) {
            this.inputTextValue = text;
            this.inputTextChange.emit(text);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TagInputComponent.prototype, "tabindexAttr", {
        /**
         * @desc removes the tab index if it is set - it will be passed through to the input
         * \@name tabindexAttr
         * @return {?}
         */
        get: function () {
            return this.tabindex !== '' ? '-1' : '';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * \@name ngAfterViewInit
     * @return {?}
     */
    TagInputComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        // set up listeners
        this.setUpKeypressListeners();
        this.setupSeparatorKeysListener();
        this.setUpInputKeydownListeners();
        if (this.onTextChange.observers.length) {
            this.setUpTextChangeSubscriber();
        }
        // if clear on blur is set to true, subscribe to the event and clear the text's form
        if (this.clearOnBlur || this.addOnBlur) {
            this.setUpOnBlurSubscriber();
        }
        // if addOnPaste is set to true, register the handler and add items
        if (this.addOnPaste) {
            this.setUpOnPasteListener();
        }
        var /** @type {?} */ statusChanges$ = this.inputForm.form.statusChanges;
        statusChanges$.pipe(Object(__WEBPACK_IMPORTED_MODULE_8_rxjs_operators__["filter"])(function (status) { return status !== 'PENDING'; })).subscribe(function () {
            _this.errors = _this.inputForm.getErrorMessages(_this.errorMessages);
        });
        this.isProgressBarVisible$ = statusChanges$.pipe(Object(__WEBPACK_IMPORTED_MODULE_8_rxjs_operators__["map"])(function (status) {
            return status === 'PENDING' || _this.isLoading;
        }));
        // if hideForm is set to true, remove the input
        if (this.hideForm) {
            this.inputForm.destroy();
        }
    };
    /**
     * \@name ngOnInit
     * @return {?}
     */
    TagInputComponent.prototype.ngOnInit = function () {
        // if the number of items specified in the model is > of the value of maxItems
        // degrade gracefully and let the max number of items to be the number of items in the model
        // though, warn the user.
        var /** @type {?} */ hasReachedMaxItems = this.maxItems !== undefined &&
            this.items &&
            this.items.length > this.maxItems;
        if (hasReachedMaxItems) {
            this.maxItems = this.items.length;
            console.warn(MAX_ITEMS_WARNING);
        }
        // Setting editable to false to fix problem with tags in IE still being editable when
        // onlyFromAutocomplete is true
        this.editable = this.onlyFromAutocomplete ? false : this.editable;
        this.setAnimationMetadata();
    };
    /**
     * \@name onRemoveRequested
     * @param {?} tag
     * @param {?} index
     * @return {?}
     */
    TagInputComponent.prototype.onRemoveRequested = function (tag, index) {
        var _this = this;
        return new Promise(function (resolve) {
            var /** @type {?} */ subscribeFn = function (model) {
                _this.removeItem(model, index);
                resolve(tag);
            };
            _this.onRemoving ?
                _this.onRemoving(tag)
                    .pipe(Object(__WEBPACK_IMPORTED_MODULE_8_rxjs_operators__["first"])())
                    .subscribe(subscribeFn) : subscribeFn(tag);
        });
    };
    /**
     * \@name onAddingRequested
     * @param {?} fromAutocomplete {boolean}
     * @param {?} tag {TagModel}
     * @param {?=} index
     * @return {?}
     */
    TagInputComponent.prototype.onAddingRequested = function (fromAutocomplete, tag, index) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var /** @type {?} */ subscribeFn = function (model) {
                return _this
                    .addItem(fromAutocomplete, model, index)
                    .then(resolve)
                    .catch(reject);
            };
            return _this.onAdding ?
                _this.onAdding(tag)
                    .pipe(Object(__WEBPACK_IMPORTED_MODULE_8_rxjs_operators__["first"])())
                    .subscribe(subscribeFn, reject) : subscribeFn(tag);
        });
    };
    /**
     * \@name selectItem
     * @desc selects item passed as parameter as the selected tag
     * @param {?} item
     * @param {?=} emit
     * @return {?}
     */
    TagInputComponent.prototype.selectItem = function (item, emit) {
        if (emit === void 0) { emit = true; }
        var /** @type {?} */ isReadonly = item && typeof item !== 'string' && item["readonly"];
        if (isReadonly || this.selectedTag === item) {
            return;
        }
        this.selectedTag = item;
        if (emit) {
            this.onSelect.emit(item);
        }
    };
    /**
     * \@name fireEvents
     * @desc goes through the list of the events for a given eventName, and fires each of them
     * @param {?} eventName
     * @param {?=} $event
     * @return {?}
     */
    TagInputComponent.prototype.fireEvents = function (eventName, $event) {
        var _this = this;
        this.listeners[eventName].forEach(function (listener) { return listener.call(_this, $event); });
    };
    /**
     * \@name handleKeydown
     * @desc handles action when the user hits a keyboard key
     * @param {?} data
     * @return {?}
     */
    TagInputComponent.prototype.handleKeydown = function (data) {
        var /** @type {?} */ event = data.event;
        var /** @type {?} */ key = event.keyCode || event.which;
        var /** @type {?} */ shiftKey = event.shiftKey || false;
        switch (KEY_PRESS_ACTIONS[key]) {
            case ACTIONS_KEYS.DELETE:
                if (this.selectedTag && this.removable) {
                    var /** @type {?} */ index = this.items.indexOf(this.selectedTag);
                    this.onRemoveRequested(this.selectedTag, index);
                }
                break;
            case ACTIONS_KEYS.SWITCH_PREV:
                this.moveToTag(data.model, PREV);
                break;
            case ACTIONS_KEYS.SWITCH_NEXT:
                this.moveToTag(data.model, NEXT);
                break;
            case ACTIONS_KEYS.TAB:
                if (shiftKey) {
                    if (this.isFirstTag(data.model)) {
                        return;
                    }
                    this.moveToTag(data.model, PREV);
                }
                else {
                    if (this.isLastTag(data.model) && (this.disable || this.maxItemsReached)) {
                        return;
                    }
                    this.moveToTag(data.model, NEXT);
                }
                break;
            default:
                return;
        }
        // prevent default behaviour
        event.preventDefault();
    };
    /**
     * \@name setInputValue
     * @param {?} value
     * @param {?=} emitEvent
     * @return {?}
     */
    TagInputComponent.prototype.setInputValue = function (value, emitEvent) {
        if (emitEvent === void 0) { emitEvent = true; }
        var /** @type {?} */ control = this.getControl();
        // update form value with the transformed item
        control.setValue(value, {
            emitEvent: emitEvent
        });
    };
    /**
     * \@name getControl
     * @return {?}
     */
    TagInputComponent.prototype.getControl = function () {
        return /** @type {?} */ (this.inputForm.value);
    };
    /**
     * \@name focus
     * @param {?=} applyFocus
     * @param {?=} displayAutocomplete
     * @return {?}
     */
    TagInputComponent.prototype.focus = function (applyFocus, displayAutocomplete) {
        if (applyFocus === void 0) { applyFocus = false; }
        if (displayAutocomplete === void 0) { displayAutocomplete = false; }
        if (this.dragProvider.getState('dragging')) {
            return;
        }
        this.selectItem(undefined, false);
        if (applyFocus) {
            this.inputForm.focus();
            this.onFocus.emit(this.formValue);
        }
    };
    /**
     * \@name blur
     * @return {?}
     */
    TagInputComponent.prototype.blur = function () {
        this.onTouched();
        this.onBlur.emit(this.formValue);
    };
    /**
     * \@name hasErrors
     * @return {?}
     */
    TagInputComponent.prototype.hasErrors = function () {
        return this.inputForm && this.inputForm.hasErrors();
    };
    /**
     * \@name isInputFocused
     * @return {?}
     */
    TagInputComponent.prototype.isInputFocused = function () {
        return this.inputForm && this.inputForm.isInputFocused();
    };
    /**
     * - this is the one way I found to tell if the template has been passed and it is not
     * the template for the menu item
     * \@name hasCustomTemplate
     * @return {?}
     */
    TagInputComponent.prototype.hasCustomTemplate = function () {
        var /** @type {?} */ template = this.templates ? this.templates.first : undefined;
        var /** @type {?} */ menuTemplate = this.dropdown && this.dropdown.templates ?
            this.dropdown.templates.first : undefined;
        return Boolean(template && template !== menuTemplate);
    };
    Object.defineProperty(TagInputComponent.prototype, "maxItemsReached", {
        /**
         * \@name maxItemsReached
         * @return {?}
         */
        get: function () {
            return this.maxItems !== undefined &&
                this.items.length >= this.maxItems;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TagInputComponent.prototype, "formValue", {
        /**
         * \@name formValue
         * @return {?}
         */
        get: function () {
            var /** @type {?} */ form = this.inputForm.value;
            return form ? form.value : '';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 3
     * \@name onDragStarted
     * @param {?} event
     * @param {?} tag
     * @param {?} index
     * @return {?}
     */
    TagInputComponent.prototype.onDragStarted = function (event, tag, index) {
        event.stopPropagation();
        var /** @type {?} */ item = ({ zone: this.dragZone, tag: tag, index: index });
        this.dragProvider.setSender(this);
        this.dragProvider.setDraggedItem(event, item);
        this.dragProvider.setState({ dragging: true, index: index });
    };
    /**
     * \@name onDragOver
     * @param {?} event
     * @param {?=} index
     * @return {?}
     */
    TagInputComponent.prototype.onDragOver = function (event, index) {
        this.dragProvider.setState({ dropping: true });
        this.dragProvider.setReceiver(this);
        event.preventDefault();
    };
    /**
     * \@name onTagDropped
     * @param {?} event
     * @param {?=} index
     * @return {?}
     */
    TagInputComponent.prototype.onTagDropped = function (event, index) {
        var /** @type {?} */ item = this.dragProvider.getDraggedItem(event);
        if (item.zone !== this.dragZone) {
            return;
        }
        this.dragProvider.onTagDropped(item.tag, item.index, index);
        event.preventDefault();
        event.stopPropagation();
    };
    /**
     * \@name isDropping
     * @return {?}
     */
    TagInputComponent.prototype.isDropping = function () {
        var /** @type {?} */ isReceiver = this.dragProvider.receiver === this;
        var /** @type {?} */ isDropping = this.dragProvider.getState('dropping');
        return Boolean(isReceiver && isDropping);
    };
    /**
     * \@name onTagBlurred
     * @param {?} changedElement {TagModel}
     * @param {?} index {number}
     * @return {?}
     */
    TagInputComponent.prototype.onTagBlurred = function (changedElement, index) {
        this.items[index] = changedElement;
        this.blur();
    };
    /**
     * \@name trackBy
     * @param {?} index
     * @param {?} item
     * @return {?}
     */
    TagInputComponent.prototype.trackBy = function (index, item) {
        return item[this.identifyBy];
    };
    /**
     * \@name updateEditedTag
     * @param {?} __0
     * @return {?}
     */
    TagInputComponent.prototype.updateEditedTag = function (_b) {
        var tag = _b.tag, index = _b.index;
        this.onTagEdited.emit(tag);
    };
    /**
     * \@name moveToTag
     * @param {?} item
     * @param {?} direction
     * @return {?}
     */
    TagInputComponent.prototype.moveToTag = function (item, direction) {
        var /** @type {?} */ isLast = this.isLastTag(item);
        var /** @type {?} */ isFirst = this.isFirstTag(item);
        var /** @type {?} */ stopSwitch = (direction === NEXT && isLast) ||
            (direction === PREV && isFirst);
        if (stopSwitch) {
            this.focus(true);
            return;
        }
        var /** @type {?} */ offset = direction === NEXT ? 1 : -1;
        var /** @type {?} */ index = this.getTagIndex(item) + offset;
        var /** @type {?} */ tag = this.getTagAtIndex(index);
        return tag.select.call(tag);
    };
    /**
     * \@name isFirstTag
     * @param {?} item {TagModel}
     * @return {?}
     */
    TagInputComponent.prototype.isFirstTag = function (item) {
        return this.tags.first.model === item;
    };
    /**
     * \@name isLastTag
     * @param {?} item {TagModel}
     * @return {?}
     */
    TagInputComponent.prototype.isLastTag = function (item) {
        return this.tags.last.model === item;
    };
    /**
     * \@name getTagIndex
     * @param {?} item
     * @return {?}
     */
    TagInputComponent.prototype.getTagIndex = function (item) {
        var /** @type {?} */ tags = this.tags.toArray();
        return tags.findIndex(function (tag) { return tag.model === item; });
    };
    /**
     * \@name getTagAtIndex
     * @param {?} index
     * @return {?}
     */
    TagInputComponent.prototype.getTagAtIndex = function (index) {
        var /** @type {?} */ tags = this.tags.toArray();
        return tags[index];
    };
    /**
     * \@name removeItem
     * @desc removes an item from the array of the model
     * @param {?} tag {TagModel}
     * @param {?} index {number}
     * @return {?}
     */
    TagInputComponent.prototype.removeItem = function (tag, index) {
        this.items = this.getItemsWithout(index);
        // if the removed tag was selected, set it as undefined
        if (this.selectedTag === tag) {
            this.selectItem(undefined, false);
        }
        // focus input
        this.focus(true, false);
        // emit remove event
        this.onRemove.emit(tag);
    };
    /**
     * \@name addItem
     * @desc adds the current text model to the items array
     * @param {?=} fromAutocomplete
     * @param {?=} item
     * @param {?=} index
     * @return {?}
     */
    TagInputComponent.prototype.addItem = function (fromAutocomplete, item, index) {
        var _this = this;
        if (fromAutocomplete === void 0) { fromAutocomplete = false; }
        var /** @type {?} */ model = this.getItemDisplay(item);
        var /** @type {?} */ tag = this.createTag(item);
        return new Promise(function (resolve, reject) {
            /**
             * \@name reset
             */
            var /** @type {?} */ reset = function () {
                // reset control and focus input
                _this.setInputValue('');
                // focus input
                _this.focus(true, false);
                resolve(model);
            };
            var /** @type {?} */ appendItem = function () {
                _this.appendTag(tag, index);
                // emit event
                _this.onAdd.emit(tag);
                if (!_this.dropdown) {
                    return;
                }
                _this.dropdown.hide();
                if (_this.dropdown.showDropdownIfEmpty) {
                    _this.dropdown.show();
                }
            };
            var /** @type {?} */ status = _this.inputForm.form.status;
            var /** @type {?} */ isTagValid = _this.isTagValid(tag, fromAutocomplete);
            var /** @type {?} */ onValidationError = function () {
                _this.onValidationError.emit(tag);
                return reject();
            };
            if (status === 'VALID' && isTagValid) {
                appendItem();
                return reset();
            }
            if (status === 'INVALID' || !isTagValid) {
                return onValidationError();
            }
            if (status === 'PENDING') {
                var /** @type {?} */ statusUpdate$ = _this.inputForm.form.statusChanges;
                return statusUpdate$
                    .pipe(Object(__WEBPACK_IMPORTED_MODULE_8_rxjs_operators__["filter"])(function (statusUpdate) { return statusUpdate !== 'PENDING'; }), Object(__WEBPACK_IMPORTED_MODULE_8_rxjs_operators__["first"])())
                    .subscribe(function (statusUpdate) {
                    if (statusUpdate === 'VALID' && isTagValid) {
                        appendItem();
                        resolve();
                    }
                    else {
                        onValidationError();
                    }
                });
            }
        });
    };
    /**
     * \@name setupSeparatorKeysListener
     * @return {?}
     */
    TagInputComponent.prototype.setupSeparatorKeysListener = function () {
        var _this = this;
        var /** @type {?} */ useSeparatorKeys = this.separatorKeyCodes.length > 0 || this.separatorKeys.length > 0;
        var /** @type {?} */ listener = function ($event) {
            var /** @type {?} */ hasKeyCode = _this.separatorKeyCodes.indexOf($event.keyCode) >= 0;
            var /** @type {?} */ hasKey = _this.separatorKeys.indexOf($event.key) >= 0;
            if (hasKeyCode || hasKey) {
                $event.preventDefault();
                _this.onAddingRequested(false, _this.formValue)
                    .catch(function () { });
            }
        };
        listen.call(this, KEYDOWN, listener, useSeparatorKeys);
    };
    /**
     * \@name setUpKeypressListeners
     * @return {?}
     */
    TagInputComponent.prototype.setUpKeypressListeners = function () {
        var _this = this;
        var /** @type {?} */ listener = function ($event) {
            var /** @type {?} */ isCorrectKey = $event.keyCode === 37 || $event.keyCode === 8;
            if (isCorrectKey &&
                !_this.formValue &&
                _this.items.length) {
                _this.tags.last.select.call(_this.tags.last);
            }
        };
        // setting up the keypress listeners
        listen.call(this, KEYDOWN, listener);
    };
    /**
     * \@name setUpKeydownListeners
     * @return {?}
     */
    TagInputComponent.prototype.setUpInputKeydownListeners = function () {
        var _this = this;
        this.inputForm.onKeydown.subscribe(function (event) {
            _this.fireEvents('keydown', event);
            if (event.key === 'Backspace' && _this.formValue.trim() === '') {
                event.preventDefault();
            }
        });
    };
    /**
     * \@name setUpOnPasteListener
     * @return {?}
     */
    TagInputComponent.prototype.setUpOnPasteListener = function () {
        var _this = this;
        var /** @type {?} */ input = this.inputForm.input.nativeElement;
        // attach listener to input
        this.renderer.listen(input, 'paste', function (event) {
            _this.onPasteCallback(event);
            event.preventDefault();
            return true;
        });
    };
    /**
     * \@name setUpTextChangeSubscriber
     * @return {?}
     */
    TagInputComponent.prototype.setUpTextChangeSubscriber = function () {
        var _this = this;
        this.inputForm.form
            .valueChanges
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_8_rxjs_operators__["debounceTime"])(this.onTextChangeDebounce), Object(__WEBPACK_IMPORTED_MODULE_8_rxjs_operators__["mapTo"])(this.formValue))
            .subscribe(function (value) {
            _this.onTextChange.emit(value);
        });
    };
    /**
     * \@name setUpOnBlurSubscriber
     * @return {?}
     */
    TagInputComponent.prototype.setUpOnBlurSubscriber = function () {
        var _this = this;
        var /** @type {?} */ filterFn = function () {
            var /** @type {?} */ isVisible = _this.dropdown && _this.dropdown.isVisible;
            return !isVisible && !!_this.formValue;
        };
        this.inputForm
            .onBlur
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_8_rxjs_operators__["debounceTime"])(100), Object(__WEBPACK_IMPORTED_MODULE_8_rxjs_operators__["filter"])(filterFn))
            .subscribe(function () {
            var /** @type {?} */ reset = function () { return _this.setInputValue(''); };
            if (_this.addOnBlur) {
                return _this
                    .onAddingRequested(false, _this.formValue)
                    .then(reset);
            }
            reset();
        });
    };
    /**
     * \@name findDupe
     * @param {?} tag
     * @param {?} isFromAutocomplete
     * @return {?}
     */
    TagInputComponent.prototype.findDupe = function (tag, isFromAutocomplete) {
        var _this = this;
        var /** @type {?} */ identifyBy = isFromAutocomplete ? this.dropdown.identifyBy : this.identifyBy;
        var /** @type {?} */ id = tag[identifyBy];
        return this.items.find(function (item) { return _this.getItemValue(item) === id; });
    };
    /**
     * \@name setAnimationMetadata
     * @return {?}
     */
    TagInputComponent.prototype.setAnimationMetadata = function () {
        this.animationMetadata = {
            value: 'in',
            params: Object.assign({}, this.animationDuration)
        };
    };
    return TagInputComponent;
}(TagInputAccessor));
TagInputComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                selector: 'tag-input',
                providers: [CUSTOM_ACCESSOR],
                styles: [".dark tag:focus {\n  -webkit-box-shadow: 0 0 0 1px #323232;\n          box-shadow: 0 0 0 1px #323232; }\n\n.ng2-tag-input.bootstrap3-info {\n  background-color: #fff;\n  display: inline-block;\n  color: #555;\n  vertical-align: middle;\n  max-width: 100%;\n  height: 42px;\n  line-height: 44px; }\n\n.ng2-tag-input.bootstrap3-info input {\n  border: none;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  outline: none;\n  background-color: transparent;\n  padding: 0 6px;\n  margin: 0;\n  width: auto;\n  max-width: inherit; }\n\n.ng2-tag-input.bootstrap3-info .form-control input::-moz-placeholder {\n  color: #777;\n  opacity: 1; }\n\n.ng2-tag-input.bootstrap3-info .form-control input:-ms-input-placeholder {\n  color: #777; }\n\n.ng2-tag-input.bootstrap3-info .form-control input::-webkit-input-placeholder {\n  color: #777; }\n\n.ng2-tag-input.bootstrap3-info input:focus {\n  border: none;\n  -webkit-box-shadow: none;\n          box-shadow: none; }\n\n.bootstrap3-info.ng2-tag-input.ng2-tag-input--focused {\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.4);\n          box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.4);\n  border: 1px solid #ccc; }\n\n.bootstrap3-info.ng2-tag-input.ng2-tag-input--invalid {\n  -webkit-box-shadow: inset 0 1px 1px #d9534f;\n          box-shadow: inset 0 1px 1px #d9534f; }\n\n.ng2-tag-input {\n  display: block;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  position: relative;\n  -webkit-transition: all 0.25s;\n  transition: all 0.25s;\n  padding: 0.25rem 0;\n  min-height: 32px;\n  cursor: text;\n  border-bottom: 2px solid #efefef; }\n  .ng2-tag-input:focus {\n    outline: 0; }\n  .ng2-tag-input.ng2-tag-input--dropping {\n    opacity: 0.7; }\n  .ng2-tag-input.ng2-tag-input--focused {\n    border-bottom: 2px solid #2196F3; }\n  .ng2-tag-input.ng2-tag-input--invalid {\n    border-bottom: 2px solid #f44336; }\n  .ng2-tag-input.ng2-tag-input--loading {\n    border: none; }\n  .ng2-tag-input.ng2-tag-input--disabled {\n    opacity: 0.5;\n    cursor: not-allowed; }\n  .ng2-tag-input form {\n    margin: 0.1em 0; }\n  .ng2-tag-input .ng2-tags-container {\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n\n.minimal.ng2-tag-input {\n  display: block;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  position: relative;\n  cursor: text;\n  border-bottom: 1px solid transparent; }\n  .minimal.ng2-tag-input:focus {\n    outline: 0; }\n  .minimal.ng2-tag-input.ng2-tag-input--dropping {\n    opacity: 0.7; }\n  .minimal.ng2-tag-input.ng2-tag-input--loading {\n    border: none; }\n  .minimal.ng2-tag-input.ng2-tag-input--disabled {\n    opacity: 0.5;\n    cursor: not-allowed; }\n  .minimal.ng2-tag-input .ng2-tags-container {\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n\n.dark.ng2-tag-input {\n  display: block;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  position: relative;\n  cursor: text;\n  border-bottom: 2px solid #444; }\n  .dark.ng2-tag-input:focus {\n    outline: 0; }\n  .dark.ng2-tag-input.ng2-tag-input--dropping {\n    opacity: 0.7; }\n  .dark.ng2-tag-input.ng2-tag-input--loading {\n    border: none; }\n  .dark.ng2-tag-input.ng2-tag-input--disabled {\n    opacity: 0.5;\n    cursor: not-allowed; }\n  .dark.ng2-tag-input .ng2-tags-container {\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n\n.bootstrap.ng2-tag-input {\n  display: block;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  position: relative;\n  cursor: text;\n  border-bottom: 2px solid #efefef; }\n  .bootstrap.ng2-tag-input:focus {\n    outline: 0; }\n  .bootstrap.ng2-tag-input.ng2-tag-input--dropping {\n    opacity: 0.7; }\n  .bootstrap.ng2-tag-input.ng2-tag-input--focused {\n    border-bottom: 2px solid #0275d8; }\n  .bootstrap.ng2-tag-input.ng2-tag-input--invalid {\n    border-bottom: 2px solid #d9534f; }\n  .bootstrap.ng2-tag-input.ng2-tag-input--loading {\n    border: none; }\n  .bootstrap.ng2-tag-input.ng2-tag-input--disabled {\n    opacity: 0.5;\n    cursor: not-allowed; }\n  .bootstrap.ng2-tag-input .ng2-tags-container {\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n\n.bootstrap3-info.ng2-tag-input {\n  display: block;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  position: relative;\n  padding: 4px;\n  cursor: text;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n          box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  border-radius: 4px; }\n  .bootstrap3-info.ng2-tag-input:focus {\n    outline: 0; }\n  .bootstrap3-info.ng2-tag-input.ng2-tag-input--dropping {\n    opacity: 0.7; }\n  .bootstrap3-info.ng2-tag-input.ng2-tag-input--invalid {\n    border-bottom: 1px solid #d9534f; }\n  .bootstrap3-info.ng2-tag-input.ng2-tag-input--loading {\n    border: none; }\n  .bootstrap3-info.ng2-tag-input.ng2-tag-input--disabled {\n    opacity: 0.5;\n    cursor: not-allowed; }\n  .bootstrap3-info.ng2-tag-input form {\n    margin: 0.1em 0; }\n  .bootstrap3-info.ng2-tag-input .ng2-tags-container {\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n\n.error-message {\n  font-size: 0.8em;\n  color: #f44336;\n  margin: 0.5em 0 0 0; }\n\n.bootstrap .error-message {\n  color: #d9534f; }\n\n.progress-bar, .progress-bar:before {\n  height: 2px;\n  width: 100%;\n  margin: 0; }\n\n.progress-bar {\n  background-color: #2196F3;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: absolute;\n  bottom: 0; }\n\n.progress-bar:before {\n  background-color: #82c4f8;\n  content: '';\n  -webkit-animation: running-progress 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n  animation: running-progress 2s cubic-bezier(0.4, 0, 0.2, 1) infinite; }\n\n@-webkit-keyframes running-progress {\n  0% {\n    margin-left: 0;\n    margin-right: 100%; }\n  50% {\n    margin-left: 25%;\n    margin-right: 0; }\n  100% {\n    margin-left: 100%;\n    margin-right: 0; } }\n\n@keyframes running-progress {\n  0% {\n    margin-left: 0;\n    margin-right: 100%; }\n  50% {\n    margin-left: 25%;\n    margin-right: 0; }\n  100% {\n    margin-left: 100%;\n    margin-right: 0; } }\n\ntag {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  font-family: \"Roboto\", \"Helvetica Neue\", sans-serif;\n  font-weight: 400;\n  font-size: 1em;\n  letter-spacing: 0.05rem;\n  color: #444;\n  border-radius: 16px;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n  margin: 0.1rem 0.3rem 0.1rem 0;\n  padding: 0.08rem 0.45rem;\n  height: 32px;\n  line-height: 34px;\n  background: #efefef;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  overflow: hidden;\n  outline: 0;\n  cursor: pointer;\n  position: relative; }\n  tag:not(.readonly):not(.tag--editing):focus {\n    background: #2196F3;\n    color: #fff;\n    -webkit-box-shadow: 0 2px 3px 1px #d4d1d1;\n            box-shadow: 0 2px 3px 1px #d4d1d1; }\n  tag:not(.readonly):not(.tag--editing):active {\n    background: #0d8aee;\n    color: #fff;\n    -webkit-box-shadow: 0 2px 3px 1px #d4d1d1;\n            box-shadow: 0 2px 3px 1px #d4d1d1; }\n  tag:not(:focus):not(.tag--editing):not(:active):not(.readonly):hover {\n    background: #e2e2e2;\n    color: initial;\n    -webkit-box-shadow: 0 2px 3px 1px #d4d1d1;\n            box-shadow: 0 2px 3px 1px #d4d1d1; }\n  tag.readonly {\n    cursor: default; }\n  tag.readonly:focus, tag:focus {\n    outline: 0; }\n  tag.tag--editing {\n    background-color: #fff;\n    border: 1px solid #ccc;\n    cursor: text; }\n\n.minimal tag {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  border-radius: 0;\n  background: #f9f9f9;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  overflow: hidden;\n  outline: 0;\n  cursor: pointer;\n  position: relative; }\n  .minimal tag:not(.readonly):not(.tag--editing):focus {\n    background: #d0d0d0;\n    color: initial; }\n  .minimal tag:not(.readonly):not(.tag--editing):active {\n    background: #d0d0d0;\n    color: initial; }\n  .minimal tag:not(:focus):not(.tag--editing):not(:active):not(.readonly):hover {\n    background: #ececec; }\n  .minimal tag.readonly {\n    cursor: default; }\n  .minimal tag.readonly:focus, .minimal tag:focus {\n    outline: 0; }\n  .minimal tag.tag--editing {\n    cursor: text; }\n\n.dark tag {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  color: #f9f9f9;\n  border-radius: 3px;\n  background: #444;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  overflow: hidden;\n  outline: 0;\n  cursor: pointer;\n  position: relative; }\n  .dark tag:not(.readonly):not(.tag--editing):focus {\n    background: #efefef;\n    color: #444; }\n  .dark tag:not(:focus):not(.tag--editing):not(:active):not(.readonly):hover {\n    background: #2b2b2b;\n    color: #f9f9f9; }\n  .dark tag.readonly {\n    cursor: default; }\n  .dark tag.readonly:focus, .dark tag:focus {\n    outline: 0; }\n  .dark tag.tag--editing {\n    cursor: text; }\n\n.bootstrap tag {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  color: #f9f9f9;\n  border-radius: 0.25rem;\n  background: #0275d8;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  overflow: hidden;\n  outline: 0;\n  cursor: pointer;\n  position: relative; }\n  .bootstrap tag:not(.readonly):not(.tag--editing):focus {\n    background: #025aa5; }\n  .bootstrap tag:not(.readonly):not(.tag--editing):active {\n    background: #025aa5; }\n  .bootstrap tag:not(:focus):not(.tag--editing):not(:active):not(.readonly):hover {\n    background: #0267bf;\n    color: #f9f9f9; }\n  .bootstrap tag.readonly {\n    cursor: default; }\n  .bootstrap tag.readonly:focus, .bootstrap tag:focus {\n    outline: 0; }\n  .bootstrap tag.tag--editing {\n    cursor: text; }\n\n.bootstrap3-info tag {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  font-family: inherit;\n  font-weight: 400;\n  font-size: 95%;\n  color: #fff;\n  border-radius: 0.25em;\n  background: #5bc0de;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  overflow: hidden;\n  outline: 0;\n  cursor: pointer;\n  position: relative;\n  padding: .25em .6em;\n  text-align: center;\n  white-space: nowrap; }\n  .bootstrap3-info tag:not(.readonly):not(.tag--editing):focus {\n    background: #28a1c5; }\n  .bootstrap3-info tag:not(.readonly):not(.tag--editing):active {\n    background: #28a1c5; }\n  .bootstrap3-info tag:not(:focus):not(.tag--editing):not(:active):not(.readonly):hover {\n    background: #46b8da;\n    color: #fff; }\n  .bootstrap3-info tag.readonly {\n    cursor: default; }\n  .bootstrap3-info tag.readonly:focus, .bootstrap3-info tag:focus {\n    outline: 0; }\n  .bootstrap3-info tag.tag--editing {\n    cursor: text; }\n\n:host {\n  display: block; }\n"],
                template: "<!-- CONTAINER -->\n\n<div ngClass=\"ng2-tag-input {{ theme || '' }}\"\n     (click)=\"focus(true, false)\"\n     [attr.tabindex]=\"-1\"\n\n     (drop)=\"dragZone ? onTagDropped($event, undefined) : undefined\"\n     (dragenter)=\"dragZone ? onDragOver($event) : undefined\"\n     (dragover)=\"dragZone ? onDragOver($event) : undefined\"\n     (dragend)=\"dragZone ? dragProvider.onDragEnd() : undefined\"\n\n     [class.ng2-tag-input--dropping]=\"isDropping()\"\n     [class.ng2-tag-input--disabled]=\"disable\"\n     [class.ng2-tag-input--loading]=\"isLoading\"\n     [class.ng2-tag-input--invalid]=\"hasErrors()\"\n     [class.ng2-tag-input--focused]=\"isInputFocused()\">\n\n    <!-- TAGS -->\n    <div class=\"ng2-tags-container\">\n        <tag *ngFor=\"let item of items; let i = index; trackBy: trackBy\"\n\n             (onSelect)=\"selectItem(item)\"\n             (onRemove)=\"onRemoveRequested(item, i)\"\n             (onKeyDown)=\"handleKeydown($event)\"\n             (onTagEdited)=\"updateEditedTag($event)\"\n             (onBlur)=\"onTagBlurred($event, i)\"\n             draggable=\"{{ editable }}\"\n\n             (dragstart)=\"dragZone ? onDragStarted($event, item, i) : undefined\"\n             (drop)=\"dragZone ? onTagDropped($event, i) : undefined\"\n             (dragenter)=\"dragZone ? onDragOver($event) : undefined\"\n             (dragover)=\"dragZone ? onDragOver($event, i) : undefined\"\n             (dragleave)=\"dragZone ? dragProvider.onDragEnd() : undefined\"\n\n             [canAddTag]=\"isTagValid\"\n             [attr.tabindex]=\"0\"\n             [disabled]=\"disable\"\n             [@animation]=\"animationMetadata\"\n             [hasRipple]=\"ripple\"\n             [index]=\"i\"\n             [removable]=\"removable\"\n             [editable]=\"editable\"\n             [displayBy]=\"displayBy\"\n             [identifyBy]=\"identifyBy\"\n             [template]=\"!!hasCustomTemplate() ? templates.first : undefined\"\n             [draggable]=\"dragZone\"\n             [model]=\"item\">\n        </tag>\n\n        <tag-input-form\n            (onSubmit)=\"onAddingRequested(false, formValue)\"\n            (onBlur)=\"blur()\"\n            (click)=\"dropdown ? dropdown.show() : undefined\"\n            (onKeydown)=\"fireEvents('keydown', $event)\"\n            (onKeyup)=\"fireEvents('keyup', $event)\"\n\n            [(inputText)]=\"inputText\"\n            [disabled]=\"disable\"\n            [validators]=\"validators\"\n            [asyncValidators]=\"asyncValidators\"\n            [hidden]=\"maxItemsReached\"\n            [placeholder]=\"items.length ? placeholder : secondaryPlaceholder\"\n            [inputClass]=\"inputClass\"\n            [inputId]=\"inputId\"\n            [tabindex]=\"tabindex\">\n        </tag-input-form>\n    </div>\n\n    <div class=\"progress-bar\" *ngIf=\"isProgressBarVisible$ | async\"></div>\n</div>\n\n<!-- ERRORS -->\n<div *ngIf=\"hasErrors()\" class=\"error-messages {{ theme || '' }}\">\n    <p *ngFor=\"let error of errors\" class=\"error-message\">\n        <span>{{ error }}</span>\n    </p>\n</div>\n\n<ng-content></ng-content>\n",
                animations: animations$1
            },] },
];
/** @nocollapse */
TagInputComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Renderer2 */], },
    { type: DragProvider, },
]; };
TagInputComponent.propDecorators = {
    "separatorKeys": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    "separatorKeyCodes": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    "placeholder": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    "secondaryPlaceholder": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    "maxItems": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    "validators": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    "asyncValidators": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    "onlyFromAutocomplete": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    "errorMessages": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    "theme": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    "onTextChangeDebounce": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    "inputId": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    "inputClass": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    "clearOnBlur": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    "hideForm": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    "addOnBlur": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    "addOnPaste": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    "pasteSplitPattern": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    "blinkIfDupe": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    "removable": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    "editable": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    "allowDupes": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    "modelAsStrings": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    "trimTags": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    "inputText": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    "ripple": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    "tabindex": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    "disable": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    "dragZone": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    "onRemoving": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    "onAdding": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    "animationDuration": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    "onAdd": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */] },],
    "onRemove": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */] },],
    "onSelect": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */] },],
    "onFocus": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */] },],
    "onBlur": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */] },],
    "onTextChange": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */] },],
    "onPaste": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */] },],
    "onValidationError": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */] },],
    "onTagEdited": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */] },],
    "dropdown": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ContentChild */], args: [TagInputDropdown,] },],
    "templates": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* ContentChildren */], args: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* TemplateRef */], { descendants: false },] },],
    "inputForm": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */], args: [TagInputForm,] },],
    "tags": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChildren */], args: [TagComponent,] },],
    "inputTextChange": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */] },],
    "tabindexAttr": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostBinding */], args: ['attr.tabindex',] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var DragProvider = /** @class */ (function () {
    function DragProvider() {
        this.state = {
            dragging: false,
            dropping: false,
            index: undefined
        };
    }
    /**
     * \@name setDraggedItem
     * @param {?} event
     * @param {?} tag
     * @return {?}
     */
    DragProvider.prototype.setDraggedItem = function (event, tag) {
        event.dataTransfer.setData(DRAG_AND_DROP_KEY, JSON.stringify(tag));
    };
    /**
     * \@name getDraggedItem
     * @param {?} event
     * @return {?}
     */
    DragProvider.prototype.getDraggedItem = function (event) {
        var /** @type {?} */ data = event.dataTransfer.getData(DRAG_AND_DROP_KEY);
        return /** @type {?} */ (JSON.parse(data));
    };
    /**
     * \@name setSender
     * @param {?} sender
     * @return {?}
     */
    DragProvider.prototype.setSender = function (sender) {
        this.sender = sender;
    };
    /**
     * \@name setReceiver
     * @param {?} receiver
     * @return {?}
     */
    DragProvider.prototype.setReceiver = function (receiver) {
        this.receiver = receiver;
    };
    /**
     * \@name onTagDropped
     * @param {?} tag
     * @param {?} indexDragged
     * @param {?=} indexDropped
     * @return {?}
     */
    DragProvider.prototype.onTagDropped = function (tag, indexDragged, indexDropped) {
        this.onDragEnd();
        this.sender.onRemoveRequested(tag, indexDragged);
        this.receiver.onAddingRequested(false, tag, indexDropped);
    };
    /**
     * \@name setState
     * @param {?} state
     * @return {?}
     */
    DragProvider.prototype.setState = function (state$$1) {
        this.state = Object.assign({}, this.state, state$$1);
    };
    /**
     * \@name getState
     * @param {?=} key
     * @return {?}
     */
    DragProvider.prototype.getState = function (key) {
        return key ? this.state[key] : this.state;
    };
    /**
     * \@name onDragEnd
     * @return {?}
     */
    DragProvider.prototype.onDragEnd = function () {
        this.setState({
            dragging: false,
            dropping: false,
            index: undefined
        });
    };
    return DragProvider;
}());
DragProvider.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */] },
];
/** @nocollapse */
DragProvider.ctorParameters = function () { return []; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var DeleteIconComponent = /** @class */ (function () {
    function DeleteIconComponent() {
    }
    return DeleteIconComponent;
}());
DeleteIconComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                selector: 'delete-icon',
                template: "<span>\n    <svg height=\"16px\" viewBox=\"0 0 32 32\" width=\"16px\">\n        <path d=\"M17.459,16.014l8.239-8.194c0.395-0.391,0.395-1.024,0-1.414c-0.394-0.391-1.034-0.391-1.428,0  l-8.232,8.187L7.73,6.284c-0.394-0.395-1.034-0.395-1.428,0c-0.394,0.396-0.394,1.037,0,1.432l8.302,8.303l-8.332,8.286  c-0.394,0.391-0.394,1.024,0,1.414c0.394,0.391,1.034,0.391,1.428,0l8.325-8.279l8.275,8.276c0.394,0.395,1.034,0.395,1.428,0  c0.394-0.396,0.394-1.037,0-1.432L17.459,16.014z\"\n              fill=\"#121313\" />\n    </svg>\n</span>\n",
                styles: [".dark tag:focus {\n  -webkit-box-shadow: 0 0 0 1px #323232;\n          box-shadow: 0 0 0 1px #323232; }\n\n.ng2-tag-input.bootstrap3-info {\n  background-color: #fff;\n  display: inline-block;\n  color: #555;\n  vertical-align: middle;\n  max-width: 100%;\n  height: 42px;\n  line-height: 44px; }\n\n.ng2-tag-input.bootstrap3-info input {\n  border: none;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  outline: none;\n  background-color: transparent;\n  padding: 0 6px;\n  margin: 0;\n  width: auto;\n  max-width: inherit; }\n\n.ng2-tag-input.bootstrap3-info .form-control input::-moz-placeholder {\n  color: #777;\n  opacity: 1; }\n\n.ng2-tag-input.bootstrap3-info .form-control input:-ms-input-placeholder {\n  color: #777; }\n\n.ng2-tag-input.bootstrap3-info .form-control input::-webkit-input-placeholder {\n  color: #777; }\n\n.ng2-tag-input.bootstrap3-info input:focus {\n  border: none;\n  -webkit-box-shadow: none;\n          box-shadow: none; }\n\n.bootstrap3-info.ng2-tag-input.ng2-tag-input--focused {\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.4);\n          box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.4);\n  border: 1px solid #ccc; }\n\n.bootstrap3-info.ng2-tag-input.ng2-tag-input--invalid {\n  -webkit-box-shadow: inset 0 1px 1px #d9534f;\n          box-shadow: inset 0 1px 1px #d9534f; }\n\n.ng2-tag-input {\n  display: block;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  position: relative;\n  -webkit-transition: all 0.25s;\n  transition: all 0.25s;\n  padding: 0.25rem 0;\n  min-height: 32px;\n  cursor: text;\n  border-bottom: 2px solid #efefef; }\n  .ng2-tag-input:focus {\n    outline: 0; }\n  .ng2-tag-input.ng2-tag-input--dropping {\n    opacity: 0.7; }\n  .ng2-tag-input.ng2-tag-input--focused {\n    border-bottom: 2px solid #2196F3; }\n  .ng2-tag-input.ng2-tag-input--invalid {\n    border-bottom: 2px solid #f44336; }\n  .ng2-tag-input.ng2-tag-input--loading {\n    border: none; }\n  .ng2-tag-input.ng2-tag-input--disabled {\n    opacity: 0.5;\n    cursor: not-allowed; }\n  .ng2-tag-input form {\n    margin: 0.1em 0; }\n  .ng2-tag-input .ng2-tags-container {\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n\n.minimal.ng2-tag-input {\n  display: block;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  position: relative;\n  cursor: text;\n  border-bottom: 1px solid transparent; }\n  .minimal.ng2-tag-input:focus {\n    outline: 0; }\n  .minimal.ng2-tag-input.ng2-tag-input--dropping {\n    opacity: 0.7; }\n  .minimal.ng2-tag-input.ng2-tag-input--loading {\n    border: none; }\n  .minimal.ng2-tag-input.ng2-tag-input--disabled {\n    opacity: 0.5;\n    cursor: not-allowed; }\n  .minimal.ng2-tag-input .ng2-tags-container {\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n\n.dark.ng2-tag-input {\n  display: block;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  position: relative;\n  cursor: text;\n  border-bottom: 2px solid #444; }\n  .dark.ng2-tag-input:focus {\n    outline: 0; }\n  .dark.ng2-tag-input.ng2-tag-input--dropping {\n    opacity: 0.7; }\n  .dark.ng2-tag-input.ng2-tag-input--loading {\n    border: none; }\n  .dark.ng2-tag-input.ng2-tag-input--disabled {\n    opacity: 0.5;\n    cursor: not-allowed; }\n  .dark.ng2-tag-input .ng2-tags-container {\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n\n.bootstrap.ng2-tag-input {\n  display: block;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  position: relative;\n  cursor: text;\n  border-bottom: 2px solid #efefef; }\n  .bootstrap.ng2-tag-input:focus {\n    outline: 0; }\n  .bootstrap.ng2-tag-input.ng2-tag-input--dropping {\n    opacity: 0.7; }\n  .bootstrap.ng2-tag-input.ng2-tag-input--focused {\n    border-bottom: 2px solid #0275d8; }\n  .bootstrap.ng2-tag-input.ng2-tag-input--invalid {\n    border-bottom: 2px solid #d9534f; }\n  .bootstrap.ng2-tag-input.ng2-tag-input--loading {\n    border: none; }\n  .bootstrap.ng2-tag-input.ng2-tag-input--disabled {\n    opacity: 0.5;\n    cursor: not-allowed; }\n  .bootstrap.ng2-tag-input .ng2-tags-container {\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n\n.bootstrap3-info.ng2-tag-input {\n  display: block;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  position: relative;\n  padding: 4px;\n  cursor: text;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n          box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  border-radius: 4px; }\n  .bootstrap3-info.ng2-tag-input:focus {\n    outline: 0; }\n  .bootstrap3-info.ng2-tag-input.ng2-tag-input--dropping {\n    opacity: 0.7; }\n  .bootstrap3-info.ng2-tag-input.ng2-tag-input--invalid {\n    border-bottom: 1px solid #d9534f; }\n  .bootstrap3-info.ng2-tag-input.ng2-tag-input--loading {\n    border: none; }\n  .bootstrap3-info.ng2-tag-input.ng2-tag-input--disabled {\n    opacity: 0.5;\n    cursor: not-allowed; }\n  .bootstrap3-info.ng2-tag-input form {\n    margin: 0.1em 0; }\n  .bootstrap3-info.ng2-tag-input .ng2-tags-container {\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n\n.error-message {\n  font-size: 0.8em;\n  color: #f44336;\n  margin: 0.5em 0 0 0; }\n\n.bootstrap .error-message {\n  color: #d9534f; }\n\n:host(delete-icon) {\n  width: 20px;\n  height: 16px;\n  -webkit-transition: all 0.15s;\n  transition: all 0.15s;\n  display: inline-block;\n  text-align: right; }\n  :host(delete-icon) path {\n    fill: #444; }\n  :host(delete-icon) svg {\n    vertical-align: bottom;\n    height: 34px; }\n\n:host(delete-icon):hover {\n  -webkit-transform: scale(1.5) translateY(-3px);\n          transform: scale(1.5) translateY(-3px); }\n\n:host-context(.dark) {\n  text-align: right; }\n  :host-context(.dark) path {\n    fill: #fff; }\n  :host-context(.dark) svg {\n    vertical-align: bottom;\n    height: 34px; }\n\n:host-context(.minimal) {\n  text-align: right; }\n  :host-context(.minimal) path {\n    fill: #444; }\n  :host-context(.minimal) svg {\n    vertical-align: bottom;\n    height: 34px; }\n\n:host-context(.bootstrap) {\n  text-align: right; }\n  :host-context(.bootstrap) path {\n    fill: #fff; }\n  :host-context(.bootstrap) svg {\n    vertical-align: bottom;\n    height: 34px; }\n\n:host-context(tag:focus) path,\n:host-context(tag:active) path {\n  fill: #fff; }\n\n:host-context(.dark tag:focus) path,\n:host-context(.dark tag:active) path {\n  fill: #000; }\n\n:host-context(.minimal tag:focus) path,\n:host-context(.minimal tag:active) path {\n  fill: #000; }\n\n:host-context(.bootstrap tag:focus) path,\n:host-context(.bootstrap tag:active) path {\n  fill: #fff; }\n\n:host-context(.bootstrap3-info) {\n  height: inherit; }\n  :host-context(.bootstrap3-info) path {\n    fill: #fff; }\n"]
            },] },
];
/** @nocollapse */
DeleteIconComponent.ctorParameters = function () { return []; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var optionsProvider = new OptionsProvider();
var TagInputModule = /** @class */ (function () {
    function TagInputModule() {
    }
    /**
     * \@name withDefaults
     * @param {?} options {Options}
     * @return {?}
     */
    TagInputModule.withDefaults = function (options) {
        optionsProvider.setOptions(options);
    };
    return TagInputModule;
}());
TagInputModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */], args: [{
                imports: [
                    __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* ReactiveFormsModule */],
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormsModule */],
                    __WEBPACK_IMPORTED_MODULE_3_ng2_material_dropdown__["b" /* Ng2DropdownModule */]
                ],
                declarations: [
                    TagInputComponent,
                    DeleteIconComponent,
                    TagInputForm,
                    TagComponent,
                    HighlightPipe,
                    TagInputDropdown,
                    TagRipple
                ],
                exports: [
                    TagInputComponent,
                    DeleteIconComponent,
                    TagInputForm,
                    TagComponent,
                    HighlightPipe,
                    TagInputDropdown,
                    TagRipple
                ],
                providers: [
                    DragProvider,
                    { provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* COMPOSITION_BUFFER_MODE */], useValue: false },
                ]
            },] },
];
/** @nocollapse */
TagInputModule.ctorParameters = function () { return []; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */

//# sourceMappingURL=ngx-chips.js.map


/***/ }),

/***/ "./node_modules/ngx-pagination/dist/ngx-pagination.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ɵb */
/* unused harmony export ɵa */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgxPaginationModule; });
/* unused harmony export PaginationService */
/* unused harmony export PaginationControlsComponent */
/* unused harmony export PaginationControlsDirective */
/* unused harmony export PaginatePipe */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");



var PaginationService = (function () {
    function PaginationService() {
        this.change = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.instances = {};
        this.DEFAULT_ID = 'DEFAULT_PAGINATION_ID';
    }
    PaginationService.prototype.defaultId = function () { return this.DEFAULT_ID; };
    PaginationService.prototype.register = function (instance) {
        if (!instance.id) {
            instance.id = this.DEFAULT_ID;
        }
        if (!this.instances[instance.id]) {
            this.instances[instance.id] = instance;
            this.change.emit(instance.id);
        }
        else {
            var changed = this.updateInstance(instance);
            if (changed) {
                this.change.emit(instance.id);
            }
        }
    };
    /**
     * Check each property of the instance and update any that have changed. Return
     * true if any changes were made, else return false.
     */
    PaginationService.prototype.updateInstance = function (instance) {
        var changed = false;
        for (var prop in this.instances[instance.id]) {
            if (instance[prop] !== this.instances[instance.id][prop]) {
                this.instances[instance.id][prop] = instance[prop];
                changed = true;
            }
        }
        return changed;
    };
    /**
     * Returns the current page number.
     */
    PaginationService.prototype.getCurrentPage = function (id) {
        if (this.instances[id]) {
            return this.instances[id].currentPage;
        }
    };
    /**
     * Sets the current page number.
     */
    PaginationService.prototype.setCurrentPage = function (id, page) {
        if (this.instances[id]) {
            var instance = this.instances[id];
            var maxPage = Math.ceil(instance.totalItems / instance.itemsPerPage);
            if (page <= maxPage && 1 <= page) {
                this.instances[id].currentPage = page;
                this.change.emit(id);
            }
        }
    };
    /**
     * Sets the value of instance.totalItems
     */
    PaginationService.prototype.setTotalItems = function (id, totalItems) {
        if (this.instances[id] && 0 <= totalItems) {
            this.instances[id].totalItems = totalItems;
            this.change.emit(id);
        }
    };
    /**
     * Sets the value of instance.itemsPerPage.
     */
    PaginationService.prototype.setItemsPerPage = function (id, itemsPerPage) {
        if (this.instances[id]) {
            this.instances[id].itemsPerPage = itemsPerPage;
            this.change.emit(id);
        }
    };
    /**
     * Returns a clone of the pagination instance object matching the id. If no
     * id specified, returns the instance corresponding to the default id.
     */
    PaginationService.prototype.getInstance = function (id) {
        if (id === void 0) { id = this.DEFAULT_ID; }
        if (this.instances[id]) {
            return this.clone(this.instances[id]);
        }
        return {};
    };
    /**
     * Perform a shallow clone of an object.
     */
    PaginationService.prototype.clone = function (obj) {
        var target = {};
        for (var i in obj) {
            if (obj.hasOwnProperty(i)) {
                target[i] = obj[i];
            }
        }
        return target;
    };
    return PaginationService;
}());

var LARGE_NUMBER = Number.MAX_SAFE_INTEGER;
var PaginatePipe = (function () {
    function PaginatePipe(service) {
        this.service = service;
        // store the values from the last time the pipe was invoked
        this.state = {};
    }
    PaginatePipe.prototype.transform = function (collection, args) {
        // When an observable is passed through the AsyncPipe, it will output
        // `null` until the subscription resolves. In this case, we want to
        // use the cached data from the `state` object to prevent the NgFor
        // from flashing empty until the real values arrive.
        if (args instanceof Array) {
            // compatible with angular2 before beta16
            args = args[0];
        }
        if (!(collection instanceof Array)) {
            var _id = args.id || this.service.defaultId;
            if (this.state[_id]) {
                return this.state[_id].slice;
            }
            else {
                return collection;
            }
        }
        var serverSideMode = args.totalItems && args.totalItems !== collection.length;
        var instance = this.createInstance(collection, args);
        var id = instance.id;
        var start, end;
        var perPage = instance.itemsPerPage;
        this.service.register(instance);
        if (!serverSideMode && collection instanceof Array) {
            perPage = +perPage || LARGE_NUMBER;
            start = (instance.currentPage - 1) * perPage;
            end = start + perPage;
            var isIdentical = this.stateIsIdentical(id, collection, start, end);
            if (isIdentical) {
                return this.state[id].slice;
            }
            else {
                var slice = collection.slice(start, end);
                this.saveState(id, collection, slice, start, end);
                this.service.change.emit(id);
                return slice;
            }
        }
        // save the state for server-side collection to avoid null
        // flash as new data loads.
        this.saveState(id, collection, collection, start, end);
        return collection;
    };
    /**
     * Create an PaginationInstance object, using defaults for any optional properties not supplied.
     */
    PaginatePipe.prototype.createInstance = function (collection, args) {
        var config = args;
        this.checkConfig(config);
        return {
            id: config.id || this.service.defaultId(),
            itemsPerPage: +config.itemsPerPage || 0,
            currentPage: +config.currentPage || 1,
            totalItems: +config.totalItems || collection.length
        };
    };
    /**
     * Ensure the argument passed to the filter contains the required properties.
     */
    PaginatePipe.prototype.checkConfig = function (config) {
        var required = ['itemsPerPage', 'currentPage'];
        var missing = required.filter(function (prop) { return !(prop in config); });
        if (0 < missing.length) {
            throw new Error("PaginatePipe: Argument is missing the following required properties: " + missing.join(', '));
        }
    };
    /**
     * To avoid returning a brand new array each time the pipe is run, we store the state of the sliced
     * array for a given id. This means that the next time the pipe is run on this collection & id, we just
     * need to check that the collection, start and end points are all identical, and if so, return the
     * last sliced array.
     */
    PaginatePipe.prototype.saveState = function (id, collection, slice, start, end) {
        this.state[id] = {
            collection: collection,
            size: collection.length,
            slice: slice,
            start: start,
            end: end
        };
    };
    /**
     * For a given id, returns true if the collection, size, start and end values are identical.
     */
    PaginatePipe.prototype.stateIsIdentical = function (id, collection, start, end) {
        var state = this.state[id];
        if (!state) {
            return false;
        }
        var isMetaDataIdentical = state.size === collection.length &&
            state.start === start &&
            state.end === end;
        if (!isMetaDataIdentical) {
            return false;
        }
        return state.slice.every(function (element, index) { return element === collection[start + index]; });
    };
    PaginatePipe.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Pipe */], args: [{
                    name: 'paginate',
                    pure: false
                },] },
    ];
    /** @nocollapse */
    PaginatePipe.ctorParameters = function () { return [
        { type: PaginationService, },
    ]; };
    return PaginatePipe;
}());

/**
 * The default template and styles for the pagination links are borrowed directly
 * from Zurb Foundation 6: http://foundation.zurb.com/sites/docs/pagination.html
 */
var DEFAULT_TEMPLATE = "\n    <pagination-template  #p=\"paginationApi\"\n                         [id]=\"id\"\n                         [maxSize]=\"maxSize\"\n                         (pageChange)=\"pageChange.emit($event)\">\n    <ul class=\"ngx-pagination\" \n        role=\"navigation\" \n        [attr.aria-label]=\"screenReaderPaginationLabel\" \n        *ngIf=\"!(autoHide && p.pages.length <= 1)\">\n\n        <li class=\"pagination-previous\" [class.disabled]=\"p.isFirstPage()\" *ngIf=\"directionLinks\"> \n            <a tabindex=\"0\" *ngIf=\"1 < p.getCurrent()\" (keyup.enter)=\"p.previous()\" (click)=\"p.previous()\" [attr.aria-label]=\"previousLabel + ' ' + screenReaderPageLabel\">\n                {{ previousLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </a>\n            <span *ngIf=\"p.isFirstPage()\">\n                {{ previousLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </span>\n        </li>\n\n        <li [class.current]=\"p.getCurrent() === page.value\" *ngFor=\"let page of p.pages\">\n            <a tabindex=\"0\" (keyup.enter)=\"p.setCurrent(page.value)\" (click)=\"p.setCurrent(page.value)\" *ngIf=\"p.getCurrent() !== page.value\">\n                <span class=\"show-for-sr\">{{ screenReaderPageLabel }} </span>\n                <span>{{ page.label }}</span>\n            </a>\n            <ng-container *ngIf=\"p.getCurrent() === page.value\">\n                <span class=\"show-for-sr\">{{ screenReaderCurrentLabel }} </span>\n                <span>{{ page.label }}</span> \n            </ng-container>\n        </li>\n\n        <li class=\"pagination-next\" [class.disabled]=\"p.isLastPage()\" *ngIf=\"directionLinks\">\n            <a tabindex=\"0\" *ngIf=\"!p.isLastPage()\" (keyup.enter)=\"p.next()\" (click)=\"p.next()\" [attr.aria-label]=\"nextLabel + ' ' + screenReaderPageLabel\">\n                 {{ nextLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </a>\n            <span *ngIf=\"p.isLastPage()\">\n                 {{ nextLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </span>\n        </li>\n\n    </ul>\n    </pagination-template>\n    ";
var DEFAULT_STYLES = "\n.ngx-pagination {\n  margin-left: 0;\n  margin-bottom: 1rem; }\n  .ngx-pagination::before, .ngx-pagination::after {\n    content: ' ';\n    display: table; }\n  .ngx-pagination::after {\n    clear: both; }\n  .ngx-pagination li {\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n    margin-right: 0.0625rem;\n    border-radius: 0; }\n  .ngx-pagination li {\n    display: inline-block; }\n  .ngx-pagination a,\n  .ngx-pagination button {\n    color: #0a0a0a; \n    display: block;\n    padding: 0.1875rem 0.625rem;\n    border-radius: 0; }\n    .ngx-pagination a:hover,\n    .ngx-pagination button:hover {\n      background: #e6e6e6; }\n  .ngx-pagination .current {\n    padding: 0.1875rem 0.625rem;\n    background: #2199e8;\n    color: #fefefe;\n    cursor: default; }\n  .ngx-pagination .disabled {\n    padding: 0.1875rem 0.625rem;\n    color: #cacaca;\n    cursor: default; } \n    .ngx-pagination .disabled:hover {\n      background: transparent; }\n  .ngx-pagination .ellipsis::after {\n    content: '\u2026';\n    padding: 0.1875rem 0.625rem;\n    color: #0a0a0a; }\n  .ngx-pagination a, .ngx-pagination button {\n    cursor: pointer; }\n\n.ngx-pagination .pagination-previous a::before,\n.ngx-pagination .pagination-previous.disabled::before { \n  content: '\u00AB';\n  display: inline-block;\n  margin-right: 0.5rem; }\n\n.ngx-pagination .pagination-next a::after,\n.ngx-pagination .pagination-next.disabled::after {\n  content: '\u00BB';\n  display: inline-block;\n  margin-left: 0.5rem; }\n\n.ngx-pagination .show-for-sr {\n  position: absolute !important;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0); }";

/**
 * The default pagination controls component. Actually just a default implementation of a custom template.
 */
var PaginationControlsComponent = (function () {
    function PaginationControlsComponent() {
        this.maxSize = 7;
        this.previousLabel = 'Previous';
        this.nextLabel = 'Next';
        this.screenReaderPaginationLabel = 'Pagination';
        this.screenReaderPageLabel = 'page';
        this.screenReaderCurrentLabel = "You're on page";
        this.pageChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this._directionLinks = true;
        this._autoHide = false;
    }
    Object.defineProperty(PaginationControlsComponent.prototype, "directionLinks", {
        get: function () {
            return this._directionLinks;
        },
        set: function (value) {
            this._directionLinks = !!value && value !== 'false';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationControlsComponent.prototype, "autoHide", {
        get: function () {
            return this._autoHide;
        },
        set: function (value) {
            this._autoHide = !!value && value !== 'false';
        },
        enumerable: true,
        configurable: true
    });
    PaginationControlsComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                    selector: 'pagination-controls',
                    template: DEFAULT_TEMPLATE,
                    styles: [DEFAULT_STYLES],
                    changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectionStrategy */].OnPush,
                    encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None
                },] },
    ];
    /** @nocollapse */
    PaginationControlsComponent.ctorParameters = function () { return []; };
    PaginationControlsComponent.propDecorators = {
        'id': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
        'maxSize': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
        'directionLinks': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
        'autoHide': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
        'previousLabel': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
        'nextLabel': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
        'screenReaderPaginationLabel': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
        'screenReaderPageLabel': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
        'screenReaderCurrentLabel': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
        'pageChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */] },],
    };
    return PaginationControlsComponent;
}());

/**
 * This directive is what powers all pagination controls components, including the default one.
 * It exposes an API which is hooked up to the PaginationService to keep the PaginatePipe in sync
 * with the pagination controls.
 */
var PaginationControlsDirective = (function () {
    function PaginationControlsDirective(service, changeDetectorRef) {
        var _this = this;
        this.service = service;
        this.changeDetectorRef = changeDetectorRef;
        this.maxSize = 7;
        this.pageChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.pages = [];
        this.changeSub = this.service.change
            .subscribe(function (id) {
            if (_this.id === id) {
                _this.updatePageLinks();
                _this.changeDetectorRef.markForCheck();
                _this.changeDetectorRef.detectChanges();
            }
        });
    }
    PaginationControlsDirective.prototype.ngOnInit = function () {
        if (this.id === undefined) {
            this.id = this.service.defaultId();
        }
        this.updatePageLinks();
    };
    PaginationControlsDirective.prototype.ngOnChanges = function (changes) {
        this.updatePageLinks();
    };
    PaginationControlsDirective.prototype.ngOnDestroy = function () {
        this.changeSub.unsubscribe();
    };
    /**
     * Go to the previous page
     */
    PaginationControlsDirective.prototype.previous = function () {
        this.checkValidId();
        this.setCurrent(this.getCurrent() - 1);
    };
    /**
     * Go to the next page
     */
    PaginationControlsDirective.prototype.next = function () {
        this.checkValidId();
        this.setCurrent(this.getCurrent() + 1);
    };
    /**
     * Returns true if current page is first page
     */
    PaginationControlsDirective.prototype.isFirstPage = function () {
        return this.getCurrent() === 1;
    };
    /**
     * Returns true if current page is last page
     */
    PaginationControlsDirective.prototype.isLastPage = function () {
        return this.getLastPage() === this.getCurrent();
    };
    /**
     * Set the current page number.
     */
    PaginationControlsDirective.prototype.setCurrent = function (page) {
        this.pageChange.emit(page);
    };
    /**
     * Get the current page number.
     */
    PaginationControlsDirective.prototype.getCurrent = function () {
        return this.service.getCurrentPage(this.id);
    };
    /**
     * Returns the last page number
     */
    PaginationControlsDirective.prototype.getLastPage = function () {
        var inst = this.service.getInstance(this.id);
        if (inst.totalItems < 1) {
            // when there are 0 or fewer (an error case) items, there are no "pages" as such,
            // but it makes sense to consider a single, empty page as the last page.
            return 1;
        }
        return Math.ceil(inst.totalItems / inst.itemsPerPage);
    };
    PaginationControlsDirective.prototype.checkValidId = function () {
        if (!this.service.getInstance(this.id).id) {
            console.warn("PaginationControlsDirective: the specified id \"" + this.id + "\" does not match any registered PaginationInstance");
        }
    };
    /**
     * Updates the page links and checks that the current page is valid. Should run whenever the
     * PaginationService.change stream emits a value matching the current ID, or when any of the
     * input values changes.
     */
    PaginationControlsDirective.prototype.updatePageLinks = function () {
        var _this = this;
        var inst = this.service.getInstance(this.id);
        var correctedCurrentPage = this.outOfBoundCorrection(inst);
        if (correctedCurrentPage !== inst.currentPage) {
            setTimeout(function () {
                _this.setCurrent(correctedCurrentPage);
                _this.pages = _this.createPageArray(inst.currentPage, inst.itemsPerPage, inst.totalItems, _this.maxSize);
            });
        }
        else {
            this.pages = this.createPageArray(inst.currentPage, inst.itemsPerPage, inst.totalItems, this.maxSize);
        }
    };
    /**
     * Checks that the instance.currentPage property is within bounds for the current page range.
     * If not, return a correct value for currentPage, or the current value if OK.
     */
    PaginationControlsDirective.prototype.outOfBoundCorrection = function (instance) {
        var totalPages = Math.ceil(instance.totalItems / instance.itemsPerPage);
        if (totalPages < instance.currentPage && 0 < totalPages) {
            return totalPages;
        }
        else if (instance.currentPage < 1) {
            return 1;
        }
        return instance.currentPage;
    };
    /**
     * Returns an array of Page objects to use in the pagination controls.
     */
    PaginationControlsDirective.prototype.createPageArray = function (currentPage, itemsPerPage, totalItems, paginationRange) {
        // paginationRange could be a string if passed from attribute, so cast to number.
        paginationRange = +paginationRange;
        var pages = [];
        var totalPages = Math.ceil(totalItems / itemsPerPage);
        var halfWay = Math.ceil(paginationRange / 2);
        var isStart = currentPage <= halfWay;
        var isEnd = totalPages - halfWay < currentPage;
        var isMiddle = !isStart && !isEnd;
        var ellipsesNeeded = paginationRange < totalPages;
        var i = 1;
        while (i <= totalPages && i <= paginationRange) {
            var label = void 0;
            var pageNumber = this.calculatePageNumber(i, currentPage, paginationRange, totalPages);
            var openingEllipsesNeeded = (i === 2 && (isMiddle || isEnd));
            var closingEllipsesNeeded = (i === paginationRange - 1 && (isMiddle || isStart));
            if (ellipsesNeeded && (openingEllipsesNeeded || closingEllipsesNeeded)) {
                label = '...';
            }
            else {
                label = pageNumber;
            }
            pages.push({
                label: label,
                value: pageNumber
            });
            i++;
        }
        return pages;
    };
    /**
     * Given the position in the sequence of pagination links [i],
     * figure out what page number corresponds to that position.
     */
    PaginationControlsDirective.prototype.calculatePageNumber = function (i, currentPage, paginationRange, totalPages) {
        var halfWay = Math.ceil(paginationRange / 2);
        if (i === paginationRange) {
            return totalPages;
        }
        else if (i === 1) {
            return i;
        }
        else if (paginationRange < totalPages) {
            if (totalPages - halfWay < currentPage) {
                return totalPages - paginationRange + i;
            }
            else if (halfWay < currentPage) {
                return currentPage - halfWay + i;
            }
            else {
                return i;
            }
        }
        else {
            return i;
        }
    };
    PaginationControlsDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */], args: [{
                    selector: 'pagination-template,[pagination-template]',
                    exportAs: 'paginationApi'
                },] },
    ];
    /** @nocollapse */
    PaginationControlsDirective.ctorParameters = function () { return [
        { type: PaginationService, },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */], },
    ]; };
    PaginationControlsDirective.propDecorators = {
        'id': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
        'maxSize': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
        'pageChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */] },],
    };
    return PaginationControlsDirective;
}());

var NgxPaginationModule = (function () {
    function NgxPaginationModule() {
    }
    NgxPaginationModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */], args: [{
                    imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]],
                    declarations: [
                        PaginatePipe,
                        PaginationControlsComponent,
                        PaginationControlsDirective
                    ],
                    providers: [PaginationService],
                    exports: [PaginatePipe, PaginationControlsComponent, PaginationControlsDirective]
                },] },
    ];
    /** @nocollapse */
    NgxPaginationModule.ctorParameters = function () { return []; };
    return NgxPaginationModule;
}());

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ "./node_modules/rxjs/_esm5/Rx.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export operators */
/* unused harmony export Scheduler */
/* unused harmony export Symbol */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* unused harmony reexport Subject */
/* unused harmony reexport AnonymousSubject */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* unused harmony reexport Observable */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_observable_bindCallback__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/bindCallback.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_observable_bindNodeCallback__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/bindNodeCallback.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_observable_combineLatest__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/combineLatest.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__add_observable_concat__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/concat.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__add_observable_defer__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/defer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__add_observable_empty__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/empty.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__add_observable_forkJoin__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/forkJoin.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__add_observable_from__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/from.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__add_observable_fromEvent__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/fromEvent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__add_observable_fromEventPattern__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/fromEventPattern.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__add_observable_fromPromise__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/fromPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__add_observable_generate__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/generate.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__add_observable_if__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/if.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__add_observable_interval__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/interval.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__add_observable_merge__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__add_observable_race__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/race.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__add_observable_never__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/never.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__add_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__add_observable_onErrorResumeNext__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/onErrorResumeNext.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__add_observable_pairs__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/pairs.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__add_observable_range__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/range.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__add_observable_using__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/using.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__add_observable_timer__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/timer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__add_observable_zip__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/zip.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__add_observable_dom_ajax__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/dom/ajax.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__add_observable_dom_webSocket__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/dom/webSocket.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__add_operator_buffer__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/buffer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__add_operator_bufferCount__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/bufferCount.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__add_operator_bufferTime__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/bufferTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__add_operator_bufferToggle__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/bufferToggle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__add_operator_bufferWhen__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/bufferWhen.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__add_operator_combineAll__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/combineAll.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__add_operator_combineLatest__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/combineLatest.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__add_operator_concat__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/concat.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__add_operator_concatAll__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/concatAll.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__add_operator_concatMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/concatMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__add_operator_concatMapTo__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/concatMapTo.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__add_operator_count__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/count.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__add_operator_dematerialize__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/dematerialize.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__add_operator_debounce__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/debounce.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__add_operator_debounceTime__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__add_operator_defaultIfEmpty__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/defaultIfEmpty.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__add_operator_delay__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/delay.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__add_operator_delayWhen__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/delayWhen.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__add_operator_distinct__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/distinct.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__add_operator_distinctUntilChanged__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__add_operator_distinctUntilKeyChanged__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/distinctUntilKeyChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__add_operator_do__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__add_operator_exhaust__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/exhaust.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__add_operator_exhaustMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/exhaustMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__add_operator_expand__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/expand.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__add_operator_elementAt__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/elementAt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__add_operator_filter__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__add_operator_finally__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/finally.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__add_operator_find__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/find.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__add_operator_findIndex__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/findIndex.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__add_operator_first__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/first.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__add_operator_groupBy__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/groupBy.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__add_operator_ignoreElements__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/ignoreElements.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__add_operator_isEmpty__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/isEmpty.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__add_operator_audit__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/audit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__add_operator_auditTime__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/auditTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__add_operator_last__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/last.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__add_operator_let__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/let.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68__add_operator_every__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/every.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_69__add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_70__add_operator_mapTo__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/mapTo.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_71__add_operator_materialize__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/materialize.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_72__add_operator_max__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/max.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_73__add_operator_merge__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_74__add_operator_mergeAll__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/mergeAll.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_75__add_operator_mergeMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_76__add_operator_mergeMapTo__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/mergeMapTo.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_77__add_operator_mergeScan__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/mergeScan.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_78__add_operator_min__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_79__add_operator_multicast__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/multicast.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_80__add_operator_observeOn__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/observeOn.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_81__add_operator_onErrorResumeNext__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/onErrorResumeNext.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_82__add_operator_pairwise__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/pairwise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_83__add_operator_partition__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/partition.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_84__add_operator_pluck__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/pluck.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_85__add_operator_publish__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/publish.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_86__add_operator_publishBehavior__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/publishBehavior.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_87__add_operator_publishReplay__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/publishReplay.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_88__add_operator_publishLast__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/publishLast.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_89__add_operator_race__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/race.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_90__add_operator_reduce__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/reduce.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_91__add_operator_repeat__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/repeat.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_92__add_operator_repeatWhen__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/repeatWhen.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_93__add_operator_retry__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/retry.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_94__add_operator_retryWhen__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/retryWhen.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_95__add_operator_sample__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/sample.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_96__add_operator_sampleTime__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/sampleTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_97__add_operator_scan__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/scan.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_98__add_operator_sequenceEqual__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/sequenceEqual.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_99__add_operator_share__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/share.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_100__add_operator_shareReplay__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/shareReplay.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_101__add_operator_single__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/single.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_102__add_operator_skip__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/skip.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_103__add_operator_skipLast__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/skipLast.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_104__add_operator_skipUntil__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/skipUntil.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_105__add_operator_skipWhile__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/skipWhile.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_106__add_operator_startWith__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_107__add_operator_subscribeOn__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/subscribeOn.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_108__add_operator_switch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/switch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_109__add_operator_switchMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_110__add_operator_switchMapTo__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/switchMapTo.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_111__add_operator_take__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_112__add_operator_takeLast__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/takeLast.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_113__add_operator_takeUntil__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/takeUntil.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_114__add_operator_takeWhile__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/takeWhile.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_115__add_operator_throttle__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/throttle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_116__add_operator_throttleTime__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/throttleTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_117__add_operator_timeInterval__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/timeInterval.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_118__add_operator_timeout__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/timeout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_119__add_operator_timeoutWith__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/timeoutWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_120__add_operator_timestamp__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/timestamp.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_121__add_operator_toArray__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/toArray.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_122__add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_122__add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_122__add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_123__add_operator_window__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/window.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_124__add_operator_windowCount__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/windowCount.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_125__add_operator_windowTime__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/windowTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_126__add_operator_windowToggle__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/windowToggle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_127__add_operator_windowWhen__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/windowWhen.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_128__add_operator_withLatestFrom__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/withLatestFrom.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_129__add_operator_zip__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/zip.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_130__add_operator_zipAll__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/zipAll.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_131__Subscription__ = __webpack_require__("./node_modules/rxjs/_esm5/Subscription.js");
/* unused harmony reexport Subscription */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_132__Subscriber__ = __webpack_require__("./node_modules/rxjs/_esm5/Subscriber.js");
/* unused harmony reexport Subscriber */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_133__AsyncSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/AsyncSubject.js");
/* unused harmony reexport AsyncSubject */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_134__ReplaySubject__ = __webpack_require__("./node_modules/rxjs/_esm5/ReplaySubject.js");
/* unused harmony reexport ReplaySubject */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_135__BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
/* unused harmony reexport BehaviorSubject */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_136__observable_ConnectableObservable__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/ConnectableObservable.js");
/* unused harmony reexport ConnectableObservable */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_137__Notification__ = __webpack_require__("./node_modules/rxjs/_esm5/Notification.js");
/* unused harmony reexport Notification */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_138__util_EmptyError__ = __webpack_require__("./node_modules/rxjs/_esm5/util/EmptyError.js");
/* unused harmony reexport EmptyError */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_139__util_ArgumentOutOfRangeError__ = __webpack_require__("./node_modules/rxjs/_esm5/util/ArgumentOutOfRangeError.js");
/* unused harmony reexport ArgumentOutOfRangeError */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_140__util_ObjectUnsubscribedError__ = __webpack_require__("./node_modules/rxjs/_esm5/util/ObjectUnsubscribedError.js");
/* unused harmony reexport ObjectUnsubscribedError */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_141__util_TimeoutError__ = __webpack_require__("./node_modules/rxjs/_esm5/util/TimeoutError.js");
/* unused harmony reexport TimeoutError */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_142__util_UnsubscriptionError__ = __webpack_require__("./node_modules/rxjs/_esm5/util/UnsubscriptionError.js");
/* unused harmony reexport UnsubscriptionError */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_143__operator_timeInterval__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/timeInterval.js");
/* unused harmony reexport TimeInterval */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_144__operators_timestamp__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/timestamp.js");
/* unused harmony reexport Timestamp */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_145__testing_TestScheduler__ = __webpack_require__("./node_modules/rxjs/_esm5/testing/TestScheduler.js");
/* unused harmony reexport TestScheduler */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_146__scheduler_VirtualTimeScheduler__ = __webpack_require__("./node_modules/rxjs/_esm5/scheduler/VirtualTimeScheduler.js");
/* unused harmony reexport VirtualTimeScheduler */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_147__observable_dom_AjaxObservable__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/dom/AjaxObservable.js");
/* unused harmony reexport AjaxResponse */
/* unused harmony reexport AjaxError */
/* unused harmony reexport AjaxTimeoutError */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_148__util_pipe__ = __webpack_require__("./node_modules/rxjs/_esm5/util/pipe.js");
/* unused harmony reexport pipe */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_149__scheduler_asap__ = __webpack_require__("./node_modules/rxjs/_esm5/scheduler/asap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_150__scheduler_async__ = __webpack_require__("./node_modules/rxjs/_esm5/scheduler/async.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_151__scheduler_queue__ = __webpack_require__("./node_modules/rxjs/_esm5/scheduler/queue.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_152__scheduler_animationFrame__ = __webpack_require__("./node_modules/rxjs/_esm5/scheduler/animationFrame.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_153__symbol_rxSubscriber__ = __webpack_require__("./node_modules/rxjs/_esm5/symbol/rxSubscriber.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_154__symbol_iterator__ = __webpack_require__("./node_modules/rxjs/_esm5/symbol/iterator.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_155__symbol_observable__ = __webpack_require__("./node_modules/rxjs/_esm5/symbol/observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_156__operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* tslint:disable:no-unused-variable */
// Subject imported before Observable to bypass circular dependency issue since
// Subject extends Observable and Observable references Subject in it's
// definition
/** PURE_IMPORTS_START ._scheduler_asap,._scheduler_async,._scheduler_queue,._scheduler_animationFrame,._symbol_rxSubscriber,._symbol_iterator,._symbol_observable,._operators PURE_IMPORTS_END */

/* tslint:enable:no-unused-variable */


































































































































/* tslint:disable:no-unused-variable */


























var operators = __WEBPACK_IMPORTED_MODULE_156__operators__;
/* tslint:enable:no-unused-variable */
/**
 * @typedef {Object} Rx.Scheduler
 * @property {Scheduler} queue Schedules on a queue in the current event frame
 * (trampoline scheduler). Use this for iteration operations.
 * @property {Scheduler} asap Schedules on the micro task queue, which uses the
 * fastest transport mechanism available, either Node.js' `process.nextTick()`
 * or Web Worker MessageChannel or setTimeout or others. Use this for
 * asynchronous conversions.
 * @property {Scheduler} async Schedules work with `setInterval`. Use this for
 * time-based operations.
 * @property {Scheduler} animationFrame Schedules work with `requestAnimationFrame`.
 * Use this for synchronizing with the platform's painting
 */
var Scheduler = {
    asap: __WEBPACK_IMPORTED_MODULE_149__scheduler_asap__["a" /* asap */],
    queue: __WEBPACK_IMPORTED_MODULE_151__scheduler_queue__["a" /* queue */],
    animationFrame: __WEBPACK_IMPORTED_MODULE_152__scheduler_animationFrame__["a" /* animationFrame */],
    async: __WEBPACK_IMPORTED_MODULE_150__scheduler_async__["a" /* async */]
};
/**
 * @typedef {Object} Rx.Symbol
 * @property {Symbol|string} rxSubscriber A symbol to use as a property name to
 * retrieve an "Rx safe" Observer from an object. "Rx safety" can be defined as
 * an object that has all of the traits of an Rx Subscriber, including the
 * ability to add and remove subscriptions to the subscription chain and
 * guarantees involving event triggering (can't "next" after unsubscription,
 * etc).
 * @property {Symbol|string} observable A symbol to use as a property name to
 * retrieve an Observable as defined by the [ECMAScript "Observable" spec](https://github.com/zenparsing/es-observable).
 * @property {Symbol|string} iterator The ES6 symbol to use as a property name
 * to retrieve an iterator from an object.
 */
var Symbol = {
    rxSubscriber: __WEBPACK_IMPORTED_MODULE_153__symbol_rxSubscriber__["a" /* rxSubscriber */],
    observable: __WEBPACK_IMPORTED_MODULE_155__symbol_observable__["a" /* observable */],
    iterator: __WEBPACK_IMPORTED_MODULE_154__symbol_iterator__["a" /* iterator */]
};

//# sourceMappingURL=Rx.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/observable/bindCallback.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_bindCallback__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/bindCallback.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._observable_bindCallback PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].bindCallback = __WEBPACK_IMPORTED_MODULE_1__observable_bindCallback__["a" /* bindCallback */];
//# sourceMappingURL=bindCallback.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/observable/bindNodeCallback.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_bindNodeCallback__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/bindNodeCallback.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._observable_bindNodeCallback PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].bindNodeCallback = __WEBPACK_IMPORTED_MODULE_1__observable_bindNodeCallback__["a" /* bindNodeCallback */];
//# sourceMappingURL=bindNodeCallback.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/observable/combineLatest.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_combineLatest__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/combineLatest.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._observable_combineLatest PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].combineLatest = __WEBPACK_IMPORTED_MODULE_1__observable_combineLatest__["a" /* combineLatest */];
//# sourceMappingURL=combineLatest.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/observable/concat.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_concat__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/concat.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._observable_concat PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].concat = __WEBPACK_IMPORTED_MODULE_1__observable_concat__["a" /* concat */];
//# sourceMappingURL=concat.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/observable/defer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_defer__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/defer.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._observable_defer PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].defer = __WEBPACK_IMPORTED_MODULE_1__observable_defer__["a" /* defer */];
//# sourceMappingURL=defer.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/observable/dom/ajax.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_dom_ajax__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/dom/ajax.js");
/** PURE_IMPORTS_START .._.._.._Observable,.._.._.._observable_dom_ajax PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].ajax = __WEBPACK_IMPORTED_MODULE_1__observable_dom_ajax__["a" /* ajax */];
//# sourceMappingURL=ajax.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/observable/dom/webSocket.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_dom_webSocket__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/dom/webSocket.js");
/** PURE_IMPORTS_START .._.._.._Observable,.._.._.._observable_dom_webSocket PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].webSocket = __WEBPACK_IMPORTED_MODULE_1__observable_dom_webSocket__["a" /* webSocket */];
//# sourceMappingURL=webSocket.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/observable/empty.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_empty__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/empty.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._observable_empty PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].empty = __WEBPACK_IMPORTED_MODULE_1__observable_empty__["a" /* empty */];
//# sourceMappingURL=empty.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/observable/forkJoin.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_forkJoin__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/forkJoin.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._observable_forkJoin PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].forkJoin = __WEBPACK_IMPORTED_MODULE_1__observable_forkJoin__["a" /* forkJoin */];
//# sourceMappingURL=forkJoin.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/observable/from.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_from__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/from.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._observable_from PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].from = __WEBPACK_IMPORTED_MODULE_1__observable_from__["a" /* from */];
//# sourceMappingURL=from.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/observable/fromEventPattern.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_fromEventPattern__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/fromEventPattern.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._observable_fromEventPattern PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].fromEventPattern = __WEBPACK_IMPORTED_MODULE_1__observable_fromEventPattern__["a" /* fromEventPattern */];
//# sourceMappingURL=fromEventPattern.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/observable/fromPromise.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_fromPromise__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/fromPromise.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._observable_fromPromise PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].fromPromise = __WEBPACK_IMPORTED_MODULE_1__observable_fromPromise__["a" /* fromPromise */];
//# sourceMappingURL=fromPromise.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/observable/generate.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_generate__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/generate.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._observable_generate PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].generate = __WEBPACK_IMPORTED_MODULE_1__observable_generate__["a" /* generate */];
//# sourceMappingURL=generate.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/observable/if.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_if__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/if.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._observable_if PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].if = __WEBPACK_IMPORTED_MODULE_1__observable_if__["a" /* _if */];
//# sourceMappingURL=if.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/observable/merge.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_merge__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/merge.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._observable_merge PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].merge = __WEBPACK_IMPORTED_MODULE_1__observable_merge__["a" /* merge */];
//# sourceMappingURL=merge.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/observable/never.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_never__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/never.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._observable_never PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].never = __WEBPACK_IMPORTED_MODULE_1__observable_never__["a" /* never */];
//# sourceMappingURL=never.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/observable/of.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/of.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._observable_of PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].of = __WEBPACK_IMPORTED_MODULE_1__observable_of__["a" /* of */];
//# sourceMappingURL=of.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/observable/onErrorResumeNext.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_onErrorResumeNext__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/onErrorResumeNext.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._observable_onErrorResumeNext PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].onErrorResumeNext = __WEBPACK_IMPORTED_MODULE_1__observable_onErrorResumeNext__["a" /* onErrorResumeNext */];
//# sourceMappingURL=onErrorResumeNext.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/observable/pairs.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_pairs__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/pairs.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._observable_pairs PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].pairs = __WEBPACK_IMPORTED_MODULE_1__observable_pairs__["a" /* pairs */];
//# sourceMappingURL=pairs.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/observable/race.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_race__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/race.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._observable_race PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].race = __WEBPACK_IMPORTED_MODULE_1__observable_race__["a" /* race */];
//# sourceMappingURL=race.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/observable/range.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_range__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/range.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._observable_range PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].range = __WEBPACK_IMPORTED_MODULE_1__observable_range__["a" /* range */];
//# sourceMappingURL=range.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/observable/throw.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/throw.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._observable_throw PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].throw = __WEBPACK_IMPORTED_MODULE_1__observable_throw__["a" /* _throw */];
//# sourceMappingURL=throw.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/observable/timer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_timer__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/timer.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._observable_timer PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].timer = __WEBPACK_IMPORTED_MODULE_1__observable_timer__["a" /* timer */];
//# sourceMappingURL=timer.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/observable/using.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_using__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/using.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._observable_using PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].using = __WEBPACK_IMPORTED_MODULE_1__observable_using__["a" /* using */];
//# sourceMappingURL=using.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/observable/zip.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_zip__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/zip.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._observable_zip PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].zip = __WEBPACK_IMPORTED_MODULE_1__observable_zip__["a" /* zip */];
//# sourceMappingURL=zip.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/audit.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_audit__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/audit.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_audit PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.audit = __WEBPACK_IMPORTED_MODULE_1__operator_audit__["a" /* audit */];
//# sourceMappingURL=audit.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/auditTime.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_auditTime__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/auditTime.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_auditTime PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.auditTime = __WEBPACK_IMPORTED_MODULE_1__operator_auditTime__["a" /* auditTime */];
//# sourceMappingURL=auditTime.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/buffer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_buffer__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/buffer.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_buffer PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.buffer = __WEBPACK_IMPORTED_MODULE_1__operator_buffer__["a" /* buffer */];
//# sourceMappingURL=buffer.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/bufferCount.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_bufferCount__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/bufferCount.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_bufferCount PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.bufferCount = __WEBPACK_IMPORTED_MODULE_1__operator_bufferCount__["a" /* bufferCount */];
//# sourceMappingURL=bufferCount.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/bufferTime.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_bufferTime__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/bufferTime.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_bufferTime PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.bufferTime = __WEBPACK_IMPORTED_MODULE_1__operator_bufferTime__["a" /* bufferTime */];
//# sourceMappingURL=bufferTime.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/bufferToggle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_bufferToggle__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/bufferToggle.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_bufferToggle PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.bufferToggle = __WEBPACK_IMPORTED_MODULE_1__operator_bufferToggle__["a" /* bufferToggle */];
//# sourceMappingURL=bufferToggle.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/bufferWhen.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_bufferWhen__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/bufferWhen.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_bufferWhen PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.bufferWhen = __WEBPACK_IMPORTED_MODULE_1__operator_bufferWhen__["a" /* bufferWhen */];
//# sourceMappingURL=bufferWhen.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/combineAll.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_combineAll__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/combineAll.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_combineAll PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.combineAll = __WEBPACK_IMPORTED_MODULE_1__operator_combineAll__["a" /* combineAll */];
//# sourceMappingURL=combineAll.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/combineLatest.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_combineLatest__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/combineLatest.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_combineLatest PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.combineLatest = __WEBPACK_IMPORTED_MODULE_1__operator_combineLatest__["a" /* combineLatest */];
//# sourceMappingURL=combineLatest.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/concat.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_concat__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/concat.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_concat PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.concat = __WEBPACK_IMPORTED_MODULE_1__operator_concat__["a" /* concat */];
//# sourceMappingURL=concat.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/concatAll.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_concatAll__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/concatAll.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_concatAll PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.concatAll = __WEBPACK_IMPORTED_MODULE_1__operator_concatAll__["a" /* concatAll */];
//# sourceMappingURL=concatAll.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/concatMap.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_concatMap__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/concatMap.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_concatMap PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.concatMap = __WEBPACK_IMPORTED_MODULE_1__operator_concatMap__["a" /* concatMap */];
//# sourceMappingURL=concatMap.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/concatMapTo.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_concatMapTo__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/concatMapTo.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_concatMapTo PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.concatMapTo = __WEBPACK_IMPORTED_MODULE_1__operator_concatMapTo__["a" /* concatMapTo */];
//# sourceMappingURL=concatMapTo.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/count.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_count__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/count.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_count PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.count = __WEBPACK_IMPORTED_MODULE_1__operator_count__["a" /* count */];
//# sourceMappingURL=count.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/debounce.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_debounce__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/debounce.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_debounce PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.debounce = __WEBPACK_IMPORTED_MODULE_1__operator_debounce__["a" /* debounce */];
//# sourceMappingURL=debounce.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/debounceTime.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_debounceTime__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/debounceTime.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_debounceTime PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.debounceTime = __WEBPACK_IMPORTED_MODULE_1__operator_debounceTime__["a" /* debounceTime */];
//# sourceMappingURL=debounceTime.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/defaultIfEmpty.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_defaultIfEmpty__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/defaultIfEmpty.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_defaultIfEmpty PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.defaultIfEmpty = __WEBPACK_IMPORTED_MODULE_1__operator_defaultIfEmpty__["a" /* defaultIfEmpty */];
//# sourceMappingURL=defaultIfEmpty.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/delay.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_delay__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/delay.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_delay PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.delay = __WEBPACK_IMPORTED_MODULE_1__operator_delay__["a" /* delay */];
//# sourceMappingURL=delay.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/delayWhen.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_delayWhen__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/delayWhen.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_delayWhen PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.delayWhen = __WEBPACK_IMPORTED_MODULE_1__operator_delayWhen__["a" /* delayWhen */];
//# sourceMappingURL=delayWhen.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/dematerialize.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_dematerialize__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/dematerialize.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_dematerialize PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.dematerialize = __WEBPACK_IMPORTED_MODULE_1__operator_dematerialize__["a" /* dematerialize */];
//# sourceMappingURL=dematerialize.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/distinct.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_distinct__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/distinct.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_distinct PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.distinct = __WEBPACK_IMPORTED_MODULE_1__operator_distinct__["a" /* distinct */];
//# sourceMappingURL=distinct.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/distinctUntilChanged.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_distinctUntilChanged__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/distinctUntilChanged.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_distinctUntilChanged PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.distinctUntilChanged = __WEBPACK_IMPORTED_MODULE_1__operator_distinctUntilChanged__["a" /* distinctUntilChanged */];
//# sourceMappingURL=distinctUntilChanged.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/distinctUntilKeyChanged.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_distinctUntilKeyChanged__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/distinctUntilKeyChanged.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_distinctUntilKeyChanged PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.distinctUntilKeyChanged = __WEBPACK_IMPORTED_MODULE_1__operator_distinctUntilKeyChanged__["a" /* distinctUntilKeyChanged */];
//# sourceMappingURL=distinctUntilKeyChanged.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/do.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_do__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/do.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_do PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.do = __WEBPACK_IMPORTED_MODULE_1__operator_do__["a" /* _do */];
__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype._do = __WEBPACK_IMPORTED_MODULE_1__operator_do__["a" /* _do */];
//# sourceMappingURL=do.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/elementAt.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_elementAt__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/elementAt.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_elementAt PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.elementAt = __WEBPACK_IMPORTED_MODULE_1__operator_elementAt__["a" /* elementAt */];
//# sourceMappingURL=elementAt.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/every.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_every__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/every.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_every PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.every = __WEBPACK_IMPORTED_MODULE_1__operator_every__["a" /* every */];
//# sourceMappingURL=every.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/exhaust.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_exhaust__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/exhaust.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_exhaust PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.exhaust = __WEBPACK_IMPORTED_MODULE_1__operator_exhaust__["a" /* exhaust */];
//# sourceMappingURL=exhaust.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/exhaustMap.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_exhaustMap__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/exhaustMap.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_exhaustMap PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.exhaustMap = __WEBPACK_IMPORTED_MODULE_1__operator_exhaustMap__["a" /* exhaustMap */];
//# sourceMappingURL=exhaustMap.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/expand.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_expand__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/expand.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_expand PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.expand = __WEBPACK_IMPORTED_MODULE_1__operator_expand__["a" /* expand */];
//# sourceMappingURL=expand.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/finally.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_finally__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/finally.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_finally PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.finally = __WEBPACK_IMPORTED_MODULE_1__operator_finally__["a" /* _finally */];
__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype._finally = __WEBPACK_IMPORTED_MODULE_1__operator_finally__["a" /* _finally */];
//# sourceMappingURL=finally.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/find.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_find__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/find.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_find PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.find = __WEBPACK_IMPORTED_MODULE_1__operator_find__["a" /* find */];
//# sourceMappingURL=find.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/findIndex.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_findIndex__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/findIndex.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_findIndex PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.findIndex = __WEBPACK_IMPORTED_MODULE_1__operator_findIndex__["a" /* findIndex */];
//# sourceMappingURL=findIndex.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/first.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_first__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/first.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_first PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.first = __WEBPACK_IMPORTED_MODULE_1__operator_first__["a" /* first */];
//# sourceMappingURL=first.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/groupBy.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_groupBy__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/groupBy.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_groupBy PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.groupBy = __WEBPACK_IMPORTED_MODULE_1__operator_groupBy__["a" /* groupBy */];
//# sourceMappingURL=groupBy.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/ignoreElements.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_ignoreElements__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/ignoreElements.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_ignoreElements PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.ignoreElements = __WEBPACK_IMPORTED_MODULE_1__operator_ignoreElements__["a" /* ignoreElements */];
//# sourceMappingURL=ignoreElements.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/isEmpty.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_isEmpty__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/isEmpty.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_isEmpty PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.isEmpty = __WEBPACK_IMPORTED_MODULE_1__operator_isEmpty__["a" /* isEmpty */];
//# sourceMappingURL=isEmpty.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/last.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_last__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/last.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_last PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.last = __WEBPACK_IMPORTED_MODULE_1__operator_last__["a" /* last */];
//# sourceMappingURL=last.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/let.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_let__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/let.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_let PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.let = __WEBPACK_IMPORTED_MODULE_1__operator_let__["a" /* letProto */];
__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.letBind = __WEBPACK_IMPORTED_MODULE_1__operator_let__["a" /* letProto */];
//# sourceMappingURL=let.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/mapTo.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_mapTo__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/mapTo.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_mapTo PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.mapTo = __WEBPACK_IMPORTED_MODULE_1__operator_mapTo__["a" /* mapTo */];
//# sourceMappingURL=mapTo.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/materialize.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_materialize__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/materialize.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_materialize PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.materialize = __WEBPACK_IMPORTED_MODULE_1__operator_materialize__["a" /* materialize */];
//# sourceMappingURL=materialize.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/max.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_max__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/max.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_max PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.max = __WEBPACK_IMPORTED_MODULE_1__operator_max__["a" /* max */];
//# sourceMappingURL=max.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/merge.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_merge__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/merge.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_merge PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.merge = __WEBPACK_IMPORTED_MODULE_1__operator_merge__["a" /* merge */];
//# sourceMappingURL=merge.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/mergeAll.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_mergeAll__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/mergeAll.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_mergeAll PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.mergeAll = __WEBPACK_IMPORTED_MODULE_1__operator_mergeAll__["a" /* mergeAll */];
//# sourceMappingURL=mergeAll.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/mergeMapTo.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_mergeMapTo__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/mergeMapTo.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_mergeMapTo PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.flatMapTo = __WEBPACK_IMPORTED_MODULE_1__operator_mergeMapTo__["a" /* mergeMapTo */];
__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.mergeMapTo = __WEBPACK_IMPORTED_MODULE_1__operator_mergeMapTo__["a" /* mergeMapTo */];
//# sourceMappingURL=mergeMapTo.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/mergeScan.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_mergeScan__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/mergeScan.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_mergeScan PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.mergeScan = __WEBPACK_IMPORTED_MODULE_1__operator_mergeScan__["a" /* mergeScan */];
//# sourceMappingURL=mergeScan.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/min.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_min__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/min.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_min PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.min = __WEBPACK_IMPORTED_MODULE_1__operator_min__["a" /* min */];
//# sourceMappingURL=min.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/multicast.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_multicast__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/multicast.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_multicast PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.multicast = __WEBPACK_IMPORTED_MODULE_1__operator_multicast__["a" /* multicast */];
//# sourceMappingURL=multicast.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/observeOn.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_observeOn__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/observeOn.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_observeOn PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.observeOn = __WEBPACK_IMPORTED_MODULE_1__operator_observeOn__["a" /* observeOn */];
//# sourceMappingURL=observeOn.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/onErrorResumeNext.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_onErrorResumeNext__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/onErrorResumeNext.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_onErrorResumeNext PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.onErrorResumeNext = __WEBPACK_IMPORTED_MODULE_1__operator_onErrorResumeNext__["a" /* onErrorResumeNext */];
//# sourceMappingURL=onErrorResumeNext.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/pairwise.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_pairwise__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/pairwise.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_pairwise PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.pairwise = __WEBPACK_IMPORTED_MODULE_1__operator_pairwise__["a" /* pairwise */];
//# sourceMappingURL=pairwise.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/partition.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_partition__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/partition.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_partition PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.partition = __WEBPACK_IMPORTED_MODULE_1__operator_partition__["a" /* partition */];
//# sourceMappingURL=partition.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/publish.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_publish__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/publish.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_publish PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.publish = __WEBPACK_IMPORTED_MODULE_1__operator_publish__["a" /* publish */];
//# sourceMappingURL=publish.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/publishBehavior.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_publishBehavior__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/publishBehavior.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_publishBehavior PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.publishBehavior = __WEBPACK_IMPORTED_MODULE_1__operator_publishBehavior__["a" /* publishBehavior */];
//# sourceMappingURL=publishBehavior.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/publishLast.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_publishLast__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/publishLast.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_publishLast PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.publishLast = __WEBPACK_IMPORTED_MODULE_1__operator_publishLast__["a" /* publishLast */];
//# sourceMappingURL=publishLast.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/publishReplay.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_publishReplay__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/publishReplay.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_publishReplay PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.publishReplay = __WEBPACK_IMPORTED_MODULE_1__operator_publishReplay__["a" /* publishReplay */];
//# sourceMappingURL=publishReplay.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/race.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_race__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/race.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_race PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.race = __WEBPACK_IMPORTED_MODULE_1__operator_race__["a" /* race */];
//# sourceMappingURL=race.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/reduce.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_reduce__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/reduce.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_reduce PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.reduce = __WEBPACK_IMPORTED_MODULE_1__operator_reduce__["a" /* reduce */];
//# sourceMappingURL=reduce.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/repeat.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_repeat__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/repeat.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_repeat PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.repeat = __WEBPACK_IMPORTED_MODULE_1__operator_repeat__["a" /* repeat */];
//# sourceMappingURL=repeat.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/repeatWhen.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_repeatWhen__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/repeatWhen.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_repeatWhen PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.repeatWhen = __WEBPACK_IMPORTED_MODULE_1__operator_repeatWhen__["a" /* repeatWhen */];
//# sourceMappingURL=repeatWhen.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/retry.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_retry__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/retry.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_retry PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.retry = __WEBPACK_IMPORTED_MODULE_1__operator_retry__["a" /* retry */];
//# sourceMappingURL=retry.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/retryWhen.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_retryWhen__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/retryWhen.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_retryWhen PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.retryWhen = __WEBPACK_IMPORTED_MODULE_1__operator_retryWhen__["a" /* retryWhen */];
//# sourceMappingURL=retryWhen.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/sample.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_sample__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/sample.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_sample PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.sample = __WEBPACK_IMPORTED_MODULE_1__operator_sample__["a" /* sample */];
//# sourceMappingURL=sample.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/sampleTime.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_sampleTime__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/sampleTime.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_sampleTime PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.sampleTime = __WEBPACK_IMPORTED_MODULE_1__operator_sampleTime__["a" /* sampleTime */];
//# sourceMappingURL=sampleTime.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/scan.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_scan__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/scan.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_scan PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.scan = __WEBPACK_IMPORTED_MODULE_1__operator_scan__["a" /* scan */];
//# sourceMappingURL=scan.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/sequenceEqual.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_sequenceEqual__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/sequenceEqual.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_sequenceEqual PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.sequenceEqual = __WEBPACK_IMPORTED_MODULE_1__operator_sequenceEqual__["a" /* sequenceEqual */];
//# sourceMappingURL=sequenceEqual.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/shareReplay.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_shareReplay__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/shareReplay.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_shareReplay PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.shareReplay = __WEBPACK_IMPORTED_MODULE_1__operator_shareReplay__["a" /* shareReplay */];
//# sourceMappingURL=shareReplay.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/single.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_single__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/single.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_single PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.single = __WEBPACK_IMPORTED_MODULE_1__operator_single__["a" /* single */];
//# sourceMappingURL=single.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/skip.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_skip__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/skip.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_skip PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.skip = __WEBPACK_IMPORTED_MODULE_1__operator_skip__["a" /* skip */];
//# sourceMappingURL=skip.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/skipLast.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_skipLast__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/skipLast.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_skipLast PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.skipLast = __WEBPACK_IMPORTED_MODULE_1__operator_skipLast__["a" /* skipLast */];
//# sourceMappingURL=skipLast.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/skipUntil.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_skipUntil__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/skipUntil.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_skipUntil PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.skipUntil = __WEBPACK_IMPORTED_MODULE_1__operator_skipUntil__["a" /* skipUntil */];
//# sourceMappingURL=skipUntil.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/skipWhile.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_skipWhile__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/skipWhile.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_skipWhile PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.skipWhile = __WEBPACK_IMPORTED_MODULE_1__operator_skipWhile__["a" /* skipWhile */];
//# sourceMappingURL=skipWhile.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/startWith.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_startWith__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/startWith.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_startWith PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.startWith = __WEBPACK_IMPORTED_MODULE_1__operator_startWith__["a" /* startWith */];
//# sourceMappingURL=startWith.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/subscribeOn.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_subscribeOn__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/subscribeOn.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_subscribeOn PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.subscribeOn = __WEBPACK_IMPORTED_MODULE_1__operator_subscribeOn__["a" /* subscribeOn */];
//# sourceMappingURL=subscribeOn.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/switch.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_switch__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/switch.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_switch PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.switch = __WEBPACK_IMPORTED_MODULE_1__operator_switch__["a" /* _switch */];
__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype._switch = __WEBPACK_IMPORTED_MODULE_1__operator_switch__["a" /* _switch */];
//# sourceMappingURL=switch.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/switchMap.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_switchMap__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/switchMap.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_switchMap PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.switchMap = __WEBPACK_IMPORTED_MODULE_1__operator_switchMap__["a" /* switchMap */];
//# sourceMappingURL=switchMap.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/switchMapTo.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_switchMapTo__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/switchMapTo.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_switchMapTo PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.switchMapTo = __WEBPACK_IMPORTED_MODULE_1__operator_switchMapTo__["a" /* switchMapTo */];
//# sourceMappingURL=switchMapTo.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/take.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_take__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/take.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_take PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.take = __WEBPACK_IMPORTED_MODULE_1__operator_take__["a" /* take */];
//# sourceMappingURL=take.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/takeLast.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_takeLast__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/takeLast.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_takeLast PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.takeLast = __WEBPACK_IMPORTED_MODULE_1__operator_takeLast__["a" /* takeLast */];
//# sourceMappingURL=takeLast.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/takeUntil.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_takeUntil__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/takeUntil.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_takeUntil PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.takeUntil = __WEBPACK_IMPORTED_MODULE_1__operator_takeUntil__["a" /* takeUntil */];
//# sourceMappingURL=takeUntil.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/takeWhile.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_takeWhile__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/takeWhile.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_takeWhile PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.takeWhile = __WEBPACK_IMPORTED_MODULE_1__operator_takeWhile__["a" /* takeWhile */];
//# sourceMappingURL=takeWhile.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/throttle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_throttle__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/throttle.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_throttle PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.throttle = __WEBPACK_IMPORTED_MODULE_1__operator_throttle__["a" /* throttle */];
//# sourceMappingURL=throttle.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/throttleTime.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_throttleTime__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/throttleTime.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_throttleTime PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.throttleTime = __WEBPACK_IMPORTED_MODULE_1__operator_throttleTime__["a" /* throttleTime */];
//# sourceMappingURL=throttleTime.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/timeInterval.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_timeInterval__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/timeInterval.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_timeInterval PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.timeInterval = __WEBPACK_IMPORTED_MODULE_1__operator_timeInterval__["a" /* timeInterval */];
//# sourceMappingURL=timeInterval.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/timeout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_timeout__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/timeout.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_timeout PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.timeout = __WEBPACK_IMPORTED_MODULE_1__operator_timeout__["a" /* timeout */];
//# sourceMappingURL=timeout.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/timeoutWith.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_timeoutWith__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/timeoutWith.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_timeoutWith PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.timeoutWith = __WEBPACK_IMPORTED_MODULE_1__operator_timeoutWith__["a" /* timeoutWith */];
//# sourceMappingURL=timeoutWith.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/timestamp.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_timestamp__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/timestamp.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_timestamp PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.timestamp = __WEBPACK_IMPORTED_MODULE_1__operator_timestamp__["a" /* timestamp */];
//# sourceMappingURL=timestamp.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/toArray.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_toArray__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/toArray.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_toArray PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.toArray = __WEBPACK_IMPORTED_MODULE_1__operator_toArray__["a" /* toArray */];
//# sourceMappingURL=toArray.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/toPromise.js":
/***/ (function(module, exports) {

// HACK: does nothing, because `toPromise` now lives on the `Observable` itself.
// leaving this module here to prevent breakage.
//# sourceMappingURL=toPromise.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/window.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_window__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/window.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_window PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.window = __WEBPACK_IMPORTED_MODULE_1__operator_window__["a" /* window */];
//# sourceMappingURL=window.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/windowCount.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_windowCount__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/windowCount.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_windowCount PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.windowCount = __WEBPACK_IMPORTED_MODULE_1__operator_windowCount__["a" /* windowCount */];
//# sourceMappingURL=windowCount.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/windowTime.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_windowTime__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/windowTime.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_windowTime PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.windowTime = __WEBPACK_IMPORTED_MODULE_1__operator_windowTime__["a" /* windowTime */];
//# sourceMappingURL=windowTime.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/windowToggle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_windowToggle__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/windowToggle.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_windowToggle PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.windowToggle = __WEBPACK_IMPORTED_MODULE_1__operator_windowToggle__["a" /* windowToggle */];
//# sourceMappingURL=windowToggle.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/windowWhen.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_windowWhen__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/windowWhen.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_windowWhen PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.windowWhen = __WEBPACK_IMPORTED_MODULE_1__operator_windowWhen__["a" /* windowWhen */];
//# sourceMappingURL=windowWhen.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/withLatestFrom.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_withLatestFrom__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/withLatestFrom.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_withLatestFrom PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.withLatestFrom = __WEBPACK_IMPORTED_MODULE_1__operator_withLatestFrom__["a" /* withLatestFrom */];
//# sourceMappingURL=withLatestFrom.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/zip.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_zip__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/zip.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_zip PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.zip = __WEBPACK_IMPORTED_MODULE_1__operator_zip__["a" /* zipProto */];
//# sourceMappingURL=zip.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/zipAll.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_zipAll__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/zipAll.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_zipAll PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.zipAll = __WEBPACK_IMPORTED_MODULE_1__operator_zipAll__["a" /* zipAll */];
//# sourceMappingURL=zipAll.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/observable/BoundCallbackObservable.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoundCallbackObservable; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_tryCatch__ = __webpack_require__("./node_modules/rxjs/_esm5/util/tryCatch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_errorObject__ = __webpack_require__("./node_modules/rxjs/_esm5/util/errorObject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__AsyncSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/AsyncSubject.js");
/** PURE_IMPORTS_START .._Observable,.._util_tryCatch,.._util_errorObject,.._AsyncSubject PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};




/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var BoundCallbackObservable = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(BoundCallbackObservable, _super);
    function BoundCallbackObservable(callbackFunc, selector, args, context, scheduler) {
        _super.call(this);
        this.callbackFunc = callbackFunc;
        this.selector = selector;
        this.args = args;
        this.context = context;
        this.scheduler = scheduler;
    }
    /* tslint:enable:max-line-length */
    /**
     * Converts a callback API to a function that returns an Observable.
     *
     * <span class="informal">Give it a function `f` of type `f(x, callback)` and
     * it will return a function `g` that when called as `g(x)` will output an
     * Observable.</span>
     *
     * `bindCallback` is not an operator because its input and output are not
     * Observables. The input is a function `func` with some parameters, the
     * last parameter must be a callback function that `func` calls when it is
     * done.
     *
     * The output of `bindCallback` is a function that takes the same parameters
     * as `func`, except the last one (the callback). When the output function
     * is called with arguments it will return an Observable. If function `func`
     * calls its callback with one argument the Observable will emit that value.
     * If on the other hand the callback is called with multiple values the resulting
     * Observable will emit an array with said values as arguments.
     *
     * It is very important to remember that input function `func` is not called
     * when the output function is, but rather when the Observable returned by the output
     * function is subscribed. This means if `func` makes an AJAX request, that request
     * will be made every time someone subscribes to the resulting Observable, but not before.
     *
     * Optionally, a selector function can be passed to `bindObservable`. The selector function
     * takes the same arguments as the callback and returns the value that will be emitted by the Observable.
     * Even though by default multiple arguments passed to callback appear in the stream as an array
     * the selector function will be called with arguments directly, just as the callback would.
     * This means you can imagine the default selector (when one is not provided explicitly)
     * as a function that aggregates all its arguments into an array, or simply returns first argument
     * if there is only one.
     *
     * The last optional parameter - {@link Scheduler} - can be used to control when the call
     * to `func` happens after someone subscribes to Observable, as well as when results
     * passed to callback will be emitted. By default, the subscription to  an Observable calls `func`
     * synchronously, but using `Scheduler.async` as the last parameter will defer the call to `func`,
     * just like wrapping the call in `setTimeout` with a timeout of `0` would. If you use the async Scheduler
     * and call `subscribe` on the output Observable all function calls that are currently executing
     * will end before `func` is invoked.
     *
     * By default results passed to the callback are emitted immediately after `func` invokes the callback.
     * In particular, if the callback is called synchronously the subscription of the resulting Observable
     * will call the `next` function synchronously as well.  If you want to defer that call,
     * you may use `Scheduler.async` just as before.  This means that by using `Scheduler.async` you can
     * ensure that `func` always calls its callback asynchronously, thus avoiding terrifying Zalgo.
     *
     * Note that the Observable created by the output function will always emit a single value
     * and then complete immediately. If `func` calls the callback multiple times, values from subsequent
     * calls will not appear in the stream. If you need to listen for multiple calls,
     *  you probably want to use {@link fromEvent} or {@link fromEventPattern} instead.
     *
     * If `func` depends on some context (`this` property) and is not already bound the context of `func`
     * will be the context that the output function has at call time. In particular, if `func`
     * is called as a method of some objec and if `func` is not already bound, in order to preserve the context
     * it is recommended that the context of the output function is set to that object as well.
     *
     * If the input function calls its callback in the "node style" (i.e. first argument to callback is
     * optional error parameter signaling whether the call failed or not), {@link bindNodeCallback}
     * provides convenient error handling and probably is a better choice.
     * `bindCallback` will treat such functions the same as any other and error parameters
     * (whether passed or not) will always be interpreted as regular callback argument.
     *
     *
     * @example <caption>Convert jQuery's getJSON to an Observable API</caption>
     * // Suppose we have jQuery.getJSON('/my/url', callback)
     * var getJSONAsObservable = Rx.Observable.bindCallback(jQuery.getJSON);
     * var result = getJSONAsObservable('/my/url');
     * result.subscribe(x => console.log(x), e => console.error(e));
     *
     *
     * @example <caption>Receive an array of arguments passed to a callback</caption>
     * someFunction((a, b, c) => {
     *   console.log(a); // 5
     *   console.log(b); // 'some string'
     *   console.log(c); // {someProperty: 'someValue'}
     * });
     *
     * const boundSomeFunction = Rx.Observable.bindCallback(someFunction);
     * boundSomeFunction().subscribe(values => {
     *   console.log(values) // [5, 'some string', {someProperty: 'someValue'}]
     * });
     *
     *
     * @example <caption>Use bindCallback with a selector function</caption>
     * someFunction((a, b, c) => {
     *   console.log(a); // 'a'
     *   console.log(b); // 'b'
     *   console.log(c); // 'c'
     * });
     *
     * const boundSomeFunction = Rx.Observable.bindCallback(someFunction, (a, b, c) => a + b + c);
     * boundSomeFunction().subscribe(value => {
     *   console.log(value) // 'abc'
     * });
     *
     *
     * @example <caption>Compare behaviour with and without async Scheduler</caption>
     * function iCallMyCallbackSynchronously(cb) {
     *   cb();
     * }
     *
     * const boundSyncFn = Rx.Observable.bindCallback(iCallMyCallbackSynchronously);
     * const boundAsyncFn = Rx.Observable.bindCallback(iCallMyCallbackSynchronously, null, Rx.Scheduler.async);
     *
     * boundSyncFn().subscribe(() => console.log('I was sync!'));
     * boundAsyncFn().subscribe(() => console.log('I was async!'));
     * console.log('This happened...');
     *
     * // Logs:
     * // I was sync!
     * // This happened...
     * // I was async!
     *
     *
     * @example <caption>Use bindCallback on an object method</caption>
     * const boundMethod = Rx.Observable.bindCallback(someObject.methodWithCallback);
     * boundMethod.call(someObject) // make sure methodWithCallback has access to someObject
     * .subscribe(subscriber);
     *
     *
     * @see {@link bindNodeCallback}
     * @see {@link from}
     * @see {@link fromPromise}
     *
     * @param {function} func A function with a callback as the last parameter.
     * @param {function} [selector] A function which takes the arguments from the
     * callback and maps them to a value that is emitted on the output Observable.
     * @param {Scheduler} [scheduler] The scheduler on which to schedule the
     * callbacks.
     * @return {function(...params: *): Observable} A function which returns the
     * Observable that delivers the same values the callback would deliver.
     * @static true
     * @name bindCallback
     * @owner Observable
     */
    BoundCallbackObservable.create = function (func, selector, scheduler) {
        if (selector === void 0) {
            selector = undefined;
        }
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i - 0] = arguments[_i];
            }
            return new BoundCallbackObservable(func, selector, args, this, scheduler);
        };
    };
    BoundCallbackObservable.prototype._subscribe = function (subscriber) {
        var callbackFunc = this.callbackFunc;
        var args = this.args;
        var scheduler = this.scheduler;
        var subject = this.subject;
        if (!scheduler) {
            if (!subject) {
                subject = this.subject = new __WEBPACK_IMPORTED_MODULE_3__AsyncSubject__["a" /* AsyncSubject */]();
                var handler = function handlerFn() {
                    var innerArgs = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        innerArgs[_i - 0] = arguments[_i];
                    }
                    var source = handlerFn.source;
                    var selector = source.selector, subject = source.subject;
                    if (selector) {
                        var result_1 = Object(__WEBPACK_IMPORTED_MODULE_1__util_tryCatch__["a" /* tryCatch */])(selector).apply(this, innerArgs);
                        if (result_1 === __WEBPACK_IMPORTED_MODULE_2__util_errorObject__["a" /* errorObject */]) {
                            subject.error(__WEBPACK_IMPORTED_MODULE_2__util_errorObject__["a" /* errorObject */].e);
                        }
                        else {
                            subject.next(result_1);
                            subject.complete();
                        }
                    }
                    else {
                        subject.next(innerArgs.length <= 1 ? innerArgs[0] : innerArgs);
                        subject.complete();
                    }
                };
                // use named function instance to avoid closure.
                handler.source = this;
                var result = Object(__WEBPACK_IMPORTED_MODULE_1__util_tryCatch__["a" /* tryCatch */])(callbackFunc).apply(this.context, args.concat(handler));
                if (result === __WEBPACK_IMPORTED_MODULE_2__util_errorObject__["a" /* errorObject */]) {
                    subject.error(__WEBPACK_IMPORTED_MODULE_2__util_errorObject__["a" /* errorObject */].e);
                }
            }
            return subject.subscribe(subscriber);
        }
        else {
            return scheduler.schedule(BoundCallbackObservable.dispatch, 0, { source: this, subscriber: subscriber, context: this.context });
        }
    };
    BoundCallbackObservable.dispatch = function (state) {
        var self = this;
        var source = state.source, subscriber = state.subscriber, context = state.context;
        var callbackFunc = source.callbackFunc, args = source.args, scheduler = source.scheduler;
        var subject = source.subject;
        if (!subject) {
            subject = source.subject = new __WEBPACK_IMPORTED_MODULE_3__AsyncSubject__["a" /* AsyncSubject */]();
            var handler = function handlerFn() {
                var innerArgs = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    innerArgs[_i - 0] = arguments[_i];
                }
                var source = handlerFn.source;
                var selector = source.selector, subject = source.subject;
                if (selector) {
                    var result_2 = Object(__WEBPACK_IMPORTED_MODULE_1__util_tryCatch__["a" /* tryCatch */])(selector).apply(this, innerArgs);
                    if (result_2 === __WEBPACK_IMPORTED_MODULE_2__util_errorObject__["a" /* errorObject */]) {
                        self.add(scheduler.schedule(dispatchError, 0, { err: __WEBPACK_IMPORTED_MODULE_2__util_errorObject__["a" /* errorObject */].e, subject: subject }));
                    }
                    else {
                        self.add(scheduler.schedule(dispatchNext, 0, { value: result_2, subject: subject }));
                    }
                }
                else {
                    var value = innerArgs.length <= 1 ? innerArgs[0] : innerArgs;
                    self.add(scheduler.schedule(dispatchNext, 0, { value: value, subject: subject }));
                }
            };
            // use named function to pass values in without closure
            handler.source = source;
            var result = Object(__WEBPACK_IMPORTED_MODULE_1__util_tryCatch__["a" /* tryCatch */])(callbackFunc).apply(context, args.concat(handler));
            if (result === __WEBPACK_IMPORTED_MODULE_2__util_errorObject__["a" /* errorObject */]) {
                subject.error(__WEBPACK_IMPORTED_MODULE_2__util_errorObject__["a" /* errorObject */].e);
            }
        }
        self.add(subject.subscribe(subscriber));
    };
    return BoundCallbackObservable;
}(__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */]));
function dispatchNext(arg) {
    var value = arg.value, subject = arg.subject;
    subject.next(value);
    subject.complete();
}
function dispatchError(arg) {
    var err = arg.err, subject = arg.subject;
    subject.error(err);
}
//# sourceMappingURL=BoundCallbackObservable.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/observable/BoundNodeCallbackObservable.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoundNodeCallbackObservable; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_tryCatch__ = __webpack_require__("./node_modules/rxjs/_esm5/util/tryCatch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_errorObject__ = __webpack_require__("./node_modules/rxjs/_esm5/util/errorObject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__AsyncSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/AsyncSubject.js");
/** PURE_IMPORTS_START .._Observable,.._util_tryCatch,.._util_errorObject,.._AsyncSubject PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};




/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var BoundNodeCallbackObservable = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(BoundNodeCallbackObservable, _super);
    function BoundNodeCallbackObservable(callbackFunc, selector, args, context, scheduler) {
        _super.call(this);
        this.callbackFunc = callbackFunc;
        this.selector = selector;
        this.args = args;
        this.context = context;
        this.scheduler = scheduler;
    }
    /* tslint:enable:max-line-length */
    /**
     * Converts a Node.js-style callback API to a function that returns an
     * Observable.
     *
     * <span class="informal">It's just like {@link bindCallback}, but the
     * callback is expected to be of type `callback(error, result)`.</span>
     *
     * `bindNodeCallback` is not an operator because its input and output are not
     * Observables. The input is a function `func` with some parameters, but the
     * last parameter must be a callback function that `func` calls when it is
     * done. The callback function is expected to follow Node.js conventions,
     * where the first argument to the callback is an error object, signaling
     * whether call was successful. If that object is passed to callback, it means
     * something went wrong.
     *
     * The output of `bindNodeCallback` is a function that takes the same
     * parameters as `func`, except the last one (the callback). When the output
     * function is called with arguments, it will return an Observable.
     * If `func` calls its callback with error parameter present, Observable will
     * error with that value as well. If error parameter is not passed, Observable will emit
     * second parameter. If there are more parameters (third and so on),
     * Observable will emit an array with all arguments, except first error argument.
     *
     * Optionally `bindNodeCallback` accepts selector function, which allows you to
     * make resulting Observable emit value computed by selector, instead of regular
     * callback arguments. It works similarly to {@link bindCallback} selector, but
     * Node.js-style error argument will never be passed to that function.
     *
     * Note that `func` will not be called at the same time output function is,
     * but rather whenever resulting Observable is subscribed. By default call to
     * `func` will happen synchronously after subscription, but that can be changed
     * with proper {@link Scheduler} provided as optional third parameter. Scheduler
     * can also control when values from callback will be emitted by Observable.
     * To find out more, check out documentation for {@link bindCallback}, where
     * Scheduler works exactly the same.
     *
     * As in {@link bindCallback}, context (`this` property) of input function will be set to context
     * of returned function, when it is called.
     *
     * After Observable emits value, it will complete immediately. This means
     * even if `func` calls callback again, values from second and consecutive
     * calls will never appear on the stream. If you need to handle functions
     * that call callbacks multiple times, check out {@link fromEvent} or
     * {@link fromEventPattern} instead.
     *
     * Note that `bindNodeCallback` can be used in non-Node.js environments as well.
     * "Node.js-style" callbacks are just a convention, so if you write for
     * browsers or any other environment and API you use implements that callback style,
     * `bindNodeCallback` can be safely used on that API functions as well.
     *
     * Remember that Error object passed to callback does not have to be an instance
     * of JavaScript built-in `Error` object. In fact, it does not even have to an object.
     * Error parameter of callback function is interpreted as "present", when value
     * of that parameter is truthy. It could be, for example, non-zero number, non-empty
     * string or boolean `true`. In all of these cases resulting Observable would error
     * with that value. This means usually regular style callbacks will fail very often when
     * `bindNodeCallback` is used. If your Observable errors much more often then you
     * would expect, check if callback really is called in Node.js-style and, if not,
     * switch to {@link bindCallback} instead.
     *
     * Note that even if error parameter is technically present in callback, but its value
     * is falsy, it still won't appear in array emitted by Observable or in selector function.
     *
     *
     * @example <caption>Read a file from the filesystem and get the data as an Observable</caption>
     * import * as fs from 'fs';
     * var readFileAsObservable = Rx.Observable.bindNodeCallback(fs.readFile);
     * var result = readFileAsObservable('./roadNames.txt', 'utf8');
     * result.subscribe(x => console.log(x), e => console.error(e));
     *
     *
     * @example <caption>Use on function calling callback with multiple arguments</caption>
     * someFunction((err, a, b) => {
     *   console.log(err); // null
     *   console.log(a); // 5
     *   console.log(b); // "some string"
     * });
     * var boundSomeFunction = Rx.Observable.bindNodeCallback(someFunction);
     * boundSomeFunction()
     * .subscribe(value => {
     *   console.log(value); // [5, "some string"]
     * });
     *
     *
     * @example <caption>Use with selector function</caption>
     * someFunction((err, a, b) => {
     *   console.log(err); // undefined
     *   console.log(a); // "abc"
     *   console.log(b); // "DEF"
     * });
     * var boundSomeFunction = Rx.Observable.bindNodeCallback(someFunction, (a, b) => a + b);
     * boundSomeFunction()
     * .subscribe(value => {
     *   console.log(value); // "abcDEF"
     * });
     *
     *
     * @example <caption>Use on function calling callback in regular style</caption>
     * someFunction(a => {
     *   console.log(a); // 5
     * });
     * var boundSomeFunction = Rx.Observable.bindNodeCallback(someFunction);
     * boundSomeFunction()
     * .subscribe(
     *   value => {}             // never gets called
     *   err => console.log(err) // 5
     *);
     *
     *
     * @see {@link bindCallback}
     * @see {@link from}
     * @see {@link fromPromise}
     *
     * @param {function} func Function with a Node.js-style callback as the last parameter.
     * @param {function} [selector] A function which takes the arguments from the
     * callback and maps those to a value to emit on the output Observable.
     * @param {Scheduler} [scheduler] The scheduler on which to schedule the
     * callbacks.
     * @return {function(...params: *): Observable} A function which returns the
     * Observable that delivers the same values the Node.js callback would
     * deliver.
     * @static true
     * @name bindNodeCallback
     * @owner Observable
     */
    BoundNodeCallbackObservable.create = function (func, selector, scheduler) {
        if (selector === void 0) {
            selector = undefined;
        }
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i - 0] = arguments[_i];
            }
            return new BoundNodeCallbackObservable(func, selector, args, this, scheduler);
        };
    };
    BoundNodeCallbackObservable.prototype._subscribe = function (subscriber) {
        var callbackFunc = this.callbackFunc;
        var args = this.args;
        var scheduler = this.scheduler;
        var subject = this.subject;
        if (!scheduler) {
            if (!subject) {
                subject = this.subject = new __WEBPACK_IMPORTED_MODULE_3__AsyncSubject__["a" /* AsyncSubject */]();
                var handler = function handlerFn() {
                    var innerArgs = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        innerArgs[_i - 0] = arguments[_i];
                    }
                    var source = handlerFn.source;
                    var selector = source.selector, subject = source.subject;
                    var err = innerArgs.shift();
                    if (err) {
                        subject.error(err);
                    }
                    else if (selector) {
                        var result_1 = Object(__WEBPACK_IMPORTED_MODULE_1__util_tryCatch__["a" /* tryCatch */])(selector).apply(this, innerArgs);
                        if (result_1 === __WEBPACK_IMPORTED_MODULE_2__util_errorObject__["a" /* errorObject */]) {
                            subject.error(__WEBPACK_IMPORTED_MODULE_2__util_errorObject__["a" /* errorObject */].e);
                        }
                        else {
                            subject.next(result_1);
                            subject.complete();
                        }
                    }
                    else {
                        subject.next(innerArgs.length <= 1 ? innerArgs[0] : innerArgs);
                        subject.complete();
                    }
                };
                // use named function instance to avoid closure.
                handler.source = this;
                var result = Object(__WEBPACK_IMPORTED_MODULE_1__util_tryCatch__["a" /* tryCatch */])(callbackFunc).apply(this.context, args.concat(handler));
                if (result === __WEBPACK_IMPORTED_MODULE_2__util_errorObject__["a" /* errorObject */]) {
                    subject.error(__WEBPACK_IMPORTED_MODULE_2__util_errorObject__["a" /* errorObject */].e);
                }
            }
            return subject.subscribe(subscriber);
        }
        else {
            return scheduler.schedule(dispatch, 0, { source: this, subscriber: subscriber, context: this.context });
        }
    };
    return BoundNodeCallbackObservable;
}(__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */]));
function dispatch(state) {
    var self = this;
    var source = state.source, subscriber = state.subscriber, context = state.context;
    // XXX: cast to `any` to access to the private field in `source`.
    var _a = source, callbackFunc = _a.callbackFunc, args = _a.args, scheduler = _a.scheduler;
    var subject = source.subject;
    if (!subject) {
        subject = source.subject = new __WEBPACK_IMPORTED_MODULE_3__AsyncSubject__["a" /* AsyncSubject */]();
        var handler = function handlerFn() {
            var innerArgs = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                innerArgs[_i - 0] = arguments[_i];
            }
            var source = handlerFn.source;
            var selector = source.selector, subject = source.subject;
            var err = innerArgs.shift();
            if (err) {
                self.add(scheduler.schedule(dispatchError, 0, { err: err, subject: subject }));
            }
            else if (selector) {
                var result_2 = Object(__WEBPACK_IMPORTED_MODULE_1__util_tryCatch__["a" /* tryCatch */])(selector).apply(this, innerArgs);
                if (result_2 === __WEBPACK_IMPORTED_MODULE_2__util_errorObject__["a" /* errorObject */]) {
                    self.add(scheduler.schedule(dispatchError, 0, { err: __WEBPACK_IMPORTED_MODULE_2__util_errorObject__["a" /* errorObject */].e, subject: subject }));
                }
                else {
                    self.add(scheduler.schedule(dispatchNext, 0, { value: result_2, subject: subject }));
                }
            }
            else {
                var value = innerArgs.length <= 1 ? innerArgs[0] : innerArgs;
                self.add(scheduler.schedule(dispatchNext, 0, { value: value, subject: subject }));
            }
        };
        // use named function to pass values in without closure
        handler.source = source;
        var result = Object(__WEBPACK_IMPORTED_MODULE_1__util_tryCatch__["a" /* tryCatch */])(callbackFunc).apply(context, args.concat(handler));
        if (result === __WEBPACK_IMPORTED_MODULE_2__util_errorObject__["a" /* errorObject */]) {
            self.add(scheduler.schedule(dispatchError, 0, { err: __WEBPACK_IMPORTED_MODULE_2__util_errorObject__["a" /* errorObject */].e, subject: subject }));
        }
    }
    self.add(subject.subscribe(subscriber));
}
function dispatchNext(arg) {
    var value = arg.value, subject = arg.subject;
    subject.next(value);
    subject.complete();
}
function dispatchError(arg) {
    var err = arg.err, subject = arg.subject;
    subject.error(err);
}
//# sourceMappingURL=BoundNodeCallbackObservable.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/observable/DeferObservable.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeferObservable; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_subscribeToResult__ = __webpack_require__("./node_modules/rxjs/_esm5/util/subscribeToResult.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__OuterSubscriber__ = __webpack_require__("./node_modules/rxjs/_esm5/OuterSubscriber.js");
/** PURE_IMPORTS_START .._Observable,.._util_subscribeToResult,.._OuterSubscriber PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};



/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var DeferObservable = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(DeferObservable, _super);
    function DeferObservable(observableFactory) {
        _super.call(this);
        this.observableFactory = observableFactory;
    }
    /**
     * Creates an Observable that, on subscribe, calls an Observable factory to
     * make an Observable for each new Observer.
     *
     * <span class="informal">Creates the Observable lazily, that is, only when it
     * is subscribed.
     * </span>
     *
     * <img src="./img/defer.png" width="100%">
     *
     * `defer` allows you to create the Observable only when the Observer
     * subscribes, and create a fresh Observable for each Observer. It waits until
     * an Observer subscribes to it, and then it generates an Observable,
     * typically with an Observable factory function. It does this afresh for each
     * subscriber, so although each subscriber may think it is subscribing to the
     * same Observable, in fact each subscriber gets its own individual
     * Observable.
     *
     * @example <caption>Subscribe to either an Observable of clicks or an Observable of interval, at random</caption>
     * var clicksOrInterval = Rx.Observable.defer(function () {
     *   if (Math.random() > 0.5) {
     *     return Rx.Observable.fromEvent(document, 'click');
     *   } else {
     *     return Rx.Observable.interval(1000);
     *   }
     * });
     * clicksOrInterval.subscribe(x => console.log(x));
     *
     * // Results in the following behavior:
     * // If the result of Math.random() is greater than 0.5 it will listen
     * // for clicks anywhere on the "document"; when document is clicked it
     * // will log a MouseEvent object to the console. If the result is less
     * // than 0.5 it will emit ascending numbers, one every second(1000ms).
     *
     * @see {@link create}
     *
     * @param {function(): SubscribableOrPromise} observableFactory The Observable
     * factory function to invoke for each Observer that subscribes to the output
     * Observable. May also return a Promise, which will be converted on the fly
     * to an Observable.
     * @return {Observable} An Observable whose Observers' subscriptions trigger
     * an invocation of the given Observable factory function.
     * @static true
     * @name defer
     * @owner Observable
     */
    DeferObservable.create = function (observableFactory) {
        return new DeferObservable(observableFactory);
    };
    DeferObservable.prototype._subscribe = function (subscriber) {
        return new DeferSubscriber(subscriber, this.observableFactory);
    };
    return DeferObservable;
}(__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */]));
var DeferSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(DeferSubscriber, _super);
    function DeferSubscriber(destination, factory) {
        _super.call(this, destination);
        this.factory = factory;
        this.tryDefer();
    }
    DeferSubscriber.prototype.tryDefer = function () {
        try {
            this._callFactory();
        }
        catch (err) {
            this._error(err);
        }
    };
    DeferSubscriber.prototype._callFactory = function () {
        var result = this.factory();
        if (result) {
            this.add(Object(__WEBPACK_IMPORTED_MODULE_1__util_subscribeToResult__["a" /* subscribeToResult */])(this, result));
        }
    };
    return DeferSubscriber;
}(__WEBPACK_IMPORTED_MODULE_2__OuterSubscriber__["a" /* OuterSubscriber */]));
//# sourceMappingURL=DeferObservable.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/observable/ErrorObservable.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorObservable; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/** PURE_IMPORTS_START .._Observable PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var ErrorObservable = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(ErrorObservable, _super);
    function ErrorObservable(error, scheduler) {
        _super.call(this);
        this.error = error;
        this.scheduler = scheduler;
    }
    /**
     * Creates an Observable that emits no items to the Observer and immediately
     * emits an error notification.
     *
     * <span class="informal">Just emits 'error', and nothing else.
     * </span>
     *
     * <img src="./img/throw.png" width="100%">
     *
     * This static operator is useful for creating a simple Observable that only
     * emits the error notification. It can be used for composing with other
     * Observables, such as in a {@link mergeMap}.
     *
     * @example <caption>Emit the number 7, then emit an error.</caption>
     * var result = Rx.Observable.throw(new Error('oops!')).startWith(7);
     * result.subscribe(x => console.log(x), e => console.error(e));
     *
     * @example <caption>Map and flatten numbers to the sequence 'a', 'b', 'c', but throw an error for 13</caption>
     * var interval = Rx.Observable.interval(1000);
     * var result = interval.mergeMap(x =>
     *   x === 13 ?
     *     Rx.Observable.throw('Thirteens are bad') :
     *     Rx.Observable.of('a', 'b', 'c')
     * );
     * result.subscribe(x => console.log(x), e => console.error(e));
     *
     * @see {@link create}
     * @see {@link empty}
     * @see {@link never}
     * @see {@link of}
     *
     * @param {any} error The particular Error to pass to the error notification.
     * @param {Scheduler} [scheduler] A {@link IScheduler} to use for scheduling
     * the emission of the error notification.
     * @return {Observable} An error Observable: emits only the error notification
     * using the given error argument.
     * @static true
     * @name throw
     * @owner Observable
     */
    ErrorObservable.create = function (error, scheduler) {
        return new ErrorObservable(error, scheduler);
    };
    ErrorObservable.dispatch = function (arg) {
        var error = arg.error, subscriber = arg.subscriber;
        subscriber.error(error);
    };
    ErrorObservable.prototype._subscribe = function (subscriber) {
        var error = this.error;
        var scheduler = this.scheduler;
        subscriber.syncErrorThrowable = true;
        if (scheduler) {
            return scheduler.schedule(ErrorObservable.dispatch, 0, {
                error: error, subscriber: subscriber
            });
        }
        else {
            subscriber.error(error);
        }
    };
    return ErrorObservable;
}(__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */]));
//# sourceMappingURL=ErrorObservable.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/observable/FromEventPatternObservable.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FromEventPatternObservable; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_isFunction__ = __webpack_require__("./node_modules/rxjs/_esm5/util/isFunction.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Subscription__ = __webpack_require__("./node_modules/rxjs/_esm5/Subscription.js");
/** PURE_IMPORTS_START .._util_isFunction,.._Observable,.._Subscription PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};



/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var FromEventPatternObservable = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(FromEventPatternObservable, _super);
    function FromEventPatternObservable(addHandler, removeHandler, selector) {
        _super.call(this);
        this.addHandler = addHandler;
        this.removeHandler = removeHandler;
        this.selector = selector;
    }
    /**
     * Creates an Observable from an API based on addHandler/removeHandler
     * functions.
     *
     * <span class="informal">Converts any addHandler/removeHandler API to an
     * Observable.</span>
     *
     * <img src="./img/fromEventPattern.png" width="100%">
     *
     * Creates an Observable by using the `addHandler` and `removeHandler`
     * functions to add and remove the handlers, with an optional selector
     * function to project the event arguments to a result. The `addHandler` is
     * called when the output Observable is subscribed, and `removeHandler` is
     * called when the Subscription is unsubscribed.
     *
     * @example <caption>Emits clicks happening on the DOM document</caption>
     * function addClickHandler(handler) {
     *   document.addEventListener('click', handler);
     * }
     *
     * function removeClickHandler(handler) {
     *   document.removeEventListener('click', handler);
     * }
     *
     * var clicks = Rx.Observable.fromEventPattern(
     *   addClickHandler,
     *   removeClickHandler
     * );
     * clicks.subscribe(x => console.log(x));
     *
     * @see {@link from}
     * @see {@link fromEvent}
     *
     * @param {function(handler: Function): any} addHandler A function that takes
     * a `handler` function as argument and attaches it somehow to the actual
     * source of events.
     * @param {function(handler: Function, signal?: any): void} [removeHandler] An optional function that
     * takes a `handler` function as argument and removes it in case it was
     * previously attached using `addHandler`. if addHandler returns signal to teardown when remove,
     * removeHandler function will forward it.
     * @param {function(...args: any): T} [selector] An optional function to
     * post-process results. It takes the arguments from the event handler and
     * should return a single value.
     * @return {Observable<T>}
     * @static true
     * @name fromEventPattern
     * @owner Observable
     */
    FromEventPatternObservable.create = function (addHandler, removeHandler, selector) {
        return new FromEventPatternObservable(addHandler, removeHandler, selector);
    };
    FromEventPatternObservable.prototype._subscribe = function (subscriber) {
        var _this = this;
        var removeHandler = this.removeHandler;
        var handler = !!this.selector ? function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i - 0] = arguments[_i];
            }
            _this._callSelector(subscriber, args);
        } : function (e) { subscriber.next(e); };
        var retValue = this._callAddHandler(handler, subscriber);
        if (!Object(__WEBPACK_IMPORTED_MODULE_0__util_isFunction__["a" /* isFunction */])(removeHandler)) {
            return;
        }
        subscriber.add(new __WEBPACK_IMPORTED_MODULE_2__Subscription__["a" /* Subscription */](function () {
            //TODO: determine whether or not to forward to error handler
            removeHandler(handler, retValue);
        }));
    };
    FromEventPatternObservable.prototype._callSelector = function (subscriber, args) {
        try {
            var result = this.selector.apply(this, args);
            subscriber.next(result);
        }
        catch (e) {
            subscriber.error(e);
        }
    };
    FromEventPatternObservable.prototype._callAddHandler = function (handler, errorSubscriber) {
        try {
            return this.addHandler(handler) || null;
        }
        catch (e) {
            errorSubscriber.error(e);
        }
    };
    return FromEventPatternObservable;
}(__WEBPACK_IMPORTED_MODULE_1__Observable__["a" /* Observable */]));
//# sourceMappingURL=FromEventPatternObservable.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/observable/GenerateObservable.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GenerateObservable; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_isScheduler__ = __webpack_require__("./node_modules/rxjs/_esm5/util/isScheduler.js");
/** PURE_IMPORTS_START .._Observable,.._util_isScheduler PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};


var selfSelector = function (value) { return value; };
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var GenerateObservable = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(GenerateObservable, _super);
    function GenerateObservable(initialState, condition, iterate, resultSelector, scheduler) {
        _super.call(this);
        this.initialState = initialState;
        this.condition = condition;
        this.iterate = iterate;
        this.resultSelector = resultSelector;
        this.scheduler = scheduler;
    }
    GenerateObservable.create = function (initialStateOrOptions, condition, iterate, resultSelectorOrObservable, scheduler) {
        if (arguments.length == 1) {
            return new GenerateObservable(initialStateOrOptions.initialState, initialStateOrOptions.condition, initialStateOrOptions.iterate, initialStateOrOptions.resultSelector || selfSelector, initialStateOrOptions.scheduler);
        }
        if (resultSelectorOrObservable === undefined || Object(__WEBPACK_IMPORTED_MODULE_1__util_isScheduler__["a" /* isScheduler */])(resultSelectorOrObservable)) {
            return new GenerateObservable(initialStateOrOptions, condition, iterate, selfSelector, resultSelectorOrObservable);
        }
        return new GenerateObservable(initialStateOrOptions, condition, iterate, resultSelectorOrObservable, scheduler);
    };
    GenerateObservable.prototype._subscribe = function (subscriber) {
        var state = this.initialState;
        if (this.scheduler) {
            return this.scheduler.schedule(GenerateObservable.dispatch, 0, {
                subscriber: subscriber,
                iterate: this.iterate,
                condition: this.condition,
                resultSelector: this.resultSelector,
                state: state
            });
        }
        var _a = this, condition = _a.condition, resultSelector = _a.resultSelector, iterate = _a.iterate;
        do {
            if (condition) {
                var conditionResult = void 0;
                try {
                    conditionResult = condition(state);
                }
                catch (err) {
                    subscriber.error(err);
                    return;
                }
                if (!conditionResult) {
                    subscriber.complete();
                    break;
                }
            }
            var value = void 0;
            try {
                value = resultSelector(state);
            }
            catch (err) {
                subscriber.error(err);
                return;
            }
            subscriber.next(value);
            if (subscriber.closed) {
                break;
            }
            try {
                state = iterate(state);
            }
            catch (err) {
                subscriber.error(err);
                return;
            }
        } while (true);
    };
    GenerateObservable.dispatch = function (state) {
        var subscriber = state.subscriber, condition = state.condition;
        if (subscriber.closed) {
            return;
        }
        if (state.needIterate) {
            try {
                state.state = state.iterate(state.state);
            }
            catch (err) {
                subscriber.error(err);
                return;
            }
        }
        else {
            state.needIterate = true;
        }
        if (condition) {
            var conditionResult = void 0;
            try {
                conditionResult = condition(state.state);
            }
            catch (err) {
                subscriber.error(err);
                return;
            }
            if (!conditionResult) {
                subscriber.complete();
                return;
            }
            if (subscriber.closed) {
                return;
            }
        }
        var value;
        try {
            value = state.resultSelector(state.state);
        }
        catch (err) {
            subscriber.error(err);
            return;
        }
        if (subscriber.closed) {
            return;
        }
        subscriber.next(value);
        if (subscriber.closed) {
            return;
        }
        return this.schedule(state);
    };
    return GenerateObservable;
}(__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */]));
//# sourceMappingURL=GenerateObservable.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/observable/IfObservable.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IfObservable; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_subscribeToResult__ = __webpack_require__("./node_modules/rxjs/_esm5/util/subscribeToResult.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__OuterSubscriber__ = __webpack_require__("./node_modules/rxjs/_esm5/OuterSubscriber.js");
/** PURE_IMPORTS_START .._Observable,.._util_subscribeToResult,.._OuterSubscriber PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};



/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var IfObservable = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(IfObservable, _super);
    function IfObservable(condition, thenSource, elseSource) {
        _super.call(this);
        this.condition = condition;
        this.thenSource = thenSource;
        this.elseSource = elseSource;
    }
    IfObservable.create = function (condition, thenSource, elseSource) {
        return new IfObservable(condition, thenSource, elseSource);
    };
    IfObservable.prototype._subscribe = function (subscriber) {
        var _a = this, condition = _a.condition, thenSource = _a.thenSource, elseSource = _a.elseSource;
        return new IfSubscriber(subscriber, condition, thenSource, elseSource);
    };
    return IfObservable;
}(__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */]));
var IfSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(IfSubscriber, _super);
    function IfSubscriber(destination, condition, thenSource, elseSource) {
        _super.call(this, destination);
        this.condition = condition;
        this.thenSource = thenSource;
        this.elseSource = elseSource;
        this.tryIf();
    }
    IfSubscriber.prototype.tryIf = function () {
        var _a = this, condition = _a.condition, thenSource = _a.thenSource, elseSource = _a.elseSource;
        var result;
        try {
            result = condition();
            var source = result ? thenSource : elseSource;
            if (source) {
                this.add(Object(__WEBPACK_IMPORTED_MODULE_1__util_subscribeToResult__["a" /* subscribeToResult */])(this, source));
            }
            else {
                this._complete();
            }
        }
        catch (err) {
            this._error(err);
        }
    };
    return IfSubscriber;
}(__WEBPACK_IMPORTED_MODULE_2__OuterSubscriber__["a" /* OuterSubscriber */]));
//# sourceMappingURL=IfObservable.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/observable/NeverObservable.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NeverObservable; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_noop__ = __webpack_require__("./node_modules/rxjs/_esm5/util/noop.js");
/** PURE_IMPORTS_START .._Observable,.._util_noop PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};


/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var NeverObservable = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(NeverObservable, _super);
    function NeverObservable() {
        _super.call(this);
    }
    /**
     * Creates an Observable that emits no items to the Observer.
     *
     * <span class="informal">An Observable that never emits anything.</span>
     *
     * <img src="./img/never.png" width="100%">
     *
     * This static operator is useful for creating a simple Observable that emits
     * neither values nor errors nor the completion notification. It can be used
     * for testing purposes or for composing with other Observables. Please note
     * that by never emitting a complete notification, this Observable keeps the
     * subscription from being disposed automatically. Subscriptions need to be
     * manually disposed.
     *
     * @example <caption>Emit the number 7, then never emit anything else (not even complete).</caption>
     * function info() {
     *   console.log('Will not be called');
     * }
     * var result = Rx.Observable.never().startWith(7);
     * result.subscribe(x => console.log(x), info, info);
     *
     * @see {@link create}
     * @see {@link empty}
     * @see {@link of}
     * @see {@link throw}
     *
     * @return {Observable} A "never" Observable: never emits anything.
     * @static true
     * @name never
     * @owner Observable
     */
    NeverObservable.create = function () {
        return new NeverObservable();
    };
    NeverObservable.prototype._subscribe = function (subscriber) {
        Object(__WEBPACK_IMPORTED_MODULE_1__util_noop__["a" /* noop */])();
    };
    return NeverObservable;
}(__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */]));
//# sourceMappingURL=NeverObservable.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/observable/PairsObservable.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PairsObservable; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/** PURE_IMPORTS_START .._Observable PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

function dispatch(state) {
    var obj = state.obj, keys = state.keys, length = state.length, index = state.index, subscriber = state.subscriber;
    if (index === length) {
        subscriber.complete();
        return;
    }
    var key = keys[index];
    subscriber.next([key, obj[key]]);
    state.index = index + 1;
    this.schedule(state);
}
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var PairsObservable = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(PairsObservable, _super);
    function PairsObservable(obj, scheduler) {
        _super.call(this);
        this.obj = obj;
        this.scheduler = scheduler;
        this.keys = Object.keys(obj);
    }
    /**
     * Convert an object into an observable sequence of [key, value] pairs
     * using an optional IScheduler to enumerate the object.
     *
     * @example <caption>Converts a javascript object to an Observable</caption>
     * var obj = {
     *   foo: 42,
     *   bar: 56,
     *   baz: 78
     * };
     *
     * var source = Rx.Observable.pairs(obj);
     *
     * var subscription = source.subscribe(
     *   function (x) {
     *     console.log('Next: %s', x);
     *   },
     *   function (err) {
     *     console.log('Error: %s', err);
     *   },
     *   function () {
     *     console.log('Completed');
     *   });
     *
     * @param {Object} obj The object to inspect and turn into an
     * Observable sequence.
     * @param {Scheduler} [scheduler] An optional IScheduler to run the
     * enumeration of the input sequence on.
     * @returns {(Observable<Array<string | T>>)} An observable sequence of
     * [key, value] pairs from the object.
     */
    PairsObservable.create = function (obj, scheduler) {
        return new PairsObservable(obj, scheduler);
    };
    PairsObservable.prototype._subscribe = function (subscriber) {
        var _a = this, keys = _a.keys, scheduler = _a.scheduler;
        var length = keys.length;
        if (scheduler) {
            return scheduler.schedule(dispatch, 0, {
                obj: this.obj, keys: keys, length: length, index: 0, subscriber: subscriber
            });
        }
        else {
            for (var idx = 0; idx < length; idx++) {
                var key = keys[idx];
                subscriber.next([key, this.obj[key]]);
            }
            subscriber.complete();
        }
    };
    return PairsObservable;
}(__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */]));
//# sourceMappingURL=PairsObservable.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/observable/RangeObservable.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RangeObservable; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/** PURE_IMPORTS_START .._Observable PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var RangeObservable = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(RangeObservable, _super);
    function RangeObservable(start, count, scheduler) {
        _super.call(this);
        this.start = start;
        this._count = count;
        this.scheduler = scheduler;
    }
    /**
     * Creates an Observable that emits a sequence of numbers within a specified
     * range.
     *
     * <span class="informal">Emits a sequence of numbers in a range.</span>
     *
     * <img src="./img/range.png" width="100%">
     *
     * `range` operator emits a range of sequential integers, in order, where you
     * select the `start` of the range and its `length`. By default, uses no
     * IScheduler and just delivers the notifications synchronously, but may use
     * an optional IScheduler to regulate those deliveries.
     *
     * @example <caption>Emits the numbers 1 to 10</caption>
     * var numbers = Rx.Observable.range(1, 10);
     * numbers.subscribe(x => console.log(x));
     *
     * @see {@link timer}
     * @see {@link interval}
     *
     * @param {number} [start=0] The value of the first integer in the sequence.
     * @param {number} [count=0] The number of sequential integers to generate.
     * @param {Scheduler} [scheduler] A {@link IScheduler} to use for scheduling
     * the emissions of the notifications.
     * @return {Observable} An Observable of numbers that emits a finite range of
     * sequential integers.
     * @static true
     * @name range
     * @owner Observable
     */
    RangeObservable.create = function (start, count, scheduler) {
        if (start === void 0) {
            start = 0;
        }
        if (count === void 0) {
            count = 0;
        }
        return new RangeObservable(start, count, scheduler);
    };
    RangeObservable.dispatch = function (state) {
        var start = state.start, index = state.index, count = state.count, subscriber = state.subscriber;
        if (index >= count) {
            subscriber.complete();
            return;
        }
        subscriber.next(start);
        if (subscriber.closed) {
            return;
        }
        state.index = index + 1;
        state.start = start + 1;
        this.schedule(state);
    };
    RangeObservable.prototype._subscribe = function (subscriber) {
        var index = 0;
        var start = this.start;
        var count = this._count;
        var scheduler = this.scheduler;
        if (scheduler) {
            return scheduler.schedule(RangeObservable.dispatch, 0, {
                index: index, count: count, start: start, subscriber: subscriber
            });
        }
        else {
            do {
                if (index++ >= count) {
                    subscriber.complete();
                    break;
                }
                subscriber.next(start++);
                if (subscriber.closed) {
                    break;
                }
            } while (true);
        }
    };
    return RangeObservable;
}(__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */]));
//# sourceMappingURL=RangeObservable.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/observable/SubscribeOnObservable.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubscribeOnObservable; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scheduler_asap__ = __webpack_require__("./node_modules/rxjs/_esm5/scheduler/asap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_isNumeric__ = __webpack_require__("./node_modules/rxjs/_esm5/util/isNumeric.js");
/** PURE_IMPORTS_START .._Observable,.._scheduler_asap,.._util_isNumeric PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};



/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var SubscribeOnObservable = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(SubscribeOnObservable, _super);
    function SubscribeOnObservable(source, delayTime, scheduler) {
        if (delayTime === void 0) {
            delayTime = 0;
        }
        if (scheduler === void 0) {
            scheduler = __WEBPACK_IMPORTED_MODULE_1__scheduler_asap__["a" /* asap */];
        }
        _super.call(this);
        this.source = source;
        this.delayTime = delayTime;
        this.scheduler = scheduler;
        if (!Object(__WEBPACK_IMPORTED_MODULE_2__util_isNumeric__["a" /* isNumeric */])(delayTime) || delayTime < 0) {
            this.delayTime = 0;
        }
        if (!scheduler || typeof scheduler.schedule !== 'function') {
            this.scheduler = __WEBPACK_IMPORTED_MODULE_1__scheduler_asap__["a" /* asap */];
        }
    }
    SubscribeOnObservable.create = function (source, delay, scheduler) {
        if (delay === void 0) {
            delay = 0;
        }
        if (scheduler === void 0) {
            scheduler = __WEBPACK_IMPORTED_MODULE_1__scheduler_asap__["a" /* asap */];
        }
        return new SubscribeOnObservable(source, delay, scheduler);
    };
    SubscribeOnObservable.dispatch = function (arg) {
        var source = arg.source, subscriber = arg.subscriber;
        return this.add(source.subscribe(subscriber));
    };
    SubscribeOnObservable.prototype._subscribe = function (subscriber) {
        var delay = this.delayTime;
        var source = this.source;
        var scheduler = this.scheduler;
        return scheduler.schedule(SubscribeOnObservable.dispatch, delay, {
            source: source, subscriber: subscriber
        });
    };
    return SubscribeOnObservable;
}(__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */]));
//# sourceMappingURL=SubscribeOnObservable.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/observable/UsingObservable.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsingObservable; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_subscribeToResult__ = __webpack_require__("./node_modules/rxjs/_esm5/util/subscribeToResult.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__OuterSubscriber__ = __webpack_require__("./node_modules/rxjs/_esm5/OuterSubscriber.js");
/** PURE_IMPORTS_START .._Observable,.._util_subscribeToResult,.._OuterSubscriber PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};



/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var UsingObservable = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(UsingObservable, _super);
    function UsingObservable(resourceFactory, observableFactory) {
        _super.call(this);
        this.resourceFactory = resourceFactory;
        this.observableFactory = observableFactory;
    }
    UsingObservable.create = function (resourceFactory, observableFactory) {
        return new UsingObservable(resourceFactory, observableFactory);
    };
    UsingObservable.prototype._subscribe = function (subscriber) {
        var _a = this, resourceFactory = _a.resourceFactory, observableFactory = _a.observableFactory;
        var resource;
        try {
            resource = resourceFactory();
            return new UsingSubscriber(subscriber, resource, observableFactory);
        }
        catch (err) {
            subscriber.error(err);
        }
    };
    return UsingObservable;
}(__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */]));
var UsingSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(UsingSubscriber, _super);
    function UsingSubscriber(destination, resource, observableFactory) {
        _super.call(this, destination);
        this.resource = resource;
        this.observableFactory = observableFactory;
        destination.add(resource);
        this.tryUse();
    }
    UsingSubscriber.prototype.tryUse = function () {
        try {
            var source = this.observableFactory.call(this, this.resource);
            if (source) {
                this.add(Object(__WEBPACK_IMPORTED_MODULE_1__util_subscribeToResult__["a" /* subscribeToResult */])(this, source));
            }
        }
        catch (err) {
            this._error(err);
        }
    };
    return UsingSubscriber;
}(__WEBPACK_IMPORTED_MODULE_2__OuterSubscriber__["a" /* OuterSubscriber */]));
//# sourceMappingURL=UsingObservable.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/observable/bindCallback.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return bindCallback; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BoundCallbackObservable__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/BoundCallbackObservable.js");
/** PURE_IMPORTS_START ._BoundCallbackObservable PURE_IMPORTS_END */

var bindCallback = __WEBPACK_IMPORTED_MODULE_0__BoundCallbackObservable__["a" /* BoundCallbackObservable */].create;
//# sourceMappingURL=bindCallback.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/observable/bindNodeCallback.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return bindNodeCallback; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BoundNodeCallbackObservable__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/BoundNodeCallbackObservable.js");
/** PURE_IMPORTS_START ._BoundNodeCallbackObservable PURE_IMPORTS_END */

var bindNodeCallback = __WEBPACK_IMPORTED_MODULE_0__BoundNodeCallbackObservable__["a" /* BoundNodeCallbackObservable */].create;
//# sourceMappingURL=bindNodeCallback.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/observable/combineLatest.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = combineLatest;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_isScheduler__ = __webpack_require__("./node_modules/rxjs/_esm5/util/isScheduler.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_isArray__ = __webpack_require__("./node_modules/rxjs/_esm5/util/isArray.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ArrayObservable__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/ArrayObservable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__operators_combineLatest__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/combineLatest.js");
/** PURE_IMPORTS_START .._util_isScheduler,.._util_isArray,._ArrayObservable,.._operators_combineLatest PURE_IMPORTS_END */




/* tslint:enable:max-line-length */
/**
 * Combines multiple Observables to create an Observable whose values are
 * calculated from the latest values of each of its input Observables.
 *
 * <span class="informal">Whenever any input Observable emits a value, it
 * computes a formula using the latest values from all the inputs, then emits
 * the output of that formula.</span>
 *
 * <img src="./img/combineLatest.png" width="100%">
 *
 * `combineLatest` combines the values from all the Observables passed as
 * arguments. This is done by subscribing to each Observable in order and,
 * whenever any Observable emits, collecting an array of the most recent
 * values from each Observable. So if you pass `n` Observables to operator,
 * returned Observable will always emit an array of `n` values, in order
 * corresponding to order of passed Observables (value from the first Observable
 * on the first place and so on).
 *
 * Static version of `combineLatest` accepts either an array of Observables
 * or each Observable can be put directly as an argument. Note that array of
 * Observables is good choice, if you don't know beforehand how many Observables
 * you will combine. Passing empty array will result in Observable that
 * completes immediately.
 *
 * To ensure output array has always the same length, `combineLatest` will
 * actually wait for all input Observables to emit at least once,
 * before it starts emitting results. This means if some Observable emits
 * values before other Observables started emitting, all that values but last
 * will be lost. On the other hand, is some Observable does not emit value but
 * completes, resulting Observable will complete at the same moment without
 * emitting anything, since it will be now impossible to include value from
 * completed Observable in resulting array. Also, if some input Observable does
 * not emit any value and never completes, `combineLatest` will also never emit
 * and never complete, since, again, it will wait for all streams to emit some
 * value.
 *
 * If at least one Observable was passed to `combineLatest` and all passed Observables
 * emitted something, resulting Observable will complete when all combined
 * streams complete. So even if some Observable completes, result of
 * `combineLatest` will still emit values when other Observables do. In case
 * of completed Observable, its value from now on will always be the last
 * emitted value. On the other hand, if any Observable errors, `combineLatest`
 * will error immediately as well, and all other Observables will be unsubscribed.
 *
 * `combineLatest` accepts as optional parameter `project` function, which takes
 * as arguments all values that would normally be emitted by resulting Observable.
 * `project` can return any kind of value, which will be then emitted by Observable
 * instead of default array. Note that `project` does not take as argument that array
 * of values, but values themselves. That means default `project` can be imagined
 * as function that takes all its arguments and puts them into an array.
 *
 *
 * @example <caption>Combine two timer Observables</caption>
 * const firstTimer = Rx.Observable.timer(0, 1000); // emit 0, 1, 2... after every second, starting from now
 * const secondTimer = Rx.Observable.timer(500, 1000); // emit 0, 1, 2... after every second, starting 0,5s from now
 * const combinedTimers = Rx.Observable.combineLatest(firstTimer, secondTimer);
 * combinedTimers.subscribe(value => console.log(value));
 * // Logs
 * // [0, 0] after 0.5s
 * // [1, 0] after 1s
 * // [1, 1] after 1.5s
 * // [2, 1] after 2s
 *
 *
 * @example <caption>Combine an array of Observables</caption>
 * const observables = [1, 5, 10].map(
 *   n => Rx.Observable.of(n).delay(n * 1000).startWith(0) // emit 0 and then emit n after n seconds
 * );
 * const combined = Rx.Observable.combineLatest(observables);
 * combined.subscribe(value => console.log(value));
 * // Logs
 * // [0, 0, 0] immediately
 * // [1, 0, 0] after 1s
 * // [1, 5, 0] after 5s
 * // [1, 5, 10] after 10s
 *
 *
 * @example <caption>Use project function to dynamically calculate the Body-Mass Index</caption>
 * var weight = Rx.Observable.of(70, 72, 76, 79, 75);
 * var height = Rx.Observable.of(1.76, 1.77, 1.78);
 * var bmi = Rx.Observable.combineLatest(weight, height, (w, h) => w / (h * h));
 * bmi.subscribe(x => console.log('BMI is ' + x));
 *
 * // With output to console:
 * // BMI is 24.212293388429753
 * // BMI is 23.93948099205209
 * // BMI is 23.671253629592222
 *
 *
 * @see {@link combineAll}
 * @see {@link merge}
 * @see {@link withLatestFrom}
 *
 * @param {ObservableInput} observable1 An input Observable to combine with other Observables.
 * @param {ObservableInput} observable2 An input Observable to combine with other Observables.
 * More than one input Observables may be given as arguments
 * or an array of Observables may be given as the first argument.
 * @param {function} [project] An optional function to project the values from
 * the combined latest values into a new value on the output Observable.
 * @param {Scheduler} [scheduler=null] The IScheduler to use for subscribing to
 * each input Observable.
 * @return {Observable} An Observable of projected values from the most recent
 * values from each input Observable, or an array of the most recent values from
 * each input Observable.
 * @static true
 * @name combineLatest
 * @owner Observable
 */
function combineLatest() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i - 0] = arguments[_i];
    }
    var project = null;
    var scheduler = null;
    if (Object(__WEBPACK_IMPORTED_MODULE_0__util_isScheduler__["a" /* isScheduler */])(observables[observables.length - 1])) {
        scheduler = observables.pop();
    }
    if (typeof observables[observables.length - 1] === 'function') {
        project = observables.pop();
    }
    // if the first and only other argument besides the resultSelector is an array
    // assume it's been called with `combineLatest([obs1, obs2, obs3], project)`
    if (observables.length === 1 && Object(__WEBPACK_IMPORTED_MODULE_1__util_isArray__["a" /* isArray */])(observables[0])) {
        observables = observables[0];
    }
    return new __WEBPACK_IMPORTED_MODULE_2__ArrayObservable__["a" /* ArrayObservable */](observables, scheduler).lift(new __WEBPACK_IMPORTED_MODULE_3__operators_combineLatest__["a" /* CombineLatestOperator */](project));
}
//# sourceMappingURL=combineLatest.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/observable/defer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return defer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__DeferObservable__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/DeferObservable.js");
/** PURE_IMPORTS_START ._DeferObservable PURE_IMPORTS_END */

var defer = __WEBPACK_IMPORTED_MODULE_0__DeferObservable__["a" /* DeferObservable */].create;
//# sourceMappingURL=defer.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/observable/dom/AjaxObservable.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ajaxGet */
/* unused harmony export ajaxPost */
/* unused harmony export ajaxDelete */
/* unused harmony export ajaxPut */
/* unused harmony export ajaxPatch */
/* unused harmony export ajaxGetJSON */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AjaxObservable; });
/* unused harmony export AjaxSubscriber */
/* unused harmony export AjaxResponse */
/* unused harmony export AjaxError */
/* unused harmony export AjaxTimeoutError */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_root__ = __webpack_require__("./node_modules/rxjs/_esm5/util/root.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_tryCatch__ = __webpack_require__("./node_modules/rxjs/_esm5/util/tryCatch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_errorObject__ = __webpack_require__("./node_modules/rxjs/_esm5/util/errorObject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Subscriber__ = __webpack_require__("./node_modules/rxjs/_esm5/Subscriber.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__operators_map__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/map.js");
/** PURE_IMPORTS_START .._.._util_root,.._.._util_tryCatch,.._.._util_errorObject,.._.._Observable,.._.._Subscriber,.._.._operators_map PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};






function getCORSRequest() {
    if (__WEBPACK_IMPORTED_MODULE_0__util_root__["a" /* root */].XMLHttpRequest) {
        return new __WEBPACK_IMPORTED_MODULE_0__util_root__["a" /* root */].XMLHttpRequest();
    }
    else if (!!__WEBPACK_IMPORTED_MODULE_0__util_root__["a" /* root */].XDomainRequest) {
        return new __WEBPACK_IMPORTED_MODULE_0__util_root__["a" /* root */].XDomainRequest();
    }
    else {
        throw new Error('CORS is not supported by your browser');
    }
}
function getXMLHttpRequest() {
    if (__WEBPACK_IMPORTED_MODULE_0__util_root__["a" /* root */].XMLHttpRequest) {
        return new __WEBPACK_IMPORTED_MODULE_0__util_root__["a" /* root */].XMLHttpRequest();
    }
    else {
        var progId = void 0;
        try {
            var progIds = ['Msxml2.XMLHTTP', 'Microsoft.XMLHTTP', 'Msxml2.XMLHTTP.4.0'];
            for (var i = 0; i < 3; i++) {
                try {
                    progId = progIds[i];
                    if (new __WEBPACK_IMPORTED_MODULE_0__util_root__["a" /* root */].ActiveXObject(progId)) {
                        break;
                    }
                }
                catch (e) {
                }
            }
            return new __WEBPACK_IMPORTED_MODULE_0__util_root__["a" /* root */].ActiveXObject(progId);
        }
        catch (e) {
            throw new Error('XMLHttpRequest is not supported by your browser');
        }
    }
}
function ajaxGet(url, headers) {
    if (headers === void 0) {
        headers = null;
    }
    return new AjaxObservable({ method: 'GET', url: url, headers: headers });
}
;
function ajaxPost(url, body, headers) {
    return new AjaxObservable({ method: 'POST', url: url, body: body, headers: headers });
}
;
function ajaxDelete(url, headers) {
    return new AjaxObservable({ method: 'DELETE', url: url, headers: headers });
}
;
function ajaxPut(url, body, headers) {
    return new AjaxObservable({ method: 'PUT', url: url, body: body, headers: headers });
}
;
function ajaxPatch(url, body, headers) {
    return new AjaxObservable({ method: 'PATCH', url: url, body: body, headers: headers });
}
;
var mapResponse = /*@__PURE__*/ Object(__WEBPACK_IMPORTED_MODULE_5__operators_map__["a" /* map */])(function (x, index) { return x.response; });
function ajaxGetJSON(url, headers) {
    return mapResponse(new AjaxObservable({
        method: 'GET',
        url: url,
        responseType: 'json',
        headers: headers
    }));
}
;
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var AjaxObservable = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(AjaxObservable, _super);
    function AjaxObservable(urlOrRequest) {
        _super.call(this);
        var request = {
            async: true,
            createXHR: function () {
                return this.crossDomain ? getCORSRequest.call(this) : getXMLHttpRequest();
            },
            crossDomain: false,
            withCredentials: false,
            headers: {},
            method: 'GET',
            responseType: 'json',
            timeout: 0
        };
        if (typeof urlOrRequest === 'string') {
            request.url = urlOrRequest;
        }
        else {
            for (var prop in urlOrRequest) {
                if (urlOrRequest.hasOwnProperty(prop)) {
                    request[prop] = urlOrRequest[prop];
                }
            }
        }
        this.request = request;
    }
    AjaxObservable.prototype._subscribe = function (subscriber) {
        return new AjaxSubscriber(subscriber, this.request);
    };
    /**
     * Creates an observable for an Ajax request with either a request object with
     * url, headers, etc or a string for a URL.
     *
     * @example
     * source = Rx.Observable.ajax('/products');
     * source = Rx.Observable.ajax({ url: 'products', method: 'GET' });
     *
     * @param {string|Object} request Can be one of the following:
     *   A string of the URL to make the Ajax call.
     *   An object with the following properties
     *   - url: URL of the request
     *   - body: The body of the request
     *   - method: Method of the request, such as GET, POST, PUT, PATCH, DELETE
     *   - async: Whether the request is async
     *   - headers: Optional headers
     *   - crossDomain: true if a cross domain request, else false
     *   - createXHR: a function to override if you need to use an alternate
     *   XMLHttpRequest implementation.
     *   - resultSelector: a function to use to alter the output value type of
     *   the Observable. Gets {@link AjaxResponse} as an argument.
     * @return {Observable} An observable sequence containing the XMLHttpRequest.
     * @static true
     * @name ajax
     * @owner Observable
    */
    AjaxObservable.create = (function () {
        var create = function (urlOrRequest) {
            return new AjaxObservable(urlOrRequest);
        };
        create.get = ajaxGet;
        create.post = ajaxPost;
        create.delete = ajaxDelete;
        create.put = ajaxPut;
        create.patch = ajaxPatch;
        create.getJSON = ajaxGetJSON;
        return create;
    })();
    return AjaxObservable;
}(__WEBPACK_IMPORTED_MODULE_3__Observable__["a" /* Observable */]));
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var AjaxSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(AjaxSubscriber, _super);
    function AjaxSubscriber(destination, request) {
        _super.call(this, destination);
        this.request = request;
        this.done = false;
        var headers = request.headers = request.headers || {};
        // force CORS if requested
        if (!request.crossDomain && !headers['X-Requested-With']) {
            headers['X-Requested-With'] = 'XMLHttpRequest';
        }
        // ensure content type is set
        if (!('Content-Type' in headers) && !(__WEBPACK_IMPORTED_MODULE_0__util_root__["a" /* root */].FormData && request.body instanceof __WEBPACK_IMPORTED_MODULE_0__util_root__["a" /* root */].FormData) && typeof request.body !== 'undefined') {
            headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
        }
        // properly serialize body
        request.body = this.serializeBody(request.body, request.headers['Content-Type']);
        this.send();
    }
    AjaxSubscriber.prototype.next = function (e) {
        this.done = true;
        var _a = this, xhr = _a.xhr, request = _a.request, destination = _a.destination;
        var response = new AjaxResponse(e, xhr, request);
        destination.next(response);
    };
    AjaxSubscriber.prototype.send = function () {
        var _a = this, request = _a.request, _b = _a.request, user = _b.user, method = _b.method, url = _b.url, async = _b.async, password = _b.password, headers = _b.headers, body = _b.body;
        var createXHR = request.createXHR;
        var xhr = Object(__WEBPACK_IMPORTED_MODULE_1__util_tryCatch__["a" /* tryCatch */])(createXHR).call(request);
        if (xhr === __WEBPACK_IMPORTED_MODULE_2__util_errorObject__["a" /* errorObject */]) {
            this.error(__WEBPACK_IMPORTED_MODULE_2__util_errorObject__["a" /* errorObject */].e);
        }
        else {
            this.xhr = xhr;
            // set up the events before open XHR
            // https://developer.mozilla.org/en/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest
            // You need to add the event listeners before calling open() on the request.
            // Otherwise the progress events will not fire.
            this.setupEvents(xhr, request);
            // open XHR
            var result = void 0;
            if (user) {
                result = Object(__WEBPACK_IMPORTED_MODULE_1__util_tryCatch__["a" /* tryCatch */])(xhr.open).call(xhr, method, url, async, user, password);
            }
            else {
                result = Object(__WEBPACK_IMPORTED_MODULE_1__util_tryCatch__["a" /* tryCatch */])(xhr.open).call(xhr, method, url, async);
            }
            if (result === __WEBPACK_IMPORTED_MODULE_2__util_errorObject__["a" /* errorObject */]) {
                this.error(__WEBPACK_IMPORTED_MODULE_2__util_errorObject__["a" /* errorObject */].e);
                return null;
            }
            // timeout, responseType and withCredentials can be set once the XHR is open
            if (async) {
                xhr.timeout = request.timeout;
                xhr.responseType = request.responseType;
            }
            if ('withCredentials' in xhr) {
                xhr.withCredentials = !!request.withCredentials;
            }
            // set headers
            this.setHeaders(xhr, headers);
            // finally send the request
            result = body ? Object(__WEBPACK_IMPORTED_MODULE_1__util_tryCatch__["a" /* tryCatch */])(xhr.send).call(xhr, body) : Object(__WEBPACK_IMPORTED_MODULE_1__util_tryCatch__["a" /* tryCatch */])(xhr.send).call(xhr);
            if (result === __WEBPACK_IMPORTED_MODULE_2__util_errorObject__["a" /* errorObject */]) {
                this.error(__WEBPACK_IMPORTED_MODULE_2__util_errorObject__["a" /* errorObject */].e);
                return null;
            }
        }
        return xhr;
    };
    AjaxSubscriber.prototype.serializeBody = function (body, contentType) {
        if (!body || typeof body === 'string') {
            return body;
        }
        else if (__WEBPACK_IMPORTED_MODULE_0__util_root__["a" /* root */].FormData && body instanceof __WEBPACK_IMPORTED_MODULE_0__util_root__["a" /* root */].FormData) {
            return body;
        }
        if (contentType) {
            var splitIndex = contentType.indexOf(';');
            if (splitIndex !== -1) {
                contentType = contentType.substring(0, splitIndex);
            }
        }
        switch (contentType) {
            case 'application/x-www-form-urlencoded':
                return Object.keys(body).map(function (key) { return (encodeURI(key) + "=" + encodeURI(body[key])); }).join('&');
            case 'application/json':
                return JSON.stringify(body);
            default:
                return body;
        }
    };
    AjaxSubscriber.prototype.setHeaders = function (xhr, headers) {
        for (var key in headers) {
            if (headers.hasOwnProperty(key)) {
                xhr.setRequestHeader(key, headers[key]);
            }
        }
    };
    AjaxSubscriber.prototype.setupEvents = function (xhr, request) {
        var progressSubscriber = request.progressSubscriber;
        function xhrTimeout(e) {
            var _a = xhrTimeout, subscriber = _a.subscriber, progressSubscriber = _a.progressSubscriber, request = _a.request;
            if (progressSubscriber) {
                progressSubscriber.error(e);
            }
            subscriber.error(new AjaxTimeoutError(this, request)); //TODO: Make betterer.
        }
        ;
        xhr.ontimeout = xhrTimeout;
        xhrTimeout.request = request;
        xhrTimeout.subscriber = this;
        xhrTimeout.progressSubscriber = progressSubscriber;
        if (xhr.upload && 'withCredentials' in xhr) {
            if (progressSubscriber) {
                var xhrProgress_1;
                xhrProgress_1 = function (e) {
                    var progressSubscriber = xhrProgress_1.progressSubscriber;
                    progressSubscriber.next(e);
                };
                if (__WEBPACK_IMPORTED_MODULE_0__util_root__["a" /* root */].XDomainRequest) {
                    xhr.onprogress = xhrProgress_1;
                }
                else {
                    xhr.upload.onprogress = xhrProgress_1;
                }
                xhrProgress_1.progressSubscriber = progressSubscriber;
            }
            var xhrError_1;
            xhrError_1 = function (e) {
                var _a = xhrError_1, progressSubscriber = _a.progressSubscriber, subscriber = _a.subscriber, request = _a.request;
                if (progressSubscriber) {
                    progressSubscriber.error(e);
                }
                subscriber.error(new AjaxError('ajax error', this, request));
            };
            xhr.onerror = xhrError_1;
            xhrError_1.request = request;
            xhrError_1.subscriber = this;
            xhrError_1.progressSubscriber = progressSubscriber;
        }
        function xhrReadyStateChange(e) {
            var _a = xhrReadyStateChange, subscriber = _a.subscriber, progressSubscriber = _a.progressSubscriber, request = _a.request;
            if (this.readyState === 4) {
                // normalize IE9 bug (http://bugs.jquery.com/ticket/1450)
                var status_1 = this.status === 1223 ? 204 : this.status;
                var response = (this.responseType === 'text' ? (this.response || this.responseText) : this.response);
                // fix status code when it is 0 (0 status is undocumented).
                // Occurs when accessing file resources or on Android 4.1 stock browser
                // while retrieving files from application cache.
                if (status_1 === 0) {
                    status_1 = response ? 200 : 0;
                }
                if (200 <= status_1 && status_1 < 300) {
                    if (progressSubscriber) {
                        progressSubscriber.complete();
                    }
                    subscriber.next(e);
                    subscriber.complete();
                }
                else {
                    if (progressSubscriber) {
                        progressSubscriber.error(e);
                    }
                    subscriber.error(new AjaxError('ajax error ' + status_1, this, request));
                }
            }
        }
        ;
        xhr.onreadystatechange = xhrReadyStateChange;
        xhrReadyStateChange.subscriber = this;
        xhrReadyStateChange.progressSubscriber = progressSubscriber;
        xhrReadyStateChange.request = request;
    };
    AjaxSubscriber.prototype.unsubscribe = function () {
        var _a = this, done = _a.done, xhr = _a.xhr;
        if (!done && xhr && xhr.readyState !== 4 && typeof xhr.abort === 'function') {
            xhr.abort();
        }
        _super.prototype.unsubscribe.call(this);
    };
    return AjaxSubscriber;
}(__WEBPACK_IMPORTED_MODULE_4__Subscriber__["a" /* Subscriber */]));
/**
 * A normalized AJAX response.
 *
 * @see {@link ajax}
 *
 * @class AjaxResponse
 */
var AjaxResponse = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function AjaxResponse(originalEvent, xhr, request) {
        this.originalEvent = originalEvent;
        this.xhr = xhr;
        this.request = request;
        this.status = xhr.status;
        this.responseType = xhr.responseType || request.responseType;
        this.response = parseXhrResponse(this.responseType, xhr);
    }
    return AjaxResponse;
}());
/**
 * A normalized AJAX error.
 *
 * @see {@link ajax}
 *
 * @class AjaxError
 */
var AjaxError = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(AjaxError, _super);
    function AjaxError(message, xhr, request) {
        _super.call(this, message);
        this.message = message;
        this.xhr = xhr;
        this.request = request;
        this.status = xhr.status;
        this.responseType = xhr.responseType || request.responseType;
        this.response = parseXhrResponse(this.responseType, xhr);
    }
    return AjaxError;
}(Error));
function parseXhrResponse(responseType, xhr) {
    switch (responseType) {
        case 'json':
            if ('response' in xhr) {
                //IE does not support json as responseType, parse it internally
                return xhr.responseType ? xhr.response : JSON.parse(xhr.response || xhr.responseText || 'null');
            }
            else {
                // HACK(benlesh): TypeScript shennanigans
                // tslint:disable-next-line:no-any latest TS seems to think xhr is "never" here.
                return JSON.parse(xhr.responseText || 'null');
            }
        case 'xml':
            return xhr.responseXML;
        case 'text':
        default:
            // HACK(benlesh): TypeScript shennanigans
            // tslint:disable-next-line:no-any latest TS seems to think xhr is "never" here.
            return ('response' in xhr) ? xhr.response : xhr.responseText;
    }
}
/**
 * @see {@link ajax}
 *
 * @class AjaxTimeoutError
 */
var AjaxTimeoutError = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(AjaxTimeoutError, _super);
    function AjaxTimeoutError(xhr, request) {
        _super.call(this, 'ajax timeout', xhr, request);
    }
    return AjaxTimeoutError;
}(AjaxError));
//# sourceMappingURL=AjaxObservable.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/observable/dom/WebSocketSubject.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebSocketSubject; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Subscriber__ = __webpack_require__("./node_modules/rxjs/_esm5/Subscriber.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Subscription__ = __webpack_require__("./node_modules/rxjs/_esm5/Subscription.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util_root__ = __webpack_require__("./node_modules/rxjs/_esm5/util/root.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ReplaySubject__ = __webpack_require__("./node_modules/rxjs/_esm5/ReplaySubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__util_tryCatch__ = __webpack_require__("./node_modules/rxjs/_esm5/util/tryCatch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__util_errorObject__ = __webpack_require__("./node_modules/rxjs/_esm5/util/errorObject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__util_assign__ = __webpack_require__("./node_modules/rxjs/_esm5/util/assign.js");
/** PURE_IMPORTS_START .._.._Subject,.._.._Subscriber,.._.._Observable,.._.._Subscription,.._.._util_root,.._.._ReplaySubject,.._.._util_tryCatch,.._.._util_errorObject,.._.._util_assign PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};









/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var WebSocketSubject = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(WebSocketSubject, _super);
    function WebSocketSubject(urlConfigOrSource, destination) {
        if (urlConfigOrSource instanceof __WEBPACK_IMPORTED_MODULE_2__Observable__["a" /* Observable */]) {
            _super.call(this, destination, urlConfigOrSource);
        }
        else {
            _super.call(this);
            this.WebSocketCtor = __WEBPACK_IMPORTED_MODULE_4__util_root__["a" /* root */].WebSocket;
            this._output = new __WEBPACK_IMPORTED_MODULE_0__Subject__["b" /* Subject */]();
            if (typeof urlConfigOrSource === 'string') {
                this.url = urlConfigOrSource;
            }
            else {
                // WARNING: config object could override important members here.
                Object(__WEBPACK_IMPORTED_MODULE_8__util_assign__["a" /* assign */])(this, urlConfigOrSource);
            }
            if (!this.WebSocketCtor) {
                throw new Error('no WebSocket constructor can be found');
            }
            this.destination = new __WEBPACK_IMPORTED_MODULE_5__ReplaySubject__["a" /* ReplaySubject */]();
        }
    }
    WebSocketSubject.prototype.resultSelector = function (e) {
        return JSON.parse(e.data);
    };
    /**
     * Wrapper around the w3c-compatible WebSocket object provided by the browser.
     *
     * @example <caption>Wraps browser WebSocket</caption>
     *
     * let socket$ = Observable.webSocket('ws://localhost:8081');
     *
     * socket$.subscribe(
     *    (msg) => console.log('message received: ' + msg),
     *    (err) => console.log(err),
     *    () => console.log('complete')
     *  );
     *
     * socket$.next(JSON.stringify({ op: 'hello' }));
     *
     * @example <caption>Wraps WebSocket from nodejs-websocket (using node.js)</caption>
     *
     * import { w3cwebsocket } from 'websocket';
     *
     * let socket$ = Observable.webSocket({
     *   url: 'ws://localhost:8081',
     *   WebSocketCtor: w3cwebsocket
     * });
     *
     * socket$.subscribe(
     *    (msg) => console.log('message received: ' + msg),
     *    (err) => console.log(err),
     *    () => console.log('complete')
     *  );
     *
     * socket$.next(JSON.stringify({ op: 'hello' }));
     *
     * @param {string | WebSocketSubjectConfig} urlConfigOrSource the source of the websocket as an url or a structure defining the websocket object
     * @return {WebSocketSubject}
     * @static true
     * @name webSocket
     * @owner Observable
     */
    WebSocketSubject.create = function (urlConfigOrSource) {
        return new WebSocketSubject(urlConfigOrSource);
    };
    WebSocketSubject.prototype.lift = function (operator) {
        var sock = new WebSocketSubject(this, this.destination);
        sock.operator = operator;
        return sock;
    };
    WebSocketSubject.prototype._resetState = function () {
        this.socket = null;
        if (!this.source) {
            this.destination = new __WEBPACK_IMPORTED_MODULE_5__ReplaySubject__["a" /* ReplaySubject */]();
        }
        this._output = new __WEBPACK_IMPORTED_MODULE_0__Subject__["b" /* Subject */]();
    };
    // TODO: factor this out to be a proper Operator/Subscriber implementation and eliminate closures
    WebSocketSubject.prototype.multiplex = function (subMsg, unsubMsg, messageFilter) {
        var self = this;
        return new __WEBPACK_IMPORTED_MODULE_2__Observable__["a" /* Observable */](function (observer) {
            var result = Object(__WEBPACK_IMPORTED_MODULE_6__util_tryCatch__["a" /* tryCatch */])(subMsg)();
            if (result === __WEBPACK_IMPORTED_MODULE_7__util_errorObject__["a" /* errorObject */]) {
                observer.error(__WEBPACK_IMPORTED_MODULE_7__util_errorObject__["a" /* errorObject */].e);
            }
            else {
                self.next(result);
            }
            var subscription = self.subscribe(function (x) {
                var result = Object(__WEBPACK_IMPORTED_MODULE_6__util_tryCatch__["a" /* tryCatch */])(messageFilter)(x);
                if (result === __WEBPACK_IMPORTED_MODULE_7__util_errorObject__["a" /* errorObject */]) {
                    observer.error(__WEBPACK_IMPORTED_MODULE_7__util_errorObject__["a" /* errorObject */].e);
                }
                else if (result) {
                    observer.next(x);
                }
            }, function (err) { return observer.error(err); }, function () { return observer.complete(); });
            return function () {
                var result = Object(__WEBPACK_IMPORTED_MODULE_6__util_tryCatch__["a" /* tryCatch */])(unsubMsg)();
                if (result === __WEBPACK_IMPORTED_MODULE_7__util_errorObject__["a" /* errorObject */]) {
                    observer.error(__WEBPACK_IMPORTED_MODULE_7__util_errorObject__["a" /* errorObject */].e);
                }
                else {
                    self.next(result);
                }
                subscription.unsubscribe();
            };
        });
    };
    WebSocketSubject.prototype._connectSocket = function () {
        var _this = this;
        var WebSocketCtor = this.WebSocketCtor;
        var observer = this._output;
        var socket = null;
        try {
            socket = this.protocol ?
                new WebSocketCtor(this.url, this.protocol) :
                new WebSocketCtor(this.url);
            this.socket = socket;
            if (this.binaryType) {
                this.socket.binaryType = this.binaryType;
            }
        }
        catch (e) {
            observer.error(e);
            return;
        }
        var subscription = new __WEBPACK_IMPORTED_MODULE_3__Subscription__["a" /* Subscription */](function () {
            _this.socket = null;
            if (socket && socket.readyState === 1) {
                socket.close();
            }
        });
        socket.onopen = function (e) {
            var openObserver = _this.openObserver;
            if (openObserver) {
                openObserver.next(e);
            }
            var queue = _this.destination;
            _this.destination = __WEBPACK_IMPORTED_MODULE_1__Subscriber__["a" /* Subscriber */].create(function (x) { return socket.readyState === 1 && socket.send(x); }, function (e) {
                var closingObserver = _this.closingObserver;
                if (closingObserver) {
                    closingObserver.next(undefined);
                }
                if (e && e.code) {
                    socket.close(e.code, e.reason);
                }
                else {
                    observer.error(new TypeError('WebSocketSubject.error must be called with an object with an error code, ' +
                        'and an optional reason: { code: number, reason: string }'));
                }
                _this._resetState();
            }, function () {
                var closingObserver = _this.closingObserver;
                if (closingObserver) {
                    closingObserver.next(undefined);
                }
                socket.close();
                _this._resetState();
            });
            if (queue && queue instanceof __WEBPACK_IMPORTED_MODULE_5__ReplaySubject__["a" /* ReplaySubject */]) {
                subscription.add(queue.subscribe(_this.destination));
            }
        };
        socket.onerror = function (e) {
            _this._resetState();
            observer.error(e);
        };
        socket.onclose = function (e) {
            _this._resetState();
            var closeObserver = _this.closeObserver;
            if (closeObserver) {
                closeObserver.next(e);
            }
            if (e.wasClean) {
                observer.complete();
            }
            else {
                observer.error(e);
            }
        };
        socket.onmessage = function (e) {
            var result = Object(__WEBPACK_IMPORTED_MODULE_6__util_tryCatch__["a" /* tryCatch */])(_this.resultSelector)(e);
            if (result === __WEBPACK_IMPORTED_MODULE_7__util_errorObject__["a" /* errorObject */]) {
                observer.error(__WEBPACK_IMPORTED_MODULE_7__util_errorObject__["a" /* errorObject */].e);
            }
            else {
                observer.next(result);
            }
        };
    };
    WebSocketSubject.prototype._subscribe = function (subscriber) {
        var _this = this;
        var source = this.source;
        if (source) {
            return source.subscribe(subscriber);
        }
        if (!this.socket) {
            this._connectSocket();
        }
        var subscription = new __WEBPACK_IMPORTED_MODULE_3__Subscription__["a" /* Subscription */]();
        subscription.add(this._output.subscribe(subscriber));
        subscription.add(function () {
            var socket = _this.socket;
            if (_this._output.observers.length === 0) {
                if (socket && socket.readyState === 1) {
                    socket.close();
                }
                _this._resetState();
            }
        });
        return subscription;
    };
    WebSocketSubject.prototype.unsubscribe = function () {
        var _a = this, source = _a.source, socket = _a.socket;
        if (socket && socket.readyState === 1) {
            socket.close();
            this._resetState();
        }
        _super.prototype.unsubscribe.call(this);
        if (!source) {
            this.destination = new __WEBPACK_IMPORTED_MODULE_5__ReplaySubject__["a" /* ReplaySubject */]();
        }
    };
    return WebSocketSubject;
}(__WEBPACK_IMPORTED_MODULE_0__Subject__["a" /* AnonymousSubject */]));
//# sourceMappingURL=WebSocketSubject.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/observable/dom/ajax.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ajax; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AjaxObservable__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/dom/AjaxObservable.js");
/** PURE_IMPORTS_START ._AjaxObservable PURE_IMPORTS_END */

var ajax = __WEBPACK_IMPORTED_MODULE_0__AjaxObservable__["a" /* AjaxObservable */].create;
//# sourceMappingURL=ajax.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/observable/dom/webSocket.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return webSocket; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__WebSocketSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/dom/WebSocketSubject.js");
/** PURE_IMPORTS_START ._WebSocketSubject PURE_IMPORTS_END */

var webSocket = __WEBPACK_IMPORTED_MODULE_0__WebSocketSubject__["a" /* WebSocketSubject */].create;
//# sourceMappingURL=webSocket.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/observable/empty.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return empty; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__EmptyObservable__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/EmptyObservable.js");
/** PURE_IMPORTS_START ._EmptyObservable PURE_IMPORTS_END */

var empty = __WEBPACK_IMPORTED_MODULE_0__EmptyObservable__["a" /* EmptyObservable */].create;
//# sourceMappingURL=empty.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/observable/fromEventPattern.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fromEventPattern; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__FromEventPatternObservable__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/FromEventPatternObservable.js");
/** PURE_IMPORTS_START ._FromEventPatternObservable PURE_IMPORTS_END */

var fromEventPattern = __WEBPACK_IMPORTED_MODULE_0__FromEventPatternObservable__["a" /* FromEventPatternObservable */].create;
//# sourceMappingURL=fromEventPattern.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/observable/generate.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return generate; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__GenerateObservable__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/GenerateObservable.js");
/** PURE_IMPORTS_START ._GenerateObservable PURE_IMPORTS_END */

var generate = __WEBPACK_IMPORTED_MODULE_0__GenerateObservable__["a" /* GenerateObservable */].create;
//# sourceMappingURL=generate.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/observable/if.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _if; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__IfObservable__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/IfObservable.js");
/** PURE_IMPORTS_START ._IfObservable PURE_IMPORTS_END */

var _if = __WEBPACK_IMPORTED_MODULE_0__IfObservable__["a" /* IfObservable */].create;
//# sourceMappingURL=if.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/observable/never.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return never; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__NeverObservable__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/NeverObservable.js");
/** PURE_IMPORTS_START ._NeverObservable PURE_IMPORTS_END */

var never = __WEBPACK_IMPORTED_MODULE_0__NeverObservable__["a" /* NeverObservable */].create;
//# sourceMappingURL=never.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/observable/onErrorResumeNext.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return onErrorResumeNext; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_onErrorResumeNext__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/onErrorResumeNext.js");
/** PURE_IMPORTS_START .._operators_onErrorResumeNext PURE_IMPORTS_END */

var onErrorResumeNext = __WEBPACK_IMPORTED_MODULE_0__operators_onErrorResumeNext__["b" /* onErrorResumeNextStatic */];
//# sourceMappingURL=onErrorResumeNext.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/observable/pairs.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return pairs; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__PairsObservable__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/PairsObservable.js");
/** PURE_IMPORTS_START ._PairsObservable PURE_IMPORTS_END */

var pairs = __WEBPACK_IMPORTED_MODULE_0__PairsObservable__["a" /* PairsObservable */].create;
//# sourceMappingURL=pairs.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/observable/range.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return range; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__RangeObservable__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/RangeObservable.js");
/** PURE_IMPORTS_START ._RangeObservable PURE_IMPORTS_END */

var range = __WEBPACK_IMPORTED_MODULE_0__RangeObservable__["a" /* RangeObservable */].create;
//# sourceMappingURL=range.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/observable/throw.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _throw; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ErrorObservable__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/ErrorObservable.js");
/** PURE_IMPORTS_START ._ErrorObservable PURE_IMPORTS_END */

var _throw = __WEBPACK_IMPORTED_MODULE_0__ErrorObservable__["a" /* ErrorObservable */].create;
//# sourceMappingURL=throw.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/observable/using.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return using; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UsingObservable__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/UsingObservable.js");
/** PURE_IMPORTS_START ._UsingObservable PURE_IMPORTS_END */

var using = __WEBPACK_IMPORTED_MODULE_0__UsingObservable__["a" /* UsingObservable */].create;
//# sourceMappingURL=using.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/observable/zip.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return zip; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_zip__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/zip.js");
/** PURE_IMPORTS_START .._operators_zip PURE_IMPORTS_END */

var zip = __WEBPACK_IMPORTED_MODULE_0__operators_zip__["c" /* zipStatic */];
//# sourceMappingURL=zip.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/audit.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = audit;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_audit__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/audit.js");
/** PURE_IMPORTS_START .._operators_audit PURE_IMPORTS_END */

/**
 * Ignores source values for a duration determined by another Observable, then
 * emits the most recent value from the source Observable, then repeats this
 * process.
 *
 * <span class="informal">It's like {@link auditTime}, but the silencing
 * duration is determined by a second Observable.</span>
 *
 * <img src="./img/audit.png" width="100%">
 *
 * `audit` is similar to `throttle`, but emits the last value from the silenced
 * time window, instead of the first value. `audit` emits the most recent value
 * from the source Observable on the output Observable as soon as its internal
 * timer becomes disabled, and ignores source values while the timer is enabled.
 * Initially, the timer is disabled. As soon as the first source value arrives,
 * the timer is enabled by calling the `durationSelector` function with the
 * source value, which returns the "duration" Observable. When the duration
 * Observable emits a value or completes, the timer is disabled, then the most
 * recent source value is emitted on the output Observable, and this process
 * repeats for the next source value.
 *
 * @example <caption>Emit clicks at a rate of at most one click per second</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.audit(ev => Rx.Observable.interval(1000));
 * result.subscribe(x => console.log(x));
 *
 * @see {@link auditTime}
 * @see {@link debounce}
 * @see {@link delayWhen}
 * @see {@link sample}
 * @see {@link throttle}
 *
 * @param {function(value: T): SubscribableOrPromise} durationSelector A function
 * that receives a value from the source Observable, for computing the silencing
 * duration, returned as an Observable or a Promise.
 * @return {Observable<T>} An Observable that performs rate-limiting of
 * emissions from the source Observable.
 * @method audit
 * @owner Observable
 */
function audit(durationSelector) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_audit__["a" /* audit */])(durationSelector)(this);
}
//# sourceMappingURL=audit.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/auditTime.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = auditTime;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scheduler_async__ = __webpack_require__("./node_modules/rxjs/_esm5/scheduler/async.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operators_auditTime__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/auditTime.js");
/** PURE_IMPORTS_START .._scheduler_async,.._operators_auditTime PURE_IMPORTS_END */


/**
 * Ignores source values for `duration` milliseconds, then emits the most recent
 * value from the source Observable, then repeats this process.
 *
 * <span class="informal">When it sees a source values, it ignores that plus
 * the next ones for `duration` milliseconds, and then it emits the most recent
 * value from the source.</span>
 *
 * <img src="./img/auditTime.png" width="100%">
 *
 * `auditTime` is similar to `throttleTime`, but emits the last value from the
 * silenced time window, instead of the first value. `auditTime` emits the most
 * recent value from the source Observable on the output Observable as soon as
 * its internal timer becomes disabled, and ignores source values while the
 * timer is enabled. Initially, the timer is disabled. As soon as the first
 * source value arrives, the timer is enabled. After `duration` milliseconds (or
 * the time unit determined internally by the optional `scheduler`) has passed,
 * the timer is disabled, then the most recent source value is emitted on the
 * output Observable, and this process repeats for the next source value.
 * Optionally takes a {@link IScheduler} for managing timers.
 *
 * @example <caption>Emit clicks at a rate of at most one click per second</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.auditTime(1000);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link audit}
 * @see {@link debounceTime}
 * @see {@link delay}
 * @see {@link sampleTime}
 * @see {@link throttleTime}
 *
 * @param {number} duration Time to wait before emitting the most recent source
 * value, measured in milliseconds or the time unit determined internally
 * by the optional `scheduler`.
 * @param {Scheduler} [scheduler=async] The {@link IScheduler} to use for
 * managing the timers that handle the rate-limiting behavior.
 * @return {Observable<T>} An Observable that performs rate-limiting of
 * emissions from the source Observable.
 * @method auditTime
 * @owner Observable
 */
function auditTime(duration, scheduler) {
    if (scheduler === void 0) {
        scheduler = __WEBPACK_IMPORTED_MODULE_0__scheduler_async__["a" /* async */];
    }
    return Object(__WEBPACK_IMPORTED_MODULE_1__operators_auditTime__["a" /* auditTime */])(duration, scheduler)(this);
}
//# sourceMappingURL=auditTime.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/buffer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = buffer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_buffer__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/buffer.js");
/** PURE_IMPORTS_START .._operators_buffer PURE_IMPORTS_END */

/**
 * Buffers the source Observable values until `closingNotifier` emits.
 *
 * <span class="informal">Collects values from the past as an array, and emits
 * that array only when another Observable emits.</span>
 *
 * <img src="./img/buffer.png" width="100%">
 *
 * Buffers the incoming Observable values until the given `closingNotifier`
 * Observable emits a value, at which point it emits the buffer on the output
 * Observable and starts a new buffer internally, awaiting the next time
 * `closingNotifier` emits.
 *
 * @example <caption>On every click, emit array of most recent interval events</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var interval = Rx.Observable.interval(1000);
 * var buffered = interval.buffer(clicks);
 * buffered.subscribe(x => console.log(x));
 *
 * @see {@link bufferCount}
 * @see {@link bufferTime}
 * @see {@link bufferToggle}
 * @see {@link bufferWhen}
 * @see {@link window}
 *
 * @param {Observable<any>} closingNotifier An Observable that signals the
 * buffer to be emitted on the output Observable.
 * @return {Observable<T[]>} An Observable of buffers, which are arrays of
 * values.
 * @method buffer
 * @owner Observable
 */
function buffer(closingNotifier) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_buffer__["a" /* buffer */])(closingNotifier)(this);
}
//# sourceMappingURL=buffer.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/bufferCount.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = bufferCount;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_bufferCount__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/bufferCount.js");
/** PURE_IMPORTS_START .._operators_bufferCount PURE_IMPORTS_END */

/**
 * Buffers the source Observable values until the size hits the maximum
 * `bufferSize` given.
 *
 * <span class="informal">Collects values from the past as an array, and emits
 * that array only when its size reaches `bufferSize`.</span>
 *
 * <img src="./img/bufferCount.png" width="100%">
 *
 * Buffers a number of values from the source Observable by `bufferSize` then
 * emits the buffer and clears it, and starts a new buffer each
 * `startBufferEvery` values. If `startBufferEvery` is not provided or is
 * `null`, then new buffers are started immediately at the start of the source
 * and when each buffer closes and is emitted.
 *
 * @example <caption>Emit the last two click events as an array</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var buffered = clicks.bufferCount(2);
 * buffered.subscribe(x => console.log(x));
 *
 * @example <caption>On every click, emit the last two click events as an array</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var buffered = clicks.bufferCount(2, 1);
 * buffered.subscribe(x => console.log(x));
 *
 * @see {@link buffer}
 * @see {@link bufferTime}
 * @see {@link bufferToggle}
 * @see {@link bufferWhen}
 * @see {@link pairwise}
 * @see {@link windowCount}
 *
 * @param {number} bufferSize The maximum size of the buffer emitted.
 * @param {number} [startBufferEvery] Interval at which to start a new buffer.
 * For example if `startBufferEvery` is `2`, then a new buffer will be started
 * on every other value from the source. A new buffer is started at the
 * beginning of the source by default.
 * @return {Observable<T[]>} An Observable of arrays of buffered values.
 * @method bufferCount
 * @owner Observable
 */
function bufferCount(bufferSize, startBufferEvery) {
    if (startBufferEvery === void 0) {
        startBufferEvery = null;
    }
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_bufferCount__["a" /* bufferCount */])(bufferSize, startBufferEvery)(this);
}
//# sourceMappingURL=bufferCount.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/bufferTime.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = bufferTime;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scheduler_async__ = __webpack_require__("./node_modules/rxjs/_esm5/scheduler/async.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_isScheduler__ = __webpack_require__("./node_modules/rxjs/_esm5/util/isScheduler.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__operators_bufferTime__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/bufferTime.js");
/** PURE_IMPORTS_START .._scheduler_async,.._util_isScheduler,.._operators_bufferTime PURE_IMPORTS_END */



/* tslint:enable:max-line-length */
/**
 * Buffers the source Observable values for a specific time period.
 *
 * <span class="informal">Collects values from the past as an array, and emits
 * those arrays periodically in time.</span>
 *
 * <img src="./img/bufferTime.png" width="100%">
 *
 * Buffers values from the source for a specific time duration `bufferTimeSpan`.
 * Unless the optional argument `bufferCreationInterval` is given, it emits and
 * resets the buffer every `bufferTimeSpan` milliseconds. If
 * `bufferCreationInterval` is given, this operator opens the buffer every
 * `bufferCreationInterval` milliseconds and closes (emits and resets) the
 * buffer every `bufferTimeSpan` milliseconds. When the optional argument
 * `maxBufferSize` is specified, the buffer will be closed either after
 * `bufferTimeSpan` milliseconds or when it contains `maxBufferSize` elements.
 *
 * @example <caption>Every second, emit an array of the recent click events</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var buffered = clicks.bufferTime(1000);
 * buffered.subscribe(x => console.log(x));
 *
 * @example <caption>Every 5 seconds, emit the click events from the next 2 seconds</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var buffered = clicks.bufferTime(2000, 5000);
 * buffered.subscribe(x => console.log(x));
 *
 * @see {@link buffer}
 * @see {@link bufferCount}
 * @see {@link bufferToggle}
 * @see {@link bufferWhen}
 * @see {@link windowTime}
 *
 * @param {number} bufferTimeSpan The amount of time to fill each buffer array.
 * @param {number} [bufferCreationInterval] The interval at which to start new
 * buffers.
 * @param {number} [maxBufferSize] The maximum buffer size.
 * @param {Scheduler} [scheduler=async] The scheduler on which to schedule the
 * intervals that determine buffer boundaries.
 * @return {Observable<T[]>} An observable of arrays of buffered values.
 * @method bufferTime
 * @owner Observable
 */
function bufferTime(bufferTimeSpan) {
    var length = arguments.length;
    var scheduler = __WEBPACK_IMPORTED_MODULE_0__scheduler_async__["a" /* async */];
    if (Object(__WEBPACK_IMPORTED_MODULE_1__util_isScheduler__["a" /* isScheduler */])(arguments[arguments.length - 1])) {
        scheduler = arguments[arguments.length - 1];
        length--;
    }
    var bufferCreationInterval = null;
    if (length >= 2) {
        bufferCreationInterval = arguments[1];
    }
    var maxBufferSize = Number.POSITIVE_INFINITY;
    if (length >= 3) {
        maxBufferSize = arguments[2];
    }
    return Object(__WEBPACK_IMPORTED_MODULE_2__operators_bufferTime__["a" /* bufferTime */])(bufferTimeSpan, bufferCreationInterval, maxBufferSize, scheduler)(this);
}
//# sourceMappingURL=bufferTime.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/bufferToggle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = bufferToggle;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_bufferToggle__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/bufferToggle.js");
/** PURE_IMPORTS_START .._operators_bufferToggle PURE_IMPORTS_END */

/**
 * Buffers the source Observable values starting from an emission from
 * `openings` and ending when the output of `closingSelector` emits.
 *
 * <span class="informal">Collects values from the past as an array. Starts
 * collecting only when `opening` emits, and calls the `closingSelector`
 * function to get an Observable that tells when to close the buffer.</span>
 *
 * <img src="./img/bufferToggle.png" width="100%">
 *
 * Buffers values from the source by opening the buffer via signals from an
 * Observable provided to `openings`, and closing and sending the buffers when
 * a Subscribable or Promise returned by the `closingSelector` function emits.
 *
 * @example <caption>Every other second, emit the click events from the next 500ms</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var openings = Rx.Observable.interval(1000);
 * var buffered = clicks.bufferToggle(openings, i =>
 *   i % 2 ? Rx.Observable.interval(500) : Rx.Observable.empty()
 * );
 * buffered.subscribe(x => console.log(x));
 *
 * @see {@link buffer}
 * @see {@link bufferCount}
 * @see {@link bufferTime}
 * @see {@link bufferWhen}
 * @see {@link windowToggle}
 *
 * @param {SubscribableOrPromise<O>} openings A Subscribable or Promise of notifications to start new
 * buffers.
 * @param {function(value: O): SubscribableOrPromise} closingSelector A function that takes
 * the value emitted by the `openings` observable and returns a Subscribable or Promise,
 * which, when it emits, signals that the associated buffer should be emitted
 * and cleared.
 * @return {Observable<T[]>} An observable of arrays of buffered values.
 * @method bufferToggle
 * @owner Observable
 */
function bufferToggle(openings, closingSelector) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_bufferToggle__["a" /* bufferToggle */])(openings, closingSelector)(this);
}
//# sourceMappingURL=bufferToggle.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/bufferWhen.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = bufferWhen;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_bufferWhen__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/bufferWhen.js");
/** PURE_IMPORTS_START .._operators_bufferWhen PURE_IMPORTS_END */

/**
 * Buffers the source Observable values, using a factory function of closing
 * Observables to determine when to close, emit, and reset the buffer.
 *
 * <span class="informal">Collects values from the past as an array. When it
 * starts collecting values, it calls a function that returns an Observable that
 * tells when to close the buffer and restart collecting.</span>
 *
 * <img src="./img/bufferWhen.png" width="100%">
 *
 * Opens a buffer immediately, then closes the buffer when the observable
 * returned by calling `closingSelector` function emits a value. When it closes
 * the buffer, it immediately opens a new buffer and repeats the process.
 *
 * @example <caption>Emit an array of the last clicks every [1-5] random seconds</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var buffered = clicks.bufferWhen(() =>
 *   Rx.Observable.interval(1000 + Math.random() * 4000)
 * );
 * buffered.subscribe(x => console.log(x));
 *
 * @see {@link buffer}
 * @see {@link bufferCount}
 * @see {@link bufferTime}
 * @see {@link bufferToggle}
 * @see {@link windowWhen}
 *
 * @param {function(): Observable} closingSelector A function that takes no
 * arguments and returns an Observable that signals buffer closure.
 * @return {Observable<T[]>} An observable of arrays of buffered values.
 * @method bufferWhen
 * @owner Observable
 */
function bufferWhen(closingSelector) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_bufferWhen__["a" /* bufferWhen */])(closingSelector)(this);
}
//# sourceMappingURL=bufferWhen.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/combineAll.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = combineAll;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_combineAll__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/combineAll.js");
/** PURE_IMPORTS_START .._operators_combineAll PURE_IMPORTS_END */

/**
 * Converts a higher-order Observable into a first-order Observable by waiting
 * for the outer Observable to complete, then applying {@link combineLatest}.
 *
 * <span class="informal">Flattens an Observable-of-Observables by applying
 * {@link combineLatest} when the Observable-of-Observables completes.</span>
 *
 * <img src="./img/combineAll.png" width="100%">
 *
 * Takes an Observable of Observables, and collects all Observables from it.
 * Once the outer Observable completes, it subscribes to all collected
 * Observables and combines their values using the {@link combineLatest}
 * strategy, such that:
 * - Every time an inner Observable emits, the output Observable emits.
 * - When the returned observable emits, it emits all of the latest values by:
 *   - If a `project` function is provided, it is called with each recent value
 *     from each inner Observable in whatever order they arrived, and the result
 *     of the `project` function is what is emitted by the output Observable.
 *   - If there is no `project` function, an array of all of the most recent
 *     values is emitted by the output Observable.
 *
 * @example <caption>Map two click events to a finite interval Observable, then apply combineAll</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var higherOrder = clicks.map(ev =>
 *   Rx.Observable.interval(Math.random()*2000).take(3)
 * ).take(2);
 * var result = higherOrder.combineAll();
 * result.subscribe(x => console.log(x));
 *
 * @see {@link combineLatest}
 * @see {@link mergeAll}
 *
 * @param {function} [project] An optional function to map the most recent
 * values from each inner Observable into a new result. Takes each of the most
 * recent values from each collected inner Observable as arguments, in order.
 * @return {Observable} An Observable of projected results or arrays of recent
 * values.
 * @method combineAll
 * @owner Observable
 */
function combineAll(project) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_combineAll__["a" /* combineAll */])(project)(this);
}
//# sourceMappingURL=combineAll.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/combineLatest.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = combineLatest;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_combineLatest__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/combineLatest.js");
/** PURE_IMPORTS_START .._operators_combineLatest PURE_IMPORTS_END */

/* tslint:enable:max-line-length */
/**
 * Combines multiple Observables to create an Observable whose values are
 * calculated from the latest values of each of its input Observables.
 *
 * <span class="informal">Whenever any input Observable emits a value, it
 * computes a formula using the latest values from all the inputs, then emits
 * the output of that formula.</span>
 *
 * <img src="./img/combineLatest.png" width="100%">
 *
 * `combineLatest` combines the values from this Observable with values from
 * Observables passed as arguments. This is done by subscribing to each
 * Observable, in order, and collecting an array of each of the most recent
 * values any time any of the input Observables emits, then either taking that
 * array and passing it as arguments to an optional `project` function and
 * emitting the return value of that, or just emitting the array of recent
 * values directly if there is no `project` function.
 *
 * @example <caption>Dynamically calculate the Body-Mass Index from an Observable of weight and one for height</caption>
 * var weight = Rx.Observable.of(70, 72, 76, 79, 75);
 * var height = Rx.Observable.of(1.76, 1.77, 1.78);
 * var bmi = weight.combineLatest(height, (w, h) => w / (h * h));
 * bmi.subscribe(x => console.log('BMI is ' + x));
 *
 * // With output to console:
 * // BMI is 24.212293388429753
 * // BMI is 23.93948099205209
 * // BMI is 23.671253629592222
 *
 * @see {@link combineAll}
 * @see {@link merge}
 * @see {@link withLatestFrom}
 *
 * @param {ObservableInput} other An input Observable to combine with the source
 * Observable. More than one input Observables may be given as argument.
 * @param {function} [project] An optional function to project the values from
 * the combined latest values into a new value on the output Observable.
 * @return {Observable} An Observable of projected values from the most recent
 * values from each input Observable, or an array of the most recent values from
 * each input Observable.
 * @method combineLatest
 * @owner Observable
 */
function combineLatest() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i - 0] = arguments[_i];
    }
    return __WEBPACK_IMPORTED_MODULE_0__operators_combineLatest__["b" /* combineLatest */].apply(void 0, observables)(this);
}
//# sourceMappingURL=combineLatest.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/concat.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = concat;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_concat__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/concat.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_concat__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/concat.js");
/* unused harmony reexport concatStatic */
/** PURE_IMPORTS_START .._operators_concat PURE_IMPORTS_END */


/* tslint:enable:max-line-length */
/**
 * Creates an output Observable which sequentially emits all values from every
 * given input Observable after the current Observable.
 *
 * <span class="informal">Concatenates multiple Observables together by
 * sequentially emitting their values, one Observable after the other.</span>
 *
 * <img src="./img/concat.png" width="100%">
 *
 * Joins this Observable with multiple other Observables by subscribing to them
 * one at a time, starting with the source, and merging their results into the
 * output Observable. Will wait for each Observable to complete before moving
 * on to the next.
 *
 * @example <caption>Concatenate a timer counting from 0 to 3 with a synchronous sequence from 1 to 10</caption>
 * var timer = Rx.Observable.interval(1000).take(4);
 * var sequence = Rx.Observable.range(1, 10);
 * var result = timer.concat(sequence);
 * result.subscribe(x => console.log(x));
 *
 * // results in:
 * // 1000ms-> 0 -1000ms-> 1 -1000ms-> 2 -1000ms-> 3 -immediate-> 1 ... 10
 *
 * @example <caption>Concatenate 3 Observables</caption>
 * var timer1 = Rx.Observable.interval(1000).take(10);
 * var timer2 = Rx.Observable.interval(2000).take(6);
 * var timer3 = Rx.Observable.interval(500).take(10);
 * var result = timer1.concat(timer2, timer3);
 * result.subscribe(x => console.log(x));
 *
 * // results in the following:
 * // (Prints to console sequentially)
 * // -1000ms-> 0 -1000ms-> 1 -1000ms-> ... 9
 * // -2000ms-> 0 -2000ms-> 1 -2000ms-> ... 5
 * // -500ms-> 0 -500ms-> 1 -500ms-> ... 9
 *
 * @see {@link concatAll}
 * @see {@link concatMap}
 * @see {@link concatMapTo}
 *
 * @param {ObservableInput} other An input Observable to concatenate after the source
 * Observable. More than one input Observables may be given as argument.
 * @param {Scheduler} [scheduler=null] An optional IScheduler to schedule each
 * Observable subscription on.
 * @return {Observable} All values of each passed Observable merged into a
 * single Observable, in order, in serial fashion.
 * @method concat
 * @owner Observable
 */
function concat() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i - 0] = arguments[_i];
    }
    return __WEBPACK_IMPORTED_MODULE_0__operators_concat__["a" /* concat */].apply(void 0, observables)(this);
}
//# sourceMappingURL=concat.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/concatMapTo.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = concatMapTo;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_concatMapTo__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/concatMapTo.js");
/** PURE_IMPORTS_START .._operators_concatMapTo PURE_IMPORTS_END */

/* tslint:enable:max-line-length */
/**
 * Projects each source value to the same Observable which is merged multiple
 * times in a serialized fashion on the output Observable.
 *
 * <span class="informal">It's like {@link concatMap}, but maps each value
 * always to the same inner Observable.</span>
 *
 * <img src="./img/concatMapTo.png" width="100%">
 *
 * Maps each source value to the given Observable `innerObservable` regardless
 * of the source value, and then flattens those resulting Observables into one
 * single Observable, which is the output Observable. Each new `innerObservable`
 * instance emitted on the output Observable is concatenated with the previous
 * `innerObservable` instance.
 *
 * __Warning:__ if source values arrive endlessly and faster than their
 * corresponding inner Observables can complete, it will result in memory issues
 * as inner Observables amass in an unbounded buffer waiting for their turn to
 * be subscribed to.
 *
 * Note: `concatMapTo` is equivalent to `mergeMapTo` with concurrency parameter
 * set to `1`.
 *
 * @example <caption>For each click event, tick every second from 0 to 3, with no concurrency</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.concatMapTo(Rx.Observable.interval(1000).take(4));
 * result.subscribe(x => console.log(x));
 *
 * // Results in the following:
 * // (results are not concurrent)
 * // For every click on the "document" it will emit values 0 to 3 spaced
 * // on a 1000ms interval
 * // one click = 1000ms-> 0 -1000ms-> 1 -1000ms-> 2 -1000ms-> 3
 *
 * @see {@link concat}
 * @see {@link concatAll}
 * @see {@link concatMap}
 * @see {@link mergeMapTo}
 * @see {@link switchMapTo}
 *
 * @param {ObservableInput} innerObservable An Observable to replace each value from
 * the source Observable.
 * @param {function(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number): any} [resultSelector]
 * A function to produce the value on the output Observable based on the values
 * and the indices of the source (outer) emission and the inner Observable
 * emission. The arguments passed to this function are:
 * - `outerValue`: the value that came from the source
 * - `innerValue`: the value that came from the projected Observable
 * - `outerIndex`: the "index" of the value that came from the source
 * - `innerIndex`: the "index" of the value from the projected Observable
 * @return {Observable} An observable of values merged together by joining the
 * passed observable with itself, one after the other, for each value emitted
 * from the source.
 * @method concatMapTo
 * @owner Observable
 */
function concatMapTo(innerObservable, resultSelector) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_concatMapTo__["a" /* concatMapTo */])(innerObservable, resultSelector)(this);
}
//# sourceMappingURL=concatMapTo.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/count.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = count;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_count__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/count.js");
/** PURE_IMPORTS_START .._operators_count PURE_IMPORTS_END */

/**
 * Counts the number of emissions on the source and emits that number when the
 * source completes.
 *
 * <span class="informal">Tells how many values were emitted, when the source
 * completes.</span>
 *
 * <img src="./img/count.png" width="100%">
 *
 * `count` transforms an Observable that emits values into an Observable that
 * emits a single value that represents the number of values emitted by the
 * source Observable. If the source Observable terminates with an error, `count`
 * will pass this error notification along without emitting a value first. If
 * the source Observable does not terminate at all, `count` will neither emit
 * a value nor terminate. This operator takes an optional `predicate` function
 * as argument, in which case the output emission will represent the number of
 * source values that matched `true` with the `predicate`.
 *
 * @example <caption>Counts how many seconds have passed before the first click happened</caption>
 * var seconds = Rx.Observable.interval(1000);
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var secondsBeforeClick = seconds.takeUntil(clicks);
 * var result = secondsBeforeClick.count();
 * result.subscribe(x => console.log(x));
 *
 * @example <caption>Counts how many odd numbers are there between 1 and 7</caption>
 * var numbers = Rx.Observable.range(1, 7);
 * var result = numbers.count(i => i % 2 === 1);
 * result.subscribe(x => console.log(x));
 *
 * // Results in:
 * // 4
 *
 * @see {@link max}
 * @see {@link min}
 * @see {@link reduce}
 *
 * @param {function(value: T, i: number, source: Observable<T>): boolean} [predicate] A
 * boolean function to select what values are to be counted. It is provided with
 * arguments of:
 * - `value`: the value from the source Observable.
 * - `index`: the (zero-based) "index" of the value from the source Observable.
 * - `source`: the source Observable instance itself.
 * @return {Observable} An Observable of one number that represents the count as
 * described above.
 * @method count
 * @owner Observable
 */
function count(predicate) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_count__["a" /* count */])(predicate)(this);
}
//# sourceMappingURL=count.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/debounce.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = debounce;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_debounce__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/debounce.js");
/** PURE_IMPORTS_START .._operators_debounce PURE_IMPORTS_END */

/**
 * Emits a value from the source Observable only after a particular time span
 * determined by another Observable has passed without another source emission.
 *
 * <span class="informal">It's like {@link debounceTime}, but the time span of
 * emission silence is determined by a second Observable.</span>
 *
 * <img src="./img/debounce.png" width="100%">
 *
 * `debounce` delays values emitted by the source Observable, but drops previous
 * pending delayed emissions if a new value arrives on the source Observable.
 * This operator keeps track of the most recent value from the source
 * Observable, and spawns a duration Observable by calling the
 * `durationSelector` function. The value is emitted only when the duration
 * Observable emits a value or completes, and if no other value was emitted on
 * the source Observable since the duration Observable was spawned. If a new
 * value appears before the duration Observable emits, the previous value will
 * be dropped and will not be emitted on the output Observable.
 *
 * Like {@link debounceTime}, this is a rate-limiting operator, and also a
 * delay-like operator since output emissions do not necessarily occur at the
 * same time as they did on the source Observable.
 *
 * @example <caption>Emit the most recent click after a burst of clicks</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.debounce(() => Rx.Observable.interval(1000));
 * result.subscribe(x => console.log(x));
 *
 * @see {@link audit}
 * @see {@link debounceTime}
 * @see {@link delayWhen}
 * @see {@link throttle}
 *
 * @param {function(value: T): SubscribableOrPromise} durationSelector A function
 * that receives a value from the source Observable, for computing the timeout
 * duration for each source value, returned as an Observable or a Promise.
 * @return {Observable} An Observable that delays the emissions of the source
 * Observable by the specified duration Observable returned by
 * `durationSelector`, and may drop some values if they occur too frequently.
 * @method debounce
 * @owner Observable
 */
function debounce(durationSelector) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_debounce__["a" /* debounce */])(durationSelector)(this);
}
//# sourceMappingURL=debounce.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/debounceTime.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = debounceTime;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scheduler_async__ = __webpack_require__("./node_modules/rxjs/_esm5/scheduler/async.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operators_debounceTime__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/debounceTime.js");
/** PURE_IMPORTS_START .._scheduler_async,.._operators_debounceTime PURE_IMPORTS_END */


/**
 * Emits a value from the source Observable only after a particular time span
 * has passed without another source emission.
 *
 * <span class="informal">It's like {@link delay}, but passes only the most
 * recent value from each burst of emissions.</span>
 *
 * <img src="./img/debounceTime.png" width="100%">
 *
 * `debounceTime` delays values emitted by the source Observable, but drops
 * previous pending delayed emissions if a new value arrives on the source
 * Observable. This operator keeps track of the most recent value from the
 * source Observable, and emits that only when `dueTime` enough time has passed
 * without any other value appearing on the source Observable. If a new value
 * appears before `dueTime` silence occurs, the previous value will be dropped
 * and will not be emitted on the output Observable.
 *
 * This is a rate-limiting operator, because it is impossible for more than one
 * value to be emitted in any time window of duration `dueTime`, but it is also
 * a delay-like operator since output emissions do not occur at the same time as
 * they did on the source Observable. Optionally takes a {@link IScheduler} for
 * managing timers.
 *
 * @example <caption>Emit the most recent click after a burst of clicks</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.debounceTime(1000);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link auditTime}
 * @see {@link debounce}
 * @see {@link delay}
 * @see {@link sampleTime}
 * @see {@link throttleTime}
 *
 * @param {number} dueTime The timeout duration in milliseconds (or the time
 * unit determined internally by the optional `scheduler`) for the window of
 * time required to wait for emission silence before emitting the most recent
 * source value.
 * @param {Scheduler} [scheduler=async] The {@link IScheduler} to use for
 * managing the timers that handle the timeout for each value.
 * @return {Observable} An Observable that delays the emissions of the source
 * Observable by the specified `dueTime`, and may drop some values if they occur
 * too frequently.
 * @method debounceTime
 * @owner Observable
 */
function debounceTime(dueTime, scheduler) {
    if (scheduler === void 0) {
        scheduler = __WEBPACK_IMPORTED_MODULE_0__scheduler_async__["a" /* async */];
    }
    return Object(__WEBPACK_IMPORTED_MODULE_1__operators_debounceTime__["a" /* debounceTime */])(dueTime, scheduler)(this);
}
//# sourceMappingURL=debounceTime.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/defaultIfEmpty.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = defaultIfEmpty;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_defaultIfEmpty__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/defaultIfEmpty.js");
/** PURE_IMPORTS_START .._operators_defaultIfEmpty PURE_IMPORTS_END */

/* tslint:enable:max-line-length */
/**
 * Emits a given value if the source Observable completes without emitting any
 * `next` value, otherwise mirrors the source Observable.
 *
 * <span class="informal">If the source Observable turns out to be empty, then
 * this operator will emit a default value.</span>
 *
 * <img src="./img/defaultIfEmpty.png" width="100%">
 *
 * `defaultIfEmpty` emits the values emitted by the source Observable or a
 * specified default value if the source Observable is empty (completes without
 * having emitted any `next` value).
 *
 * @example <caption>If no clicks happen in 5 seconds, then emit "no clicks"</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var clicksBeforeFive = clicks.takeUntil(Rx.Observable.interval(5000));
 * var result = clicksBeforeFive.defaultIfEmpty('no clicks');
 * result.subscribe(x => console.log(x));
 *
 * @see {@link empty}
 * @see {@link last}
 *
 * @param {any} [defaultValue=null] The default value used if the source
 * Observable is empty.
 * @return {Observable} An Observable that emits either the specified
 * `defaultValue` if the source Observable emits no items, or the values emitted
 * by the source Observable.
 * @method defaultIfEmpty
 * @owner Observable
 */
function defaultIfEmpty(defaultValue) {
    if (defaultValue === void 0) {
        defaultValue = null;
    }
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_defaultIfEmpty__["a" /* defaultIfEmpty */])(defaultValue)(this);
}
//# sourceMappingURL=defaultIfEmpty.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/delay.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = delay;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scheduler_async__ = __webpack_require__("./node_modules/rxjs/_esm5/scheduler/async.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operators_delay__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/delay.js");
/** PURE_IMPORTS_START .._scheduler_async,.._operators_delay PURE_IMPORTS_END */


/**
 * Delays the emission of items from the source Observable by a given timeout or
 * until a given Date.
 *
 * <span class="informal">Time shifts each item by some specified amount of
 * milliseconds.</span>
 *
 * <img src="./img/delay.png" width="100%">
 *
 * If the delay argument is a Number, this operator time shifts the source
 * Observable by that amount of time expressed in milliseconds. The relative
 * time intervals between the values are preserved.
 *
 * If the delay argument is a Date, this operator time shifts the start of the
 * Observable execution until the given date occurs.
 *
 * @example <caption>Delay each click by one second</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var delayedClicks = clicks.delay(1000); // each click emitted after 1 second
 * delayedClicks.subscribe(x => console.log(x));
 *
 * @example <caption>Delay all clicks until a future date happens</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var date = new Date('March 15, 2050 12:00:00'); // in the future
 * var delayedClicks = clicks.delay(date); // click emitted only after that date
 * delayedClicks.subscribe(x => console.log(x));
 *
 * @see {@link debounceTime}
 * @see {@link delayWhen}
 *
 * @param {number|Date} delay The delay duration in milliseconds (a `number`) or
 * a `Date` until which the emission of the source items is delayed.
 * @param {Scheduler} [scheduler=async] The IScheduler to use for
 * managing the timers that handle the time-shift for each item.
 * @return {Observable} An Observable that delays the emissions of the source
 * Observable by the specified timeout or Date.
 * @method delay
 * @owner Observable
 */
function delay(delay, scheduler) {
    if (scheduler === void 0) {
        scheduler = __WEBPACK_IMPORTED_MODULE_0__scheduler_async__["a" /* async */];
    }
    return Object(__WEBPACK_IMPORTED_MODULE_1__operators_delay__["a" /* delay */])(delay, scheduler)(this);
}
//# sourceMappingURL=delay.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/delayWhen.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = delayWhen;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_delayWhen__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/delayWhen.js");
/** PURE_IMPORTS_START .._operators_delayWhen PURE_IMPORTS_END */

/**
 * Delays the emission of items from the source Observable by a given time span
 * determined by the emissions of another Observable.
 *
 * <span class="informal">It's like {@link delay}, but the time span of the
 * delay duration is determined by a second Observable.</span>
 *
 * <img src="./img/delayWhen.png" width="100%">
 *
 * `delayWhen` time shifts each emitted value from the source Observable by a
 * time span determined by another Observable. When the source emits a value,
 * the `delayDurationSelector` function is called with the source value as
 * argument, and should return an Observable, called the "duration" Observable.
 * The source value is emitted on the output Observable only when the duration
 * Observable emits a value or completes.
 *
 * Optionally, `delayWhen` takes a second argument, `subscriptionDelay`, which
 * is an Observable. When `subscriptionDelay` emits its first value or
 * completes, the source Observable is subscribed to and starts behaving like
 * described in the previous paragraph. If `subscriptionDelay` is not provided,
 * `delayWhen` will subscribe to the source Observable as soon as the output
 * Observable is subscribed.
 *
 * @example <caption>Delay each click by a random amount of time, between 0 and 5 seconds</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var delayedClicks = clicks.delayWhen(event =>
 *   Rx.Observable.interval(Math.random() * 5000)
 * );
 * delayedClicks.subscribe(x => console.log(x));
 *
 * @see {@link debounce}
 * @see {@link delay}
 *
 * @param {function(value: T): Observable} delayDurationSelector A function that
 * returns an Observable for each value emitted by the source Observable, which
 * is then used to delay the emission of that item on the output Observable
 * until the Observable returned from this function emits a value.
 * @param {Observable} subscriptionDelay An Observable that triggers the
 * subscription to the source Observable once it emits any value.
 * @return {Observable} An Observable that delays the emissions of the source
 * Observable by an amount of time specified by the Observable returned by
 * `delayDurationSelector`.
 * @method delayWhen
 * @owner Observable
 */
function delayWhen(delayDurationSelector, subscriptionDelay) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_delayWhen__["a" /* delayWhen */])(delayDurationSelector, subscriptionDelay)(this);
}
//# sourceMappingURL=delayWhen.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/dematerialize.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = dematerialize;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_dematerialize__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/dematerialize.js");
/** PURE_IMPORTS_START .._operators_dematerialize PURE_IMPORTS_END */

/**
 * Converts an Observable of {@link Notification} objects into the emissions
 * that they represent.
 *
 * <span class="informal">Unwraps {@link Notification} objects as actual `next`,
 * `error` and `complete` emissions. The opposite of {@link materialize}.</span>
 *
 * <img src="./img/dematerialize.png" width="100%">
 *
 * `dematerialize` is assumed to operate an Observable that only emits
 * {@link Notification} objects as `next` emissions, and does not emit any
 * `error`. Such Observable is the output of a `materialize` operation. Those
 * notifications are then unwrapped using the metadata they contain, and emitted
 * as `next`, `error`, and `complete` on the output Observable.
 *
 * Use this operator in conjunction with {@link materialize}.
 *
 * @example <caption>Convert an Observable of Notifications to an actual Observable</caption>
 * var notifA = new Rx.Notification('N', 'A');
 * var notifB = new Rx.Notification('N', 'B');
 * var notifE = new Rx.Notification('E', void 0,
 *   new TypeError('x.toUpperCase is not a function')
 * );
 * var materialized = Rx.Observable.of(notifA, notifB, notifE);
 * var upperCase = materialized.dematerialize();
 * upperCase.subscribe(x => console.log(x), e => console.error(e));
 *
 * // Results in:
 * // A
 * // B
 * // TypeError: x.toUpperCase is not a function
 *
 * @see {@link Notification}
 * @see {@link materialize}
 *
 * @return {Observable} An Observable that emits items and notifications
 * embedded in Notification objects emitted by the source Observable.
 * @method dematerialize
 * @owner Observable
 */
function dematerialize() {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_dematerialize__["a" /* dematerialize */])()(this);
}
//# sourceMappingURL=dematerialize.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/distinct.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = distinct;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_distinct__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/distinct.js");
/** PURE_IMPORTS_START .._operators_distinct PURE_IMPORTS_END */

/**
 * Returns an Observable that emits all items emitted by the source Observable that are distinct by comparison from previous items.
 *
 * If a keySelector function is provided, then it will project each value from the source observable into a new value that it will
 * check for equality with previously projected values. If a keySelector function is not provided, it will use each value from the
 * source observable directly with an equality check against previous values.
 *
 * In JavaScript runtimes that support `Set`, this operator will use a `Set` to improve performance of the distinct value checking.
 *
 * In other runtimes, this operator will use a minimal implementation of `Set` that relies on an `Array` and `indexOf` under the
 * hood, so performance will degrade as more values are checked for distinction. Even in newer browsers, a long-running `distinct`
 * use might result in memory leaks. To help alleviate this in some scenarios, an optional `flushes` parameter is also provided so
 * that the internal `Set` can be "flushed", basically clearing it of values.
 *
 * @example <caption>A simple example with numbers</caption>
 * Observable.of(1, 1, 2, 2, 2, 1, 2, 3, 4, 3, 2, 1)
 *   .distinct()
 *   .subscribe(x => console.log(x)); // 1, 2, 3, 4
 *
 * @example <caption>An example using a keySelector function</caption>
 * interface Person {
 *    age: number,
 *    name: string
 * }
 *
 * Observable.of<Person>(
 *     { age: 4, name: 'Foo'},
 *     { age: 7, name: 'Bar'},
 *     { age: 5, name: 'Foo'})
 *     .distinct((p: Person) => p.name)
 *     .subscribe(x => console.log(x));
 *
 * // displays:
 * // { age: 4, name: 'Foo' }
 * // { age: 7, name: 'Bar' }
 *
 * @see {@link distinctUntilChanged}
 * @see {@link distinctUntilKeyChanged}
 *
 * @param {function} [keySelector] Optional function to select which value you want to check as distinct.
 * @param {Observable} [flushes] Optional Observable for flushing the internal HashSet of the operator.
 * @return {Observable} An Observable that emits items from the source Observable with distinct values.
 * @method distinct
 * @owner Observable
 */
function distinct(keySelector, flushes) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_distinct__["a" /* distinct */])(keySelector, flushes)(this);
}
//# sourceMappingURL=distinct.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/distinctUntilKeyChanged.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = distinctUntilKeyChanged;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_distinctUntilKeyChanged__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/distinctUntilKeyChanged.js");
/** PURE_IMPORTS_START .._operators_distinctUntilKeyChanged PURE_IMPORTS_END */

/* tslint:enable:max-line-length */
/**
 * Returns an Observable that emits all items emitted by the source Observable that are distinct by comparison from the previous item,
 * using a property accessed by using the key provided to check if the two items are distinct.
 *
 * If a comparator function is provided, then it will be called for each item to test for whether or not that value should be emitted.
 *
 * If a comparator function is not provided, an equality check is used by default.
 *
 * @example <caption>An example comparing the name of persons</caption>
 *
 *  interface Person {
 *     age: number,
 *     name: string
 *  }
 *
 * Observable.of<Person>(
 *     { age: 4, name: 'Foo'},
 *     { age: 7, name: 'Bar'},
 *     { age: 5, name: 'Foo'},
 *     { age: 6, name: 'Foo'})
 *     .distinctUntilKeyChanged('name')
 *     .subscribe(x => console.log(x));
 *
 * // displays:
 * // { age: 4, name: 'Foo' }
 * // { age: 7, name: 'Bar' }
 * // { age: 5, name: 'Foo' }
 *
 * @example <caption>An example comparing the first letters of the name</caption>
 *
 * interface Person {
 *     age: number,
 *     name: string
 *  }
 *
 * Observable.of<Person>(
 *     { age: 4, name: 'Foo1'},
 *     { age: 7, name: 'Bar'},
 *     { age: 5, name: 'Foo2'},
 *     { age: 6, name: 'Foo3'})
 *     .distinctUntilKeyChanged('name', (x: string, y: string) => x.substring(0, 3) === y.substring(0, 3))
 *     .subscribe(x => console.log(x));
 *
 * // displays:
 * // { age: 4, name: 'Foo1' }
 * // { age: 7, name: 'Bar' }
 * // { age: 5, name: 'Foo2' }
 *
 * @see {@link distinct}
 * @see {@link distinctUntilChanged}
 *
 * @param {string} key String key for object property lookup on each item.
 * @param {function} [compare] Optional comparison function called to test if an item is distinct from the previous item in the source.
 * @return {Observable} An Observable that emits items from the source Observable with distinct values based on the key specified.
 * @method distinctUntilKeyChanged
 * @owner Observable
 */
function distinctUntilKeyChanged(key, compare) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_distinctUntilKeyChanged__["a" /* distinctUntilKeyChanged */])(key, compare)(this);
}
//# sourceMappingURL=distinctUntilKeyChanged.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/do.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _do;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_tap__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/tap.js");
/** PURE_IMPORTS_START .._operators_tap PURE_IMPORTS_END */

/* tslint:enable:max-line-length */
/**
 * Perform a side effect for every emission on the source Observable, but return
 * an Observable that is identical to the source.
 *
 * <span class="informal">Intercepts each emission on the source and runs a
 * function, but returns an output which is identical to the source as long as errors don't occur.</span>
 *
 * <img src="./img/do.png" width="100%">
 *
 * Returns a mirrored Observable of the source Observable, but modified so that
 * the provided Observer is called to perform a side effect for every value,
 * error, and completion emitted by the source. Any errors that are thrown in
 * the aforementioned Observer or handlers are safely sent down the error path
 * of the output Observable.
 *
 * This operator is useful for debugging your Observables for the correct values
 * or performing other side effects.
 *
 * Note: this is different to a `subscribe` on the Observable. If the Observable
 * returned by `do` is not subscribed, the side effects specified by the
 * Observer will never happen. `do` therefore simply spies on existing
 * execution, it does not trigger an execution to happen like `subscribe` does.
 *
 * @example <caption>Map every click to the clientX position of that click, while also logging the click event</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var positions = clicks
 *   .do(ev => console.log(ev))
 *   .map(ev => ev.clientX);
 * positions.subscribe(x => console.log(x));
 *
 * @see {@link map}
 * @see {@link subscribe}
 *
 * @param {Observer|function} [nextOrObserver] A normal Observer object or a
 * callback for `next`.
 * @param {function} [error] Callback for errors in the source.
 * @param {function} [complete] Callback for the completion of the source.
 * @return {Observable} An Observable identical to the source, but runs the
 * specified Observer or callback(s) for each item.
 * @method do
 * @name do
 * @owner Observable
 */
function _do(nextOrObserver, error, complete) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_tap__["a" /* tap */])(nextOrObserver, error, complete)(this);
}
//# sourceMappingURL=do.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/elementAt.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = elementAt;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_elementAt__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/elementAt.js");
/** PURE_IMPORTS_START .._operators_elementAt PURE_IMPORTS_END */

/**
 * Emits the single value at the specified `index` in a sequence of emissions
 * from the source Observable.
 *
 * <span class="informal">Emits only the i-th value, then completes.</span>
 *
 * <img src="./img/elementAt.png" width="100%">
 *
 * `elementAt` returns an Observable that emits the item at the specified
 * `index` in the source Observable, or a default value if that `index` is out
 * of range and the `default` argument is provided. If the `default` argument is
 * not given and the `index` is out of range, the output Observable will emit an
 * `ArgumentOutOfRangeError` error.
 *
 * @example <caption>Emit only the third click event</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.elementAt(2);
 * result.subscribe(x => console.log(x));
 *
 * // Results in:
 * // click 1 = nothing
 * // click 2 = nothing
 * // click 3 = MouseEvent object logged to console
 *
 * @see {@link first}
 * @see {@link last}
 * @see {@link skip}
 * @see {@link single}
 * @see {@link take}
 *
 * @throws {ArgumentOutOfRangeError} When using `elementAt(i)`, it delivers an
 * ArgumentOutOrRangeError to the Observer's `error` callback if `i < 0` or the
 * Observable has completed before emitting the i-th `next` notification.
 *
 * @param {number} index Is the number `i` for the i-th source emission that has
 * happened since the subscription, starting from the number `0`.
 * @param {T} [defaultValue] The default value returned for missing indices.
 * @return {Observable} An Observable that emits a single item, if it is found.
 * Otherwise, will emit the default value if given. If not, then emits an error.
 * @method elementAt
 * @owner Observable
 */
function elementAt(index, defaultValue) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_elementAt__["a" /* elementAt */])(index, defaultValue)(this);
}
//# sourceMappingURL=elementAt.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/exhaust.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = exhaust;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_exhaust__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/exhaust.js");
/** PURE_IMPORTS_START .._operators_exhaust PURE_IMPORTS_END */

/**
 * Converts a higher-order Observable into a first-order Observable by dropping
 * inner Observables while the previous inner Observable has not yet completed.
 *
 * <span class="informal">Flattens an Observable-of-Observables by dropping the
 * next inner Observables while the current inner is still executing.</span>
 *
 * <img src="./img/exhaust.png" width="100%">
 *
 * `exhaust` subscribes to an Observable that emits Observables, also known as a
 * higher-order Observable. Each time it observes one of these emitted inner
 * Observables, the output Observable begins emitting the items emitted by that
 * inner Observable. So far, it behaves like {@link mergeAll}. However,
 * `exhaust` ignores every new inner Observable if the previous Observable has
 * not yet completed. Once that one completes, it will accept and flatten the
 * next inner Observable and repeat this process.
 *
 * @example <caption>Run a finite timer for each click, only if there is no currently active timer</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var higherOrder = clicks.map((ev) => Rx.Observable.interval(1000).take(5));
 * var result = higherOrder.exhaust();
 * result.subscribe(x => console.log(x));
 *
 * @see {@link combineAll}
 * @see {@link concatAll}
 * @see {@link switch}
 * @see {@link mergeAll}
 * @see {@link exhaustMap}
 * @see {@link zipAll}
 *
 * @return {Observable} An Observable that takes a source of Observables and propagates the first observable
 * exclusively until it completes before subscribing to the next.
 * @method exhaust
 * @owner Observable
 */
function exhaust() {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_exhaust__["a" /* exhaust */])()(this);
}
//# sourceMappingURL=exhaust.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/exhaustMap.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = exhaustMap;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_exhaustMap__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/exhaustMap.js");
/** PURE_IMPORTS_START .._operators_exhaustMap PURE_IMPORTS_END */

/* tslint:enable:max-line-length */
/**
 * Projects each source value to an Observable which is merged in the output
 * Observable only if the previous projected Observable has completed.
 *
 * <span class="informal">Maps each value to an Observable, then flattens all of
 * these inner Observables using {@link exhaust}.</span>
 *
 * <img src="./img/exhaustMap.png" width="100%">
 *
 * Returns an Observable that emits items based on applying a function that you
 * supply to each item emitted by the source Observable, where that function
 * returns an (so-called "inner") Observable. When it projects a source value to
 * an Observable, the output Observable begins emitting the items emitted by
 * that projected Observable. However, `exhaustMap` ignores every new projected
 * Observable if the previous projected Observable has not yet completed. Once
 * that one completes, it will accept and flatten the next projected Observable
 * and repeat this process.
 *
 * @example <caption>Run a finite timer for each click, only if there is no currently active timer</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.exhaustMap((ev) => Rx.Observable.interval(1000).take(5));
 * result.subscribe(x => console.log(x));
 *
 * @see {@link concatMap}
 * @see {@link exhaust}
 * @see {@link mergeMap}
 * @see {@link switchMap}
 *
 * @param {function(value: T, ?index: number): ObservableInput} project A function
 * that, when applied to an item emitted by the source Observable, returns an
 * Observable.
 * @param {function(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number): any} [resultSelector]
 * A function to produce the value on the output Observable based on the values
 * and the indices of the source (outer) emission and the inner Observable
 * emission. The arguments passed to this function are:
 * - `outerValue`: the value that came from the source
 * - `innerValue`: the value that came from the projected Observable
 * - `outerIndex`: the "index" of the value that came from the source
 * - `innerIndex`: the "index" of the value from the projected Observable
 * @return {Observable} An Observable containing projected Observables
 * of each item of the source, ignoring projected Observables that start before
 * their preceding Observable has completed.
 * @method exhaustMap
 * @owner Observable
 */
function exhaustMap(project, resultSelector) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_exhaustMap__["a" /* exhaustMap */])(project, resultSelector)(this);
}
//# sourceMappingURL=exhaustMap.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/expand.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = expand;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_expand__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/expand.js");
/** PURE_IMPORTS_START .._operators_expand PURE_IMPORTS_END */

/* tslint:enable:max-line-length */
/**
 * Recursively projects each source value to an Observable which is merged in
 * the output Observable.
 *
 * <span class="informal">It's similar to {@link mergeMap}, but applies the
 * projection function to every source value as well as every output value.
 * It's recursive.</span>
 *
 * <img src="./img/expand.png" width="100%">
 *
 * Returns an Observable that emits items based on applying a function that you
 * supply to each item emitted by the source Observable, where that function
 * returns an Observable, and then merging those resulting Observables and
 * emitting the results of this merger. *Expand* will re-emit on the output
 * Observable every source value. Then, each output value is given to the
 * `project` function which returns an inner Observable to be merged on the
 * output Observable. Those output values resulting from the projection are also
 * given to the `project` function to produce new output values. This is how
 * *expand* behaves recursively.
 *
 * @example <caption>Start emitting the powers of two on every click, at most 10 of them</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var powersOfTwo = clicks
 *   .mapTo(1)
 *   .expand(x => Rx.Observable.of(2 * x).delay(1000))
 *   .take(10);
 * powersOfTwo.subscribe(x => console.log(x));
 *
 * @see {@link mergeMap}
 * @see {@link mergeScan}
 *
 * @param {function(value: T, index: number) => Observable} project A function
 * that, when applied to an item emitted by the source or the output Observable,
 * returns an Observable.
 * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of input
 * Observables being subscribed to concurrently.
 * @param {Scheduler} [scheduler=null] The IScheduler to use for subscribing to
 * each projected inner Observable.
 * @return {Observable} An Observable that emits the source values and also
 * result of applying the projection function to each value emitted on the
 * output Observable and and merging the results of the Observables obtained
 * from this transformation.
 * @method expand
 * @owner Observable
 */
function expand(project, concurrent, scheduler) {
    if (concurrent === void 0) {
        concurrent = Number.POSITIVE_INFINITY;
    }
    if (scheduler === void 0) {
        scheduler = undefined;
    }
    concurrent = (concurrent || 0) < 1 ? Number.POSITIVE_INFINITY : concurrent;
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_expand__["a" /* expand */])(project, concurrent, scheduler)(this);
}
//# sourceMappingURL=expand.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/finally.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _finally;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_finalize__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/finalize.js");
/** PURE_IMPORTS_START .._operators_finalize PURE_IMPORTS_END */

/**
 * Returns an Observable that mirrors the source Observable, but will call a specified function when
 * the source terminates on complete or error.
 * @param {function} callback Function to be called when source terminates.
 * @return {Observable} An Observable that mirrors the source, but will call the specified function on termination.
 * @method finally
 * @owner Observable
 */
function _finally(callback) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_finalize__["a" /* finalize */])(callback)(this);
}
//# sourceMappingURL=finally.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/find.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = find;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_find__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/find.js");
/** PURE_IMPORTS_START .._operators_find PURE_IMPORTS_END */

/* tslint:enable:max-line-length */
/**
 * Emits only the first value emitted by the source Observable that meets some
 * condition.
 *
 * <span class="informal">Finds the first value that passes some test and emits
 * that.</span>
 *
 * <img src="./img/find.png" width="100%">
 *
 * `find` searches for the first item in the source Observable that matches the
 * specified condition embodied by the `predicate`, and returns the first
 * occurrence in the source. Unlike {@link first}, the `predicate` is required
 * in `find`, and does not emit an error if a valid value is not found.
 *
 * @example <caption>Find and emit the first click that happens on a DIV element</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.find(ev => ev.target.tagName === 'DIV');
 * result.subscribe(x => console.log(x));
 *
 * @see {@link filter}
 * @see {@link first}
 * @see {@link findIndex}
 * @see {@link take}
 *
 * @param {function(value: T, index: number, source: Observable<T>): boolean} predicate
 * A function called with each item to test for condition matching.
 * @param {any} [thisArg] An optional argument to determine the value of `this`
 * in the `predicate` function.
 * @return {Observable<T>} An Observable of the first item that matches the
 * condition.
 * @method find
 * @owner Observable
 */
function find(predicate, thisArg) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_find__["b" /* find */])(predicate, thisArg)(this);
}
//# sourceMappingURL=find.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/findIndex.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = findIndex;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_findIndex__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/findIndex.js");
/** PURE_IMPORTS_START .._operators_findIndex PURE_IMPORTS_END */

/**
 * Emits only the index of the first value emitted by the source Observable that
 * meets some condition.
 *
 * <span class="informal">It's like {@link find}, but emits the index of the
 * found value, not the value itself.</span>
 *
 * <img src="./img/findIndex.png" width="100%">
 *
 * `findIndex` searches for the first item in the source Observable that matches
 * the specified condition embodied by the `predicate`, and returns the
 * (zero-based) index of the first occurrence in the source. Unlike
 * {@link first}, the `predicate` is required in `findIndex`, and does not emit
 * an error if a valid value is not found.
 *
 * @example <caption>Emit the index of first click that happens on a DIV element</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.findIndex(ev => ev.target.tagName === 'DIV');
 * result.subscribe(x => console.log(x));
 *
 * @see {@link filter}
 * @see {@link find}
 * @see {@link first}
 * @see {@link take}
 *
 * @param {function(value: T, index: number, source: Observable<T>): boolean} predicate
 * A function called with each item to test for condition matching.
 * @param {any} [thisArg] An optional argument to determine the value of `this`
 * in the `predicate` function.
 * @return {Observable} An Observable of the index of the first item that
 * matches the condition.
 * @method find
 * @owner Observable
 */
function findIndex(predicate, thisArg) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_findIndex__["a" /* findIndex */])(predicate, thisArg)(this);
}
//# sourceMappingURL=findIndex.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/groupBy.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = groupBy;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_groupBy__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/groupBy.js");
/* unused harmony reexport GroupedObservable */
/** PURE_IMPORTS_START .._operators_groupBy PURE_IMPORTS_END */


/* tslint:enable:max-line-length */
/**
 * Groups the items emitted by an Observable according to a specified criterion,
 * and emits these grouped items as `GroupedObservables`, one
 * {@link GroupedObservable} per group.
 *
 * <img src="./img/groupBy.png" width="100%">
 *
 * @example <caption>Group objects by id and return as array</caption>
 * Observable.of<Obj>({id: 1, name: 'aze1'},
 *                    {id: 2, name: 'sf2'},
 *                    {id: 2, name: 'dg2'},
 *                    {id: 1, name: 'erg1'},
 *                    {id: 1, name: 'df1'},
 *                    {id: 2, name: 'sfqfb2'},
 *                    {id: 3, name: 'qfs3'},
 *                    {id: 2, name: 'qsgqsfg2'}
 *     )
 *     .groupBy(p => p.id)
 *     .flatMap( (group$) => group$.reduce((acc, cur) => [...acc, cur], []))
 *     .subscribe(p => console.log(p));
 *
 * // displays:
 * // [ { id: 1, name: 'aze1' },
 * //   { id: 1, name: 'erg1' },
 * //   { id: 1, name: 'df1' } ]
 * //
 * // [ { id: 2, name: 'sf2' },
 * //   { id: 2, name: 'dg2' },
 * //   { id: 2, name: 'sfqfb2' },
 * //   { id: 2, name: 'qsgqsfg2' } ]
 * //
 * // [ { id: 3, name: 'qfs3' } ]
 *
 * @example <caption>Pivot data on the id field</caption>
 * Observable.of<Obj>({id: 1, name: 'aze1'},
 *                    {id: 2, name: 'sf2'},
 *                    {id: 2, name: 'dg2'},
 *                    {id: 1, name: 'erg1'},
 *                    {id: 1, name: 'df1'},
 *                    {id: 2, name: 'sfqfb2'},
 *                    {id: 3, name: 'qfs1'},
 *                    {id: 2, name: 'qsgqsfg2'}
 *                   )
 *     .groupBy(p => p.id, p => p.name)
 *     .flatMap( (group$) => group$.reduce((acc, cur) => [...acc, cur], ["" + group$.key]))
 *     .map(arr => ({'id': parseInt(arr[0]), 'values': arr.slice(1)}))
 *     .subscribe(p => console.log(p));
 *
 * // displays:
 * // { id: 1, values: [ 'aze1', 'erg1', 'df1' ] }
 * // { id: 2, values: [ 'sf2', 'dg2', 'sfqfb2', 'qsgqsfg2' ] }
 * // { id: 3, values: [ 'qfs1' ] }
 *
 * @param {function(value: T): K} keySelector A function that extracts the key
 * for each item.
 * @param {function(value: T): R} [elementSelector] A function that extracts the
 * return element for each item.
 * @param {function(grouped: GroupedObservable<K,R>): Observable<any>} [durationSelector]
 * A function that returns an Observable to determine how long each group should
 * exist.
 * @return {Observable<GroupedObservable<K,R>>} An Observable that emits
 * GroupedObservables, each of which corresponds to a unique key value and each
 * of which emits those items from the source Observable that share that key
 * value.
 * @method groupBy
 * @owner Observable
 */
function groupBy(keySelector, elementSelector, durationSelector, subjectSelector) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_groupBy__["a" /* groupBy */])(keySelector, elementSelector, durationSelector, subjectSelector)(this);
}
//# sourceMappingURL=groupBy.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/ignoreElements.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = ignoreElements;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_ignoreElements__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/ignoreElements.js");
/** PURE_IMPORTS_START .._operators_ignoreElements PURE_IMPORTS_END */

/**
 * Ignores all items emitted by the source Observable and only passes calls of `complete` or `error`.
 *
 * <img src="./img/ignoreElements.png" width="100%">
 *
 * @return {Observable} An empty Observable that only calls `complete`
 * or `error`, based on which one is called by the source Observable.
 * @method ignoreElements
 * @owner Observable
 */
function ignoreElements() {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_ignoreElements__["a" /* ignoreElements */])()(this);
}
;
//# sourceMappingURL=ignoreElements.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/isEmpty.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isEmpty;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_isEmpty__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/isEmpty.js");
/** PURE_IMPORTS_START .._operators_isEmpty PURE_IMPORTS_END */

/**
 * If the source Observable is empty it returns an Observable that emits true, otherwise it emits false.
 *
 * <img src="./img/isEmpty.png" width="100%">
 *
 * @return {Observable} An Observable that emits a Boolean.
 * @method isEmpty
 * @owner Observable
 */
function isEmpty() {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_isEmpty__["a" /* isEmpty */])()(this);
}
//# sourceMappingURL=isEmpty.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/let.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = letProto;
/**
 * @param func
 * @return {Observable<R>}
 * @method let
 * @owner Observable
 */
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function letProto(func) {
    return func(this);
}
//# sourceMappingURL=let.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/mapTo.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = mapTo;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_mapTo__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/mapTo.js");
/** PURE_IMPORTS_START .._operators_mapTo PURE_IMPORTS_END */

/**
 * Emits the given constant value on the output Observable every time the source
 * Observable emits a value.
 *
 * <span class="informal">Like {@link map}, but it maps every source value to
 * the same output value every time.</span>
 *
 * <img src="./img/mapTo.png" width="100%">
 *
 * Takes a constant `value` as argument, and emits that whenever the source
 * Observable emits a value. In other words, ignores the actual source value,
 * and simply uses the emission moment to know when to emit the given `value`.
 *
 * @example <caption>Map every click to the string 'Hi'</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var greetings = clicks.mapTo('Hi');
 * greetings.subscribe(x => console.log(x));
 *
 * @see {@link map}
 *
 * @param {any} value The value to map each source value to.
 * @return {Observable} An Observable that emits the given `value` every time
 * the source Observable emits something.
 * @method mapTo
 * @owner Observable
 */
function mapTo(value) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_mapTo__["a" /* mapTo */])(value)(this);
}
//# sourceMappingURL=mapTo.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/materialize.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = materialize;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_materialize__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/materialize.js");
/** PURE_IMPORTS_START .._operators_materialize PURE_IMPORTS_END */

/**
 * Represents all of the notifications from the source Observable as `next`
 * emissions marked with their original types within {@link Notification}
 * objects.
 *
 * <span class="informal">Wraps `next`, `error` and `complete` emissions in
 * {@link Notification} objects, emitted as `next` on the output Observable.
 * </span>
 *
 * <img src="./img/materialize.png" width="100%">
 *
 * `materialize` returns an Observable that emits a `next` notification for each
 * `next`, `error`, or `complete` emission of the source Observable. When the
 * source Observable emits `complete`, the output Observable will emit `next` as
 * a Notification of type "complete", and then it will emit `complete` as well.
 * When the source Observable emits `error`, the output will emit `next` as a
 * Notification of type "error", and then `complete`.
 *
 * This operator is useful for producing metadata of the source Observable, to
 * be consumed as `next` emissions. Use it in conjunction with
 * {@link dematerialize}.
 *
 * @example <caption>Convert a faulty Observable to an Observable of Notifications</caption>
 * var letters = Rx.Observable.of('a', 'b', 13, 'd');
 * var upperCase = letters.map(x => x.toUpperCase());
 * var materialized = upperCase.materialize();
 * materialized.subscribe(x => console.log(x));
 *
 * // Results in the following:
 * // - Notification {kind: "N", value: "A", error: undefined, hasValue: true}
 * // - Notification {kind: "N", value: "B", error: undefined, hasValue: true}
 * // - Notification {kind: "E", value: undefined, error: TypeError:
 * //   x.toUpperCase is not a function at MapSubscriber.letters.map.x
 * //   [as project] (http://1…, hasValue: false}
 *
 * @see {@link Notification}
 * @see {@link dematerialize}
 *
 * @return {Observable<Notification<T>>} An Observable that emits
 * {@link Notification} objects that wrap the original emissions from the source
 * Observable with metadata.
 * @method materialize
 * @owner Observable
 */
function materialize() {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_materialize__["a" /* materialize */])()(this);
}
//# sourceMappingURL=materialize.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/max.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = max;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_max__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/max.js");
/** PURE_IMPORTS_START .._operators_max PURE_IMPORTS_END */

/**
 * The Max operator operates on an Observable that emits numbers (or items that can be compared with a provided function),
 * and when source Observable completes it emits a single item: the item with the largest value.
 *
 * <img src="./img/max.png" width="100%">
 *
 * @example <caption>Get the maximal value of a series of numbers</caption>
 * Rx.Observable.of(5, 4, 7, 2, 8)
 *   .max()
 *   .subscribe(x => console.log(x)); // -> 8
 *
 * @example <caption>Use a comparer function to get the maximal item</caption>
 * interface Person {
 *   age: number,
 *   name: string
 * }
 * Observable.of<Person>({age: 7, name: 'Foo'},
 *                       {age: 5, name: 'Bar'},
 *                       {age: 9, name: 'Beer'})
 *           .max<Person>((a: Person, b: Person) => a.age < b.age ? -1 : 1)
 *           .subscribe((x: Person) => console.log(x.name)); // -> 'Beer'
 * }
 *
 * @see {@link min}
 *
 * @param {Function} [comparer] - Optional comparer function that it will use instead of its default to compare the
 * value of two items.
 * @return {Observable} An Observable that emits item with the largest value.
 * @method max
 * @owner Observable
 */
function max(comparer) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_max__["a" /* max */])(comparer)(this);
}
//# sourceMappingURL=max.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/merge.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = merge;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_merge__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_merge__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/merge.js");
/* unused harmony reexport mergeStatic */
/** PURE_IMPORTS_START .._operators_merge PURE_IMPORTS_END */


/* tslint:enable:max-line-length */
/**
 * Creates an output Observable which concurrently emits all values from every
 * given input Observable.
 *
 * <span class="informal">Flattens multiple Observables together by blending
 * their values into one Observable.</span>
 *
 * <img src="./img/merge.png" width="100%">
 *
 * `merge` subscribes to each given input Observable (either the source or an
 * Observable given as argument), and simply forwards (without doing any
 * transformation) all the values from all the input Observables to the output
 * Observable. The output Observable only completes once all input Observables
 * have completed. Any error delivered by an input Observable will be immediately
 * emitted on the output Observable.
 *
 * @example <caption>Merge together two Observables: 1s interval and clicks</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var timer = Rx.Observable.interval(1000);
 * var clicksOrTimer = clicks.merge(timer);
 * clicksOrTimer.subscribe(x => console.log(x));
 *
 * @example <caption>Merge together 3 Observables, but only 2 run concurrently</caption>
 * var timer1 = Rx.Observable.interval(1000).take(10);
 * var timer2 = Rx.Observable.interval(2000).take(6);
 * var timer3 = Rx.Observable.interval(500).take(10);
 * var concurrent = 2; // the argument
 * var merged = timer1.merge(timer2, timer3, concurrent);
 * merged.subscribe(x => console.log(x));
 *
 * @see {@link mergeAll}
 * @see {@link mergeMap}
 * @see {@link mergeMapTo}
 * @see {@link mergeScan}
 *
 * @param {ObservableInput} other An input Observable to merge with the source
 * Observable. More than one input Observables may be given as argument.
 * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of input
 * Observables being subscribed to concurrently.
 * @param {Scheduler} [scheduler=null] The IScheduler to use for managing
 * concurrency of input Observables.
 * @return {Observable} An Observable that emits items that are the result of
 * every input Observable.
 * @method merge
 * @owner Observable
 */
function merge() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i - 0] = arguments[_i];
    }
    return __WEBPACK_IMPORTED_MODULE_0__operators_merge__["a" /* merge */].apply(void 0, observables)(this);
}
//# sourceMappingURL=merge.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/mergeMapTo.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = mergeMapTo;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_mergeMapTo__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/mergeMapTo.js");
/** PURE_IMPORTS_START .._operators_mergeMapTo PURE_IMPORTS_END */

/* tslint:enable:max-line-length */
/**
 * Projects each source value to the same Observable which is merged multiple
 * times in the output Observable.
 *
 * <span class="informal">It's like {@link mergeMap}, but maps each value always
 * to the same inner Observable.</span>
 *
 * <img src="./img/mergeMapTo.png" width="100%">
 *
 * Maps each source value to the given Observable `innerObservable` regardless
 * of the source value, and then merges those resulting Observables into one
 * single Observable, which is the output Observable.
 *
 * @example <caption>For each click event, start an interval Observable ticking every 1 second</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.mergeMapTo(Rx.Observable.interval(1000));
 * result.subscribe(x => console.log(x));
 *
 * @see {@link concatMapTo}
 * @see {@link merge}
 * @see {@link mergeAll}
 * @see {@link mergeMap}
 * @see {@link mergeScan}
 * @see {@link switchMapTo}
 *
 * @param {ObservableInput} innerObservable An Observable to replace each value from
 * the source Observable.
 * @param {function(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number): any} [resultSelector]
 * A function to produce the value on the output Observable based on the values
 * and the indices of the source (outer) emission and the inner Observable
 * emission. The arguments passed to this function are:
 * - `outerValue`: the value that came from the source
 * - `innerValue`: the value that came from the projected Observable
 * - `outerIndex`: the "index" of the value that came from the source
 * - `innerIndex`: the "index" of the value from the projected Observable
 * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of input
 * Observables being subscribed to concurrently.
 * @return {Observable} An Observable that emits items from the given
 * `innerObservable` (and optionally transformed through `resultSelector`) every
 * time a value is emitted on the source Observable.
 * @method mergeMapTo
 * @owner Observable
 */
function mergeMapTo(innerObservable, resultSelector, concurrent) {
    if (concurrent === void 0) {
        concurrent = Number.POSITIVE_INFINITY;
    }
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_mergeMapTo__["a" /* mergeMapTo */])(innerObservable, resultSelector, concurrent)(this);
}
//# sourceMappingURL=mergeMapTo.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/mergeScan.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = mergeScan;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_mergeScan__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/mergeScan.js");
/** PURE_IMPORTS_START .._operators_mergeScan PURE_IMPORTS_END */

/**
 * Applies an accumulator function over the source Observable where the
 * accumulator function itself returns an Observable, then each intermediate
 * Observable returned is merged into the output Observable.
 *
 * <span class="informal">It's like {@link scan}, but the Observables returned
 * by the accumulator are merged into the outer Observable.</span>
 *
 * @example <caption>Count the number of click events</caption>
 * const click$ = Rx.Observable.fromEvent(document, 'click');
 * const one$ = click$.mapTo(1);
 * const seed = 0;
 * const count$ = one$.mergeScan((acc, one) => Rx.Observable.of(acc + one), seed);
 * count$.subscribe(x => console.log(x));
 *
 * // Results:
 * 1
 * 2
 * 3
 * 4
 * // ...and so on for each click
 *
 * @param {function(acc: R, value: T): Observable<R>} accumulator
 * The accumulator function called on each source value.
 * @param seed The initial accumulation value.
 * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of
 * input Observables being subscribed to concurrently.
 * @return {Observable<R>} An observable of the accumulated values.
 * @method mergeScan
 * @owner Observable
 */
function mergeScan(accumulator, seed, concurrent) {
    if (concurrent === void 0) {
        concurrent = Number.POSITIVE_INFINITY;
    }
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_mergeScan__["a" /* mergeScan */])(accumulator, seed, concurrent)(this);
}
//# sourceMappingURL=mergeScan.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/min.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = min;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_min__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/min.js");
/** PURE_IMPORTS_START .._operators_min PURE_IMPORTS_END */

/**
 * The Min operator operates on an Observable that emits numbers (or items that can be compared with a provided function),
 * and when source Observable completes it emits a single item: the item with the smallest value.
 *
 * <img src="./img/min.png" width="100%">
 *
 * @example <caption>Get the minimal value of a series of numbers</caption>
 * Rx.Observable.of(5, 4, 7, 2, 8)
 *   .min()
 *   .subscribe(x => console.log(x)); // -> 2
 *
 * @example <caption>Use a comparer function to get the minimal item</caption>
 * interface Person {
 *   age: number,
 *   name: string
 * }
 * Observable.of<Person>({age: 7, name: 'Foo'},
 *                       {age: 5, name: 'Bar'},
 *                       {age: 9, name: 'Beer'})
 *           .min<Person>( (a: Person, b: Person) => a.age < b.age ? -1 : 1)
 *           .subscribe((x: Person) => console.log(x.name)); // -> 'Bar'
 * }
 *
 * @see {@link max}
 *
 * @param {Function} [comparer] - Optional comparer function that it will use instead of its default to compare the
 * value of two items.
 * @return {Observable<R>} An Observable that emits item with the smallest value.
 * @method min
 * @owner Observable
 */
function min(comparer) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_min__["a" /* min */])(comparer)(this);
}
//# sourceMappingURL=min.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/multicast.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = multicast;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_multicast__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/multicast.js");
/** PURE_IMPORTS_START .._operators_multicast PURE_IMPORTS_END */

/* tslint:enable:max-line-length */
/**
 * Allows source Observable to be subscribed only once with a Subject of choice,
 * while still sharing its values between multiple subscribers.
 *
 * <span class="informal">Subscribe to Observable once, but send its values to multiple subscribers.</span>
 *
 * <img src="./img/multicast.png" width="100%">
 *
 * `multicast` is an operator that works in two modes.
 *
 * In the first mode you provide a single argument to it, which can be either an initialized Subject or a Subject
 * factory. As a result you will get a special kind of an Observable - a {@link ConnectableObservable}. It can be
 * subscribed multiple times, just as regular Observable, but it won't subscribe to the source Observable at that
 * moment. It will do it only if you call its `connect` method. This means you can essentially control by hand, when
 * source Observable will be actually subscribed. What is more, ConnectableObservable will share this one subscription
 * between all of its subscribers. This means that, for example, `ajax` Observable will only send a request once,
 * even though usually it would send a request per every subscriber. Since it sends a request at the moment of
 * subscription, here request would be sent when the `connect` method of a ConnectableObservable is called.
 *
 * The most common pattern of using ConnectableObservable is calling `connect` when the first consumer subscribes,
 * keeping the subscription alive while several consumers come and go and finally unsubscribing from the source
 * Observable, when the last consumer unsubscribes. To not implement that logic over and over again,
 * ConnectableObservable has a special operator, `refCount`. When called, it returns an Observable, which will count
 * the number of consumers subscribed to it and keep ConnectableObservable connected as long as there is at least
 * one consumer. So if you don't actually need to decide yourself when to connect and disconnect a
 * ConnectableObservable, use `refCount`.
 *
 * The second mode is invoked by calling `multicast` with an additional, second argument - selector function.
 * This function accepts an Observable - which basically mirrors the source Observable - and returns Observable
 * as well, which should be the input stream modified by any operators you want. Note that in this
 * mode you cannot provide initialized Subject as a first argument - it has to be a Subject factory. If
 * you provide selector function, `multicast` returns just a regular Observable, instead of ConnectableObservable.
 * Thus, as usual, each subscription to this stream triggers subscription to the source Observable. However,
 * if inside the selector function you subscribe to the input Observable multiple times, actual source stream
 * will be subscribed only once. So if you have a chain of operators that use some Observable many times,
 * but you want to subscribe to that Observable only once, this is the mode you would use.
 *
 * Subject provided as a first parameter of `multicast` is used as a proxy for the single subscription to the
 * source Observable. It means that all values from the source stream go through that Subject. Thus, if a Subject
 * has some special properties, Observable returned by `multicast` will have them as well. If you want to use
 * `multicast` with a Subject that is one of the ones included in RxJS by default - {@link Subject},
 * {@link AsyncSubject}, {@link BehaviorSubject}, or {@link ReplaySubject} - simply use {@link publish},
 * {@link publishLast}, {@link publishBehavior} or {@link publishReplay} respectively. These are actually
 * just wrappers around `multicast`, with a specific Subject hardcoded inside.
 *
 * Also, if you use {@link publish} or {@link publishReplay} with a ConnectableObservables `refCount` operator,
 * you can simply use {@link share} and {@link shareReplay} respectively, which chain these two.
 *
 * @example <caption>Use ConnectableObservable</caption>
 * const seconds = Rx.Observable.interval(1000);
 * const connectableSeconds = seconds.multicast(new Subject());
 *
 * connectableSeconds.subscribe(value => console.log('first: ' + value));
 * connectableSeconds.subscribe(value => console.log('second: ' + value));
 *
 * // At this point still nothing happens, even though we subscribed twice.
 *
 * connectableSeconds.connect();
 *
 * // From now on `seconds` are being logged to the console,
 * // twice per every second. `seconds` Observable was however only subscribed once,
 * // so under the hood Observable.interval had only one clock started.
 *
 * @example <caption>Use selector</caption>
 * const seconds = Rx.Observable.interval(1000);
 *
 * seconds
 *     .multicast(
 *         () => new Subject(),
 *         seconds => seconds.zip(seconds) // Usually zip would subscribe to `seconds` twice.
 *                                         // Because we are inside selector, `seconds` is subscribed once,
 *     )                                   // thus starting only one clock used internally by Observable.interval.
 *     .subscribe();
 *
 * @see {@link publish}
 * @see {@link publishLast}
 * @see {@link publishBehavior}
 * @see {@link publishReplay}
 * @see {@link share}
 * @see {@link shareReplay}
 *
 * @param {Function|Subject} subjectOrSubjectFactory - Factory function to create an intermediate Subject through
 * which the source sequence's elements will be multicast to the selector function input Observable or
 * ConnectableObservable returned by the operator.
 * @param {Function} [selector] - Optional selector function that can use the input stream
 * as many times as needed, without causing multiple subscriptions to the source stream.
 * Subscribers to the input source will receive all notifications of the source from the
 * time of the subscription forward.
 * @return {Observable<T>|ConnectableObservable<T>} An Observable that emits the results of invoking the selector
 * on the source stream or a special {@link ConnectableObservable}, if selector was not provided.
 *
 * @method multicast
 * @owner Observable
 */
function multicast(subjectOrSubjectFactory, selector) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_multicast__["a" /* multicast */])(subjectOrSubjectFactory, selector)(this);
}
//# sourceMappingURL=multicast.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/onErrorResumeNext.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = onErrorResumeNext;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_onErrorResumeNext__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/onErrorResumeNext.js");
/** PURE_IMPORTS_START .._operators_onErrorResumeNext PURE_IMPORTS_END */

/* tslint:enable:max-line-length */
/**
 * When any of the provided Observable emits an complete or error notification, it immediately subscribes to the next one
 * that was passed.
 *
 * <span class="informal">Execute series of Observables no matter what, even if it means swallowing errors.</span>
 *
 * <img src="./img/onErrorResumeNext.png" width="100%">
 *
 * `onErrorResumeNext` is an operator that accepts a series of Observables, provided either directly as
 * arguments or as an array. If no single Observable is provided, returned Observable will simply behave the same
 * as the source.
 *
 * `onErrorResumeNext` returns an Observable that starts by subscribing and re-emitting values from the source Observable.
 * When its stream of values ends - no matter if Observable completed or emitted an error - `onErrorResumeNext`
 * will subscribe to the first Observable that was passed as an argument to the method. It will start re-emitting
 * its values as well and - again - when that stream ends, `onErrorResumeNext` will proceed to subscribing yet another
 * Observable in provided series, no matter if previous Observable completed or ended with an error. This will
 * be happening until there is no more Observables left in the series, at which point returned Observable will
 * complete - even if the last subscribed stream ended with an error.
 *
 * `onErrorResumeNext` can be therefore thought of as version of {@link concat} operator, which is more permissive
 * when it comes to the errors emitted by its input Observables. While `concat` subscribes to the next Observable
 * in series only if previous one successfully completed, `onErrorResumeNext` subscribes even if it ended with
 * an error.
 *
 * Note that you do not get any access to errors emitted by the Observables. In particular do not
 * expect these errors to appear in error callback passed to {@link subscribe}. If you want to take
 * specific actions based on what error was emitted by an Observable, you should try out {@link catch} instead.
 *
 *
 * @example <caption>Subscribe to the next Observable after map fails</caption>
 * Rx.Observable.of(1, 2, 3, 0)
 *   .map(x => {
 *       if (x === 0) { throw Error(); }
         return 10 / x;
 *   })
 *   .onErrorResumeNext(Rx.Observable.of(1, 2, 3))
 *   .subscribe(
 *     val => console.log(val),
 *     err => console.log(err),          // Will never be called.
 *     () => console.log('that\'s it!')
 *   );
 *
 * // Logs:
 * // 10
 * // 5
 * // 3.3333333333333335
 * // 1
 * // 2
 * // 3
 * // "that's it!"
 *
 * @see {@link concat}
 * @see {@link catch}
 *
 * @param {...ObservableInput} observables Observables passed either directly or as an array.
 * @return {Observable} An Observable that emits values from source Observable, but - if it errors - subscribes
 * to the next passed Observable and so on, until it completes or runs out of Observables.
 * @method onErrorResumeNext
 * @owner Observable
 */
function onErrorResumeNext() {
    var nextSources = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nextSources[_i - 0] = arguments[_i];
    }
    return __WEBPACK_IMPORTED_MODULE_0__operators_onErrorResumeNext__["a" /* onErrorResumeNext */].apply(void 0, nextSources)(this);
}
//# sourceMappingURL=onErrorResumeNext.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/pairwise.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = pairwise;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_pairwise__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/pairwise.js");
/** PURE_IMPORTS_START .._operators_pairwise PURE_IMPORTS_END */

/**
 * Groups pairs of consecutive emissions together and emits them as an array of
 * two values.
 *
 * <span class="informal">Puts the current value and previous value together as
 * an array, and emits that.</span>
 *
 * <img src="./img/pairwise.png" width="100%">
 *
 * The Nth emission from the source Observable will cause the output Observable
 * to emit an array [(N-1)th, Nth] of the previous and the current value, as a
 * pair. For this reason, `pairwise` emits on the second and subsequent
 * emissions from the source Observable, but not on the first emission, because
 * there is no previous value in that case.
 *
 * @example <caption>On every click (starting from the second), emit the relative distance to the previous click</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var pairs = clicks.pairwise();
 * var distance = pairs.map(pair => {
 *   var x0 = pair[0].clientX;
 *   var y0 = pair[0].clientY;
 *   var x1 = pair[1].clientX;
 *   var y1 = pair[1].clientY;
 *   return Math.sqrt(Math.pow(x0 - x1, 2) + Math.pow(y0 - y1, 2));
 * });
 * distance.subscribe(x => console.log(x));
 *
 * @see {@link buffer}
 * @see {@link bufferCount}
 *
 * @return {Observable<Array<T>>} An Observable of pairs (as arrays) of
 * consecutive values from the source Observable.
 * @method pairwise
 * @owner Observable
 */
function pairwise() {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_pairwise__["a" /* pairwise */])()(this);
}
//# sourceMappingURL=pairwise.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/partition.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = partition;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_partition__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/partition.js");
/** PURE_IMPORTS_START .._operators_partition PURE_IMPORTS_END */

/**
 * Splits the source Observable into two, one with values that satisfy a
 * predicate, and another with values that don't satisfy the predicate.
 *
 * <span class="informal">It's like {@link filter}, but returns two Observables:
 * one like the output of {@link filter}, and the other with values that did not
 * pass the condition.</span>
 *
 * <img src="./img/partition.png" width="100%">
 *
 * `partition` outputs an array with two Observables that partition the values
 * from the source Observable through the given `predicate` function. The first
 * Observable in that array emits source values for which the predicate argument
 * returns true. The second Observable emits source values for which the
 * predicate returns false. The first behaves like {@link filter} and the second
 * behaves like {@link filter} with the predicate negated.
 *
 * @example <caption>Partition click events into those on DIV elements and those elsewhere</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var parts = clicks.partition(ev => ev.target.tagName === 'DIV');
 * var clicksOnDivs = parts[0];
 * var clicksElsewhere = parts[1];
 * clicksOnDivs.subscribe(x => console.log('DIV clicked: ', x));
 * clicksElsewhere.subscribe(x => console.log('Other clicked: ', x));
 *
 * @see {@link filter}
 *
 * @param {function(value: T, index: number): boolean} predicate A function that
 * evaluates each value emitted by the source Observable. If it returns `true`,
 * the value is emitted on the first Observable in the returned array, if
 * `false` the value is emitted on the second Observable in the array. The
 * `index` parameter is the number `i` for the i-th source emission that has
 * happened since the subscription, starting from the number `0`.
 * @param {any} [thisArg] An optional argument to determine the value of `this`
 * in the `predicate` function.
 * @return {[Observable<T>, Observable<T>]} An array with two Observables: one
 * with values that passed the predicate, and another with values that did not
 * pass the predicate.
 * @method partition
 * @owner Observable
 */
function partition(predicate, thisArg) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_partition__["a" /* partition */])(predicate, thisArg)(this);
}
//# sourceMappingURL=partition.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/publish.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = publish;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_publish__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/publish.js");
/** PURE_IMPORTS_START .._operators_publish PURE_IMPORTS_END */

/* tslint:enable:max-line-length */
/**
 * Returns a ConnectableObservable, which is a variety of Observable that waits until its connect method is called
 * before it begins emitting items to those Observers that have subscribed to it.
 *
 * <img src="./img/publish.png" width="100%">
 *
 * @param {Function} [selector] - Optional selector function which can use the multicasted source sequence as many times
 * as needed, without causing multiple subscriptions to the source sequence.
 * Subscribers to the given source will receive all notifications of the source from the time of the subscription on.
 * @return A ConnectableObservable that upon connection causes the source Observable to emit items to its Observers.
 * @method publish
 * @owner Observable
 */
function publish(selector) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_publish__["a" /* publish */])(selector)(this);
}
//# sourceMappingURL=publish.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/publishBehavior.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = publishBehavior;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_publishBehavior__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/publishBehavior.js");
/** PURE_IMPORTS_START .._operators_publishBehavior PURE_IMPORTS_END */

/**
 * @param value
 * @return {ConnectableObservable<T>}
 * @method publishBehavior
 * @owner Observable
 */
function publishBehavior(value) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_publishBehavior__["a" /* publishBehavior */])(value)(this);
}
//# sourceMappingURL=publishBehavior.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/publishLast.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = publishLast;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_publishLast__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/publishLast.js");
/** PURE_IMPORTS_START .._operators_publishLast PURE_IMPORTS_END */

/**
 * @return {ConnectableObservable<T>}
 * @method publishLast
 * @owner Observable
 */
function publishLast() {
    //TODO(benlesh): correct type-flow through here.
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_publishLast__["a" /* publishLast */])()(this);
}
//# sourceMappingURL=publishLast.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/publishReplay.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = publishReplay;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_publishReplay__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/publishReplay.js");
/** PURE_IMPORTS_START .._operators_publishReplay PURE_IMPORTS_END */

/* tslint:enable:max-line-length */
/**
 * @param bufferSize
 * @param windowTime
 * @param selectorOrScheduler
 * @param scheduler
 * @return {Observable<T> | ConnectableObservable<T>}
 * @method publishReplay
 * @owner Observable
 */
function publishReplay(bufferSize, windowTime, selectorOrScheduler, scheduler) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_publishReplay__["a" /* publishReplay */])(bufferSize, windowTime, selectorOrScheduler, scheduler)(this);
}
//# sourceMappingURL=publishReplay.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/race.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = race;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_race__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/race.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_race__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/race.js");
/* unused harmony reexport raceStatic */
/** PURE_IMPORTS_START .._operators_race PURE_IMPORTS_END */

// NOTE: to support backwards compatability with 5.4.* and lower

/* tslint:enable:max-line-length */
/**
 * Returns an Observable that mirrors the first source Observable to emit an item
 * from the combination of this Observable and supplied Observables.
 * @param {...Observables} ...observables Sources used to race for which Observable emits first.
 * @return {Observable} An Observable that mirrors the output of the first Observable to emit an item.
 * @method race
 * @owner Observable
 */
function race() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i - 0] = arguments[_i];
    }
    return __WEBPACK_IMPORTED_MODULE_0__operators_race__["a" /* race */].apply(void 0, observables)(this);
}
//# sourceMappingURL=race.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/repeat.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = repeat;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_repeat__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/repeat.js");
/** PURE_IMPORTS_START .._operators_repeat PURE_IMPORTS_END */

/**
 * Returns an Observable that repeats the stream of items emitted by the source Observable at most count times.
 *
 * <img src="./img/repeat.png" width="100%">
 *
 * @param {number} [count] The number of times the source Observable items are repeated, a count of 0 will yield
 * an empty Observable.
 * @return {Observable} An Observable that repeats the stream of items emitted by the source Observable at most
 * count times.
 * @method repeat
 * @owner Observable
 */
function repeat(count) {
    if (count === void 0) {
        count = -1;
    }
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_repeat__["a" /* repeat */])(count)(this);
}
//# sourceMappingURL=repeat.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/repeatWhen.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = repeatWhen;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_repeatWhen__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/repeatWhen.js");
/** PURE_IMPORTS_START .._operators_repeatWhen PURE_IMPORTS_END */

/**
 * Returns an Observable that mirrors the source Observable with the exception of a `complete`. If the source
 * Observable calls `complete`, this method will emit to the Observable returned from `notifier`. If that Observable
 * calls `complete` or `error`, then this method will call `complete` or `error` on the child subscription. Otherwise
 * this method will resubscribe to the source Observable.
 *
 * <img src="./img/repeatWhen.png" width="100%">
 *
 * @param {function(notifications: Observable): Observable} notifier - Receives an Observable of notifications with
 * which a user can `complete` or `error`, aborting the repetition.
 * @return {Observable} The source Observable modified with repeat logic.
 * @method repeatWhen
 * @owner Observable
 */
function repeatWhen(notifier) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_repeatWhen__["a" /* repeatWhen */])(notifier)(this);
}
//# sourceMappingURL=repeatWhen.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/retry.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = retry;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_retry__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/retry.js");
/** PURE_IMPORTS_START .._operators_retry PURE_IMPORTS_END */

/**
 * Returns an Observable that mirrors the source Observable with the exception of an `error`. If the source Observable
 * calls `error`, this method will resubscribe to the source Observable for a maximum of `count` resubscriptions (given
 * as a number parameter) rather than propagating the `error` call.
 *
 * <img src="./img/retry.png" width="100%">
 *
 * Any and all items emitted by the source Observable will be emitted by the resulting Observable, even those emitted
 * during failed subscriptions. For example, if an Observable fails at first but emits [1, 2] then succeeds the second
 * time and emits: [1, 2, 3, 4, 5] then the complete stream of emissions and notifications
 * would be: [1, 2, 1, 2, 3, 4, 5, `complete`].
 * @param {number} count - Number of retry attempts before failing.
 * @return {Observable} The source Observable modified with the retry logic.
 * @method retry
 * @owner Observable
 */
function retry(count) {
    if (count === void 0) {
        count = -1;
    }
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_retry__["a" /* retry */])(count)(this);
}
//# sourceMappingURL=retry.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/retryWhen.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = retryWhen;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_retryWhen__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/retryWhen.js");
/** PURE_IMPORTS_START .._operators_retryWhen PURE_IMPORTS_END */

/**
 * Returns an Observable that mirrors the source Observable with the exception of an `error`. If the source Observable
 * calls `error`, this method will emit the Throwable that caused the error to the Observable returned from `notifier`.
 * If that Observable calls `complete` or `error` then this method will call `complete` or `error` on the child
 * subscription. Otherwise this method will resubscribe to the source Observable.
 *
 * <img src="./img/retryWhen.png" width="100%">
 *
 * @param {function(errors: Observable): Observable} notifier - Receives an Observable of notifications with which a
 * user can `complete` or `error`, aborting the retry.
 * @return {Observable} The source Observable modified with retry logic.
 * @method retryWhen
 * @owner Observable
 */
function retryWhen(notifier) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_retryWhen__["a" /* retryWhen */])(notifier)(this);
}
//# sourceMappingURL=retryWhen.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/sample.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = sample;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_sample__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/sample.js");
/** PURE_IMPORTS_START .._operators_sample PURE_IMPORTS_END */

/**
 * Emits the most recently emitted value from the source Observable whenever
 * another Observable, the `notifier`, emits.
 *
 * <span class="informal">It's like {@link sampleTime}, but samples whenever
 * the `notifier` Observable emits something.</span>
 *
 * <img src="./img/sample.png" width="100%">
 *
 * Whenever the `notifier` Observable emits a value or completes, `sample`
 * looks at the source Observable and emits whichever value it has most recently
 * emitted since the previous sampling, unless the source has not emitted
 * anything since the previous sampling. The `notifier` is subscribed to as soon
 * as the output Observable is subscribed.
 *
 * @example <caption>On every click, sample the most recent "seconds" timer</caption>
 * var seconds = Rx.Observable.interval(1000);
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = seconds.sample(clicks);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link audit}
 * @see {@link debounce}
 * @see {@link sampleTime}
 * @see {@link throttle}
 *
 * @param {Observable<any>} notifier The Observable to use for sampling the
 * source Observable.
 * @return {Observable<T>} An Observable that emits the results of sampling the
 * values emitted by the source Observable whenever the notifier Observable
 * emits value or completes.
 * @method sample
 * @owner Observable
 */
function sample(notifier) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_sample__["a" /* sample */])(notifier)(this);
}
//# sourceMappingURL=sample.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/sampleTime.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = sampleTime;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scheduler_async__ = __webpack_require__("./node_modules/rxjs/_esm5/scheduler/async.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operators_sampleTime__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/sampleTime.js");
/** PURE_IMPORTS_START .._scheduler_async,.._operators_sampleTime PURE_IMPORTS_END */


/**
 * Emits the most recently emitted value from the source Observable within
 * periodic time intervals.
 *
 * <span class="informal">Samples the source Observable at periodic time
 * intervals, emitting what it samples.</span>
 *
 * <img src="./img/sampleTime.png" width="100%">
 *
 * `sampleTime` periodically looks at the source Observable and emits whichever
 * value it has most recently emitted since the previous sampling, unless the
 * source has not emitted anything since the previous sampling. The sampling
 * happens periodically in time every `period` milliseconds (or the time unit
 * defined by the optional `scheduler` argument). The sampling starts as soon as
 * the output Observable is subscribed.
 *
 * @example <caption>Every second, emit the most recent click at most once</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.sampleTime(1000);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link auditTime}
 * @see {@link debounceTime}
 * @see {@link delay}
 * @see {@link sample}
 * @see {@link throttleTime}
 *
 * @param {number} period The sampling period expressed in milliseconds or the
 * time unit determined internally by the optional `scheduler`.
 * @param {Scheduler} [scheduler=async] The {@link IScheduler} to use for
 * managing the timers that handle the sampling.
 * @return {Observable<T>} An Observable that emits the results of sampling the
 * values emitted by the source Observable at the specified time interval.
 * @method sampleTime
 * @owner Observable
 */
function sampleTime(period, scheduler) {
    if (scheduler === void 0) {
        scheduler = __WEBPACK_IMPORTED_MODULE_0__scheduler_async__["a" /* async */];
    }
    return Object(__WEBPACK_IMPORTED_MODULE_1__operators_sampleTime__["a" /* sampleTime */])(period, scheduler)(this);
}
//# sourceMappingURL=sampleTime.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/sequenceEqual.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = sequenceEqual;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_sequenceEqual__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/sequenceEqual.js");
/** PURE_IMPORTS_START .._operators_sequenceEqual PURE_IMPORTS_END */

/**
 * Compares all values of two observables in sequence using an optional comparor function
 * and returns an observable of a single boolean value representing whether or not the two sequences
 * are equal.
 *
 * <span class="informal">Checks to see of all values emitted by both observables are equal, in order.</span>
 *
 * <img src="./img/sequenceEqual.png" width="100%">
 *
 * `sequenceEqual` subscribes to two observables and buffers incoming values from each observable. Whenever either
 * observable emits a value, the value is buffered and the buffers are shifted and compared from the bottom
 * up; If any value pair doesn't match, the returned observable will emit `false` and complete. If one of the
 * observables completes, the operator will wait for the other observable to complete; If the other
 * observable emits before completing, the returned observable will emit `false` and complete. If one observable never
 * completes or emits after the other complets, the returned observable will never complete.
 *
 * @example <caption>figure out if the Konami code matches</caption>
 * var code = Rx.Observable.from([
 *  "ArrowUp",
 *  "ArrowUp",
 *  "ArrowDown",
 *  "ArrowDown",
 *  "ArrowLeft",
 *  "ArrowRight",
 *  "ArrowLeft",
 *  "ArrowRight",
 *  "KeyB",
 *  "KeyA",
 *  "Enter" // no start key, clearly.
 * ]);
 *
 * var keys = Rx.Observable.fromEvent(document, 'keyup')
 *  .map(e => e.code);
 * var matches = keys.bufferCount(11, 1)
 *  .mergeMap(
 *    last11 =>
 *      Rx.Observable.from(last11)
 *        .sequenceEqual(code)
 *   );
 * matches.subscribe(matched => console.log('Successful cheat at Contra? ', matched));
 *
 * @see {@link combineLatest}
 * @see {@link zip}
 * @see {@link withLatestFrom}
 *
 * @param {Observable} compareTo The observable sequence to compare the source sequence to.
 * @param {function} [comparor] An optional function to compare each value pair
 * @return {Observable} An Observable of a single boolean value representing whether or not
 * the values emitted by both observables were equal in sequence.
 * @method sequenceEqual
 * @owner Observable
 */
function sequenceEqual(compareTo, comparor) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_sequenceEqual__["a" /* sequenceEqual */])(compareTo, comparor)(this);
}
//# sourceMappingURL=sequenceEqual.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/shareReplay.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = shareReplay;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_shareReplay__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/shareReplay.js");
/** PURE_IMPORTS_START .._operators_shareReplay PURE_IMPORTS_END */

/**
 * @method shareReplay
 * @owner Observable
 */
function shareReplay(bufferSize, windowTime, scheduler) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_shareReplay__["a" /* shareReplay */])(bufferSize, windowTime, scheduler)(this);
}
;
//# sourceMappingURL=shareReplay.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/single.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = single;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_single__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/single.js");
/** PURE_IMPORTS_START .._operators_single PURE_IMPORTS_END */

/**
 * Returns an Observable that emits the single item emitted by the source Observable that matches a specified
 * predicate, if that Observable emits one such item. If the source Observable emits more than one such item or no
 * such items, notify of an IllegalArgumentException or NoSuchElementException respectively.
 *
 * <img src="./img/single.png" width="100%">
 *
 * @throws {EmptyError} Delivers an EmptyError to the Observer's `error`
 * callback if the Observable completes before any `next` notification was sent.
 * @param {Function} predicate - A predicate function to evaluate items emitted by the source Observable.
 * @return {Observable<T>} An Observable that emits the single item emitted by the source Observable that matches
 * the predicate.
 .
 * @method single
 * @owner Observable
 */
function single(predicate) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_single__["a" /* single */])(predicate)(this);
}
//# sourceMappingURL=single.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/skip.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = skip;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_skip__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/skip.js");
/** PURE_IMPORTS_START .._operators_skip PURE_IMPORTS_END */

/**
 * Returns an Observable that skips the first `count` items emitted by the source Observable.
 *
 * <img src="./img/skip.png" width="100%">
 *
 * @param {Number} count - The number of times, items emitted by source Observable should be skipped.
 * @return {Observable} An Observable that skips values emitted by the source Observable.
 *
 * @method skip
 * @owner Observable
 */
function skip(count) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_skip__["a" /* skip */])(count)(this);
}
//# sourceMappingURL=skip.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/skipLast.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = skipLast;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_skipLast__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/skipLast.js");
/** PURE_IMPORTS_START .._operators_skipLast PURE_IMPORTS_END */

/**
 * Skip the last `count` values emitted by the source Observable.
 *
 * <img src="./img/skipLast.png" width="100%">
 *
 * `skipLast` returns an Observable that accumulates a queue with a length
 * enough to store the first `count` values. As more values are received,
 * values are taken from the front of the queue and produced on the result
 * sequence. This causes values to be delayed.
 *
 * @example <caption>Skip the last 2 values of an Observable with many values</caption>
 * var many = Rx.Observable.range(1, 5);
 * var skipLastTwo = many.skipLast(2);
 * skipLastTwo.subscribe(x => console.log(x));
 *
 * // Results in:
 * // 1 2 3
 *
 * @see {@link skip}
 * @see {@link skipUntil}
 * @see {@link skipWhile}
 * @see {@link take}
 *
 * @throws {ArgumentOutOfRangeError} When using `skipLast(i)`, it throws
 * ArgumentOutOrRangeError if `i < 0`.
 *
 * @param {number} count Number of elements to skip from the end of the source Observable.
 * @returns {Observable<T>} An Observable that skips the last count values
 * emitted by the source Observable.
 * @method skipLast
 * @owner Observable
 */
function skipLast(count) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_skipLast__["a" /* skipLast */])(count)(this);
}
//# sourceMappingURL=skipLast.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/skipUntil.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = skipUntil;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_skipUntil__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/skipUntil.js");
/** PURE_IMPORTS_START .._operators_skipUntil PURE_IMPORTS_END */

/**
 * Returns an Observable that skips items emitted by the source Observable until a second Observable emits an item.
 *
 * <img src="./img/skipUntil.png" width="100%">
 *
 * @param {Observable} notifier - The second Observable that has to emit an item before the source Observable's elements begin to
 * be mirrored by the resulting Observable.
 * @return {Observable<T>} An Observable that skips items from the source Observable until the second Observable emits
 * an item, then emits the remaining items.
 * @method skipUntil
 * @owner Observable
 */
function skipUntil(notifier) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_skipUntil__["a" /* skipUntil */])(notifier)(this);
}
//# sourceMappingURL=skipUntil.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/skipWhile.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = skipWhile;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_skipWhile__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/skipWhile.js");
/** PURE_IMPORTS_START .._operators_skipWhile PURE_IMPORTS_END */

/**
 * Returns an Observable that skips all items emitted by the source Observable as long as a specified condition holds
 * true, but emits all further source items as soon as the condition becomes false.
 *
 * <img src="./img/skipWhile.png" width="100%">
 *
 * @param {Function} predicate - A function to test each item emitted from the source Observable.
 * @return {Observable<T>} An Observable that begins emitting items emitted by the source Observable when the
 * specified predicate becomes false.
 * @method skipWhile
 * @owner Observable
 */
function skipWhile(predicate) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_skipWhile__["a" /* skipWhile */])(predicate)(this);
}
//# sourceMappingURL=skipWhile.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/startWith.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = startWith;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_startWith__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/startWith.js");
/** PURE_IMPORTS_START .._operators_startWith PURE_IMPORTS_END */

/* tslint:enable:max-line-length */
/**
 * Returns an Observable that emits the items you specify as arguments before it begins to emit
 * items emitted by the source Observable.
 *
 * <img src="./img/startWith.png" width="100%">
 *
 * @param {...T} values - Items you want the modified Observable to emit first.
 * @param {Scheduler} [scheduler] - A {@link IScheduler} to use for scheduling
 * the emissions of the `next` notifications.
 * @return {Observable} An Observable that emits the items in the specified Iterable and then emits the items
 * emitted by the source Observable.
 * @method startWith
 * @owner Observable
 */
function startWith() {
    var array = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        array[_i - 0] = arguments[_i];
    }
    return __WEBPACK_IMPORTED_MODULE_0__operators_startWith__["a" /* startWith */].apply(void 0, array)(this);
}
//# sourceMappingURL=startWith.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/subscribeOn.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = subscribeOn;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_subscribeOn__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/subscribeOn.js");
/** PURE_IMPORTS_START .._operators_subscribeOn PURE_IMPORTS_END */

/**
 * Asynchronously subscribes Observers to this Observable on the specified IScheduler.
 *
 * <img src="./img/subscribeOn.png" width="100%">
 *
 * @param {Scheduler} scheduler - The IScheduler to perform subscription actions on.
 * @return {Observable<T>} The source Observable modified so that its subscriptions happen on the specified IScheduler.
 .
 * @method subscribeOn
 * @owner Observable
 */
function subscribeOn(scheduler, delay) {
    if (delay === void 0) {
        delay = 0;
    }
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_subscribeOn__["a" /* subscribeOn */])(scheduler, delay)(this);
}
//# sourceMappingURL=subscribeOn.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/switch.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _switch;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_switchAll__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/switchAll.js");
/** PURE_IMPORTS_START .._operators_switchAll PURE_IMPORTS_END */

/**
 * Converts a higher-order Observable into a first-order Observable by
 * subscribing to only the most recently emitted of those inner Observables.
 *
 * <span class="informal">Flattens an Observable-of-Observables by dropping the
 * previous inner Observable once a new one appears.</span>
 *
 * <img src="./img/switch.png" width="100%">
 *
 * `switch` subscribes to an Observable that emits Observables, also known as a
 * higher-order Observable. Each time it observes one of these emitted inner
 * Observables, the output Observable subscribes to the inner Observable and
 * begins emitting the items emitted by that. So far, it behaves
 * like {@link mergeAll}. However, when a new inner Observable is emitted,
 * `switch` unsubscribes from the earlier-emitted inner Observable and
 * subscribes to the new inner Observable and begins emitting items from it. It
 * continues to behave like this for subsequent inner Observables.
 *
 * @example <caption>Rerun an interval Observable on every click event</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * // Each click event is mapped to an Observable that ticks every second
 * var higherOrder = clicks.map((ev) => Rx.Observable.interval(1000));
 * var switched = higherOrder.switch();
 * // The outcome is that `switched` is essentially a timer that restarts
 * // on every click. The interval Observables from older clicks do not merge
 * // with the current interval Observable.
 * switched.subscribe(x => console.log(x));
 *
 * @see {@link combineAll}
 * @see {@link concatAll}
 * @see {@link exhaust}
 * @see {@link mergeAll}
 * @see {@link switchMap}
 * @see {@link switchMapTo}
 * @see {@link zipAll}
 *
 * @return {Observable<T>} An Observable that emits the items emitted by the
 * Observable most recently emitted by the source Observable.
 * @method switch
 * @name switch
 * @owner Observable
 */
function _switch() {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_switchAll__["a" /* switchAll */])()(this);
}
//# sourceMappingURL=switch.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/switchMap.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = switchMap;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_switchMap__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/switchMap.js");
/** PURE_IMPORTS_START .._operators_switchMap PURE_IMPORTS_END */

/* tslint:enable:max-line-length */
/**
 * Projects each source value to an Observable which is merged in the output
 * Observable, emitting values only from the most recently projected Observable.
 *
 * <span class="informal">Maps each value to an Observable, then flattens all of
 * these inner Observables using {@link switch}.</span>
 *
 * <img src="./img/switchMap.png" width="100%">
 *
 * Returns an Observable that emits items based on applying a function that you
 * supply to each item emitted by the source Observable, where that function
 * returns an (so-called "inner") Observable. Each time it observes one of these
 * inner Observables, the output Observable begins emitting the items emitted by
 * that inner Observable. When a new inner Observable is emitted, `switchMap`
 * stops emitting items from the earlier-emitted inner Observable and begins
 * emitting items from the new one. It continues to behave like this for
 * subsequent inner Observables.
 *
 * @example <caption>Rerun an interval Observable on every click event</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.switchMap((ev) => Rx.Observable.interval(1000));
 * result.subscribe(x => console.log(x));
 *
 * @see {@link concatMap}
 * @see {@link exhaustMap}
 * @see {@link mergeMap}
 * @see {@link switch}
 * @see {@link switchMapTo}
 *
 * @param {function(value: T, ?index: number): ObservableInput} project A function
 * that, when applied to an item emitted by the source Observable, returns an
 * Observable.
 * @param {function(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number): any} [resultSelector]
 * A function to produce the value on the output Observable based on the values
 * and the indices of the source (outer) emission and the inner Observable
 * emission. The arguments passed to this function are:
 * - `outerValue`: the value that came from the source
 * - `innerValue`: the value that came from the projected Observable
 * - `outerIndex`: the "index" of the value that came from the source
 * - `innerIndex`: the "index" of the value from the projected Observable
 * @return {Observable} An Observable that emits the result of applying the
 * projection function (and the optional `resultSelector`) to each item emitted
 * by the source Observable and taking only the values from the most recently
 * projected inner Observable.
 * @method switchMap
 * @owner Observable
 */
function switchMap(project, resultSelector) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_switchMap__["a" /* switchMap */])(project, resultSelector)(this);
}
//# sourceMappingURL=switchMap.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/switchMapTo.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = switchMapTo;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_switchMapTo__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/switchMapTo.js");
/** PURE_IMPORTS_START .._operators_switchMapTo PURE_IMPORTS_END */

/* tslint:enable:max-line-length */
/**
 * Projects each source value to the same Observable which is flattened multiple
 * times with {@link switch} in the output Observable.
 *
 * <span class="informal">It's like {@link switchMap}, but maps each value
 * always to the same inner Observable.</span>
 *
 * <img src="./img/switchMapTo.png" width="100%">
 *
 * Maps each source value to the given Observable `innerObservable` regardless
 * of the source value, and then flattens those resulting Observables into one
 * single Observable, which is the output Observable. The output Observables
 * emits values only from the most recently emitted instance of
 * `innerObservable`.
 *
 * @example <caption>Rerun an interval Observable on every click event</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.switchMapTo(Rx.Observable.interval(1000));
 * result.subscribe(x => console.log(x));
 *
 * @see {@link concatMapTo}
 * @see {@link switch}
 * @see {@link switchMap}
 * @see {@link mergeMapTo}
 *
 * @param {ObservableInput} innerObservable An Observable to replace each value from
 * the source Observable.
 * @param {function(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number): any} [resultSelector]
 * A function to produce the value on the output Observable based on the values
 * and the indices of the source (outer) emission and the inner Observable
 * emission. The arguments passed to this function are:
 * - `outerValue`: the value that came from the source
 * - `innerValue`: the value that came from the projected Observable
 * - `outerIndex`: the "index" of the value that came from the source
 * - `innerIndex`: the "index" of the value from the projected Observable
 * @return {Observable} An Observable that emits items from the given
 * `innerObservable` (and optionally transformed through `resultSelector`) every
 * time a value is emitted on the source Observable, and taking only the values
 * from the most recently projected inner Observable.
 * @method switchMapTo
 * @owner Observable
 */
function switchMapTo(innerObservable, resultSelector) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_switchMapTo__["a" /* switchMapTo */])(innerObservable, resultSelector)(this);
}
//# sourceMappingURL=switchMapTo.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/take.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = take;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_take__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/take.js");
/** PURE_IMPORTS_START .._operators_take PURE_IMPORTS_END */

/**
 * Emits only the first `count` values emitted by the source Observable.
 *
 * <span class="informal">Takes the first `count` values from the source, then
 * completes.</span>
 *
 * <img src="./img/take.png" width="100%">
 *
 * `take` returns an Observable that emits only the first `count` values emitted
 * by the source Observable. If the source emits fewer than `count` values then
 * all of its values are emitted. After that, it completes, regardless if the
 * source completes.
 *
 * @example <caption>Take the first 5 seconds of an infinite 1-second interval Observable</caption>
 * var interval = Rx.Observable.interval(1000);
 * var five = interval.take(5);
 * five.subscribe(x => console.log(x));
 *
 * @see {@link takeLast}
 * @see {@link takeUntil}
 * @see {@link takeWhile}
 * @see {@link skip}
 *
 * @throws {ArgumentOutOfRangeError} When using `take(i)`, it delivers an
 * ArgumentOutOrRangeError to the Observer's `error` callback if `i < 0`.
 *
 * @param {number} count The maximum number of `next` values to emit.
 * @return {Observable<T>} An Observable that emits only the first `count`
 * values emitted by the source Observable, or all of the values from the source
 * if the source emits fewer than `count` values.
 * @method take
 * @owner Observable
 */
function take(count) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_take__["a" /* take */])(count)(this);
}
//# sourceMappingURL=take.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/takeLast.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = takeLast;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_takeLast__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/takeLast.js");
/** PURE_IMPORTS_START .._operators_takeLast PURE_IMPORTS_END */

/**
 * Emits only the last `count` values emitted by the source Observable.
 *
 * <span class="informal">Remembers the latest `count` values, then emits those
 * only when the source completes.</span>
 *
 * <img src="./img/takeLast.png" width="100%">
 *
 * `takeLast` returns an Observable that emits at most the last `count` values
 * emitted by the source Observable. If the source emits fewer than `count`
 * values then all of its values are emitted. This operator must wait until the
 * `complete` notification emission from the source in order to emit the `next`
 * values on the output Observable, because otherwise it is impossible to know
 * whether or not more values will be emitted on the source. For this reason,
 * all values are emitted synchronously, followed by the complete notification.
 *
 * @example <caption>Take the last 3 values of an Observable with many values</caption>
 * var many = Rx.Observable.range(1, 100);
 * var lastThree = many.takeLast(3);
 * lastThree.subscribe(x => console.log(x));
 *
 * @see {@link take}
 * @see {@link takeUntil}
 * @see {@link takeWhile}
 * @see {@link skip}
 *
 * @throws {ArgumentOutOfRangeError} When using `takeLast(i)`, it delivers an
 * ArgumentOutOrRangeError to the Observer's `error` callback if `i < 0`.
 *
 * @param {number} count The maximum number of values to emit from the end of
 * the sequence of values emitted by the source Observable.
 * @return {Observable<T>} An Observable that emits at most the last count
 * values emitted by the source Observable.
 * @method takeLast
 * @owner Observable
 */
function takeLast(count) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_takeLast__["a" /* takeLast */])(count)(this);
}
//# sourceMappingURL=takeLast.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/takeUntil.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = takeUntil;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_takeUntil__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/takeUntil.js");
/** PURE_IMPORTS_START .._operators_takeUntil PURE_IMPORTS_END */

/**
 * Emits the values emitted by the source Observable until a `notifier`
 * Observable emits a value.
 *
 * <span class="informal">Lets values pass until a second Observable,
 * `notifier`, emits something. Then, it completes.</span>
 *
 * <img src="./img/takeUntil.png" width="100%">
 *
 * `takeUntil` subscribes and begins mirroring the source Observable. It also
 * monitors a second Observable, `notifier` that you provide. If the `notifier`
 * emits a value, the output Observable stops mirroring the source Observable
 * and completes.
 *
 * @example <caption>Tick every second until the first click happens</caption>
 * var interval = Rx.Observable.interval(1000);
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = interval.takeUntil(clicks);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link take}
 * @see {@link takeLast}
 * @see {@link takeWhile}
 * @see {@link skip}
 *
 * @param {Observable} notifier The Observable whose first emitted value will
 * cause the output Observable of `takeUntil` to stop emitting values from the
 * source Observable.
 * @return {Observable<T>} An Observable that emits the values from the source
 * Observable until such time as `notifier` emits its first value.
 * @method takeUntil
 * @owner Observable
 */
function takeUntil(notifier) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_takeUntil__["a" /* takeUntil */])(notifier)(this);
}
//# sourceMappingURL=takeUntil.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/takeWhile.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = takeWhile;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_takeWhile__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/takeWhile.js");
/** PURE_IMPORTS_START .._operators_takeWhile PURE_IMPORTS_END */

/**
 * Emits values emitted by the source Observable so long as each value satisfies
 * the given `predicate`, and then completes as soon as this `predicate` is not
 * satisfied.
 *
 * <span class="informal">Takes values from the source only while they pass the
 * condition given. When the first value does not satisfy, it completes.</span>
 *
 * <img src="./img/takeWhile.png" width="100%">
 *
 * `takeWhile` subscribes and begins mirroring the source Observable. Each value
 * emitted on the source is given to the `predicate` function which returns a
 * boolean, representing a condition to be satisfied by the source values. The
 * output Observable emits the source values until such time as the `predicate`
 * returns false, at which point `takeWhile` stops mirroring the source
 * Observable and completes the output Observable.
 *
 * @example <caption>Emit click events only while the clientX property is greater than 200</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.takeWhile(ev => ev.clientX > 200);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link take}
 * @see {@link takeLast}
 * @see {@link takeUntil}
 * @see {@link skip}
 *
 * @param {function(value: T, index: number): boolean} predicate A function that
 * evaluates a value emitted by the source Observable and returns a boolean.
 * Also takes the (zero-based) index as the second argument.
 * @return {Observable<T>} An Observable that emits the values from the source
 * Observable so long as each value satisfies the condition defined by the
 * `predicate`, then completes.
 * @method takeWhile
 * @owner Observable
 */
function takeWhile(predicate) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_takeWhile__["a" /* takeWhile */])(predicate)(this);
}
//# sourceMappingURL=takeWhile.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/throttle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = throttle;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_throttle__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/throttle.js");
/** PURE_IMPORTS_START .._operators_throttle PURE_IMPORTS_END */

/**
 * Emits a value from the source Observable, then ignores subsequent source
 * values for a duration determined by another Observable, then repeats this
 * process.
 *
 * <span class="informal">It's like {@link throttleTime}, but the silencing
 * duration is determined by a second Observable.</span>
 *
 * <img src="./img/throttle.png" width="100%">
 *
 * `throttle` emits the source Observable values on the output Observable
 * when its internal timer is disabled, and ignores source values when the timer
 * is enabled. Initially, the timer is disabled. As soon as the first source
 * value arrives, it is forwarded to the output Observable, and then the timer
 * is enabled by calling the `durationSelector` function with the source value,
 * which returns the "duration" Observable. When the duration Observable emits a
 * value or completes, the timer is disabled, and this process repeats for the
 * next source value.
 *
 * @example <caption>Emit clicks at a rate of at most one click per second</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.throttle(ev => Rx.Observable.interval(1000));
 * result.subscribe(x => console.log(x));
 *
 * @see {@link audit}
 * @see {@link debounce}
 * @see {@link delayWhen}
 * @see {@link sample}
 * @see {@link throttleTime}
 *
 * @param {function(value: T): SubscribableOrPromise} durationSelector A function
 * that receives a value from the source Observable, for computing the silencing
 * duration for each source value, returned as an Observable or a Promise.
 * @param {Object} config a configuration object to define `leading` and `trailing` behavior. Defaults
 * to `{ leading: true, trailing: false }`.
 * @return {Observable<T>} An Observable that performs the throttle operation to
 * limit the rate of emissions from the source.
 * @method throttle
 * @owner Observable
 */
function throttle(durationSelector, config) {
    if (config === void 0) {
        config = __WEBPACK_IMPORTED_MODULE_0__operators_throttle__["a" /* defaultThrottleConfig */];
    }
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_throttle__["b" /* throttle */])(durationSelector, config)(this);
}
//# sourceMappingURL=throttle.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/throttleTime.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = throttleTime;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scheduler_async__ = __webpack_require__("./node_modules/rxjs/_esm5/scheduler/async.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operators_throttle__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/throttle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__operators_throttleTime__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/throttleTime.js");
/** PURE_IMPORTS_START .._scheduler_async,.._operators_throttle,.._operators_throttleTime PURE_IMPORTS_END */



/**
 * Emits a value from the source Observable, then ignores subsequent source
 * values for `duration` milliseconds, then repeats this process.
 *
 * <span class="informal">Lets a value pass, then ignores source values for the
 * next `duration` milliseconds.</span>
 *
 * <img src="./img/throttleTime.png" width="100%">
 *
 * `throttleTime` emits the source Observable values on the output Observable
 * when its internal timer is disabled, and ignores source values when the timer
 * is enabled. Initially, the timer is disabled. As soon as the first source
 * value arrives, it is forwarded to the output Observable, and then the timer
 * is enabled. After `duration` milliseconds (or the time unit determined
 * internally by the optional `scheduler`) has passed, the timer is disabled,
 * and this process repeats for the next source value. Optionally takes a
 * {@link IScheduler} for managing timers.
 *
 * @example <caption>Emit clicks at a rate of at most one click per second</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.throttleTime(1000);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link auditTime}
 * @see {@link debounceTime}
 * @see {@link delay}
 * @see {@link sampleTime}
 * @see {@link throttle}
 *
 * @param {number} duration Time to wait before emitting another value after
 * emitting the last value, measured in milliseconds or the time unit determined
 * internally by the optional `scheduler`.
 * @param {Scheduler} [scheduler=async] The {@link IScheduler} to use for
 * managing the timers that handle the throttling.
 * @return {Observable<T>} An Observable that performs the throttle operation to
 * limit the rate of emissions from the source.
 * @method throttleTime
 * @owner Observable
 */
function throttleTime(duration, scheduler, config) {
    if (scheduler === void 0) {
        scheduler = __WEBPACK_IMPORTED_MODULE_0__scheduler_async__["a" /* async */];
    }
    if (config === void 0) {
        config = __WEBPACK_IMPORTED_MODULE_1__operators_throttle__["a" /* defaultThrottleConfig */];
    }
    return Object(__WEBPACK_IMPORTED_MODULE_2__operators_throttleTime__["a" /* throttleTime */])(duration, scheduler, config)(this);
}
//# sourceMappingURL=throttleTime.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/timeInterval.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = timeInterval;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scheduler_async__ = __webpack_require__("./node_modules/rxjs/_esm5/scheduler/async.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operators_timeInterval__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/timeInterval.js");
/* unused harmony reexport TimeInterval */
/** PURE_IMPORTS_START .._scheduler_async,.._operators_timeInterval PURE_IMPORTS_END */



/**
 * @param scheduler
 * @return {Observable<TimeInterval<any>>|WebSocketSubject<T>|Observable<T>}
 * @method timeInterval
 * @owner Observable
 */
function timeInterval(scheduler) {
    if (scheduler === void 0) {
        scheduler = __WEBPACK_IMPORTED_MODULE_0__scheduler_async__["a" /* async */];
    }
    return Object(__WEBPACK_IMPORTED_MODULE_1__operators_timeInterval__["a" /* timeInterval */])(scheduler)(this);
}
//# sourceMappingURL=timeInterval.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/timeout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = timeout;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scheduler_async__ = __webpack_require__("./node_modules/rxjs/_esm5/scheduler/async.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operators_timeout__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/timeout.js");
/** PURE_IMPORTS_START .._scheduler_async,.._operators_timeout PURE_IMPORTS_END */


/**
 *
 * Errors if Observable does not emit a value in given time span.
 *
 * <span class="informal">Timeouts on Observable that doesn't emit values fast enough.</span>
 *
 * <img src="./img/timeout.png" width="100%">
 *
 * `timeout` operator accepts as an argument either a number or a Date.
 *
 * If number was provided, it returns an Observable that behaves like a source
 * Observable, unless there is a period of time where there is no value emitted.
 * So if you provide `100` as argument and first value comes after 50ms from
 * the moment of subscription, this value will be simply re-emitted by the resulting
 * Observable. If however after that 100ms passes without a second value being emitted,
 * stream will end with an error and source Observable will be unsubscribed.
 * These checks are performed throughout whole lifecycle of Observable - from the moment
 * it was subscribed to, until it completes or errors itself. Thus every value must be
 * emitted within specified period since previous value.
 *
 * If provided argument was Date, returned Observable behaves differently. It throws
 * if Observable did not complete before provided Date. This means that periods between
 * emission of particular values do not matter in this case. If Observable did not complete
 * before provided Date, source Observable will be unsubscribed. Other than that, resulting
 * stream behaves just as source Observable.
 *
 * `timeout` accepts also a Scheduler as a second parameter. It is used to schedule moment (or moments)
 * when returned Observable will check if source stream emitted value or completed.
 *
 * @example <caption>Check if ticks are emitted within certain timespan</caption>
 * const seconds = Rx.Observable.interval(1000);
 *
 * seconds.timeout(1100) // Let's use bigger timespan to be safe,
 *                       // since `interval` might fire a bit later then scheduled.
 * .subscribe(
 *     value => console.log(value), // Will emit numbers just as regular `interval` would.
 *     err => console.log(err) // Will never be called.
 * );
 *
 * seconds.timeout(900).subscribe(
 *     value => console.log(value), // Will never be called.
 *     err => console.log(err) // Will emit error before even first value is emitted,
 *                             // since it did not arrive within 900ms period.
 * );
 *
 * @example <caption>Use Date to check if Observable completed</caption>
 * const seconds = Rx.Observable.interval(1000);
 *
 * seconds.timeout(new Date("December 17, 2020 03:24:00"))
 * .subscribe(
 *     value => console.log(value), // Will emit values as regular `interval` would
 *                                  // until December 17, 2020 at 03:24:00.
 *     err => console.log(err) // On December 17, 2020 at 03:24:00 it will emit an error,
 *                             // since Observable did not complete by then.
 * );
 *
 * @see {@link timeoutWith}
 *
 * @param {number|Date} due Number specifying period within which Observable must emit values
 *                          or Date specifying before when Observable should complete
 * @param {Scheduler} [scheduler] Scheduler controlling when timeout checks occur.
 * @return {Observable<T>} Observable that mirrors behaviour of source, unless timeout checks fail.
 * @method timeout
 * @owner Observable
 */
function timeout(due, scheduler) {
    if (scheduler === void 0) {
        scheduler = __WEBPACK_IMPORTED_MODULE_0__scheduler_async__["a" /* async */];
    }
    return Object(__WEBPACK_IMPORTED_MODULE_1__operators_timeout__["a" /* timeout */])(due, scheduler)(this);
}
//# sourceMappingURL=timeout.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/timeoutWith.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = timeoutWith;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scheduler_async__ = __webpack_require__("./node_modules/rxjs/_esm5/scheduler/async.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operators_timeoutWith__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/timeoutWith.js");
/** PURE_IMPORTS_START .._scheduler_async,.._operators_timeoutWith PURE_IMPORTS_END */


/* tslint:enable:max-line-length */
/**
 *
 * Errors if Observable does not emit a value in given time span, in case of which
 * subscribes to the second Observable.
 *
 * <span class="informal">It's a version of `timeout` operator that let's you specify fallback Observable.</span>
 *
 * <img src="./img/timeoutWith.png" width="100%">
 *
 * `timeoutWith` is a variation of `timeout` operator. It behaves exactly the same,
 * still accepting as a first argument either a number or a Date, which control - respectively -
 * when values of source Observable should be emitted or when it should complete.
 *
 * The only difference is that it accepts a second, required parameter. This parameter
 * should be an Observable which will be subscribed when source Observable fails any timeout check.
 * So whenever regular `timeout` would emit an error, `timeoutWith` will instead start re-emitting
 * values from second Observable. Note that this fallback Observable is not checked for timeouts
 * itself, so it can emit values and complete at arbitrary points in time. From the moment of a second
 * subscription, Observable returned from `timeoutWith` simply mirrors fallback stream. When that
 * stream completes, it completes as well.
 *
 * Scheduler, which in case of `timeout` is provided as as second argument, can be still provided
 * here - as a third, optional parameter. It still is used to schedule timeout checks and -
 * as a consequence - when second Observable will be subscribed, since subscription happens
 * immediately after failing check.
 *
 * @example <caption>Add fallback observable</caption>
 * const seconds = Rx.Observable.interval(1000);
 * const minutes = Rx.Observable.interval(60 * 1000);
 *
 * seconds.timeoutWith(900, minutes)
 *     .subscribe(
 *         value => console.log(value), // After 900ms, will start emitting `minutes`,
 *                                      // since first value of `seconds` will not arrive fast enough.
 *         err => console.log(err) // Would be called after 900ms in case of `timeout`,
 *                                 // but here will never be called.
 *     );
 *
 * @param {number|Date} due Number specifying period within which Observable must emit values
 *                          or Date specifying before when Observable should complete
 * @param {Observable<T>} withObservable Observable which will be subscribed if source fails timeout check.
 * @param {Scheduler} [scheduler] Scheduler controlling when timeout checks occur.
 * @return {Observable<T>} Observable that mirrors behaviour of source or, when timeout check fails, of an Observable
 *                          passed as a second parameter.
 * @method timeoutWith
 * @owner Observable
 */
function timeoutWith(due, withObservable, scheduler) {
    if (scheduler === void 0) {
        scheduler = __WEBPACK_IMPORTED_MODULE_0__scheduler_async__["a" /* async */];
    }
    return Object(__WEBPACK_IMPORTED_MODULE_1__operators_timeoutWith__["a" /* timeoutWith */])(due, withObservable, scheduler)(this);
}
//# sourceMappingURL=timeoutWith.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/timestamp.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = timestamp;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scheduler_async__ = __webpack_require__("./node_modules/rxjs/_esm5/scheduler/async.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operators_timestamp__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/timestamp.js");
/** PURE_IMPORTS_START .._scheduler_async,.._operators_timestamp PURE_IMPORTS_END */


/**
 * @param scheduler
 * @return {Observable<Timestamp<any>>|WebSocketSubject<T>|Observable<T>}
 * @method timestamp
 * @owner Observable
 */
function timestamp(scheduler) {
    if (scheduler === void 0) {
        scheduler = __WEBPACK_IMPORTED_MODULE_0__scheduler_async__["a" /* async */];
    }
    return Object(__WEBPACK_IMPORTED_MODULE_1__operators_timestamp__["a" /* timestamp */])(scheduler)(this);
}
//# sourceMappingURL=timestamp.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/toArray.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = toArray;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_toArray__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/toArray.js");
/** PURE_IMPORTS_START .._operators_toArray PURE_IMPORTS_END */

/**
 * Collects all source emissions and emits them as an array when the source completes.
 *
 * <span class="informal">Get all values inside an array when the source completes</span>
 *
 * <img src="./img/toArray.png" width="100%">
 *
 * `toArray` will wait until the source Observable completes
 * before emitting the array containing all emissions.
 * When the source Observable errors no array will be emitted.
 *
 * @example <caption>Create array from input</caption>
 * const input = Rx.Observable.interval(100).take(4);
 *
 * input.toArray()
 *   .subscribe(arr => console.log(arr)); // [0,1,2,3]
 *
 * @see {@link buffer}
 *
 * @return {Observable<any[]>|WebSocketSubject<T>|Observable<T>}
 * @method toArray
 * @owner Observable
 */
function toArray() {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_toArray__["a" /* toArray */])()(this);
}
//# sourceMappingURL=toArray.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/window.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = window;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_window__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/window.js");
/** PURE_IMPORTS_START .._operators_window PURE_IMPORTS_END */

/**
 * Branch out the source Observable values as a nested Observable whenever
 * `windowBoundaries` emits.
 *
 * <span class="informal">It's like {@link buffer}, but emits a nested Observable
 * instead of an array.</span>
 *
 * <img src="./img/window.png" width="100%">
 *
 * Returns an Observable that emits windows of items it collects from the source
 * Observable. The output Observable emits connected, non-overlapping
 * windows. It emits the current window and opens a new one whenever the
 * Observable `windowBoundaries` emits an item. Because each window is an
 * Observable, the output is a higher-order Observable.
 *
 * @example <caption>In every window of 1 second each, emit at most 2 click events</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var interval = Rx.Observable.interval(1000);
 * var result = clicks.window(interval)
 *   .map(win => win.take(2)) // each window has at most 2 emissions
 *   .mergeAll(); // flatten the Observable-of-Observables
 * result.subscribe(x => console.log(x));
 *
 * @see {@link windowCount}
 * @see {@link windowTime}
 * @see {@link windowToggle}
 * @see {@link windowWhen}
 * @see {@link buffer}
 *
 * @param {Observable<any>} windowBoundaries An Observable that completes the
 * previous window and starts a new window.
 * @return {Observable<Observable<T>>} An Observable of windows, which are
 * Observables emitting values of the source Observable.
 * @method window
 * @owner Observable
 */
function window(windowBoundaries) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_window__["a" /* window */])(windowBoundaries)(this);
}
//# sourceMappingURL=window.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/windowCount.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = windowCount;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_windowCount__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/windowCount.js");
/** PURE_IMPORTS_START .._operators_windowCount PURE_IMPORTS_END */

/**
 * Branch out the source Observable values as a nested Observable with each
 * nested Observable emitting at most `windowSize` values.
 *
 * <span class="informal">It's like {@link bufferCount}, but emits a nested
 * Observable instead of an array.</span>
 *
 * <img src="./img/windowCount.png" width="100%">
 *
 * Returns an Observable that emits windows of items it collects from the source
 * Observable. The output Observable emits windows every `startWindowEvery`
 * items, each containing no more than `windowSize` items. When the source
 * Observable completes or encounters an error, the output Observable emits
 * the current window and propagates the notification from the source
 * Observable. If `startWindowEvery` is not provided, then new windows are
 * started immediately at the start of the source and when each window completes
 * with size `windowSize`.
 *
 * @example <caption>Ignore every 3rd click event, starting from the first one</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.windowCount(3)
 *   .map(win => win.skip(1)) // skip first of every 3 clicks
 *   .mergeAll(); // flatten the Observable-of-Observables
 * result.subscribe(x => console.log(x));
 *
 * @example <caption>Ignore every 3rd click event, starting from the third one</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.windowCount(2, 3)
 *   .mergeAll(); // flatten the Observable-of-Observables
 * result.subscribe(x => console.log(x));
 *
 * @see {@link window}
 * @see {@link windowTime}
 * @see {@link windowToggle}
 * @see {@link windowWhen}
 * @see {@link bufferCount}
 *
 * @param {number} windowSize The maximum number of values emitted by each
 * window.
 * @param {number} [startWindowEvery] Interval at which to start a new window.
 * For example if `startWindowEvery` is `2`, then a new window will be started
 * on every other value from the source. A new window is started at the
 * beginning of the source by default.
 * @return {Observable<Observable<T>>} An Observable of windows, which in turn
 * are Observable of values.
 * @method windowCount
 * @owner Observable
 */
function windowCount(windowSize, startWindowEvery) {
    if (startWindowEvery === void 0) {
        startWindowEvery = 0;
    }
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_windowCount__["a" /* windowCount */])(windowSize, startWindowEvery)(this);
}
//# sourceMappingURL=windowCount.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/windowTime.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = windowTime;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scheduler_async__ = __webpack_require__("./node_modules/rxjs/_esm5/scheduler/async.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_isNumeric__ = __webpack_require__("./node_modules/rxjs/_esm5/util/isNumeric.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_isScheduler__ = __webpack_require__("./node_modules/rxjs/_esm5/util/isScheduler.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__operators_windowTime__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/windowTime.js");
/** PURE_IMPORTS_START .._scheduler_async,.._util_isNumeric,.._util_isScheduler,.._operators_windowTime PURE_IMPORTS_END */




function windowTime(windowTimeSpan) {
    var scheduler = __WEBPACK_IMPORTED_MODULE_0__scheduler_async__["a" /* async */];
    var windowCreationInterval = null;
    var maxWindowSize = Number.POSITIVE_INFINITY;
    if (Object(__WEBPACK_IMPORTED_MODULE_2__util_isScheduler__["a" /* isScheduler */])(arguments[3])) {
        scheduler = arguments[3];
    }
    if (Object(__WEBPACK_IMPORTED_MODULE_2__util_isScheduler__["a" /* isScheduler */])(arguments[2])) {
        scheduler = arguments[2];
    }
    else if (Object(__WEBPACK_IMPORTED_MODULE_1__util_isNumeric__["a" /* isNumeric */])(arguments[2])) {
        maxWindowSize = arguments[2];
    }
    if (Object(__WEBPACK_IMPORTED_MODULE_2__util_isScheduler__["a" /* isScheduler */])(arguments[1])) {
        scheduler = arguments[1];
    }
    else if (Object(__WEBPACK_IMPORTED_MODULE_1__util_isNumeric__["a" /* isNumeric */])(arguments[1])) {
        windowCreationInterval = arguments[1];
    }
    return Object(__WEBPACK_IMPORTED_MODULE_3__operators_windowTime__["a" /* windowTime */])(windowTimeSpan, windowCreationInterval, maxWindowSize, scheduler)(this);
}
//# sourceMappingURL=windowTime.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/windowToggle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = windowToggle;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_windowToggle__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/windowToggle.js");
/** PURE_IMPORTS_START .._operators_windowToggle PURE_IMPORTS_END */

/**
 * Branch out the source Observable values as a nested Observable starting from
 * an emission from `openings` and ending when the output of `closingSelector`
 * emits.
 *
 * <span class="informal">It's like {@link bufferToggle}, but emits a nested
 * Observable instead of an array.</span>
 *
 * <img src="./img/windowToggle.png" width="100%">
 *
 * Returns an Observable that emits windows of items it collects from the source
 * Observable. The output Observable emits windows that contain those items
 * emitted by the source Observable between the time when the `openings`
 * Observable emits an item and when the Observable returned by
 * `closingSelector` emits an item.
 *
 * @example <caption>Every other second, emit the click events from the next 500ms</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var openings = Rx.Observable.interval(1000);
 * var result = clicks.windowToggle(openings, i =>
 *   i % 2 ? Rx.Observable.interval(500) : Rx.Observable.empty()
 * ).mergeAll();
 * result.subscribe(x => console.log(x));
 *
 * @see {@link window}
 * @see {@link windowCount}
 * @see {@link windowTime}
 * @see {@link windowWhen}
 * @see {@link bufferToggle}
 *
 * @param {Observable<O>} openings An observable of notifications to start new
 * windows.
 * @param {function(value: O): Observable} closingSelector A function that takes
 * the value emitted by the `openings` observable and returns an Observable,
 * which, when it emits (either `next` or `complete`), signals that the
 * associated window should complete.
 * @return {Observable<Observable<T>>} An observable of windows, which in turn
 * are Observables.
 * @method windowToggle
 * @owner Observable
 */
function windowToggle(openings, closingSelector) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_windowToggle__["a" /* windowToggle */])(openings, closingSelector)(this);
}
//# sourceMappingURL=windowToggle.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/windowWhen.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = windowWhen;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_windowWhen__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/windowWhen.js");
/** PURE_IMPORTS_START .._operators_windowWhen PURE_IMPORTS_END */

/**
 * Branch out the source Observable values as a nested Observable using a
 * factory function of closing Observables to determine when to start a new
 * window.
 *
 * <span class="informal">It's like {@link bufferWhen}, but emits a nested
 * Observable instead of an array.</span>
 *
 * <img src="./img/windowWhen.png" width="100%">
 *
 * Returns an Observable that emits windows of items it collects from the source
 * Observable. The output Observable emits connected, non-overlapping windows.
 * It emits the current window and opens a new one whenever the Observable
 * produced by the specified `closingSelector` function emits an item. The first
 * window is opened immediately when subscribing to the output Observable.
 *
 * @example <caption>Emit only the first two clicks events in every window of [1-5] random seconds</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks
 *   .windowWhen(() => Rx.Observable.interval(1000 + Math.random() * 4000))
 *   .map(win => win.take(2)) // each window has at most 2 emissions
 *   .mergeAll(); // flatten the Observable-of-Observables
 * result.subscribe(x => console.log(x));
 *
 * @see {@link window}
 * @see {@link windowCount}
 * @see {@link windowTime}
 * @see {@link windowToggle}
 * @see {@link bufferWhen}
 *
 * @param {function(): Observable} closingSelector A function that takes no
 * arguments and returns an Observable that signals (on either `next` or
 * `complete`) when to close the previous window and start a new one.
 * @return {Observable<Observable<T>>} An observable of windows, which in turn
 * are Observables.
 * @method windowWhen
 * @owner Observable
 */
function windowWhen(closingSelector) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_windowWhen__["a" /* windowWhen */])(closingSelector)(this);
}
//# sourceMappingURL=windowWhen.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/withLatestFrom.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = withLatestFrom;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_withLatestFrom__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/withLatestFrom.js");
/** PURE_IMPORTS_START .._operators_withLatestFrom PURE_IMPORTS_END */

/* tslint:enable:max-line-length */
/**
 * Combines the source Observable with other Observables to create an Observable
 * whose values are calculated from the latest values of each, only when the
 * source emits.
 *
 * <span class="informal">Whenever the source Observable emits a value, it
 * computes a formula using that value plus the latest values from other input
 * Observables, then emits the output of that formula.</span>
 *
 * <img src="./img/withLatestFrom.png" width="100%">
 *
 * `withLatestFrom` combines each value from the source Observable (the
 * instance) with the latest values from the other input Observables only when
 * the source emits a value, optionally using a `project` function to determine
 * the value to be emitted on the output Observable. All input Observables must
 * emit at least one value before the output Observable will emit a value.
 *
 * @example <caption>On every click event, emit an array with the latest timer event plus the click event</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var timer = Rx.Observable.interval(1000);
 * var result = clicks.withLatestFrom(timer);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link combineLatest}
 *
 * @param {ObservableInput} other An input Observable to combine with the source
 * Observable. More than one input Observables may be given as argument.
 * @param {Function} [project] Projection function for combining values
 * together. Receives all values in order of the Observables passed, where the
 * first parameter is a value from the source Observable. (e.g.
 * `a.withLatestFrom(b, c, (a1, b1, c1) => a1 + b1 + c1)`). If this is not
 * passed, arrays will be emitted on the output Observable.
 * @return {Observable} An Observable of projected values from the most recent
 * values from each input Observable, or an array of the most recent values from
 * each input Observable.
 * @method withLatestFrom
 * @owner Observable
 */
function withLatestFrom() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i - 0] = arguments[_i];
    }
    return __WEBPACK_IMPORTED_MODULE_0__operators_withLatestFrom__["a" /* withLatestFrom */].apply(void 0, args)(this);
}
//# sourceMappingURL=withLatestFrom.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/zip.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = zipProto;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_zip__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/zip.js");
/** PURE_IMPORTS_START .._operators_zip PURE_IMPORTS_END */

/* tslint:enable:max-line-length */
/**
 * @param observables
 * @return {Observable<R>}
 * @method zip
 * @owner Observable
 */
function zipProto() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i - 0] = arguments[_i];
    }
    return __WEBPACK_IMPORTED_MODULE_0__operators_zip__["b" /* zip */].apply(void 0, observables)(this);
}
//# sourceMappingURL=zip.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/zipAll.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = zipAll;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_zipAll__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/zipAll.js");
/** PURE_IMPORTS_START .._operators_zipAll PURE_IMPORTS_END */

/**
 * @param project
 * @return {Observable<R>|WebSocketSubject<T>|Observable<T>}
 * @method zipAll
 * @owner Observable
 */
function zipAll(project) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_zipAll__["a" /* zipAll */])(project)(this);
}
//# sourceMappingURL=zipAll.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operators/subscribeOn.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = subscribeOn;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__observable_SubscribeOnObservable__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/SubscribeOnObservable.js");
/** PURE_IMPORTS_START .._observable_SubscribeOnObservable PURE_IMPORTS_END */

/**
 * Asynchronously subscribes Observers to this Observable on the specified IScheduler.
 *
 * <img src="./img/subscribeOn.png" width="100%">
 *
 * @param {Scheduler} scheduler - The IScheduler to perform subscription actions on.
 * @return {Observable<T>} The source Observable modified so that its subscriptions happen on the specified IScheduler.
 .
 * @method subscribeOn
 * @owner Observable
 */
function subscribeOn(scheduler, delay) {
    if (delay === void 0) {
        delay = 0;
    }
    return function subscribeOnOperatorFunction(source) {
        return source.lift(new SubscribeOnOperator(scheduler, delay));
    };
}
var SubscribeOnOperator = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function SubscribeOnOperator(scheduler, delay) {
        this.scheduler = scheduler;
        this.delay = delay;
    }
    SubscribeOnOperator.prototype.call = function (subscriber, source) {
        return new __WEBPACK_IMPORTED_MODULE_0__observable_SubscribeOnObservable__["a" /* SubscribeOnObservable */](source, this.delay, this.scheduler).subscribe(subscriber);
    };
    return SubscribeOnOperator;
}());
//# sourceMappingURL=subscribeOn.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/scheduler/AnimationFrameAction.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnimationFrameAction; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AsyncAction__ = __webpack_require__("./node_modules/rxjs/_esm5/scheduler/AsyncAction.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_AnimationFrame__ = __webpack_require__("./node_modules/rxjs/_esm5/util/AnimationFrame.js");
/** PURE_IMPORTS_START ._AsyncAction,.._util_AnimationFrame PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};


/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var AnimationFrameAction = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(AnimationFrameAction, _super);
    function AnimationFrameAction(scheduler, work) {
        _super.call(this, scheduler, work);
        this.scheduler = scheduler;
        this.work = work;
    }
    AnimationFrameAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        // If delay is greater than 0, request as an async action.
        if (delay !== null && delay > 0) {
            return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
        }
        // Push the action to the end of the scheduler queue.
        scheduler.actions.push(this);
        // If an animation frame has already been requested, don't request another
        // one. If an animation frame hasn't been requested yet, request one. Return
        // the current animation frame request id.
        return scheduler.scheduled || (scheduler.scheduled = __WEBPACK_IMPORTED_MODULE_1__util_AnimationFrame__["a" /* AnimationFrame */].requestAnimationFrame(scheduler.flush.bind(scheduler, null)));
    };
    AnimationFrameAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        // If delay exists and is greater than 0, or if the delay is null (the
        // action wasn't rescheduled) but was originally scheduled as an async
        // action, then recycle as an async action.
        if ((delay !== null && delay > 0) || (delay === null && this.delay > 0)) {
            return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay);
        }
        // If the scheduler queue is empty, cancel the requested animation frame and
        // set the scheduled flag to undefined so the next AnimationFrameAction will
        // request its own.
        if (scheduler.actions.length === 0) {
            __WEBPACK_IMPORTED_MODULE_1__util_AnimationFrame__["a" /* AnimationFrame */].cancelAnimationFrame(id);
            scheduler.scheduled = undefined;
        }
        // Return undefined so the action knows to request a new async id if it's rescheduled.
        return undefined;
    };
    return AnimationFrameAction;
}(__WEBPACK_IMPORTED_MODULE_0__AsyncAction__["a" /* AsyncAction */]));
//# sourceMappingURL=AnimationFrameAction.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/scheduler/AnimationFrameScheduler.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnimationFrameScheduler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AsyncScheduler__ = __webpack_require__("./node_modules/rxjs/_esm5/scheduler/AsyncScheduler.js");
/** PURE_IMPORTS_START ._AsyncScheduler PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

var AnimationFrameScheduler = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(AnimationFrameScheduler, _super);
    function AnimationFrameScheduler() {
        _super.apply(this, arguments);
    }
    AnimationFrameScheduler.prototype.flush = function (action) {
        this.active = true;
        this.scheduled = undefined;
        var actions = this.actions;
        var error;
        var index = -1;
        var count = actions.length;
        action = action || actions.shift();
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        } while (++index < count && (action = actions.shift()));
        this.active = false;
        if (error) {
            while (++index < count && (action = actions.shift())) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    return AnimationFrameScheduler;
}(__WEBPACK_IMPORTED_MODULE_0__AsyncScheduler__["a" /* AsyncScheduler */]));
//# sourceMappingURL=AnimationFrameScheduler.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/scheduler/AsapAction.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AsapAction; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_Immediate__ = __webpack_require__("./node_modules/rxjs/_esm5/util/Immediate.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AsyncAction__ = __webpack_require__("./node_modules/rxjs/_esm5/scheduler/AsyncAction.js");
/** PURE_IMPORTS_START .._util_Immediate,._AsyncAction PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};


/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var AsapAction = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(AsapAction, _super);
    function AsapAction(scheduler, work) {
        _super.call(this, scheduler, work);
        this.scheduler = scheduler;
        this.work = work;
    }
    AsapAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        // If delay is greater than 0, request as an async action.
        if (delay !== null && delay > 0) {
            return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
        }
        // Push the action to the end of the scheduler queue.
        scheduler.actions.push(this);
        // If a microtask has already been scheduled, don't schedule another
        // one. If a microtask hasn't been scheduled yet, schedule one now. Return
        // the current scheduled microtask id.
        return scheduler.scheduled || (scheduler.scheduled = __WEBPACK_IMPORTED_MODULE_0__util_Immediate__["a" /* Immediate */].setImmediate(scheduler.flush.bind(scheduler, null)));
    };
    AsapAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        // If delay exists and is greater than 0, or if the delay is null (the
        // action wasn't rescheduled) but was originally scheduled as an async
        // action, then recycle as an async action.
        if ((delay !== null && delay > 0) || (delay === null && this.delay > 0)) {
            return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay);
        }
        // If the scheduler queue is empty, cancel the requested microtask and
        // set the scheduled flag to undefined so the next AsapAction will schedule
        // its own.
        if (scheduler.actions.length === 0) {
            __WEBPACK_IMPORTED_MODULE_0__util_Immediate__["a" /* Immediate */].clearImmediate(id);
            scheduler.scheduled = undefined;
        }
        // Return undefined so the action knows to request a new async id if it's rescheduled.
        return undefined;
    };
    return AsapAction;
}(__WEBPACK_IMPORTED_MODULE_1__AsyncAction__["a" /* AsyncAction */]));
//# sourceMappingURL=AsapAction.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/scheduler/AsapScheduler.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AsapScheduler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AsyncScheduler__ = __webpack_require__("./node_modules/rxjs/_esm5/scheduler/AsyncScheduler.js");
/** PURE_IMPORTS_START ._AsyncScheduler PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

var AsapScheduler = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(AsapScheduler, _super);
    function AsapScheduler() {
        _super.apply(this, arguments);
    }
    AsapScheduler.prototype.flush = function (action) {
        this.active = true;
        this.scheduled = undefined;
        var actions = this.actions;
        var error;
        var index = -1;
        var count = actions.length;
        action = action || actions.shift();
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        } while (++index < count && (action = actions.shift()));
        this.active = false;
        if (error) {
            while (++index < count && (action = actions.shift())) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    return AsapScheduler;
}(__WEBPACK_IMPORTED_MODULE_0__AsyncScheduler__["a" /* AsyncScheduler */]));
//# sourceMappingURL=AsapScheduler.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/scheduler/VirtualTimeScheduler.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return VirtualTimeScheduler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VirtualAction; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AsyncAction__ = __webpack_require__("./node_modules/rxjs/_esm5/scheduler/AsyncAction.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AsyncScheduler__ = __webpack_require__("./node_modules/rxjs/_esm5/scheduler/AsyncScheduler.js");
/** PURE_IMPORTS_START ._AsyncAction,._AsyncScheduler PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};


var VirtualTimeScheduler = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(VirtualTimeScheduler, _super);
    function VirtualTimeScheduler(SchedulerAction, maxFrames) {
        var _this = this;
        if (SchedulerAction === void 0) {
            SchedulerAction = VirtualAction;
        }
        if (maxFrames === void 0) {
            maxFrames = Number.POSITIVE_INFINITY;
        }
        _super.call(this, SchedulerAction, function () { return _this.frame; });
        this.maxFrames = maxFrames;
        this.frame = 0;
        this.index = -1;
    }
    /**
     * Prompt the Scheduler to execute all of its queued actions, therefore
     * clearing its queue.
     * @return {void}
     */
    VirtualTimeScheduler.prototype.flush = function () {
        var _a = this, actions = _a.actions, maxFrames = _a.maxFrames;
        var error, action;
        while ((action = actions.shift()) && (this.frame = action.delay) <= maxFrames) {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        }
        if (error) {
            while (action = actions.shift()) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    VirtualTimeScheduler.frameTimeFactor = 10;
    return VirtualTimeScheduler;
}(__WEBPACK_IMPORTED_MODULE_1__AsyncScheduler__["a" /* AsyncScheduler */]));
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var VirtualAction = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(VirtualAction, _super);
    function VirtualAction(scheduler, work, index) {
        if (index === void 0) {
            index = scheduler.index += 1;
        }
        _super.call(this, scheduler, work);
        this.scheduler = scheduler;
        this.work = work;
        this.index = index;
        this.active = true;
        this.index = scheduler.index = index;
    }
    VirtualAction.prototype.schedule = function (state, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        if (!this.id) {
            return _super.prototype.schedule.call(this, state, delay);
        }
        this.active = false;
        // If an action is rescheduled, we save allocations by mutating its state,
        // pushing it to the end of the scheduler queue, and recycling the action.
        // But since the VirtualTimeScheduler is used for testing, VirtualActions
        // must be immutable so they can be inspected later.
        var action = new VirtualAction(this.scheduler, this.work);
        this.add(action);
        return action.schedule(state, delay);
    };
    VirtualAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        this.delay = scheduler.frame + delay;
        var actions = scheduler.actions;
        actions.push(this);
        actions.sort(VirtualAction.sortActions);
        return true;
    };
    VirtualAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        return undefined;
    };
    VirtualAction.prototype._execute = function (state, delay) {
        if (this.active === true) {
            return _super.prototype._execute.call(this, state, delay);
        }
    };
    VirtualAction.sortActions = function (a, b) {
        if (a.delay === b.delay) {
            if (a.index === b.index) {
                return 0;
            }
            else if (a.index > b.index) {
                return 1;
            }
            else {
                return -1;
            }
        }
        else if (a.delay > b.delay) {
            return 1;
        }
        else {
            return -1;
        }
    };
    return VirtualAction;
}(__WEBPACK_IMPORTED_MODULE_0__AsyncAction__["a" /* AsyncAction */]));
//# sourceMappingURL=VirtualTimeScheduler.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/scheduler/animationFrame.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return animationFrame; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AnimationFrameAction__ = __webpack_require__("./node_modules/rxjs/_esm5/scheduler/AnimationFrameAction.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AnimationFrameScheduler__ = __webpack_require__("./node_modules/rxjs/_esm5/scheduler/AnimationFrameScheduler.js");
/** PURE_IMPORTS_START ._AnimationFrameAction,._AnimationFrameScheduler PURE_IMPORTS_END */


/**
 *
 * Animation Frame Scheduler
 *
 * <span class="informal">Perform task when `window.requestAnimationFrame` would fire</span>
 *
 * When `animationFrame` scheduler is used with delay, it will fall back to {@link async} scheduler
 * behaviour.
 *
 * Without delay, `animationFrame` scheduler can be used to create smooth browser animations.
 * It makes sure scheduled task will happen just before next browser content repaint,
 * thus performing animations as efficiently as possible.
 *
 * @example <caption>Schedule div height animation</caption>
 * const div = document.querySelector('.some-div');
 *
 * Rx.Scheduler.schedule(function(height) {
 *   div.style.height = height + "px";
 *
 *   this.schedule(height + 1);  // `this` references currently executing Action,
 *                               // which we reschedule with new state
 * }, 0, 0);
 *
 * // You will see .some-div element growing in height
 *
 *
 * @static true
 * @name animationFrame
 * @owner Scheduler
 */
var animationFrame = /*@__PURE__*/ new __WEBPACK_IMPORTED_MODULE_1__AnimationFrameScheduler__["a" /* AnimationFrameScheduler */](__WEBPACK_IMPORTED_MODULE_0__AnimationFrameAction__["a" /* AnimationFrameAction */]);
//# sourceMappingURL=animationFrame.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/scheduler/asap.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return asap; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AsapAction__ = __webpack_require__("./node_modules/rxjs/_esm5/scheduler/AsapAction.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AsapScheduler__ = __webpack_require__("./node_modules/rxjs/_esm5/scheduler/AsapScheduler.js");
/** PURE_IMPORTS_START ._AsapAction,._AsapScheduler PURE_IMPORTS_END */


/**
 *
 * Asap Scheduler
 *
 * <span class="informal">Perform task as fast as it can be performed asynchronously</span>
 *
 * `asap` scheduler behaves the same as {@link async} scheduler when you use it to delay task
 * in time. If however you set delay to `0`, `asap` will wait for current synchronously executing
 * code to end and then it will try to execute given task as fast as possible.
 *
 * `asap` scheduler will do its best to minimize time between end of currently executing code
 * and start of scheduled task. This makes it best candidate for performing so called "deferring".
 * Traditionally this was achieved by calling `setTimeout(deferredTask, 0)`, but that technique involves
 * some (although minimal) unwanted delay.
 *
 * Note that using `asap` scheduler does not necessarily mean that your task will be first to process
 * after currently executing code. In particular, if some task was also scheduled with `asap` before,
 * that task will execute first. That being said, if you need to schedule task asynchronously, but
 * as soon as possible, `asap` scheduler is your best bet.
 *
 * @example <caption>Compare async and asap scheduler</caption>
 *
 * Rx.Scheduler.async.schedule(() => console.log('async')); // scheduling 'async' first...
 * Rx.Scheduler.asap.schedule(() => console.log('asap'));
 *
 * // Logs:
 * // "asap"
 * // "async"
 * // ... but 'asap' goes first!
 *
 * @static true
 * @name asap
 * @owner Scheduler
 */
var asap = /*@__PURE__*/ new __WEBPACK_IMPORTED_MODULE_1__AsapScheduler__["a" /* AsapScheduler */](__WEBPACK_IMPORTED_MODULE_0__AsapAction__["a" /* AsapAction */]);
//# sourceMappingURL=asap.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/testing/ColdObservable.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColdObservable; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Subscription__ = __webpack_require__("./node_modules/rxjs/_esm5/Subscription.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SubscriptionLoggable__ = __webpack_require__("./node_modules/rxjs/_esm5/testing/SubscriptionLoggable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_applyMixins__ = __webpack_require__("./node_modules/rxjs/_esm5/util/applyMixins.js");
/** PURE_IMPORTS_START .._Observable,.._Subscription,._SubscriptionLoggable,.._util_applyMixins PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};




/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var ColdObservable = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(ColdObservable, _super);
    function ColdObservable(messages, scheduler) {
        _super.call(this, function (subscriber) {
            var observable = this;
            var index = observable.logSubscribedFrame();
            subscriber.add(new __WEBPACK_IMPORTED_MODULE_1__Subscription__["a" /* Subscription */](function () {
                observable.logUnsubscribedFrame(index);
            }));
            observable.scheduleMessages(subscriber);
            return subscriber;
        });
        this.messages = messages;
        this.subscriptions = [];
        this.scheduler = scheduler;
    }
    ColdObservable.prototype.scheduleMessages = function (subscriber) {
        var messagesLength = this.messages.length;
        for (var i = 0; i < messagesLength; i++) {
            var message = this.messages[i];
            subscriber.add(this.scheduler.schedule(function (_a) {
                var message = _a.message, subscriber = _a.subscriber;
                message.notification.observe(subscriber);
            }, message.frame, { message: message, subscriber: subscriber }));
        }
    };
    return ColdObservable;
}(__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */]));
/*@__PURE__*/ Object(__WEBPACK_IMPORTED_MODULE_3__util_applyMixins__["a" /* applyMixins */])(ColdObservable, [__WEBPACK_IMPORTED_MODULE_2__SubscriptionLoggable__["a" /* SubscriptionLoggable */]]);
//# sourceMappingURL=ColdObservable.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/testing/HotObservable.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HotObservable; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Subscription__ = __webpack_require__("./node_modules/rxjs/_esm5/Subscription.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SubscriptionLoggable__ = __webpack_require__("./node_modules/rxjs/_esm5/testing/SubscriptionLoggable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_applyMixins__ = __webpack_require__("./node_modules/rxjs/_esm5/util/applyMixins.js");
/** PURE_IMPORTS_START .._Subject,.._Subscription,._SubscriptionLoggable,.._util_applyMixins PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};




/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var HotObservable = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(HotObservable, _super);
    function HotObservable(messages, scheduler) {
        _super.call(this);
        this.messages = messages;
        this.subscriptions = [];
        this.scheduler = scheduler;
    }
    HotObservable.prototype._subscribe = function (subscriber) {
        var subject = this;
        var index = subject.logSubscribedFrame();
        subscriber.add(new __WEBPACK_IMPORTED_MODULE_1__Subscription__["a" /* Subscription */](function () {
            subject.logUnsubscribedFrame(index);
        }));
        return _super.prototype._subscribe.call(this, subscriber);
    };
    HotObservable.prototype.setup = function () {
        var subject = this;
        var messagesLength = subject.messages.length;
        /* tslint:disable:no-var-keyword */
        for (var i = 0; i < messagesLength; i++) {
            (function () {
                var message = subject.messages[i];
                /* tslint:enable */
                subject.scheduler.schedule(function () { message.notification.observe(subject); }, message.frame);
            })();
        }
    };
    return HotObservable;
}(__WEBPACK_IMPORTED_MODULE_0__Subject__["b" /* Subject */]));
/*@__PURE__*/ Object(__WEBPACK_IMPORTED_MODULE_3__util_applyMixins__["a" /* applyMixins */])(HotObservable, [__WEBPACK_IMPORTED_MODULE_2__SubscriptionLoggable__["a" /* SubscriptionLoggable */]]);
//# sourceMappingURL=HotObservable.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/testing/SubscriptionLog.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubscriptionLog; });
var SubscriptionLog = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function SubscriptionLog(subscribedFrame, unsubscribedFrame) {
        if (unsubscribedFrame === void 0) {
            unsubscribedFrame = Number.POSITIVE_INFINITY;
        }
        this.subscribedFrame = subscribedFrame;
        this.unsubscribedFrame = unsubscribedFrame;
    }
    return SubscriptionLog;
}());
//# sourceMappingURL=SubscriptionLog.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/testing/SubscriptionLoggable.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubscriptionLoggable; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SubscriptionLog__ = __webpack_require__("./node_modules/rxjs/_esm5/testing/SubscriptionLog.js");
/** PURE_IMPORTS_START ._SubscriptionLog PURE_IMPORTS_END */

var SubscriptionLoggable = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function SubscriptionLoggable() {
        this.subscriptions = [];
    }
    SubscriptionLoggable.prototype.logSubscribedFrame = function () {
        this.subscriptions.push(new __WEBPACK_IMPORTED_MODULE_0__SubscriptionLog__["a" /* SubscriptionLog */](this.scheduler.now()));
        return this.subscriptions.length - 1;
    };
    SubscriptionLoggable.prototype.logUnsubscribedFrame = function (index) {
        var subscriptionLogs = this.subscriptions;
        var oldSubscriptionLog = subscriptionLogs[index];
        subscriptionLogs[index] = new __WEBPACK_IMPORTED_MODULE_0__SubscriptionLog__["a" /* SubscriptionLog */](oldSubscriptionLog.subscribedFrame, this.scheduler.now());
    };
    return SubscriptionLoggable;
}());
//# sourceMappingURL=SubscriptionLoggable.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/testing/TestScheduler.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export TestScheduler */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Notification__ = __webpack_require__("./node_modules/rxjs/_esm5/Notification.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ColdObservable__ = __webpack_require__("./node_modules/rxjs/_esm5/testing/ColdObservable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__HotObservable__ = __webpack_require__("./node_modules/rxjs/_esm5/testing/HotObservable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__SubscriptionLog__ = __webpack_require__("./node_modules/rxjs/_esm5/testing/SubscriptionLog.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__scheduler_VirtualTimeScheduler__ = __webpack_require__("./node_modules/rxjs/_esm5/scheduler/VirtualTimeScheduler.js");
/** PURE_IMPORTS_START .._Observable,.._Notification,._ColdObservable,._HotObservable,._SubscriptionLog,.._scheduler_VirtualTimeScheduler PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};






var defaultMaxFrame = 750;
var TestScheduler = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(TestScheduler, _super);
    function TestScheduler(assertDeepEqual) {
        _super.call(this, __WEBPACK_IMPORTED_MODULE_5__scheduler_VirtualTimeScheduler__["a" /* VirtualAction */], defaultMaxFrame);
        this.assertDeepEqual = assertDeepEqual;
        this.hotObservables = [];
        this.coldObservables = [];
        this.flushTests = [];
    }
    TestScheduler.prototype.createTime = function (marbles) {
        var indexOf = marbles.indexOf('|');
        if (indexOf === -1) {
            throw new Error('marble diagram for time should have a completion marker "|"');
        }
        return indexOf * TestScheduler.frameTimeFactor;
    };
    TestScheduler.prototype.createColdObservable = function (marbles, values, error) {
        if (marbles.indexOf('^') !== -1) {
            throw new Error('cold observable cannot have subscription offset "^"');
        }
        if (marbles.indexOf('!') !== -1) {
            throw new Error('cold observable cannot have unsubscription marker "!"');
        }
        var messages = TestScheduler.parseMarbles(marbles, values, error);
        var cold = new __WEBPACK_IMPORTED_MODULE_2__ColdObservable__["a" /* ColdObservable */](messages, this);
        this.coldObservables.push(cold);
        return cold;
    };
    TestScheduler.prototype.createHotObservable = function (marbles, values, error) {
        if (marbles.indexOf('!') !== -1) {
            throw new Error('hot observable cannot have unsubscription marker "!"');
        }
        var messages = TestScheduler.parseMarbles(marbles, values, error);
        var subject = new __WEBPACK_IMPORTED_MODULE_3__HotObservable__["a" /* HotObservable */](messages, this);
        this.hotObservables.push(subject);
        return subject;
    };
    TestScheduler.prototype.materializeInnerObservable = function (observable, outerFrame) {
        var _this = this;
        var messages = [];
        observable.subscribe(function (value) {
            messages.push({ frame: _this.frame - outerFrame, notification: __WEBPACK_IMPORTED_MODULE_1__Notification__["a" /* Notification */].createNext(value) });
        }, function (err) {
            messages.push({ frame: _this.frame - outerFrame, notification: __WEBPACK_IMPORTED_MODULE_1__Notification__["a" /* Notification */].createError(err) });
        }, function () {
            messages.push({ frame: _this.frame - outerFrame, notification: __WEBPACK_IMPORTED_MODULE_1__Notification__["a" /* Notification */].createComplete() });
        });
        return messages;
    };
    TestScheduler.prototype.expectObservable = function (observable, unsubscriptionMarbles) {
        var _this = this;
        if (unsubscriptionMarbles === void 0) {
            unsubscriptionMarbles = null;
        }
        var actual = [];
        var flushTest = { actual: actual, ready: false };
        var unsubscriptionFrame = TestScheduler
            .parseMarblesAsSubscriptions(unsubscriptionMarbles).unsubscribedFrame;
        var subscription;
        this.schedule(function () {
            subscription = observable.subscribe(function (x) {
                var value = x;
                // Support Observable-of-Observables
                if (x instanceof __WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */]) {
                    value = _this.materializeInnerObservable(value, _this.frame);
                }
                actual.push({ frame: _this.frame, notification: __WEBPACK_IMPORTED_MODULE_1__Notification__["a" /* Notification */].createNext(value) });
            }, function (err) {
                actual.push({ frame: _this.frame, notification: __WEBPACK_IMPORTED_MODULE_1__Notification__["a" /* Notification */].createError(err) });
            }, function () {
                actual.push({ frame: _this.frame, notification: __WEBPACK_IMPORTED_MODULE_1__Notification__["a" /* Notification */].createComplete() });
            });
        }, 0);
        if (unsubscriptionFrame !== Number.POSITIVE_INFINITY) {
            this.schedule(function () { return subscription.unsubscribe(); }, unsubscriptionFrame);
        }
        this.flushTests.push(flushTest);
        return {
            toBe: function (marbles, values, errorValue) {
                flushTest.ready = true;
                flushTest.expected = TestScheduler.parseMarbles(marbles, values, errorValue, true);
            }
        };
    };
    TestScheduler.prototype.expectSubscriptions = function (actualSubscriptionLogs) {
        var flushTest = { actual: actualSubscriptionLogs, ready: false };
        this.flushTests.push(flushTest);
        return {
            toBe: function (marbles) {
                var marblesArray = (typeof marbles === 'string') ? [marbles] : marbles;
                flushTest.ready = true;
                flushTest.expected = marblesArray.map(function (marbles) {
                    return TestScheduler.parseMarblesAsSubscriptions(marbles);
                });
            }
        };
    };
    TestScheduler.prototype.flush = function () {
        var hotObservables = this.hotObservables;
        while (hotObservables.length > 0) {
            hotObservables.shift().setup();
        }
        _super.prototype.flush.call(this);
        var readyFlushTests = this.flushTests.filter(function (test) { return test.ready; });
        while (readyFlushTests.length > 0) {
            var test = readyFlushTests.shift();
            this.assertDeepEqual(test.actual, test.expected);
        }
    };
    TestScheduler.parseMarblesAsSubscriptions = function (marbles) {
        if (typeof marbles !== 'string') {
            return new __WEBPACK_IMPORTED_MODULE_4__SubscriptionLog__["a" /* SubscriptionLog */](Number.POSITIVE_INFINITY);
        }
        var len = marbles.length;
        var groupStart = -1;
        var subscriptionFrame = Number.POSITIVE_INFINITY;
        var unsubscriptionFrame = Number.POSITIVE_INFINITY;
        for (var i = 0; i < len; i++) {
            var frame = i * this.frameTimeFactor;
            var c = marbles[i];
            switch (c) {
                case '-':
                case ' ':
                    break;
                case '(':
                    groupStart = frame;
                    break;
                case ')':
                    groupStart = -1;
                    break;
                case '^':
                    if (subscriptionFrame !== Number.POSITIVE_INFINITY) {
                        throw new Error('found a second subscription point \'^\' in a ' +
                            'subscription marble diagram. There can only be one.');
                    }
                    subscriptionFrame = groupStart > -1 ? groupStart : frame;
                    break;
                case '!':
                    if (unsubscriptionFrame !== Number.POSITIVE_INFINITY) {
                        throw new Error('found a second subscription point \'^\' in a ' +
                            'subscription marble diagram. There can only be one.');
                    }
                    unsubscriptionFrame = groupStart > -1 ? groupStart : frame;
                    break;
                default:
                    throw new Error('there can only be \'^\' and \'!\' markers in a ' +
                        'subscription marble diagram. Found instead \'' + c + '\'.');
            }
        }
        if (unsubscriptionFrame < 0) {
            return new __WEBPACK_IMPORTED_MODULE_4__SubscriptionLog__["a" /* SubscriptionLog */](subscriptionFrame);
        }
        else {
            return new __WEBPACK_IMPORTED_MODULE_4__SubscriptionLog__["a" /* SubscriptionLog */](subscriptionFrame, unsubscriptionFrame);
        }
    };
    TestScheduler.parseMarbles = function (marbles, values, errorValue, materializeInnerObservables) {
        if (materializeInnerObservables === void 0) {
            materializeInnerObservables = false;
        }
        if (marbles.indexOf('!') !== -1) {
            throw new Error('conventional marble diagrams cannot have the ' +
                'unsubscription marker "!"');
        }
        var len = marbles.length;
        var testMessages = [];
        var subIndex = marbles.indexOf('^');
        var frameOffset = subIndex === -1 ? 0 : (subIndex * -this.frameTimeFactor);
        var getValue = typeof values !== 'object' ?
            function (x) { return x; } :
            function (x) {
                // Support Observable-of-Observables
                if (materializeInnerObservables && values[x] instanceof __WEBPACK_IMPORTED_MODULE_2__ColdObservable__["a" /* ColdObservable */]) {
                    return values[x].messages;
                }
                return values[x];
            };
        var groupStart = -1;
        for (var i = 0; i < len; i++) {
            var frame = i * this.frameTimeFactor + frameOffset;
            var notification = void 0;
            var c = marbles[i];
            switch (c) {
                case '-':
                case ' ':
                    break;
                case '(':
                    groupStart = frame;
                    break;
                case ')':
                    groupStart = -1;
                    break;
                case '|':
                    notification = __WEBPACK_IMPORTED_MODULE_1__Notification__["a" /* Notification */].createComplete();
                    break;
                case '^':
                    break;
                case '#':
                    notification = __WEBPACK_IMPORTED_MODULE_1__Notification__["a" /* Notification */].createError(errorValue || 'error');
                    break;
                default:
                    notification = __WEBPACK_IMPORTED_MODULE_1__Notification__["a" /* Notification */].createNext(getValue(c));
                    break;
            }
            if (notification) {
                testMessages.push({ frame: groupStart > -1 ? groupStart : frame, notification: notification });
            }
        }
        return testMessages;
    };
    return TestScheduler;
}(__WEBPACK_IMPORTED_MODULE_5__scheduler_VirtualTimeScheduler__["b" /* VirtualTimeScheduler */]));
//# sourceMappingURL=TestScheduler.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/util/AnimationFrame.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RequestAnimationFrameDefinition */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnimationFrame; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__root__ = __webpack_require__("./node_modules/rxjs/_esm5/util/root.js");
/** PURE_IMPORTS_START ._root PURE_IMPORTS_END */

var RequestAnimationFrameDefinition = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function RequestAnimationFrameDefinition(root) {
        if (root.requestAnimationFrame) {
            this.cancelAnimationFrame = root.cancelAnimationFrame.bind(root);
            this.requestAnimationFrame = root.requestAnimationFrame.bind(root);
        }
        else if (root.mozRequestAnimationFrame) {
            this.cancelAnimationFrame = root.mozCancelAnimationFrame.bind(root);
            this.requestAnimationFrame = root.mozRequestAnimationFrame.bind(root);
        }
        else if (root.webkitRequestAnimationFrame) {
            this.cancelAnimationFrame = root.webkitCancelAnimationFrame.bind(root);
            this.requestAnimationFrame = root.webkitRequestAnimationFrame.bind(root);
        }
        else if (root.msRequestAnimationFrame) {
            this.cancelAnimationFrame = root.msCancelAnimationFrame.bind(root);
            this.requestAnimationFrame = root.msRequestAnimationFrame.bind(root);
        }
        else if (root.oRequestAnimationFrame) {
            this.cancelAnimationFrame = root.oCancelAnimationFrame.bind(root);
            this.requestAnimationFrame = root.oRequestAnimationFrame.bind(root);
        }
        else {
            this.cancelAnimationFrame = root.clearTimeout.bind(root);
            this.requestAnimationFrame = function (cb) { return root.setTimeout(cb, 1000 / 60); };
        }
    }
    return RequestAnimationFrameDefinition;
}());
var AnimationFrame = /*@__PURE__*/ new RequestAnimationFrameDefinition(__WEBPACK_IMPORTED_MODULE_0__root__["a" /* root */]);
//# sourceMappingURL=AnimationFrame.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/util/Immediate.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ImmediateDefinition */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Immediate; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__root__ = __webpack_require__("./node_modules/rxjs/_esm5/util/root.js");
/**
Some credit for this helper goes to http://github.com/YuzuJS/setImmediate
*/
/** PURE_IMPORTS_START ._root PURE_IMPORTS_END */

var ImmediateDefinition = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function ImmediateDefinition(root) {
        this.root = root;
        if (root.setImmediate && typeof root.setImmediate === 'function') {
            this.setImmediate = root.setImmediate.bind(root);
            this.clearImmediate = root.clearImmediate.bind(root);
        }
        else {
            this.nextHandle = 1;
            this.tasksByHandle = {};
            this.currentlyRunningATask = false;
            // Don't get fooled by e.g. browserify environments.
            if (this.canUseProcessNextTick()) {
                // For Node.js before 0.9
                this.setImmediate = this.createProcessNextTickSetImmediate();
            }
            else if (this.canUsePostMessage()) {
                // For non-IE10 modern browsers
                this.setImmediate = this.createPostMessageSetImmediate();
            }
            else if (this.canUseMessageChannel()) {
                // For web workers, where supported
                this.setImmediate = this.createMessageChannelSetImmediate();
            }
            else if (this.canUseReadyStateChange()) {
                // For IE 6–8
                this.setImmediate = this.createReadyStateChangeSetImmediate();
            }
            else {
                // For older browsers
                this.setImmediate = this.createSetTimeoutSetImmediate();
            }
            var ci = function clearImmediate(handle) {
                delete clearImmediate.instance.tasksByHandle[handle];
            };
            ci.instance = this;
            this.clearImmediate = ci;
        }
    }
    ImmediateDefinition.prototype.identify = function (o) {
        return this.root.Object.prototype.toString.call(o);
    };
    ImmediateDefinition.prototype.canUseProcessNextTick = function () {
        return this.identify(this.root.process) === '[object process]';
    };
    ImmediateDefinition.prototype.canUseMessageChannel = function () {
        return Boolean(this.root.MessageChannel);
    };
    ImmediateDefinition.prototype.canUseReadyStateChange = function () {
        var document = this.root.document;
        return Boolean(document && 'onreadystatechange' in document.createElement('script'));
    };
    ImmediateDefinition.prototype.canUsePostMessage = function () {
        var root = this.root;
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `root.postMessage` means something completely different and can't be used for this purpose.
        if (root.postMessage && !root.importScripts) {
            var postMessageIsAsynchronous_1 = true;
            var oldOnMessage = root.onmessage;
            root.onmessage = function () {
                postMessageIsAsynchronous_1 = false;
            };
            root.postMessage('', '*');
            root.onmessage = oldOnMessage;
            return postMessageIsAsynchronous_1;
        }
        return false;
    };
    // This function accepts the same arguments as setImmediate, but
    // returns a function that requires no arguments.
    ImmediateDefinition.prototype.partiallyApplied = function (handler) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var fn = function result() {
            var _a = result, handler = _a.handler, args = _a.args;
            if (typeof handler === 'function') {
                handler.apply(undefined, args);
            }
            else {
                (new Function('' + handler))();
            }
        };
        fn.handler = handler;
        fn.args = args;
        return fn;
    };
    ImmediateDefinition.prototype.addFromSetImmediateArguments = function (args) {
        this.tasksByHandle[this.nextHandle] = this.partiallyApplied.apply(undefined, args);
        return this.nextHandle++;
    };
    ImmediateDefinition.prototype.createProcessNextTickSetImmediate = function () {
        var fn = function setImmediate() {
            var instance = setImmediate.instance;
            var handle = instance.addFromSetImmediateArguments(arguments);
            instance.root.process.nextTick(instance.partiallyApplied(instance.runIfPresent, handle));
            return handle;
        };
        fn.instance = this;
        return fn;
    };
    ImmediateDefinition.prototype.createPostMessageSetImmediate = function () {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages
        var root = this.root;
        var messagePrefix = 'setImmediate$' + root.Math.random() + '$';
        var onGlobalMessage = function globalMessageHandler(event) {
            var instance = globalMessageHandler.instance;
            if (event.source === root &&
                typeof event.data === 'string' &&
                event.data.indexOf(messagePrefix) === 0) {
                instance.runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };
        onGlobalMessage.instance = this;
        root.addEventListener('message', onGlobalMessage, false);
        var fn = function setImmediate() {
            var _a = setImmediate, messagePrefix = _a.messagePrefix, instance = _a.instance;
            var handle = instance.addFromSetImmediateArguments(arguments);
            instance.root.postMessage(messagePrefix + handle, '*');
            return handle;
        };
        fn.instance = this;
        fn.messagePrefix = messagePrefix;
        return fn;
    };
    ImmediateDefinition.prototype.runIfPresent = function (handle) {
        // From the spec: 'Wait until any invocations of this algorithm started before this one have completed.'
        // So if we're currently running a task, we'll need to delay this invocation.
        if (this.currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // 'too much recursion' error.
            this.root.setTimeout(this.partiallyApplied(this.runIfPresent, handle), 0);
        }
        else {
            var task = this.tasksByHandle[handle];
            if (task) {
                this.currentlyRunningATask = true;
                try {
                    task();
                }
                finally {
                    this.clearImmediate(handle);
                    this.currentlyRunningATask = false;
                }
            }
        }
    };
    ImmediateDefinition.prototype.createMessageChannelSetImmediate = function () {
        var _this = this;
        var channel = new this.root.MessageChannel();
        channel.port1.onmessage = function (event) {
            var handle = event.data;
            _this.runIfPresent(handle);
        };
        var fn = function setImmediate() {
            var _a = setImmediate, channel = _a.channel, instance = _a.instance;
            var handle = instance.addFromSetImmediateArguments(arguments);
            channel.port2.postMessage(handle);
            return handle;
        };
        fn.channel = channel;
        fn.instance = this;
        return fn;
    };
    ImmediateDefinition.prototype.createReadyStateChangeSetImmediate = function () {
        var fn = function setImmediate() {
            var instance = setImmediate.instance;
            var root = instance.root;
            var doc = root.document;
            var html = doc.documentElement;
            var handle = instance.addFromSetImmediateArguments(arguments);
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement('script');
            script.onreadystatechange = function () {
                instance.runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
            return handle;
        };
        fn.instance = this;
        return fn;
    };
    ImmediateDefinition.prototype.createSetTimeoutSetImmediate = function () {
        var fn = function setImmediate() {
            var instance = setImmediate.instance;
            var handle = instance.addFromSetImmediateArguments(arguments);
            instance.root.setTimeout(instance.partiallyApplied(instance.runIfPresent, handle), 0);
            return handle;
        };
        fn.instance = this;
        return fn;
    };
    return ImmediateDefinition;
}());
var Immediate = /*@__PURE__*/ new ImmediateDefinition(__WEBPACK_IMPORTED_MODULE_0__root__["a" /* root */]);
//# sourceMappingURL=Immediate.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/util/applyMixins.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = applyMixins;
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function applyMixins(derivedCtor, baseCtors) {
    for (var i = 0, len = baseCtors.length; i < len; i++) {
        var baseCtor = baseCtors[i];
        var propertyKeys = Object.getOwnPropertyNames(baseCtor.prototype);
        for (var j = 0, len2 = propertyKeys.length; j < len2; j++) {
            var name_1 = propertyKeys[j];
            derivedCtor.prototype[name_1] = baseCtor.prototype[name_1];
        }
    }
}
//# sourceMappingURL=applyMixins.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/util/assign.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export assignImpl */
/* unused harmony export getAssign */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return assign; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__root__ = __webpack_require__("./node_modules/rxjs/_esm5/util/root.js");
/** PURE_IMPORTS_START ._root PURE_IMPORTS_END */

function assignImpl(target) {
    var sources = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        sources[_i - 1] = arguments[_i];
    }
    var len = sources.length;
    for (var i = 0; i < len; i++) {
        var source = sources[i];
        for (var k in source) {
            if (source.hasOwnProperty(k)) {
                target[k] = source[k];
            }
        }
    }
    return target;
}
;
function getAssign(root) {
    return root.Object.assign || assignImpl;
}
var assign = /*@__PURE__*/ getAssign(__WEBPACK_IMPORTED_MODULE_0__root__["a" /* root */]);
//# sourceMappingURL=assign.js.map


/***/ }),

/***/ "./src/app/theme/pages/default/hr/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "Dashboard"

/***/ }),

/***/ "./src/app/theme/pages/default/hr/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

//import { ModalDismissReasons, NgbDateStruct, NgbModal } from "@ng-bootstrap/ng-bootstrap";
var now = new Date();
var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: ".m-grid__item.m-grid__item--fluid.m-wrapper",
            template: __webpack_require__("./src/app/theme/pages/default/hr/dashboard/dashboard.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None,
        })
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/theme/pages/default/hr/directory/directory.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/theme/pages/default/hr/directory/directory.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DirectoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

//import { ModalDismissReasons, NgbDateStruct, NgbModal } from "@ng-bootstrap/ng-bootstrap";
var now = new Date();
var DirectoryComponent = (function () {
    function DirectoryComponent() {
    }
    DirectoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: ".m-grid__item.m-grid__item--fluid.m-wrapper",
            template: __webpack_require__("./src/app/theme/pages/default/hr/directory/directory.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None,
        })
    ], DirectoryComponent);
    return DirectoryComponent;
}());



/***/ }),

/***/ "./src/app/theme/pages/default/hr/email/broadcast/broadcast.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/theme/pages/default/hr/email/broadcast/broadcast.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BroadCastComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

//import { ModalDismissReasons, NgbDateStruct, NgbModal } from "@ng-bootstrap/ng-bootstrap";
var now = new Date();
var BroadCastComponent = (function () {
    function BroadCastComponent() {
    }
    BroadCastComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: ".m-grid__item.m-grid__item--fluid.m-wrapper",
            template: __webpack_require__("./src/app/theme/pages/default/hr/email/broadcast/broadcast.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None,
        })
    ], BroadCastComponent);
    return BroadCastComponent;
}());



/***/ }),

/***/ "./src/app/theme/pages/default/hr/email/bulkemail/bulkemail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"m-content\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"m-portlet m-portlet--tabs m-portlet--success m-portlet--head-solid-bg m-portlet--head-sm\">\r\n                <div class=\"m-portlet__head\">\r\n                    <div class=\"m-portlet__head-caption\">\r\n                    <div class=\"m-portlet__head-title\">\r\n                        <h3 class=\"m-portlet__head-text\">\r\n                            E-Mail\r\n                            <small>\r\n                            </small>\r\n                        </h3>\r\n                    </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"m-portlet__body\">\r\n                    <div class=\"m-section\">\r\n                        <div class=\"m-section__content\">\r\n                            <form class=\"m-form m-form--label-align-right\" (ngSubmit)=\"femail.valid && sendEmail(femail)\" #femail=\"ngForm\" novalidate=\"novalidate\">\r\n                                <div class=\"m-form__section m-form__section--first\">   \r\n                                    <div class=\"form-group m-form__group row\">\r\n                                        <label class=\"col-lg-2 col-form-label\">\r\n                                            To\r\n                                        </label>\r\n                                        <div class=\"col-lg-8\">\r\n                                            <!-- [separatorKeyCodes]=\"[188]\" -->\r\n\t\t\t\t\t\t\t\t\t\t\t<!-- <textarea style=\"resize:none\" class=\"form-control m-input m-input--air\" id=\"exampleTextarea\" placeholder=\"separate emails by (,)\" rows=\"3\"></textarea> -->\r\n                                            <tag-input  name=\"toemail\"  [editable]=\"true\" [placeholder]=\"[]\" [ripple]=\"true\"  [modelAsStrings]=\"true\"  [(ngModel)]=\"bulkemail.toEmail\"></tag-input>\r\n                                            <!-- <input class=\"form-control m-input m-input--air\" name=\"email\" [(ngModel)]=\"bulkemail.toemail\" type=\"text\"> -->\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"m-form__section m-form__section--first\">   \r\n                                    <div class=\"form-group m-form__group row\">\r\n                                        <label class=\"col-lg-2 col-form-label\">\r\n                                            Subject\r\n                                        </label>\r\n                                        <div class=\"col-lg-8\">\r\n                                            <input class=\"form-control m-input m-input--air\" name=\"subject\" [(ngModel)]=\"bulkemail.subject\" type=\"text\">\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"m-form__section m-form__section--first\">   \r\n                                        <div class=\"form-group m-form__group row\">\r\n                                            <label class=\"col-lg-2 col-form-label\">\r\n                                                Message\r\n                                            </label>\r\n                                            <div class=\"col-lg-8\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<summernote name=\"test\" [(ngModel)]=\"bulkemail.htmlBody\" [options]=\"options\" [disabled]=\"disabled\"></summernote>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <button type=\"submit\" >Send</button>\r\n                                <div class=\"m-form__seperator m-form__seperator--dashed\"></div>\r\n                            </form>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/theme/pages/default/hr/email/bulkemail/bulkemail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BulkEmailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_services_common_service__ = __webpack_require__("./src/app/base/_services/common.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_services_authService_service__ = __webpack_require__("./src/app/base/_services/authService.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_sweetalert2__ = __webpack_require__("./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_sweetalert2__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var BulkEmailComponent = (function () {
    // options = {
    //     height: 300,
    //     focus: true,
    //     airMode: false,
    //     toolbar: [
    //             ['edit', ['undo', 'redo']],
    //             ['headline', ['style']],
    //             ['style', ['bold', 'italic', 'underline', 'superscript', 'subscript', 'strikethrough', 'clear']],
    //             ['fontface', ['fontname']],
    //             ['textsize', ['fontsize']],
    //             ['fontclr', ['color']],
    //             ['alignment', ['ul', 'ol', 'paragraph', 'lineheight']],
    //             ['height', ['height']],
    //             ['table', ['table']],
    //             ['insert', ['link', 'picture', 'video', 'hr']],
    //             ['view', ['fullscreen', 'codeview']],
    //             ['help', ['help']]
    //     ]
    // };
    function BulkEmailComponent(platformId, meta, title, _route, _router, _authService, _commonService) {
        this.platformId = platformId;
        this._route = _route;
        this._router = _router;
        this._authService = _authService;
        this._commonService = _commonService;
        this.disabled = false;
        this.bulkemail = {};
        this.options = {
            toolbar: [
                ['style', ['bold', 'italic', 'underline', 'clear']],
                ['font', ['strikethrough', 'superscript', 'subscript']],
                ['fontsize', ['fontsize']],
                ['color', ['color']],
                ['para', ['ul', 'ol', 'paragraph']],
                //['height', ['height']],
                ['insert', ['picture', 'link', 'video', 'table']]
            ],
            placeholder: "Enter Email Data"
        };
        title.setTitle('ADN HRIS | My Profile');
        meta.addTags([
            { name: 'author', content: '' },
            { name: 'keywords', content: 'Add new employee' },
            { name: 'description', content: 'Add new employee.' }
        ]);
    }
    BulkEmailComponent.prototype.ngOnInit = function () {
    };
    // modalOpen(content) {
    //     this.modalService.open(content).result.then((result) => {
    //         this.modalClose = `Closed with: ${result}`;
    //     }, (reason) => {
    //         this.modalClose = `Dismissed ${this.modalDismissReason(reason)}`;
    //     });
    // }
    // email validation here
    BulkEmailComponent.prototype.emailValidator = function (control) {
        var EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (control.value != "" && (control.value.length <= 5 || !EMAIL_REGEXP.test(control.value))) {
            return { "incorrectMailFormat": true };
        }
        return null;
    };
    BulkEmailComponent.prototype.sendEmail = function (form) {
        this._commonService.sendEmail(this.bulkemail)
            .subscribe(function (data) {
            if (data.ok) {
                __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default()("E-mail has been sent!", "", "success");
                form.resetForm();
            }
        }, function (error) {
        });
    };
    BulkEmailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: ".m-grid__item.m-grid__item--fluid.m-wrapper",
            template: __webpack_require__("./src/app/theme/pages/default/hr/email/bulkemail/bulkemail.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* PLATFORM_ID */])),
        __metadata("design:paramtypes", [Object,
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* Meta */], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["d" /* Title */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__base_services_authService_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__base_services_common_service__["a" /* CommonService */]])
    ], BulkEmailComponent);
    return BulkEmailComponent;
}());



/***/ }),

/***/ "./src/app/theme/pages/default/hr/employee/addEmployee/addEmployee.component.css":
/***/ (function(module, exports) {

module.exports = ".adn-form__group {\r\n    padding: 10px 0px 10px 0px;\r\n  }\r\n  \r\n  "

/***/ }),

/***/ "./src/app/theme/pages/default/hr/employee/addEmployee/addEmployee.component.html":
/***/ (function(module, exports) {

module.exports = " <div class=\"m-content\">\r\n\t<div class=\"row\">\r\n\t   <div class=\"col-md-12\">\r\n\t\t  <div class=\"m-portlet m-portlet--tabs m-portlet--success m-portlet--head-solid-bg m-portlet--head-sm\">\r\n\t\t\t <div class=\"m-portlet__head\">\r\n\t\t\t\t<div class=\"m-portlet__head-caption\">\r\n\t\t\t\t   <div class=\"m-portlet__head-title\">\r\n\t\t\t\t\t  <h3 class=\"m-portlet__head-text flaticon-user-add\">\r\n\t\t\t\t\t\t Add Employee\r\n\t\t\t\t\t\t <small>\r\n\t\t\t\t\t\t </small>\r\n\t\t\t\t\t  </h3>\r\n\t\t\t\t   </div>\r\n\t\t\t\t</div>\r\n\t\t\t </div>\r\n\t\t\t <div class=\"m-portlet__body\">\r\n\t\t\t\t<div class=\"tab-content\">\r\n\t\t\t\t   <div class=\"tab-pane active show\" id=\"m_tabs_9_1\" role=\"tabpanel\">\r\n\t\t\t\t\t  <form  class=\"m-form m-form--fit m-form--label-align-right\" (ngSubmit)=\"onAddEmpSubmit(faddemp)\" id=\"addEmployee\" #faddemp=\"ngForm\">\r\n\t\t\t\t\t  <div class=\"form-body\">\r\n\t\t\t\t\t\t <div class=\"row\">\r\n\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t   <div class=\"m-form__group form-group\">\r\n\t\t\t\t\t\t\t\t  <label for=\"form_control_1\">Full Name</label>\r\n\t\t\t\t\t\t\t\t  <span class=\"required\" aria-required=\"true\">* </span>\r\n\t\t\t\t\t\t\t\t  <input type=\"text\" class=\"form-control  m-input m-input--air name-input\" name=\"fullName\" id=\"fullName\" [(ngModel)]=\"addemp.fullName\" #fullName=\"ngModel\" [pattern]=\"'^[a-zA-Z]+(([\\'\\ \\.\\-][a-zA-Z])?[a-zA-Z]*)*$'\" required>\r\n\t\t\t\t\t\t\t\t  <div class=\"form-control-feedback has-danger\" *ngIf=\"!fullName.valid\">\r\n\t\t\t\t\t\t\t\t\t <span *ngIf=\"faddemp.submitted && !fullName.valid\">This field is required.</span>\r\n\t\t\t\t\t\t\t\t\t <span *ngIf=\"fullName.errors?.pattern\">special character is not allowed only space is allowed</span>\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t  <!-- <div [hidden]=\"name.valid || name.pristine ||!name.value\"\r\n\t\t\t\t\t\t\t\t\t class=\"alert alert-danger\">\r\n\t\t\t\t\t\t\t\t\t <div [hidden]=\"!name.hasError('pattern')\">Only alphabetsallowed</div>\r\n\t\t\t\t\t\t\t\t\t </div> -->\r\n\t\t\t\t\t\t\t   </div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t   <div class=\"m-form__group form-group\">\r\n\t\t\t\t\t\t\t\t  <label for=\"form_control_1\">Personal Email</label>\r\n\t\t\t\t\t\t\t\t  <span class=\"required\" aria-required=\"true\">* </span>\r\n\t\t\t\t\t\t\t\t  <input class=\"form-control m-input m-input--air\" name=\"personalEmail\" id=\"personalEmail\" [(ngModel)]=\"addemp.personalEmail\" (blur)=\"checkEmailExists(personalEmail)\" #personalEmail=\"ngModel\" placeholder=\"Please Enter Email\" [pattern]=\"'^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'\"  type=\"text\" required>\r\n\t\t\t\t\t\t\t\t  <div class=\"form-control-feedback has-danger\" *ngIf=\"!personalEmail.valid\">\r\n\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"faddemp.submitted && !personalEmail.valid\">This field is required.</span>\r\n\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"personalEmail.errors?.pattern\">Please enter email in proper format</span>\r\n\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"personalEmail.errors?.emailExists\">Email Address already exists.</span> \r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t   </div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t </div>\r\n\t\t\t\t\t\t <div class=\"row\">\r\n\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t   <div class=\"m-form__group form-group\">\r\n\t\t\t\t\t\t\t\t  <label for=\"form_control_1\">Mobile Number</label>\r\n\t\t\t\t\t\t\t\t  <span class=\"required\" aria-required=\"true\">* </span>\r\n\t\t\t\t\t\t\t\t  <input type=\"text\" class=\"form-control m-input m-input--air\" name=\"mobileNumber\" id=\"mobileNumber\" [(ngModel)]=\"addemp.personalMobileNumber\"  #mobileNumber=\"ngModel\" OnlyNumber=\"true\" maxlength=\"10\" required>\r\n\t\t\t\t\t\t\t\t  <div class=\"form-control-feedback has-danger\" *ngIf=\"!mobileNumber.valid\">\r\n\t\t\t\t\t\t\t\t\t<span *ngIf=\"faddemp.submitted && !mobileNumber.valid\">This field is required.</span>\r\n\t\t\t\t\t\t\t\t\t<span *ngIf=\"mobileNumber.errors?.maxlength\">Mobile number must be 10 digit max..</span>\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t   </div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t   <div class=\"m-form__group form-group\">\r\n\t\t\t\t\t\t\t\t  <label for=\"form_control_1\">Company Name</label>\r\n\t\t\t\t\t\t\t\t  <span class=\"required\" aria-required=\"true\"> * </span>\r\n\t\t\t\t\t\t\t\t  <ng-select class=\"m-input m-input--air\" name=\"companyName\" [items]=\"companiesData\" bindLabel=\"companyName\"  bindValue=\"_id\" placeholder=\"Select Company Name\" [(ngModel)]=\"addemp.company_id\"  #companyName=\"ngModel\" (change)=\"loadHRSpoce(addemp.company_id)\" [clearable]=\"false\" required></ng-select>\r\n\t\t\t\t\t\t\t\t  <div class=\"form-control-feedback has-danger\" *ngIf=\"faddemp.submitted && !companyName.valid \">\r\n\t\t\t\t\t\t\t\t\t This field is required.\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t   </div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t </div>\r\n\t\t\t\t\t\t <div class=\"row\">\r\n\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t   <div class=\"m-form__group form-group\">\r\n\t\t\t\t\t\t\t\t  <label for=\"form_control_1\">Division</label>\r\n\t\t\t\t\t\t\t\t  <span class=\"required\" aria-required=\"true\">* </span>\r\n\t\t\t\t\t\t\t\t  <ng-select class=\"m-input m-input--air\" name=\"division\" [items]=\"divisionData\" bindLabel=\"divisionName\"  bindValue=\"_id\" placeholder=\"Select Division\" (change)=\"loadDepartment(addemp.division_id)\"  [(ngModel)]=\"addemp.division_id\"  #division=\"ngModel\" (change)=\"loadDepartment(addemp.division_id)\" [clearable]=\"false\"  required></ng-select>\r\n\t\t\t\t\t\t\t\t  <div class=\"form-control-feedback has-danger\" *ngIf=\"faddemp.submitted && !division.valid \">\r\n\t\t\t\t\t\t\t\t\t This field is required.\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t   </div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t   <div class=\"m-form__group form-group\">\r\n\t\t\t\t\t\t\t\t  <label for=\"form_control_1\">Department</label>\r\n\t\t\t\t\t\t\t\t  <span class=\"required\" aria-required=\"true\">* </span>\r\n\t\t\t\t\t\t\t\t  <ng-select class=\"m-input m-input--air\" name=\"department\" [items]=\"deparmentData\" bindLabel=\"departmentName\"  bindValue=\"_id\" placeholder=\"Select Department\" (change)=\"loadVertical(addemp.department_id)\" [(ngModel)]=\"addemp.department_id\" [clearable]=\"false\"  #department=\"ngModel\" required></ng-select>\r\n\t\t\t\t\t\t\t\t  <div class=\"form-control-feedback has-danger\" *ngIf=\"faddemp.submitted && !department.valid \">\r\n\t\t\t\t\t\t\t\t\t This field is required.\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t   </div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t </div>\r\n\t\t\t\t\t\t <div class=\"row\">\r\n\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t   <div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t  <label for=\"form_control_1\">Vertical</label>\r\n\t\t\t\t\t\t\t\t  <ng-select class=\"m-input m-input--air\" name=\"vertical\" [items]=\"verticalData\" bindLabel=\"verticalName\"  bindValue=\"_id\" placeholder=\"Select Vertical\" (change)=\"loadSubVertical(addemp.vertical_id)\" [(ngModel)]=\"addemp.vertical_id\"  #vertical=\"ngModel\" ></ng-select>\r\n\t\t\t\t\t\t\t   </div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t   <div class=\"m-form__group form-group\">\r\n\t\t\t\t\t\t\t\t  <label for=\"form_control_1\">Sub Vertical</label>\r\n\t\t\t\t\t\t\t\t  <ng-select class=\"m-input m-input--air\" name=\"subVertical\" [items]=\"subverticalData\" bindLabel=\"subVerticalName\"  bindValue=\"_id\" placeholder=\"Select Sub Vertical\" [(ngModel)]=\"addemp.subVertical_id\"  #subVertical=\"ngModel\"></ng-select>\r\n\t\t\t\t\t\t\t   </div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t </div>\r\n\t\t\t\t\t\t <div class=\"row\">\r\n\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t   <div class=\"m-form__group form-group\">\r\n\t\t\t\t\t\t\t\t  <label for=\"form_control_1\">Management Type</label>\r\n\t\t\t\t\t\t\t\t  <span class=\"required\" aria-required=\"true\"> * </span>\r\n\t\t\t\t\t\t\t\t  <ng-select class=\"m-input m-input--air\" name=\"managementType\" [items]=\"managementTypeData\" bindLabel=\"managementTypeName\"  bindValue=\"_id\" placeholder=\"Select Management Type\" [(ngModel)]=\"addemp.managementType_id\" (change)=\"loadEmploymentType(addemp.managementType_id)\"  #managementType=\"ngModel\" [clearable]=\"false\" required></ng-select>\r\n\t\t\t\t\t\t\t\t  <div class=\"form-control-feedback has-danger\" *ngIf=\"faddemp.submitted && !managementType.valid \">\r\n\t\t\t\t\t\t\t\t\t This field is required.\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t   </div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t   <div class=\"m-form__group form-group\">\r\n\t\t\t\t\t\t\t\t  <label for=\"form_control_1\">Employment Type</label>\r\n\t\t\t\t\t\t\t\t  <span class=\"required\" aria-required=\"true\"> * </span>\r\n\t\t\t\t\t\t\t\t  <ng-select class=\"m-input m-input--air\" name=\"employmentType\" [items]=\"employmentTypeData\" bindLabel=\"employmentTypeName\"  bindValue=\"_id\" placeholder=\"Select Employment Type\" [(ngModel)]=\"addemp.employmentType_id\" (change)=\"loadGrade(addemp.managementType_id,addemp.employmentType_id)\"  #employmentType=\"ngModel\" [clearable]=\"false\" required></ng-select>\r\n\t\t\t\t\t\t\t\t  <div class=\"form-control-feedback has-danger\" *ngIf=\"faddemp.submitted && !employmentType.valid \">\r\n\t\t\t\t\t\t\t\t\t This field is required.\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t   </div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\" *ngIf=\"addemp.employmentType_id==1\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-form__group form-group\">\r\n\t\t\t\t\t\t\t\t\t   <label for=\"form_control_1\">Employment Status</label>\r\n\t\t\t\t\t\t\t\t\t   <span class=\"required\" aria-required=\"true\"> * </span>\r\n\t\t\t\t\t\t\t\t\t   <ng-select class=\"m-input m-input--air\" name=\"confirmationStatus\" [items]=\"employmentStatusData\" bindLabel=\"employmentStatusName\"  bindValue=\"_id\" placeholder=\"Select Confirmation/Probation Status\" [(ngModel)]=\"addemp.employmentStatus_id\"  #confirmationStatus=\"ngModel\" [clearable]=\"false\" required></ng-select>\r\n\t\t\t\t\t\t\t\t\t   <div class=\"form-control-feedback has-danger\" *ngIf=\"faddemp.submitted && !confirmationStatus.valid \">\r\n\t\t\t\t\t\t\t\t\t\t  This field is required.\r\n\t\t\t\t\t\t\t\t\t   </div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\" *ngIf=\"addemp.employmentType_id > 1\">\r\n\t\t\t\t\t\t\t   <div class=\"m-form__group form-group\">\r\n\t\t\t\t\t\t\t\t  <label for=\"form_control_1\">Tenure of Contract/Internship (in months)</label>\r\n\t\t\t\t\t\t\t\t  <span class=\"required\" aria-required=\"true\"> * </span>\r\n\t\t\t\t\t\t\t\t  <input type=\"text\" name=\"tenure\" id=\"tenure\" data-required=\"1\" class=\"form-control m-input m-input--air\" [(ngModel)]=\"addemp.tenureOfContract\" #tenure=\"ngModel\" OnlyNumber=\"true\">\r\n\t\t\t\t\t\t\t\t  <div class=\"form-control-feedback has-danger\" *ngIf=\"faddemp.submitted && !tenure.valid \">\r\n\t\t\t\t\t\t\t\t\t This field is required.\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t   </div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-form__group form-group\">\r\n\t\t\t\t\t\t\t\t\t   <label for=\"form_control_1\">Grade</label>\r\n\t\t\t\t\t\t\t\t\t   <span class=\"required\" aria-required=\"true\">* </span>\r\n\t\t\t\t\t\t\t\t\t   <ng-select class=\"m-input m-input--air\" name=\"employeeGrade\" [items]=\"gradeData\" bindLabel=\"gradeName\"  bindValue=\"_id\" placeholder=\"Select Grade\" (change)=\"loadDesignation(addemp.grade_id);loadSupervisor(addemp.grade_id)\" [(ngModel)]=\"addemp.grade_id\"  #employeeGrade=\"ngModel\" (change)=\"loadSupervisor(addemp.grade_id)\" [clearable]=\"false\"  required></ng-select>\r\n\t\t\t\t\t\t\t\t\t   <div class=\"form-control-feedback has-danger\" *ngIf=\"faddemp.submitted && !employeeGrade.valid \">\r\n\t\t\t\t\t\t\t\t\t\t  This field is required.\r\n\t\t\t\t\t\t\t\t\t   </div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t </div>\r\n\t\t\t\t\t\t <div class=\"row\">\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t\t   <div class=\"m-form__group form-group\">\r\n\t\t\t\t\t\t\t\t\t  <label for=\"form_control_1\">Designation</label>\r\n\t\t\t\t\t\t\t\t\t  <span class=\"required\" aria-required=\"true\">* </span>\r\n\t\t\t\t\t\t\t\t\t  <ng-select class=\"m-input m-input--air\" name=\"designation\" [items]=\"designationData\" bindLabel=\"designationName\"  bindValue=\"_id\" placeholder=\"Select Designation\" [(ngModel)]=\"addemp.designation_id\"  #designation=\"ngModel\" [clearable]=\"false\" required></ng-select>\r\n\t\t\t\t\t\t\t\t\t  <div class=\"form-control-feedback has-danger\" *ngIf=\"faddemp.submitted && !designation.valid \">\r\n\t\t\t\t\t\t\t\t\t\t This field is required.\r\n\t\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t   </div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-form__group form-group\">\r\n\t\t\t\t\t\t\t\t\t\t   <label for=\"form_control_1\">Job Title</label>\r\n\t\t\t\t\t\t\t\t\t\t   <input type=\"text\" name=\"jobTitle\" id=\"jobTitle\" data-required=\"1\" class=\"form-control m-input m-input--air\" [(ngModel)]=\"addemp.jobTitle\" [(ngModel)]=\"addemp.jobTitle\"  #jobTitle=\"ngModel\">\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t </div>\r\n\t\t\t\t\t\t        </div>\r\n\t\t\t\t\t\t <div class=\"row\">\r\n\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t   <div class=\"m-form__group form-group\">\r\n\t\t\t\t\t\t\t\t  <label for=\"form_control_1\">Supervisor</label>\r\n\t\t\t\t\t\t\t\t  <span class=\"required\" aria-required=\"true\"> * </span>\r\n\t\t\t\t\t\t\t\t  <ng-select class=\"m-input m-input--air\" name=\"primarySupervisorEmp\" [items]=\"supervisorData\" bindLabel=\"fullName\"  bindValue=\"_id\" placeholder=\"Select Supervisor\" [(ngModel)]=\"addemp.primarySupervisorEmp_id\"  #primarySupervisorEmp=\"ngModel\" [clearable]=\"false\" required></ng-select>\r\n\t\t\t\t\t\t\t\t  <div class=\"form-control-feedback has-danger\" *ngIf=\"faddemp.submitted && !primarySupervisorEmp.valid \">\r\n\t\t\t\t\t\t\t\t\t This field is required.\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t   </div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t   <div class=\"m-form__group form-group\">\r\n\t\t\t\t\t\t\t\t  <label for=\"form_control_1\">HR SPOC</label>\r\n\t\t\t\t\t\t\t\t  <span class=\"required\" aria-required=\"true\"> * </span>\r\n\t\t\t\t\t\t\t\t  <ng-select class=\"m-input m-input--air\" name=\"hrspoc\" [items]=\"hrspocData\" bindLabel=\"fullName\"  bindValue=\"_id\" placeholder=\"Select HR SPOC\" [(ngModel)]=\"addemp.hrspoc_id\"  #hrspoc=\"ngModel\" (change)=\"loadBuisnessHrHead(addemp.hrspoc_id)\" [clearable]=\"false\" required></ng-select>\r\n\t\t\t\t\t\t\t\t  <div class=\"form-control-feedback has-danger\" *ngIf=\"faddemp.submitted && !hrspoc.valid \">\r\n\t\t\t\t\t\t\t\t\t This field is required.\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t   </div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t </div>\r\n\t\t\t\t\t\t <div class=\"row\">\r\n\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t   <div class=\"m-form__group form-group\">\r\n\t\t\t\t\t\t\t\t  <label class=\"control-label\">Business HR Head\r\n\t\t\t\t\t\t\t\t  </label> \r\n\t\t\t\t\t\t\t\t  <span class=\"required\" aria-required=\"true\">* </span>                                                          \r\n\t\t\t\t\t\t\t\t  <ng-select class=\"m-input m-input--air\" name=\"businessHrHead\" [items]=\"buisnessHrHeadData\" bindLabel=\"fullName\"  bindValue=\"_id\" placeholder=\"Select Business HR Head\" [(ngModel)]=\"addemp.businessHrHead_id\"  #businessHrHead=\"ngModel\" (change)=\"loadGroupHrHead(addemp.businessHrHead_id)\" [clearable]=\"false\" required></ng-select>  \r\n\t\t\t\t\t\t\t\t  <div class=\"form-control-feedback has-danger\" *ngIf=\"faddemp.submitted && !businessHrHead.valid \">\r\n\t\t\t\t\t\t\t\t\t This field is required.\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t   </div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t   <div class=\"m-form__group form-group\">\r\n\t\t\t\t\t\t\t\t  <label class=\"control-label\">Group HR Head\r\n\t\t\t\t\t\t\t\t  </label>   \r\n\t\t\t\t\t\t\t\t  <span class=\"required\" aria-required=\"true\">* </span>\r\n\t\t\t\t\t\t\t\t  <ng-select class=\"m-input m-input--air\" name=\"groupHrHead\" [items]=\"groupHrHeadData\" bindLabel=\"fullName\"  bindValue=\"_id\" placeholder=\"Select Group HR Head\" [(ngModel)]=\"addemp.groupHrHead_id\"  #groupHrHead=\"ngModel\" [clearable]=\"false\" required></ng-select>\r\n\t\t\t\t\t\t\t\t  <div class=\"form-control-feedback has-danger\" *ngIf=\"faddemp.submitted && !groupHrHead.valid \">\r\n\t\t\t\t\t\t\t\t\t This field is required.\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t   </div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t </div>\t\t\t\t\t\t \r\n\t\t\t\t\t\t <!-- <div class=\"row\">\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-form__group form-group\">\r\n\t\t\t\t\t\t\t\t\t\t<label for=\"form_control_1\">User Role</label>\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"required\" aria-required=\"true\">* </span>\r\n\t\t\t\t\t\t\t\t\t\t<ng-select class=\"m-input m-input--air\" name=\"role\" [items]=\"rolesData\" [multiple]=\"true\" bindLabel=\"roleName\"  bindValue=\"_id\" placeholder=\"Select User Role\" [(ngModel)]=\"addemp.roles\"  #role=\"ngModel\" required></ng-select>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-control-feedback has-danger\" *ngIf=\"faddemp.submitted && !role.valid \">\r\n\t\t\t\t\t\t\t\t\t\t     This field is required.\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t </div> -->\r\n\t\t\t\t\t  </div>\r\n\t\t\t\t\t  <div class=\"form-actions\">\r\n\t\t\t\t\t\t <div class=\"row\">\r\n\t\t\t\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t\t\t   <div class=\"m-form__actions\">\r\n\t\t\t\t\t\t\t\t  <button class=\"btn btn-success submitForm\" type=\"submit\" id=\"submitForm\">Submit</button>\r\n\t\t\t\t\t\t\t\t  <button class=\"btn btn-secondary\" (click)=\"faddemp.resetForm();clearFormData();\" type=\"reset\">Reset</button>\r\n\t\t\t\t\t\t\t   </div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t </div>\r\n\t\t\t\t\t  </div>\r\n\t\t\t\t\t  </form>\r\n\t\t\t\t   </div>\r\n\t\t\t\t</div>\r\n\t\t\t </div>\r\n\t\t  </div>\r\n\t   </div>\r\n\t</div>\r\n </div>"

/***/ }),

/***/ "./src/app/theme/pages/default/hr/employee/addEmployee/addEmployee.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddEmployeeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_services_common_service__ = __webpack_require__("./src/app/base/_services/common.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__hr_service__ = __webpack_require__("./src/app/theme/pages/default/hr/hr.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_sweetalert2__ = __webpack_require__("./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_sweetalert2__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



//import { ModalDismissReasons, NgbDateStruct, NgbModal } from "@ng-bootstrap/ng-bootstrap";



var AddEmployeeComponent = (function () {
    function AddEmployeeComponent(platformId, meta, title, _route, _router, _commonService, _hrService) {
        this.platformId = platformId;
        this._route = _route;
        this._router = _router;
        this._commonService = _commonService;
        this._hrService = _hrService;
        this.addemp = {};
        //local dropdown data variable
        this.companiesData = [];
        this.divisionData = [];
        this.deparmentData = [];
        this.verticalData = [];
        this.subverticalData = [];
        this.gradeData = [];
        this.employmentTypeData = [];
        this.employmentStatusData = [];
        this.supervisorData = [];
        this.hrspocData = [];
        this.buisnessHrHeadData = [];
        this.groupHrHeadData = [];
        this.designationData = [];
        //rolesData: any = [];
        this.managementTypeData = [];
        title.setTitle('ADN HRIS | Add New Employee');
        meta.addTags([
            { name: 'author', content: '' },
            { name: 'keywords', content: 'Add new employee' },
            { name: 'description', content: 'Add new employee.' }
        ]);
    }
    AddEmployeeComponent.prototype.ngOnInit = function () {
        this.initDropdown();
    };
    //Filled Init Dropdown 
    AddEmployeeComponent.prototype.initDropdown = function () {
        this.loadCompanies();
        this.loadDivision();
        this.loadManagementType();
        this.loadEmploymentStatus();
        //this.loadRoles();
    };
    //load Roles Dropdown Data init
    // loadRoles() {
    //     this._commonService.getRole().subscribe(
    //         res => {
    //             if (res.ok) {
    //                 this.rolesData = res.json() || [];
    //             }
    //         },
    //         error => {
    //             this.rolesData = [];
    //         });
    // }
    //load Emoloyement Status Dropdown Data init
    AddEmployeeComponent.prototype.loadEmploymentStatus = function () {
        var _this = this;
        this._commonService.getEmploymentStatus()
            .subscribe(function (res) {
            if (res.ok) {
                _this.addemp.employmentStatus_id = null;
                _this.employmentStatusData = res.json();
            }
        }, function (error) {
            _this.employmentStatusData = [];
        });
    };
    //load Division Dropdown Data init
    AddEmployeeComponent.prototype.loadDivision = function () {
        var _this = this;
        this._commonService.getDivision()
            .subscribe(function (res) {
            if (res.ok) {
                _this.divisionData = res.json();
            }
        }, function (error) {
        });
    };
    //load Department Dropdown By divisonId 
    AddEmployeeComponent.prototype.loadDepartment = function (division_id) {
        var _this = this;
        this._commonService.getDepartment(division_id)
            .subscribe(function (res) {
            if (res.ok) {
                _this.addemp.department_id = null;
                _this.addemp.vertical_id = null;
                _this.addemp.subVertical_id = null;
                _this.verticalData = [];
                _this.subverticalData = [];
                _this.deparmentData = res.json();
            }
        }, function (error) {
        });
    };
    //load Vertical Dropdown By department_id 
    AddEmployeeComponent.prototype.loadVertical = function (department_id) {
        var _this = this;
        this._commonService.getVertical(department_id)
            .subscribe(function (res) {
            if (res.ok) {
                _this.addemp.vertical_id = null;
                _this.verticalData = res.json();
            }
        }, function (error) {
        });
    };
    //load SubVertical Dropdown By vertical_id 
    AddEmployeeComponent.prototype.loadSubVertical = function (vertical_id) {
        var _this = this;
        this._commonService.getSubVertical(vertical_id)
            .subscribe(function (res) {
            if (res.ok) {
                _this.addemp.subVertical_id = null;
                _this.subverticalData = res.json();
            }
        }, function (error) {
        });
    };
    //load Grade Dropdown  
    AddEmployeeComponent.prototype.loadManagementType = function () {
        var _this = this;
        this._commonService.getManagementType()
            .subscribe(function (res) {
            if (res.ok) {
                _this.employmentTypeData = [];
                _this.gradeData = [];
                _this.supervisorData = [];
                _this.designationData = [];
                _this.addemp.managementType_id = null;
                _this.addemp.employmentType_id = null;
                _this.addemp.grade_id = null;
                _this.addemp.primarySupervisorEmp_id = null;
                _this.addemp.designation_id = null;
                _this.managementTypeData = res.json();
            }
        }, function (error) {
        });
    };
    //load Employment Type By managementType_id 
    AddEmployeeComponent.prototype.loadEmploymentType = function (managementType_id) {
        var _this = this;
        this._commonService.getEmploymentType(managementType_id)
            .subscribe(function (res) {
            if (res.ok) {
                _this.gradeData = [];
                _this.supervisorData = [];
                _this.designationData = [];
                _this.addemp.employmentType_id = null;
                _this.addemp.grade_id = null;
                _this.addemp.primarySupervisorEmp_id = null;
                _this.addemp.designation_id = null;
                _this.employmentTypeData = res.json();
            }
        }, function (error) {
        });
    };
    //load Grade Dropdown By managementType_id  && employmentType_id
    AddEmployeeComponent.prototype.loadGrade = function (managementType_id, employmentType_id) {
        var _this = this;
        this._commonService.getGrade(managementType_id, employmentType_id)
            .subscribe(function (res) {
            if (res.ok) {
                _this.supervisorData = [];
                _this.designationData = [];
                _this.addemp.grade_id = null;
                _this.addemp.primarySupervisorEmp_id = null;
                _this.addemp.designation_id = null;
                _this.gradeData = res.json();
            }
        }, function (error) {
        });
    };
    //load Supervisor By grade_id
    AddEmployeeComponent.prototype.loadSupervisor = function (grade_id) {
        var _this = this;
        this._commonService.getSupervisor(grade_id)
            .subscribe(function (res) {
            if (res.ok) {
                _this.addemp.primarySupervisorEmp_id = null;
                _this.supervisorData = res.json();
            }
        }, function (error) {
        });
    };
    //load Designation By grade_id
    AddEmployeeComponent.prototype.loadDesignation = function (grade_id) {
        var _this = this;
        this._commonService.getDesignation(grade_id).subscribe(function (res) {
            if (res.ok) {
                _this.addemp.designation_id = null;
                _this.designationData = res.json();
            }
        }, function (error) {
        });
    };
    //load Companies Dropdown Data init
    AddEmployeeComponent.prototype.loadCompanies = function () {
        var _this = this;
        this._commonService.getComapnies()
            .subscribe(function (res) {
            if (res.ok) {
                _this.hrspocData = [];
                _this.buisnessHrHeadData = [];
                _this.groupHrHeadData = [];
                _this.addemp.company_id = null;
                _this.addemp.hrspoc_id = null;
                _this.addemp.businessHrHead_id = null;
                _this.addemp.groupHrHead_id = null;
                _this.companiesData = res.json();
            }
        }, function (error) {
        });
    };
    //load HR Spoce By company_id
    AddEmployeeComponent.prototype.loadHRSpoce = function (company_id) {
        var _this = this;
        this._commonService.getHrSpoce(company_id)
            .subscribe(function (res) {
            if (res.ok) {
                _this.buisnessHrHeadData = [];
                _this.groupHrHeadData = [];
                _this.addemp.hrspoc_id = null;
                _this.addemp.businessHrHead_id = null;
                _this.addemp.groupHrHead_id = null;
                _this.hrspocData = res.json();
            }
        }, function (error) {
        });
    };
    //load Buisness Hr Head By hrspoc_id
    AddEmployeeComponent.prototype.loadBuisnessHrHead = function (hrspoc_id) {
        var _this = this;
        this._commonService.getHrSpoce(this.addemp.company_id, hrspoc_id).subscribe(function (res) {
            if (res.ok) {
                _this.groupHrHeadData = [];
                _this.addemp.businessHrHead_id = null;
                _this.addemp.groupHrHead_id = null;
                _this.buisnessHrHeadData = res.json();
            }
        }, function (error) {
        });
    };
    //load Group Hr Head By hrspoc_id
    AddEmployeeComponent.prototype.loadGroupHrHead = function (businessHrHead_id) {
        var _this = this;
        this._commonService.getHrSpoce(this.addemp.company_id, businessHrHead_id).subscribe(function (res) {
            if (res.ok) {
                _this.addemp.groupHrHead_id = null;
                _this.groupHrHeadData = res.json();
            }
        }, function (error) {
        });
    };
    //Submit Add Employee Form
    AddEmployeeComponent.prototype.onAddEmpSubmit = function (form) {
        var _this = this;
        if (form.valid) {
            mApp.block('#m_tabs_9_1', {
                overlayColor: '#000000',
                type: 'loader',
                state: 'success',
            });
            //default roles of employee
            this.addemp.roles = [5];
            this._hrService.addEmployee(this.addemp).subscribe(function (data) {
                if (data.ok) {
                    mApp.unblock('#m_tabs_9_1');
                    __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default()("New Employee Created.", "Username:" + data.json().userName + " Welcome Email Sent!", "success");
                    //this.userName=data.json().userName;
                    form.resetForm();
                    _this.clearFormData();
                }
            }, function (error) {
                mApp.unblock('#m_tabs_9_1');
            });
        }
    };
    AddEmployeeComponent.prototype.checkEmailExists = function (_element) {
        if (_element.valid) {
            this._commonService.checkEmailExists(_element.value)
                .subscribe(function (data) {
                if (data.json())
                    _element.control.setErrors({ "emailExists": true });
            }, function (error) {
                _element.control.setErrors(null);
            });
        }
    };
    //Clear All Form Data 
    AddEmployeeComponent.prototype.clearFormData = function () {
        this.addemp = {};
        this.deparmentData = [];
        this.verticalData = [];
        this.subverticalData = [];
        this.gradeData = [];
        this.employmentTypeData = [];
        this.supervisorData = [];
        this.hrspocData = [];
        this.buisnessHrHeadData = [];
        this.groupHrHeadData = [];
        this.designationData = [];
    };
    AddEmployeeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: ".m-grid__item.m-grid__item--fluid.m-wrapper--addemployee",
            template: __webpack_require__("./src/app/theme/pages/default/hr/employee/addEmployee/addEmployee.component.html"),
            styles: [__webpack_require__("./src/app/theme/pages/default/hr/employee/addEmployee/addEmployee.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None,
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* PLATFORM_ID */])),
        __metadata("design:paramtypes", [Object,
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* Meta */], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["d" /* Title */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__base_services_common_service__["a" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_4__hr_service__["a" /* HrService */]])
    ], AddEmployeeComponent);
    return AddEmployeeComponent;
}());



/***/ }),

/***/ "./src/app/theme/pages/default/hr/employee/allEmployee/allEmployee.component.css":
/***/ (function(module, exports) {

module.exports = ".m-datatable.m-datatable--default>.paginationtemplate>.m-datatable__pager{margin-top:20px}.m-datatable.m-datatable--default>.paginationtemplate>.m-datatable__pager.m-datatable__pager--top{margin-bottom:20px}.m-datatable.m-datatable--default>.paginationtemplate>.m-datatable__pager>.m-datatable__pager-nav{margin:10px 0 0;padding:0;display:inline-block}.m-datatable.m-datatable--default>.paginationtemplate>.m-datatable__pager>.m-datatable__pager-nav>li{padding:0;margin-right:5px;display:inline-block}.m-datatable.m-datatable--default>.paginationtemplate>.m-datatable__pager>.m-datatable__pager-nav>li:last-child{margin-right:0}.m-datatable.m-datatable--default>.paginationtemplate>.m-datatable__pager>.m-datatable__pager-nav>li>.m-datatable__pager-link{cursor:pointer;height:2.25rem;width:2.25rem;padding:0;border-radius:50%;position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-moz-justify-content:center;-ms-justify-content:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-moz-align-items:center;-ms-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center;vertical-align:middle;font-size:1rem;line-height:1rem;font-weight:400;color:#898b96}.m-datatable.m-datatable--default>.paginationtemplate>.m-datatable__pager>.m-datatable__pager-nav>li>.m-datatable__pager-link>i{font-size:1rem;text-align:center;display:inline-block}.m-datatable.m-datatable--default>.m-datatable__pager>.m-datatable__pager-nav>li>.m-datatable__pager-link.m-datatable__pager-link--more-next,.m-datatable.m-datatable--default>.paginationtemplate>.m-datatable__pager>.m-datatable__pager-nav>li>.m-datatable__pager-link.m-datatable__pager-link--more-prev{font-weight:600}.m-datatable.m-datatable--default>.paginationtemplate>.m-datatable__pager>.m-datatable__pager-nav>li>.m-pager-input{height:2.25rem;width:3.5rem;text-align:center;border-radius:15px!important}.m-datatable.m-datatable--default>.paginationtemplate>.m-datatable__pager>.m-datatable__pager-info{float:right;margin-top:10px}.m-datatable.m-datatable--default>.paginationtemplate>.m-datatable__pager>.m-datatable__pager-info .m-datatable__pager-size{margin-right:10px}.m-datatable.m-datatable--default>.paginationtemplate>.m-datatable__pager>.m-datatable__pager-info .m-datatable__pager-size .btn.dropdown-toggle{border-radius:20px!important;height:2.25rem;padding:.45rem 1rem}.m-datatable.m-datatable--default>.paginationtemplate>.m-datatable__pager>.m-datatable__pager-info .m-datatable__pager-size .dropdown-menu.inner>li.selected>a span.check-mark{margin-top:-.6rem}.m-datatable.m-datatable--default .m-datatable__row-detail .m-datatable__detail>.m-datatable>.m-datatable__pager{margin-top:10px;padding:0 20px 15px}@media (max-width:768px){.m-datatable.m-datatable--default>.paginationtemplate>.m-datatable__pager>.m-datatable__pager-info{float:none;display:block;margin:10px 0 0}}.m-datatable.m-datatable--default>.m-datatable__pager>.m-datatable__pager-nav>li>.m-datatable__pager-link.m-datatable__pager-link--last,.m-datatable.m-datatable--default>.m-datatable__pager>.m-datatable__pager-nav>li>.m-datatable__pager-link.m-datatable__pager-link--next,.m-datatable.m-datatable--default>.m-datatable__pager>.m-datatable__pager-nav>li>.m-datatable__pager-link.m-datatable__pager-link--prev,.m-datatable.m-datatable--default>.paginationtemplate>.m-datatable__pager>.m-datatable__pager-nav>li>.m-datatable__pager-link.m-datatable__pager-link--first{color:#716aca;background:#edecf8}.m-datatable.m-datatable--default>.m-datatable__pager>.m-datatable__pager-nav>li>.m-datatable__pager-link.m-datatable__pager-link--last:hover,.m-datatable.m-datatable--default>.m-datatable__pager>.m-datatable__pager-nav>li>.m-datatable__pager-link.m-datatable__pager-link--next:hover,.m-datatable.m-datatable--default>.m-datatable__pager>.m-datatable__pager-nav>li>.m-datatable__pager-link.m-datatable__pager-link--prev:hover,.m-datatable.m-datatable--default>.paginationtemplate>.m-datatable__pager>.m-datatable__pager-nav>li>.m-datatable__pager-link.m-datatable__pager-link--first:hover{background:#deddf3}.m-datatable.m-datatable--default>.paginationtemplate>.m-datatable__pager>.m-datatable__pager-nav>li>.m-datatable__pager-link:hover{color:#716aca;background:#edecf8}.m-datatable.m-datatable--default>.paginationtemplate>.m-datatable__pager>.m-datatable__pager-nav>li>.m-datatable__pager-link.m-datatable__pager-link--active{background:#716aca;color:#fff}.m-datatable.m-datatable--default>.paginationtemplate>.m-datatable__pager>.m-datatable__pager-nav>li>.m-pager-input{background:#edecf8;border-color:#edecf8}.m-datatable.m-datatable--default>.paginationtemplate>.m-datatable__pager>.m-datatable__pager-nav>li>.m-pager-input:focus{background:#deddf3;border-color:#deddf3}.m-datatable.m-datatable--default>.paginationtemplate>.m-datatable__pager>.m-datatable__pager-info .m-datatable__pager-size .btn.dropdown-toggle{background:#edecf8;color:#3f4047}.m-datatable.m-datatable--default>.paginationtemplate>.m-datatable__pager>.m-datatable__pager-info .m-datatable__pager-size .btn.dropdown-toggle:hover{background:#deddf3}\r\n"

/***/ }),

/***/ "./src/app/theme/pages/default/hr/employee/allEmployee/allEmployee.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"m-content\">\r\n\t\t<div class=\"m-portlet m-portlet--mobile\">\r\n\t\t\t<div class=\"m-portlet__body\">\r\n\t\t\t\t<div class=\"m-form m-form--label-align-right m--margin-top-20 m--margin-bottom-30\">\r\n\t\t\t\t\t\t\t<div class=\"row align-items-center\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-xl-8 order-2 order-xl-1\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group row align-items-center\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-input-icon m-input-icon--left\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control m-input m-input--solid\" placeholder=\"Search...\" [(ngModel)]=\"search\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-input-icon__icon m-input-icon__icon--left\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"la la-search\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"m-datatable m-datatable--default m-datatable--brand m-datatable--loaded\">\r\n\t\t\t\t\t<!-- <table class=\"m-datatable__table\">\r\n\t\t\t\t\t\t<thead class=\"m-datatable__head\">\r\n\t\t\t\t\t\t\t<tr class=\"m-datatable__row\">\r\n\t\t\t\t\t\t\t\t<th class=\"m-datatable__cell\"></th>\r\n\t\t\t\t\t\t\t\t<th (click)=\"sort(title)\" class=\"m-datatable__cell m-datatable__cell--sort\" *ngFor=\"let title of (employeeData[0] | keys)\">\r\n\t\t\t\t\t\t\t\t\t<span>\r\n\t\t\t\t\t\t\t\t\t\t{{getColumnName(title)}}\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"la\" *ngIf=\"key == title\" [ngClass]=\"{'la-arrow-up':reverse,'la-arrow-down':!reverse}\"></i>\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</th>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t    <tbody class=\"m-datatable__body\">\r\n\t\t\t\t\t\t\t<tr class=\"m-datatable__row\" [ngClass]=\"{'m-datatable__row--even':!even}\" *ngFor=\"let employee of employeeData | orderBy: key : reverse | filter:search | paginate: { itemsPerPage: 8, currentPage: p2 };let even=even;\">\r\n\t\t\t\t\t\t\t\t<td class=\"m-datatable__cell m-datatable__cell--sort\">\r\n\t\t\t\t\t\t\t\t\t\t<a align=\"center\" routerLink=\"/my/profile-edit\" [queryParams]=\"{ id: employee._id , tabName:'office' }\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-expand\"></i>\r\n\t\t\t\t\t\t\t\t\t   </a>\r\n\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t<td class=\"m-datatable__cell\" *ngFor=\"let empkey of employee | keys \">\r\n\t\t\t\t\t\t\t\t\t<span>{{employee[empkey]}}</span>\r\n\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t</table> -->\r\n                    <table class=\"m-datatable__table\">\r\n\t\t\t\t\t\t\t<thead class=\"m-datatable__head\">\r\n\t\t\t\t\t\t\t\t\t<tr class=\"m-datatable__row\">\r\n\t\t\t\t\t\t\t\t\t\t<th class=\"m-datatable__cell\" width=\"5%\" ></th>\r\n\t\t\t\t\t\t\t\t\t\t<th (click)=\"sort('fullName')\" class=\"m-datatable__cell m-datatable__cell--sort\" width=\"25%\" >\r\n\t\t\t\t\t\t\t\t\t\t\t<span>\r\n\t\t\t\t\t\t\t\t\t\t\t NAME\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"la\" *ngIf=\"key == 'fullName'\" [ngClass]=\"{'la-arrow-up':reverse,'la-arrow-down':!reverse}\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</th>\r\n\t\t\t\t\t\t\t\t\t\t<th (click)=\"sort('officeEmail')\" class=\"m-datatable__cell m-datatable__cell--sort\" width=\"25%\" >\r\n\t\t\t\t\t\t\t\t\t\t\t<span>\r\n\t\t\t\t\t\t\t\t\t\t\tEMAIL\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"la\" *ngIf=\"key == 'officeEmail'\" [ngClass]=\"{'la-arrow-up':reverse,'la-arrow-down':!reverse}\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</th>\r\n\t\t\t\t\t\t\t\t\t\t<th (click)=\"sort('designation')\" class=\"m-datatable__cell m-datatable__cell--sort\" width=\"20%\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span>\r\n\t\t\t\t\t\t\t\t\t\t\tDESIGNATION \r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"la\" *ngIf=\"key == 'designation'\" [ngClass]=\"{'la-arrow-up':reverse,'la-arrow-down':!reverse}\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</th>\r\n\t\t\t\t\t\t\t\t\t\t<th (click)=\"sort('supervisor')\" class=\"m-datatable__cell m-datatable__cell--sort\" width=\"25%\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tSUPERVISOR  \r\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"la\" *ngIf=\"key == 'supervisor'\" [ngClass]=\"{'la-arrow-up':reverse,'la-arrow-down':!reverse}\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t</th>\r\n\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t\t<tbody class=\"m-datatable__body\">\r\n                              <tr class=\"m-datatable__row\" [ngClass]=\"{'m-datatable__row--even':!even}\" *ngFor=\"let employee of employeeData | orderBy: key : reverse | filter:search | paginate: { itemsPerPage: 8, currentPage: p2 };let even=even;\">\r\n\t\t\t\t\t\t\t\t   <td class=\"m-datatable__cell\" width=\"5%\" >\r\n\t\t\t\t\t\t\t\t\t\t<a align=\"center\" routerLink=\"/my/profile-edit\" [queryParams]=\"{ id: employee._id , tabName:'office' }\">\r\n\t\t\t\t\t\t\t\t\t\t  <img *ngIf=\"employee?.profileImage; else noImage\" src=\"{{employee?.profileImage}}\" onerror=\"this.src ='./assets/app/media/img/custom/users/user6.jpg';\" class=\"directory_image m--img-rounded m--marginless m--img-centered\" alt=\"\">\r\n\t\t\t\t\t\t\t\t\t      <ng-template #noImage><img src=\"./assets/app/media/img/custom/users/user6.jpg\" class=\"directory_image m--img-rounded m--marginless m--img-centered\"></ng-template>\r\n\t\t\t\t\t\t\t\t\t    </a>\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t    <td class=\"m-datatable__cell\" width=\"25%\" >\r\n\t\t\t\t\t\t\t\t\t\t<span>{{employee.fullName}}</span>\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t<td class=\"m-datatable__cell\" width=\"25%\" >\r\n\t\t\t\t\t\t\t\t\t\t<span>{{employee.officeEmail}}</span>\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t<td class=\"m-datatable__cell\" width=\"20%\" >\r\n\t\t\t\t\t\t\t\t\t\t<span>{{employee.designation}}</span>\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t    <td class=\"m-datatable__cell\" width=\"25%\" >\r\n\t\t\t\t\t\t\t\t\t\t<span>{{employee.supervisor}}</span>\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t  </tr>\r\n\t\t\t\t\t\t\t  <!-- <tr *ngIf=\"!employeeData.length > 0\">\r\n\t\t\t\t\t\t\t\t  <th colspan=\"5\">\r\n\t\t\t\t\t\t\t\t\t\tNo Data\r\n\t\t\t\t\t\t\t\t  </th>\r\n\t\t\t\t\t\t\t  </tr> -->\r\n\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t</table>\r\n\t\t\t\t\t<pagination-template #p=\"paginationApi\" (pageChange)=\"p2 = $event\" class=\"paginationtemplate\" >\r\n\t\t\t\t\t\t<div class=\"m-datatable__pager m-datatable--paging-loaded clearfix\">\r\n\t\t\t\t\t\t\t<ul class=\"m-datatable__pager-nav\" *ngIf=\"p.pages.length > 0\">\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<a  class=\"m-datatable__pager-link m-datatable__pager-link--first\" [class.m-datatable__pager-link--disabled]=\"p.isFirstPage()\"   (click)=\"p.setCurrent(1)\" >\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"la la-angle-double-left\"></i>\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<a  class=\"m-datatable__pager-link m-datatable__pager-link--prev\" [class.m-datatable__pager-link--disabled]=\"p.isFirstPage()\" (click)=\"p.previous()\" >\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"la la-angle-left\"></i>\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li *ngFor=\"let page of p.pages\">\r\n\t\t\t\t\t\t\t\t\t<a (click)=\"p.setCurrent(page.value)\" class=\"m-datatable__pager-link m-datatable__pager-link-number \" [class.m-datatable__pager-link--active]=\"p.getCurrent() === page.value\">\r\n\t\t\t\t\t\t\t\t\t\t{{ page.label }}\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<a  class=\"m-datatable__pager-link m-datatable__pager-link--next\" [class.m-datatable__pager-link--disabled]=\"p.isLastPage()\" (click)=\"p.next()\">\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"la la-angle-right\"></i>\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<a title=\"Last\" class=\"m-datatable__pager-link m-datatable__pager-link--last\" [class.m-datatable__pager-link--disabled]=\"p.isLastPage()\"  (click)=\"p.setCurrent(p.pages.length + 1)\">\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"la la-angle-double-right\"></i>\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</pagination-template>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/theme/pages/default/hr/employee/allEmployee/allEmployee.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllEmployeeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_script_loader_service__ = __webpack_require__("./src/app/_services/script-loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_services_authService_service__ = __webpack_require__("./src/app/base/_services/authService.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__hr_service__ = __webpack_require__("./src/app/theme/pages/default/hr/hr.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AllEmployeeComponent = (function () {
    function AllEmployeeComponent(_script, _hrService, _authService) {
        this._script = _script;
        this._hrService = _hrService;
        this._authService = _authService;
        this.employeeData = [];
        this.key = ''; //set default
        this.reverse = false;
        this.p2 = 1;
    }
    AllEmployeeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._authService.validateToken().subscribe(function (res) {
            _this._currentEmpId = _this._authService.currentUserData._id;
            _this.loadAllEmployee();
        });
    };
    AllEmployeeComponent.prototype.ngAfterViewInit = function () {
    };
    AllEmployeeComponent.prototype.loadAllEmployee = function () {
        var _this = this;
        this._hrService.getAllEmployee()
            .subscribe(function (res) {
            var data = res.json().data || [];
            if (data.length > 0) {
                data = data.filter(function (obj) { return obj.hrScope_Id == _this._currentEmpId; });
                _this.employeeData = data || [];
            }
            else
                _this.employeeData = data.json().data || [];
        }, function (error) {
        });
    };
    AllEmployeeComponent.prototype.getColumnName = function (column) {
        return column.replace(/([A-Z][a-z])/g, " $1").replace("_", " ").toUpperCase();
    };
    AllEmployeeComponent.prototype.sort = function (key) {
        this.key = key;
        this.reverse = !this.reverse;
    };
    AllEmployeeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: ".m-grid__item.m-grid__item--fluid.m-wrapper--allEmployee",
            template: __webpack_require__("./src/app/theme/pages/default/hr/employee/allEmployee/allEmployee.component.html"),
            styles: [__webpack_require__("./src/app/theme/pages/default/hr/employee/allEmployee/allEmployee.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_script_loader_service__["a" /* ScriptLoaderService */],
            __WEBPACK_IMPORTED_MODULE_3__hr_service__["a" /* HrService */],
            __WEBPACK_IMPORTED_MODULE_2__base_services_authService_service__["a" /* AuthService */]])
    ], AllEmployeeComponent);
    return AllEmployeeComponent;
}());



/***/ }),

/***/ "./src/app/theme/pages/default/hr/employee/editEmployee/editEmployee.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"m-content\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t<div class=\"m-portlet m-portlet--tabs m-portlet--warning m-portlet--head-solid-bg m-portlet--head-sm\">\r\n\t\t\t\t\t<div class=\"m-portlet__head\">\r\n\t\t\t\t\t<div class=\"m-portlet__head-caption\">\r\n\t\t\t\t\t\t<div class=\"m-portlet__head-title\">\r\n\t\t\t\t\t\t\t<h3 class=\"m-portlet__head-text\">\r\n\t\t\t\t\t\t\t\t<i class=\"flaticon-user-settings\"></i>\r\n\t\t\t\t\t\t\t\tEmployee Info\r\n\t\t\t\t\t\t\t\t<small>\r\n\t\t\t\t\t\t\t\t</small>\r\n\t\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"m-portlet__head-tools\">\r\n\t\t\t\t\t\t<ul class=\"nav nav-tabs m-tabs m-tabs-line m-tabs-line--brand  m-tabs-line--right m-tabs-line-danger\" role=\"tablist\">\r\n\t\t\t\t\t\t\t<li class=\"nav-item dropdown m-tabs__item\" >\r\n\t\t\t\t\t\t\t\t<a aria-expanded=\"true\" aria-haspopup=\"true\" class=\"nav-link m-tabs__link dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" ng-reflect-href=\"#\">\r\n\t\t\t\t\t\t\t\t<i class=\"la la-user\"></i> Personal Info\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<div class=\"dropdown-menu dropdown-menu-right\" x-placement=\"bottom-end\" style=\"position: absolute; transform: translate3d(-26px, 56px, 0px); top: 0px; left: 0px; will-change: transform;\">\r\n\t\t\t\t\t\t\t\t<a class=\"dropdown-item\" data-toggle=\"tab\"  routerLink=\"/my/profile\" [queryParams]=\"{'tabName':'personal'}\" [ngClass]=\"{'active':tabName=='personal'}\">\r\n\t\t\t\t\t\t\t\tPersonal\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<a class=\"dropdown-item\" data-toggle=\"tab\" routerLink=\"/my/profile\" [queryParams]=\"{'tabName':'documents'}\" [ngClass]=\"{'active':tabName=='documents'}\">\r\n\t\t\t\t\t\t\t\tDocuments\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<a class=\"dropdown-item\" data-toggle=\"tab\" routerLink=\"/my/profile\" [queryParams]=\"{'tabName':'education'}\" [ngClass]=\"{'active':tabName=='education'}\">\r\n\t\t\t\t\t\t\t\tEducation\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<a class=\"dropdown-item\" data-toggle=\"tab\" routerLink=\"/my/profile\" [queryParams]=\"{'tabName':'employment'}\" [ngClass]=\"{'active':tabName=='employment'}\">\r\n\t\t\t\t\t\t\t\tEmployment History\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<a class=\"dropdown-item\" data-toggle=\"tab\" routerLink=\"/my/profile\" [queryParams]=\"{'tabName':'family'}\" [ngClass]=\"{'active':tabName=='family'}\">\r\n\t\t\t\t\t\t\t\tFamily\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class=\"nav-item dropdown m-tabs__item\" *ngIf=\"officeInfo.isCompleted && positionDetails.isCompleted && performanceDiary.isCompleted && bankDetails.isCompleted && salaryDetails.isCompleted && carDetails.isCompleted\">\r\n\t\t\t\t\t\t\t\t<a aria-expanded=\"false\" aria-haspopup=\"true\" class=\"nav-link m-tabs__link dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" ng-reflect-href=\"#\">\r\n\t\t\t\t\t\t\t\t<i class=\"la la-desktop\"></i> Office Info\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<div class=\"dropdown-menu dropdown-menu-right\" x-placement=\"bottom-end\" style=\"position: absolute; transform: translate3d(-26px, 56px, 0px); top: 0px; left: 0px; will-change: transform;\">\r\n\t\t\t\t\t\t\t\t<a class=\"dropdown-item\" data-toggle=\"tab\" routerLink=\"/my/profile\" [queryParams]=\"{'tabName':'office'}\" [ngClass]=\"{'active':tabName=='office'}\">\r\n\t\t\t\t\t\t\t\tOffice\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<a class=\"dropdown-item\" data-toggle=\"tab\" routerLink=\"/my/profile\" [queryParams]=\"{'tabName':'payroll'}\" [ngClass]=\"{'active':tabName=='payroll'}\">\r\n\t\t\t\t\t\t\t\tPayroll\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"m-portlet__body\">\r\n\t\t\t\t\t<div class=\"tab-content\">\r\n\t\t\t\t\t\t<div class=\"tab-pane\" role=\"tabpanel\" [ngClass]=\"{'active show':tabName=='personal'}\">\r\n\t\t\t\t\t\t\t<div class=\"m-accordion m-accordion--default m-accordion--toggle-arrow\" id=\"m_accordion_5\" role=\"tablist\">\r\n\t\t\t\t\t\t\t\t<div class=\"m-accordion__item m-accordion__item--success\">\r\n\t\t\t\t\t\t\t\t<div class=\"m-accordion__item-head collapsed\" srole=\"tab\" id=\"m_accordion_5_item_1_head\" data-toggle=\"collapse\" href=\"#m_accordion_5_item_1_body\" aria-expanded=\"false\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"m-accordion__item-icon\"><i class=\"fa flaticon-user-ok\"></i></span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"m-accordion__item-title\">Personal Info</span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"m-accordion__item-mode\"></span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"m-accordion__item-body collapse\" id=\"m_accordion_5_item_1_body\" role=\"tabpanel\" aria-labelledby=\"m_accordion_5_item_1_head\" data-parent=\"#m_accordion_5\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-10\"> </div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-2 accordian-refresh\">\r\n\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-secondary\" type=\"button\" (click)=\"loadPersonalInfoTabData()\"> <i class=\"fa fa-refresh\"></i> </button>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-accordion__item-content\">\r\n\t\t\t\t\t\t\t\t\t\t<form class=\"m-form m-form--fit m-form--label-align-right\" (ngSubmit)=\"fpersonalInfo.valid && savePersonalInfo()\" #fpersonalInfo=\"ngForm\" novalidate=\"novalidate\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group m--margin-top-10\">\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\" hidden=\"true\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"personal_id\" [(ngModel)]=\"personalInfo._id\" #personal_id=\"ngModel\" class=\"form-control m-input m-input--air\" />\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\" hidden=\"true\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"emp_id\" [(ngModel)]=\"personalInfo.emp_id\" #emp_id=\"ngModel\" class=\"form-control m-input m-input--air\" />\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\" hidden=\"true\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"status\" [(ngModel)]=\"personalInfo.status\" #status=\"ngModel\" class=\"form-control m-input m-input--air\" />\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"fatherName\">Father's Name\r\n\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"fatherName\" [(ngModel)]=\"personalInfo.fatherName\" #fatherName=\"ngModel\" placeholder=\"Enter father's name\" id=\"fatherName\" class=\"form-control m-input m-input--air\">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"motherName\">Mother's Name\r\n\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"motherName\" [(ngModel)]=\"personalInfo.motherName\" #motherName=\"ngModel\" placeholder=\"Enter mother's name\" id=\"motherName\" class=\"form-control m-input m-input--air\">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-form__group form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"gender\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tGender\r\n\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-radio-inline\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"m-radio\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input name=\"gender\" id=\"Male\" type=\"radio\" value=\"Male\" checked=\"checked\" [(ngModel)]=\"personalInfo.gender\" #mgender=\"ngModel\"> Male\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"m-radio\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input name=\"gender\" id=\"Female\" type=\"radio\" value=\"Female\" [(ngModel)]=\"personalInfo.gender\" #fgender=\"ngModel\"> Female\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"m-radio\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input name=\"gender\" id=\"Other\" type=\"radio\" value=\"Other\" [(ngModel)]=\"personalInfo.gender\" #ogender=\"ngModel\"> Other\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"birthDate\">Birth Date\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"required\" aria-required=\"true\"> * </span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input name=\"birthDate\" class=\"form-control m-input m-input--air\" placeholder=\"YYYY-DD-MM\" [(ngModel)]=\"personalInfo.dob\" bsDatepicker [readonly]=\"true\" [maxDate]=\"currentDate\" [bsConfig]=\"{ dateInputFormat: 'DD/MM/YYYY' }\" #birthDate=\"ngModel\" required>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-control-feedback has-danger\" *ngIf=\"fpersonalInfo.submitted && !birthDate.valid\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tThis field is required.\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"mobileNo\">Mobile No.\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"required\" aria-required=\"true\"> * </span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"mobileNo\" [(ngModel)]=\"personalInfo.personalMobileNumber\" #mobileNo=\"ngModel\" OnlyNumber=\"true\" minlength=10 maxlength=10 placeholder=\"Enter Mobile No\" id=\"mobileNo\" maxlength=\"10\" aria-describedby=\"mobileNo\" aria-invalid=\"true\" class=\"form-control m-input m-input--air\" required>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-control-feedback has-danger\" *ngIf=\"fpersonalInfo.submitted && !mobileNo.valid\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tThis field is required.\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-control-feedback has-danger\" *ngIf=\"!mobileNo.valid\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"fpersonalInfo.submitted && !mobileNo.valid\">This field is required.</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"mobileNo.errors?.maxlength\">Please enter your 10 digit number</span>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"homePhonNo\">Home Phone No.\r\n\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input name=\"homePhonNo\" id=\"homePhonNo\" [(ngModel)]=\"personalInfo.homePhone\" minlength=10 maxlength=10 #homePhonNo=\"ngModel\" placeholder=\"Enter home phone\" type=\"text\" OnlyNumber=\"true\" class=\"form-control m-input m-input--air\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-control-feedback has-danger\" *ngIf=\"fpersonalInfo.submitted\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"homePhonNo.errors?.minlength\">Please enter your 10 digit number</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"homePhonNo.errors?.maxlength\">Please enter your 10 digit number</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"personalEmail\">Personal Email\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"required\" aria-required=\"true\"> * </span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control m-input m-input--air\" id=\"personalEmail\" name=\"personalEmail\" [(ngModel)]=\"personalInfo.personalEmail\" #personalEmail=\"ngModel\" placeholder=\"Enter email\" type=\"email\" required>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-control-feedback has-danger\" *ngIf=\"fpersonalInfo.submitted && !personalEmail.valid \">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tThis field is required.\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"bloodGroup\">Blood Group\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"required\" aria-required=\"true\"> * </span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<ng-select class=\"m-input m-input--air\" name=\"bloodGroup\" [items]=\"bloodGropData\" bindLabel=\"text\" bindValue=\"id\" placeholder=\"Select Blood Group\" [(ngModel)]=\"personalInfo.bloodGroup\" [clearable]=\"false\" #bloodGroup=\"ngModel\" required></ng-select>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-control-feedback has-danger\" *ngIf=\"fpersonalInfo.submitted && !bloodGroup.valid \">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tThis field is required.\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"religion\">Religion\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"required\" aria-required=\"true\"> * </span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<ng-select class=\"m-input m-input--air\" name=\"religion\" [items]=\"religionData\" bindLabel=\"text\" bindValue=\"id\" placeholder=\"Select Religion\" [(ngModel)]=\"personalInfo.religion\" [clearable]=\"false\" #religion=\"ngModel\" required></ng-select>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-control-feedback has-danger\" *ngIf=\"fpersonalInfo.submitted && !religion.valid \">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tThis field is required.\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"maritalStatus\">Marital Status\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"required\" aria-required=\"true\"> * </span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<ng-select class=\"m-input m-input--air\" name=\"maritalStatus\" [items]=\"maritialStatusData\" bindLabel=\"text\" bindValue=\"id\" placeholder=\"Select maritalStatus\" [(ngModel)]=\"personalInfo.maritialStatus\" [clearable]=\"false\" #maritalStatus=\"ngModel\" required></ng-select>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-control-feedback has-danger\" *ngIf=\"fpersonalInfo.submitted && !maritalStatus.valid \">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tThis field is required.\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"nationality\">Nationality\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"required\" aria-required=\"true\"> * </span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<ng-select class=\"m-input m-input--air\" name=\"nationality\" [items]=\"nationalityData\" bindLabel=\"text\" bindValue=\"id\" placeholder=\"Select maritalStatus\" [(ngModel)]=\"personalInfo.nationality\" [clearable]=\"false\" #nationality=\"ngModel\" required></ng-select>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-control-feedback has-danger\" *ngIf=\"fpersonalInfo.submitted && !nationality.valid \">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tThis field is required.\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"emergencyContactName\">Emergency Contact Name\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"required\" aria-required=\"true\"> * </span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"emergencyContactName\" [(ngModel)]=\"personalInfo.emergencyContactPerson\" #emergencyContactName=\"ngModel\" placeholder=\"Enter emergency contact name\" id=\"emergencyContactName\" data-required=\"1\" class=\"form-control m-input m-input--air\" required>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-control-feedback has-danger\" *ngIf=\"fpersonalInfo.submitted && !emergencyContactName.valid \">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tThis field is required.\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"emergencyContactNo\">Emergency Contact No.\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"required\" aria-required=\"true\"> * </span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input name=\"emergencyContactNo\" id=\"emergencyContactNo\" minlength=10 maxlength=10 [(ngModel)]=\"personalInfo.emergencyContactNumber\" #emergencyContactNo=\"ngModel\" placeholder=\"Enter emergency contact no\" type=\"text\" class=\"form-control m-input m-input--air\" OnlyNumber=\"true\" required>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-control-feedback has-danger\" *ngIf=\"fpersonalInfo.submitted && !emergencyContactNo.valid \">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tThis field is required.\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-form__actions\">\r\n\t\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success\">{{personalInfo._id ? 'Update':'Save'}}</button>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"m-accordion__item m-accordion__item--success\">\r\n\t\t\t\t\t\t\t\t<div class=\"m-accordion__item-head collapsed\" srole=\"tab\" id=\"m_accordion_5_item_2_head\" data-toggle=\"collapse\" href=\"#m_accordion_5_item_2_body\" aria-expanded=\"false\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"m-accordion__item-icon\"><i class=\"flaticon-map-location\"></i></span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"m-accordion__item-title\">Address</span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"m-accordion__item-mode\"></span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"m-accordion__item-body collapse\" id=\"m_accordion_5_item_2_body\" role=\"tabpanel\" aria-labelledby=\"m_accordion_5_item_2_head\" data-parent=\"#m_accordion_5\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-10\"> </div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-2 accordian-refresh\">\r\n\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-secondary\" type=\"button\" (click)=\"loadAddressTabData();\"> <i class=\"fa fa-refresh\"></i> </button>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-accordion__item-content\">\r\n\t\t\t\t\t\t\t\t\t\t<form class=\"m-form m-form--fit m-form--label-align-right\" (ngSubmit)=\"faddress.valid && saveAddressInfo()\"  #faddress=\"ngForm\" novalidate=\"novalidate\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-body\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h5 class=\"title\" style=\"bottom:30px\"><strong> Current Address </strong></h5>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\" hidden=\"true\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"personal_id\" [(ngModel)]=\"address._id\" class=\"form-control m-input m-input--air\" />\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\" hidden=\"true\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"emp_id\" [(ngModel)]=\"address.emp_id\" class=\"form-control m-input m-input--air\" />\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\" hidden=\"true\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"status\" [(ngModel)]=\"address.status\" class=\"form-control m-input m-input--air\" />\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"addressLine1\">Address Line 1\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"required\" aria-required=\"true\"> * </span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control m-input m-input--air\" id=\"addressLine1\" name=\"addressLine1\" [(ngModel)]=\"address.currentAddressLine1\" #addressLine1=\"ngModel\" placeholder=\"Enter address line 1\" type=\"text\" required>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-control-feedback has-danger\" *ngIf=\"faddress.submitted && !addressLine1.valid \">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tThis field is required.\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"currentAddressLine2\">Address Line 2\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"address.currentAddressLine2\" #currentAddressLine2=\"ngModel\" class=\"form-control m-input m-input--air\" placeholder=\"Enter Address Line 2\" id=\"currentAddressLine2\" name=\"currentAddressLine2\" required>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"division\">Division\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"required\" aria-required=\"true\"> * </span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-select class=\"m-input m-input--air\" #currentDivision name=\"currentAddressDivision\" [items]=\"currentAddressDivisionData\" (change)=\"loadcurrentAddressDistrictData(address.currentAddressDivision_id)\" bindLabel=\"locationName\" bindValue=\"_id\" placeholder=\"Select Division\" [(ngModel)]=\"address.currentAddressDivision_id\" [clearable]=\"false\" #currentAddressDivision=\"ngModel\" required></ng-select>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-control-feedback has-danger\" *ngIf=\"fpersonalInfo.submitted && !currentAddressDivision.valid \">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tThis field is required.\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"currentAddressDistrict\">District\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"required\" aria-required=\"true\"> * </span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-select class=\"m-input m-input--air\" #currentDistrict name=\"currentAddressDistrict\" (change)=\"loadcurrentAddressThanaData(address.currentAddressDistrict_id)\" [items]=\"currentAddressDistrictData\" bindLabel=\"locationName\" bindValue=\"_id\" placeholder=\"Select District\" [(ngModel)]=\"address.currentAddressDistrict_id\" [clearable]=\"false\" #currentAddressDistrict=\"ngModel\" required></ng-select>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-control-feedback has-danger\" *ngIf=\"fpersonalInfo.submitted && !currentAddressDistrict.valid \">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tThis field is required.\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"thane\">Thane\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"required\" aria-required=\"true\"> * </span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-select class=\"m-input m-input--air\" #currentThana name=\"currentAddressThana\" #thane [items]=\"currentAddressThanaData\" bindLabel=\"locationName\" bindValue=\"_id\" placeholder=\"Select Thane\" [(ngModel)]=\"address.currentAddressThana_id\" [clearable]=\"false\" #currentAddressthane=\"ngModel\" required></ng-select>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-control-feedback has-danger\" *ngIf=\"fpersonalInfo.submitted && !currentAddressthane.valid \">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tThis field is required.\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"currentAddressPostCode\">Post Code\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"required\" aria-required=\"true\"> * </span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"address.currentAddressPostCode\" maxlength=\"6\" #currentAddressPostCode=\"ngModel\" class=\"form-control m-input m-input--air\" placeholder=\"Enter Post Code\" id=\"currentAddressPostCode\" name=\"currentAddressPostCode\" OnlyNumber=\"true\" required>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-control-feedback has-danger\" *ngIf=\"faddress.submitted && !currentAddressPostCode.valid \">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tThis field is required.\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<br/>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h5 class=\"title\" style=\"bottom:30px\"><strong> Permanent Address </strong></h5>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group form-md-checkboxes\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"md-checkbox-inline\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"md-checkbox\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"m-checkbox m-checkbox--success\">\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"isSameAsCurrent\" #sameAddress [(ngModel)]=\"address.isSameAsCurrent\" (click)=\"address.isSameAsCurrent=!address.isSameAsCurrent;resetPermentAddress()\"> Same as Current Address\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"box\" id=\"addressCheck1\"></span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"permanentAddressLine1\">Address Line 1\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"required\" aria-required=\"true\"> * </span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"form-control m-input m-input--air\" *ngIf=\"address.isSameAsCurrent\">{{address.currentAddressLine1}}</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" *ngIf=\"!address.isSameAsCurrent\" [(ngModel)]=\"address.permanentAddressLine1\" #permanentAddressLine1=\"ngModel\" placeholder=\"Enter Permanent Address Line 1\" class=\"form-control m-input m-input--air\" id=\"permanentAddressLine1\" name=\"permanentAddressLine1\" required>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-control-feedback has-danger\" *ngIf=\"!address.isSameAsCurrent && faddress.submitted && !permanentAddressLine1.valid \">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tThis field is required.\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"permanentAddressLine2\">Address Line 2\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"form-control m-input m-input--air\" *ngIf=\"address.isSameAsCurrent\">{{address.currentAddressLine2}}</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" *ngIf=\"!address.isSameAsCurrent\" [(ngModel)]=\"address.permanentAddressLine2\" #permanentAddressLine2=\"ngModel\" class=\"form-control m-input m-input--air\" placeholder=\"Enter Permanent Address Line 2\" id=\"permanentAddressLine2\" name=\"permanentAddressLine2\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"permanentAddressDivision\">Division\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"required\" aria-required=\"true\"> * </span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"form-control m-input m-input--air\" *ngIf=\"address.isSameAsCurrent\">{{currentDivision?.selectedItems[0]?.label}}</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-select *ngIf=\"!address.isSameAsCurrent\" class=\"m-input m-input--air\" name=\"permanentAddressDivision\" [items]=\"permanentAddressDivisionData\" (change)=\"loadpermanentAddressDistrictData(address.permanentAddressDivision_id)\" bindLabel=\"locationName\" bindValue=\"_id\" placeholder=\"Select Division\" [(ngModel)]=\"address.permanentAddressDivision_id\" [clearable]=\"false\" #permanentAddressDivision=\"ngModel\" required></ng-select>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-control-feedback has-danger\" *ngIf=\"!address.isSameAsCurrent && faddress.submitted && !permanentAddressDivision.valid \">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tThis field is required.\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"permanentAddressDistrict\">District\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"required\" aria-required=\"true\"> * </span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"form-control m-input m-input--air\" *ngIf=\"address.isSameAsCurrent\">{{currentDistrict?.selectedItems[0]?.label}}</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-select *ngIf=\"!address.isSameAsCurrent\" class=\"m-input m-input--air\" name=\"permanentAddressDistrict\" (change)=\"loadpermanentAddressThanaData(address.permanentAddressDistrict_id)\" [items]=\"permanentAddressDistrictData\" bindLabel=\"locationName\" bindValue=\"_id\" placeholder=\"Select District\" [(ngModel)]=\"address.permanentAddressDistrict_id\" [clearable]=\"false\" #permanentAddressDistrict=\"ngModel\" required></ng-select>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div  class=\"form-control-feedback has-danger\" *ngIf=\"!address.isSameAsCurrent && faddress.submitted && !permanentAddressDistrict.valid \">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tThis field is required.\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"permanentAddressThana\">Thana\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"required\" aria-required=\"true\"> * </span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"form-control m-input m-input--air\" *ngIf=\"address.isSameAsCurrent\">{{currentThana?.selectedItems[0]?.label}}</span>                                                 <ng-select *ngIf=\"!address.isSameAsCurrent\" class=\"m-input m-input--air\" name=\"permanentAddressThana\" [items]=\"currentAddressThanaData\" bindLabel=\"locationName\" bindValue=\"_id\" placeholder=\"Select Thane\" [(ngModel)]=\"address.permanentAddressThana_id\" [clearable]=\"false\" #permanentAddressThana=\"ngModel\" required></ng-select>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-control-feedback has-danger\" *ngIf=\"!address.isSameAsCurrent && faddress.submitted && !permanentAddressThana.valid \">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tThis field is required.\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"permanentAddressPostCode\">Post Code\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"required\" aria-required=\"true\"> * </span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"form-control m-input m-input--air\" *ngIf=\"address.isSameAsCurrent\">{{address.currentAddressPostCode}}</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input *ngIf=\"!address.isSameAsCurrent\" type=\"text\" [readonly]=\"address.isSameAsCurrent\" maxlength=\"6 \" [(ngModel)]=\"address.permanentAddressPostCode\" #permanentAddressPostCode=\"ngModel\" placeholder=\"Enter Permanent Post Code\" class=\"form-control m-input m-input--air\" id=\"permanentAddressPostCode\" name=\"permanentAddressPostCode\" OnlyNumber=\"true\" required>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div  class=\"form-control-feedback has-danger\" *ngIf=\"!address.isSameAsCurrent && faddress.submitted && !permanentAddressPostCode.valid \">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tThis field is required.\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<br/>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-form__actions\">\r\n\t\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success\">{{address._id ? 'Update':'Save'}}</button>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"tab-pane\" role=\"tabpanel\" [ngClass]=\"{'active show':tabName=='documents'}\">\r\n\t\t\t\t\t\t\t<div class=\"m-accordion m-accordion--default m-accordion--toggle-arrow\" id=\"m_accordion_5\" role=\"tablist\">\r\n\t\t\t\t\t\t\t\t<div class=\"m-accordion__item m-accordion__item--success\">\r\n\t\t\t\t\t\t\t\t<div class=\"m-accordion__item-head collapsed\" srole=\"tab\" id=\"m_accordion_5_item_9_head\" data-toggle=\"collapse\" href=\"#m_accordion_5_item_9_body\" aria-expanded=\"false\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"m-accordion__item-icon\"><i class=\"fa fa-file\"></i></span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"m-accordion__item-title\">Documents</span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"m-accordion__item-mode\"></span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"m-accordion__item-body collapse\" id=\"m_accordion_5_item_9_body\" role=\"tabpanel\" aria-labelledby=\"m_accordion_5_item_9_head\" data-parent=\"#m_accordion_5\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-10\"> </div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-2 accordian-refresh\">\r\n\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-secondary\" type=\"button\" (click)=\"loadDocuments();\"> <i class=\"fa fa-refresh\"></i> </button>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-accordion__item-content\">\r\n\t\t\t\t\t\t\t\t\t\t<form class=\"m-form m-form--fit m-form--label-align-right\" #fdocuments=\"ngForm\" novalidate=\"novalidate\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group m--margin-top-10\">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\" hidden=\"true\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"personal_id\" [(ngModel)]=\"documents._id\" #personal_id=\"ngModel\" class=\"form-control m-input m-input--air\" />\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\" hidden=\"true\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"emp_id\" [(ngModel)]=\"documents.emp_id\" #emp_id=\"ngModel\" class=\"form-control m-input m-input--air\" />\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\" hidden=\"true\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"status\" [(ngModel)]=\"documents.status\" #status=\"ngModel\" class=\"form-control m-input m-input--air\" />\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"txtNationalIdSmartCard\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tNational ID Smart Card\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"documents.nationalIdSmartCard\" #txtNationalIdSmartCard=\"ngModel\" name=\"txtNationalIdSmartCard\" id=\"txtNationalIdSmartCard\" data-required=\"1\" class=\"form-control m-input m-input--air\" placeholder=\"Enter National ID Smart Card number\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-btn\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t   <button type=\"button\" class=\"btn green\" tabindex=\"-1\" id=\"changeNationalIdSmartCard\" name=\"changeNationalIdSmartCard\" style=\"margin-right: 6px;\">Change\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"file\" name=\"document\" class=\"hidden\" ngFileSelect [options]=\"options\" (uploadOutput)=\"onUploadOutput($event,'smartNationalId')\" [uploadInput]=\"uploadInput\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t   </button>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-success\" tabindex=\"-1\" id=\"viewNationalIdSmartCard\" name=\"viewNationalIdSmartCard\" style=\"margin-right: 6px;\">View</button>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-danger\" tabindex=\"-1\" id=\"deleteNationalIdSmartCard\" name=\"deleteNationalIdSmartCard\" style=\"margin-right: 6px;\"><i class=\"fa fa-close\"></i></button>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"btn default documentPreviewBtn\" id=\"downloadNationalIdSmartCard\" name=\"downloadNationalIdSmartCard\" data-toggle=\"modal\" href=\"#full\" hidden=\"hidden\" style=\"display: inline;\"> View</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"txtNationalIDOldFormat\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tNational ID (Old Format)\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"documents.nationalIDOldFormat\" #txtNationalIDOldFormat=\"ngModel\" name=\"txtNationalIDOldFormat\" id=\"txtNationalIDOldFormat\" data-required=\"1\" class=\"form-control m-input m-input--air\" placeholder=\"Enter National ID (old format)\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-btn\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn green\" tabindex=\"-1\" id=\"changeNationalIDOldFormat\" name=\"changeNationalIDOldFormat\" style=\"margin-right: 6px;\">Change\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"file\" name=\"document\" class=\"hidden\" ngFileSelect [options]=\"options\" (uploadOutput)=\"onUploadOutput($event,'oldNationalId')\" [uploadInput]=\"uploadInput\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-success\" tabindex=\"-1\" id=\"viewNationalIDOldFormat\" name=\"viewNationalIDOldFormat\" style=\"margin-right: 6px;\">View</button>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-danger\" tabindex=\"-1\" id=\"deleteNationalIDOldFormat\" name=\"deleteNationalIDOldFormat\" style=\"margin-right: 6px;\"><i class=\"fa fa-close\"></i></button>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"btn default documentPreviewBtn\" id=\"downloadNationalIDOldFormat\" name=\"downloadNationalIDOldFormat\" data-toggle=\"modal\" href=\"#full\" hidden=\"hidden\" style=\"display: inline;\"> View</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"txtBirthRegistrationNumber\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tBirth Registration Number\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"documents.birthRegistrationNumber\" #txtBirthRegistrationNumber=\"ngModel\" name=\"txtBirthRegistrationNumber\" id=\"txtBirthRegistrationNumber\" data-required=\"1\" class=\"form-control m-input m-input--air\" placeholder=\"Enter birth registration number\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-btn\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn green\" tabindex=\"-1\" id=\"changeBirthRegistrationNumber\" name=\"changeBirthRegistrationNumber\" style=\"margin-right: 6px;\">Change\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"file\" name=\"document\" class=\"hidden\" ngFileSelect [options]=\"options\" (uploadOutput)=\"onUploadOutput($event,'birth')\" [uploadInput]=\"uploadInput\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-success\" tabindex=\"-1\" id=\"viewBirthRegistrationNumber\" name=\"viewBirthRegistrationNumber\" style=\"margin-right: 6px;\">View</button>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-danger\" tabindex=\"-1\" id=\"deleteBirthRegistrationNumber\" name=\"deleteBirthRegistrationNumber\" style=\"margin-right: 6px;\"><i class=\"fa fa-close\"></i></button>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"btn default documentPreviewBtn\" id=\"downloadBirthRegistrationNumber\" name=\"downloadBirthRegistrationNumber\" data-toggle=\"modal\" href=\"#full\" hidden=\"hidden\" style=\"display: inline;\"> View</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"txtPassportNumber\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tPassport Number\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"documents.passportNumber\" #txtPassportNumber=\"ngModel\" name=\"txtPassportNumber\" id=\"txtPassportNumber\" data-required=\"1\" class=\"form-control m-input m-input--air\" placeholder=\"Enter passport number\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group-btn\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn green\" tabindex=\"-1\" id=\"changePassportNumber\" name=\"changePassportNumber\" style=\"margin-right: 6px;\">Change\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"file\" name=\"document\" class=\"hidden\" ngFileSelect [options]=\"options\" (uploadOutput)=\"onUploadOutput($event,'passport')\" [uploadInput]=\"uploadInput\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-success\" tabindex=\"-1\" id=\"viewPassportNumber\" name=\"viewPassportNumber\" style=\"margin-right: 6px;\">View</button>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-danger\" tabindex=\"-1\" id=\"deletePassportNumber\" name=\"deletePassportNumber\" style=\"margin-right: 6px;\"><i class=\"fa fa-close\"></i></button>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"btn default documentPreviewBtn\" id=\"downloadPassportNumber\" name=\"downloadPassportNumber\" data-toggle=\"modal\" href=\"#full\" hidden=\"hidden\" style=\"display: inline;\">View</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"tab-pane\" role=\"tabpanel\" [ngClass]=\"{'active show':tabName=='education'}\">\r\n\t\t\t\t\t\t\t<div class=\"m-accordion m-accordion--default m-accordion--toggle-arrow\" id=\"m_accordion_5\" role=\"tablist\">\r\n\t\t\t\t\t\t\t\t<div class=\"m-accordion__item m-accordion__item--success\">\r\n\t\t\t\t\t\t\t\t<div class=\"m-accordion__item-head collapsed\" srole=\"tab\" id=\"m_accordion_5_item_10_head\" data-toggle=\"collapse\" href=\"#m_accordion_5_item_10_body\" aria-expanded=\"false\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"m-accordion__item-icon\"><i class=\"fa fa-graduation-cap\"></i></span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"m-accordion__item-title\">Academic Info</span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"m-accordion__item-mode\"></span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"m-accordion__item-body collapse\" id=\"m_accordion_5_item_10_body\" role=\"tabpanel\" aria-labelledby=\"m_accordion_5_item_10_head\" data-parent=\"#m_accordion_5\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-10\"> </div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-2 accordian-refresh\">\r\n\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-secondary\" type=\"button\" (click)=\"loadAcademicInfoTabData();\"> <i class=\"fa fa-refresh\"></i> </button>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-accordion__item-content\">\r\n\t\t\t\t\t\t\t\t\t\t<div *ngFor=\"let academic of academicInfo ;let i=index\">\r\n\t\t\t\t\t\t\t\t\t\t\t<form class=\"m-form m-form--fit m-form--label-align-right\" #facademicInfo=\"ngForm\" (ngSubmit)=\"facademicInfo.valid && saveAcademicInfo(academic,i)\" novalidate=\"novalidate\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group m--margin-top-10\">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\" hidden=\"true\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"personal_id\" [(ngModel)]=\"academic._id\" #personal_id=\"ngModel\" class=\"form-control m-input m-input--air\" />\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\" hidden=\"true\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"emp_id\" [(ngModel)]=\"academic.emp_id\" #emp_id=\"ngModel\" class=\"form-control m-input m-input--air\" />\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\" hidden=\"true\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"status\" [(ngModel)]=\"academic.status\" #status=\"ngModel\" class=\"form-control m-input m-input--air\" />\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"levelOfEducation\">Level of Education\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"required\" aria-required=\"true\"> * </span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-select class=\"m-input m-input--air\" name=\"levelOfEducation\" [items]=\"levelOfEducationData\" bindLabel=\"educationName\" bindValue=\"_id\" placeholder=\"Select Level of Education\" (change)=\"loadExamDegreeTitle(academic.levelOfEducation_id,i)\" [(ngModel)]=\"academic.levelOfEducation_id\" [clearable]=\"false\" #levelOfEducation=\"ngModel\" required></ng-select>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-control-feedback has-danger\" *ngIf=\"facademicInfo.submitted && !levelOfEducation.valid\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tThis field is required.\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"examDegreeTitle\">Exam Degree Title\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"required\" aria-required=\"true\"> * </span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-select class=\"m-input m-input--air\" name=\"examDegreeTitle\" [items]=\"academic.examDegreeTitleData\" bindLabel=\"educationName\" bindValue=\"_id\" placeholder=\"Select Level of Education\" [(ngModel)]=\"academic.examDegreeTitle_id\" [clearable]=\"false\" #examDegreeTitle=\"ngModel\" required></ng-select>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-control-feedback has-danger\" *ngIf=\"facademicInfo.submitted && !examDegreeTitle.valid \">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tThis field is required.\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"concentrationMajorGroup\">Concentration/Major/Group\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control m-input m-input--air\" [(ngModel)]=\"academic.concentration\" #concentrationMajorGroup=\"ngModel\" id=\"concentrationMajorGroup\" name=\"concentrationMajorGroup\" placeholder=\"Enter concentration/major/goup\" type=\"text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"instituteName\">Institute Name\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"academic.instituteName\" #instituteName=\"ngModel\" name=\"instituteName\" placeholder=\"Enter Institute Name\" id=\"instituteName\" class=\"form-control m-input m-input--air\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"result\">Result\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"required\" aria-required=\"true\"> * </span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-select class=\"m-input m-input--air\" name=\"result\" [items]=\"resultsData\" bindLabel=\"text\" bindValue=\"id\" placeholder=\"Select Result\" [(ngModel)]=\"academic.result\" [clearable]=\"false\" #result=\"ngModel\" required></ng-select>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-control-feedback has-danger\" *ngIf=\"facademicInfo.submitted && !result.valid \">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tThis field is required.\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"marks\">Marks in %\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"marks\" [(ngModel)]=\"academic.marks\" maxlength=\"4\" #marks=\"ngModel\" placeholder=\"Enter marks in %\" id=\"marks\" class=\"form-control m-input m-input--air\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"yearOfPassing\">Year of Passing\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control m-input m-input--air\" maxlength=\"4\" [(ngModel)]=\"academic.yearOfPassing\" #yearOfPassing=\"ngModel\" id=\"yearOfPassing\" name=\"yearofpassing\" placeholder=\"Enter year of passing\" OnlyNumber=\"true\" type=\"text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"duration\">Duration (In Years)\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"duration\" [(ngModel)]=\"academic.duration\" #duration=\"ngModel\" maxlength=\"4\" minlength=\"1\" placeholder=\"Enter Duration\" id=\"duration\" class=\"form-control m-input m-input--air\" OnlyNumber=\"true\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"achievements\">Achievements\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<textarea class=\"form-control m-input m-input--air\" [(ngModel)]=\"academic.achievements\" #achievements=\"ngModel\" id=\"achievements\" name=\"achievements\" placeholder=\"Enter achievements\" type=\"text\" rows=\"3\"></textarea>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-form__actions\">\r\n\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-danger\" *ngIf=\"academic._id\" (click)=\"deleteAcademicInfo(academic._id)\"><i class=\"fa fa-close\"></i>Delete</button>\r\n\t\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success\">{{academic._id ? 'Update':'Save'}}</button>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-portlet__foot m-portlet__foot--fit\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-form__actions\">\r\n\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-success\" [disabled]=\"isAdded('academicInfo')\" (click)=\"addNewHtmlContain('academicInfo')\"><i class=\"fa fa-plus\"></i> Add\r\n\t\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"m-accordion m-accordion--default m-accordion--toggle-arrow\" id=\"m_accordion_5\" role=\"tablist\">\r\n\t\t\t\t\t\t\t\t<div class=\"m-accordion__item m-accordion__item--success\">\r\n\t\t\t\t\t\t\t\t<div class=\"m-accordion__item-head collapsed\" srole=\"tab\" id=\"m_accordion_5_item_11_head\" data-toggle=\"collapse\" href=\"#m_accordion_5_item_11_body\" aria-expanded=\"false\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"m-accordion__item-icon\"><i class=\"fa flaticon-user-ok\"></i></span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"m-accordion__item-title\">Certifications And Training Info</span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"m-accordion__item-mode\"></span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"m-accordion__item-body collapse\" id=\"m_accordion_5_item_11_body\" role=\"tabpanel\" aria-labelledby=\"m_accordion_5_item_11_head\" data-parent=\"#m_accordion_5\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-10\"> </div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-2 accordian-refresh\">\r\n\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-secondary\" type=\"button\" (click)=\"loadCertificateAndTraningInfoTabData();\"> <i class=\"fa fa-refresh\"></i> </button>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-accordion__item-content\">\r\n\t\t\t\t\t\t\t\t\t\t<div *ngFor=\"let certifications of certificationsandTrainingInfo ;let i=index\">\r\n\t\t\t\t\t\t\t\t\t\t\t<form class=\"m-form m-form--fit m-form--label-align-right\" #fcertificationsandTrainingInfo=\"ngForm\" (ngSubmit)=\"fcertificationsandTrainingInfo.valid && saveCertificationandTrainingInfo(certifications,i)\" novalidate=\"novalidate\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group m--margin-top-10\">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\" hidden=\"true\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"certifications_id\" [(ngModel)]=\"certifications._id\" #certifications_id=\"ngModel\" class=\"form-control m-input m-input--air\" />\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\" hidden=\"true\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"emp_id\" [(ngModel)]=\"certifications.emp_id\" #emp_id=\"ngModel\" class=\"form-control m-input m-input--air\" />\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"certificationTrainingTitle\">Certification/ Training Title\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"required\" aria-required=\"true\"> * </span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control m-input m-input--air\" [(ngModel)]=\"certifications.certificationTitle\" #certificationTrainingTitle=\"ngModel\" id=\"certificationTrainingTitle\" name=\"certificationTrainingTitle\" placeholder=\"Enter certification / training title\" required type=\"text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-control-feedback has-danger\" *ngIf=\"fcertificationsandTrainingInfo.submitted && !certificationTrainingTitle.valid \">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tThis field is required.\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"location\">Location\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"certifications.location\" #location=\"ngModel\" name=\"location\" placeholder=\"Enter location\" id=\"location\" class=\"form-control m-input m-input--air\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"institution\">Institution\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control m-input m-input--air\" [(ngModel)]=\"certifications.institution\" #institution=\"ngModel\" id=\"institution\" name=\"institution\" placeholder=\"Enter institution\" type=\"text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"durationInMonths\">Duration in Months\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"required\" aria-required=\"true\"> * </span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"certifications.duration\" #durationInMonths=\"ngModel\" name=\"durationInMonths\" placeholder=\"Enter duration in months\" id=\"durationInMonths\" class=\"form-control m-input m-input--air\" OnlyNumber=\"true\" required>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-control-feedback has-danger\" *ngIf=\"fcertificationsandTrainingInfo.submitted && !durationInMonths.valid \">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tThis field is required.\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"topicsCovered\">Topics Covered\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<textarea class=\"form-control m-input m-input--air\" [(ngModel)]=\"certifications.topicsCovered\" #topicsCovered=\"ngModel\" id=\"topicsCovered\" name=\"topicsCovered\" placeholder=\"Enter topics covered\" type=\"text\" rows=\"3\"></textarea>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-form__actions\">\r\n\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-danger\" *ngIf=\"certifications._id\" (click)=\"deleteCertificationInfo(certifications._id)\"><i class=\"fa fa-close\"></i>Delete</button>\r\n\t\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success\">{{certifications._id ? 'Update':'Save'}}</button>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-portlet__foot m-portlet__foot--fit\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-form__actions\">\r\n\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-success\" [disabled]=\"isAdded('certification')\" (click)=\"addNewHtmlContain('certification')\"><i class=\"fa fa-plus\"></i> Add\r\n\t\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"tab-pane\" role=\"tabpanel\" [ngClass]=\"{'active show':tabName=='employment'}\">\r\n\t\t\t\t\t\t\t<div class=\"m-accordion m-accordion--default m-accordion--toggle-arrow\" id=\"m_accordion_5\" role=\"tablist\">\r\n\t\t\t\t\t\t\t\t<div class=\"m-accordion__item m-accordion__item--success\">\r\n\t\t\t\t\t\t\t\t<div class=\"m-accordion__item-head collapsed\" srole=\"tab\" id=\"m_accordion_5_item_12_head\" data-toggle=\"collapse\" href=\"#m_accordion_5_item_12_body\" aria-expanded=\"false\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"m-accordion__item-icon\"><i class=\"fa flaticon-user-ok\"></i></span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"m-accordion__item-title\">Previous Employment Details</span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"m-accordion__item-mode\"></span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"m-accordion__item-body collapse\" id=\"m_accordion_5_item_12_body\" role=\"tabpanel\" aria-labelledby=\"m_accordion_5_item_12_head\" data-parent=\"#m_accordion_5\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-10\"> </div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-2 accordian-refresh\">\r\n\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-secondary\" type=\"button\" (click)=\"loadEmploymentDetails();\"> <i class=\"fa fa-refresh\"></i> </button>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-accordion__item-content\">\r\n\t\t\t\t\t\t\t\t\t\t<div *ngFor=\"let previousEmployment of previousEmploymentDetails ;let i=index\">\r\n\t\t\t\t\t\t\t\t\t\t\t<form class=\"m-form m-form--fit m-form--label-align-right\" #fpreviousEmploymentDetails=\"ngForm\" (ngSubmit)=\"fpreviousEmploymentDetails.valid && savePreviousEmploymentDetails(previousEmployment,i)\" novalidate=\"novalidate\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group m--margin-top-10\">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\" hidden=\"true\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"previousEmploymentDetails_id\" [(ngModel)]=\"previousEmployment._id\" #previousEmploymentDetails_id=\"ngModel\" class=\"form-control m-input m-input--air\" />\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\" hidden=\"true\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"emp_id\" [(ngModel)]=\"previousEmployment.emp_id\" #emp_id=\"ngModel\" class=\"form-control m-input m-input--air\" />\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\" hidden=\"true\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"status\" [(ngModel)]=\"previousEmployment.status\" #status=\"ngModel\" class=\"form-control m-input m-input--air\" />\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"companyName\">Company Name\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"required\" aria-required=\"true\"> * </span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control m-input m-input--air\" [(ngModel)]=\"previousEmployment.companyName\" #companyName=\"ngModel\" id=\"companyName\" name=\"companyName\" placeholder=\"Enter company name\" type=\"text\" required>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-control-feedback has-danger\" *ngIf=\"fpreviousEmploymentDetails.submitted && !companyName.valid \">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tThis field is required.\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"companyBusiness\">Company Business\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"required\" aria-required=\"true\"> * </span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"previousEmployment.companyBusiness\" #companyBusiness=\"ngModel\" name=\"companyBusiness\" placeholder=\"Enter company business\" id=\"companyBusiness\" class=\"form-control m-input m-input--air\" required>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-control-feedback has-danger\" *ngIf=\"fpreviousEmploymentDetails.submitted && !companyBusiness.valid \">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tThis field is required.\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"prevDesignation\">Previous Designation\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"required\" aria-required=\"true\"> * </span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"previousEmployment.designation\" #prevDesignation=\"ngModel\" name=\"prevDesignation\" placeholder=\"Enter Previous Designation \" id=\"prevDesignation\" class=\"form-control m-input m-input--air\" required>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-control-feedback has-danger\" *ngIf=\"fpreviousEmploymentDetails.submitted && !prevDesignation.valid \">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tThis field is required.\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"department\">Department\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"previousEmployment.department\" #department=\"ngModel\" name=\"department\" placeholder=\"Enter department\" id=\"department\" class=\"form-control m-input m-input--air\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-3 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"epf\">Employment Period From\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control m-input m-input--air\" placeholder=\"YYYY-DD-MM\" [readonly]=\"true\"  name=\"epf\" [(ngModel)]=\"previousEmployment.employmentPeriodFrom\" #epf=\"ngModel\" bsDatepicker [bsConfig]=\"{ dateInputFormat: 'DD/MM/YYYY' }\"  (bsValueChange)=\"previousEmployment.employmentPeriodTo=''\" [maxDate]=\"currentDate\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-3 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"ept\">Employment Period To\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t   <input class=\"form-control m-input m-input--air\" placeholder=\"YYYY-DD-MM\" [readonly]=\"true\"  name=\"ept\" [(ngModel)]=\"previousEmployment.employmentPeriodTo\" #ept=\"ngModel\" bsDatepicker [bsConfig]=\"{ dateInputFormat: 'DD/MM/YYYY' }\" [minDate]=\"previousEmployment.employmentPeriodFrom\" [maxDate]=\"currentDate\" >\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"companyLocation\">Company Location\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control m-input m-input--air\" [(ngModel)]=\"previousEmployment.companyLocation\" #companyLocation=\"ngModel\" id=\"companyLocation\" name=\"companyLocation\" placeholder=\"Enter company location\" type=\"text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"areaofExperience\">Area of Experience\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"required\" aria-required=\"true\"> * </span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<textarea class=\"form-control m-input m-input--air\" [(ngModel)]=\"previousEmployment.areaOfExperience\" #areaofExperience=\"ngModel\" id=\"areaofExperience\" name=\"areaofExperience\" placeholder=\"Enter area of experience\" type=\"text\" rows=\"3\" required></textarea>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-control-feedback has-danger\" *ngIf=\"fpreviousEmploymentDetails.submitted && !areaofExperience.valid \">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tThis field is required.\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"responsibility\">Responsibility\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<textarea class=\"form-control m-input m-input--air\" [(ngModel)]=\"previousEmployment.responsibility\" #responsibility=\"ngModel\" id=\"responsibility\" name=\"responsibility\" placeholder=\"Enter responsibility\" type=\"text\" rows=\"3\"></textarea>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-form__actions\">\r\n\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-danger\" *ngIf=\"previousEmployment._id\" (click)=\"deletePreviousEmployment(previousEmployment._id)\"><i class=\"fa fa-close\"></i>Delete</button>\r\n\t\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success\">{{previousEmployment._id ? 'Update':'Save'}}</button>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-portlet__foot m-portlet__foot--fit\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-form__actions\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-success\" [disabled]=\"isAdded('employment')\" (click)=\"addNewHtmlContain('employment')\"><i class=\"fa fa-plus\"></i> Add\r\n\t\t\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"tab-pane\" role=\"tabpanel\" [ngClass]=\"{'active show':tabName=='family'}\">\r\n\t\t\t\t\t\t\t<div class=\"m-accordion m-accordion--default m-accordion--toggle-arrow\" id=\"m_accordion_5\" role=\"tablist\">\r\n\t\t\t\t\t\t\t\t<div class=\"m-accordion__item m-accordion__item--success\">\r\n\t\t\t\t\t\t\t\t<div class=\"m-accordion__item-head collapsed\" srole=\"tab\" id=\"m_accordion_5_item_13_head\" data-toggle=\"collapse\" href=\"#m_accordion_5_item_13_body\" aria-expanded=\"false\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"m-accordion__item-icon\"><i class=\"fa fa-group\"></i></span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"m-accordion__item-title\">Family Info</span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"m-accordion__item-mode\"></span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"m-accordion__item-body collapse\" id=\"m_accordion_5_item_13_body\" role=\"tabpanel\" aria-labelledby=\"m_accordion_5_item_13_head\" data-parent=\"#m_accordion_5\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-10\"> </div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-2 accordian-refresh\">\r\n\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-secondary\" type=\"button\" (click)=\"loadFamilyInfoTabData();\"> <i class=\"fa fa-refresh\"></i> </button>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-accordion__item-content\">\r\n\t\t\t\t\t\t\t\t\t\t<div *ngFor=\"let family of familyInfo ;let i=index\">\r\n\t\t\t\t\t\t\t\t\t\t\t<form class=\"m-form m-form--fit m-form--label-align-right\" #ffamilyInfo=\"ngForm\" (ngSubmit)=\"ffamilyInfo.valid && saveFamilyInfo(family,i)\" novalidate=\"novalidate\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group m--margin-top-10\">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\" hidden=\"true\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"familyInfo_id\" [(ngModel)]=\"family._id\" #familyInfo_id=\"ngModel\" class=\"form-control m-input m-input--air\" />\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\" hidden=\"true\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"familyInfoemp_id\" [(ngModel)]=\"family.emp_id\" #familyInfoemp_id=\"ngModel\" class=\"form-control m-input m-input--air\" />\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\" hidden=\"true\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"familyInfostatus\" [(ngModel)]=\"family.status\" #familyInfostatus=\"ngModel\" class=\"form-control m-input m-input--air\" />\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"familyName\">Name\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"required\" aria-required=\"true\"> * </span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control m-input m-input--air\" [(ngModel)]=\"family.name\" #familyName=\"ngModel\" id=\"familyName\" name=\"familyName\" placeholder=\"Enter name\" type=\"text\" required>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-control-feedback has-danger\" *ngIf=\"ffamilyInfo.submitted && !familyName.valid \">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tThis field is required.\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"relation\">Relation\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"required\" aria-required=\"true\"> * </span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-select name=\"relation\" [items]=\"relationData\" bindLabel=\"relationName\" bindValue=\"_id\" placeholder=\"Select relation\" [(ngModel)]=\"family.relation_id\" #relation=\"ngModel\"  [clearable]=\"false\" required >\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-select>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-control-feedback has-danger\" *ngIf=\"ffamilyInfo.submitted && !relation.valid \">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tThis field is required.\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"fmobileNumber\">Mobile Number\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control m-input m-input--air\" [(ngModel)]=\"family.contact\" #mobileNumber=\"ngModel\" minlength=\"10\" maxlength=\"10\" id=\"fmobileNumber\" name=\"fmobileNumber\" placeholder=\"Enter mobile number\" type=\"text\" OnlyNumber=\"true\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-control-feedback has-danger\" *ngIf=\"ffamilyInfo.submitted\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"mobileNumber.errors?.maxlength || mobileNumber.errors?.minlength\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tPlease enter your 10 digit number\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"fbirthDate\">Birth Date</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control m-input m-input--air\" placeholder=\"YYYY-DD-MM\" [readonly]=\"true\"  name=\"fbirthDate\" [(ngModel)]=\"family.dateOfBirth\" #fbirthDate=\"ngModel\" bsDatepicker [bsConfig]=\"{ dateInputFormat: 'DD/MM/YYYY' }\" [maxDate]=\"currentDate\" >\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-form__actions\">\r\n\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-danger\" *ngIf=\"family._id\" (click)=\"deleteFamilyInfo(family._id)\"><i class=\"fa fa-close\"></i>Delete</button>\r\n\t\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success\">{{family._id ? 'Update':'Save'}}</button>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-portlet__foot m-portlet__foot--fit\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-form__actions\">\r\n\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-success\" [disabled]=\"isAdded('family')\" (click)=\"addNewHtmlContain('family')\"><i class=\"fa fa-plus\"></i> Add\r\n\t\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"tab-pane\" role=\"tabpanel\" [ngClass]=\"{'active show':tabName=='office'}\">\r\n\t\t\t\t\t\t\t<div class=\"m-accordion m-accordion--default m-accordion--toggle-arrow\" id=\"m_accordion_5\" role=\"tablist\">\r\n\t\t\t\t\t\t\t\t<div class=\"m-accordion__item m-accordion__item--success\">\r\n\t\t\t\t\t\t\t\t<div class=\"m-accordion__item-head collapsed\" srole=\"tab\" id=\"m_accordion_5_item_6_head\" data-toggle=\"collapse\" href=\"#m_accordion_5_item_6_body\" aria-expanded=\"false\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"m-accordion__item-icon\"><i class=\"fa fas fa-briefcase\"></i></span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"m-accordion__item-title\">Office Info</span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"m-accordion__item-mode\"></span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"m-accordion__item-body collapse\" id=\"m_accordion_5_item_6_body\" role=\"tabpanel\" aria-labelledby=\"m_accordion_5_item_6_head\" data-parent=\"#m_accordion_5\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-10\"> </div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-2 accordian-refresh\">\r\n\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-secondary\" type=\"button\" (click)=\"loadOfficeInfoTabData();\"> <i class=\"fa fa-refresh\"></i> </button>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-accordion__item-content\">\r\n\t\t\t\t\t\t\t\t\t\t<form class=\"m-form m-form--fit m-form--label-align-right\" #fofficeInfo=\"ngForm\" (ngSubmit)=\"fofficeInfo.valid && saveOfficeInfo()\" novalidate=\"novalidate\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group m--margin-top-10\">\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\" hidden=\"true\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"officeInfo_id\" [(ngModel)]=\"officeInfo._id\" #officeInfo_id=\"ngModel\" class=\"form-control m-input m-input--air\" />\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\" hidden=\"true\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"officeInfo_empid\" [(ngModel)]=\"officeInfo.emp_id\" #officeInfo_empid=\"ngModel\" class=\"form-control m-input m-input--air\" />\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\" hidden=\"true\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"officeInfostatus\" [(ngModel)]=\"officeInfo.status\" #officeInfostatus=\"ngModel\" class=\"form-control m-input m-input--air\" />\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"employeeName\">Employee Name\r\n\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control m-input m-input--air\" [(ngModel)]=\"officeInfo.fullName\" #employeeName=\"ngModel\" id=\"employeeName\" name=\"employeeName\" placeholder=\"Enter employee name\" type=\"text\">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"employeeId\">Employee ID\r\n\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" readonly name=\"employeeId\" [(ngModel)]=\"officeInfo.userName\" #employeeId=\"ngModel\" placeholder=\"Enter employee ID\" id=\"employeeId\" class=\"form-control m-input m-input--air\">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"idCardNumber\">ID card No.\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"required\" aria-required=\"true\"> * </span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"idCardNumber\" [(ngModel)]=\"officeInfo.idCardNumber\" #idCardNumber=\"ngModel\" placeholder=\"Enter ID card No\" id=\"idCardNumber\" maxlength=\"15\" class=\"form-control m-input m-input--air\" required>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-control-feedback has-danger\" *ngIf=\"fofficeInfo.submitted && !idCardNumber.valid \">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tThis field is required.\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"officePhoneNumber\">Office Phone Number\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"required\" aria-required=\"true\"> * </span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control m-input m-input--air\" [(ngModel)]=\"officeInfo.officePhone\" #officePhoneNumber=\"ngModel\" maxlength=\"10\" id=\"officePhoneNumber\" name=\"officePhoneNumber\" placeholder=\"Enter office phone no\" type=\"text\" OnlyNumber=\"true\" required>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-control-feedback has-danger\" *ngIf=\"fofficeInfo.submitted && !officePhoneNumber.valid \">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tThis field is required.\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"officeMobileNumber\">Office Mobile Number\r\n\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input name=\"officeMobileNumber\" [(ngModel)]=\"officeInfo.officeMobile\" #officeMobileNumber=\"ngModel\" id=\"officeMobileNumber\" maxlength=\"10\" type=\"text\" class=\"form-control m-input m-input--air\" placeholder=\"Enter office mobile no\" OnlyNumber=\"true\">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"officeEmailId\">Office Email ID\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"required\" aria-required=\"true\"> * </span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input  [(ngModel)]=\"officeInfo.officeEmail\" #officeEmail=\"ngModel\" placeholder=\"Enter office email id\" name=\"officeEmailId\" type=\"text\" class=\"form-control m-input m-input--air\" email required>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-control-feedback has-danger\" *ngIf=\"fofficeInfo.submitted && !officeEmail.valid \">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tThis field is required.\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"facility\">Facility\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"required\" aria-required=\"true\"> * </span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control m-input m-input--air\" [(ngModel)]=\"officeInfo.facility\" #facility=\"ngModel\" id=\"facility\" name=\"facility\" placeholder=\"Enter facility\" type=\"text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-control-feedback has-danger\" *ngIf=\"fofficeInfo.submitted && !officePhoneNumber.valid \">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tThis field is required.\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"city\">City\r\n\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input name=\"city\" id=\"city\" [(ngModel)]=\"officeInfo.city\" #city=\"ngModel\" type=\"text\" class=\"form-control m-input m-input--air\" placeholder=\"Enter city\">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"country\">Country\r\n\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<ng-select name=\"country\" [items]=\"countryData\" bindLabel=\"text\" bindValue=\"id\" placeholder=\"Select Country\" [(ngModel)]=\"officeInfo.country\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t</ng-select>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"costCenter\">Cost Center\r\n\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input name=\"costCenter\" [(ngModel)]=\"officeInfo.costCentre\" #costCenter=\"ngModel\" placeholder=\"Enter cost center\" id=\"costCenter\" type=\"text\" class=\"form-control m-input m-input--air\">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"dateOfJoining\">Date of Joining</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control m-input m-input--air\" placeholder=\"YYYY-DD-MM\" [readonly]=\"true\"  name=\"dateOfJoining\" [(ngModel)]=\"officeInfo.dateOfJoining\" (bsValueChange)=\"officeInfo.dateOfConfirmation=''\" #dateOfJoining=\"ngModel\" bsDatepicker [bsConfig]=\"{ dateInputFormat: 'DD/MM/YYYY' }\"  required>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"dateOfConfermation\">Date of Confirmation</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control m-input m-input--air\" placeholder=\"YYYY-DD-MM\" [readonly]=\"true\"  name=\"dateOfConfermation\" [minDate]=\"officeInfo.dateOfJoining\"  [(ngModel)]=\"officeInfo.dateOfConfirmation\" #dateOfConfermation=\"ngModel\"  bsDatepicker [bsConfig]=\"{ dateInputFormat: 'DD/MM/YYYY' }\"  required>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"workPermitNumber\">Work Permit Number\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"required\" aria-required=\"true\"> * </span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"officeInfo.workPermitNumber\" #workPermitNumber=\"ngModel\" name=\"workPermitNumber\" placeholder=\"Enter work permit no\" id=\"idCardNumber\" maxlength=\"10\" class=\"form-control m-input m-input--air\" required>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-control-feedback has-danger\" *ngIf=\"fofficeInfo.submitted && !workPermitNumber.valid \">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tThis field is required.\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"effectiveDate\">Work Permit Effective Date</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control m-input m-input--air\" placeholder=\"YYYY-DD-MM\" [readonly]=\"true\"  name=\"effectiveDate\" [(ngModel)]=\"officeInfo.workPermitEffectiveDate\" (bsValueChange)=\"officeInfo.workPermitExpiryDate=''\" #doj=\"ngModel\" bsDatepicker [bsConfig]=\"{ dateInputFormat: 'DD/MM/YYYY' }\" required>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"expiryDate\">Work Permit Expiry Date</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control m-input m-input--air\" placeholder=\"YYYY-DD-MM\" [readonly]=\"true\"  name=\"expiryDate\" [(ngModel)]=\"officeInfo.workPermitExpiryDate\" [minDate]=\"officeInfo.workPermitEffectiveDate\" #expiryDate=\"ngModel\" bsDatepicker [bsConfig]=\"{ dateInputFormat: 'DD/MM/YYYY' }\" required>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-form__actions\">\r\n\t\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success\">{{officeInfo._id ? 'Update':'Save'}}</button>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"m-accordion__item m-accordion__item--success\">\r\n\t\t\t\t\t\t\t\t<div class=\"m-accordion__item-head collapsed\" srole=\"tab\" id=\"m_accordion_5_item_8_head\" data-toggle=\"collapse\" href=\"#m_accordion_5_item_8_body\" aria-expanded=\"false\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"m-accordion__item-icon\"><i class=\"fa flaticon-user-ok\"></i></span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"m-accordion__item-title\">Position Details</span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"m-accordion__item-mode\"></span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"m-accordion__item-body collapse\" id=\"m_accordion_5_item_8_body\" role=\"tabpanel\" aria-labelledby=\"m_accordion_5_item_8_head\" data-parent=\"#m_accordion_5\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-10\"> </div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-2 accordian-refresh\">\r\n\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-secondary\" type=\"button\" (click)=\"loadPositionDetailsTabData();\"> <i class=\"fa fa-refresh\"></i> </button>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-accordion__item-content\">\r\n\t\t\t\t\t\t\t\t\t\t<form class=\"m-form m-form--fit m-form--label-align-right\" #fpositionDetails=\"ngForm\" (ngSubmit)=\"fpositionDetails.valid && savePositionInfo()\"  novalidate=\"novalidate\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\" hidden=\"true\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"positionDetails_id\" [(ngModel)]=\"positionDetails._id\" #positionDetails_id=\"ngModel\" class=\"form-control m-input m-input--air\" />\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\" hidden=\"true\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"positionDetails_empid\" [(ngModel)]=\"positionDetails.emp_id\" #positionDetails_empid=\"ngModel\" class=\"form-control m-input m-input--air\" />\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\" hidden=\"true\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"positionDetailsstatus\" [(ngModel)]=\"positionDetails.status\" #positionDetailsstatus=\"ngModel\" class=\"form-control m-input m-input--air\" />\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-form__group form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"form_control_1\">Company Name</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"required\" aria-required=\"true\"> * </span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-select class=\"m-input m-input--air\" name=\"companyName\" [items]=\"companiesData\" bindLabel=\"companyName\" bindValue=\"_id\" placeholder=\"Select Company Name\" [(ngModel)]=\"positionDetails.company_id\" #companyName=\"ngModel\" (change)=\"loadHRSpoce(positionDetails.company_id)\" [clearable]=\"false\" required></ng-select>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-control-feedback has-danger\" *ngIf=\"fpositionDetails.submitted && !companyName.valid \">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tThis field is required.\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-form__group form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"form_control_1\">Division</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"required\" aria-required=\"true\">* </span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-select class=\"m-input m-input--air\" name=\"division\" [items]=\"divisionData\" bindLabel=\"divisionName\" bindValue=\"_id\" placeholder=\"Select Division\" (change)=\"loadDepartment(positionDetails.division_id)\" [(ngModel)]=\"positionDetails.division_id\" #division=\"ngModel\" (change)=\"loadDepartment(positionDetails.division_id)\" [clearable]=\"false\" required></ng-select>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-control-feedback has-danger\" *ngIf=\"fpositionDetails.submitted && !division.valid \">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tThis field is required.\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-form__group form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"form_control_1\">Department</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"required\" aria-required=\"true\">* </span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-select class=\"m-input m-input--air\" name=\"department\" [items]=\"deparmentData\" bindLabel=\"departmentName\" bindValue=\"_id\" placeholder=\"Select Department\" (change)=\"loadVertical(positionDetails.department_id)\" [(ngModel)]=\"positionDetails.department_id\" [clearable]=\"false\" #department=\"ngModel\" required></ng-select>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-control-feedback has-danger\" *ngIf=\"fpositionDetails.submitted && !department.valid \">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tThis field is required.\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"form_control_1\">Vertical</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-select class=\"m-input m-input--air\" name=\"vertical\" [items]=\"verticalData\" bindLabel=\"verticalName\" bindValue=\"_id\" placeholder=\"Select Vertical\" (change)=\"loadSubVertical(positionDetails.vertical_id)\" [(ngModel)]=\"positionDetails.vertical_id\" #vertical=\"ngModel\" (change)=\"loadSubVertical(positionDetails.vertical);\"></ng-select>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-form__group form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"form_control_1\">Sub Vertical</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-select class=\"m-input m-input--air\" name=\"subVertical\" [items]=\"subverticalData\" bindLabel=\"subVerticalName\" bindValue=\"_id\" placeholder=\"Select Sub Vertical\" [(ngModel)]=\"positionDetails.subVertical_id\" #subVertical=\"ngModel\"></ng-select>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-form__group form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"form_control_1\">Management Type</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"required\" aria-required=\"true\"> * </span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-select class=\"m-input m-input--air\" name=\"managementType\" [items]=\"managementTypeData\" bindLabel=\"managementTypeName\" bindValue=\"_id\" placeholder=\"Select Management Type\" [(ngModel)]=\"positionDetails.managementType_id\" (change)=\"loadEmploymentType(positionDetails.managementType_id)\" #managementType=\"ngModel\" [clearable]=\"false\" required></ng-select>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-control-feedback has-danger\" *ngIf=\"fpositionDetails.submitted && !managementType.valid \">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tThis field is required.\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-form__group form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"form_control_1\">Employment Type</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"required\" aria-required=\"true\"> * </span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-select class=\"m-input m-input--air\" name=\"employmentType\" [items]=\"employmentTypeData\" bindLabel=\"employmentTypeName\" bindValue=\"_id\" placeholder=\"Select Employment Type\" [(ngModel)]=\"positionDetails.employmentType_id\" (change)=\"loadGrade(positionDetails.managementType_id,positionDetails.employmentType_id)\" #employmentType=\"ngModel\" [clearable]=\"false\" required></ng-select>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-control-feedback has-danger\" *ngIf=\"fpositionDetails.submitted && !employmentType.valid \">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tThis field is required.\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\" *ngIf=\"positionDetails.employmentType_id==1\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-form__group form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"form_control_1\">Employment Status</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"required\" aria-required=\"true\"> * </span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-select class=\"m-input m-input--air\" name=\"confirmationStatus\" [items]=\"employmentStatusData\" bindLabel=\"employmentStatusName\" bindValue=\"_id\" placeholder=\"Select Confirmation/Probation Status\" [(ngModel)]=\"positionDetails.employmentStatus_id\" #confirmationStatus=\"ngModel\" [clearable]=\"false\" required></ng-select>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-control-feedback has-danger\" *ngIf=\"fpositionDetails.submitted && !confirmationStatus.valid \">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tThis field is required.\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\" *ngIf=\"positionDetails.employmentType_id > 1\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-form__group form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"form_control_1\">Tenure of Contract/Internship (in months)</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"required\" aria-required=\"true\"> * </span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"tenure\" id=\"tenure\" data-required=\"1\" class=\"form-control m-input m-input--air\" [(ngModel)]=\"positionDetails.tenureOfContract\" #tenure=\"ngModel\" OnlyNumber=\"true\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-control-feedback has-danger\" *ngIf=\"fpositionDetails.submitted && !tenure.valid \">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tThis field is required.\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-form__group form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"form_control_1\">Grade</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"required\" aria-required=\"true\">* </span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-select class=\"m-input m-input--air\" name=\"employeeGrade\" [items]=\"gradeData\" bindLabel=\"gradeName\" bindValue=\"_id\" placeholder=\"Select Grade\" (change)=\"loadDesignation(positionDetails.grade_id);loadSupervisor(positionDetails.grade_id)\" [(ngModel)]=\"positionDetails.grade_id\" #employeeGrade=\"ngModel\" (change)=\"loadSupervisor(positionDetails.grade_id)\" [clearable]=\"false\" required></ng-select>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-control-feedback has-danger\" *ngIf=\"fpositionDetails.submitted && !employeeGrade.valid \">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tThis field is required.\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-form__group form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"form_control_1\">Designation</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"required\" aria-required=\"true\">* </span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-select class=\"m-input m-input--air\" name=\"designation\" [items]=\"designationData\" bindLabel=\"designationName\" bindValue=\"_id\" placeholder=\"Select Designation\" [(ngModel)]=\"positionDetails.designation_id\" #designation=\"ngModel\" [clearable]=\"false\" required></ng-select>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-control-feedback has-danger\" *ngIf=\"fpositionDetails.submitted && !designation.valid \">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tThis field is required.\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-form__group form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"form_control_1\">Job Title</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"jobTitle\" id=\"jobTitle\" data-required=\"1\" class=\"form-control m-input m-input--air\" [(ngModel)]=\"positionDetails.jobTitle\" [(ngModel)]=\"positionDetails.jobTitle\" #jobTitle=\"ngModel\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-form__group form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"form_control_1\">Supervisor</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"required\" aria-required=\"true\"> * </span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-select class=\"m-input m-input--air\" name=\"primarySupervisorEmp\" [items]=\"supervisorData\" bindLabel=\"fullName\" bindValue=\"_id\" placeholder=\"Select Supervisor\" [(ngModel)]=\"positionDetails.primarySupervisorEmp_id\" #primarySupervisorEmp=\"ngModel\" [clearable]=\"false\" required></ng-select>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-control-feedback has-danger\" *ngIf=\"fpositionDetails.submitted && !primarySupervisorEmp.valid \">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tThis field is required.\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-form__group form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"form_control_1\">HR SPOC</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"required\" aria-required=\"true\"> * </span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-select class=\"m-input m-input--air\" name=\"hrspoc\" [items]=\"hrspocData\" bindLabel=\"fullName\" bindValue=\"_id\" placeholder=\"Select HR SPOC\" [(ngModel)]=\"positionDetails.hrspoc_id\" #hrspoc=\"ngModel\" (change)=\"loadBuisnessHrHead(positionDetails.hrspoc_id)\" [clearable]=\"false\" required></ng-select>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-control-feedback has-danger\" *ngIf=\"fpositionDetails.submitted && !hrspoc.valid \">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tThis field is required.\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-form__group form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"control-label\">Business HR Head\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"required\" aria-required=\"true\">* </span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-select class=\"m-input m-input--air\" name=\"businessHrHead\" [items]=\"buisnessHrHeadData\" bindLabel=\"fullName\" bindValue=\"_id\" placeholder=\"Select Business HR Head\" [(ngModel)]=\"positionDetails.businessHrHead_id\" #businessHrHead=\"ngModel\" (change)=\"loadGroupHrHead(positionDetails.businessHrHead_id)\" [clearable]=\"false\" required></ng-select>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-control-feedback has-danger\" *ngIf=\"fpositionDetails.submitted && !businessHrHead.valid \">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tThis field is required.\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-form__group form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"control-label\">Group HR Head\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"required\" aria-required=\"true\">* </span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-select class=\"m-input m-input--air\" name=\"groupHrHead\" [items]=\"groupHrHeadData\" bindLabel=\"fullName\" bindValue=\"_id\" placeholder=\"Select Group HR Head\" [(ngModel)]=\"positionDetails.groupHrHead_id\" #groupHrHead=\"ngModel\" [clearable]=\"false\" required></ng-select>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-control-feedback has-danger\" *ngIf=\"fpositionDetails.submitted && !groupHrHead.valid \">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tThis field is required.\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-form__actions\">\r\n\t\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success\">{{positionDetails._id ? 'Update':'Save'}}</button>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"m-accordion__item m-accordion__item--success\">\r\n\t\t\t\t\t\t\t\t<div class=\"m-accordion__item-head collapsed\" srole=\"tab\" id=\"m_accordion_5_item_15_head\" data-toggle=\"collapse\" href=\"#m_accordion_5_item_15_body\" aria-expanded=\"false\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"m-accordion__item-icon\"><i class=\"fa flaticon-user-ok\"></i></span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"m-accordion__item-title\">Performance Diary</span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"m-accordion__item-mode\"></span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"m-accordion__item-body collapse\" id=\"m_accordion_5_item_15_body\" role=\"tabpanel\" aria-labelledby=\"m_accordion_5_item_15_head\" data-parent=\"#m_accordion_5\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-10\"> </div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-2 accordian-refresh\">\r\n\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-secondary\" type=\"button\" (click)=\"loadPerformanceDairyTabData();\"> <i class=\"fa fa-refresh\"></i> </button>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-accordion__item-content\">\r\n\t\t\t\t\t\t\t\t\t\t<form class=\"m-form m-form--fit m-form--label-align-right\" #fperformanceDiary=\"ngForm\" novalidate=\"novalidate\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group m--margin-top-10\">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\" hidden=\"true\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"performanceDiary_id\" [(ngModel)]=\"performanceDiary._id\" #performanceDiary_id=\"ngModel\" class=\"form-control m-input m-input--air\" />\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\" hidden=\"true\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"performanceDiary_empid\" [(ngModel)]=\"performanceDiary.emp_id\" #performanceDiary_empid=\"ngModel\" class=\"form-control m-input m-input--air\" />\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\" hidden=\"true\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"performanceDiarystatus\" [(ngModel)]=\"performanceDiary.status\" #performanceDiarystatus=\"ngModel\" class=\"form-control m-input m-input--air\" />\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"performanceRating1\">Performance Rating FY 15_ 16\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control m-input m-input--air\" [(ngModel)]=\"performanceDiary.performanceRating1\" #performanceRating1=\"ngModel\" id=\"performanceRating1\" name=\"performanceRating1\" placeholder=\"Enter performance rating FY 15_ 16\" type=\"text\" OnlyNumber=\"true\" OnlyNumber=\"true\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"performanceRating2\">Performance Rating FY 16_ 17\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control m-input m-input--air\" [(ngModel)]=\"performanceDiary.performanceRating2\" #performanceRating2=\"ngModel\" id=\"performanceRating2\" name=\"performanceRating2\" placeholder=\"Enter performance rating FY 16_ 17\" type=\"text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-form__actions\">\r\n\t\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success\">{{performanceDiary._id ? 'Update':'Save'}}</button>\r\n\t\t\t\t\t\t\t\t\t\t\t<button type=\"reset\" *ngIf=\"!performanceDiary._id\" class=\"btn btn-secondary\">Cancel</button>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"tab-pane\" role=\"tabpanel\" [ngClass]=\"{'active show':tabName=='payroll'}\">\r\n\t\t\t\t\t\t\t<div class=\"m-accordion m-accordion--default m-accordion--toggle-arrow\" id=\"m_accordion_5\" role=\"tablist\">\r\n\t\t\t\t\t\t\t\t<div class=\"m-accordion__item m-accordion__item--success\">\r\n\t\t\t\t\t\t\t\t<div class=\"m-accordion__item-head collapsed\" srole=\"tab\" id=\"m_accordion_5_item_16_head\" data-toggle=\"collapse\" href=\"#m_accordion_5_item_16_body\" aria-expanded=\"false\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"m-accordion__item-icon\"><i class=\"fa fa-university\"></i></span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"m-accordion__item-title\">Bank Details</span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"m-accordion__item-mode\"></span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"m-accordion__item-body collapse\" id=\"m_accordion_5_item_16_body\" role=\"tabpanel\" aria-labelledby=\"m_accordion_5_item_16_head\" data-parent=\"#m_accordion_5\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-10\"> </div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-2 accordian-refresh\">\r\n\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-secondary\" type=\"button\" (click)=\"loadBankDetails();\"> <i class=\"fa fa-refresh\"></i> </button>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-accordion__item-content\">\r\n\t\t\t\t\t\t\t\t\t\t<form class=\"m-form m-form--fit m-form--label-align-right\" (ngSubmit)=\"fbankDetails.valid && saveBankDetails()\" #fbankDetails=\"ngForm\" novalidate=\"novalidate\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group m--margin-top-10\">\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\" hidden=\"true\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"bankDetails_id\" [(ngModel)]=\"bankDetails._id\" #bankDetails_id=\"ngModel\" class=\"form-control m-input m-input--air\" />\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\" hidden=\"true\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"bankDetailsemp_id\" [(ngModel)]=\"bankDetails.emp_id\" #bankDetailsemp_id=\"ngModel\" class=\"form-control m-input m-input--air\" />\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"bankName\">Bank Name\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"required\" aria-required=\"true\"> * </span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control m-input m-input--air\" [(ngModel)]=\"bankDetails.bankName\" #bankName=\"ngModel\" id=\"bankName\" name=\"bankName\" placeholder=\"Enter bank name\" type=\"text\" required>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-control-feedback has-danger\" *ngIf=\"fbankDetails.submitted && !bankName.valid \">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tThis field is required.\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"accountName\">Account Name\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"required\" aria-required=\"true\"> * </span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control m-input m-input--air\" [(ngModel)]=\"bankDetails.accountName\" #accountName=\"ngModel\" id=\"accountName\" name=\"accountName\" placeholder=\"Enter Account Name\" type=\"text\" required>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-control-feedback has-danger\" *ngIf=\"fbankDetails.submitted && !accountName.valid \">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tThis field is required.\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"accountNumber\">Account Number\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"required\" aria-required=\"true\"> * </span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control m-input m-input--air\" maxlength=\"15\" [(ngModel)]=\"bankDetails.accountNumber\" #accountNumber=\"ngModel\" id=\"accountNumber\" name=\"accountNumber\" placeholder=\"Enter account number\" type=\"text\">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"currency\">Currency\r\n\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<ng-select name=\"currency\" [items]=\"currencyArrData\" bindLabel=\"text\" bindValue=\"id\" [clearable]=\"false\" placeholder=\"Select currency\" [(ngModel)]=\"bankDetails.currency\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t</ng-select>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-form__actions\">\r\n\t\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success\">{{bankDetails._id ? 'Update':'Save'}}</button>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"m-accordion m-accordion--default m-accordion--toggle-arrow\" id=\"m_accordion_5\" role=\"tablist\">\r\n\t\t\t\t\t\t\t\t<div class=\"m-accordion__item m-accordion__item--success\">\r\n\t\t\t\t\t\t\t\t<div class=\"m-accordion__item-head collapsed\" srole=\"tab\" id=\"m_accordion_5_item_17_head\" data-toggle=\"collapse\" href=\"#m_accordion_5_item_17_body\" aria-expanded=\"false\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"m-accordion__item-icon\"><i class=\"fa fa-money\"></i></span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"m-accordion__item-title\">Salary Details (Monthly)</span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"m-accordion__item-mode\"></span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"m-accordion__item-body collapse\" id=\"m_accordion_5_item_17_body\" role=\"tabpanel\" aria-labelledby=\"m_accordion_5_item_17_head\" data-parent=\"#m_accordion_5\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-10\"> </div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-2 accordian-refresh\">\r\n\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-secondary\" type=\"button\" (click)=\"loadSalaryInfoTabData();\"> <i class=\"fa fa-refresh\"></i> </button>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-accordion__item-content\">\r\n\t\t\t\t\t\t\t\t\t\t<form class=\"m-form m-form--fit m-form--label-align-right\" (ngSubmit)=\"fsalaryDetails.valid && saveSalaryDetails()\" #fsalaryDetails=\"ngForm\" novalidate=\"novalidate\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group m--margin-top-10 accordian-refresh\">\r\n\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-secondary\" (click)=\"isHikeSalary(fsalaryDetails);\">Hike</button>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\" hidden=\"true\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"salaryDetails_id\" [(ngModel)]=\"salaryDetails._id\" #salaryDetails_id=\"ngModel\" class=\"form-control m-input m-input--air\" />\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\" hidden=\"true\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"salaryDetailsemp_id\" [(ngModel)]=\"salaryDetails.emp_id\" #salaryDetailsemp_id=\"ngModel\" class=\"form-control m-input m-input--air\" />\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\" hidden=\"true\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"salaryDetailsstatus\" [(ngModel)]=\"salaryDetails.status\" #salaryDetailsstatus=\"ngModel\" class=\"form-control m-input m-input--air\" />\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"basic\">Basic\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"required\" aria-required=\"true\"> * </span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control m-input m-input--air\" [(ngModel)]=\"salaryDetails.basic\" #basic=\"ngModel\" id=\"basic\" name=\"basic\" placeholder=\"Enter basic\" type=\"text\" required>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-control-feedback has-danger\" *ngIf=\"fsalaryDetails.submitted && !basic.valid \">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tThis field is required.\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"houseRent\">House Rent Allowance (HRA)\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"required\" aria-required=\"true\"> * </span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control m-input m-input--air\" [(ngModel)]=\"salaryDetails.hra\" #houseRent=\"ngModel\" id=\"houseRent\" name=\"houseRent\" placeholder=\"Enter house rent allowance (HRA)\" type=\"text\" required>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-control-feedback has-danger\" *ngIf=\"fsalaryDetails.submitted && !houseRent.valid \">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tThis field is required.\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"conveyanceAllowance\">Conveyance Allowance\r\n\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control m-input m-input--air\" [(ngModel)]=\"salaryDetails.conveyanceAllowance\" #conveyanceAllowance=\"ngModel\" id=\"conveyanceAllowance\" name=\"conveyanceAllowance\" placeholder=\"Enter conveyance allowance\" type=\"text\">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"leaveFareAssistance \">Leave Fare Assistance (LFA)\r\n\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control m-input m-input--air\" [(ngModel)]=\"salaryDetails.lfa\" #leaveFareAssistance=\"ngModel\" id=\"leaveFareAssistance\" name=\"leaveFareAssistance\" placeholder=\"Enter leave fare assistance (LFA)\" type=\"text\">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"medicalAllowance\">Medical Allowance\r\n\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control m-input m-input--air\" [(ngModel)]=\"salaryDetails.medicalAllowance\" #medicalAllowance=\"ngModel\" id=\"medicalAllowance\" name=\"medicalAllowance\" placeholder=\"Enter medical allowance\" type=\"text\">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"specialAllowance\">Special Allowance\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"required\" aria-required=\"true\"> * </span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control m-input m-input--air\" [(ngModel)]=\"salaryDetails.specialAllowance\" #specialAllowance=\"ngModel\" id=\"specialAllowance\" name=\"specialAllowance\" placeholder=\"Enter special allowance\" type=\"text\" required>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-control-feedback has-danger\" *ngIf=\"fsalaryDetails.submitted && !specialAllowance.valid \">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tThis field is required.\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"otherAllowance\">Other Allowance (If Any)\r\n\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control m-input m-input--air\" [(ngModel)]=\"salaryDetails.otherAllowance\" #otherAllowance=\"ngModel\" id=\"otherAllowance\" name=\"otherAllowance\" placeholder=\"Enter other allowance (if any)\" type=\"text\">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"lunchAllowance\">Lunch Allowance\r\n\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control m-input m-input--air\" [(ngModel)]=\"salaryDetails.lunchAllowance\" #lunchAllowance=\"ngModel\" id=\"lunchAllowance\" name=\"lunchAllowance\" placeholder=\"Enter lunch allowance\" type=\"text\">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"mobileAllowance\">Mobile Allowance\r\n\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control m-input m-input--air\" [(ngModel)]=\"salaryDetails.mobileAllowance\" #mobileAllowance=\"ngModel\" id=\"mobileAllowance\" name=\"mobileAllowance\" placeholder=\"Enter mobile allowance\" type=\"text\">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"grossSalary\">Gross Salary\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"required\" aria-required=\"true\"> * </span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control m-input m-input--air\" [(ngModel)]=\"salaryDetails.grossSalary\" #grossSalary=\"ngModel\" id=\"grossSalary\" name=\"grossSalary\" placeholder=\"Enter gross salary\" type=\"text\" required>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-control-feedback has-danger\" *ngIf=\"fsalaryDetails.submitted && !grossSalary.valid \">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tThis field is required.\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\">totalEarnings\">Total Earnings\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"required\" aria-required=\"true\"> * </span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control m-input m-input--air\" [(ngModel)]=\"salaryDetails.totalEarnings\" #totalEarnings=\"ngModel\" id=\"totalEarnings\" name=\"totalEarnings\" placeholder=\"Enter total earnings\" type=\"text\" required>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-control-feedback has-danger\" *ngIf=\"fsalaryDetails.submitted && !totalEarnings.valid \">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tThis field is required.\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"festivalAllowance\">Festival Allowance\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"required\" aria-required=\"true\"> * </span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<ng-select class=\"m-input m-input--air\" name=\"festivalAllowance\" [items]=\"festivalAllowanceData\" bindLabel=\"text\" bindValue=\"id\" placeholder=\"Select Festival Allowance\" [(ngModel)]=\"salaryDetails.festivalAllowance\" [clearable]=\"false\" #festivalAllowance=\"ngModel\" required></ng-select>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-control-feedback has-danger\" *ngIf=\"fsalaryDetails.submitted && !festivalAllowance.valid \">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tThis field is required.\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"providentFund\">Provident Fund Membership\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"required\" aria-required=\"true\"> * </span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<ng-select class=\"m-input m-input--air\" name=\"providentFund\" [items]=\"providentFundMemberShipData\" bindLabel=\"text\" bindValue=\"id\" placeholder=\"Select Provident Fund Membership\" [(ngModel)]=\"salaryDetails.providentFundMembership\" [clearable]=\"false\" #providentFund=\"ngModel\" required></ng-select>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-control-feedback has-danger\" *ngIf=\"fsalaryDetails.submitted && !providentFund.valid \">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tThis field is required.\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"gLifeInsurance\">Group Life Insurance\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"required\" aria-required=\"true\"> * </span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<ng-select class=\"m-input m-input--air\" name=\"gLifeInsurance\" [items]=\"groupLifeInsuranceData\" bindLabel=\"text\" bindValue=\"id\" placeholder=\"Select Group Life Insurance\" [(ngModel)]=\"salaryDetails.groupLifeInsurance\" [clearable]=\"false\" #gLifeInsurance=\"ngModel\" required></ng-select>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-control-feedback has-danger\" *ngIf=\"fsalaryDetails.submitted && !gLifeInsurance.valid \">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tThis field is required.\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"hospitalizationScheme\">Hospitalization Scheme\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"required\" aria-required=\"true\"> * </span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<ng-select class=\"m-input m-input--air\" name=\"hospitalizationScheme\" [items]=\"hospitalizationSchemeData\" bindLabel=\"text\" bindValue=\"id\" placeholder=\"Select Group Life Insurance\" [(ngModel)]=\"salaryDetails.hospitalizationScheme\" [clearable]=\"false\" #hospitalizationScheme=\"ngModel\" required></ng-select>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-control-feedback has-danger\" *ngIf=\"fsalaryDetails.submitted && !hospitalizationScheme.valid \">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tThis field is required.\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-form__actions\">\r\n\t\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success\">{{salaryDetails._id ? 'Update':'Save'}}</button>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"m-accordion m-accordion--default m-accordion--toggle-arrow\" id=\"m_accordion_5\" role=\"tablist\">\r\n\t\t\t\t\t\t\t\t<div class=\"m-accordion__item m-accordion__item--success\">\r\n\t\t\t\t\t\t\t\t<div class=\"m-accordion__item-head collapsed\" srole=\"tab\" id=\"m_accordion_5_item_19_head\" data-toggle=\"collapse\" href=\"#m_accordion_5_item_19_body\" aria-expanded=\"false\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"m-accordion__item-icon\"><i class=\"fa fas fa-car\"></i></span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"m-accordion__item-title\">Car Details</span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"m-accordion__item-mode\"></span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"m-accordion__item-body collapse\" id=\"m_accordion_5_item_19_body\" role=\"tabpanel\" aria-labelledby=\"m_accordion_5_item_19_head\" data-parent=\"#m_accordion_5\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-10\"> </div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-2 accordian-refresh\">\r\n\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-secondary\" type=\"button\" (click)=\"loadCarDetails();\"> <i class=\"fa fa-refresh\"></i> </button>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-accordion__item-content\">\r\n\t\t\t\t\t\t\t\t\t\t<form class=\"m-form m-form--fit m-form--label-align-right\" #fcarDetails=\"ngForm\" (ngSubmit)=\"fcarDetails.valid && saveCarDetails()\" novalidate=\"novalidate\">\r\n\t\t\t\t\t\t\t\t\t\t\t<h5 class=\"m--font-success\">Company Car</h5>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"row adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\" hidden=\"true\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"companyCarDetails_id\" [(ngModel)]=\"carDetails._id\" #companyCarDetails_id=\"ngModel\" class=\"form-control m-input m-input--air\" />\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\" hidden=\"true\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"companyCarDetailsemp_id\" [(ngModel)]=\"carDetails.emp_id\" #companyCarDetailsemp_id=\"ngModel\" class=\"form-control m-input m-input--air\" />\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\" hidden=\"true\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"companyCarDetailssstatus\" [(ngModel)]=\"carDetails.status\" #companyCarDetailssstatus=\"ngModel\" class=\"form-control m-input m-input--air\" />\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"registrationNumber\">Registration number\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"required\" aria-required=\"true\"> * </span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"carDetails.companyRegistrationNumber\" #companyRegistrationNumber=\"ngModel\" name=\"companyRegistrationNumber\" placeholder=\"Enter Registration number\" id=\"companyRegistrationNumber\" maxlength=\"15\" class=\"form-control m-input m-input--air\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-control-feedback has-danger\" *ngIf=\"fcarDetails.submitted && !companyRegistrationNumber.valid \">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tThis field is required.\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"effectiveDate\">Effective Date</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control m-input m-input--air\" placeholder=\"YYYY-DD-MM\" [readonly]=\"true\"  name=\"effectiveDate\" [(ngModel)]=\"carDetails.companyEffectiveDate\" #ed=\"ngModel\" bsDatepicker [bsConfig]=\"{ dateInputFormat: 'DD/MM/YYYY' }\"  >\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"expiryDate1\">Expiry Date</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control m-input m-input--air\" placeholder=\"YYYY-DD-MM\" [readonly]=\"true\"  name=\"expiryDate1\" [(ngModel)]=\"carDetails.companyExpiryDate\" #companyExpiryDate=\"ngModel\" bsDatepicker [bsConfig]=\"{ dateInputFormat: 'DD/MM/YYYY' }\"  >\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"fa\">Fuel Allowance\r\n\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"carDetails.companyFuelAllowance\" #fa=\"ngModel\" name=\"fa\" placeholder=\"Enter fuel allowance\" id=\"fa\" class=\"form-control m-input m-input--air\">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"companyMaintenanceAllowance\">Maintenance Allowance\r\n\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"carDetails.companyMaintenanceAllowance\" #companyMaintenanceAllowance=\"ngModel\" name=\"companyMaintenanceAllowance\" placeholder=\"Enter maintenance allowance\" id=\"maintenanceAllowance\" class=\"form-control m-input m-input--air\">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"companyDriverAllowance\">Driver Allowance\r\n\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"carDetails.companyDriverAllowance\" #companyDriverAllowance=\"ngModel\" name=\"companyDriverAllowance\" placeholder=\"Enter driver allowance\" id=\"driverAllowance\" class=\"form-control m-input m-input--air\">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"companyGrossPay\">Gross Pay\r\n\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"carDetails.companyGrossPay\" #companyGrossPay=\"ngModel\" name=\"companyGrossPay\" placeholder=\"Enter gross pay\" class=\"form-control m-input m-input--air\">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group m--margin-top-5\">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<h5 class=\"m--font-success .adn-form-title\">Personal Car</h5>\r\n\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"privateRegistrationNumber\">Registration number\r\n\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"carDetails.privateRegistrationNumber\" #privateRegistrationNumber=\"ngModel\" name=\"privateRegistrationNumber\" placeholder=\"Enter registration number\" id=\"regno\" maxlength=\"15\" class=\"form-control m-input m-input--air\">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"privateEffectiveDate\">Effective Date</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control m-input m-input--air\" placeholder=\"YYYY-DD-MM\" [readonly]=\"true\" name=\"privateEffectiveDate\" [(ngModel)]=\"carDetails.privateEffectiveDate\" #privateEffectiveDate=\"ngModel\" bsDatepicker [bsConfig]=\"{ dateInputFormat: 'DD/MM/YYYY' }\"  >\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"privateEffectiveDate\">Expiry Date</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control m-input m-input--air\" placeholder=\"YYYY-DD-MM\" [readonly]=\"true\" (focus)=\"d23.open()\" name=\"privateExpiryDate\" [(ngModel)]=\"carDetails.privateExpiryDate\" #privateExpiryDate=\"ngModel\" bsDatepicker [bsConfig]=\"{ dateInputFormat: 'DD/MM/YYYY' }\" >\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"privateCarUsageAllowance\">Usage Allowance\r\n\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"carDetails.privateCarUsageAllowance\" #privateCarUsageAllowance=\"ngModel\" name=\"privateCarUsageAllowance\" placeholder=\"Enter fuel allowance\" id=\"fa\" class=\"form-control m-input m-input--air\">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-form__actions\">\r\n\t\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success\">{{carDetails._id ? 'Update':'Save'}}</button>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n</div> -->"

/***/ }),

/***/ "./src/app/theme/pages/default/hr/employee/editEmployee/editEmployee.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditEmployeeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var EditEmployeeComponent = (function () {
    function EditEmployeeComponent() {
    }
    EditEmployeeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: ".m-grid__item.m-grid__item--fluid.m-wrapper--allEmployee",
            template: __webpack_require__("./src/app/theme/pages/default/hr/employee/editEmployee/editEmployee.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None,
        })
    ], EditEmployeeComponent);
    return EditEmployeeComponent;
}());



/***/ }),

/***/ "./src/app/theme/pages/default/hr/hr-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HrRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__hr_component__ = __webpack_require__("./src/app/theme/pages/default/hr/hr.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__ = __webpack_require__("./src/app/theme/pages/default/hr/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__email_bulkemail_bulkemail_component__ = __webpack_require__("./src/app/theme/pages/default/hr/email/bulkemail/bulkemail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__email_broadcast_broadcast_component__ = __webpack_require__("./src/app/theme/pages/default/hr/email/broadcast/broadcast.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__employee_allEmployee_allEmployee_component__ = __webpack_require__("./src/app/theme/pages/default/hr/employee/allEmployee/allEmployee.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__employee_addEmployee_addEmployee_component__ = __webpack_require__("./src/app/theme/pages/default/hr/employee/addEmployee/addEmployee.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__workFlows_learning_learning_component__ = __webpack_require__("./src/app/theme/pages/default/hr/workFlows/learning/learning.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__workFlows_initiate_initiate_component__ = __webpack_require__("./src/app/theme/pages/default/hr/workFlows/initiate/initiate.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__workFlows_pap_pap_component__ = __webpack_require__("./src/app/theme/pages/default/hr/workFlows/pap/pap.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__workFlows_pip_pip_component__ = __webpack_require__("./src/app/theme/pages/default/hr/workFlows/pip/pip.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__directory_directory_component__ = __webpack_require__("./src/app/theme/pages/default/hr/directory/directory.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__employee_editEmployee_editEmployee_component__ = __webpack_require__("./src/app/theme/pages/default/hr/employee/editEmployee/editEmployee.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//import { AuthGuard } from "../../../../auth/_guards/auth.guard";












var routes = [{
        path: '', component: __WEBPACK_IMPORTED_MODULE_2__hr_component__["a" /* HrComponent */],
        children: [
            { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__["a" /* DashboardComponent */] },
            { path: 'email/bulk', component: __WEBPACK_IMPORTED_MODULE_4__email_bulkemail_bulkemail_component__["a" /* BulkEmailComponent */] },
            { path: 'email/broadcast', component: __WEBPACK_IMPORTED_MODULE_5__email_broadcast_broadcast_component__["a" /* BroadCastComponent */] },
            { path: 'employee/add', component: __WEBPACK_IMPORTED_MODULE_7__employee_addEmployee_addEmployee_component__["a" /* AddEmployeeComponent */] },
            { path: 'employee/all', component: __WEBPACK_IMPORTED_MODULE_6__employee_allEmployee_allEmployee_component__["a" /* AllEmployeeComponent */] },
            { path: 'employee/edit', component: __WEBPACK_IMPORTED_MODULE_13__employee_editEmployee_editEmployee_component__["a" /* EditEmployeeComponent */] },
            { path: 'workflows/initiate', component: __WEBPACK_IMPORTED_MODULE_9__workFlows_initiate_initiate_component__["a" /* HrInitiateComponent */] },
            { path: 'workflows/learning', component: __WEBPACK_IMPORTED_MODULE_8__workFlows_learning_learning_component__["a" /* HrLearningComponent */] },
            { path: 'workflows/pap', component: __WEBPACK_IMPORTED_MODULE_10__workFlows_pap_pap_component__["a" /* HrPapComponent */] },
            { path: 'workflows/pip', component: __WEBPACK_IMPORTED_MODULE_11__workFlows_pip_pip_component__["a" /* HrPipComponent */] },
            { path: 'directory', component: __WEBPACK_IMPORTED_MODULE_12__directory_directory_component__["a" /* DirectoryComponent */] },
        ]
    }];
var HrRoutingModule = (function () {
    function HrRoutingModule() {
    }
    HrRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */]]
        })
    ], HrRoutingModule);
    return HrRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/pages/default/hr/hr.component.html":
/***/ (function(module, exports) {

module.exports = "<app-aside-nav></app-aside-nav>\r\n<router-outlet></router-outlet>\r\n\r\n"

/***/ }),

/***/ "./src/app/theme/pages/default/hr/hr.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HrComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HrComponent = (function () {
    function HrComponent() {
    }
    HrComponent.prototype.ngOnInit = function () {
    };
    HrComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: ".m-grid__item.m-grid__item--fluid.m-grid.m-grid--ver-desktop.m-grid--desktop.m-body",
            template: __webpack_require__("./src/app/theme/pages/default/hr/hr.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None,
        }),
        __metadata("design:paramtypes", [])
    ], HrComponent);
    return HrComponent;
}());



/***/ }),

/***/ "./src/app/theme/pages/default/hr/hr.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HrModule", function() { return HrModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__layouts_layout_module__ = __webpack_require__("./src/app/theme/layouts/layout.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__hr_component__ = __webpack_require__("./src/app/theme/pages/default/hr/hr.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard_component__ = __webpack_require__("./src/app/theme/pages/default/hr/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__email_bulkemail_bulkemail_component__ = __webpack_require__("./src/app/theme/pages/default/hr/email/bulkemail/bulkemail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__email_broadcast_broadcast_component__ = __webpack_require__("./src/app/theme/pages/default/hr/email/broadcast/broadcast.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__employee_allEmployee_allEmployee_component__ = __webpack_require__("./src/app/theme/pages/default/hr/employee/allEmployee/allEmployee.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__employee_editEmployee_editEmployee_component__ = __webpack_require__("./src/app/theme/pages/default/hr/employee/editEmployee/editEmployee.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__employee_addEmployee_addEmployee_component__ = __webpack_require__("./src/app/theme/pages/default/hr/employee/addEmployee/addEmployee.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__workFlows_learning_learning_component__ = __webpack_require__("./src/app/theme/pages/default/hr/workFlows/learning/learning.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__workFlows_initiate_initiate_component__ = __webpack_require__("./src/app/theme/pages/default/hr/workFlows/initiate/initiate.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__workFlows_pap_pap_component__ = __webpack_require__("./src/app/theme/pages/default/hr/workFlows/pap/pap.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__workFlows_pip_pip_component__ = __webpack_require__("./src/app/theme/pages/default/hr/workFlows/pip/pip.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__directory_directory_component__ = __webpack_require__("./src/app/theme/pages/default/hr/directory/directory.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__hr_routing_module__ = __webpack_require__("./src/app/theme/pages/default/hr/hr-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ng_select_ng_select__ = __webpack_require__("./node_modules/@ng-select/ng-select/esm5/ng-select.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ngx_pagination__ = __webpack_require__("./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ngx_chips__ = __webpack_require__("./node_modules/ngx-chips/esm5/ngx-chips.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__hr_service__ = __webpack_require__("./src/app/theme/pages/default/hr/hr.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__base_base_module__ = __webpack_require__("./src/app/base/base.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

















// import { SearchPipe } from "../../../../base/_pipes/search.pipes";
// import { OrderPipe } from "../../../../base/_pipes/order.pipes";
// import { KeysPipe } from "../../../../base/_pipes/key.pipes"
// import { CeilPipe } from "../../../../base/_pipes/ceil.pipes"
// import { SummernoteComponent } from "../../../../base/_components/summernote.component"



var HrModule = (function () {
    function HrModule() {
    }
    HrModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__layouts_layout_module__["a" /* LayoutModule */],
                //NgbModule.forRoot(),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_16__hr_routing_module__["a" /* HrRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_17__ng_select_ng_select__["a" /* NgSelectModule */],
                __WEBPACK_IMPORTED_MODULE_18_ngx_pagination__["a" /* NgxPaginationModule */],
                __WEBPACK_IMPORTED_MODULE_19_ngx_chips__["a" /* TagInputModule */],
                __WEBPACK_IMPORTED_MODULE_21__base_base_module__["a" /* BaseModule */]
            ], declarations: [
                __WEBPACK_IMPORTED_MODULE_4__hr_component__["a" /* HrComponent */],
                __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_6__email_bulkemail_bulkemail_component__["a" /* BulkEmailComponent */],
                __WEBPACK_IMPORTED_MODULE_7__email_broadcast_broadcast_component__["a" /* BroadCastComponent */],
                __WEBPACK_IMPORTED_MODULE_8__employee_allEmployee_allEmployee_component__["a" /* AllEmployeeComponent */],
                __WEBPACK_IMPORTED_MODULE_10__employee_addEmployee_addEmployee_component__["a" /* AddEmployeeComponent */],
                __WEBPACK_IMPORTED_MODULE_11__workFlows_learning_learning_component__["a" /* HrLearningComponent */],
                __WEBPACK_IMPORTED_MODULE_13__workFlows_pap_pap_component__["a" /* HrPapComponent */],
                __WEBPACK_IMPORTED_MODULE_14__workFlows_pip_pip_component__["a" /* HrPipComponent */],
                __WEBPACK_IMPORTED_MODULE_15__directory_directory_component__["a" /* DirectoryComponent */],
                __WEBPACK_IMPORTED_MODULE_9__employee_editEmployee_editEmployee_component__["a" /* EditEmployeeComponent */],
                __WEBPACK_IMPORTED_MODULE_12__workFlows_initiate_initiate_component__["a" /* HrInitiateComponent */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_20__hr_service__["a" /* HrService */]]
        })
    ], HrModule);
    return HrModule;
}());



/***/ }),

/***/ "./src/app/theme/pages/default/hr/hr.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HrService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_services_authService_service__ = __webpack_require__("./src/app/base/_services/authService.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HrService = (function () {
    function HrService(authService) {
        this.authService = authService;
    }
    HrService.prototype.addEmployee = function (data) {
        var url = "user/addEmployee";
        return this.authService.post(url, data).map(this.extractData).catch(this.handleError);
    };
    HrService.prototype.getAllEmployee = function () {
        var url = "user/getAllEmployee";
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    };
    HrService.prototype.loadDivision = function () {
        var url = "master/getAllDivision";
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    };
    HrService.prototype.savekraWorkFlowDetails = function (data) {
        var url = "kra/addKraWorkFlowInfo";
        return this.authService.post(url, data).map(this.extractData).catch(this.handleError);
    };
    HrService.prototype.extractData = function (res) {
        return res || {};
        // let body = res.json();
        // return body || { };
    };
    HrService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(errMsg);
    };
    HrService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__base_services_authService_service__["a" /* AuthService */]])
    ], HrService);
    return HrService;
}());



/***/ }),

/***/ "./src/app/theme/pages/default/hr/workFlows/initiate/initiate.component.css":
/***/ (function(module, exports) {

module.exports = ".m-datatable.m-datatable--default>.paginationtemplate>.m-datatable__pager{margin-top:20px}.m-datatable.m-datatable--default>.paginationtemplate>.m-datatable__pager.m-datatable__pager--top{margin-bottom:20px}.m-datatable.m-datatable--default>.paginationtemplate>.m-datatable__pager>.m-datatable__pager-nav{margin:10px 0 0;padding:0;display:inline-block}.m-datatable.m-datatable--default>.paginationtemplate>.m-datatable__pager>.m-datatable__pager-nav>li{padding:0;margin-right:5px;display:inline-block}.m-datatable.m-datatable--default>.paginationtemplate>.m-datatable__pager>.m-datatable__pager-nav>li:last-child{margin-right:0}.m-datatable.m-datatable--default>.paginationtemplate>.m-datatable__pager>.m-datatable__pager-nav>li>.m-datatable__pager-link{cursor:pointer;height:2.25rem;width:2.25rem;padding:0;border-radius:50%;position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-moz-justify-content:center;-ms-justify-content:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-moz-align-items:center;-ms-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center;vertical-align:middle;font-size:1rem;line-height:1rem;font-weight:400;color:#898b96}.m-datatable.m-datatable--default>.paginationtemplate>.m-datatable__pager>.m-datatable__pager-nav>li>.m-datatable__pager-link>i{font-size:1rem;text-align:center;display:inline-block}.m-datatable.m-datatable--default>.m-datatable__pager>.m-datatable__pager-nav>li>.m-datatable__pager-link.m-datatable__pager-link--more-next,.m-datatable.m-datatable--default>.paginationtemplate>.m-datatable__pager>.m-datatable__pager-nav>li>.m-datatable__pager-link.m-datatable__pager-link--more-prev{font-weight:600}.m-datatable.m-datatable--default>.paginationtemplate>.m-datatable__pager>.m-datatable__pager-nav>li>.m-pager-input{height:2.25rem;width:3.5rem;text-align:center;border-radius:15px!important}.m-datatable.m-datatable--default>.paginationtemplate>.m-datatable__pager>.m-datatable__pager-info{float:right;margin-top:10px}.m-datatable.m-datatable--default>.paginationtemplate>.m-datatable__pager>.m-datatable__pager-info .m-datatable__pager-size{margin-right:10px}.m-datatable.m-datatable--default>.paginationtemplate>.m-datatable__pager>.m-datatable__pager-info .m-datatable__pager-size .btn.dropdown-toggle{border-radius:20px!important;height:2.25rem;padding:.45rem 1rem}.m-datatable.m-datatable--default>.paginationtemplate>.m-datatable__pager>.m-datatable__pager-info .m-datatable__pager-size .dropdown-menu.inner>li.selected>a span.check-mark{margin-top:-.6rem}.m-datatable.m-datatable--default .m-datatable__row-detail .m-datatable__detail>.m-datatable>.m-datatable__pager{margin-top:10px;padding:0 20px 15px}@media (max-width:768px){.m-datatable.m-datatable--default>.paginationtemplate>.m-datatable__pager>.m-datatable__pager-info{float:none;display:block;margin:10px 0 0}}.m-datatable.m-datatable--default>.m-datatable__pager>.m-datatable__pager-nav>li>.m-datatable__pager-link.m-datatable__pager-link--last,.m-datatable.m-datatable--default>.m-datatable__pager>.m-datatable__pager-nav>li>.m-datatable__pager-link.m-datatable__pager-link--next,.m-datatable.m-datatable--default>.m-datatable__pager>.m-datatable__pager-nav>li>.m-datatable__pager-link.m-datatable__pager-link--prev,.m-datatable.m-datatable--default>.paginationtemplate>.m-datatable__pager>.m-datatable__pager-nav>li>.m-datatable__pager-link.m-datatable__pager-link--first{color:#716aca;background:#edecf8}.m-datatable.m-datatable--default>.m-datatable__pager>.m-datatable__pager-nav>li>.m-datatable__pager-link.m-datatable__pager-link--last:hover,.m-datatable.m-datatable--default>.m-datatable__pager>.m-datatable__pager-nav>li>.m-datatable__pager-link.m-datatable__pager-link--next:hover,.m-datatable.m-datatable--default>.m-datatable__pager>.m-datatable__pager-nav>li>.m-datatable__pager-link.m-datatable__pager-link--prev:hover,.m-datatable.m-datatable--default>.paginationtemplate>.m-datatable__pager>.m-datatable__pager-nav>li>.m-datatable__pager-link.m-datatable__pager-link--first:hover{background:#deddf3}.m-datatable.m-datatable--default>.paginationtemplate>.m-datatable__pager>.m-datatable__pager-nav>li>.m-datatable__pager-link:hover{color:#716aca;background:#edecf8}.m-datatable.m-datatable--default>.paginationtemplate>.m-datatable__pager>.m-datatable__pager-nav>li>.m-datatable__pager-link.m-datatable__pager-link--active{background:#716aca;color:#fff}.m-datatable.m-datatable--default>.paginationtemplate>.m-datatable__pager>.m-datatable__pager-nav>li>.m-pager-input{background:#edecf8;border-color:#edecf8}.m-datatable.m-datatable--default>.paginationtemplate>.m-datatable__pager>.m-datatable__pager-nav>li>.m-pager-input:focus{background:#deddf3;border-color:#deddf3}.m-datatable.m-datatable--default>.paginationtemplate>.m-datatable__pager>.m-datatable__pager-info .m-datatable__pager-size .btn.dropdown-toggle{background:#edecf8;color:#3f4047}.m-datatable.m-datatable--default>.paginationtemplate>.m-datatable__pager>.m-datatable__pager-info .m-datatable__pager-size .btn.dropdown-toggle:hover{background:#deddf3}\r\n"

/***/ }),

/***/ "./src/app/theme/pages/default/hr/workFlows/initiate/initiate.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"m-content\">\r\n\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t   <div class=\"m-portlet m-portlet--tabs m-portlet--success m-portlet--head-solid-bg m-portlet--head-sm\">\r\n\t\t\t\t\t  <div class=\"m-portlet__head\">\r\n\t\t\t\t\t\t <div class=\"m-portlet__head-caption\">\r\n\t\t\t\t\t\t\t<div class=\"m-portlet__head-title\">\r\n\t\t\t\t\t\t\t   <h3 class=\"m-portlet__head-text\">\r\n\t\t\t\t\t\t\t\t  Initiate Workflow\r\n\t\t\t\t\t\t\t\t  <small>\r\n\t\t\t\t\t\t\t\t  </small>\r\n\t\t\t\t\t\t\t   </h3>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t </div>\r\n\t\t\t\t\t  </div>\r\n\t\t\t\t\t  <div class=\"m-portlet__body\">\r\n\t\t\t\t\t\t <div class=\"m-section\" >\r\n\t\t \r\n\t\t\t\t\t\t\t<div class=\"m-section__content\"> \r\n\t\t\t\t\t\t\t\t\t<div class=\"form-body\">\t\t\t\t\t\t\t\t\t\t\t \r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t    <div class=\"col-md-4\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t  <div class=\"m-form__group form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  <label for=\"form_control_1\">Division</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  <ng-select class=\"m-input m-input--air\" name=\"division\" [items]=\"divisionData\" bindLabel=\"divisionName\"  bindValue=\"_id\" placeholder=\"Select Division\" [(ngModel)]=\"filterSearch.division_id\" (change)=\"loadDepartment(filterSearch.division_id)\"></ng-select>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t    </div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t    <div class=\"col-md-4\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-form__group form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"form_control_1\">Department</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-select class=\"m-input m-input--air\" name=\"department\" [items]=\"deparmentData\" [multiple]=\"true\" bindLabel=\"departmentName\"  bindValue=\"_id\" placeholder=\"Select Department\" [(ngModel)]=\"filterSearch.department_id\" [clearable]=\"false\"></ng-select>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-form__group form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"form_control_1\">Grade</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-select class=\"m-input m-input--air\" name=\"grade\" [items]=\"gradeData\" [multiple]=\"true\" bindLabel=\"gradeName\"  bindValue=\"_id\" placeholder=\"Select Grade\" [(ngModel)]=\"filterSearch.grades\"   ></ng-select>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t   </div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"form-actions\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t  <div class=\"col-md-12\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t <div class=\"m-form__actions\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-success submitForm\" type=\"submit\" id=\"search\" (click)=\"loadAllEmployee()\">Search</button>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t </div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t\t\t\t   </div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t </div>\r\n\t\t\t\t\t  </div>\r\n\t\t\t\t   </div>\r\n\t\t\t\t</div>\r\n\t\t\t </div>\r\n\t\t<div class=\"m-portlet m-portlet--mobile\">\r\n\t\t\t<div class=\"m-portlet__body\">\r\n\t\t\t\t<div class=\"m-form m-form--label-align-right m--margin-top-20 m--margin-bottom-30\">\r\n\t\t\t\t\t\t\t<div class=\"row align-items-center\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-xl-8 order-2 order-xl-1\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group row align-items-center\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-input-icon m-input-icon--left\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control m-input m-input--solid\" placeholder=\"Search...\" [(ngModel)]=\"search\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-input-icon__icon m-input-icon__icon--left\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"la la-search\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"m-datatable m-datatable--default m-datatable--brand m-datatable--loaded\">\r\n                    <table class=\"m-datatable__table\">\r\n\t\t\t\t\t\t\t<thead class=\"m-datatable__head\">\r\n\t\t\t\t\t\t\t\t\t<tr class=\"m-datatable__row\">\r\n\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t<th class=\"m-datatable__cell\" width=\"5%\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t</th>\r\n\t\t\t\t\t\t\t\t\t\t<th class=\"m-datatable__cell\" width=\"5%\" ></th>\r\n\t\t\t\t\t\t\t\t\t\t<th (click)=\"sort('fullName')\" class=\"m-datatable__cell m-datatable__cell--sort\" width=\"20%\" >\r\n\t\t\t\t\t\t\t\t\t\t\t<span>\r\n\t\t\t\t\t\t\t\t\t\t\t NAME\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"la\" *ngIf=\"key == 'fullName'\" [ngClass]=\"{'la-arrow-up':reverse,'la-arrow-down':!reverse}\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</th>\r\n\t\t\t\t\t\t\t\t\t\t<th (click)=\"sort('officeEmail')\" class=\"m-datatable__cell m-datatable__cell--sort\" width=\"20%\" >\r\n\t\t\t\t\t\t\t\t\t\t\t<span>\r\n\t\t\t\t\t\t\t\t\t\t\tEMAIL\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"la\" *ngIf=\"key == 'officeEmail'\" [ngClass]=\"{'la-arrow-up':reverse,'la-arrow-down':!reverse}\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</th>\r\n\t\t\t\t\t\t\t\t\t\t<th (click)=\"sort('designation')\" class=\"m-datatable__cell m-datatable__cell--sort\" width=\"20%\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span>\r\n\t\t\t\t\t\t\t\t\t\t\tDESIGNATION \r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"la\" *ngIf=\"key == 'designation'\" [ngClass]=\"{'la-arrow-up':reverse,'la-arrow-down':!reverse}\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</th>\r\n\t\t\t\t\t\t\t\t\t\t<th (click)=\"sort('supervisor')\" class=\"m-datatable__cell m-datatable__cell--sort\" width=\"25%\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tSUPERVISOR  \r\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"la\" *ngIf=\"key == 'supervisor'\" [ngClass]=\"{'la-arrow-up':reverse,'la-arrow-down':!reverse}\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                        </th>\r\n                                        <th class=\"m-datatable__cell\" width=\"5%\">Action</th>\r\n\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t\t<tbody class=\"m-datatable__body\">\r\n                              <tr class=\"m-datatable__row\" [ngClass]=\"{'m-datatable__row--even':!even}\" *ngFor=\"let employee of employeeData | orderBy: key : reverse | filter:search | paginate: { itemsPerPage: 8, currentPage: p2 };let even=even;\">\r\n\t\t\t\t\t\t\t\t\t<td class=\"m-datatable__cell\" width=\"5%\" >\r\n\t\t\t\t\t\t\t\t\t\t<label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\">\r\n\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t</td>\t\r\n\t\t\t\t\t\t\t\t\t<td class=\"m-datatable__cell\" width=\"5%\" >\r\n\t\t\t\t\t\t\t\t\t\t  <img *ngIf=\"employee?.ProfileImage; else noImage\" src=\"{{employee?.ProfileImage}}\" onerror=\"this.src ='./assets/app/media/img/custom/users/user6.jpg';\" class=\"directory_image m--img-rounded m--marginless m--img-centered\" alt=\"\">\r\n\t\t\t\t\t\t\t\t\t      <ng-template #noImage><img src=\"./assets/app/media/img/custom/users/user6.jpg\" class=\"directory_image m--img-rounded m--marginless m--img-centered\"></ng-template>\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t    <td class=\"m-datatable__cell\" width=\"20%\" >\r\n\t\t\t\t\t\t\t\t\t\t<span>{{employee.FullName}}</span>\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t<td class=\"m-datatable__cell\" width=\"20%\" >\r\n\t\t\t\t\t\t\t\t\t\t<span>{{employee.OfficeEmail}}</span>\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t<td class=\"m-datatable__cell\" width=\"20%\" >\r\n\t\t\t\t\t\t\t\t\t\t<span>{{employee.Designation}}</span>\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t    <td class=\"m-datatable__cell\" width=\"25%\" >\r\n\t\t\t\t\t\t\t\t\t\t<span>{{employee.Supervisor}}</span>\r\n                                    </td>\r\n                                    <td class=\"m-datatable__cell\" width=\"5%\" >\r\n                                        <button class=\"btn m-btn--pill m-btn--air btn-outline-success\" type=\"button\" (click)=\"savekraWorkFlowDetails(employee._id);employee.status='initiated'\" [disabled]=\"employee.status=='initiated'\">\r\n                                                {{employee.status=='initiated' ? 'Initiated KRA':'Initiate KRA'}}\r\n                                        </button>\r\n                                    </td>\r\n\t\t\t\t\t\t\t  </tr>\r\n\t\t\t\t\t\t\t  <!-- <tr *ngIf=\"!employeeData.length > 0\" style=\"text-align: center\">\r\n\t\t\t\t\t\t\t\t  <th colspan=\"5\">\r\n\t\t\t\t\t\t\t\t\t\tNo Data\r\n\t\t\t\t\t\t\t\t  </th>\r\n\t\t\t\t\t\t\t  </tr> -->\r\n\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t</table>\r\n\t\t\t\t\t<pagination-template #p=\"paginationApi\" (pageChange)=\"p2 = $event\" class=\"paginationtemplate\" >\r\n\t\t\t\t\t\t<div class=\"m-datatable__pager m-datatable--paging-loaded clearfix\">\r\n\t\t\t\t\t\t\t<ul class=\"m-datatable__pager-nav\" *ngIf=\"p.pages.length > 0\">\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<a  class=\"m-datatable__pager-link m-datatable__pager-link--first\" [class.m-datatable__pager-link--disabled]=\"p.isFirstPage()\"   (click)=\"p.setCurrent(1)\" >\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"la la-angle-double-left\"></i>\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<a  class=\"m-datatable__pager-link m-datatable__pager-link--prev\" [class.m-datatable__pager-link--disabled]=\"p.isFirstPage()\" (click)=\"p.previous()\" >\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"la la-angle-left\"></i>\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li *ngFor=\"let page of p.pages\">\r\n\t\t\t\t\t\t\t\t\t<a (click)=\"p.setCurrent(page.value)\" class=\"m-datatable__pager-link m-datatable__pager-link-number\" [class.m-datatable__pager-link--active]=\"p.getCurrent() === page.value\">\r\n\t\t\t\t\t\t\t\t\t\t{{ page.label }}\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<a  class=\"m-datatable__pager-link m-datatable__pager-link--next\" [class.m-datatable__pager-link--disabled]=\"p.isLastPage()\" (click)=\"p.next()\">\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"la la-angle-right\"></i>\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<a title=\"Last\" class=\"m-datatable__pager-link m-datatable__pager-link--last\" [class.m-datatable__pager-link--disabled]=\"p.isLastPage()\"  (click)=\"p.setCurrent(p.pages.length + 1)\">\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"la la-angle-double-right\"></i>\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</pagination-template>\r\n\t\t\t\t\t<div class=\"form-actions\">\r\n\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t\t\t\t<div class=\"m-form__actions\">\r\n\t\t\t\t\t\t\t\t\t<button class=\"btn btn-success submitForm\" type=\"submit\" id=\"search\" (click)=\"loadAllEmployee()\">Initiate</button>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/theme/pages/default/hr/workFlows/initiate/initiate.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HrInitiateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_services_common_service__ = __webpack_require__("./src/app/base/_services/common.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_services_authService_service__ = __webpack_require__("./src/app/base/_services/authService.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__hr_service__ = __webpack_require__("./src/app/theme/pages/default/hr/hr.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert2__ = __webpack_require__("./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_sweetalert2__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HrInitiateComponent = (function () {
    function HrInitiateComponent(_hrService, _commonService, _authService) {
        this._hrService = _hrService;
        this._commonService = _commonService;
        this._authService = _authService;
        this.employeeData = [];
        this.filterSearch = {};
        this.divisionData = [];
        this.deparmentData = [];
        this.gradeData = [];
        this.key = ''; //set default
        this.reverse = false;
        this.p2 = 1;
    }
    HrInitiateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._authService.validateToken().subscribe(function (res) {
            _this._currentEmpId = _this._authService.currentUserData._id;
            _this.initDropdown();
        });
    };
    HrInitiateComponent.prototype.initDropdown = function () {
        this.loadDivision();
        this.loadDepartment();
        this.loadGrade();
    };
    HrInitiateComponent.prototype.ngAfterViewInit = function () {
    };
    HrInitiateComponent.prototype.loadDivision = function () {
        var _this = this;
        this._commonService.getDivision()
            .subscribe(function (res) {
            if (res.ok) {
                _this.employeeData = [];
                _this.divisionData = res.json();
            }
        }, function (error) {
        });
    };
    HrInitiateComponent.prototype.loadDepartment = function (division_id) {
        var _this = this;
        this._commonService.getDepartment(division_id)
            .subscribe(function (res) {
            if (res.ok) {
                _this.employeeData = [];
                _this.deparmentData = res.json();
            }
        }, function (error) {
        });
    };
    //load Grade Dropdown By managementType_id  && employmentType_id
    HrInitiateComponent.prototype.loadGrade = function () {
        var _this = this;
        this._commonService.getGrade()
            .subscribe(function (res) {
            if (res.ok) {
                _this.employeeData = [];
                _this.gradeData = res.json();
            }
        }, function (error) {
        });
    };
    HrInitiateComponent.prototype.loadAllEmployee = function () {
        var _this = this;
        this._hrService.getAllEmployee()
            .subscribe(function (res) {
            var data = res.json().data || [];
            if (data.length > 0) {
                data = data.filter(function (obj) { return obj.HrScope_Id == _this._currentEmpId; });
                _this.employeeData = data || [];
            }
            else
                _this.employeeData = data.json().data || [];
        }, function (error) {
        });
    };
    HrInitiateComponent.prototype.savekraWorkFlowDetails = function (emp_id) {
        this._hrService.savekraWorkFlowDetails({ emp_id: emp_id, status: 'initiated' })
            .subscribe(function (res) {
            if (res.ok) {
                __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()("KRA Workflow", "Initiated", "success");
            }
        }, function (error) {
        });
    };
    HrInitiateComponent.prototype.getColumnName = function (column) {
        return column.replace(/([A-Z][a-z])/g, " $1").replace("_", " ").toUpperCase();
    };
    HrInitiateComponent.prototype.sort = function (key) {
        this.key = key;
        this.reverse = !this.reverse;
    };
    HrInitiateComponent.prototype.clearFormData = function () {
        this.deparmentData = [];
        this.gradeData = [];
        this.divisionData = [];
    };
    HrInitiateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: ".m-grid__item.m-grid__item--fluid.m-wrapper--krainitiate",
            template: __webpack_require__("./src/app/theme/pages/default/hr/workFlows/initiate/initiate.component.html"),
            styles: [__webpack_require__("./src/app/theme/pages/default/hr/workFlows/initiate/initiate.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__hr_service__["a" /* HrService */],
            __WEBPACK_IMPORTED_MODULE_1__base_services_common_service__["a" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_2__base_services_authService_service__["a" /* AuthService */]])
    ], HrInitiateComponent);
    return HrInitiateComponent;
}());



/***/ }),

/***/ "./src/app/theme/pages/default/hr/workFlows/learning/learning.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/theme/pages/default/hr/workFlows/learning/learning.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HrLearningComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HrLearningComponent = (function () {
    function HrLearningComponent() {
    }
    HrLearningComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: ".m-grid__item.m-grid__item--fluid.m-wrapper",
            template: __webpack_require__("./src/app/theme/pages/default/hr/workFlows/learning/learning.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None,
        })
    ], HrLearningComponent);
    return HrLearningComponent;
}());



/***/ }),

/***/ "./src/app/theme/pages/default/hr/workFlows/pap/pap.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- BEGIN: Subheader -->\r\n<div class=\"m-subheader\">\r\n    <div class=\"d-flex align-items-center\">\r\n        <div class=\"mr-auto\">\r\n            <h3 class=\"m-subheader__title\">\r\n                Dashboard\r\n            </h3>\r\n        </div>\r\n        <!-- <div>\r\n            <span class=\"m-subheader__daterange\" id=\"m_dashboard_daterangepicker\">\r\n                <span class=\"m-subheader__daterange-label\">\r\n                    <span class=\"m-subheader__daterange-title\"></span>\r\n                    <span class=\"m-subheader__daterange-date m--font-brand\"></span>\r\n                </span>\r\n                <a href=\"#\" class=\"btn btn-sm btn-brand m-btn m-btn--icon m-btn--icon-only m-btn--custom m-btn--pill\">\r\n                    <i class=\"la la-angle-down\"></i>\r\n                </a>\r\n            </span>\r\n        </div> -->\r\n    </div>\r\n</div>\r\n<!-- END: Subheader -->\r\n<div class=\"m-content\">\r\n    <!--Begin::Main Portlet-->\r\n    <div class=\"row\">\r\n        <div class=\"col-xl-4\">\r\n            <!--begin:: Widgets/Activity-->\r\n            <div class=\"m-portlet m-portlet--bordered-semi m-portlet--widget-fit m-portlet--full-height m-portlet--skin-light\">\r\n                <div class=\"m-portlet__head\">\r\n                    <div class=\"m-portlet__head-caption\">\r\n                        <div class=\"m-portlet__head-title\">\r\n                            <h3 class=\"m-portlet__head-text m--font-light\">\r\n                                Quick links\r\n                            </h3>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"m-portlet__head-tools\">\r\n                        <ul class=\"m-portlet__nav\">\r\n                            <li class=\"m-portlet__nav-item m-dropdown m-dropdown--inline m-dropdown--arrow m-dropdown--align-right m-dropdown--align-push\" data-dropdown-toggle=\"hover\">\r\n                                <a href=\"#\" class=\"m-portlet__nav-link m-portlet__nav-link--icon m-portlet__nav-link--icon-xl\">\r\n                                    <i class=\"fa fa-genderless m--font-light\"></i>\r\n                                </a>\r\n                                <div class=\"m-dropdown__wrapper\">\r\n                                    <span class=\"m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust\"></span>\r\n                                    <div class=\"m-dropdown__inner\">\r\n                                        <div class=\"m-dropdown__body\">\r\n                                            <div class=\"m-dropdown__content\">\r\n                                                <ul class=\"m-nav\">\r\n                                                    <li class=\"m-nav__section m-nav__section--first\">\r\n                                                        <span class=\"m-nav__section-text\">\r\n                                                            Quick Actions\r\n                                                        </span>\r\n                                                    </li>\r\n                                                    <li class=\"m-nav__item\">\r\n                                                        <a href=\"\" class=\"m-nav__link\">\r\n                                                            <i class=\"m-nav__link-icon flaticon-share\"></i>\r\n                                                            <span class=\"m-nav__link-text\">\r\n                                                                Activity\r\n                                                            </span>\r\n                                                        </a>\r\n                                                    </li>\r\n                                                    <li class=\"m-nav__item\">\r\n                                                        <a href=\"\" class=\"m-nav__link\">\r\n                                                            <i class=\"m-nav__link-icon flaticon-chat-1\"></i>\r\n                                                            <span class=\"m-nav__link-text\">\r\n                                                                Messages\r\n                                                            </span>\r\n                                                        </a>\r\n                                                    </li>\r\n                                                    <li class=\"m-nav__item\">\r\n                                                        <a href=\"\" class=\"m-nav__link\">\r\n                                                            <i class=\"m-nav__link-icon flaticon-info\"></i>\r\n                                                            <span class=\"m-nav__link-text\">\r\n                                                                FAQ\r\n                                                            </span>\r\n                                                        </a>\r\n                                                    </li>\r\n                                                    <li class=\"m-nav__item\">\r\n                                                        <a href=\"\" class=\"m-nav__link\">\r\n                                                            <i class=\"m-nav__link-icon flaticon-lifebuoy\"></i>\r\n                                                            <span class=\"m-nav__link-text\">\r\n                                                                Support\r\n                                                            </span>\r\n                                                        </a>\r\n                                                    </li>\r\n                                                    <li class=\"m-nav__separator m-nav__separator--fit\"></li>\r\n                                                    <li class=\"m-nav__item\">\r\n                                                        <a href=\"#\" class=\"btn btn-outline-danger m-btn m-btn--pill m-btn--wide btn-sm\">\r\n                                                            Cancel\r\n                                                        </a>\r\n                                                    </li>\r\n                                                </ul>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n                <div class=\"m-portlet__body\">\r\n                    <div class=\"m-widget17\">\r\n                        <div class=\"m-widget17__visual m-widget17__visual--chart m-portlet-fit--top m-portlet-fit--sides m--bg-danger\">\r\n                            <div class=\"m-widget17__chart\" style=\"height:320px;\">\r\n                                <canvas id=\"m_chart_activities\"></canvas>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"m-widget17__stats\">\r\n                            <div class=\"m-widget17__items m-widget17__items-col1\">\r\n                                <div class=\"m-widget17__item\">\r\n                                    <span class=\"m-widget17__icon\">\r\n                                        <i class=\"flaticon-paper-plane m--font-brand\"></i>\r\n                                    </span>\r\n                                    <span class=\"m-widget17__subtitle\">\r\n                                        Initiate KRA\r\n                                    </span>\r\n                                    <span class=\"m-widget17__desc\">\r\n                                        <!-- 15 New Paskages -->\r\n                                    </span>\r\n                                </div>\r\n                                <div class=\"m-widget17__item\">\r\n                                    <span class=\"m-widget17__icon\">\r\n                                         <i class=\"flaticon-pie-chart m--font-brand\"></i>\r\n                                    </span>\r\n                                    <span class=\"m-widget17__subtitle\">\r\n                                        Reports\r\n                                    </span>\r\n                                    <span class=\"m-widget17__desc\">\r\n                                        <!-- 72 Support Cases -->\r\n                                    </span>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"m-widget17__items m-widget17__items-col2\">\r\n                                <div class=\"m-widget17__item\">\r\n                                    <span class=\"m-widget17__icon\">\r\n                                        <i class=\"flaticon-book m--font-brand\"></i>\r\n                                    </span>\r\n                                    <span class=\"m-widget17__subtitle\">\r\n                                        Approvals\r\n                                    </span>\r\n                                    <span class=\"m-widget17__desc\">\r\n                                        <!-- 72 New Items -->\r\n                                    </span>\r\n                                </div>\r\n                                <div class=\"m-widget17__item \">\r\n                                    <span class=\"m-widget17__icon\">\r\n                                     <i class=\"flaticon-diagram m--font-brand\" ></i>\r\n                                    </span>\r\n                                    <span class=\"m-widget17__subtitle\">\r\n                                        Timeline\r\n                                    </span>\r\n                                    <span class=\"m-widget17__desc\">\r\n                                        <!-- 34 Upgraded Boxes -->\r\n                                    </span>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!--end:: Widgets/Activity-->\r\n        </div>\r\n        <div class=\"col-xl-4\">\r\n            \r\n            <div class=\"m-portlet m-portlet--bordered-semi m-portlet--full-height\">\r\n                <div class=\"m-portlet__head\">\r\n                    <div class=\"m-portlet__head-caption\">\r\n                        <div class=\"m-portlet__head-title\">\r\n                            <h3 class=\"m-portlet__head-text\">\r\n                                Stats\r\n                            </h3>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"m-portlet__head-tools\">\r\n                        <ul class=\"m-portlet__nav\">\r\n                            <li class=\"m-portlet__nav-item m-portlet__nav-item--last m-dropdown m-dropdown--inline m-dropdown--arrow m-dropdown--align-right m-dropdown--align-push\" data-dropdown-toggle=\"hover\">\r\n                                <a class=\"m-portlet__nav-link m-portlet__nav-link--icon m-portlet__nav-link--icon-xl\" href=\"#\" ng-reflect-href=\"#\">\r\n                                    <i class=\"fa fa-genderless m--font-brand\"></i>\r\n                                </a>\r\n                                <div class=\"m-dropdown__wrapper\">\r\n                                    <span class=\"m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust\"></span>\r\n                                    <div class=\"m-dropdown__inner\">\r\n                                        <div class=\"m-dropdown__body\">\r\n                                            <div class=\"m-dropdown__content\">\r\n                                                <ul class=\"m-nav\">\r\n                                                    <li class=\"m-nav__section m-nav__section--first\">\r\n                                                        <span class=\"m-nav__section-text\">\r\n                                                            Quick Actions\r\n                                                        </span>\r\n                                                    </li>\r\n                                                    <li class=\"m-nav__item\">\r\n                                                        <a class=\"m-nav__link\" href=\"\" ng-reflect-href=\"\">\r\n                                                            <i class=\"m-nav__link-icon flaticon-share\"></i>\r\n                                                            <span class=\"m-nav__link-text\">\r\n                                                                Activity\r\n                                                            </span>\r\n                                                        </a>\r\n                                                    </li>\r\n                                                    <li class=\"m-nav__item\">\r\n                                                        <a class=\"m-nav__link\" href=\"\" ng-reflect-href=\"\">\r\n                                                            <i class=\"m-nav__link-icon flaticon-chat-1\"></i>\r\n                                                            <span class=\"m-nav__link-text\">\r\n                                                                Messages\r\n                                                            </span>\r\n                                                        </a>\r\n                                                    </li>\r\n                                                    <li class=\"m-nav__item\">\r\n                                                        <a class=\"m-nav__link\" href=\"\" ng-reflect-href=\"\">\r\n                                                            <i class=\"m-nav__link-icon flaticon-info\"></i>\r\n                                                            <span class=\"m-nav__link-text\">\r\n                                                                FAQ\r\n                                                            </span>\r\n                                                        </a>\r\n                                                    </li>\r\n                                                    <li class=\"m-nav__item\">\r\n                                                        <a class=\"m-nav__link\" href=\"\" ng-reflect-href=\"\">\r\n                                                            <i class=\"m-nav__link-icon flaticon-lifebuoy\"></i>\r\n                                                            <span class=\"m-nav__link-text\">\r\n                                                                Support\r\n                                                            </span>\r\n                                                        </a>\r\n                                                    </li>\r\n                                                    <li class=\"m-nav__separator m-nav__separator--fit\"></li>\r\n                                                    <li class=\"m-nav__item\">\r\n                                                        <a class=\"btn btn-outline-danger m-btn m-btn--pill m-btn--wide btn-sm\" href=\"#\" ng-reflect-href=\"#\">\r\n                                                            Cancel\r\n                                                        </a>\r\n                                                    </li>\r\n                                                </ul>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n                <div class=\"m-portlet__body\">\r\n                    \r\n                    <div class=\"m-widget15\">\r\n                        <div class=\"m-widget15__chart\" style=\"height:180px;\"><div class=\"chartjs-size-monitor\" style=\"position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;\"><div class=\"chartjs-size-monitor-expand\" style=\"position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;\"><div style=\"position:absolute;width:1000000px;height:1000000px;left:0;top:0\"></div></div><div class=\"chartjs-size-monitor-shrink\" style=\"position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;\"><div style=\"position:absolute;width:200%;height:200%;left:0; top:0\"></div></div></div>\r\n                            <canvas id=\"m_chart_sales_stats\" width=\"772\" height=\"180\" class=\"chartjs-render-monitor\" style=\"display: block; height: 180px; width: 772px;\"></canvas>\r\n                        </div>\r\n                        <div class=\"m-widget15__items\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col\">\r\n                                    <div class=\"m-widget15__item\">\r\n                                        <span class=\"m-widget15__stats\">\r\n                                            22%\r\n                                        </span>\r\n                                        <span class=\"m-widget15__text\">\r\n                                            KRA Sent Back\r\n                                        </span>\r\n                                        <div class=\"m--space-10\"></div>\r\n                                        <div class=\"progress m-progress--sm\">\r\n                                            <div aria-valuemax=\"100\" aria-valuemin=\"0\" aria-valuenow=\"25\" class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 25%;\"></div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col\">\r\n                                    <div class=\"m-widget15__item\">\r\n                                        <span class=\"m-widget15__stats\">\r\n                                            28%\r\n                                        </span>\r\n                                        <span class=\"m-widget15__text\">\r\n                                            KRA Submitted\r\n                                        </span>\r\n                                        <div class=\"m--space-10\"></div>\r\n                                        <div class=\"progress m-progress--sm\">\r\n                                            <div aria-valuemax=\"100\" aria-valuemin=\"0\" aria-valuenow=\"50\" class=\"progress-bar bg-warning\" role=\"progressbar\" style=\"width: 40%;\"></div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col\">\r\n                                    <div class=\"m-widget15__item\">\r\n                                        <span class=\"m-widget15__stats\">\r\n                                            47%\r\n                                        </span>\r\n                                        <span class=\"m-widget15__text\">\r\n                                            KRA Approved\r\n                                        </span>\r\n                                        <div class=\"m--space-10\"></div>\r\n                                        <div class=\"progress m-progress--sm\">\r\n                                            <div aria-valuemax=\"100\" aria-valuemin=\"0\" aria-valuenow=\"75\" class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 55%;\"></div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col\">\r\n                                    <div class=\"m-widget15__item\">\r\n                                        <span class=\"m-widget15__stats\">\r\n                                            3%\r\n                                        </span>\r\n                                        <span class=\"m-widget15__text\">\r\n                                            KRA Pending\r\n                                        </span>\r\n                                        <div class=\"m--space-10\"></div>\r\n                                        <div class=\"progress m-progress--sm\">\r\n                                            <div aria-valuemax=\"100\" aria-valuemin=\"0\" aria-valuenow=\"100\" class=\"progress-bar bg-primary\" role=\"progressbar\" style=\"width: 60%;\"></div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"m-widget15__desc\">\r\n                            <!-- * lorem ipsum dolor sit amet consectetuer sediat elit -->\r\n                        </div>\r\n                    </div>\r\n                    \r\n                </div>\r\n            </div>\r\n            \r\n        </div>\r\n        <div class=\"col-xl-4\">\r\n            <div class=\"m-portlet m-portlet--bordered-semi m-portlet--full-height\">\r\n                <div class=\"m-portlet__head\">\r\n                    <div class=\"m-portlet__head-caption\">\r\n                        <div class=\"m-portlet__head-title\">\r\n                            <h3 class=\"m-portlet__head-text\">\r\n                                Approvals\r\n                            </h3>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"m-portlet__head-tools\">\r\n                        <ul class=\"m-portlet__nav\">\r\n                            <li class=\"m-portlet__nav-item m-dropdown m-dropdown--inline m-dropdown--arrow m-dropdown--align-right m-dropdown--align-push\" data-dropdown-toggle=\"hover\" aria-expanded=\"true\">\r\n                                <a class=\"m-portlet__nav-link m-dropdown__toggle dropdown-toggle btn btn--sm m-btn--pill btn-secondary m-btn m-btn--label-brand\" href=\"#\" ng-reflect-href=\"#\">\r\n                                    All\r\n                                </a>\r\n                                <div class=\"m-dropdown__wrapper\">\r\n                                    <span class=\"m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust\" style=\"left: auto; right: 45px;\"></span>\r\n                                    <div class=\"m-dropdown__inner\">\r\n                                        <div class=\"m-dropdown__body\">\r\n                                            <div class=\"m-dropdown__content\">\r\n                                                <ul class=\"m-nav\">\r\n                                                    <li class=\"m-nav__section m-nav__section--first\">\r\n                                                        <span class=\"m-nav__section-text\">\r\n                                                            Quick Actions\r\n                                                        </span>\r\n                                                    </li>\r\n                                                    <li class=\"m-nav__item\">\r\n                                                        <a class=\"m-nav__link\" href=\"\" ng-reflect-href=\"\">\r\n                                                            <i class=\"m-nav__link-icon flaticon-share\"></i>\r\n                                                            <span class=\"m-nav__link-text\">\r\n                                                                Leaves\r\n                                                            </span>\r\n                                                        </a>\r\n                                                    </li>\r\n                                                    <li class=\"m-nav__item\">\r\n                                                        <a class=\"m-nav__link\" href=\"\" ng-reflect-href=\"\">\r\n                                                            <i class=\"m-nav__link-icon flaticon-chat-1\"></i>\r\n                                                            <span class=\"m-nav__link-text\">\r\n                                                                KRA\r\n                                                            </span>\r\n                                                        </a>\r\n                                                    </li>\r\n                                                    <li class=\"m-nav__item\">\r\n                                                        <a class=\"m-nav__link\" href=\"\" ng-reflect-href=\"\">\r\n                                                            <i class=\"m-nav__link-icon flaticon-info\"></i>\r\n                                                            <span class=\"m-nav__link-text\">\r\n                                                                Learning\r\n                                                            </span>\r\n                                                        </a>\r\n                                                    </li>\r\n                                                    \r\n                                                    <li class=\"m-nav__separator m-nav__separator--fit\"></li>\r\n                                                    <li class=\"m-nav__item\">\r\n                                                        <a class=\"btn btn-outline-danger m-btn m-btn--pill m-btn--wide btn-sm\" href=\"#\" ng-reflect-href=\"#\">\r\n                                                            Cancel\r\n                                                        </a>\r\n                                                    </li>\r\n                                                </ul>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n                <div class=\"m-portlet__body\">\r\n                    <div class=\"m-widget4\">\r\n                        <div class=\"m-widget4__item\">\r\n                            <div class=\"m-widget4__img m-widget4__img--logo\">\r\n                                <img alt=\"\" src=\"\">\r\n                            </div>\r\n                            <div class=\"m-widget4__info\">\r\n                                <span class=\"m-widget4__title\">\r\n                                    Salman Khana\r\n                                </span>\r\n                                <br>\r\n                                <span class=\"m-widget4__sub\">\r\n                                    29-Sep-2018, 10:15AM\r\n                                </span>\r\n                            </div>\r\n                            <span class=\"m-widget4__ext\">\r\n                                <span class=\"m-widget4__number m--font-brand\">\r\n                                    <!-- +$2500 -->\r\n                                </span>\r\n                            </span>\r\n                        </div>\r\n                        <div class=\"m-widget4__item\">\r\n                            <div class=\"m-widget4__img m-widget4__img--logo\">\r\n                                <img alt=\"\" src=\"\">\r\n                            </div>\r\n                            <div class=\"m-widget4__info\">\r\n                                <span class=\"m-widget4__title\">\r\n                                    Deepak Singh\r\n                                </span>\r\n                                <br>\r\n                                <span class=\"m-widget4__sub\">\r\n                                    20-April-2018, 10:15AM\r\n                                </span>\r\n                            </div>\r\n                            <span class=\"m-widget4__ext\">\r\n                                <span class=\"m-widget4__number m--font-brand\">\r\n                                    <!-- -$290 -->\r\n                                </span>\r\n                            </span>\r\n                        </div>\r\n                        <div class=\"m-widget4__item\">\r\n                            <div class=\"m-widget4__img m-widget4__img--logo\">\r\n                                <img alt=\"\" src=\"\">\r\n                            </div>\r\n                            <div class=\"m-widget4__info\">\r\n                                <span class=\"m-widget4__title\">\r\n                                    Ravi Dubey\r\n                                </span>\r\n                                <br>\r\n                                <span class=\"m-widget4__sub\">\r\n                                    15-June-2018, 10:15AM\r\n                                </span>\r\n                            </div>\r\n                            <span class=\"m-widget4__ext\">\r\n                                <span class=\"m-widget4__number m--font-brand\">\r\n                                    <!-- +$17 -->\r\n                                </span>\r\n                            </span>\r\n                        </div>\r\n                        <div class=\"m-widget4__item\">\r\n                            <div class=\"m-widget4__img m-widget4__img--logo\">\r\n                                <img alt=\"\" src=\"\">\r\n                            </div>\r\n                            <div class=\"m-widget4__info\">\r\n                                <span class=\"m-widget4__title\">\r\n                                    Supriya Singh\r\n                                </span>\r\n                                <br>\r\n                                <span class=\"m-widget4__sub\">\r\n                                    29-Jan-2018, 10:15AM\r\n                                </span>\r\n                            </div>\r\n                            <span class=\"m-widget4__ext\">\r\n                                <span class=\"m-widget4__number m--font-brand\">\r\n                                    <!-- -$2.50 -->\r\n                                </span>\r\n                            </span>\r\n                        </div>\r\n                        <div class=\"m-widget4__item\">\r\n                            <div class=\"m-widget4__img m-widget4__img--logo\">\r\n                                <img alt=\"\" src=\"\">\r\n                            </div>\r\n                            <div class=\"m-widget4__info\">\r\n                                <span class=\"m-widget4__title\">\r\n                                    Divya Rai\r\n                                </span>\r\n                                <br>\r\n                                <span class=\"m-widget4__sub\">\r\n                                    15-Dec-2018, 12:15AM\r\n                                </span>\r\n                            </div>\r\n                            <span class=\"m-widget4__ext\">\r\n                                <span class=\"m-widget4__number m--font-brand\">\r\n                                    <!-- +$200 -->\r\n                                </span>\r\n                            </span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\t\r\n        </div>\r\n    </div>\r\n    <!--End::Main Portlet-->  <!--Begin::Main Portlet-->\r\n    \r\n</div>\r\n"

/***/ }),

/***/ "./src/app/theme/pages/default/hr/workFlows/pap/pap.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HrPapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HrPapComponent = (function () {
    function HrPapComponent() {
    }
    HrPapComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: ".m-grid__item.m-grid__item--fluid.m-wrapper",
            template: __webpack_require__("./src/app/theme/pages/default/hr/workFlows/pap/pap.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None,
        })
    ], HrPapComponent);
    return HrPapComponent;
}());



/***/ }),

/***/ "./src/app/theme/pages/default/hr/workFlows/pip/pip.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/theme/pages/default/hr/workFlows/pip/pip.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HrPipComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HrPipComponent = (function () {
    function HrPipComponent() {
    }
    HrPipComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: ".m-grid__item.m-grid__item--fluid.m-wrapper",
            template: __webpack_require__("./src/app/theme/pages/default/hr/workFlows/pip/pip.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None,
        })
    ], HrPipComponent);
    return HrPipComponent;
}());



/***/ })

});
//# sourceMappingURL=hr.module.chunk.js.map