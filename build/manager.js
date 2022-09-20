"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GatheringManager = void 0;
var members_1 = require("./members");
var gatherings_1 = require("./gatherings");
var organizations_1 = require("./organizations");
var GatheringManager = (function () {
    function GatheringManager() {
        this.members = new members_1.Members();
        this.gatherings = new gatherings_1.Gatherings();
        this.organizations = new organizations_1.Organizations();
    }
    GatheringManager.prototype.addMember = function (name, email) {
        this.members.addMember(name, email);
    };
    GatheringManager.prototype.addGathering = function (title, location, date) {
        this.gatherings.addGathering(title, location, date);
    };
    GatheringManager.prototype.addOrganization = function (title) {
        this.organizations.addOrganization(title);
    };
    GatheringManager.prototype.addMemberToGathering = function (name, gatheringTitle) {
        this.gatherings.findGathering(gatheringTitle)[0].addMember(this.members.findMember(name)[0]);
    };
    GatheringManager.prototype.addGatheringToOrganization = function (gatheringTitle, organizationTitle) {
        this.organizations.findOrg(organizationTitle)[0].addGathering(this.gatherings.findGathering(gatheringTitle)[0]);
    };
    GatheringManager.prototype.modifyGathering = function (title, newTitle, newDate) {
        var gathering = this.gatherings.findGathering(title)[0];
        gathering.title = newTitle;
        gathering.date = newDate;
    };
    GatheringManager.prototype.getMembers = function (gatheringTitle) {
        return this.gatherings.findGathering(gatheringTitle)[0].gatheringMemberList;
    };
    GatheringManager.prototype.findMemberNames = function (query) {
        return this.members.findMember(query).map(function (member) { return member.name; });
    };
    GatheringManager.prototype.findGatheringNames = function (query) {
        return this.gatherings.findGathering(query).map(function (gathering) { return gathering.title; });
    };
    GatheringManager.prototype.findOrganizationNames = function (query) {
        return this.organizations.findOrg(query).map(function (organization) { return organization.title; });
    };
    return GatheringManager;
}());
exports.GatheringManager = GatheringManager;
//# sourceMappingURL=manager.js.map