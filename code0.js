gdjs.Loding_95ScreenCode = {};
gdjs.Loding_95ScreenCode.localVariables = [];
gdjs.Loding_95ScreenCode.idToCallbackMap = new Map();
gdjs.Loding_95ScreenCode.GDLoadingObjects1= [];
gdjs.Loding_95ScreenCode.GDLoadingObjects2= [];


gdjs.Loding_95ScreenCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main", false);
}
}

}


};

gdjs.Loding_95ScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Loding_95ScreenCode.GDLoadingObjects1.length = 0;
gdjs.Loding_95ScreenCode.GDLoadingObjects2.length = 0;

gdjs.Loding_95ScreenCode.eventsList0(runtimeScene);
gdjs.Loding_95ScreenCode.GDLoadingObjects1.length = 0;
gdjs.Loding_95ScreenCode.GDLoadingObjects2.length = 0;


return;

}

gdjs['Loding_95ScreenCode'] = gdjs.Loding_95ScreenCode;
