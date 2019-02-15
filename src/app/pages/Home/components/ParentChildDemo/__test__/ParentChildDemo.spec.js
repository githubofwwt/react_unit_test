import React from 'react'
import {shallow} from 'enzyme'
import Parent, {Child} from '../Parent'

describe('ParentChildDemo', () => {
  const parentWrapper = shallow(<Parent />)
  const childWrapper = shallow(<Child msg={'123'} />)

  /**
   * 设置根ShallowWrapper的props并重新渲染的方法。
   * 当您想要通过更改道具来测试组件随时间变化的行为时非常有用。例如，调用它将调用componentWillReceiveProps生命周期方法。
   */
  it('.setProps(nextProps[, callback]) => Self', () => {
    expect(childWrapper.props().title).toBe('123')
    childWrapper.setProps({msg: 'abc'})
    expect(childWrapper.props().title).toBe('abc')
  })

  /**
   * 一种调用setState()根组件实例的方法，类似于组件定义中的方式，并重新呈现。
   * 此方法对于在难以实现的状态下测试组件非常有用，但应谨慎使用。
   * 如果可能，您应该利用组件的外部API（可以通过.instance()它访问），以使其进入您想要测试的任何状态，以便尽可能准确地进行测试。
   * 然而，这并不总是实用的。
   * 注意：只能在也是根实例的包装器实例上调用。
   */
  it('.setState(nextState[, callback]) => Self', () => {
    expect(parentWrapper.find('Input').props().value).toBe('')
    parentWrapper.setState({msg: 'qwe'})
    expect(parentWrapper.find('Input').props().value).toBe('qwe')
  })

  /**
   * Shallow呈现当前节点并返回一个浅包装器。
   * 注意：只能在单个节点的包装器上调用。
   */
  it('.shallow([options]) => ShallowWrapper', () => {
    expect(parentWrapper.find('Child').shallow()).toHaveLength(1)
  })

  /**
   * 模拟事件
   */
  it('.simulate(event[, ...args]) => Self', () => {
    parentWrapper.find('Input').simulate('change', {target: {value: '123'}})
    expect(parentWrapper.find('Input').props().value).toBe('123')
  })
})
