import { Member } from './member';

export class Gathering
{
    //Fields
    private _title : string;
    private _location : string;
    private  _date : string;
    private _gatheringMemberList : Member[]
    

    //Constructor
    constructor(title:string, location:string, date:string)
    {
        this._title = title;
        this._location = location;
        this._date = date;
        this._gatheringMemberList = [];
    }


    //Getters
    public get title()
    {
        return this._title;
    }
    public get location()
    {
        return this._location;
    }
    public get date()
    {
        return this._date;
    }
    public get gatheringMemberList()
    {
        return this._gatheringMemberList;
    }

    //Setters
    public set title(newTitle : string)
    {
        this._title = newTitle;
    }
    public set location(newLocation : string)
    {
        this._location = newLocation;
    }
    public set date(newDate : string)
    {
        this._date = newDate;
    }

    //Add members to a gathering list
    addMember(member:Member)
    {
        this._gatheringMemberList.push(member);
    }

    // returnGatheringMemberList(member:Member)
    // {
    //     return this.gatheringMemberList;
    // }

    
}