/*Compiled using CheerpJ (R) 2.1 by Leaning Technologies Ltd*/
cheerpjCL={cl:null};
var N4grexG;
function N4grex(){N4java6applet6Applet.call(this);this.a10080=0;this.b10081=0;this.reverse82=0;this.auto83=0;this.density84=0;this.cbReverse85=null;this.cbAuto86=null;this.cbDensity87=null;this.aLabel88=null;this.bLabel89=null;this.y90=null;this.t91=null;this.g92=null;this.y_px93=null;this.yt_px94=null;this.yg_px95=null;this.t_px96=null;this.g_px97=null;this.npoints98=0;this.lastpt99=0;this.nskip100=0;this.img101=null;}
N4grex.cl=cheerpjCL;
function N4grexX(a){a.f=N4grexX;if(cheerpjSafeInitGuard('N4grex')) return;a.pc=-74;;if((N4java6applet6AppletG|0)==0){cjG(a);}var q=a.q=N4grex.prototype=Object.create(N4java6applet6Applet.prototype);q.constructor=N4grex;q.ifs=["java/awt/MenuContainer","java/awt/event/ItemListener","java/awt/event/MouseListener","java/awt/event/MouseMotionListener","java/awt/image/ImageObserver","java/io/Serializable","java/util/EventListener","javax/accessibility/Accessible","javax/swing/event/MouseInputListener"];q.v440=_d4F1grex13getAppletInfoE1;q.v441=_d4p2grex16getParameterInfoE2;q.v448=_d4VYgrex9yPosieWJWE4;q.v444=_d4_Ygrex4initE5;q.v135=_d4pZgrex5paintE6;q.cWTZemStateChangedg0p03awt5event9ItemEeLGWEV=q.v449=_d4p2grex16itemStateChangedE7;q.mZ4qjrKgrijrmyq_nFdynLtur0mvtBsuhb7r0cc79c=q.v450=_d4p1grex12mousePressedE8;q.mZ4qjr0fbyyqmyq_nFdynLtur0mvtBsuhb7r0cc79c=q.v451=_d4p1grex12mouseDraggedE9;q.mZ4qjrWTGiOqmyq_nFdynLtur0mvtBsuhb7r0cc79c=q.v452=_d4F1grex12mouseClickedE10;q.nZ4qjrSsSqairmyq_nFdynLtur0mvtBsKhb7r0cc79c=q.v453=_d4V1grex13mouseReleasedE11;q.gZ4qjr4rWIc4Hb938nG1uorfrZunTzrDq0cc79c=q.v454=_d4pZgrex12mouseEeSOaEmSxTn;q.lZ4qjr4DHmrmyq_nFdynLtur0mvtBweheTGWEV=q.v455=_d4p1grex11mouseExitedE13;q.kZ4qjry6urmyq_nFdynLtur0mvtBs0gb7r0cc79c=q.v456=_d4_0grex10mouseMovedE14;q.v136=_d4VZgrex6updateE15;q.v457=_d4_Ygrex3fmtE16;q.v458=_d4VZgrex6boxCoxE17;q.v459=_d4VZgrex6tYieldE18;q.v460=_d4VZgrex6growthE19;q.v461=_d4_Zgrex7tVectorE20;q.v462=_d4_Zgrex7gVectorE21;N4grex.graphHeight0=150;N4grex.gGraphWidth1=150;N4grex.top2=15;N4grex.bottom3=21;N4grex.imgTop4=185;N4grex.imgHeight5=454;N4grex.imgWidth6=610;N4grex.yorg7=164;N4grex.ylen8=-149;N4grex.torg9=149;N4grex.tlen10=459;N4grex.gorg11=149;N4grex.glen12=-149;N4grex.xmin13=90;N4grex.xmax14=491;N4grex.ymin15=254;N4grex.ymax16=554;N4grex.brdr17=10;N4grex.range18=null;N4grex.aspace19=null;N4grex.bspace20=null;N4grex.chkbxs21=null;a.pc=-1886;_d4FYgrexXXE22(a);N4grexG=1;cheerpjSafeInitFinish('N4grex');}
var N4java6applet6AppletG;
var N4java3awt8CheckboxG;
var N4java3awt5ColorG;
var N4java3awt4FontG;
var N4java3awt5LabelG;
var N4java3awt5PanelG;
var N4java3awt9RectangleG;
var N4java4lang6DoubleG;
var N4java4lang7IntegerG;
var N4java3net3URLG;
var N4java4text13DecimalFormatG;
var N5javax7imageio7ImageIOG;
function _d4pYgrexC2E0(e,p){var c=null;var a={p:p,pc:0,f:_d4pYgrexC2E0,e:e,c:null};a.pc=-83;_h4_awiGRcOQW6AfzGaciShn(e,a);e.a10080= -50;e.b10081= -50;e.reverse82=0;e.auto83=1;e.density84=0;a.pc=-189;;if((N4java3awt5LabelG|0)==0){cjG(a);};a.c=c=new N4java3awt5Label();a.pc=-267;_h4VZ3awt5LabelC2E0(c,a);e.aLabel88=c;a.c=c=new N4java3awt5Label();a.pc=-344;_h4VZ3awt5LabelC2E0(c,a);e.bLabel89=c;e.npoints98=20;e.lastpt99=((e.npoints98|0)-1|0);e.img101=null;}function _d4F1grex13getAppletInfoE1(d,p){return cheerpjInternString("GREX - Growth-curve Explorer, by Oscar Garcia, UNBC");}function _d4p2grex16getParameterInfoE2(g,p){var d=null,c=null;d=["[[Ljava/lang/String;"];for(var i=1;i<=3;i=i+1|0)d[i|0]=null;;c=["[Ljava/lang/String;"];for(var i=1;i<=3;i=i+1|0)c[i|0]=null;;c[1]=cheerpjInternString("NPOINTS");c[2]=cheerpjInternString("int");c[3]=cheerpjInternString("number of points to plot (default 20)");d[1]=c;c=["[Ljava/lang/String;"];for(var i=1;i<=3;i=i+1|0)c[i|0]=null;;c[1]=cheerpjInternString("CUTOFF");c[2]=cheerpjInternString("int");c[3]=cheerpjInternString("% of y for asymptote cut-off (default 3)");d[2]=c;c=["[Ljava/lang/String;"];for(var i=1;i<=3;i=i+1|0)c[i|0]=null;;c[1]=cheerpjInternString("MAPPING");c[2]=cheerpjInternString("string");c[3]=cheerpjInternString("y-spacing \'uniform\'|\'logistic\' (default)");d[3]=c;return d;}function _d4p0grex9notFiniteE3(h,g,p){var c=0;var a={p:p,pc:0,f:_d4p0grex9notFiniteE3,h:+h};a.pc=-92;;if((N4java4lang6DoubleG|0)==0){cjG(a);};a.pc=-142;c=_n4p1Double10isInfiniteE6(h,0.,a)|0;if((c|0)===0){a.pc=-204;c=_n4VZDouble5isNaNE5(h,0.,a)|0;return ((c|0)!==0?1:0)|0;}return 1|0;}function _d4VYgrex9yPosieWJWE4(m,l,k,j,p){var c=-0.;c=(+(l|0))/(+(k-1|0));if((j|0)===0){return c;}return c*c*(3-c*2);}function _d4_Ygrex4initE5(m,p){var d=0,e=0,c=null,k=-0.,j=-0.,h=0,g=null;var a={p:p,pc:0,f:_d4_Ygrex4initE5,d:0,e:0,m:m,c:null,k:-0.};a.pc=0;;a.pc=3;a.c=c=m.v433(m,cheerpjInternString("NPOINTS"),a);a.pc=1;;if(c===null){}else{a.pc=2;;a.pc=13;;if((N4java4lang7IntegerG|0)==0){cjG(a);};a.pc=14;h=_m4p17Integer8parseIntE12(c,a);a.pc=4;;m.npoints98=h;a.pc=5;;m.lastpt99=((m.npoints98|0)-1|0);}a.pc=6;;c=new Float64Array(((m.npoints98|0)+1|0));c[0]=68;m.y90=c;c=new Float64Array(((m.npoints98|0)+1|0));c[0]=68;m.t91=c;c=new Float64Array(((m.npoints98|0)+1|0));c[0]=68;m.g92=c;c=new Int32Array(((m.npoints98|0)+1|0));c[0]=73;m.y_px93=c;c=new Int32Array(((m.npoints98|0)+1|0));c[0]=73;m.yt_px94=c;c=new Int32Array(((m.npoints98|0)+1|0));c[0]=73;m.yg_px95=c;c=new Int32Array(((m.npoints98|0)+1|0));c[0]=73;m.t_px96=c;c=new Int32Array(((m.npoints98|0)+1|0));c[0]=73;m.g_px97=c;a.pc=118;a.c=c=m.v433(m,cheerpjInternString("SPACING"),a);a.pc=7;;if(c!==null){a.pc=8;;a.pc=129;c.v27(c,cheerpjInternString("uniform"),a);}a.pc=9;;a.pc=142;a.c=c=m.v433(m,cheerpjInternString("CUTOFF"),a);a.pc=10;;if(c===null){a.d=d=3;}else{a.pc=11;;a.pc=151;;if((N4java4lang7IntegerG|0)==0){cjG(a);};a.pc=152;h=_m4p17Integer8parseIntE12(c,a);a.d=d=h;}a.pc=12;;if((m.npoints98|0|0)>0){a.pc=15;;a.k=k=(+(d|0));a.e=e=0;while(1){a.pc=16;;a.c=c=m.y_px93;a.pc=192;j=m.v448(m,e,(m.npoints98|0),1,a);a.pc=17;;a.pc=197;h=_m4VZ4Math5roundE21((j* -149),0.,a);a.pc=18;;hSlot|0;a.e=e=e+1|0;c[e]=(h+164|0);c=m.y90;c[e]=((+((m.y_px93[e]|0)-164|0))/ -149);if( +m.y90[e]*100<k){a.pc=19;;m.nskip100=e;}a.pc=20;;if((e|0)>=(m.npoints98|0|0)){break;}}}a.pc=21;;if((m.nskip100|0|0)<=0){a.pc=22;;m.nskip100=1;}a.pc=23;;a.pc=271;m.v199(m,m,a);a.pc=24;;a.pc=276;m.v202(m,m,a);a.pc=25;;a.pc=280;;if((N4java3awt5ColorG|0)==0){cjG(a);};a.pc=283;m.v64(m,N4java3awt5Color.white0,a);a.pc=26;;a.pc=287;;if((N4java3awt4FontG|0)==0){cjG(a);};a.c=c=new N4java3awt4Font();a.pc=296;_h4FZ3awt4FontC2E4(c,cheerpjInternString("monospaced"),0,12,a);a.pc=27;;a.pc=299;m.v68(m,c,a);a.pc=28;;a.pc=303;;if((N4java3net3URLG|0)==0){cjG(a);};a.c=c=new N4java3net3URL();a.pc=308;g=m.v432(m,a);a.pc=29;;a.pc=313;_h4pbSI8T7AjNTho(c,g,cheerpjInternString("grex.png"),a);a.pc=30;;a.pc=316;;if((N5javax7imageio7ImageIOG|0)==0){cjG(a);};a.pc=317;g=_c4VbzR8ocdGbbIZUirhOSikEebWG3Tn(c,a);a.pc=31;;m.img101=g;a.pc=32;;a.pc=328;;if((N4java3awt8CheckboxG|0)==0){cjG(a);};a.c=c=new N4java3awt8Checkbox();g=cheerpjInternString("Reverse");a.pc=338;_h4F03awt8CheckboxC2E3(c,g,((m.reverse82|0)&255),a);a.pc=33;;m.cbReverse85=c;a.pc=349;m.cbReverse85.v347(m.cbReverse85,m,a);a.pc=34;;a.pc=357;m.cbReverse85.v246(m.cbReverse85,0,a);a.pc=35;;a.c=c=new N4java3awt8Checkbox();g=cheerpjInternString("Auto");a.pc=371;_h4F03awt8CheckboxC2E3(c,g,((m.auto83|0)&255),a);a.pc=36;;m.cbAuto86=c;a.pc=382;m.cbAuto86.v347(m.cbAuto86,m,a);a.pc=37;;a.pc=390;m.cbAuto86.v246(m.cbAuto86,0,a);a.pc=38;;a.c=c=new N4java3awt8Checkbox();g=cheerpjInternString("Density");a.pc=404;_h4F03awt8CheckboxC2E3(c,g,((m.density84|0)&255),a);a.pc=39;;m.cbDensity87=c;a.pc=415;m.cbDensity87.v347(m.cbDensity87,m,a);a.pc=40;;a.pc=423;m.cbDensity87.v246(m.cbDensity87,0,a);a.pc=41;;a.pc=426;;if((N4java3awt5PanelG|0)==0){cjG(a);};a.c=c=new N4java3awt5Panel();a.pc=430;_h4VZ3awt5PanelC2E0(c,a);a.pc=42;;a.pc=440;c.v94(c,N4grex.chkbxs21,a);a.pc=43;;a.pc=449;c.v347(c,m.cbReverse85,a);a.pc=44;;a.pc=459;c.v347(c,m.cbAuto86,a);a.pc=45;;a.pc=469;c.v347(c,m.cbDensity87,a);a.pc=46;;a.pc=476;c.v199(c,m,a);a.pc=47;;a.pc=481;m.v375(m,null,a);a.pc=48;;a.pc=487;m.v347(m,c,a);a.pc=49;;g=m.aLabel88;a.pc=498;g.v94(g,N4grex.aspace19,a);a.pc=50;;g=m.bLabel89;a.pc=508;g.v94(g,N4grex.bspace20,a);a.pc=51;;a.c=c=m.aLabel88;a.pc=515;;if((N4java3awt5ColorG|0)==0){cjG(a);};a.pc=518;c.v61(c,N4java3awt5Color.red10,a);a.pc=52;;g=m.bLabel89;a.pc=528;g.v61(g,N4java3awt5Color.red10,a);a.pc=53;;a.pc=536;m.v347(m,m.aLabel88,a);a.pc=54;;a.pc=545;m.v347(m,m.bLabel89,a);a.pc=55;;}function ed4_Ygrex4initE5(a,b){a.f=ed4_Ygrex4initE5;var d=a.d|0,e=a.e|0,m=a.m,c=a.c,k=+a.k;var pc=a.pc;if(pc===3){}else if(pc===14){}else if(pc===142){a.d=d=3;}else if(pc===152){a.d=d=3;}a.pc=56;;a.c=c=b;if((pc>=11&&pc<19)&&self.hasOwnProperty("N4java4lang21NumberFormatException")&&(b instanceof N4java4lang21NumberFormatException)|0){a.f=_d4_Ygrex4initE5;a.pc=5;buildContinuations(a, true);currentThread.state='READY';throw 'CheerpJContinue';}a.pc=57;;if((pc>=150&&pc<155)&&self.hasOwnProperty("N4java4lang21NumberFormatException")&&(b instanceof N4java4lang21NumberFormatException)|0){a.f=_d4_Ygrex4initE5;a.pc=12;buildContinuations(a, true);currentThread.state='READY';throw 'CheerpJContinue';}a.pc=58;;if((pc>=302&&pc<322)&&self.hasOwnProperty("N4java2io11IOException")&&(b instanceof N4java2io11IOException)|0){a.f=_d4_Ygrex4initE5;a.pc=32;buildContinuations(a, true);currentThread.state='READY';throw 'CheerpJContinue';}else{a.pc=59;;a.pc=-1;return;}}function _d4pZgrex5paintE6(g,e,p){var a={p:p,pc:0,f:_d4pZgrex5paintE6,g:g,e:e};a.pc=-79;e.v45(e,cheerpjInternString("y"),146,10,a);a.pc=-131;e.v45(e,cheerpjInternString("dy/dt"),61,177,a);a.pc=-188;e.v45(e,cheerpjInternString("t"),378,177,a);a.pc=-242;e.v49(e,g.img101,0,185,g,a)|0;g.v136(g,e,p);}function _d4p2grex16itemStateChangedE7(j,h,p){var c=null,d=0;var a={p:p,pc:0,f:_d4p2grex16itemStateChangedE7,j:j,h:h,c:null};a.pc=-125;a.c=c=h.v22(h,a);a.pc=-152;d=h.v24(h,a)|0;if(c===j.cbReverse85){j.reverse82=((d|0)!==2?1:0);}else{if(c===j.cbAuto86){j.auto83=((d|0)!==2?1:0);}else{if(c===j.cbDensity87){j.density84=((d|0)!==2?1:0);}}}j.v140(j,p);}function _d4p1grex12mousePressedE8(l,k,p){var e=0,c=0,d=0,g=null;var a={p:p,pc:0,f:_d4p1grex12mousePressedE8,e:0,l:l,k:k,c:0,d:0};a.pc=-130;a.e=e=k.v35(k,a)|0;a.pc=-159;a.c=c=k.v36(k,a)|0;a.pc=-188;d=N4grex.range18.v64(N4grex.range18,e,c,a)|0;L0:do{if((d|0)!==0){a.pc=-263;a.d=d=_m4VZ4Math5roundE21((((+(e-90|0))*4/401+ -3)*100),0.,a)|0;hSlot|0;a.pc=-345;a.c=c=_m4VZ4Math5roundE21((((+(554-c|0))*3/300+ -2)*100),0.,a)|0;hSlot|0;if((d|0)===(l.a10080|0|0)){if((c|0)===(l.b10081|0|0))break L0;}if(((l.auto83|0)&255)!==0){L1:do{if((c|0)>0){e=1;}else{if((c|0)===0){if(!((d|0)>0||(l.b10081|0|0)<1)){e=1;break L1;}}e=0;}}while(0);l.reverse82=e;g=l.cbReverse85;a.pc=-653;g.v343(g,((l.reverse82|0)&255),a);}l.a10080=d;l.b10081=c;a.pc=-720;l.v140(l,a);}}while(0);}function _d4p1grex12mouseDraggedE9(g,e,p){g.v450(g,e,p);}function _d4F1grex12mouseClickedE10(g,e,p){}function _d4V1grex13mouseReleasedE11(g,e,p){}function _d4pZgrex12mouseEeSOaEmSxTn(g,e,p){}function _d4p1grex11mouseExitedE13(g,e,p){}function _d4_0grex10mouseMovedE14(g,e,p){}function _d4VZgrex6updateE15(u,t,p){var e=0,k=0,h=0,l=0,c=0,d=0,g=null,r=-0.,n=0,o=-0.,q=0,j=null,s=-0.,m=0;var a=new createStacklet_d4VZgrex6updateE15(p,u,t);e=u.npoints98|0;g=u.y90;k=u.a10080|0;h=u.b10081|0;a.pc=-209;r=+u.v462(u,e,g,k,h,u.g92,a);a.r=r= -149/r;e=u.npoints98|0;g=u.y90;k=u.a10080|0;h=u.b10081|0;a.pc=-312;u.v461(u,e,g,k,h,u.t91,a);a.pc=-348;e=_d4p0grex9notFiniteE3( +u.t91[1],0.,a)|0;if((e|0)===0){a.e=e=0;}else{m=u.nskip100|0;a.e=e=m;}a.pc=-453;k=_d4p0grex9notFiniteE3( +u.g92[1],0.,a)|0;if((k|0)===0){a.k=k=0;}else{m=u.nskip100|0;a.k=k=m;}a.h=h=u.lastpt99|0;g=u.t91;a.pc=-585;l=_d4p0grex9notFiniteE3( +g[((u.lastpt99|0)+1|0)],0.,a)|0;if((l|0)!==0){m=u.lastpt99|0;h=u.nskip100|0;a.h=h=m-h|0;}a.l=l=u.lastpt99|0;g=u.g92;a.pc=-737;c=_d4p0grex9notFiniteE3( +g[((u.lastpt99|0)+1|0)],0.,a)|0;if((c|0)!==0){m=u.lastpt99|0;l=u.nskip100|0;a.l=l=m-l|0;}L0:do{L1:do{if(((u.reverse82|0)&255)===0){if((h|0)===(u.lastpt99|0|0))break L1;}if((e|0)!==0||((u.reverse82|0)&255)===0){c=0;break L0;}}while(0);c=15;}while(0);L0:do{if(!((e|0)>0&&((u.reverse82|0)&255)===0)){if(((u.reverse82|0)&255)===0){d=0;break L0;}if((h|0)>=(u.lastpt99|0|0)){d=0;break L0;}}d=15;}while(0);a.n=n=h+1|0;o=+u.t91[n];a.q=q=e+1|0;a.o=o=(+((459-c|0)-d|0))/(o- +u.t91[q]);if(((u.reverse82|0)&255)===0){if((e|0)<=(h|0)){a.n=n=d+149|0;d=e;a.c=c=0;while(1){a.g=g=u.t_px96;a.d=d=d+1|0;s=+u.t91[d];a.pc=-1369;m=_m4VZ4Math5roundE21((o*(s- +u.t91[q])),0.,a)|0;hSlot|0;c=c+1|0;g[c]=(n+m|0);j=u.yt_px94;j[c]=(u.y_px93[d]|0);if((d|0)<=(h|0)){d=d;a.c=c=c;continue;}break;}}if((k|0)<=(l|0)){d=k;a.c=c=0;while(1){a.g=g=u.g_px97;a.d=d=d+1|0;a.pc=-1603;n=_m4VZ4Math5roundE21((r* +u.g92[d]),0.,a)|0;hSlot|0;c=c+1|0;g[c]=(n+149|0);j=u.yg_px95;j[c]=(u.y_px93[d]|0);if((d|0)<=(l|0)){d=d;a.c=c=c;continue;}break;}}}else{if((h|0)>=(e|0)){a.q=q=d+149|0;a.d=d=h;a.c=c=0;while(1){a.g=g=u.t_px96;s=+u.t91[n];a.pc=-1859;m=_m4VZ4Math5roundE21((o*(s- +u.t91[(d+1|0)])),0.,a)|0;hSlot|0;c=c+1|0;g[c]=(q+m|0);j=u.yt_px94;g=u.y_px93;j[c]=(g[((1-d|0)+(u.lastpt99|0)|0)]|0);m=d-1|0;if((m|0)>=(e|0)){a.d=d=m;a.c=c=c;continue;}break;}}if((l|0)>=(k|0)){a.d=d=l;a.c=c=0;while(1){a.g=g=u.g_px97;a.pc=-2132;m=_m4VZ4Math5roundE21((r* +u.g92[(d+1|0)]),0.,a)|0;hSlot|0;c=c+1|0;g[c]=(m+149|0);j=u.yg_px95;g=u.y_px93;j[c]=(g[((1-d|0)+(u.lastpt99|0)|0)]|0);m=d-1|0;if((m|0)>=(k|0)){a.d=d=m;a.c=c=c;continue;}break;}}}a.pc=-2347;t.v31(t,0,14,610,151,a);a.pc=-2382;t.v28(t,149,164,149,15,a);a.pc=-2419;t.v28(t,0,164,609,164,a);a.pc=-2455;;if((N4java3awt5ColorG|0)==0){cjG(a);};a.pc=-2505;t.v15(t,N4java3awt5Color.lightGray2,a);a.pc=-2555;t.v28(t,0,15,609,15,a);a.pc=-2589;t.v15(t,N4java3awt5Color.red10,a);g=u.t_px96;a.pc=-2645;t.v40(t,g,u.yt_px94,((1-e|0)+h|0),a);g=u.g_px97;a.pc=-2704;t.v40(t,g,u.yg_px95,((1-k|0)+l|0),a);if(((u.density84|0)&255)!==0){c=(l|0)<(h|0)?l|0:h|0;d=(k|0)>(e|0)?k|0:e|0;a.d=d=(c-d|0)+1|0;L0:do{if(((u.reverse82|0)&255)===0){if((k|0)>(e|0)){j=u.t_px96;h=k-e|0;g=u.t_px96;if((h|0)>-1){if((d|0)>=1){c=1;while(1){g[c]=j[(c+h|0)];c=c+1|0;if((c|0)<=(d|0))continue;break;}}}else{if((d|0)>0){c=d;while(1){g[c]=j[(c+h|0)];if((c|0)>1){c=c-1|0;continue;}break;}}}}if((e|0)>(k|0)){j=u.g_px97;e=e-k|0;g=u.g_px97;if((e|0)>-1){if((d|0)<1)break L0;c=1;while(1){g[c]=j[(c+e|0)];c=c+1|0;if((c|0)<=(d|0))continue;break;}}else{if((d|0)<=0)break L0;c=d;while(1){g[c]=j[(c+e|0)];if((c|0)>1){c=c-1|0;continue;}break;}}}}else{if((h|0)<(l|0)){j=u.g_px97;e=l-h|0;g=u.g_px97;if((e|0)>-1){if((d|0)>=1){c=1;while(1){g[c]=j[(c+e|0)];c=c+1|0;if((c|0)<=(d|0))continue;break;}}}else{if((d|0)>0){c=d;while(1){g[c]=j[(c+e|0)];if((c|0)>1){c=c-1|0;continue;}break;}}}}if((l|0)<(h|0)){j=u.t_px96;e=h-l|0;g=u.t_px96;if((e|0)>-1){if((d|0)<1)break L0;c=1;while(1){g[c]=j[(c+e|0)];c=c+1|0;if((c|0)<=(d|0))continue;break;}}else{if((d|0)<=0)break L0;c=d;while(1){g[c]=j[(c+e|0)];if((c|0)>1){c=c-1|0;continue;}break;}}}}if((d|0)>0){c=0;while(1){j=u.g_px97;c=c+1|0;j[c]=((j[c]|0)+15|0);if((c|0)<(d|0))continue;break;}}}while(0);a.pc=-3938;t.v15(t,N4java3awt5Color.blue24,a);j=u.t_px96;a.pc=-3995;t.v40(t,j,u.g_px97,d,a);}a.g=g=u.aLabel88;a.pc=-4048;j=u.v457(u,((+(u.a10080|0|0))*.01),0.,a);a.pc=-4100;g.v342(g,j,a);a.g=g=u.bLabel89;a.pc=-4142;j=u.v457(u,((+(u.b10081|0|0))*.01),0.,a);g.v342(g,j,p);}function _d4_Ygrex3fmtE16(k,j,h,p){var c=null;var a={p:p,pc:0,f:_d4_Ygrex3fmtE16,j:+j,c:null};a.pc=-94;;if((N4java4text13DecimalFormatG|0)==0){cjG(a);};a.c=c=new N4java4text13DecimalFormat();a.pc=-191;_i4pb31y0DecimalFormatC2E1(c,cheerpjInternString("##.##"),a);return c.v20(c,j,0.,p);}function _d4VZgrex6boxCoxE17(n,m,l,k,p){var c=-0.,d=-0.;var a={p:p,pc:0,f:_d4VZgrex6boxCoxE17,c:-0.};if((k|0)===0){a.pc=-115;c=+_m4FX4MatheK5WE10(m,0.,a);return -c;}a.c=c=(+(k|0))/100;a.pc=-184;d=+_m4pZ4Math3powE19(m,0.,c,0.,a);return (1-d)/c;}function _d4VZgrex6tYieldE18(o,n,m,l,k,p){var c=-0.;var a={p:p,pc:0,f:_d4VZgrex6tYieldE18,o:o,k:k|0};a.pc=-101;c=+o.v458(o,n,0.,l,a);return +o.v458(o,c,0.,k,p);}function _d4VZgrex6growthE19(s,r,q,o,n,p){var c=-0.,g=-0.,e=-0.,d=0;var a=new createStacklet_d4VZgrex6growthE19(p,s,r,o,n);a.pc=-123;a.c=c=+_m4pZ4Math3powE19(r,0.,(1-(+(o|0))/100),0.,a);a.pc=-186;g=+s.v458(s,r,0.,o,a);a.e=e=1-(+(n|0))/100;a.pc=-239;g=+_m4pZ4Math3powE19(g,0.,e,0.,a);a.c=c*=g;a.pc=-292;;if((N4java4lang6DoubleG|0)==0){cjG(a);};a.pc=-343;d=_n4VZDouble5isNaNE5(c,0.,a)|0;if((d|0)===0){return c;}d=Math.imul(n,o)|0;if((d|0)>9999){if((d|0)===10000){return +_m4pZ4Math3powE19(((+(-n|0))/100),0.,e,0.,p);}return c;}return 0;}function _d4_Zgrex7tVectorE20(s,r,q,o,n,m,p){var c=0,d=-0.;var a=new createStacklet_d4_Zgrex7tVectorE20(p,s,r,q,o,n,m);if((r|0)>0){c=0;while(1){a.c=c=c+1|0;a.pc=-156;d=+s.v459(s, +q[c],0.,o,n,a);m[c]=d;if((c|0)<(r|0)){c=c;continue;}break;}}}function _d4_Zgrex7gVectorE21(u,t,s,r,q,o,p){var c=0,d=-0.,e=-0.,g=0;var a=new createStacklet_d4_Zgrex7gVectorE21(p,u,t,s,r,q,o);if((t|0)<=0){return 0;}a.d=d=0;c=0;while(1){a.c=c=c+1|0;a.pc=-185;e=+u.v460(u, +s[c],0.,r,q,a);o[c]=e;a.pc=-231;g=_d4p0grex9notFiniteE3( +o[c],0.,a)|0;if((g|0)===0){if(!( +o[c]<=d)){c=c;e=+o[c];if((c|0)<(t|0)){a.d=d=e;continue;}d=e;return d;}}if((c|0)<(t|0)){c=c;continue;}break;}d=d;return d;}function _d4FYgrexXXE22(p){var c=null;var a={p:p,pc:0,f:_d4FYgrexXXE22,c:null};a.pc=-79;;if((N4java3awt9RectangleG|0)==0){cjG(a);};a.c=c=new N4java3awt9Rectangle();a.pc=-164;_h4V03awt9RectangleC2E3(c,80,244,421,320,a);N4grex.range18=c;a.c=c=new N4java3awt9Rectangle();a.pc=-268;_h4V03awt9RectangleC2E3(c,312,623,60,15,a);N4grex.aspace19=c;a.c=c=new N4java3awt9Rectangle();a.pc=-372;_h4V03awt9RectangleC2E3(c,0,423,60,15,a);N4grex.bspace20=c;a.c=c=new N4java3awt9Rectangle();a.pc=-474;_h4V03awt9RectangleC2E3(c,0,195,250,50,a);N4grex.chkbxs21=c;}function createStacklet_d4VZgrex6updateE15(p,u,t){this.p=p;this.pc=0;this.f=_d4VZgrex6updateE15;this.e=0;this.k=0;this.h=0;this.l=0;this.c=0;this.d=0;this.u=u;this.t=t;this.g=null;this.r=-0.;this.n=0;this.o=-0.;this.q=0;}function createStacklet_d4_Zgrex7gVectorE21(p,u,t,s,r,q,o){this.p=p;this.pc=0;this.f=_d4_Zgrex7gVectorE21;this.c=0;this.d=-0.;this.u=u;this.t=t|0;this.s=s;this.r=r|0;this.q=q|0;this.o=o;}function createStacklet_d4_Zgrex7tVectorE20(p,s,r,q,o,n,m){this.p=p;this.pc=0;this.f=_d4_Zgrex7tVectorE20;this.c=0;this.s=s;this.r=r|0;this.q=q;this.o=o|0;this.n=n|0;this.m=m;}function createStacklet_d4VZgrex6growthE19(p,s,r,o,n){this.p=p;this.pc=0;this.f=_d4VZgrex6growthE19;this.s=s;this.r=+r;this.o=o|0;this.n=n|0;this.c=-0.;this.e=-0.;}