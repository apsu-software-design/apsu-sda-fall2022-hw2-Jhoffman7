"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Member = void 0;
var Member = (function () {
    function Member(name, email) {
        this._email = email;
        this._name = name;
    }
    Object.defineProperty(Member.prototype, "email", {
        get: function () {
            return this._email;
        },
        set: function (newEmail) {
            this._email = newEmail;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Member.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (newName) {
            this._name = newName;
        },
        enumerable: false,
        configurable: true
    });
    return Member;
}());
exports.Member = Member;
//# sourceMappingURL=member.js.map