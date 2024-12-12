import MealItem from './item';
import classes from './meal-grid.module.css'
import { Meal } from '@/types/meal'

interface MealGridProps {
  meals: Meal[];
}

export default function MealGrid({ meals }: MealGridProps) {
  return (
    <ul className={classes.meals}>
      {meals.map(meal => (
        <li key={meal.id}><MealItem meal={meal} /></li>
      ))}
    </ul>
  )
}