export default async function MealDetailsPage({ params }: { params: { mealSlug: string } }) {
  const { mealSlug } = await params
  return (
    <div>
      <h1>The Meal</h1>
      <p>{mealSlug}</p>
    </div>
  )
}