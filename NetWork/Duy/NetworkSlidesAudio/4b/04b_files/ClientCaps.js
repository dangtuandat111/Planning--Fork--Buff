var Browser_SupportsNavigateCSS  =0x00001;var Browser_SupportsFancyPlayerButtons =0x00002;var Browser_SupportsExpressionsInCSS =0x00004;var Browser_SupportsCustomCSSTags  =0x00008;var Browser_SupportsPPTSlideAnimations =0x00010;var Browser_EllipsifyTOCEntries   =0x00020;var Browser_SupportsUNICODE   =0x00040;var Browser_SupportsFilterEffects   =0x00080;var Browser_SupportsRuntimeStyle  =0x00100;var Browser_SupportsActiveX    =0x00200;var Browser_SupportsPowerpointHTML  =0x00400;var Browser_IsNetscape     =0x00800;var Browser_IsInternetExplorer   =0x01000;var Browser_CanControlPPTAnimationEngine=0x02000;var Browser_CanBandwidthManage  =0x04000;var Player_SupportsScriptTriggers  =0x10000;var Player_SupportsWebStreaming    =0x20000;var Player_CanScrub       =0x40000;var Player_64ObjectModel    =0x80000;var Player_70ObjectModel    =0x100000;var Technology_PC      =0x0F;var Technology_PC_Win9x    =0x01;var Technology_PC_WinNT    =0x02;var Technology_Mac      =0xF0;var Technology_Mac_OSX     =0x10;var Technology_InternetExplorer   =0xFF00;var Technology_Netscape     =0xFF0000;var Client_AllCapabilities=0x7FFFF | Player_70ObjectModel;var ClientCaps=Client_AllCapabilities;var Technology=0;var CONST_CAPABILITIES="caps%3d";function _F()
{return IEVersion()>=5.5;}function CheckOSNT4()
{var ua=window.navigator.userAgent
return (ua.indexOf("Windows NT)")!=-1||ua.indexOf("Windows NT;")!=-1||ua.indexOf("Windows NT 4.0")!=-1);}function CheckBrowserIE60()
{return IEVersion()>=6.0;}function FMacClient()
{return (Technology & Technology_Mac);}function FNetscapeClient()
{return (Technology & Technology_Netscape);}function FIEClient()
{return (Technology & Technology_InternetExplorer);}function IEVersion()
{return ((Technology & Technology_InternetExplorer)>>8)/10;}function NetscapeVersion()
{return ((Technology & Technology_Netscape)>>16)/10;}function Mac_FDetectWMP()
{var fHasWMP=navigator.mimeTypes &&
navigator.mimeTypes["application/x-mplayer2"] &&
navigator.mimeTypes["application/x-mplayer2"].enabledPlugin;if(fHasWMP)
{alert("Windows Media Player is installed.");return 1;}else
alert("Windows Media Player is NOT installed.");return 0;}var CONST_PARAMTYPE_INT=0;var CONST_PARAMTYPE_FLOAT=1;var CONST_PARAMTYPE_STRING=2;function ExtractURLParameter(szParamName,szHash,nType,nDef)
{var _xA,szParam,varRetVal=nDef;_xA=szHash.search(szParamName);if(_xA!=-1)
{szParam=szHash.substring(_xA+szParamName.length);if(nType==CONST_PARAMTYPE_INT)
{varRetVal=parseInt(szParam);if(isNaN(varRetVal))
varRetVal=nDef;}else if(nType==CONST_PARAMTYPE_FLOAT)
{varRetVal=parseFloat(szParam);if(isNaN(varRetVal))
varRetVal=nDef;}else if(nType==CONST_PARAMTYPE_STRING)
{varRetVal=(Unescape(szParam).split('&'))[0];if(varRetVal=="")
varRetVal=nDef;}else
{varRetVal=nDef;}}return varRetVal;}function UnescapeHTML(szEscaped)
{var szUnescaped=Unescape(szEscaped);szUnescaped=szUnescaped.replace(new RegExp("<br>","ig"),"\n");szUnescaped=szUnescaped.replace(new RegExp("&amp;","ig"),"&");szUnescaped=szUnescaped.replace(new RegExp("&#35;","ig"),"#");szUnescaped=szUnescaped.replace(new RegExp("&frasl;","ig"),"/");szUnescaped=szUnescaped.replace(new RegExp("&#63;","ig"),"?");szUnescaped=szUnescaped.replace(new RegExp("&#92;","ig"),"\\");szUnescaped=szUnescaped.replace(new RegExp("&quot;","ig"),"\"");szUnescaped=szUnescaped.replace(new RegExp("&lt;","ig"),"<");szUnescaped=szUnescaped.replace(new RegExp("&gt;","ig"),">");szUnescaped=szUnescaped.replace(new RegExp("&#37;","ig"),"%");return szUnescaped;}function Unescape(str)
{try
{return unescape(str);}catch (e)
{}return str;}function IsPresentationNotLocalOnNT4()
{return CheckOSNT4()&&(ClientCaps & Player_64ObjectModel)&&IsPresentationNotLocalPlayback();}function IsPresentationNotLocalPlayback()
{if(g_bUseMP7)
{var szProto=MediaPlayer.network.sourceProtocol.toLowerCase();return (szProto!="file");}else
{var nProto=MediaPlayer.SourceProtocol;return (nProto!=7);}return 0;}function IsPresentationStreaming()
{if(g_bUseMP7)
{var szProto=MediaPlayer.network.sourceProtocol.toLowerCase();return (szProto=="mmsu"||szProto=="mmst");}else
{var nProto=MediaPlayer.SourceProtocol;return (nProto== 3||nProto==4);}return 0;}function DumpCapabilities()
{LOG("<hr>Client Information<br>");LOG("useragent="+window.navigator.userAgent+"<br>");LOG("appname="+window.navigator.appName+"<br>");if(Technology & Technology_Mac)LOG("client platform is a MAC<br>");if(Technology & Technology_PC_Win9x)LOG("client is running on a Win9x machine<br>");if(Technology & Technology_PC_WinNT)LOG("client is running on a WinNT machine<br>");if(Technology & Technology_Netscape)LOG("client is a NETSCAPE version:"+NetscapeVersion()+"<br>");if(Technology & Technology_InternetExplorer)LOG("client is Internet Explorer version:"+IEVersion()+"<br>");LOG("<br>Client Capabilities:-<ol>");if(ClientCaps & Browser_SupportsNavigateCSS)LOG("<li>Browser_SupportsNavigateCSS</li>");if(ClientCaps & Browser_SupportsFancyPlayerButtons)LOG("<li>Browser_SupportsFancyPlayerButtons</li>");if(ClientCaps & Browser_SupportsExpressionsInCSS)LOG("<li>Browser_SupportsExpressionsInCSS</li>");if(ClientCaps & Browser_SupportsCustomCSSTags)LOG("<li>Browser_SupportsCustomCSSTags</li>");if(ClientCaps & Browser_SupportsPPTSlideAnimations)LOG("<li>Browser_SupportsPPTSlideAnimations</li>");if(ClientCaps & Browser_EllipsifyTOCEntries)LOG("<li>Browser_EllipsifyTOCEntries</li>");if(ClientCaps & Browser_SupportsUNICODE)LOG("<li>Browser_SupportsUNICODE</li>");if(ClientCaps & Browser_SupportsFilterEffects)LOG("<li>Browser_SupportsFilterEffects</li>");if(ClientCaps & Browser_SupportsActiveX)LOG("<li>Browser_SupportsActiveX</li>");if(ClientCaps & Browser_SupportsPowerpointHTML)LOG("<li>Browser_SupportsPowerpointHTML</li>");if(ClientCaps & Browser_CanBandwidthManage)LOG("<li>Browser_CanBandwidthManage</li>");if(ClientCaps & Player_SupportsScriptTriggers)LOG("<li>Player_SupportsScriptTriggers</li>");if(ClientCaps & Player_SupportsWebStreaming)LOG("<li>Player_SupportsWebStreaming</li>");if(ClientCaps & Player_64ObjectModel)LOG("<li>Player_64ObjectModel</li>");if(ClientCaps & Player_70ObjectModel)LOG("<li>Player_70ObjectModel</li>");LOG("</ol><font color=red>Client NOT capable of -<ol>");if(!(ClientCaps & Browser_SupportsNavigateCSS))   LOG("<li>!Browser_SupportsNavigateCSS</li>");if(!(ClientCaps & Browser_SupportsFancyPlayerButtons))  LOG("<li>!Browser_SupportsFancyPlayerButtons</li>");if(!(ClientCaps & Browser_SupportsExpressionsInCSS)) LOG("<li>!Browser_SupportsExpressionsInCSS</li>");if(!(ClientCaps & Browser_SupportsCustomCSSTags))  LOG("<li>!Browser_SupportsCustomCSSTags</li>");if(!(ClientCaps & Browser_SupportsPPTSlideAnimations))  LOG("<li>!Browser_SupportsPPTSlideAnimations</li>");if(!(ClientCaps & Browser_EllipsifyTOCEntries))   LOG("<li>!Browser_EllipsifyTOCEntries</li>");if(!(ClientCaps & Browser_SupportsUNICODE))    LOG("<li>!Browser_SupportsUNICODE</li>");if(!(ClientCaps & Browser_SupportsFilterEffects))   LOG("<li>!Browser_SupportsFilterEffects</li>");if(!(ClientCaps & Browser_SupportsActiveX))    LOG("<li>!Browser_SupportsActiveX</li>");if(!(ClientCaps & Browser_SupportsPowerpointHTML))  LOG("<li>!Browser_SupportsPowerpointHTML</li>");if(!(ClientCaps & Browser_CanBandwidthManage))   LOG("<li>!Browser_CanBandwidthManage</li>");if(!(ClientCaps & Player_SupportsScriptTriggers))   LOG("<li>!Player_SupportsScriptTriggers</li>");if(!(ClientCaps & Player_SupportsWebStreaming))   LOG("<li>!Player_SupportsWebStreaming</li>");LOG("</ol></font><hr>");}function SetPlayerObjectModel(Player_XXObjectModel)
{ClientCaps &= ~(Player_64ObjectModel | Player_70ObjectModel);ClientCaps |= Player_XXObjectModel;}function DetermineClientTechnology()
{ua=window.navigator.userAgent.toLowerCase();an=navigator.appName.toLowerCase();msie=ua.indexOf ("msie ");ns=ua.indexOf("netscape");if(msie>-1)
{ieVersion=parseFloat (ua.substring (msie+5,ua.indexOf (".",msie)+2));Technology|=(ieVersion*10) << 8;}else if(ns>-1)
{nsVersion=parseFloat (ua.substring (ns+9,ns+12));Technology|=(nsVersion*10) << 16;}if(ua.indexOf("windows 95")>=0||ua.indexOf("windows 98")  >=0||ua.indexOf("windows mil") >=0)
Technology|=Technology_PC_Win9x;else if(ua.indexOf("mac")>-1)
{Technology|=Technology_Mac_OSX;}else
{Technology|=Technology_PC_WinNT;}ClientCaps=ExtractURLParameter(CONST_CAPABILITIES,escape(window.location.hash).toLowerCase(),CONST_PARAMTYPE_INT,-1);if(ClientCaps==-1)
ClientCaps=Client_AllCapabilities;if(Technology & Technology_Mac)
{ClientCaps &= ~ (Browser_SupportsNavigateCSS |
Browser_SupportsFancyPlayerButtons |
Browser_SupportsExpressionsInCSS |
Browser_SupportsCustomCSSTags |
Browser_SupportsPPTSlideAnimations |
Browser_SupportsFilterEffects |
Browser_EllipsifyTOCEntries |
Browser_SupportsUNICODE |
Browser_SupportsRuntimeStyle |
Browser_SupportsActiveX|
Browser_CanBandwidthManage |
Player_SupportsScriptTriggers |
Player_SupportsWebStreaming |
Player_CanScrub);SetPlayerObjectModel(Player_64ObjectModel);}if(Technology & Technology_Netscape)
{ClientCaps &= ~ (Browser_SupportsNavigateCSS |
Browser_SupportsFancyPlayerButtons |
Browser_SupportsExpressionsInCSS |
Browser_SupportsCustomCSSTags |
Browser_SupportsPPTSlideAnimations |
Browser_SupportsFilterEffects |
Browser_EllipsifyTOCEntries |
Browser_SupportsUNICODE |
Browser_SupportsRuntimeStyle |
Browser_SupportsActiveX|
Browser_SupportsPowerpointHTML |
Browser_CanBandwidthManage |
Player_SupportsScriptTriggers |
Player_SupportsWebStreaming |
Player_CanScrub);SetPlayerObjectModel(Player_64ObjectModel);}if(CheckBrowserIE60())
ClientCaps &=~ Browser_EllipsifyTOCEntries;else
ClientCaps &=~Browser_CanControlPPTAnimationEngine;if(!_F())
ClientCaps &=~ Browser_SupportsFilterEffects;if((Technology & Technology_PC_Win9x)&& (!document.iMokie)&&window.location.search.indexOf("THUMBNAIL")==-1)
ClientCaps &=~ Browser_SupportsUNICODE;if(((Technology & Technology_InternetExplorer)&&  IEVersion()<5.0) ||
((Technology & Technology_Netscape)&& NetscapeVersion()<7.0) ||
((Technology & Technology_Netscape)&&(Technology & Technology_Mac)) ||
!((Technology & Technology_Netscape)||(Technology & Technology_InternetExplorer)))
{if(window.confirm(UnescapeHTML(g_szInvalidBrowser)))
window.navigate(g_szIEURL);else
window.navigate("about:blank");}}DetermineClientTechnology();