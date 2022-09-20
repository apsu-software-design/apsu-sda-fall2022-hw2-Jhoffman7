
export class Member
{
    //Fields
    private _email : string;
    private _name : string;

    //Constructor
    constructor(name: string, email: string)
    {
        this._email = email;
        this._name = name;
    }

    //Getters
    public get email()
    {
        return this._email;
    }
    public get name()
    {
        return this._name;
    }

    //Setters
    public set email(newEmail : string)
    {
        this._email = newEmail;
    }
    public set name(newName : string)
    {
        this._name = newName;
    }


}