namespace aex
{
    export class LayerCollectionAssigner
    {
        constructor(public aeLayers:LayerCollection, public options: IAssignOptions)
        {
        }

        assign(jsLayers: ILayerBase[])
        {
            switch(this.options.layerCollectionBehavior) 
            {
                case CollectionBehavior.ReplaceAll:
                    this.clearAllLayers();
                    this.addLayers(jsLayers);
                    break;
                
                case CollectionBehavior.AddOnly:
                    this.addLayers(jsLayers);
                    break;

                default:
                    throw new Error(`Unsupported collection behavior ${this.options.layerCollectionBehavior}`);
            }

        }

        private clearAllLayers()
        {
            const layers = this.aeLayers;

            while (layers.length > 0) {
                layers[0].remove();
            }
        }

        private addLayers(jsLayers: ILayerBase[])
        {
            forEach(jsLayers, jsLayer => {
                this.addLayer(jsLayer);
            });
        }

        private addLayer(jsLayer: ILayerBase)
        {
            switch (jsLayer.type)
            {
                // TODO: Add Layer Types
                default:
                    throw new Error(`Layer type ${jsLayer.type} is not supported.`);
            }
        }
    }
}