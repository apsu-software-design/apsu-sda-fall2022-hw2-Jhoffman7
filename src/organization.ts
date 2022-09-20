import {Gathering} from './gathering';

export class Organization
{
    //Field
    private _title : string;
    private _gatheringList : Gathering[];

    //Constructor
    constructor(title:string)
    {
        this._title = title;
        this._gatheringList = [];

    }

    //Getter
    public get title()
    {
        return this._title;
    }
    public get gatheringList()
    {
        return this._gatheringList;
    }
    //Setter
    public set title(newTitle:string)
    {
        this._title = newTitle;
    }

     //Add members to a gathering list
     addGathering(gathering:Gathering)
     {
         this._gatheringList.push(gathering);
     }
}