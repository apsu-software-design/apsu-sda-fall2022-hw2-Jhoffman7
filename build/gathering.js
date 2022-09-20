"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gathering = void 0;
var Gathering = (function () {
    function Gathering(title, location, date) {
        this._title = title;
        this._location = location;
        this._date = date;
        this._gatheringMemberList = [];
    }
    Object.defineProperty(Gathering.prototype, "title", {
        get: function () {
            return this._title;
        },
        set: function (newTitle) {
            this._title = newTitle;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Gathering.prototype, "location", {
        get: function () {
            return this._location;
        },
        set: function (newLocation) {
            this._location = newLocation;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Gathering.prototype, "date", {
        get: function () {
            return this._date;
        },
        set: function (newDate) {
            this._date = newDate;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Gathering.prototype, "gatheringMemberList", {
        get: function () {
            return this._gatheringMemberList;
        },
        enumerable: false,
        configurable: true
    });
    Gathering.prototype.addMember = function (member) {
        this._gatheringMemberList.push(member);
    };
    return Gathering;
}());
exports.Gathering = Gathering;
//# sourceMappingURL=gathering.js.map