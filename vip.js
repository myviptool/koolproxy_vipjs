var thisURL = window.location.href,inum=1,vipOption;
var vipChannl = new Array(
//"http://Yourdomain.com/index.php?url=",
//"http://Yourdomain.com/index.php?url=",
//"http://Yourdomain.com/index.php?url=",
//"http://Yourdomain.com/index.php?url=",
"https://jx.618g.com/?url=",
"https://www.1717yun.com/jx/ty.php?url=",
"https://cdn.yangju.vip/k/?url=",
"https://api.sigujx.com/?url=",
"https://vip.jaoyun.com/index.php?url=",
"https://api.bbbbbb.me/jx/?url=",
"https://www.myxin.top/jx/api/?url=",
"https://jiexi.071811.cc/jx.php?url=",
"https://jx.wslmf.com/?url=",
"https://jx.dy-jx.com/?url=",
"https://vip.mpos.ren/v/?url=",
"https://jqaaa.com/jx.php?url=",
"https://jx.598110.com/index.php?url=",
"https://jx.bwcxy.com/?v=",
"https://jx.rdhk.net/?v=",
"https://jx.fo97.cn/?url=",
"https://www.kpezp.cn/jlexi.php?url=",
"https://jx.ivito.cn/?url=",
"https://api.927jx.com/vip/?url=",
"https://api.tv920.com/vip/?url=",
"https://www.ka61b.cn/jx.php?url=",
"https://api.lhh.la/vip/?url=",
"https://api.sumingys.com/index.php?url=",
"https://api.8bjx.cn/?url=",
"https://v.qianyicp.com/v.php?url=",
"https://mcncn.cn/?url=",
"https://jx.f41.cc/?url=",
"https://www.ckmov.vip/api.php?url=",
"https://cn.bjbanshan.cn/jx.php?url=",
"https://jx.mw0.cc/?url=",
"https://www.33tn.cn/?url=",
"https://jx.1ff1.cn/?url=",
"https://jx.000180.top/jx/?url=",
"https://py.ha12.xyz/sos/index.php?url=",
"https://www.administratorw.com/video.php?url=",
"https://jiexi.380k.com/?url=",
"https://okjx.cc/?url=",
"http://jx.ejiafarm.com/dy.php?url=",
"http://jx.du2.cc/?url=",
"http://jx.drgxj.com/?url=",
"http://jx.618ge.com/?url=",
"http://vip.jlsprh.com/?url=",
"http://000o.cc/jx/ty.php?url=",
"http://jqaaa.com/jx.php?url=",
"http://yun.baiyug.cn/vip/?url=",
"http://jx.598110.com/index.php?url=",
"http://jx.api.163ren.com/vod.php?url=",
"http://aikan-tv.com/?url=",
"https://api.isoyu.com/ckplayer/?url=",
"http://jx.mw0.cc/?url=",
"https://zww.e6.gs/?v=",
"http://vip.qi71.cn/?url=",
"https://vip.bljiex.com/?v="
);

for (x in vipChannl)
{
  vipOption = vipOption + '<option value="'+vipChannl[x]+thisURL+'">VIP通道'+inum+++'</option>';
}

function insVIP(emID,rID,index=0,height="100%"){
var gemID = document.getElementsByClassName(emID)[0];
var newNode = document.createElement("select");
newNode.setAttribute("title","原整理by MarIxs");
gemID.appendChild(newNode);
newNode.setAttribute("onchange", "replacePlayer(this,'"+rID+"','"+height+"')");
newNode.innerHTML = '<option selected="selected" disabled="disabled">切换VIP通道</option>'+vipOption;
if (index!=0){
  newNode.selectedIndex=index;
  setTimeout(function () {
    var event = document.createEvent("UIEvents"); 
    event.initUIEvent("change", true, true);      
    newNode.dispatchEvent(event);
  }, 1000);
}
}

function replacePlayer(e,rID,height="100%"){
    var playerID = document.getElementById(rID);
    playerID.innerHTML = '';
    var newplayerID = document.createElement("iframe");
    playerID.appendChild(newplayerID);
    newplayerID.setAttribute("border","0");
    newplayerID.setAttribute("frameborder","no");
    newplayerID.setAttribute("scrolling","no");
    newplayerID.setAttribute("marginwidth","0");
    newplayerID.setAttribute("width","100%");
    newplayerID.setAttribute("height",height);
    newplayerID.src = e.value;
}
