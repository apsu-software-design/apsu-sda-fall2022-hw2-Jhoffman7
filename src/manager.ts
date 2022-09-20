//your code goes here!

// These import statements are suggestions on how to get your three main libraries into this code.
// You'll need to create each of these libraries.
import {Members} from './members';
import {Gatherings} from './gatherings';
import {Organizations} from './organizations';
import {Organization} from './organization';
import {Member} from './member';
import {Gathering} from './gathering';


export class GatheringManager {
    members : Members;
    gatherings : Gatherings;
    organizations : Organizations;

    constructor() 
    {
        this.members = new Members();
        this.gatherings = new Gatherings();
        this.organizations = new Organizations();
    }
 
    /*==================================================================================
        I believe that addMember() addGathering() addOrganization() all function correctly
        

      ==================================================================================*/


    addMember(name: string, email: string) 
    {
        this.members.addMember(name, email);
    }

    addGathering(title: string, location: string, date: string) 
    {
        this.gatherings.addGathering(title, location, date);
    }

    addOrganization(title: string) 
    {
        this.organizations.addOrganization(title);
    }

    //Fixed I think
    addMemberToGathering(name: string, gatheringTitle: string) 
    {
       this.gatherings.findGathering(gatheringTitle)[0].addMember(this.members.findMember(name)[0]);
    }

    //I think this is fixed
    addGatheringToOrganization(gatheringTitle: string, organizationTitle: string) 
    {
     
        this.organizations.findOrg(organizationTitle)[0].addGathering(this.gatherings.findGathering(gatheringTitle)[0]);
    }

    //Question this
    modifyGathering(title: string, newTitle: string, newDate?: string) 
    {
        let gathering = this.gatherings.findGathering(title)[0];
        gathering.title = newTitle;
        gathering.date = newDate;
    }

    getMembers(gatheringTitle: string): Member[] 
    {
       return this.gatherings.findGathering(gatheringTitle)[0].gatheringMemberList;
       //return ;//this.gatherings.gathering;
    }

    findMemberNames(query: string) : string []
    {
        return this.members.findMember(query).map( (member) => member.name );// .map( (variable) => variable.field) this is taking a
                                                                             // variable and returning the field  so in this case
                                                                             // we are taking a member object and returning the name
                                                                             // of that member. This is the use of an anonymous function
                                                                             // denoted by the => symbol
    }

    findGatheringNames(query: string) : string []
    {
        return this.gatherings.findGathering(query).map( (gathering) => gathering.title);
    }

    findOrganizationNames(query: string) : string []
    {
        return this.organizations.findOrg(query).map( (organization) => organization.title);
    }
}
