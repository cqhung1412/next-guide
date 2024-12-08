import Image from 'next/image';

import mealIcon from '@/assets/icons/meal.png';
import communityIcon from '@/assets/icons/community.png';
import eventsIcon from '@/assets/icons/events.png';
import classes from './page.module.css';

export default function CommunityPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>One shared passion for <span className={classes.highlight}>Food</span></h1>
        <p>Join our community and share your favorite recipes</p>
      </header>
      <main className={classes.main}>
        <h2>Community Perks</h2>
        <ul className={classes.perks}>
          <li>
            <Image src={mealIcon} alt="Meal Icon" />
            <p>Share and discover new recipes</p>
          </li>
          <li>
            <Image src={communityIcon} alt="Community Icon" />
            <p>Connect with other foodies</p>
          </li>
          <li>
            <Image src={eventsIcon} alt="Events Icon" />
            <p>Participate in exclusive events</p>
          </li>
        </ul>
      </main>
    </>
  )
}