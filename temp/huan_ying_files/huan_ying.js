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
{loadMozillaCSS('Media/Moz.css')
adjustLineHeightIfTooBig('id1');
adjustFontSizeIfTooBig('id1');
adjustLineHeightIfTooBig('id2');
adjustFontSizeIfTooBig('id2');
adjustLineHeightIfTooBig('id3');
adjustFontSizeIfTooBig('id3');
Widget.onload();fixupAllIEPNGBGs();
fixAllIEPNGs('Media/transparent.gif');
fixupIECSS3Opacity('id4');
applyEffects()}
function onPageUnload()
{Widget.onunload();}
