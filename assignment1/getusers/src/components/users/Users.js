import React,{useEffect,useState} from 'react'
import {UserContainer} from "./styled"
import {CardContainer} from "./card/styled"
import Card from "./card/Card"

function Users({users,loadingState}) {

    return (
      <UserContainer>
        {users.length !== 0 && !loadingState &&  (
          <CardContainer>
            {users.map((user) => {
              return (
                <Card
                  key={user.id}
                  firstName={user.first_name}
                  lastName={user.last_name}
                  profile={user.avatar}
                  email={user.email}
                />
              );
            })}
          </CardContainer>
        )}
        {!loadingState && users.length ===0 && <p>Click on Get user button to list all the users</p>}
        {loadingState && <div className="loader"></div>}
      </UserContainer>
    );
}

export default Users
