
import { food } from "./Data/lgptProject";
import Check from "./components/check";

export default function Home() {
  return (
<div className="min-h-screen bg-gray-50 p-6">
<h1 className="text-3xl font-bold text-center mb-8">🍴 เมนูอาหารแนะนำ</h1>
<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
{food.map((food) => (
<div
key={food.Code}
className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
>
<img
src={food.Photo}
alt={food.Name}
className="h-48 w-full object-cover"
/>
<div className="p-4">
<h2 className="text-xl font-semibold mb-2">{food.Name}</h2>
<p className="text-gray-600 text-sm mb-3 line-clamp-3">
{food.Description}
</p>
<p className="text-gray-800 font-medium">ร้าน: {food.Restaurant}</p>
<p className="text-lg font-bold text-green-600 mt-2">
฿{food.Price.toFixed(2)}
</p>
<div className="mt-3 flex flex-wrap gap-2">
 
<div className="mt-3 flex flex-col gap-1">
  <Check isBest={food.Bestseller} text="Bestseller" />
  <Check isBest={food.Suggestion} text="Suggestion" />
</div>

</div>
</div>
</div>
))}
</div>
</div>
);
}
