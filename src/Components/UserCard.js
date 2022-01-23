import React from "react";
import {Card, CardBody} from "reactstrap";

const UserCard = ({user}) => {
    return (
        <Card className = "text-center mt-3 mb-4">
        <img src={user.avatar_url} className="img-thumbnail" alt="avatar" />
        <CardBody>
        <div className="text-primary"><a href={user.html_url} target="_blank"><h1>{user.name}</h1></a></div>
        <div className="text-primary"><h3>{user.location}</h3></div>
        <div className="text-info"><h3>Available To Hire :{user.hireable ? "YES" : "NOPE"}</h3></div>
        <div className="text-primary">{user.bio}</div>
        </CardBody>
        </Card>
    )
}

export default UserCard;