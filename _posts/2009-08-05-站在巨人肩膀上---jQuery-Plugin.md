---
layout: post
title: 站在巨人肩膀上 - jQuery Plugin
---
<span style="font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 11px; line-height: 15px;">

<span class="clsSubject" style="font-weight: bold; color: #aa4400; font-size: 17px;">【BlockUI】</span>

在網頁操作過程中，我們需要顯示某些訊息，要求使用者等待或做出特殊回應，在此一過程沒有完成前，使用者不能進行其他操作。這就是所謂強制式對話框(Modal Dialog)的概念，IE有所謂的showModalDialog，但此一函數無法跨瀏覽器使用。BlockUI提供了如Modal Dialog的效果，會在網頁或元素表面放上一層遮罩，阻止使用者進行任何操作，還可同時顯示指定的訊息。

Plugin網站:&nbsp;[http://malsup.com/jquery/block/](http://malsup.com/jquery/block/)

![](http://i.msdn.microsoft.com/dd722583.BlockUI(zh-tw).gif)

<span class="clsSubject" style="font-weight: bold; color: #aa4400; font-size: 17px;">【ThickBox】</span>

可以將單一圖檔、多圖檔、HTML內容、IFrame、AJAX更新內容顯示為Modal Dialog的型式，介面比BlockUI漂亮，可客製的彈性也較多，並具備簡單的多照片切換展示功能。

![](http://i.msdn.microsoft.com/dd722583.ThickBox(zh-tw).gif)

Plugin網址:&nbsp;[http://jquery.com/demo/thickbox/](http://jquery.com/demo/thickbox/)

<span class="clsSubject" style="font-weight: bold; color: #aa4400; font-size: 17px;">【tablesorter】</span>

可以直接在&lt;table&gt;加上動態排序功能。使用時必須區分出&lt;thead&gt;及&lt;tbody&gt;，並配合CSS，可提供如Excel般點選標題就重新排序的功能。

![](http://i.msdn.microsoft.com/dd722583.TableSorter(zh-tw).gif)

Plugin網址:&nbsp;[http://tablesorter.com/docs/](http://tablesorter.com/docs/)

<span class="clsSubject" style="font-weight: bold; color: #aa4400; font-size: 17px;">【ScrollTo】</span>

指供網頁捲動的輔助功能，可將畫面捲動到指定座標或特定元素上。另外還有延伸的Plugin: LocalScroll可在同頁連結(&lt;a name="anchorName"&gt;)間捲動，及SerialScroll可設定類似上一步下一步的循序捲動。

Plugin網址:&nbsp;[http://plugins.jquery.com/project/ScrollTo](http://plugins.jquery.com/project/ScrollTo)

<span class="clsSubject" style="font-weight: bold; color: #aa4400; font-size: 17px;">【Tooltip】</span>

可將元素的title="..."屬性以客製化Tooltip的方式呈現。

![](http://i.msdn.microsoft.com/dd722583.Tooltip(zh-tw).gif)

Plugin網址:&nbsp;[http://plugins.jquery.com/project/tooltip](http://plugins.jquery.com/project/tooltip)

<span class="clsSubject" style="font-weight: bold; color: #aa4400; font-size: 17px;">【Cycle】</span>

即第一個範例介紹的輪播效果Plugin，有洗牌、放大、淡出、下翻、翻面、捲動等效果，很適合做照片或廣告的輪播展示。

![](http://i.msdn.microsoft.com/dd722583.Cycle(zh-tw).png)

Plugin網址:&nbsp;[http://www.malsup.com/jquery/cycle/](http://www.malsup.com/jquery/cycle/)

【Validation】

提供欄位即時驗證功能，並內建了不少預設的驗證邏輯，如必要欄位、最大/最小長度、數值範圍、Email、URL、日期等，也開放自訂。採納用於表單填寫與送出時的欄位檢查，可節省不少自己動手的苦工。

![](http://i.msdn.microsoft.com/dd722583.Validation(zh-tw).gif)

Plugin網址:[&nbsp;http://bassistance.de/jquery-plugins/jquery-plugin-validation/](http://bassistance.de/jquery-plugins/jquery-plugin-validation/)

<span class="clsSubject" style="font-weight: bold; color: #aa4400; font-size: 17px;">【History】</span>

網頁在AJAX動態變化內容後URL不變，無法讓使用者透過瀏覽器回上一頁的直覺操作退回更新前的狀況，常造成不少抱怨。較新版本的瀏覽器已加入相關的支援，而History Plugin則簡化了實作方式及克服了跨瀏覽器的問題。

Plugin網址:&nbsp;[http://plugins.jquery.com/project/history](http://plugins.jquery.com/project/history)

<span class="clsSubject" style="font-weight: bold; color: #aa4400; font-size: 17px;">【3D Image Carousel】</span>

讓圖片以立體旋轉木馬方式繞圓圈，呈現效果蠻炫的，不過頗耗資源。

![](http://i.msdn.microsoft.com/dd722583.3DCarousel(zh-tw).png)

Plugin網址:&nbsp;[http://plugins.jquery.com/project/carousel3d](http://plugins.jquery.com/project/carousel3d)

<span class="clsSubject" style="font-weight: bold; color: #aa4400; font-size: 17px;">【Metadata】</span>

可以將Javascript元件形式的資料藏在元素的CSS Class宣告、自訂屬性及子元素中，常被其他Plugin引用。設定資料的格式範例如下:

<span style="font-family: Consolas, 'Courier New', Courier, mono, fantasy; font-size: 12px; line-height: 14px;"><span style="margin-top: 0px; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; border-top-style: none; border-right-style: none; border-bottom-style: none; border-left-style: none; border-width: initial; border-color: initial; color: black; background-color: inherit;">&lt;li&nbsp;</span><span class="keyword" style="margin-top: 0px; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; border-top-style: none; border-right-style: none; border-bottom-style: none; border-left-style: none; border-width: initial; border-color: initial; color: #006699; background-color: inherit; font-weight: bold;">class</span><span style="margin-top: 0px; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; border-top-style: none; border-right-style: none; border-bottom-style: none; border-left-style: none; border-width: initial; border-color: initial; color: black; background-color: inherit;">=</span><span class="string" style="margin-top: 0px; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; border-top-style: none; border-right-style: none; border-bottom-style: none; border-left-style: none; border-width: initial; border-color: initial; color: blue; background-color: inherit;">"someclass&nbsp;{some:&nbsp;'data'}&nbsp;anotherclass"</span><span style="margin-top: 0px; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; border-top-style: none; border-right-style: none; border-bottom-style: none; border-left-style: none; border-width: initial; border-color: initial; color: black; background-color: inherit;">&gt;...&lt;/li&gt;</span></span>

<font face="Consolas, 'Courier New', Courier, mono, line-height: 14px;"><span style="font-family: Consolas, 'Courier New', Courier, mono, fantasy;">OR</span></font>
</span>

<font face="Consolas, 'Courier New', Courier, mono, line-height: 14px;"><span style="font-family: Consolas, 'Courier New', Courier, mono, fantasy;">&lt;li&nbsp;data=<span class="string" style="margin-top: 0px; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; border-top-style: none; border-right-style: none; border-bottom-style: none; border-left-style: none; border-width: initial; border-color: initial; color: blue; background-color: inherit;">"{some:'random',&nbsp;json:&nbsp;'data'}"</span><span style="margin-top: 0px; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; border-top-style: none; border-right-style: none; border-bottom-style: none; border-left-style: none; border-width: initial; border-color: initial; color: black; background-color: inherit;">&gt;...&lt;/li&gt; &nbsp;</span></span></font>

<font face="Consolas, 'Courier New', Courier, mono, line-height: 14px;"><span style="font-family: Consolas, 'Courier New', Courier, mono, fantasy;">OR &nbsp;</span></font>

<font face="Consolas, 'Courier New', Courier, mono, line-height: 14px;"><span style="font-family: Consolas, 'Courier New', Courier, mono, fantasy;">&lt;li&gt;&lt;script&nbsp;type=<span class="string" style="margin-top: 0px; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; border-top-style: none; border-right-style: none; border-bottom-style: none; border-left-style: none; border-width: initial; border-color: initial; color: blue; background-color: inherit;">"data"</span><span style="margin-top: 0px; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; border-top-style: none; border-right-style: none; border-bottom-style: none; border-left-style: none; border-width: initial; border-color: initial; color: black; background-color: inherit;">&gt;{some:</span><span class="string" style="margin-top: 0px; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; border-top-style: none; border-right-style: none; border-bottom-style: none; border-left-style: none; border-width: initial; border-color: initial; color: blue; background-color: inherit;">"json"</span><span style="margin-top: 0px; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; border-top-style: none; border-right-style: none; border-bottom-style: none; border-left-style: none; border-width: initial; border-color: initial; color: black; background-color: inherit;">,data:</span><span class="keyword" style="margin-top: 0px; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; border-top-style: none; border-right-style: none; border-bottom-style: none; border-left-style: none; border-width: initial; border-color: initial; color: #006699; background-color: inherit; font-weight: bold;">true</span><span style="margin-top: 0px; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; border-top-style: none; border-right-style: none; border-bottom-style: none; border-left-style: none; border-width: initial; border-color: initial; color: black; background-color: inherit;">}&lt;/script&gt;&nbsp;...&lt;/li&gt;&nbsp;</span></span></font>

<font face="Consolas, 'Courier New', Courier, mono, line-height: 14px;"><span style="font-family: Consolas, 'Courier New', Courier, mono, fantasy;"><span style="margin-top: 0px; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; border-top-style: none; border-right-style: none; border-bottom-style: none; border-left-style: none; border-width: initial; border-color: initial; color: black; background-color: inherit;"><span style="font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 11px; line-height: 15px;">Plugin網址:&nbsp;[http://plugins.jquery.com/project/metadata](http://plugins.jquery.com/project/metadata)</span></span></span></font>

<span class="clsSubject" style="font-weight: bold; color: #aa4400; font-size: 17px;">【Cookie】</span>

很小的Plugin，但可以將讀寫Cookie簡化為一行程式搞定，支援設定有效期限、domain等等。

Plugin網址:&nbsp;[http://plugins.jquery.com/project/cookie](http://plugins.jquery.com/project/cookie)

<span class="clsSubject" style="font-weight: bold; color: #aa4400; font-size: 17px;">【Lightbox】</span>

Lightbox是非常有名的網頁照片展示Library，這是它的jQuery版。

![](http://i.msdn.microsoft.com/dd722583.Lightbox(zh-tw).png)

Plugin網址:&nbsp;[http://plugins.jquery.com/project/jquerylightbox_bal](http://plugins.jquery.com/project/jquerylightbox_bal)

<span class="clsSubject" style="font-weight: bold; color: #aa4400; font-size: 17px;">【DropShadow】</span>

為元素加上懸浮式的立體陰影效果。

![](http://i.msdn.microsoft.com/dd722583.DropShadow(zh-tw).png)

Plugin網址:&nbsp;[http://eyebulb.com/dropshadow/](http://eyebulb.com/dropshadow/)

<span class="clsSubject" style="font-weight: bold; color: #aa4400; font-size: 17px;">【Pagination】</span>

產生分頁顯示時的頁數選擇器，可以節省一些自己動手做的時間。

![](http://i.msdn.microsoft.com/dd722583.Pagination(zh-tw).png)

Plugin網址:&nbsp;[http://plugins.jquery.com/project/pagination](http://plugins.jquery.com/project/pagination)

<span class="clsSubject" style="font-weight: bold; color: #aa4400; font-size: 17px;">【MaskedInput】</span>

限定textbox的輸入格式，會預先在輸入位置顯示底線的設計很不錯。

![](http://i.msdn.microsoft.com/dd722583.MaskedInput(zh-tw).png)

Plugin網址:&nbsp;[http://digitalbush.com/projects/masked-input-plugin/](http://digitalbush.com/projects/masked-input-plugin/)

<span class="clsSubject" style="font-weight: bold; color: #aa4400; font-size: 17px;">【Auto Growing Textareas】</span>

會隨著輸入內容增加自動長大的&lt;textarea&gt;

Plugin網址:&nbsp;[http://plugins.jquery.com/project/autogrow](http://plugins.jquery.com/project/autogrow)

<span class="clsSubject" style="font-weight: bold; color: #aa4400; font-size: 17px;">【Autocomplete】</span>

由Google帶起的自動完成輸入提示風潮儼然已是AJAX網站不可或缺的重要功能，這個Plugin提供了一些簡化。不過原版在使用中文輸入法時有些問題，但網路上可找到解決方案。

![](http://i.msdn.microsoft.com/dd722583.AutoComplete(zh-tw).png)

Plugin網址:&nbsp;[http://bassistance.de/jquery-plugins/jquery-plugin-autocomplete/](http://bassistance.de/jquery-plugins/jquery-plugin-autocomplete/)

]]