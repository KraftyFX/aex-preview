namespace aex
{
    export class LayerCollectionReader
    {
        constructor(public aeLayers:LayerCollection, public options: IReadOptions)
        {
        }

        toJsObject() : ILayerBase[]
        {
            return map(this.aeLayers, aeLayer => this.toLayer(aeLayer));
        }

        private toLayer(aeLayer: Layer) : ILayerBase
        {
            throw new Error(`TODO: Implement reader for ${typeof aeLayer}`);
        }
    }
}