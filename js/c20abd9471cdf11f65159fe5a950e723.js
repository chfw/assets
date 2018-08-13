(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('香格里拉市', {"type":"FeatureCollection","features":[{"type":"Feature","id":"533401","properties":{"name":"香格里拉市","cp":[99.700904,27.829578],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@BBDF@B@BBB@@@BBB@@@BBBBB@@@BBBDJ@@BD@@@@@BABBB@@@@BBB@@@DDB@BBB@BAB@B@@@B@BB@B@B@F@D@D@BAD@F@D@DADAD@B@DABAFABCDC@EBABEJGPEFAD@BBBDBFDHBDDD@DLAT@@@H@L@@ABADBF@BFDRJDHBZBFBDHDLJHL@D@BAPIL@BI@I@G@A@CDADOZAP@FBBHBDBDDB@DBD@DBB@FBB@BBBB@BA@@@@@A@@B@@A@@@ABA@@@@@AB@@A@@BA@@B@@@B@@AB@@AF@D@B@@@@@B@@A@@@A@@B@@@@@B@@@B@@AD@B@B@BAB@@ADAB@BABGHOHCBAD@@@FBP@D@B@D@BBBD@BBB@BB@B@BABCHIH@BBBNLDD@D@DAJAD@DBBDDB@DDF@BAD@DADBDBBDBBDBFBF@F@FAD@DBBADCBCDAD@DBDBFADBB@FABAD@BD@D@BAF@FBBDFBDAB@DADBBADAD@DDDNLPNXJFFBFAR@FBDPFF@FADAHEDAF@F@JBJHBB@BDBDBDBDD@BCFAB@D@BBD@DBHBB@D@D@FAF@B@DBDBDBD@B@D@D@DADABCFCBEBABCBAB@DBBFFDBBDD@DFDDDBDBBDBDBFBFBD@FBDDDB@DBBBBFFA@@DCDAB@HBJDJDJDFDDBDB@@D@FBDBBDDD@DCDABDBFBFBD@DBDDBDADADCDADCDAD@FBDDD@DABAFCDAB@D@DDD@D@DBDBDBDDDDBDDDBFFBBBD@BBD@HAH@DBD@BBDFADAD@D@D@D@DBDBDBB@D@F@FADAD@FADBF@D@F@D@DADCDAB@FBFBBBDBD@DD@DBB@BDFBDFNFHLDJBB@B@@DBDBDBBDBBCBEAC@E@ABE@C@C@C@EBC@CBCBE@EBAACAEAE@C@C@ABCBC@EBE@G@C@C@E@EAE@C@EAC@C@C@C@CBABEBCBEDCDEDCBADABCBEAE@CACAC@C@@AA@A@A@CHCLCFAFCDCHIBGBADAD@F@B@X@DABBBAF@DAJBDBD@BA@A@CBABAB@@@B@FAB@DCHGFEFEFCDCBCFGFABAB@@@DCHGBCBABAB@FABA@A@C@C@AECGI@ABCD@JA@@BAAAGEGK@C@@D@J@F@B@@@B@@@B@@B@@B@@@B@@BB@@@@@B@@B@@BB@@B@@@@@BB@@@@@@B@@BB@@@@@@@DB@@B@@@B@@@@@@@D@@@B@@@@@@@@@BAF@F@DABABA@E@C@AAE@@@AB@BADC@A@C@CAC@@@@BABAFCDABA@@B@D@B@B@B@B@@@DABAB@BAJ@B@BAB@@@B@B@B@B@@@BA@ABABAB@B@HBF@B@BA@@@C@ABA@@BAB@NGFABA@@@ABA@@DA@ABCBAB@BAJ@B@BAB@BCDEDA@CAC@A@@@C@@@A@A@ABABCB@B@D@B@@@DD@@BA@ABC@A@CBA@C@A@C@A@E@A@C@A@CBABABABCD@B@D@BBD@B@B@D@BCDABABEBCBCBE@C@EBCAC@A@C@AAACEAACABA@ADABCDA@C@CBAAC@@@C@ABCBA@CBA@A@CAABABEDCBABCDADCBADAFAF@F@FADCDADAD@DABCDADEDAB@D@FDD@DAB@@ABCBCDADBH@B@D@DBD@B@B@B@@A@CBEBEBEBCDCDCDCDABABA@AACCCACCCACCCCCACAAAC@A@@DAD@BA@C@AAAAECEAC@AACACACAECEAC@ABC@A@CBABAD@DBDBB@D@DADAFAF@FAD@FAF@F@FAB@DABABADCB@DAB@F@B@DAD@DCDADAB@DBDBBAD@DABADAB@D@B@B@BABABC@A@C@C@CBAB@DAF@F@D@BADABCDABABABABEDADBB@DBD@BAD@DAB@BADA@A@@AACAAC@CAE@E@CAE@EAE@A@C@CAAAAC@EAEBC@EAEACACC@C@CBEDCDCBCBADCB@DAF@D@D@BAD@BCBCBEDA@ADADCFADCDADCBA@A@A@ACAAACACAAACCAAAAACCAACC@GAA@AA@AAABCBCDCBCBA@A@CAAEECCEECCCAAACAGAGAI@G@G@CAC@CAGAGBG@EAE@GAEACAAAAC@CBA@C@@CAAACAAAAC@CAA@A@AAAA@CACDC@C@E@@@ADABADCBC@CBCBADCBCBC@AAACCACEA@AACEAAA@C@C@EBCBC@C@CBC@@@AAAA@AAABC@ABEBA@A@@ACCCCCACACA@AC@@AAB@A@@A@@@A@@@@@A@@@@A@@@@A@ABC@E@A@@@@@@@AA@@@@AA@@@@@A@@@@A@@BA@AB@@A@@@@@A@@A@@@BA@@@@BAB@@@BA@@@A@@@@@A@@B@@AB@@@B@@A@@@@@@B@@@@@@@AA@@@@B@@@@@@A@@@@@@B@B@@@@A@@BA@@@@B@@@B@@@@@B@@@B@B@@AB@@@BA@@@@DCBA@CB@@A@A@@@A@@@A@@@@@@@A@@@@@A@@B@@@@AA@@@BA@@@@@@@@BA@@@@@CBAB@@C@ABA@@B@@A@@@A@@@AB@@@@@@@B@@@BA@@@@@A@@B@@ABA@A@ABA@A@@BA@@@A@@@A@@@C@@@@@@@A@AB@@@@A@@BA@@@A@@BA@@@A@@@A@@@AB@@@@ABA@A@@B@@ABA@@@@@A@@BABA@@@@@@@AA@@@@AB@@@AA@@@AB@A@@A@@B@@@@@@@@A@@@@B@@@@@BA@@@A@A@@BA@@AA@@B@@@@@@@BA@@@@@@AA@@@ABA@@@A@@@@@@BA@@B@@A@@A@@A@@@@@A@A@@@@BAB@@@@@@@@ABABA@A@A@@BAB@@ABA@@@AAA@@B@@A@@BA@@@A@A@AB@BCB@BA@AB@@A@@@A@@@@B@@@@AB@@A@@BABA@@@@@A@@@@BAD@@A@@@BB@@@@@B@@A@@B@@@@@@@BA@@B@BAB@@@DAB@@@B@@@@@B@@@BA@@@@B@B@B@@@BAB@@AB@@@B@@@B@@@@AB@@@@@B@B@@@B@DA@@B@@A@@BA@@B@B@@@B@@@BABAB@@ABCB@@AB@@@BA@ABABA@AB@BC@@BC@A@@BAB@@ABABA@A@A@@BAB@@@BC@@@@B@@ABABAB@@@B@B@@@B@@@B@BA@@BABA@A@@@C@@DC@@BA@@BC@@B@@AB@@@@ABABA@@BA@@BADABABA@A@@BA@@DADCBCB@B@@ABA@@B@@@B@@@@@BA@ABA@@BABCBADAD@@AB@B@B@BA@@BABCBA@A@A@AB@B@@A@A@C@ABABABCBABAAA@AA@CACCEEEEGICEAEECECEEAG@E@GDAFBDBJ@F@FEDEDAF@DA@ADE@@DAFAFEFEFAH@DBH@DAD@FEHEFCD@F@L@H@FAHCFCDBFBFDFBF@FAFCHCD@FBFDFBDBFADCFEFAD@DC@CCICECAACBAFCAE@CBCDEBA@CACECEACCCECAGEECACCE@EAEBEBCFEDCHCFAHABCBC@GAEAGAE@EACBEDEBCBGBG@E@ECECECCAEACA@A@AC@GAABA@C@CAC@EAEAC@E@A@ACAAAEACAAAA@AA@A@CACAA@AACAE@C@ABABADAFAFAFABABC@G@EBC@E@ADC@AACAACCCCEAAAACAC@E@ABC@ACAAAA@G@C@A@@C@@AAAC@A@A@A@CAE@ACAA@C@C@C@CAAAACAC@A@EBCBCBCBCBCBA@EBCBC@AAACAAACACAAAC@C@A@C@A@A@GAA@C@AA@A@A@C@IBA@CBC@A@A@C@C@C@ABC@CBA@CBC@A@ACAAECCCCAAE@AAECCACAA@CACAAAAAAA@EAC@CAA@AAACECCCCAAAAAAA@EACCCAACCCEECCACACAC@CAEAC@CACAA@A@CAAACACA@CACAAA@A@A@C@EBCBA@@FE@ABABCDCDCDCBCBADEBCBCBEBCBEDCBADEB@@ABEBCBA@A@A@A@E@A@EBC@CBCDABABCBA@CCEAC@AA@ACACAA@@AABA@ABA@@FE@ABA@@FEDCBCBABABCBCBABADCDCBABEBEDCBE@C@C@A@G@A@A@ABA@ABA@CAEAC@@@C@A@AB@BAB@DABA@@@@@ABA@C@A@C@G@CA@ACAAAA@C@A@AAAA@CACAEAA@EAA@A@ABA@CAC@CA@@AA@@C@A@C@A@A@AAAAECAAA@ACACACAE@AAAAAECAAEEAA@@@A@A@AAA@@EAA@@AACCEAAAGACACAACAGAAAA@AAA@AACACCCAACCACCAA@C@C@@AAAAAAA@@CAAACAACCCCACACAA@AA@AEACCCECAACCCCACACACAA@CAC@ACCACAACAAAAA@ACA@AAA@EAAAACAECE@C@ICKAICC@A@ACA@ICCACACCCECIAKAGAIAK@KAI@C@A@IAEBIDEFEBIBABC@A@E@K@IBABCBABABAD@DADI@GBIDIBE@ECCEEEECEAC@A@EBCBCBADADADCBE@C@EAGAA@CCGACACACEGAAAAACAC@CAE@AAACE@C@A@A@C@EAE@AACAC@C@A@ABC@A@C@CBC@EBG@GAG@ACACBC@C@CACACEGK@EACCCA@AC@A@CBA@A@C@AAAAAACGCC@GAEAAAAAAAAACAAACACCCCA@AAC@A@CAC@CAA@@AA@AAAC@CAAA@E@C@EAEAA@CAAA@AAAAAACAAA@CAA@CBE@CFABABAD@DBB@DDDBDBD@D@D@DAD@DABCDCBCFEDCDAB@BBFBDBDDDDFBD@D@D@F@DCDAD@B@BBB@DBB@D@BAB@B@B@BADABAFADA@ADB@BDBBJDD@D@B@DB@B@B@B@BADADCDCFEFCDCDEBA@@B@@@B@D@B@F@H@BADABABABGFIJABCBCBCD@BCB@@@DDF@B@BEFCFADADAFCDADABCBC@CBCDEDEFCDEDCF@F@D@HBFAF@FCFGFIHMHEDE@C@CAE@E@EDGHCLENGRAB@DAF@F@F@BABC@EDCBCBCFEHEFABABAFCHABABCBGBMDGDGFCFADAB@D@FAD@D@F@DAFADGDGDQDA@ABAB@DAH@DEHEBGBGBI@G@GDEDCDCBAHAFEHCHEFCDIDEDADAD@B@D@BADC@C@E@GBIBCFAD@HAH@BCDCDEBEBGDIHEBAB@B@BBB@@@@ADADEBABGAA@CBEBA@AD@B@B@BBH@HBD@BABCDABA@MDIFEFABAH@F@HDHBH@BAD@BBDDDNFFDFD@BBDABADCDCFGHCDCF@DADADCFEDIDGDEBABIFGDADCF@B@DBD@@@D@D@DAFCDADEFEDIHGFCD@BBDDDDHBB@BAD@DBBDBDDBDBFADADCDA@CBEBA@C@AAACEAC@ABABCF@H@DCBCDEDEDEBEBADAF@HBH@DAB@BCBABCDAF@B@F@FBHBBBDDDBFBF@FBF@F@FADABA@A@AACBC@CDEFCDABAB@BBD@DBBBD@D@F@FAF@DAFABEDABA@C@A@A@@A@CACAAC@ABCBCFCFADADCDCFBDBBBB@BCFADEDAFAF@FBFBF@D@DCBAFAD@DBDBBDBBDBB@BABABCBCDABEBC@ABE@ABCACAEAC@E@CBABADADADCDCDABABBD@D@FADAFEFCFEBAB@BAHAFAF@BCFAFBF@HABABAB@@CBEFEFAFADBB@BADCHCFCHABC@GDCBADAB@BBFBF@J@F@FADEFEJCDCFCFAFBF@DBD@FBHBFAB@FDFBDFDFDFDDBDFDFFDDFBDBBB@FBBBDB@D@DABEHADABAD@D@DBD@DCD@D@D@D@DADADAD@D@B@DAFCFABAB@B@D@FAHAFAFAD@JBDBH@D@BABADGHA@EFADCH@J@BAB@BBFADABCBABABC@IBCBABCF@BBFAL@DARAL@BBJ@DADAFAHABABABABAB@B@BFXDFBDAD@DFH@F@HAD@DADADCHAHAFAD@HAD@DAD@D@@@B@BBDBD@BBBBB@BAD@BADCD@@@@@BABAB@DAB@D@D@D@D@H@B@D@D@BBBBDBDBB@DBBBBBBDD@@@@@@BD@DBD@@@@@BADABCDCFCDCDCBCBABA@A@A@ABA@AB@B@B@BBD@B@DAB@BABBBAB@BBB@@BBBBB@DBBBDDBDBDD@@B@B@D@B@@AB@BB@BDB@@B@D@BAB@@@B@BA@@BABA@CFA@@@@BABB@@D@@CFAB@BA@AB@B@B@B@@AFA@CB@BAB@D@@BB@B@@@@AB@@@@BD@@@BA@@D@DAF@B@@@B@DA@@B@@@@@BBF@B@B@D@DBFBD@BDLBB@@BD@B@@BD@DBB@D@D@D"],"encodeOffsets":[[101781,28917]]}}],"UTF8Encoding":true});}));