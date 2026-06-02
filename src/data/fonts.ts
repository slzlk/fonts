export interface FontItem {
  order: number;
  title: string;
  preview: string;
  figmaName: string;
}

const fontRows = String.raw`1	庞门正道粗书体	庞门正道 粗书体	PangMenZhengDao-Cu
2	庞门正道真贵楷体	庞门正道 真贵楷体	PangZhenGui-PMzD
3	站酷庆科黄油体	站酷庆科黄油体	zcoolqingkehuangyouti
4	素材集市酷方体	素材集市 酷方体	sucaijishikufangti
5	猫啃网故障黑	猫啃网 故障黑	Maoken Glitch Sans
6	三极力量体简	三极力量体简	??????-?
7	鼎猎刺猬体	鼎猎刺猬体	dinglieciweifont
8	懒设计字由公益体	懒设计字由 公益体	Fotor HelloFont GongYiTi
9	优设字由棒棒体	优设字由 棒棒体	YS HelloFont BangBangTi
10	演示斜黑体	演示斜黑体	Source-KeynoteartHans
11	优设标题黑	优设标题黑	YouSheBiaoTiHei
12	字由芳华体	字由芳华体	HelloFont FangHuaTi
13	站酷小薇LOGO体	站酷小薇 LOGO体	xiaowei
14	字体传奇雪家黑	字体传奇雪家黑	ziticqxuejiahei
15	标小智龙珠体	标小智龙珠体	Logosc LongZhuTi
16	刻石录明体	刻石录明体	I.Ming
17	昭源黑體	昭源黑體	Chiron Hei HK Text
18	jf open 粉圓	jf open 粉圓	jf-openhuninn-2.0
19	光良酒干杯体	光良酒干杯体	光良酒-干杯体
20	字体传奇特战体	字体传奇特战体	ziticqtezhanti
21	美呗嘿嘿体	美呗嘿嘿体	?????(???)
22	文泉驿微米黑 Lite	文泉驿微米黑	WenQuanYi Micro Hei Light
23	文泉驿正黑体	文泉驿正黑体	WenQuanYi Zen Hei
24	K8x12像素体	K8x12像素体	k8x12
25	包图小白体	包图小白体	baotuxiaobaiti
26	斗鱼追光体	斗鱼追光体	DOUYU
27	HarmonyOS Sans SC	鸿蒙	HarmonyOS Sans SC
28	HarmonyOS Sans	HarmonyOS	HarmonyOS Sans
29	HarmonyOS Sans TC	HarmonyOS	HarmonyOS Sans TC
30	玉葱楷書激無料版	玉葱楷書 激無料版	————————
31	卓健橄榄简体	卓健橄榄简体	ZhuoJianGanLanJianTi
32	字体传奇南安体	字体传奇南安体	ziticqnananti
33	猫啃什锦黑 _ Regular	猫啃什锦黑	MaokenAssortedSans
34	白无常可可体	白无常可可体	BWCKKT
35	锐字真言体	锐字真言体	ZhenyanGB
36	字体圈欣意冠黑体	字体圈欣意冠黑体	Fontquan-XinYiGuanHeiTi
37	字由文艺黑	字由文艺黑	HelloFont WenYiHei
38	庞门正道细线体	庞门正道 细线体	PangMenZhengDao-XiXian
39	庞门正道轻松体	庞门正道 轻松体	Pangmenzhengdaoqingsongti
40	庞门正道标题体	庞门正道 标题体	PangMenZhengDao
41	方正黑体-GBK	方正黑体	FZHei-B01
42	方正黑体简体	方正黑体	FZHei-B01S
43	方正黑体繁体	方正黑体	FZHei-B01T
44	獅尾詠腿黑體 _ Black	獅尾詠腿黑體	Swei Fist Leg CJK JP
45	獅尾詠腿黑體 _ 细	獅尾詠腿黑體	Swei Fist Leg CJK JP
46	獅尾詠腿黑體 _ 浅色	獅尾詠腿黑體	Swei Fist Leg CJK JP
47	獅尾詠腿黑體 _Regular	獅尾詠腿黑體	Swei Fist Leg CJK JP
48	獅尾詠腿黑 DemiLight	獅尾詠腿黑體	Swei Fist Leg CJK JP
49	獅尾詠腿黑體 Medium	獅尾詠腿黑體	Swei Fist Leg CJK JP
50	獅尾詠腿黑體 _ 加粗	獅尾詠腿黑體	Swei Fist Leg CJK JP
51	标小智无界黑	标小智无界黑	LogoSc Unbounded Sans
52	马克笔手写	马克笔手写	Nishiki-teki
53	得意黑	得意黑	Smiley Sans
54	钉钉进步体	钉钉进步体	钉钉进步体
55	金山云技术体	金山云技术体	Kingsoft_Cloud_Font
56	卢帅正锐黑体	卢帅正锐黑体	卢帅正锐黑体
57	猫啃网红抗重族_Regular	猫啃什锦黑	Maoken Heavy Labourer
58	猫啃网红抗重族黑_Gothic	猫啃什锦黑	Maoken Heavy Labourer
59	猫啃什锦黑 _ Lite	猫啃什锦黑	MaokenAssortedSans-Lite
60	字魂扁桃体	字魂扁桃体	zihunbiantaoti
61	胖胖猪肉体	胖胖猪肉体	07NikumaruFont
62	快看世界体	上首奕星体	????? 上首奕星体
63	Aa厚底黑	Aa厚底黑	AaHouDiHei
64	字制区喜脉体	字制区喜脉体	字制区喜脉体
65	德拉黑体	德拉黑体	德拉黑体
66	荆南缘默体	荆南缘默体	荆南缘默体
67	创客贴金刚体	创客贴金刚体	创客贴金刚体
68	站酷快乐体	站酷快乐体	HappyZcool-2016
69	阿里巴巴普惠体	阿里巴巴 普惠体2.0	Alibaba PuHuiTi 2.0
70	阿里巴巴普惠	阿里巴巴 普惠体2.0	Alibaba PuHuiTi 2.0
71	阿里巴巴普惠 55Regular	阿里巴巴 普惠体	Alibaba PuHuiTi
72	阿里巴巴普惠体 45Light	阿里巴巴 普惠体	Alibaba PuHuiTi
73	阿里妈妈刀隶体	阿里妈妈 刀隶体	Alimama DaoLiTi
74	阿里妈妈灵动体	阿里妈妈 灵动体	Alimama Agile VF
75	阿里妈妈数黑体	阿里 妈妈 数黑体	Alimama ShuHeiTi
76	站酷酷黑体	站酷酷黑体	ZCOOL_KuHei
77	装甲明朝体	装甲明朝体	SoukouMincho
78	源界明朝	源界明朝	Genkaimincho
79	杨任东竹石体	杨任东竹石体	YRDZST
80	猫啃网扛重族	猫啃网扛重族	Maoken Heavy Labourer
81	站酷文艺体	站酷文艺体	zcoolwenyiti
82	站酷高端黑体	站酷高端 黑体	zcool-gdh
83	OPPO SANS_加粗	OPPO SANS	OPlusSans 3.0
84	OPPO SANS_Medium	OPPO SANS	OPlusSans 3.0
85	OPPO SANS_Regular	OPPO SANS	OPlusSans 3.0
86	OPPOSANS_ExtraLight	OPPO SANS	OPlusSans 3.0
87	OPPO SANS_浅色	OPPO SANS	OPlusSans 3.0
88	上首奕星体	上首奕星体	064-ssYixingTi
89	平方上上谦体	平方上上谦体	平方上上谦体（6个问好）
90	沐瑶软笔手写体	沐瑶软笔 手写体	MuyaoPleased
91	字库江湖古风体	字库江湖古风	字库江湖古风体
92	平方酒脱体	平方酒脱体	平方酒脱体（6个问好）
93	字库星球飞扬体	字库星球飞扬	字库星球飞扬体
94	沐瑶随心手写体	沐瑶随心 手写体	Muyao-Softbrush
95	千图笔锋手写体	千图笔锋 手写体	qiantubifengshouxieti
96	阿里妈妈东方大楷	阿里妈妈 东方大楷	Alimama DongFangDaKai
97	刻石錄颜體	刻石錄颜體	I.Ngaan
98	演示悠然小楷	演示悠然小楷	slideyouran
99	汉仪贤二体	汉仪贤二体	XianErTi
100	演示春风楷	演示春风楷	Slidechunfeng
101	演示秋鸿楷	演示秋鸿楷	Slideqiuhong
102	龚帆免费体	龚帆免费体	gongfanmianfeiti2.0
103	演示佛系体	演示佛系体	Slidefu
104	鸿雷板书简体	鸿雷板书简体	honglei sim
105	Aa剑豪体	Aa剑豪体	AaJianHaoTi
106	演示夏行楷	演示夏行楷	Slidexiaxing
107	江城圆体	江城圆体	JiangChengYuanTi
108	阿里健康体	阿里健康体	Alibaba Health Font 2.0 PY
109	阿里健康体	阿里健康体	Alibaba Health Font 2.0 CN
110	俊羽圆体	俊羽圆体	YuPearl
111	猫啃忘形圆	猫啃忘形圆	猫啃忘形圆
112	荆南麦圆体	荆南麦圆体	Kingnammm Maiyuan 2
113	阿里健康体 2.0 盲文	阿里健康体 2.0 盲文	Alibaba Health Font2.0Braille
114	猫啃珠圆体	猫啃珠圆体	MaokenZhuyuanTi
115	优设标题圆	优设标题圆	YouSheBiaoTiYuan
116	仓耳舒圆体W03	仓耳舒圆体	TsangerShuYuanT
117	阿里妈妈方圆体	阿里妈妈 方圆体	Alimama FangYuanTi VF
118	仓耳舒圆体W04	仓耳舒圆体	TsangerShuYuanT
119	仓耳舒圆体W05	仓耳舒圆体	TsangerShuYuanT
120	仓耳舒圆体W02	仓耳舒圆体	TsangerShuYuanT
121	仓耳舒圆体W01	仓耳舒圆体	TsangerShuYuanT
122	寒蝉圆黑体	寒蝉圆黑体	Chill Round Gothic
123	LeeFont蒙黑体	Leefont 蒙黑体	LeeFont蒙黑体
124	自由字体	自由字体	Jiyucho
125	荆南波波黑	荆南波波黑	Kingnam Bobo
126	问藏书房	问藏书房	WenCang
127	优设好身体	优设好身体	YOUSHEhaoshenti
128	也字工厂小石头	也字工厂 小石头	也字工厂小石头（7个问好）
129	优设鲨鱼菲特健康体	优优设鲨鱼菲 特健康体	YouSheShaYuFeiTeJiankangTi
130	素村集市康康体	素材集市 康康体	sucaijishikangkangti
131	方正楷体GBK	方正楷体 GBK	FZKai-Z03
132	方正仿宋繁体	方正仿宋 繁体	FZFangSong-Z02T
133	方正书宋繁体	方正书宋 繁体	FZShuSong-Z01
134	方正仿宋GBK	方正仿宋 GBK	FZFangSong-Z02
135	方正楷体简体	方正楷体 简体	FZKai-Z03S
136	书宋简体	方正书宋 简体	FZShuSong-Z01s
137	书宋GBK	方正书宋 GBK	FZShuSong-Z01
138	方正楷体繁体	方正楷体 繁体	FZKai-Z03T
139	方正仿宋GBK	方正仿宋 简体	FZFangSong-Z02S
140	仓耳与墨W05	仓耳与墨	TsangerYuMo
141	仓耳小丸子	仓耳小丸子	TsangerxWz
142	仓耳非白W04	仓耳非白	TsangerFeiBai
143	仓耳渔阳体W01	仓耳渔阳体	TsangerYuYangT
144	仓耳渔阳体W05	仓耳渔阳体	TsangerYuYangT
145	仓耳与墨W04	仓耳与墨	TsangerYuMo
146	仓耳非白W05	仓耳非白	TsangerFeiBai
147	仓耳与墨W03	仓耳与墨	TsangerYuMo
148	仓耳渔阳体W04	仓耳渔阳体	TsangerYuYangT
149	仓耳与墨W02	仓耳与墨	TsangerYuMo
150	仓耳渔阳体W03	仓耳渔阳体	TsangerYuYangT
151	仓耳非白W01	仓耳非白	TsangerFeiBai
152	仓耳非白W03	仓耳非白	TsangerFeiBai
153	仓耳渔阳体W02	仓耳渔阳体	TsangerYuYangT
154	仓耳与墨W01	仓耳与墨	TsangerYuMo
155	仓耳非白W02	仓耳非白	TsangerFeiBai
156	华康海报体W2	华康海报体	DFPHaiBaoW12-GB
157	华康布丁体	华康布丁体	DFBuDingGB Std
158	华康彩带体	华康彩带体	DFCaiDaiGB Std
159	华康儿风体	华康儿风体	DFErGB Std
160	华康方圆体	华康方圆体	DFFangYuanGB Std
161	华康钢笔体	华康钢笔体	DFGangBiGB Std
162	华康手扎体	华康手扎体	DFHannotateGB Std
163	华康翩翩体	华康翩翩体	DFHanziPenGB Std
164	华康黑体	华康黑体	DFHeiGB Std
165	华康金文体	华康金文体	DFJinWenGB Std
166	华康楷体	华康楷体	DFKaiGB Std
167	华康勘亭流	华康勘亭流	DFPHaiBaoW12-GB
168	华康俪金黑	华康俪金黑	DFLiJinHeiGB Std
169	华康隶书体	华康隶书体	DFLiShuGB Std
170	华康龙门石碑	华康龙门石碑	DFLongMenGB Std
171	华康POP1体	华康POP1体	DFPOP1GB Std
172	华康墨字体	华康墨字体	DFMoGB Std
173	华康POP2体	华康POP2体	DFPOP2GB Std
174	华康POP3体	华康POP3体	DFPOP3GB Std
175	华康少女文字	华康少女文字	DFShaoNvGB Std
176	华康饰艺体	华康饰艺体	DFShiYiGB Std
177	华康瘦金体	华康瘦金体	DFShouJinGB Std
178	华康宋体	华康宋体	DFSongGB Std
179	华康唐风隶	华康唐风隶	DFTanLiGB Std
180	华康娃娃体	华康娃娃体	DFWaWaGB Std
181	华康魏碑	华康魏碑	DFWeiBeiGB Std
182	华康正颜楷体	华康正颜楷体	DFYanKaiGB Std
183	华康雅宋体	华康雅宋体	DFYaSongGB Std
184	华康雅艺体	华康雅艺体	DFYaYiGB Std
185	华康圆体	华康圆体	DFYuanGB Std
186	华康新综艺	华康新综艺	DFZongYiGB Std
187	思源黑体 Regular	思源黑体	Source Code Pro
188	思源黑体	思源黑体	Source Han Sans CN
189	思源黑体	思源黑体	Source Code Pro`;

export const fonts: FontItem[] = fontRows.split('\n').map((row) => {
  const [order, title, preview, figmaName] = row.split('\t');

  return {
    order: Number(order),
    title,
    preview,
    figmaName,
  };
});
