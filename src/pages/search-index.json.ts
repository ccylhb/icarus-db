import type { APIRoute } from "astro";
import weapons from "../data/icarus_weapons.json";
import food from "../data/icarus_food.json";
import creatures from "../data/icarus_creatures.json";

interface Entry {
  t: string;
  u: string;
  k: string;
  i?: string;
}

export const GET: APIRoute = () => {
  const tools: Entry[] = [
    { t: "Melee Damage Rankings", u: "/rankings/#melee", k: "Tool" },
    { t: "Ranged Damage Rankings", u: "/rankings/#ranged", k: "Tool" },
    { t: "Creature HP Rankings", u: "/rankings/#creatures", k: "Tool" },
    { t: "Longest-Lasting Food", u: "/rankings/#food", k: "Tool" },
    { t: "Food Planner", u: "/food-planner/", k: "Tool" },
    { t: "All pages A–Z", u: "/search/", k: "Tool" },
  ];
  const items: Entry[] = [
    ...weapons.map((w: any) => ({ t: w.title, u: `/weapons/${w.slug}/`, k: "Weapon", i: w.icon || "" })),
    ...food.map((f: any) => ({ t: f.title, u: `/food/${f.slug}/`, k: "Food", i: f.icon || "" })),
    ...creatures.map((c: any) => ({ t: c.title, u: `/creatures/${c.slug}/`, k: "Creature", i: c.icon || "" })),
  ];
  return new Response(JSON.stringify({ tools, items }), {
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });
};
