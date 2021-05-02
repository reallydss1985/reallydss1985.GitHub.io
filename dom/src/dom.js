window.dom = {
	find(selector, scope) {
		let x = (scope || document).querySelectorAll(selector)
		return x
	},
	style(node, name, value) {
		if (arguments.length === 3) {
			//dom.style(div,'color','red')
			node.style[name] = value
		} else if (arguments.length === 2) {
			if (typeof name === 'string') {
				//dom.style(div,'color')
				return node.style[name]
			} else if (name instanceof Obect) {
				//dom.style(div,{'border':'1px solid red'})
				const object = name
				for (let key in object) {
					node.style[key] = object[key]
				}
			}
		}
	},
	each(nodeList, fn) {
		for (let i = 0; i < nodeList.length; i++) {
			fn.call(null, nodeList[i])
		}
	},



	//增
	create(string) {
		const container = document.createElement('template')
		container.innerHTML = string.trim()
		return container.content.firstChild
	},
	after(node, node2) {
		node.parentNode.insertBefore(node2, node.nextSibling)
	},
	before(node, node2) {
		node.parentNode.insertBefore(node2, node)
	},
	append(parent, node) {
		parent.appendChild(node)
	},
	wrap(node, parent) {
		//判断node是否存在body里面
		if (document.body.contains(node)) {
			dom.append(parent, node)
		} else {
			dom.before(node, parent)
			dom.append(parent, node)
		}

	},
	//删除
	remove(node) {
		node.parentNode.removeChild(node)
		return node
	},
	empty(node) {
		const {
			childNodes
		} = node
		const array = []
		let x = node.firstChild
		while (x) {
			array.push(dom.remove(x))
			x = node.firstChild
		}
		return array
	},
	//改
	attr(node, name, value) {
		if (arguments.length === 3) {
			node.setAttribute(name, value)
		} else if (arguments.length === 2) {
			return node.getAttribute(name)
		}
	},
	text(node, string) { //适配
		if (arguments.length === 2) {
			if ('innerText' in node) {
				node.innerText = string //ie
			} else {
				node.textContent = string //firefox,chrome
			}
		} else if (arguments.length === 1) {
			if ('innerText' in node) {
				return node.innerText //ie
			} else {
				return node.textContent //firefox,chrome
			}
		}
	},
	html(node, string) {
		if (arguments.length === 2) {
			node.innerHTML = string
		} else if (arguments.length === 1) {
			return node.innerHTML
		}
	},
	//style位置
	class: {
		add(node, className) {
			node.classList.add(className)
		},
		remove(node, className) {
			return node.classList.remove(className)
		},
		has(node, className) {
			return node.classList.contains(className)
		}
	},
	on(node, eventName, fn) {
		node.addEventListener(eventName, fn)
	},
	off(node, eventName, fn) {
		node.removeListener(eventName, fn)
	},

	////////////find位置
	parent(node) {
		return node.parentNode
	},
	children(node) {
		return node.children
	},
	siblings(node) {
		return Array.from(node.parentNode.children).filter(n => n !== node)
	},
	next(node) {
		//返回下一个元素节点
		let x = node.nextSibling()
		while (x && x.nodeType === 3) {
			x = x.nextSibling
		}
		return x
	},
	previous(node) {
		//返回上一个元素节点
		let x = node.previousSibling()
		while (x && x.nodeType === 3) {
			x = x.previousSibling
		}
		return x
	},
	//each位置
	index(node) {
		const list = dom.children(node.parentNode)
		let i = 0
		for (; i < list.length; i++) {
			if (list[i] === node) {
				break
			}
		}
		return i
	}
}
