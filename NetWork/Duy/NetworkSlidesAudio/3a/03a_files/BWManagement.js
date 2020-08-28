var _ZA=new Array();var _TA=-1;var _PA=0.0,_QA=0.0;var g_bIsBMCSS=0;var g_pHiddenFrame=null;function _f()
{var i,_lA=_WA.length,j,_vA;var _qA=_XA.length;for(i=0;i<_lA;i++)
{var _IB=_WA[i];_IB.CalcTotalSize();}_SA=_H;var _FB=new Date();_RA=_FB.getTime();_XA[0].Download();}function _H(nar)
{var _FB=new Date();_PA=_XA[0].nTotalSize / ((_FB.getTime()-_RA) / 1000.0);_XA[0].nDownloadStatus=_A;_n();_y();}function _y()
{if(_ZA.length&&g_bUseBandwidthManagement)
{_TA=-1;_l();}else
{if(g_nPlayStatus<CONST_PS_READY)
g_nPlayStatus=CONST_PS_READY;_t();}}function _l()
{if(_TA>=0)
{_XA[_ZA[_TA]].nDownloadStatus=_A;if(_TA>0&&_RA!=-1)
{if(m_bNeedRebuildItemArray||_XA[_ZA[_TA]].nSize>10000)
{var _FB=new Date();_PA+=_XA[_ZA[_TA]].nSize / ((_FB.getTime()-_RA) / 1000.0);_PA=_PA / 2.0;var _JA=Math.abs(_PA-_QA) / _PA;if(m_bNeedRebuildItemArray||_JA>g_fRescheduleThreshold)
{_n();_y();m_bNeedRebuildItemArray=0;return;}}}if(g_nPlayStatus==CONST_PS_INIT&&_TA>=0&&_XA[_ZA[_TA]].fLatestSendTime>=g_fStartingTime)
{g_nPlayStatus=CONST_PS_READY;_t();}}while(g_bUseBandwidthManagement&&_TA+1<_ZA.length)
{_TA++;var _KB=_XA[_ZA[_TA]];if(_KB.nDownloadStatus==_B)
{_SA=_l;_XA[_ZA[_TA]].Download(_l);return;}}}function _g(x,y)
{if(_XA[x].fEarliestTimeNeeded<_XA[y].fEarliestTimeNeeded)
return -1;else if(_XA[x].fEarliestTimeNeeded>_XA[y].fEarliestTimeNeeded)
return 1;return 0;}function _n()
{var i,_qA=_XA.length,_dA=0;var _LA=_WA[_WA.length-1].fTime;_ZA=new Array();_TA=-1;_QA=_PA;for(i=_qA-1;i>=0;i--)
{var _KB=_XA[i];if(_KB.nDownloadStatus==_B &&_KB.IsNeededAfterEventID(g_nSeekToEvent))
{var _KA=_KB.nSize / _PA;_KA=_KA*g_fDownloadFudgeMultiplier+g_fDownloadFudgeAddend;if(_KB.fEarliestTimeNeeded>_LA)
{_KB.fLatestSendTime=_LA-_KA;}else
{_KB.fLatestSendTime=_KB.fEarliestTimeNeeded-_KA;}_LA=_KB.fLatestSendTime;_ZA[_dA]=_KB.nID;_dA++;}}_ZA.sort(_g);}function _i()
{if(!_VA)
_VA=new Array();_VA[_VA.length]=this.nID;if(this.nDownloadStatus==_B)
{if(g_pHiddenFrame)
{try
{var pDoc=document.frames("HideFrame").document;pDoc.open();pDoc.close();if(!g_bIsBMCSS)
g_pHiddenFrame.removeNode(1);}catch(e)
{g_pHiddenFrame.id="LeakedHiddenFrame";}g_pHiddenFrame=null;}g_pHiddenFrame=document.createElement("<iframe>");g_pHiddenFrame.style.display="none";g_pHiddenFrame.id="HideFrame";var _FB=new Date();_RA=_FB.getTime();var szExt,_ZB;if(this.szPrerollFile)
{_ZB=this.szPrerollFile;}else
{_ZB=PrepareURL(this.szSourceFile);}g_bIsBMCSS=0;szExt=_ZB.substr(_ZB.lastIndexOf(".")+1).toLowerCase();if(szExt=="css")
{var _gB=CONST_PREROLL_CSS;_gB=_gB.replace(new RegExp("%1!s!","i"),_ZB);g_pHiddenFrame=HiddenFrame;g_pHiddenFrame.WMNextSrc=_gB;g_bIsBMCSS=1;}else if(szExt=="js")
{var _gB=CONST_PREROLL_SCRIPT;_gB=_gB.replace(new RegExp("%1!s!","i"),_ZB);g_pHiddenFrame.WMNextSrc=_gB;}else if(szExt=="emz"||szExt=="wmz"||szExt=="wmf")
{var _gB=CONST_PREROLL_EMZ;_gB=_gB.replace(new RegExp("%1!s!","i"),_ZB);g_pHiddenFrame.WMNextSrc=_gB;}else if(szExt=="mso")
{var _gB=CONST_PREROLL_MSO;_gB=_gB.replace(new RegExp("%1!s!","i"),_ZB);g_pHiddenFrame.WMNextSrc=_gB;}else if (szExt=="html"||szExt=="htm"||szExt=="jpg"||szExt=="gif"||szExt=="bmp" ||
szExt=="png"||szExt=="xml")
{g_pHiddenFrame.WMNextSrc=_ZB;}else if(szExt=="wav"||szExt=="wma"||szExt=="wmv")
{}else
{}window.setTimeout("NavigateHIDDENFrame();",100);if(!g_bHasReadyStateChangeEvent)
{window.setTimeout("_k()",200,"JavaScript");}return 1;}else
{_RA=-1;_k();return 0;}}function NavigateHIDDENFrame()
{g_pHiddenFrame.src=g_pHiddenFrame.WMNextSrc;if(!g_bIsBMCSS)
document.body.appendChild(g_pHiddenFrame);}function _k(argTwo)
{if(!g_bUseBandwidthManagement)
return;try
{var pFrame;if(g_bIsBMCSS)
pFrame=g_pHiddenFrame.frameElement;else
pFrame=g_pHiddenFrame;if(g_nPlayStatus!=CONST_PS_PREINIT&&pFrame.readyState=="complete"&&pFrame.src!="")
{if(!argTwo)
{window.setTimeout("_k(1)",100,"JavaScript");return;}var _yA=_VA.length;if(_yA>0)
{var _rA=_VA[_yA-1];var _KB=_XA[_rA];_KB.nDownloadStatus=_A;var j,_eA=_KB.rgDependancies.length;for(j=0;j<_eA;j++)
{if(_XA[_KB.rgDependancies[j]].nDownloadStatus==_B)
{_XA[_KB.rgDependancies[j]].Download();return;}}if(_yA>1)
{var _uA=_rA+1;pParentItem=_XA[_VA[_yA-2]];var j,_eA=pParentItem.rgDependancies.length;for(j=_uA;j<_eA;j++)
{var pNextSibling=_XA[pParentItem.rgDependancies[_uA]];if(pNextSibling==_B)
{pNextSibling.Download();return;}}_VA.length=_VA.length-1;_k();}else
{_SA();}}}else
{if(!g_bHasReadyStateChangeEvent)
{window.setTimeout("_k()",200,"JavaScript");}}}catch(e)
{}}