import {Gathering} from './gathering';


export class Gatherings
{
    
    private _gatheringList: Gathering[]
    

    constructor()
    {
        this._gatheringList = [];

    }

    public get gatheringList()
    {
        return this._gatheringList;
    }

    gathering : Gathering;
    
    addGathering(title: string, location: string, date: string) 
    {
        this.gatheringList.push(new Gathering(title, location, date));
    }

    // //use for loop to index through to find gathering = to gatheringTitle    
    // findGathering(gatheringTitle: string)
    // {
    //     for(var i = 0; i < this.gatheringList.length; i++)
    //     {
    //         if(gatheringTitle == this.gatheringList[i].title)
    //         {
    //             return this.gatheringList[i];
    //         }
    //     }
    // }
    findGathering(gatheringTitle: string) : Gathering []
    {
        let matchedList = [];
        for(var i = 0; i < this.gatheringList.length; i++)
        {
            if(gatheringTitle == this.gatheringList[i].title)
            {
                matchedList.push(this.gatheringList[i]);
            }
        }
        return matchedList;
    }
    
    
}