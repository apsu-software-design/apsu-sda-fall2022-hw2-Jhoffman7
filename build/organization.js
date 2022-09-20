"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Organization = void 0;
var Organization = (function () {
    function Organization(title) {
        this._title = title;
        this._gatheringList = [];
    }
    Object.defineProperty(Organization.prototype, "title", {
        get: function () {
            return this._title;
        },
        set: function (newTitle) {
            this._title = newTitle;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Organization.prototype, "gatheringList", {
        get: function () {
            return this._gatheringList;
        },
        enumerable: false,
        configurable: true
    });
    Organization.prototype.addGathering = function (gathering) {
        this._gatheringList.push(gathering);
    };
    return Organization;
}());
exports.Organization = Organization;
//# sourceMappingURL=organization.js.map