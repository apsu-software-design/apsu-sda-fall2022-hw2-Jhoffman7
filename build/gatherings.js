"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gatherings = void 0;
var gathering_1 = require("./gathering");
var Gatherings = (function () {
    function Gatherings() {
        this._gatheringList = [];
    }
    Object.defineProperty(Gatherings.prototype, "gatheringList", {
        get: function () {
            return this._gatheringList;
        },
        enumerable: false,
        configurable: true
    });
    Gatherings.prototype.addGathering = function (title, location, date) {
        this.gatheringList.push(new gathering_1.Gathering(title, location, date));
    };
    Gatherings.prototype.findGathering = function (gatheringTitle) {
        var matchedList = [];
        for (var i = 0; i < this.gatheringList.length; i++) {
            if (gatheringTitle == this.gatheringList[i].title) {
                matchedList.push(this.gatheringList[i]);
            }
        }
        return matchedList;
    };
    return Gatherings;
}());
exports.Gatherings = Gatherings;
//# sourceMappingURL=gatherings.js.map