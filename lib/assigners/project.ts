namespace aex
{
    export class ProjectAssigner
    {
        constructor(public aeProj:Project, public options: IAssignOptions)
        {
        }

        assign(jsProj:IProject)
        {
            const { aexType, commonMembers } = mapping.project;

            assertIsType(jsProj, aexType);

            assignMembersFrom(this.aeProj, jsProj, commonMembers);

            const jsItems = new ItemCollectionAssigner(this.aeProj.items, this.options);

            jsItems.assign(jsProj.items);
        }
    }
}