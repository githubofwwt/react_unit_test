import React from 'react'
import {shallow} from 'enzyme'
import ListDemo from '../index'
import Home from '../../../index'
import {List} from 'antd'

const { Item } = List

describe('ListDemo', () => {
	const wrapper = shallow(<ListDemo />)
	const honeWrapper = shallow(<Home />)

  /**
	 * 返回当前包装器的给定索引处的ShallowWrapper
   */
	it('.at(index) => ShallowWrapper', () => {
		expect(wrapper.find('Item').at(0).props().extra).toEqual('header')
	})

  /**
	 * 返回在指定索引处具有子元素的新ShallowWrapper
   */
  // it('.childAt(index) => ShallowWrapper', () => {
	// 	expect(wrapper.find('List').childAt(0).type()).toEqual('Item')
  // })

  /**
	 * 返回包含当前包装器的所有子节点的新ShallowWrapper，selector可选，过滤符合条件的子节点。
   */
  it('.children([selector]) => ShallowWrapper', () => {
		expect(wrapper.find('List').children('Item')).toHaveLength(5)
  })

  /**
	 * 通过遍历当前节点的祖先，从自身开始，返回与selector最近的ShallowWrapper。
	 * 注意：只能在单个节点的包装器上调用。
   */
  it('.closest(selector) => ShallowWrapper', () => {
		expect(wrapper.find('span').closest('Item')).toHaveLength(1)
  })

  /**
	 * 返回给定包装器中是否包含所有的nodeOrNodes，属性不会被忽略。参数是单个节点或数组
   */
  it('.contains(nodeOrNodes) => Boolean', () => {
		expect(wrapper.contains(<Item extra={'header'}></Item>)).toEqual(true)
		expect(wrapper.contains([
      <Item extra={'header'}></Item>,
      <Item>Racing car sprays burning fuel into crowd.</Item>
		])).toEqual(true)
  })

  /**
	 * 返回给定包装器中是否包含所有的Nodes，属性会被忽略。参数是数组
   */
  it('.containsAllMatchingElements(nodes) => Boolean', () => {
    expect(wrapper.containsAllMatchingElements([<Item></Item>])).toEqual(true)
  })

  /**
	 * 返回给定包装器中是否包Nodes中的含至少一项，属性会被忽略。参数是数组
   */
  it('.containsMatchingElement(node) => Boolean', () => {
    expect(wrapper.containsMatchingElement([<Item></Item>])).toEqual(true)
  })

  /**
	 * 返回包装器的HTML的字符串，以便进行调试。
   */
  it('.debug([options]) => String', () => {
    // console.log(wrapper.debug())
  })

  /**
   * 浅呈现当前包装器的一个非DOM子项，并返回结果周围的包装器。
   */
  it('.dive([options]) => ShallowWrapper', () => {
    expect(honeWrapper.find(ListDemo).dive().find('.test')).toHaveLength(1)
  })

  /**
	 * 返回当前包装器根节点是否与传入node相似。忽略值为undefined的属性。
   */
  it('.equals(node) => Boolean', () => {
		expect(honeWrapper.equals(<div><ListDemo /></div>)).toEqual(true)
  })

  /**
	 * 返回包装器中的所有节点是否与提供的选择器匹配。
   */
  it('.every(selector) => Boolean', () => {
		expect(wrapper.find('Item').every('.test')).toEqual(false)
  })

  /**
	 * 返回包装器中的所有节点是否传递提供的谓词函数。
   */
  it('.everyWhere(fn) => Boolean', () => {
    expect(wrapper.find('Item').everyWhere(node => node.hasClass('test'))).toEqual(false)
  })

  /**
	 * 返回当前节点是否存在。
   */
  it('.exists([selector]) => Boolean', () => {
		expect(wrapper.exists('.test')).toEqual(true)
  })

  /**
	 * 返回符合过滤条件的ShallowWrapper
   */
  it('.filter(selector) => ShallowWrapper', () => {
		expect(wrapper.find('Item').filter('.test')).toHaveLength(1)
  })

  /**
   * 返回fn为true时的ShallowWrapper
   */
  it('.filterWhere(fn) => ShallowWrapper', () => {
    expect(wrapper.find('Item').filterWhere(node => node.hasClass('test'))).toHaveLength(1)
  })

  /**
	 * 返回符合条件的ShallowWrapper
   */
  it('.find(selector) => ShallowWrapper', () => {
		expect(wrapper.find('Item')).toHaveLength(5)
  })

  /**
	 * 返回fn为true时的ShallowWrapper
   */
  it('.findWhere(fn) => ShallowWrapper', () => {
    expect(wrapper.findWhere(node => node.hasClass('test'))).toHaveLength(1)
  })

  /**
	 * 返回集合中的第一个ShallowWrapper
   */
  it('.first() => ShallowWrapper', () => {
		expect(wrapper.find('Item').first().props().extra).toEqual('header')
  })

  /**
	 * 迭代当前包装器的每个节点，并使用围绕作为第一个参数传入的相应节点的包装器执行提供的函数。
   */
  // it('.forEach(fn) => Self', () => {
	// 	wrapper.find('Item').forEach(node => {
	// 		expect(node.hasClass('test')).toEqual(true)
	// 	})
  // })

  /**
	 * 返回当前包装器的给定索引处的节点。
	 * 注意： 此处返回的不是ShallowWrapper，而是ReactElement，所以他没有ShallowWrapper的属性和方法，
	 * ReactElement也就是JSX（从控制台看实际为一个对象）
   */
  it('.get(index) => ReactElement', () => {
    // console.log(wrapper.find('Item').get(0))
		expect(wrapper.find('Item').get(0).props.extra).toEqual('header')
  })

  /**
	 * 返回ShallowWrapper的ReactElement
   */
  it('.getElement() => ReactElement', () => {
    // console.log(honeWrapper.getElement())
		expect(honeWrapper.getElement()).toEqual(<div><ListDemo /></div>)
  })

  /**
	 * 返回ShallowWrapper的ReactElement的数组
   */
  it('.getElements() => Array<ReactElement>', () => {
    // console.log(honeWrapper.getElements())
    expect(honeWrapper.getElements()).toEqual([<div><ListDemo /></div>])
  })

  /**
	 * 判断当前ShallowWrapper是否有className类名
   */
  it('.hasClass(className) => Boolean', () => {
		expect(wrapper.find('Item').at(3).hasClass('test')).toEqual(true)
  })

  /**
	 * 返回当前ShallowWrapper的静态渲染的html字符串
   */
  it('.html() => String', () => {
		expect(wrapper.find('.test').html()).toEqual('<div class="ant-list-item test"><div class="ant-list-item-content ant-list-item-content-single">Australian walks 100km after outback crash.</div></div>')
  })

  /**
	 * 返回当前ShallowWrapper对应的ReactComponent
   */
  it('.instance() => ReactComponent', () => {
		expect(wrapper.instance()).toBeInstanceOf(ListDemo)
  })

  /**
	 * 返回当前ShallowWrapper是否与提供的选择器匹配。
   */
  it('.is(selector) => Boolean', () => {
		expect(wrapper.find('Item').at(3).is('.test')).toEqual(true)
  })

  /**
	 * 返回当前ShallowWrapper上的key值
   */
  it('.key() => String', () => {
		expect(wrapper.find('Item').at(0).key()).toBeNull()
  })

  /**
	 * 返回最后一个ShallowWrapper
   */
  it('.last() => ShallowWrapper', () => {
		expect(wrapper.find('Item').last()).toHaveLength(1)
  })

  /**
	 * 将当前ShallowWrapper映射到另一个数组
   */
  it('.map(fn) => Array<Any>', () => {
		expect(wrapper.find('Item').map(node => node.hasClass('test'))).toEqual([false, false, false, true, false])
  })

  /**
	 * 返回node是否与当前ShallowWrapper相似，忽略属性
   */
  it('.matchesElement(node) => Boolean', () => {
		expect(wrapper.find('.test').matchesElement(<Item>Australian walks 100km after outback crash.</Item>)).toEqual(true)
  })

  /**
	 * 返回此包装器的当前节点的名称。如果它是复合组件，则这将是最顶层渲染组件的名称。如果它是本机DOM节点，则它将是标记名称的字符串。
	 * 如果是的话null，那就是null。
	 * 返回名称的优先顺序是：type.displayName- > type.name- > type。
	 * 注意：只能在单个节点的包装器上调用
   */
  it('.name() => String|null', () => {
		expect(wrapper.name()).toEqual('List')
		expect(wrapper.find('span').name()).toEqual('span')
  })

  /**
	 *返回不包含selector的新ShallowWrapper
   */
  it('.not(selector) => ShallowWrapper', () => {
		expect(wrapper.find('Item').not('.test')).toHaveLength(4)
  })

  /**
	 * 返回包含当前包装器中节点的直接父级的ShallowWrapper
   */
  it('.parent() => ShallowWrapper', () => {
		expect(wrapper.find('span').parent().is('Item')).toEqual(true)
  })
})
