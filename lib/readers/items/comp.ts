namespace aex
{
    export class CompItemReader
    {

        constructor(public aeCompItem:CompItem, public options: IReadOptions)
        {
        }

        toJsObject() : ICompItem
        {
            const { aexType, commonMembers } = mapping.compItem;

            const jsCompItem = { type : aexType } as ICompItem;

            assignMembersFrom(jsCompItem, this.aeCompItem, commonMembers);

            jsCompItem.layers = new LayerCollectionReader(this.aeCompItem.layers, this.options).toJsObject();

            return jsCompItem;
        }
    }
}