// Observer是一个数据监听器，其实现核心方法就是前文所说的Object.defineProperty( )。
// 如果要对所有属性都进行监听的话，那么可以通过递归方法遍历所有属性值，并对其进行Object.defineProperty( )处理。

function Observer(data) {
	this.data = data;
	this.walk(data)
}

Observer.prototype = {
	walk: function(data) {
		var self = this;
		Object.keys(data).forEach(function(key) {
			self.defineReactive(data, key, data[key]);
		}) 
	},

	defineReactive: function(data, key, val) {
		var dep = new Dep();
		var childObj = observe(val);
		Object.defineProperty(data, key, {
			enumerable: true,
			configurable: true,
			get: function getter () {
				if (Dep.target) {
					dep.addSub(Dep.target);
				}
				return val;
			},
			set: function setter (newVal) {
				if (newVal === val) {
					return;
				}
				val = newVal;
				dep.notify();
			}
		})
	}
}

function observe(value, vm) {
	if(!value || typeof value !== 'object') {
		return;
	}
	return new Observer(value)
}

function Dep () {
	this.subs = [];
}

Dep.prototype = {
	addSub: function(sub) {
		this.subs.push(sub);
	},
	notify: function() {
		this.subs.forEach(function(sub) {
			sub.update();
		})
	}
};
Dep.target = null;