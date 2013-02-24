// Created by iWeb 3.0.4 local-build-20130224

setTransparentGifURL('Media/transparent.gif');
function applyEffects()
{
	var registry=IWCreateEffectRegistry();
	registry.registerEffects({
		stroke_1:new IWStrokeParts([{rect:new IWRect(-2,2,4,326),url:'guan_yu_wo_files/stroke_8.png'},{rect:new IWRect(-2,-2,4,4),url:'guan_yu_wo_files/stroke_9.png'},{rect:new IWRect(2,-2,383,4),url:'guan_yu_wo_files/stroke_10.png'},{rect:new IWRect(385,-2,4,4),url:'guan_yu_wo_files/stroke_11.png'},{rect:new IWRect(385,2,4,326),url:'guan_yu_wo_files/stroke_12.png'},{rect:new IWRect(385,328,4,4),url:'guan_yu_wo_files/stroke_13.png'},{rect:new IWRect(2,328,383,4),url:'guan_yu_wo_files/stroke_14.png'},{rect:new IWRect(-2,328,4,4),url:'guan_yu_wo_files/stroke_15.png'}],new IWSize(387,330)),
		stroke_0:new IWStrokeParts([{rect:new IWRect(-2,2,4,106),url:'guan_yu_wo_files/stroke.png'},{rect:new IWRect(-2,-2,4,4),url:'guan_yu_wo_files/stroke_1.png'},{rect:new IWRect(2,-2,106,4),url:'guan_yu_wo_files/stroke_2.png'},{rect:new IWRect(108,-2,4,4),url:'guan_yu_wo_files/stroke_3.png'},{rect:new IWRect(108,2,4,106),url:'guan_yu_wo_files/stroke_4.png'},{rect:new IWRect(108,108,4,4),url:'guan_yu_wo_files/stroke_5.png'},{rect:new IWRect(2,108,106,4),url:'guan_yu_wo_files/stroke_6.png'},{rect:new IWRect(-2,108,4,4),url:'guan_yu_wo_files/stroke_7.png'}],new IWSize(110,110))
	});
	registry.applyEffects();
}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('guan_yu_wo_files/guan_yu_woMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id6');adjustFontSizeIfTooBig('id6');adjustLineHeightIfTooBig('id7');adjustFontSizeIfTooBig('id7');Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');fixupIECSS3Opacity('id8');applyEffects()}
function onPageUnload()
{Widget.onunload();}
