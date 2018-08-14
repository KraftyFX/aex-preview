namespace aex
{
    export class ProjectReader
    {
        constructor(public aeProj:Project, public options: IReadOptions)
        {
        }

        toJsObject() : IProject
        {
            const { aexType, commonMembers } = mapping.project;

            const jsProj = { __type: aexType } as IProject;

            assignMembersFrom(jsProj, this.aeProj, commonMembers);

            jsProj.items = new ItemCollectionReader(this.aeProj.items, this.options).toJsObject();

            return jsProj;
        }
    }
}