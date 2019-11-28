import React,{Component} from 'react';


export default class TodoApp extends Component {
    constructor(props){
        super(props);
        this.state= {
            term:'',
            items:localStorage.getItem('key') ? JSON.parse(localStorage.getItem('key')) : [],
        }
    }

    onChange = (event) => {
        this.setState({term:event.target.value});

    }
    onSubmit = (event) => {
        event.preventDefault();
        if(this.state.term.length !==0){
            this.state.items.push(this.state.term)
            this.setState({
                items:this.state.items
            });
            localStorage.setItem('key',JSON.stringify(this.state.items));
        }
    }
    onDelete =(event) => {
        event.preventDefault();
        var index=event.target.getAttribute('data-key');
        console.log(index);
        let list=JSON.parse(localStorage.getItem('key'));
        list.splice(index,1);
        this.setState({
            items:list
        });
        localStorage.setItem('key',JSON.stringify(list));
        
    }

    render(){
        return(
            <div>
                <form onSubmit={this.onSubmit}>
                <input type="text" onChange={this.onChange} />
                <button type="submit" >Click Here</button>
                </form>
                <ul>{this.state.items.map((item,index) =>
                    <li key={index}>{item}<input type="button" onClick={this.onDelete} value="X" data-key={index}/></li>
                )}</ul>
            </div>
        );
    }
}