// 设备数据配置文件

export interface Device {
	name: string;
	image: string;
	specs: string;
	description: string;
	link: string;
}

// 设备类别类型，支持品牌和自定义类别
export type DeviceCategory = {
	[categoryName: string]: Device[];
} & {
	自定义?: Device[];
};

export const devicesData: DeviceCategory = {
	手机: [
		{
			name: "realme GT5",
			image: "/images/device/realmegt5.webp",
			specs: "流银幻镜 / 24G + 1TB",
			description:
				"搭载骁龙8 Gen 2处理器，支持240W超级快充，背面采用一体热锻玻璃设计，外观时尚，手感舒适。",
			link: "https://www.realme.com/realme-gt-5",
		},
		{
			name: "xiaomi 9",
			image: "/images/device/mi9.webp",
			specs: "幻彩蓝 / 8G + 256GB",
			description:
				"搭载骁龙855处理器，支持27W快充和20W无线充电，后置4800万超清三摄。",
			link: "https://www.mi.com/hk/mi9",
		},
		{
			name: "xiaomi mix2",
			image: "/images/device/mix2.jpg",
			specs: "黑色陶瓷版 / 6G + 64GB",
			description:
				"搭载骁龙835处理器，采用无打孔全面屏和四曲面陶瓷机身，手感极佳。",
			link: "https://www.mi.com/mix2",
		},
		{
			name: "iqoo 3",
			image: "/images/device/iqoo3.png",
			specs: "拉力橙 / 12G + 128GB",
			description:
				"搭载骁龙865处理器，支持55W超级快充，后置4800万超清四摄。",
			link: "https://www.vivo.com.cn/vivo/iqoo3/",
		},
		{
			name: "OPPO A52",
			image: "/images/device/oppoa52.webp",
			specs: "星耀白 / 8G + 128GB",
			description:
				"搭载骁龙665处理器，配备外星科技3.5mm耳机孔和2+1卡槽，性价比高",
			link: "https://www.oppo.com/cn/product/a52/",
		},
	],
	笔记本: [
		{
			name: "hp laptop 14s-dr2xxx\n(惠普星14青春版)",
			image: "/images/device/hp14s.jpg",
			specs: "银色 / i3-1115G4 + 8GB + 512GB",
			description:
				"性能垃圾，纯纯轻量办公本",
			link: "https://detail.zol.com.cn/notebook/index1406762.shtml",
		},
	],
	游戏机: [
		{
			name: "Nintendo Switch Lite",
			image: "/images/device/nslite.webp",
			specs: "蓝绿色 / 日行",
			description:
				"夯。体积小、轻巧，方便外出游玩，游戏丰富，缺点是不能投屏",
			link: "https://www.nintendo.com/jp/hardware/detail/switch-lite/index.html",
		},
		{
			name: "PlayStation Portable",
			image: "/images/device/psp.jpg",
			specs: "黑色 / 3000型",
			description:
				"夯爆了。便携式游戏机的先驱，游戏丰富齐全，还能模拟GBA、街机、N64等游戏机",
			link: "https://detail.zol.com.cn/series/591/9262_1.html",
		},
	],
	耳机: [
		{
			name: "TRUTHEAR NOVA",
			image: "/images/device/nova.jpg",
			specs: "单晶铜线(自带) / 1动圈4动铁",
			description:
				"杂食塞，三频均衡，适合入门。分离度表现优秀，解析能力符合价位表现",
			link: "https://truthear.com/products/nova",
		},
		{
			name: "Sennheiser IE80s",
			image: "/images/device/ie80s.jpg",
			specs: "单晶铜镀银线(换) / 5档低频量感调节",
			description:
				"偏器乐塞。适合听古典、OST、New Age、管弦乐等类型的音乐，流行人声相对一般",
			link: "https://detail.zol.com.cn/1207/1206011/param.shtml",
		},
		{
			name: "MOONDROP CHU II",
			image: "/images/device/chu2.jpg",
			specs: "Type-C DSP / 带麦克风",
			description:
				"性价比高，麦还不错，给手机用刚刚好",
			link: "https://moondroplab.com/cn/products/chu-ii",
		},
	],
	路由器: [
		{
			name: "Xiaomi全屋路由",
			image: "/images/device/mimesh.jpg",
			specs: "3000Mbps / WiFi 6",
			description:
				"最高2976Mbps，支持WiFi 6和Mesh组网，覆盖面积广，信号稳定",
			link: "https://www.mi.com/xiaomi-routers/whole-room",
		},
	],
};
