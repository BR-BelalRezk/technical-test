import { getAuthCookie } from "@/services/actions";

export default async function Home() {
  console.log(await getAuthCookie());
  return <div>Home</div>;
}
