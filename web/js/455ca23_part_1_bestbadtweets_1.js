function resizeDashboard(){var a=$(window).height();$(".details-pane").css("height",(a-120)+"px");$(".pane-components").css("height",(a-151)+"px")}function getParameterByName(b){b=b.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var a="[\\?&]"+b+"=([^&#]*)";var d=new RegExp(a);var c=d.exec(window.location.href);if(c==null){return""}else{return decodeURIComponent(c[1].replace(/\+/g," "))}}function addLinkToHash(b){var a=/(^|\s)#(\w+)/g;return b.replace(a,'$1<a href="/search?q=%23$2">#$2</a>')}function addLinkToAmp(b){var a=/(^|\s)@(\w+)/g;return b.replace(a,'$1<a target="_blank" href="http://www.twitter.com/$2">@$2</a>')}function replaceURLWithHTMLLinks(b){var a=/(\b(https?|ftp|file):\/\/)([-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;return b.replace(a,"<a target=\"_blank\" href='$1$3'>$3</a>")}function searchTextBold(b,a){return b.replace(a,"<strong>"+a+"</strong>")}jQuery(document).ready(function(){resizeDashboard();$(window).resize(function(){resizeDashboard();return false});$(".details-pane").hide();function b(c){$(".details-pane").toggle(c)}function a(c){$(".details-pane").toggle(c)}$(".glass").live("click",function(){$("#search-form").submit();return false});$(".pane-close").live("click",function(){$(".details-pane").toggle(false)});$(".dropdown-link > a").live("click",function(){$(this).next(".drop-down").toggle();return false});$(".drop-down").live("mouseleave",function(){$(this).toggle()});$("#top-bar .loggedin").live("click",function(){$("#top-bar .dropdown").toggle();return false});$("#top-bar .loggedout").live("click",function(){window.location="/secured";return false});$("#top-bar .dropdown").live("mouseleave",function(){$(this).toggle()});$(".user-dropdown li a").live("click",function(){location.href=$(this).attr("href");return false});$(".stream-item .tweet, .stream-item .more, .dashboard-list-item, .dashboard-stream-item .tweet").live("click",function(){var e=$(".details-pane:hidden");var d=$(this).attr("data-tweet-id");var c=false;if($(".details-pane").length==0){window.location="/tweet?id_str="+d;return false}if(e.length>0||($(".details-pane-tweet").attr("data-tweet-id")!=d)){c=true}$(".details-pane").load("/tweet?id_str="+d,{},b(c))});$(".stream-item .user-content-medium, .user-profile-link").live("click",function(){var e=$(".details-pane:hidden");var d=$(this).attr("data-user-id");var c=false;if($(".details-pane").length==0){window.location="/user?id_str="+d;return false}if(e.length>0||($(".profile-pane").attr("data-user-id")!=d)){c=true}$(".details-pane").load("/user?id_str="+d,{},a(c));return false});$("abbr.timeago").each(function(d,e){var c=new Date($(e).attr("title"));if(c.addDays(2)>Date.today()){$(e).timeago()}else{var f=new Date($(e).attr("title"));$(e).text(f.toString("d MMM"))}});$(".condensed").live("click",function(){$(this).removeClass("condensed")})});