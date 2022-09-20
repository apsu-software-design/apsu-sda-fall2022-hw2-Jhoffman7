"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Members = void 0;
var member_1 = require("./member");
var Members = (function () {
    function Members() {
        this.memberList = [];
    }
    Members.prototype.addMember = function (name, email) {
        this.memberList.push(new member_1.Member(name, email));
    };
    Members.prototype.findMember = function (name) {
        var matchList = [];
        for (var i = 0; i < this.memberList.length; i++) {
            if (name == this.memberList[i].name) {
                matchList.push(this.memberList[i]);
            }
        }
        return matchList;
    };
    return Members;
}());
exports.Members = Members;
//# sourceMappingURL=members.js.map