urls = new Array(
		"douban.com",
		"weibo.com",
		"sports.sina.com.cn/",
		"taobao.com",
		"jd.com"
		);
targetUrl = "http://www.google.com";

chrome.tabs.onSelectionChanged.addListener(function(tabId,changeInfo,tab){  
	check();
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    check();
});

function check() {
	chrome.tabs.getSelected(null,function(tab){
    	for(i=0; i<urls.length; i++) {
    		var temp = urls[i];
    		if(tab.url.indexOf(temp)>=0) {
				//Found match items
				var time = new Date();
				var h = time.getHours();
				if(i != 0) {
					chrome.tabs.update(tab.id, {url:targetUrl});
				} else if(h>10&&h<21) {
					chrome.tabs.update(tab.id, {url:targetUrl});
				}
    		}
    	}
    });
}
