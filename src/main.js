// const div = dom.createLabel('<div><span>我是span里面的内容</span></div>')
// console.log(div);

// dom.after(test,div)
// dom.before(test,div)
// dom.append(test,div)
// dom.wrap(test,div)
// dom.empty(e1)

// dom.remove(r2)

// dom.attr(test,'title','hi,I am lulu')
// let title = dom.attr(test,'title')
// console.log(`title:${title}`)

// dom.text(test,'您好 我是新来的字符串内容')  //node,string 都传入 设置新的内容
// dom.text(test) //只传node 获取文本内容

// dom.html(test,'<div>您好我是新的e1里面的内容<i>在新的内容里面我可以包含标签</i></div>')

// dom.style(test,{border:'1px solid red', color:'yellow', backgroundColor:'green'})//值为对象型
// console.log(dom.style(test,'color'))
// dom.style(test, 'border','3px solid #000')


// dom.class.add(test,'active')  //添加类
// dom.class.add(test,'fl')//添加类
// console.log(test)
// dom.class.remove(test,'active') //删除类
// console.log(dom.class.has(test,'fl')) //查看某个标签类是否有这个类 有返回true 没有false


// fnOn = ()=>{
//     console.log('点击了')
// }

// fnOff =()=>{
//     console.log('移除了')
// }
// dom.on(test,'click',fnOn())
// dom.off(test,'click',fnOff())


let testDiv = dom.find('#test')[0]//querySelectorAll获取 记得加[0] 不然获取不到
console.log(testDiv)
//如果有两个类名为red的参数 父元素不同
console.log(dom.find('.red',testDiv)[0])



console.log(dom.parent(test))
console.log(dom.children(test)[0])
console.log(dom.siblings(e1))


console.log(dom.next(test))
console.log(dom.previous(tutu))

// each 配合find一起使用
const t = dom.find('#travel')[0]
dom.each(dom.children(t), (n)=>dom.style(n,'color','red'))

console.log(dom.index(t3))