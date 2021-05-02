## 一、jQuery 如何获取元素
jQuery的基本设计思想和主要用法,就是'选择某个网页元素,然后对其进行某种操作'，jQuery使用$(selector) 的方法获取页面的操作元素,selector接受字符串或着是元素组成的数组

选择表达式可以使用CSS选择器也可以使用jQuery特有的表达式：
```
//CSS选择器
$(document) //选择整个文档对象
$('#myId') //选择ID为myId的网页元素
$('div.myClass') // 选择class为myClass的div元素
$('input[name=first]') // 选择name属性等于first的input元素

//jQuery特有的表达式

$('a:first') //选择网页中第一个a元素
$('tr:odd') //选择表格的奇数行
$('#myForm :input') // 选择表单中的input元素
$('div:visible') //选择可见的div元素
$('div:gt(2)') // 选择所有的div元素，除了前三个
$('div:animated') // 选择当前处于动画状态的div元素
```
## 二、jQuery 的链式操作是怎样的
JQuery的设计思想之一是，使用了一种称之为链式编程的思想，获取元素后，可以对它进行一系列的操作，并且所有的操作都可以连接使用，类似一条执行链条。
例如```$('div').find('a').eq(2).html('go')```
## 三、jQuery 如何创建元素
jQuery已经封装好了创建元素，我们可以直接传入html字符串，jQuery会帮我们自动创建节点。例如:
```
$(`
<div>
	<span class="red">
		this is new node
	</div>
</div>`)
```
## 四、jQuery 如何移动元素
jQuery提供了四队方法用于操作元素在网页中的位置移动
```
.insertAfter()`和.after()：在现存元素的外部，从后面插入元素
.insertBefore()和.before()：在现存元素的外部，从前面插入元素
.appendTo()和.append()：在现存元素的内部，从后面插入元素
.prependTo()和.prepend()：在现存元素的内部，从前面插入元素
```

## 五、jQuery 如何修改元素的属性
jQuery 提供多种修改元素的属性的方法：
```
//标签属性的增删改查
$('#div').attr('class') // 查
$('#div').attr('class','red') // 增和改；如果存在就是修改，如果不存在就是添加
$('#div').removeAttr('class') // 删

//class的增删
$('#div').addClass('red') // 增
$('#div').removeClass('red') // 删

//获取输入框内容
$('input[name="username"]').val()
```
## 引用
1. [jQuery设计实现](https://www.ruanyifeng.com/blog/2011/07/jquery_fundamentals.html)