import React from "react";

const styles={
    wrapper:{
        margin:8,
        padding:8,
        display:"flex",
        flexDirection:"row",
        border:"1px solid grey",
        borderRadius:16,
    },
    messageText:{
        color:"black",
        fontSize:16,
    }
};

class Notification extends React.Component{
    constructor(props){
        super(props);

        this.state={};
    }
    componentDidMount(){
        console.log(`생성 () 콜리드 ${this.props.id}`);
    }
    componentDidUpdate(){
        console.log(`업데이트 () 콜리드 ${this.props.id}`);
    }
    componentWillUnmount(){
        console.log(`삭제 () 콜리드 ${this.props.id}`);
    }
    render(){
        return(
            <div style={styles.wrapper}>
                <span style={styles.messageText}>
                    {this.props.message}
                </span>
            </div>
        )
    }
}

export default Notification;