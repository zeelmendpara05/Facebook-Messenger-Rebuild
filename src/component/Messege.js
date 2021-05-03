import { Avatar, Card, CardContent, Typography } from '@material-ui/core'
import React,{ forwardRef } from 'react';
import '../component/Messege.css';

const Messege = forwardRef(({username,messege},ref) => {

    const isuser = username === messege.username;
    return (
        <div ref={ref} className={`messege_card ${isuser && 'messege_user'}`}>
            <Avatar className={isuser ? "messege_userCardAvtar" : "messege_guestCardAvtar"} alt={messege.username} />
            <Card className={isuser ? "messege_userCard" : "messege_guestCard"}>
                <CardContent>
                    <Typography
                        variant="h7"
                        component="h2"
                    >
                       {!isuser && `${messege.username}: `} {messege.messege}
                    </Typography>
                </CardContent>
            </Card>

        </div>
    )
})

export default Messege
