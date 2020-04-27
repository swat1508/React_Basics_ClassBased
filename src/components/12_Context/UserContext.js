import React from 'react';

const UserContext = React.createContext('ABCD');

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export {UserProvider,UserConsumer};
export default UserContext; //needed for contextType - see readme file