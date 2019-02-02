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
})
