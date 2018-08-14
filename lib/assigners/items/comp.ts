namespace aex
{
    export class CompAssigner
    {
        constructor(public aeCompItem:CompItem, public options: IAssignOptions)
        {
        }

        public static addToItemCollection(items: ItemCollection, jsCompItem: ICompItem, options: IAssignOptions)
        {
            const aeCompItem = items.addComp(
                jsCompItem.name,
                jsCompItem.width,
                jsCompItem.height,
                jsCompItem.pixelAspect,
                jsCompItem.duration,
                jsCompItem.frameRate
            );

            const assigner = new CompAssigner(aeCompItem, options);

            assigner.assign(jsCompItem);
        }

        assign(jsCompItem:ICompItem)
        {
            const { aexType, commonMembers } = mapping.compItem;

            assertIsType(jsCompItem, aexType);

            assignMembersFrom(this.aeCompItem, jsCompItem, commonMembers);

            const jsLayers = new LayerCollectionAssigner(this.aeCompItem.layers, this.options);

            jsLayers.assign(jsCompItem.layers);
        }
    }
}