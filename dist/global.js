;
(function() {
	//动态计算rem根植的fontSize,以使页面元素根据rem自适应
	var XD_Util = {
		initRem: function(size) {
			size = +size || 100;
			var documentElement = window.document.documentElement;
			var width = Math.min(documentElement.clientWidth, 750);
			documentElement.style.fontSize = width / (750 / size) + "px";
		},
		refreshRem: function() {
			var _documentElement = window.document.documentElement;
			if(_documentElement.clientWidth <= 320) {
				_documentElement.style.fontSize = (320 / 750 * 100) + "px";
			} else {
				this.initRem();
			}
		}
	};
	XD_Util.refreshRem(100);
	window.onresize = function() {
		XD_Util.refreshRem();
	};

	var hm = document.createElement("script");
	hm.src = "//hm.baidu.com/hm.js?ef5e954a0dc570ae9f3a3d74d9425cb4";
	var s = document.getElementsByTagName("script")[0];
	s.parentNode.insertBefore(hm, s);

})();

//定义头部
Vue.component('my-nav', {
	props: ['nav'],
	template: '<div class="nav-box">\
				<ul>\
					<li :class="{cur:nav==1}"><a href="index.html">产品展示</a></li>\
					<li :class="{cur:nav==2}"><a href="deal.html">解决方案</a></li>\
					<li :class="{cur:nav==3}"><a href="about.html">关于我们</a></li>\
					<li :class="{cur:nav==4}"><a href="question.html">更多服务</a></li>\
				</ul>\
			</div>'
});
Vue.component('my-footer', {
	props: ['nav'],
	template: '<footer>\
				<ul>\
					<li><a href="http://mp.weixin.qq.com/s?__biz=MzAxMjkzMjc5MQ==&mid=2247483806&idx=1&sn=0609de84902249cb6bb226947ce6c8fa#rd">公众号</a></li>\
					<li><a :href="getUrl">电脑版</a></li>\
					<li><a href="tel:400-150-5088">客服电话</a></li>\
					<li><a href="http://a.app.qq.com/o/simple.jsp?pkgname=com.zhidian.caogen.smartlock">App下载</a></li>\
				</ul>\
				<p>杭州指点科技有限公司</p>\
			</footer>',
			methods:{
				link:function(){
					document.cookie = 'gotopc=true';
					this.getUrl=this.getUrl+"?_t="+Date.parse(new Date());
				}
			},
			data:function(){
				return {getUrl:"http://www.weker.me/?p=true"}
			}

});

new Vue({
	el: 'body',
	data: {
		kinds: [{
			title: "下载安装",
			content: [{
				q: "Weker App支持哪些系统？",
				a: "目前我们支持Android4.3以上、iOS8.0以上，后续我们会推出其他系统版本。"
			}, {
				q: "在哪里可以下载到Weker App？",
				a: "苹果手机可以在App Store里搜索“Weker智能锁”，下载；安卓手机可以在这些应用商城（联想乐商店、小米应用商店、百度/91和安卓市场、智汇云（华为）、腾讯开发者平台、360、豌豆荚）下载。"
			}]
		}, {
			title: "开锁方式",
			content: [{
				q: "手机开锁如何操作？",
				a: "为保证开锁安全，我们现在支持手动开锁，只要打开App、蓝牙并连接网络，选择对应的门锁，点击一下并激活锁即可开门。"
			}]

		}, {
			title: "使用说明",
			content: [{
					q: "支持开锁方式有哪些？",
					a: "目前根据门锁类型的不同，我们的门锁支持机械钥匙开锁、指纹开锁、密码开锁以及手机蓝牙开锁这几种方式的组合开锁形式，并且根据账号权限的不同也会有不同的开锁方式组合。"
				}, {
					q: "一个手机是否可以开多把锁？",
					a: "一个手机可以添加多把锁，每把锁对应一把钥匙，一个手机相当于我们过去的钥匙包了。"
				}, {
					q: "如何让家人或朋友使用手机开锁？",
					a: "管理员或特权用户（即拥有发钥匙权限的人）可以给其他接收人发送钥匙，前提是接收人已经注册Weker，这样就能收到钥匙后使用手机开锁了。"
				}, {
					q: "手机没电或没带怎么办？",
					a: "我们可以机械钥匙开锁、键盘密码开锁，突发状况没有手机，一样可以开锁。"
				}, {
					q: "手机丢失怎么办？",
					a: "联系管理员将账号钥匙冻结掉即可。"
				}

			]
		}, {
			title: "故障排除",
			content: [{
				q: "App无法开锁？",
				a: "首先确保手机蓝牙是打开状态，若蓝牙打开还是无法开锁，则尝试退出App再次启动。"
			}, {
				q: "键盘密码或指纹开锁，但开锁记录里没有此次记录？",
				a: "我们的开锁记录，只有在使用手机蓝牙开锁后才会上传，并且记得保持网络通畅。"
			}]
		}, {
			title: "安全问题",
			content: [{
				q: "产品安全性怎么样？",
				a: "我们产品的安全性非常高，有账号、MAC码、密码、动态密码共四层安全认证，蓝牙数据传输采用AES加密，有效保障使用安全。"
			}]
		}, {
			title: "功能问题",
			content: [{
				q: "门锁耗电量如何？",
				a: "产品工作的电流非常微小，而且不操作时，锁将进入休眠状态，采用4节5号电池供电，可使用1年以上。"
			}, {
				q: "手机耗电量如何？",
				a: "蓝牙本身非常省电，而且我们的蓝牙模块是蓝牙中功耗最低模块之一，对手机的待机时间基本没有影响，蓝牙只有在进行连接传输数据的时候，才会消耗比较多的电量，因为锁大部分时间都是休眠状态，并没有与手机进行连接，更没有数据传输，所以使用我们的软件，对手机的待机时间影响几乎可以忽略不计。"
			}]

		}]
	}
});
