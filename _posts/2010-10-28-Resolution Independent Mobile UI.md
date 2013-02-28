August 23, 2010 by David Kaneda…or… A pixel is not a pixel.In my last article about the benefits of SASS and CSS3, I briefly touched on a technique we use in Sencha Touch to make our interfaces resolution independent. Today I will be expanding on that technique, so you can start to make your own scalable UI elements for WebKit.A Brief IntroductionThis is not an article on adaptive layouts or responsive web design. This article is specifically about pixel “density”, a relatively new concern to digital designers. In the mobile environment, screen resolution has been quickly advancing, resulting in larger and larger “pixels per inch” (ppi).Take, for example, the image above. This is the same page, rendered by the same browser, on the iPad and iPhone 4. Note how the button looks smaller on the iPhone. This is because the iPad has a pixel density of 132ppi, while the iPhone 4, with its Retina Display, has a ppi of 326. The iPhone 4, however, automatically scales pages 2×, so we are effectively working with a ppi of 163. This is still about 15% denser than the iPad display, which means the physical display of the button button is about 15% smaller.This pixel density must be taken into account when designing cross-platform mobile applications, for two primary reasons:If you design a button for a 132ppi (like the iPad), it will come out much smaller for higher ppis, which could result in it becoming harder to tap and possibly render it unusable.Images and UI elements must be scaled intelligently, to avoid pixellation and blurriness.The General ConceptThe overriding concept behind this technique is to use ems — a typographically relative measurement unit — to size your elements. Wikipedia describes an Em as such:This unit defines the proportion of the letter width and height with respect to the point size of the current font… This unit is not defined in terms of any specific typeface, and thus is the same for all fonts at a given point size. So, 1 em in a 16 point typeface is 16 points.Because font-size is an inherited property in CSS, we are able to change the scale of any em-based elements by simply changing the parent’s font-size.Starting Simple: A ButtonTo put this concept into practice, let’s take a look at a simple button..button {
    display: inline-block;
    color: #fff;

    background-image: -webkit-gradient(linear, 0% 0%, 0% 100%, from(#C1FA3B), color-stop(0.02, #8FCA05), to(#5A7F03));
    -webkit-border-radius: .2em;
    -webkit-box-shadow: #7EB105 0 0 .03em 0.03em inset, rgba(0, 0, 0, 0.4) 0px 0.1em .2em;
    text-shadow: rgba(0,0,0,.2) 0 .05em .02em;
    border: .08em solid #374D02;
    padding: .2em .6em;
}As you can see, we’ve added rounded corners, an inner glow (using inset with -webkit-box-shadow), a drop shadow, text shadow, and padding to our element — all using em as our sizing unit. The only sizing which is not accomplished with ems is the background-gradient, which must be defined in percentage-based color-stops. As these color-stops are still relative to the size of the button itself, these values are inherently relative as well.To show off some different sizes for our button, we can easily just add a few classes like:.size_2x {
    font-size: 200%;
}
.size_8x {
    font-size: 800%;
}The HTML for our demo then looks like this:<a href="#" class="button">1×</a>

<div class="size_2x">
    <a href="#" class="button">2×</a>
</div>
<div class="size_8x">
    <a href="#" class="button">8×</a>
</div>We will continue to use these size_2x and size_8x classes through the rest of the examples.Preview this step in a WebKit-based browser.Caveat: Changing only the text sizeThe only troublesome part of this method is that you will occasionally want to change the actual font-size of an element, without affecting its overall scale. For this, we can use a wrapper div/span inside of our element, like so:<a href="#" class="button"><span class="textsize_2x">2× text</span></a>Images and MasksThe technique can also be used on images. For traditional images, it’s as easy as setting either the width or the height (the other will be automatically applied to remain proportional) in ems or percentages. We must embed a higher resolution photo, to be scaled down to meet the different sizes (we want to make sure we’re scaling down, as scaling up will result in pixellation)..imgbase {
    width: 4em;
}And the HTML:<img class="imgbase" src="duck.jpg" />

<div class="size_2x">
    <img class="imgbase" src="duck.jpg" />
</div>
<div class="size_8x">
    <img class="imgbase" src="duck.jpg" />
</div>
Similarly, we can be apply sizing to background images and masks:li {
    background: url(resources/duckbullet.png) 0 .3em no-repeat;
    background-size: 1em auto; // sets width to 1em, then height automatically
}The benefit of this technique is that your images will be the same physical size across different devices, but will have more resolution on the devices that support it.It should be noted, though, that these images are not truly “resolution independent.” The very concept of resolution independence is impossible to apply to bitmap-based graphics. As mentioned, we created our image at a large size, anticipating that it would be scaled down. If the image were to be scaled up instead, it would become pixellated. The other unfortunate side-effect is wasted bandwidth — by always including a larger version of your image, you’re ensuring unnecessary kilobytes are being transferred.Preview this step in a WebKit-based browser.SVG to the RescueSVG is a W3C specification for vector images which is already implemented in WebKit (though not all versions*). Because SVG is vector-based, it can be infinitely scaled without detriment to quality. This is the best option available for icons, logos, and non-bitmap UI elements..logo {
    width: 2em;
    margin-bottom: 20px;
}
.size_2x {
    font-size: 200%;
}
.size_8x {
    font-size: 800%;
}And the accompanying HTML:<img class="logo" src="sencha.svg" />
<div class="size_2x">
    <img class="logo" src="sencha.svg" />
</div>
<div class="size_8x">
    <img class="logo" src="sencha.svg" />
</div>* Unfortunately, as SVG is not yet implemented in Android, we are not using this technique in Sencha Touch.Preview this step in a WebKit-based browser.Community Sample: Loading IndicatorJordan Dobson has implemented this technique to great effect by creating a CSS3-based loading spinner. Check out hisdemo page, which has buttons to make the spinner bigger and smaller (again, by changing the parent’s font-size).Changing Size Per DevicesOnce you have your entire UI and layout measured in ems and percentages, you can apply the font-size to the body to adjust the overall scale (previously, we were setting the font-size on a parent element of our target). Currently, in Sencha Touch, we use Javascript user-agent sniffing to detect the device, and then add corresponding classes to the body. Once those are added, we adjust the UI resolution like so:body {
  font-size: 100%; // This accommodates the lowest density, the iPad, at 132ppi.
}
body.x-iphone-os.x-phone {
  font-size: 114%; // This accommodates the iPhone, at 163ppi
}
body.x-android-os.x-phone {
  font-size: 120%; // This accommodates most Android phones, at 180ppi.
}The future: @media queriesIdeally, we should be able to detect and change style using CSS3 media queries. There is a specific addition to the CSS3 recommendation that would help here, though it has yet to be implemented on iOS or Android — the resolution attribute:@media screen and (min-resolution: 132dpi) {
    body {
      font-size: 100%; // This accommodates the lowest density, the iPad, at 132ppi.
    }
}
@media screen and (min-resolution: 160dpi) {
    body {
      font-size: 114%;
    }
}
@media screen and (min-resolution: 180dpi) {
    body {
        font-size: 120%;
    }
}
// Not possible yet :(There is one media query attribute of note which iOS recently added, called device-pixel-ratio. As mentioned at the start of this article, the iPhone 4 (with Retina Display) automatically scales pixels 2× on web pages. Developers can check for the Retina Display with a query like this:@media screen and (-webkit-min-device-pixel-ratio: 2) {
    // CSS specific to Retina Displays
}Aral Balkan has some great thoughts on taking advantage of this rule in his article, How to make your web content look stunning on the iPhone 4’s new Retina display.Preview this step in a WebKit-based browser.ConclusionAs device displays become denser and denser (did someone say Retina Display iPad?), finding the right method for creating resolution independent UI elements will become more and more important. Using ems and percentages is one such method, that we currently think is the strongest, but I’m curious: Do you know of others? Is there a change to the CSS3 spec that you think would improve this process?]]