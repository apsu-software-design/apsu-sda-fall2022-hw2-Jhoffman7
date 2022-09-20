import { Member } from './member';

export class Members
{
    
    
    private memberList: Member[]
    
    constructor()
    {
        this.memberList = [];
    }

    addMember(name: string, email: string) 
    {
        this.memberList.push(new Member(name, email));
    }

    // //use for loop to index to find member with matching name
    // findMember(name: string): Member {
    //     for(var i = 0; i < this.memberList.length; i++)
    //     {
    //         if(name == this.memberList[i].name)
    //         {
    //             return this.memberList[i];
    //         }
    //     }
    // }
    findMember(name: string) : Member[]
    {
        let matchList = [];
        for(var i = 0; i < this.memberList.length; i++)
        {
            if(name == this.memberList[i].name)
            {
                matchList.push(this.memberList[i]);
            }
        }
        return matchList;
    }
}