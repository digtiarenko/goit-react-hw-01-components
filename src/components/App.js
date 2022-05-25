import Profile from './SocialProfile/Profile';
import user from './SocialProfile/user.json';

import Statistics from './Statistics/Statistics';
import data from './Statistics/data.json';

import FriendList from './FriendList/FriendList';
import friends from './FriendList/friends.json';

import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from './TransactionHistory/transactions.json';

export const App = () => {
  return (
    <div>
      <h1> Завдання 1 </h1>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <h1> Завдання 2 </h1>
      <Statistics stats={data} />
      <h1> Завдання 3 </h1>
      <FriendList friends={friends} />
      <h1> Завдання 4 </h1>
      <TransactionHistory items={transactions} />;
    </div>
  );
};
