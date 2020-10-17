let pc = document.getElementById('pc');
let ipad = document.getElementById('ipad');
let mobile = document.getElementById('mobile');
let txt = document.querySelector('[data-js="txt"]');
let box = document.querySelector('[data-js="box"]');

// userAgentがiPhoneかAndroidか
if ((navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('Android') > 0)) {
	// mobile
	console.log(navigator);
	console.log(navigator.userAgent);
	console.log(navigator.vendor);
	pc.classList.remove('is_show');
	ipad.classList.remove('is_show');
	mobile.classList.add('is_show');
	console.log(mobile.children.length);
	// iphoneだったらiOS、AndroidだったらAndroidと表示させる
	for( let i=0; i < mobile.children.length; i++ ){
		if( navigator.userAgent.indexOf('iPhone') > 0 ){
			mobile.children[i].innerHTML = '<p class="text" data-js="txt">iPhone</p>';
		}else{
			mobile.children[i].innerHTML = '<p class="text" data-js="txt">Android</p>';
		}
	}
}else if(navigator.userAgent.indexOf('iPad') > 0){
	console.log(navigator);
	console.log(navigator.userAgent);
	console.log(navigator.vendor);
	pc.classList.remove('is_show');
	mobile.classList.remove('is_show');
	ipad.classList.add('is_show');
	for( let i=0; i < ipad.children.length; i++ ){
		ipad.children[i].innerHTML = '<p class="text" data-js="txt">iPad</p>';
	}
}else{
	// pc
	console.log(navigator);
	console.log(navigator.userAgent);
	console.log(navigator.vendor);
	pc.classList.add('is_show');
	ipad.classList.remove('is_show');
	mobile.classList.remove('is_show');
	if( navigator.userAgent.indexOf('Mac') > 0 ){
	// Mac
		console.log('mac');
		for( let i=0; i < ipad.children.length; i++ ){
			pc.children[i].innerHTML = '<p class="text" data-js="txt">Macintosh</p>';
		}
	}else{
	// Windows
		console.log('Windows');
		for( let i=0; i < ipad.children.length; i++ ){
			pc.children[i].innerHTML = '<p class="text" data-js="txt">Windows</p>';
		}
	}
}

// userAgentでOSをを判別している
// navigator.userAgentでその情報を取得できる

// if ((navigator.userAgent.indexOf('iPhone') > 0 && navigator.userAgent.indexOf('iPad') == -1) || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
	// mobile端末のとき
// }else{
	// PCのとき
// }