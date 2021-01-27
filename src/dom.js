window.dom = {
    create(tagName){ //封装获取ID 
        return document.createElement(tagName)
    },
    createLabel(string){ //封装直接获取多个标签
        // const container = document.createElement('div') //这里我尝试放div 但是引用之后得到的结果是undefined   
        const container = document.createElement('template')
        container.innerHTML = string.trim()//trim()去掉标签前面的空格
        // return container.children[0] // template不能用children来获取它的孩子
        return container.content.firstChild
    },
    after(node,node2){
        node.parentNode.insertBefore(node2,node.nextSibling)  //找到它最后一个孩子 然后添加到最后一个元素的后面
    },
    before(node,node2){
        node.parentNode.insertBefore(node2,node)  
    },
    append(parent,node){
        parent.appendChild(node)
    },
    wrap(node,parent){ //给它的外面加一层爸爸
        dom.before(node,parent)  //先添加一个父元素
        dom.append(parent,node)  //再把原来的子元素加到新的父元素里面
    },
    remove(node){
        node.parentNode.removeChild(node)
        return node  //让外面能引用
    },
    empty(node){
        const array=[]
        let x = node.firstChild
        while(x){
            array.push(dom.remove(node.firstChild))
            x = node.firstChild   
        }
        return array
    },
    attr(node,name,value){
        if(arguments.length===3){
            node.setAttribute(name,value)
        }else if(arguments.length ===2){
            return node.getAttribute(name)
        }
    },
    text(node,string){
        if(arguments.length ===2){ //长度为2 设置新的内容
            console.log(1)
            if('innerText' in node){
                node.innerText = string
            }else{
                node.textContent = string
            }
        }else if(arguments.length === 1){ //长度为1 获取原内容
            if('innerText' in node){
                return node.innerText 
            }else{
                return node.textContent
            }
        }
    },
    html(node,string){
        if(arguments.length === 2){
            console.log(222)
            node.innerHTML = string
        }else if(arguments.length ===1){
            console.log(111)
           return  node.innerHTML
        }
    },
    style(node,name,value){
        if(arguments.length ===3){  
            //如果给他传三个值 那么就是设置
            // dom.style(div,'color','red')
            node.style[name] = value
        }else if(arguments.length ===2){  //如果给他传两个值 字符串和对象不同
            if(typeof name === 'string'){  
                //它的值是字符串型 那么就是获取
                // dom.style(div,'color') 获取它的color
                return node.style[name]
            }else if(name instanceof Object){ //如果它的值是对象 那么它也是设置
                const object = name
                for(let key in object){
                    node.style[key] = object[key]
                }
            }
        }
    },
    class:{
        add(node,className){  //添加
            node.classList.add(className) 
        },
        remove(node,className){ //删除
            console.log(222)
            node.classList.remove(className)
        },
        has(node,className){ //检查是否包含某属性 得到布尔值 true 或 false
            return node.classList.contains(className)
        }

    },
    on(node,eventName,fn){
        node.addEventListener(eventName,fn)
    },
    off(node,eventName,fn){
        node.removeEventListener(eventName,fn)
    },
    find(selector,scope){
        return(scope || document).querySelectorAll(selector)
    },
    parent(node){
        return node.parentNode
    },
    children(node){
        return node.children  
    },
    siblings(node){
        return Array.from(node.parentNode.children).filter(n => n!==node)
    },
    next(node){
        let x = node.nextSibling
        while(x && x.nodeType === 3){
            x = x.nextSibling
        }
        return x
    },
    previous(node){
        let x = node.previousSibling
        while(x && x.nodeType === 3){
            x = x.previousSibling
        }
        return x
    },
    each(nodeList,fn){
        for(let i =0 ;i<nodeList.length;i++){
            fn.call(null,nodeList[i])
        }
    },
    index(node){
        const list = dom.children(node.parentNode)
        let i
        for(i=0;i<list.length;i++){
            if(list[i]===node){
                break
            }
        }
        return i
    }


}