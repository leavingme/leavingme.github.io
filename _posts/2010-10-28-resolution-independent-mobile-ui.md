---
layout: post
title: Resolution Independent Mobile UI
date: 2010-10-28 00:46:00
---
<span class="Apple-style-span" style="font-family: Helvetica, Arial, Verdana, Geneva, sans-serif; line-height: 18px; font-size: 12px; color: #555555;">

<span class="date-header" id="" style="color: gray; font-size: 11px; font-weight: normal; margin-bottom: 5px; display: block;">August 23, 2010 by David Kaneda</span>
<div class="entry" id="" style="margin-top: 0px; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; line-height: 20px;">

…or… A pixel is not a pixel.

In my last article about&nbsp;[the benefits of SASS and CSS3](http://www.sencha.com/blog/2010/06/29/getting-sassy-with-css/), I briefly touched on a technique we use in Sencha Touch to make our interfaces resolution independent. Today I will be expanding on that technique, so you can start to make your own scalable UI elements for WebKit.

![Photo comparison of a high pixel density device, an iPhone 4, and a less dense device, the iPad.](http://www.sencha.com/blog/wp-content/uploads/2010/08/resolution-independent-ui/resources/button_photo.jpg)

### A Brief Introduction

This is not an article on adaptive layouts or responsive web design. This article is specifically about pixel “density”, a relatively new concern to digital designers. In the mobile environment, screen resolution has been quickly advancing, resulting in larger and larger “pixels per inch” (ppi).

Take, for example, the image above. This is the same page, rendered by the same browser, on the iPad and iPhone 4. Note how the button looks smaller on the iPhone. This is because the iPad has a pixel density of 132ppi, while the iPhone 4, with its Retina Display, has a ppi of 326. The iPhone 4, however, automatically scales pages 2×, so we are effectively working with a ppi of 163. This is still about 15% denser than the iPad display, which means the&nbsp;_physical_&nbsp;display of the button button is about 15% smaller.

This pixel density must be taken into account when designing cross-platform mobile applications, for two primary reasons:

*   If you design a button for a 132ppi (like the iPad), it will come out much smaller for higher ppis, which could result in it becoming harder to tap and possibly render it unusable.
*   Images and UI elements must be scaled intelligently, to avoid pixellation and blurriness.

### The General Concept

The overriding concept behind this technique is to use ems — a typographically relative measurement unit — to size your elements. Wikipedia describes an Em as such:
> This unit defines the proportion of the letter width and height with respect to the point size of the current font… This unit is not defined in terms of any specific typeface, and thus is the same for all fonts at a given point size. So, 1 em in a 16 point typeface is 16 points.

Because&nbsp;`font-size`&nbsp;is an inherited property in CSS, we are able to change the scale of any&nbsp;`em`-based elements by simply changing the parent’s&nbsp;`font-size`.

### Starting Simple: A Button

To put this concept into practice, let’s take a look at a simple button.

    .button {
        display: inline-block;
        color: #fff;

        background-image: -webkit-gradient(linear, 0% 0%, 0% 100%, from(#C1FA3B), color-stop(0.02, #8FCA05), to(#5A7F03));
        -webkit-border-radius: .2em;
        -webkit-box-shadow: #7EB105 0 0 .03em 0.03em inset, rgba(0, 0, 0, 0.4) 0px 0.1em .2em;
        text-shadow: rgba(0,0,0,.2) 0 .05em .02em;
        border: .08em solid #374D02;
        padding: .2em .6em;
    }`</pre>

    As you can see, we’ve added rounded corners, an inner glow (using&nbsp;`inset`&nbsp;with&nbsp;`-webkit-box-shadow`), a drop shadow, text shadow, and padding to our element — all using&nbsp;`em`&nbsp;as our sizing unit. The only sizing which is not accomplished with&nbsp;`em`s is the background-gradient, which must be defined in percentage-based color-stops. As these color-stops are still relative to the size of the button itself, these values are inherently relative as well.

    To show off some different sizes for our button, we can easily just add a few classes like:
    <pre style="margin-top: 0px; margin-right: 0px; margin-bottom: 12px; margin-left: 0px; padding-top: 12px; padding-right: 12px; padding-bottom: 12px; padding-left: 12px; background-image: initial; background-attachment: initial; background-origin: initial; background-clip: initial; background-color: #f8f8ff; border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px; border-top-style: solid; border-right-style: solid; border-bottom-style: solid; border-left-style: solid; border-top-color: #dddddd; border-right-color: #dddddd; border-bottom-color: #dddddd; border-left-color: #dddddd; font-family: Menlo, Monaco, Courier, monospace; overflow-x: auto; overflow-y: auto; background-position: initial initial; background-repeat: initial initial;">`.size_2x {
        font-size: 200%;
    }
    .size_8x {
        font-size: 800%;
    }`</pre>

    The HTML for our demo then looks like this:
    <pre style="margin-top: 0px; margin-right: 0px; margin-bottom: 12px; margin-left: 0px; padding-top: 12px; padding-right: 12px; padding-bottom: 12px; padding-left: 12px; background-image: initial; background-attachment: initial; background-origin: initial; background-clip: initial; background-color: #f8f8ff; border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px; border-top-style: solid; border-right-style: solid; border-bottom-style: solid; border-left-style: solid; border-top-color: #dddddd; border-right-color: #dddddd; border-bottom-color: #dddddd; border-left-color: #dddddd; font-family: Menlo, Monaco, Courier, monospace; overflow-x: auto; overflow-y: auto; background-position: initial initial; background-repeat: initial initial;">`&lt;a href="#" class="button"&gt;1×&lt;/a&gt;

    &lt;div class="size_2x"&gt;
        &lt;a href="#" class="button"&gt;2×&lt;/a&gt;
    &lt;/div&gt;
    &lt;div class="size_8x"&gt;
        &lt;a href="#" class="button"&gt;8×&lt;/a&gt;
    &lt;/div&gt;`</pre>

    [![Step 1 shows CSS buttons controlled by font-size.](http://www.sencha.com/blog/wp-content/uploads/2010/08/resolution-independent-ui/resources/step1-sm.png)](http://www.sencha.com/blog/wp-content/uploads/2010/08/resolution-independent-ui/1_button.html)

    We will continue to use these&nbsp;`size_2x`&nbsp;and&nbsp;`size_8x`&nbsp;classes through the rest of the examples.

    [Preview this step in a WebKit-based browser](http://www.sencha.com/blog/wp-content/uploads/2010/08/resolution-independent-ui/1_button.html).

    #### Caveat: Changing&nbsp;_only_&nbsp;the text size

    The only troublesome part of this method is that you will occasionally want to change the actual&nbsp;`font-size`&nbsp;of an element, without affecting its overall scale. For this, we can use a wrapper div/span inside of our element, like so:
    <pre style="margin-top: 0px; margin-right: 0px; margin-bottom: 12px; margin-left: 0px; padding-top: 12px; padding-right: 12px; padding-bottom: 12px; padding-left: 12px; background-image: initial; background-attachment: initial; background-origin: initial; background-clip: initial; background-color: #f8f8ff; border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px; border-top-style: solid; border-right-style: solid; border-bottom-style: solid; border-left-style: solid; border-top-color: #dddddd; border-right-color: #dddddd; border-bottom-color: #dddddd; border-left-color: #dddddd; font-family: Menlo, Monaco, Courier, monospace; overflow-x: auto; overflow-y: auto; background-position: initial initial; background-repeat: initial initial;">`&lt;a href="#" class="button"&gt;&lt;span class="textsize_2x"&gt;2× text&lt;/span&gt;&lt;/a&gt;`</pre>

    ### Images and Masks

    The technique can also be used on images. For traditional images, it’s as easy as setting either the width or the height (the other will be automatically applied to remain proportional) in&nbsp;`em`s or percentages. We must embed a higher resolution photo, to be scaled down to meet the different sizes (we want to make sure we’re scaling down, as scaling up will result in pixellation).
    <pre style="margin-top: 0px; margin-right: 0px; margin-bottom: 12px; margin-left: 0px; padding-top: 12px; padding-right: 12px; padding-bottom: 12px; padding-left: 12px; background-image: initial; background-attachment: initial; background-origin: initial; background-clip: initial; background-color: #f8f8ff; border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px; border-top-style: solid; border-right-style: solid; border-bottom-style: solid; border-left-style: solid; border-top-color: #dddddd; border-right-color: #dddddd; border-bottom-color: #dddddd; border-left-color: #dddddd; font-family: Menlo, Monaco, Courier, monospace; overflow-x: auto; overflow-y: auto; background-position: initial initial; background-repeat: initial initial;">`.imgbase {
        width: 4em;
    }`</pre>

    And the HTML:
    <pre style="margin-top: 0px; margin-right: 0px; margin-bottom: 12px; margin-left: 0px; padding-top: 12px; padding-right: 12px; padding-bottom: 12px; padding-left: 12px; background-image: initial; background-attachment: initial; background-origin: initial; background-clip: initial; background-color: #f8f8ff; border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px; border-top-style: solid; border-right-style: solid; border-bottom-style: solid; border-left-style: solid; border-top-color: #dddddd; border-right-color: #dddddd; border-bottom-color: #dddddd; border-left-color: #dddddd; font-family: Menlo, Monaco, Courier, monospace; overflow-x: auto; overflow-y: auto; background-position: initial initial; background-repeat: initial initial;">`&lt;img class="imgbase" src="duck.jpg" /&gt;

    &lt;div class="size_2x"&gt;
        &lt;img class="imgbase" src="duck.jpg" /&gt;
    &lt;/div&gt;
    &lt;div class="size_8x"&gt;
        &lt;img class="imgbase" src="duck.jpg" /&gt;
    &lt;/div&gt;
    `</pre>

    Similarly, we can be apply sizing to background images and masks:
    <pre style="margin-top: 0px; margin-right: 0px; margin-bottom: 12px; margin-left: 0px; padding-top: 12px; padding-right: 12px; padding-bottom: 12px; padding-left: 12px; background-image: initial; background-attachment: initial; background-origin: initial; background-clip: initial; background-color: #f8f8ff; border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px; border-top-style: solid; border-right-style: solid; border-bottom-style: solid; border-left-style: solid; border-top-color: #dddddd; border-right-color: #dddddd; border-bottom-color: #dddddd; border-left-color: #dddddd; font-family: Menlo, Monaco, Courier, monospace; overflow-x: auto; overflow-y: auto; background-position: initial initial; background-repeat: initial initial;">`li {
        background: url(resources/duckbullet.png) 0 .3em no-repeat;
        background-size: 1em auto; // sets width to 1em, then height automatically
    }`</pre>

    [![Step 2 shows images controlled by font-size.](http://www.sencha.com/blog/wp-content/uploads/2010/08/resolution-independent-ui/resources/step2-sm.png)](http://www.sencha.com/blog/wp-content/uploads/2010/08/resolution-independent-ui/2_images_masks.html)

    The benefit of this technique is that your images will be the same physical size across different devices, but will have more resolution on the devices that support it.

    It should be noted, though, that these images are not truly “resolution independent.” The very concept of resolution independence is impossible to apply to bitmap-based graphics. As mentioned, we created our image at a large size, anticipating that it would be scaled down. If the image were to be scaled up instead, it would become pixellated. The other unfortunate side-effect is wasted bandwidth — by always including a larger version of your image, you’re ensuring unnecessary kilobytes are being transferred.

    [Preview this step in a WebKit-based browser](http://www.sencha.com/blog/wp-content/uploads/2010/08/resolution-independent-ui/2_images_masks.html).

    ### SVG to the Rescue

    SVG is a&nbsp;[W3C specification](http://www.alistapart.com/articles/using-svg-for-flexible-scalable-and-fun-backgrounds-part-ii/)&nbsp;for vector images which is already implemented in WebKit (though not all versions*). Because SVG is vector-based, it can be infinitely scaled without detriment to quality. This is the best option available for icons, logos, and non-bitmap UI elements.
    <pre style="margin-top: 0px; margin-right: 0px; margin-bottom: 12px; margin-left: 0px; padding-top: 12px; padding-right: 12px; padding-bottom: 12px; padding-left: 12px; background-image: initial; background-attachment: initial; background-origin: initial; background-clip: initial; background-color: #f8f8ff; border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px; border-top-style: solid; border-right-style: solid; border-bottom-style: solid; border-left-style: solid; border-top-color: #dddddd; border-right-color: #dddddd; border-bottom-color: #dddddd; border-left-color: #dddddd; font-family: Menlo, Monaco, Courier, monospace; overflow-x: auto; overflow-y: auto; background-position: initial initial; background-repeat: initial initial;">`.logo {
        width: 2em;
        margin-bottom: 20px;
    }
    .size_2x {
        font-size: 200%;
    }
    .size_8x {
        font-size: 800%;
    }`</pre>

    And the accompanying HTML:
    <pre style="margin-top: 0px; margin-right: 0px; margin-bottom: 12px; margin-left: 0px; padding-top: 12px; padding-right: 12px; padding-bottom: 12px; padding-left: 12px; background-image: initial; background-attachment: initial; background-origin: initial; background-clip: initial; background-color: #f8f8ff; border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px; border-top-style: solid; border-right-style: solid; border-bottom-style: solid; border-left-style: solid; border-top-color: #dddddd; border-right-color: #dddddd; border-bottom-color: #dddddd; border-left-color: #dddddd; font-family: Menlo, Monaco, Courier, monospace; overflow-x: auto; overflow-y: auto; background-position: initial initial; background-repeat: initial initial;">`&lt;img class="logo" src="sencha.svg" /&gt;
    &lt;div class="size_2x"&gt;
        &lt;img class="logo" src="sencha.svg" /&gt;
    &lt;/div&gt;
    &lt;div class="size_8x"&gt;
        &lt;img class="logo" src="sencha.svg" /&gt;
    &lt;/div&gt;`</pre>

    [![Step 3 shows SVGs controlled by font-size.](http://www.sencha.com/blog/wp-content/uploads/2010/08/resolution-independent-ui/resources/step3-sm.png)](http://www.sencha.com/blog/wp-content/uploads/2010/08/resolution-independent-ui/3_svg.html)

    _* Unfortunately, as SVG is not yet implemented in Android, we are not using this technique in Sencha Touch._

    [Preview this step in a WebKit-based browser](http://www.sencha.com/blog/wp-content/uploads/2010/08/resolution-independent-ui/3_svg.html).

    ### Community Sample: Loading Indicator

    Jordan Dobson has implemented this technique to great effect by creating a&nbsp;[CSS3-based loading spinner](http://jordandobson.tumblr.com/post/905003090/resizable-animated-loading-indicator). Check out his[demo page](http://jordandobson.com/webkit_loading_animation/resize/), which has buttons to make the spinner bigger and smaller (again, by changing the parent’s&nbsp;`font-size`).

    ### Changing Size Per Devices

    Once you have your entire UI and layout measured in&nbsp;`em`s and percentages, you can apply the&nbsp;`font-size`&nbsp;to the&nbsp;`body`&nbsp;to adjust the overall scale (previously, we were setting the&nbsp;`font-size`&nbsp;on a parent element of our target). Currently, in Sencha Touch, we use Javascript user-agent sniffing to detect the device, and then add corresponding classes to the&nbsp;`body`. Once those are added, we adjust the UI resolution like so:
    <pre style="margin-top: 0px; margin-right: 0px; margin-bottom: 12px; margin-left: 0px; padding-top: 12px; padding-right: 12px; padding-bottom: 12px; padding-left: 12px; background-image: initial; background-attachment: initial; background-origin: initial; background-clip: initial; background-color: #f8f8ff; border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px; border-top-style: solid; border-right-style: solid; border-bottom-style: solid; border-left-style: solid; border-top-color: #dddddd; border-right-color: #dddddd; border-bottom-color: #dddddd; border-left-color: #dddddd; font-family: Menlo, Monaco, Courier, monospace; overflow-x: auto; overflow-y: auto; background-position: initial initial; background-repeat: initial initial;">`body {
      font-size: 100%; // This accommodates the lowest density, the iPad, at 132ppi.
    }
    body.x-iphone-os.x-phone {
      font-size: 114%; // This accommodates the iPhone, at 163ppi
    }
    body.x-android-os.x-phone {
      font-size: 120%; // This accommodates most Android phones, at 180ppi.
    }`</pre>

    #### The future: @media queries

    Ideally, we should be able to detect and change style using CSS3 media queries. There is a specific addition to the CSS3 recommendation that would help here, though it has yet to be implemented on iOS or Android — the&nbsp;`resolution`&nbsp;attribute:
    <pre style="margin-top: 0px; margin-right: 0px; margin-bottom: 12px; margin-left: 0px; padding-top: 12px; padding-right: 12px; padding-bottom: 12px; padding-left: 12px; background-image: initial; background-attachment: initial; background-origin: initial; background-clip: initial; background-color: #f8f8ff; border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px; border-top-style: solid; border-right-style: solid; border-bottom-style: solid; border-left-style: solid; border-top-color: #dddddd; border-right-color: #dddddd; border-bottom-color: #dddddd; border-left-color: #dddddd; font-family: Menlo, Monaco, Courier, monospace; overflow-x: auto; overflow-y: auto; background-position: initial initial; background-repeat: initial initial;">`@media screen and (min-resolution: 132dpi) {
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
    // Not possible yet :(`</pre>

    There is one media query attribute of note which iOS recently added, called&nbsp;`device-pixel-ratio`. As mentioned at the start of this article, the iPhone 4 (with Retina Display) automatically scales pixels 2× on web pages. Developers can check for the Retina Display with a query like this:
    <pre style="margin-top: 0px; margin-right: 0px; margin-bottom: 12px; margin-left: 0px; padding-top: 12px; padding-right: 12px; padding-bottom: 12px; padding-left: 12px; background-image: initial; background-attachment: initial; background-origin: initial; background-clip: initial; background-color: #f8f8ff; border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px; border-top-style: solid; border-right-style: solid; border-bottom-style: solid; border-left-style: solid; border-top-color: #dddddd; border-right-color: #dddddd; border-bottom-color: #dddddd; border-left-color: #dddddd; font-family: Menlo, Monaco, Courier, monospace; overflow-x: auto; overflow-y: auto; background-position: initial initial; background-repeat: initial initial;">`@media screen and (-webkit-min-device-pixel-ratio: 2) {
        // CSS specific to Retina Displays
    }

Aral Balkan has some great thoughts on taking advantage of this rule in his article,&nbsp;[How to make your web content look stunning on the iPhone 4’s new Retina display](http://aralbalkan.com/3331).

[![Step 4 showing all CSS buttons, images and resolution independent scalable vector graphics (SVGs) controlled by font-size.](http://www.sencha.com/blog/wp-content/uploads/2010/08/rezindy-lg.png)](http://www.sencha.com/blog/wp-content/uploads/2010/08/resolution-independent-ui/4_combined.html)

[Preview this step in a WebKit-based browser](http://www.sencha.com/blog/wp-content/uploads/2010/08/resolution-independent-ui/4_combined.html).

### Conclusion

As device displays become denser and denser (did someone say Retina Display iPad?), finding the right method for creating resolution independent UI elements will become more and more important. Using&nbsp;`em`s and percentages is one such method, that we currently think is the strongest, but I’m curious: Do you know of others? Is there a change to the CSS3 spec that you think would improve this process?
</div></span>