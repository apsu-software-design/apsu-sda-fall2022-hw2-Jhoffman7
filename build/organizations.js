"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Organizations = void 0;
var organization_1 = require("./organization");
var Organizations = (function () {
    function Organizations() {
        this.orgList = [];
    }
    Organizations.prototype.addOrganization = function (title) {
        this.orgList.push(new organization_1.Organization(title));
    };
    Organizations.prototype.findOrg = function (orgTitle) {
        var matchedList = [];
        for (var i = 0; i < this.orgList.length; i++) {
            if (orgTitle == this.orgList[i].title) {
                matchedList.push(this.orgList[i]);
            }
        }
        return matchedList;
    };
    return Organizations;
}());
exports.Organizations = Organizations;
//# sourceMappingURL=organizations.js.map