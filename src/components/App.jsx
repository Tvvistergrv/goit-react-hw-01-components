import user from './user';
import data from './data';
import friends from './friends'
import transactions from './transactions'
import { Profile } from './profile/Profile';
import { Statistics} from './statistics/Statistics';
import { FriendList } from './friendList/FriendList';
import { TransactionHistory } from './transaction/TransactionHistory';




export const App = () => {
  return (
    <>
    <Profile 
    key={user.username}
    username={user.username}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    stats={user.stats}/>
    <Statistics
    key={data.id}
    title='UPLOAD STATS'
    stats={data}/>
    <FriendList
    friends={friends}/>
    <TransactionHistory items={transactions} />
    </>
    
    );
  
};

export default App