// 友情链接数据配置
// 用于管理友情链接页面的数据

export interface FriendItem {
	id: number;
	title: string;
	imgurl: string;
	desc: string;
	siteurl: string;
	tags: string[];
}

// 友情链接数据
export const friendsData: FriendItem[] = [
	/*{
	id: ,
	title: "",
	imgurl: "",
	desc: "",
	siteurl: "",
	tags: [""],
	},*/
	{
		id: 1,
		title: "Mizuki",
		imgurl: "http://q.qlogo.cn/headimg_dl?dst_uin=3231515355&spec=640&img_type=jpg",
		desc: "一个简约&功能丰富的Astro博客主题",
		siteurl: "https://docs.mizuki.mysqil.com",
		tags: ["博客主题","官方文档","使用手册"],
	},
	{
		id: 2,
		title: "宁宁云",
		imgurl: "https://nnyunidc.cn/themes/web/nnyun-web/assets/img/logo.png",
		desc: "一个小云服务商，质量还行，一分钱一分货",
		siteurl: "https://nnyunidc.cn/",
		tags: ["IDC"],
	},
	{
	id: 3,
	title: "海参云",
	imgurl: "https://monesy.cn/themes/web/yunyoo/assets/img/logo/LOGO.png",
	desc: "一个纯对接的云服务商，总感觉不太靠谱",
	siteurl: "https://monesy.cn/",
	tags: ["IDC"],
	},
	{
	id: 4,
	title: "昆明湖的博客",
	imgurl: "https://blog.nnyunidc.cn/assets/home/avatar.webp",
	desc: "一个柚子厨的博客站",
	siteurl: "https://blog.nnyunidc.cn/",
	tags: ["个人博客"],
	},
	{
	id: 5,
	title: "ZYX-blog",
	imgurl: "https://zyx-blog.top/_astro/mmexport1754374724013.Cgj7ciy1_2fwvvy.webp",
	desc: "一位Arch大佬及命令行爱好者的博客站",
	siteurl: "https://zyx-blog.top/",
	tags: ["个人博客"],
	},
];
// 获取所有友情链接数据
export function getFriendsList(): FriendItem[] {
	return friendsData;
}

// 获取随机排序的友情链接数据
export function getShuffledFriendsList(): FriendItem[] {
	const shuffled = [...friendsData];
	for (let i = shuffled.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
	}
	return shuffled;
}
