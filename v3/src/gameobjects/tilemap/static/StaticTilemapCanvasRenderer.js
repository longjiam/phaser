var StaticTilemapCanvasRenderer = function (renderer, src, interpolationPercentage, camera)
{
    if (src.renderMask !== src.renderFlags || (src.cameraFilter > 0 && (src.cameraFilter & camera._id)))
    {
        return;
    }

    //  TODO :)
};

module.exports = StaticTilemapCanvasRenderer;
