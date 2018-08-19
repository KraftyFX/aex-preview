namespace aex
{
    class ShapeLayerReader
    {
        constructor(public aeShapeLayer:ShapeLayer, public options: IReadOptions)
        {
        }

        toJsObject() : IShapeLayer
        {
            throw new Error('Not implemented');
        }
    }
}