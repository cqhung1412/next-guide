import Image from 'next/image';
import Link from 'next/link';

import { Meal } from "@/types/meal";
import classes from '@/components/meals/item.module.css'

interface MealItemProps {
  meal: Meal;
}

export default function MealItem({ meal }: MealItemProps) {
  const { slug, title, image_path, summary, creator } = meal;
  return (
    <article className={classes.meal}>
      <header>
        <div className={classes.image}>
          <Image src={image_path} alt={title} fill />
        </div>
        <div className={classes.headerText}>
          <h2>{title}</h2>
          <p>by {creator}</p>
        </div>
      </header>
      <div className={classes.content}>
        <p className={classes.summary}>{summary}</p>
        <div className={classes.actions}>
          <Link href={`/meals/${slug}`}>View details</Link>
        </div>
      </div>
    </article>
  )
}