import UserIcon from "./UserIcon";
import UserName from "./UserName";
import MoreIcon from "./MoreIcon";
import Tweet from "./Tweet";
import Comments from "./Comments";
import Retweet from "./Retweet";
import Likes from "./Likes";
import Reach from "./Reach";
import Share from "./Share";


function TweetContainer(){
    return(
      <div style={{ display: 'flex' }}>
        <UserIcon className="child1"/>
        <div className="child2">
            <div className="row1" style={{ display: 'flex', marginBottom: 10 }}>
                <UserName />
                <MoreIcon />
            </div>

            <Tweet className="row2"/>

            <div className="row3" style={{display: 'flex', width: '25vw', justifyContent: 'space-between'}}>
                <Comments />
                <Retweet />
                <Likes />
                <Reach />
                <Share />
            </div>
        </div>
      </div>
    )
  }
  
  
export default TweetContainer;