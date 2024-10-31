import React from "react";
import Notification from "./Notification";

const reservedNotifications=[
    {
        id:1,
        message:"호날두와 신밧두의 모험",
    },
    {
        id:2,
        message:"비니시우스 NO 발롱도르? 축구가 창피하다 브라질 동료 히샬리송 오늘 축구 잃었어 황당 주장",
    },
    {
        id:3,
        message:"Mikel Arteta는 Ethan Nwaneri의 질문을 일축하고 아스날 원더키드에 대해 열광했습니다",
    },
];

var timer;

class NotificationList extends React.Component{
    constructor(props){
        super(props);

        this.state={
            notifications:[],
        };
    }

    componentDidMount(){
        const {notifications}=this.state;

        timer = setInterval(()=>{
            if(notifications.length<reservedNotifications.length){
                const index = notifications.length;
                notifications.push(reservedNotifications[index]);
                this.setState({
                    notifications:notifications,
                });
            }
            else{
                this.setState({
                    notifications:[],
                });
                clearInterval(timer);
            }
        },1000);
    }

    componentWillUnmount(){
        if(timer){
            clearInterval(timer);
        }
    }

    render(){
        return(
            <div>
                {this.state.notifications.map((notification)=>{
                    return <Notification message={notification.message} key={notification.id} id={notification.id}></Notification>
                })}
            </div>
        ); 
    }
}

export default NotificationList;