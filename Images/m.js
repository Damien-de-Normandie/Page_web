var wr_detail = '';
var cmkturl = "http://astatic.weborama.fr/js/adperf_network.js";
var wr_site      = 26;
var wr_page      = 265;
var wr_board     = 289;
var wr_boardsize = "1x1";
var wr_floating  = 1;
var wr_thema     = 0;

function _estat(_s, _p, _c)
{
	var _S="http://perso.estat.com/m/00/";
	var _M=_s+"?";_M+="n="+Math.round(Math.random()*1000000000);
	_M+="&c="+escape(_c);_M+="&p="+escape(_p);
	var _R;
	if(navigator.appName=='Netscape')_R=escape(document.referrer);
	else (top!=null && top.location!=null && typeof(top.location.href)=="string")?_R=escape(top.document.referrer):_R=escape(document.referrer);
	if (_R=="undefined"||_R=="")_R="_bm_";_M+="&r="+_R;
	if(typeof(screen)=="object")
	{
		_M+="&scw="+screen.width;
		_M+="&sch="+screen.height;
		_M+="&scp="+screen.colorDepth
	};
	document.write('<a href="http://persos.estat.com/statistiques/audience/'+_s+'" target="_blank"><img'+' border="0" src="'+_S+_M+'"></a>');

	wr_detail = _s.substring(6);
	
	document.write("<scr"+"ipt src='"+cmkturl+"'></scr"+"ipt>");
}
_UJS=1;
