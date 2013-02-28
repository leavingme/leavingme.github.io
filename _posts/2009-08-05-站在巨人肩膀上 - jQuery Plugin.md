
【BlockUI】
在網頁操作過程中，我們需要顯示某些訊息，要求使用者等待或做出特殊回應，在此一過程沒有完成前，使用者不能進行其他操作。這就是所謂強制式對話框(Modal Dialog)的概念，IE有所謂的showModalDialog，但此一函數無法跨瀏覽器使用。BlockUI提供了如Modal Dialog的效果，會在網頁或元素表面放上一層遮罩，阻止使用者進行任何操作，還可同時顯示指定的訊息。
Plugin網站: http://malsup.com/jquery/block/

【ThickBox】
可以將單一圖檔、多圖檔、HTML內容、IFrame、AJAX更新內容顯示為Modal Dialog的型式，介面比BlockUI漂亮，可客製的彈性也較多，並具備簡單的多照片切換展示功能。

Plugin網址: http://jquery.com/demo/thickbox/
【tablesorter】
可以直接在<table>加上動態排序功能。使用時必須區分出<thead>及<tbody>，並配合CSS，可提供如Excel般點選標題就重新排序的功能。

Plugin網址: http://tablesorter.com/docs/
【ScrollTo】
指供網頁捲動的輔助功能，可將畫面捲動到指定座標或特定元素上。另外還有延伸的Plugin: LocalScroll可在同頁連結(<a name="anchorName">)間捲動，及SerialScroll可設定類似上一步下一步的循序捲動。
Plugin網址: http://plugins.jquery.com/project/ScrollTo
【Tooltip】
可將元素的title="..."屬性以客製化Tooltip的方式呈現。

Plugin網址: http://plugins.jquery.com/project/tooltip
【Cycle】
即第一個範例介紹的輪播效果Plugin，有洗牌、放大、淡出、下翻、翻面、捲動等效果，很適合做照片或廣告的輪播展示。

Plugin網址: http://www.malsup.com/jquery/cycle/
【Validation】
提供欄位即時驗證功能，並內建了不少預設的驗證邏輯，如必要欄位、最大/最小長度、數值範圍、Email、URL、日期等，也開放自訂。採納用於表單填寫與送出時的欄位檢查，可節省不少自己動手的苦工。

Plugin網址: http://bassistance.de/jquery-plugins/jquery-plugin-validation/
【History】
網頁在AJAX動態變化內容後URL不變，無法讓使用者透過瀏覽器回上一頁的直覺操作退回更新前的狀況，常造成不少抱怨。較新版本的瀏覽器已加入相關的支援，而History Plugin則簡化了實作方式及克服了跨瀏覽器的問題。
Plugin網址: http://plugins.jquery.com/project/history
【3D Image Carousel】
讓圖片以立體旋轉木馬方式繞圓圈，呈現效果蠻炫的，不過頗耗資源。

Plugin網址: http://plugins.jquery.com/project/carousel3d
【Metadata】
可以將Javascript元件形式的資料藏在元素的CSS Class宣告、自訂屬性及子元素中，常被其他Plugin引用。設定資料的格式範例如下:
<li class="someclass {some: 'data'} anotherclass">...</li>
OR
<li data="{some:'random', json: 'data'}">...</li>  
OR  
<li><script type="data">{some:"json",data:true}</script> ...</li> 
Plugin網址: http://plugins.jquery.com/project/metadata
【Cookie】
很小的Plugin，但可以將讀寫Cookie簡化為一行程式搞定，支援設定有效期限、domain等等。
Plugin網址: http://plugins.jquery.com/project/cookie
【Lightbox】
Lightbox是非常有名的網頁照片展示Library，這是它的jQuery版。

Plugin網址: http://plugins.jquery.com/project/jquerylightbox_bal
【DropShadow】
為元素加上懸浮式的立體陰影效果。

Plugin網址: http://eyebulb.com/dropshadow/
【Pagination】
產生分頁顯示時的頁數選擇器，可以節省一些自己動手做的時間。

Plugin網址: http://plugins.jquery.com/project/pagination
【MaskedInput】
限定textbox的輸入格式，會預先在輸入位置顯示底線的設計很不錯。

Plugin網址: http://digitalbush.com/projects/masked-input-plugin/
【Auto Growing Textareas】
會隨著輸入內容增加自動長大的<textarea>
Plugin網址: http://plugins.jquery.com/project/autogrow
【Autocomplete】
由Google帶起的自動完成輸入提示風潮儼然已是AJAX網站不可或缺的重要功能，這個Plugin提供了一些簡化。不過原版在使用中文輸入法時有些問題，但網路上可找到解決方案。

Plugin網址: http://bassistance.de/jquery-plugins/jquery-plugin-autocomplete/
]]