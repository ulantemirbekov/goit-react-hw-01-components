import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/Transactions/TransactionHistory';
import Container from './components/Container/Container';

import user from './data/user.json';
import statisticalData from './data/statistical-data.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';


const App = () => {
    return (
        <Container>
            <Profile
                name={user.name}
                tag={user.tag}
                location={user.location}
                avatar={user.avatar}
                stats={user.stats}
            />

            <Statistics
                title="Upload stats"
                stats={statisticalData}
            />
            <Statistics stats={statisticalData} />

            <FriendList friends={friends} />

            <TransactionHistory items={transactions} />
        </Container>
    );
};

export default App;