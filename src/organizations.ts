import { Organization } from './organization';

export class Organizations
{
    private orgList: Organization[];

    constructor()
    {
        this.orgList = [];
    }

    addOrganization(title: string) 
    {
       this.orgList.push(new Organization(title))
    }

    // findOrg(orgTitle: string): Organization 
    // {
    //     for(var i = 0; i < this.orgList.length; i++)
    //     {
    //         if(orgTitle == this.orgList[i].title)
    //         {
    //             return this.orgList[i];
    //         }
    //     }
    // }
    
    //instead of this use .filter for more elegant code - Dr. Church
    findOrg(orgTitle: string): Organization []
    {
        let matchedList = []
        for(var i = 0; i < this.orgList.length; i++)
        {
            if(orgTitle == this.orgList[i].title)
            {
                matchedList.push(this.orgList[i]);
            }
        }
        return matchedList
    }

}