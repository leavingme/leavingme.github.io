// Created by iWeb 3.0.4 local-build-20130224

setTransparentGifURL('Media/transparent.gif');
function applyEffects()
{
	var registry=IWCreateEffectRegistry();
	registry.registerEffects({});
	registry.applyEffects();
}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('guan_yu_wo_files/guan_yu_woMoz.css')
adjustLineHeightIfTooBig('id1');
adjustFontSizeIfTooBig('id1');
adjustLineHeightIfTooBig('id6');
adjustFontSizeIfTooBig('id6');
adjustLineHeightIfTooBig('id7');
adjustFontSizeIfTooBig('id7');
Widget.onload();
fixupAllIEPNGBGs();
fixAllIEPNGs('Media/transparent.gif');
fixupIECSS3Opacity('id8');
applyEffects()}
function onPageUnload()
{Widget.onunload();}
