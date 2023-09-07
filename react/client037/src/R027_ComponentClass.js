import React, { Component } from 'react';

class R027_ComponentClass extends Component {
    constructor(props) {
      super(props)
      this.state = {
        StateString: 'react',
        StateArrayObj: ['react', { react: '200'}]
      }
    }
    buttonClick = (type) => {
      if(type === 'String') {
        this.setState({StateString: 'react'});
      }else{
        this.setState({StateArrayObj: ['react', { react: '200'}] });
      }
    }
    render(){
      console.log('render() 실행')
      return (
        <div>
          <button onClick={e => this.buttonClick('String')}>문자변경{this.state.StateString}</button>
          <button onClick={e => this.buttonClick('ArrayObject')}>객체변경{this.state.StateString}</button>
        </div>
      ) 
    }
}
export default R027_ComponentClass;